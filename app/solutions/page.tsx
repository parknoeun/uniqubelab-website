import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { UQ_SOLUTIONS } from '@/data/solutions';

export const metadata: Metadata = {
  title: '솔루션 · 유니큐브랩',
  description: '즉시 도입하는 유니큐브랩의 SaaS. 검증된 엔터프라이즈 요건을 패키지로 제공합니다.',
};

export default function SolutionsPage() {
  return (
    <div>
      <section className="sol-hero">
        <div className="uq-container">
          <div className="label-kr"><span className="rule"/>Solutions · SaaS</div>
          <h1 className="sol-hero-title">즉시 도입하는<br/><span className="accent">유니큐브랩의 SaaS</span>.</h1>
          <p className="sol-hero-sub">구축 프로젝트와 병행해 운영 중인 자사 SaaS 솔루션. 검증된 엔터프라이즈 요건을 패키지로 제공합니다.</p>
        </div>
      </section>
      <section className="sol-list-sec">
        <div className="uq-container">
          <div className="sol-list">
            {UQ_SOLUTIONS.map((s, i) => (
              <Link href={`/solutions/${s.id}`} key={s.id} className="sol-card">
                <div className="sol-card-num">{String(i+1).padStart(2,'0')}</div>
                <div className="sol-card-body">
                  <div className="sol-card-head">
                    <div>
                      <div className="sol-card-brand">{s.brand}</div>
                      <div className="sol-card-tag">{s.tagline}</div>
                    </div>
                    <span className={'pcard-status ' + s.status}>● {s.statusLabel}</span>
                  </div>
                  <p className="sol-card-desc">{s.summary}</p>
                  <div className="sol-card-foot">
                    <div className="sol-card-mini">
                      {s.hero.highlights.map(h => (
                        <div key={h.lbl}><span className="sol-card-mini-val">{h.val}</span><span className="sol-card-mini-lbl">{h.lbl}</span></div>
                      ))}
                    </div>
                    <span className="sol-card-cta">자세히 보기 <Icon name="arrow-right" size={14}/></span>
                  </div>
                </div>
              </Link>
            ))}
            <div className="sol-card sol-card-soon">
              <div className="sol-card-num">+</div>
              <div className="sol-card-body">
                <div className="sol-card-brand" style={{color:'var(--slate-500)'}}>차기 솔루션 개발 중</div>
                <p className="sol-card-desc" style={{color:'var(--slate-500)'}}>검증된 사례를 표준화해 추가 SaaS로 공개 예정입니다. 특정 요건이 있으시다면 문의 주세요.</p>
                <Link href="/contact" className="sol-card-cta">요구사항 전달하기 <Icon name="arrow-right" size={14}/></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
