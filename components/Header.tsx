'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Icon from './Icon';
import { UQ_SOLUTIONS } from '@/data/solutions';

export default function Header() {
  const pathname = usePathname();
  const solutions = UQ_SOLUTIONS;

  const items = [
    { key: '/', label: '홈' },
    { key: '/about', label: '회사 소개' },
    { key: '/solutions', label: '솔루션', hasMenu: true },
    { key: '/projects', label: '프로젝트' },
    { key: '/contact', label: '문의' },
  ];

  const isActive = (key: string) => {
    if (key === '/') return pathname === '/';
    return pathname.startsWith(key);
  };

  return (
    <header className="uq-header">
      <div className="uq-container uq-header-inner">
        <Link className="uq-brand" href="/">
          <Image src="/assets/logo.svg" alt="Uniqube Lab" width={120} height={30} style={{ height: 30, width: 'auto' }} />
          <span className="uq-brand-kr">유니큐브랩</span>
        </Link>
        <nav className="uq-nav">
          {items.map(it =>
            it.hasMenu ? (
              <div key={it.key} className="uq-nav-menu-wrap">
                <Link href="/solutions" className={(isActive(it.key) ? 'active ' : '') + 'uq-nav-has-menu'}>
                  {it.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{marginLeft:4}}><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <div className="uq-nav-dropdown">
                  <div className="uq-nav-dd-inner">
                    <div className="uq-nav-dd-lbl">Active SaaS</div>
                    {solutions.map(s => (
                      <Link key={s.id} href={`/solutions/${s.id}`} className={'uq-nav-dd-item ' + (pathname === `/solutions/${s.id}` ? 'active' : '')}>
                        <div className="uq-nav-dd-item-mark"/>
                        <div>
                          <div className="uq-nav-dd-item-brand">{s.brand}</div>
                          <div className="uq-nav-dd-item-tag">{s.tagline}</div>
                        </div>
                        <span className="uq-nav-dd-item-status">● {s.statusLabel}</span>
                      </Link>
                    ))}
                    <div className="uq-nav-dd-item uq-nav-dd-item-soon">
                      <div className="uq-nav-dd-item-mark uq-nav-dd-item-mark-soon">+</div>
                      <div>
                        <div className="uq-nav-dd-item-brand">차기 솔루션 준비 중</div>
                        <div className="uq-nav-dd-item-tag">검증된 사례를 SaaS로 표준화 중입니다.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={it.key} href={it.key} className={isActive(it.key) ? 'active' : ''}>{it.label}</Link>
            )
          )}
        </nav>
        <div className="uq-header-actions">
          <Link href="/projects" className="btn btn-sec">포트폴리오</Link>
          <Link href="/contact" className="btn btn-pri">상담 요청 <Icon name="arrow-right" size={14}/></Link>
        </div>
      </div>
    </header>
  );
}
