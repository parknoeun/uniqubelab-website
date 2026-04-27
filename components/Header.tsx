'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Icon from './Icon';
import { UQ_SOLUTIONS } from '@/data/solutions';

export default function Header() {
  const pathname = usePathname();
  const solutions = UQ_SOLUTIONS;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const items = [
    { key: '/', label: '홈' },
    { key: '/about', label: '회사 소개' },
    { key: '/solutions', label: '솔루션' },
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
            it.key === '/solutions' ? (
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
        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="메뉴">
          {mobileOpen ? <Icon name="x" size={22}/> : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMobileOpen(false)}>
          <nav className="mobile-nav" onClick={e => e.stopPropagation()}>
            {items.map(it => (
              <Link key={it.key} href={it.key} className={'mobile-nav-link' + (isActive(it.key) ? ' active' : '')}>
                {it.label}
              </Link>
            ))}
            <div className="mobile-nav-divider"/>
            {solutions.map(s => (
              <Link key={s.id} href={`/solutions/${s.id}`} className="mobile-nav-link mobile-nav-sub">
                {s.brand} <span style={{color:'#22c55e', fontSize:11, marginLeft:8}}>● {s.statusLabel}</span>
              </Link>
            ))}
            <div className="mobile-nav-divider"/>
            <Link href="/contact" className="btn btn-pri btn-lg" style={{width:'100%', justifyContent:'center', marginTop:8}}>
              상담 요청하기 <Icon name="arrow-right" size={16}/>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
