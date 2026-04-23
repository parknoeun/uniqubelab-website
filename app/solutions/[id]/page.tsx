import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import { UQ_SOLUTIONS } from '@/data/solutions';

export function generateStaticParams() {
  return UQ_SOLUTIONS.map(s => ({ id: s.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return params.then(({ id }) => {
    const s = UQ_SOLUTIONS.find(x => x.id === id);
    return {
      title: s ? `${s.brand} · 유니큐브랩` : '솔루션 · 유니큐브랩',
      description: s?.summary,
    };
  });
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = UQ_SOLUTIONS.find(x => x.id === id);
  if (!s) notFound();

  return (
    <div>
      <section className="sol-det-hero">
        <div className="uq-container">
          <Link href="/solutions" className="back-link">
            <Icon name="arrow-right" size={14} style={{transform:'rotate(180deg)'}}/> 솔루션 목록으로
          </Link>
          <div className="sol-det-head">
            <div>
              <div className="label-kr"><span className="rule"/>{s.brand} · SaaS</div>
              <h1 className="sol-det-title">{s.hero.title1}<br/><span className="accent">{s.hero.title2}</span></h1>
              <p className="sol-det-desc">{s.hero.desc}</p>
              <div className="hero-cta" style={{marginTop:32}}>
                <Link href="/contact" className="btn btn-pri btn-lg">데모 요청하기 <Icon name="arrow-right" size={16}/></Link>
                <a href="#sol-pillars" className="btn btn-sec btn-lg">기능 살펴보기 <Icon name="arrow-up-right" size={14}/></a>
              </div>
            </div>
            <div className="sol-det-right">
              {s.hero.highlights.map(h => (
                <div key={h.lbl} className="sol-det-highlight">
                  <div className="sol-det-hl-val">{h.val}</div>
                  <div className="sol-det-hl-lbl">{h.lbl}</div>
                </div>
              ))}
              <div className="sol-det-badge">
                <div className="sol-det-badge-dot"/>
                <div>
                  <div className="sol-det-badge-lbl">현재 상태</div>
                  <div className="sol-det-badge-val">{s.statusLabel} · 멀티테넌트 운영</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sol-pillars" className="sol-pillars-sec">
        <div className="uq-container">
          <div className="sol-sec-head">
            <div className="label-kr"><span className="rule"/>핵심 기능</div>
            <h2 className="sol-sec-title">6개 영역으로 구성된<br/><span className="accent">엔터프라이즈 기능 세트</span>.</h2>
          </div>
          <div className="sol-pillars-grid">
            {s.pillars.map(p => (
              <article key={p.num} className="sol-pillar">
                <div className="sol-pillar-top">
                  <span className="sol-pillar-num">{p.num}</span>
                  <h3 className="sol-pillar-title">{p.title}</h3>
                </div>
                <p className="sol-pillar-desc">{p.desc}</p>
                <ul className="sol-pillar-list">
                  {p.items.map(it => (
                    <li key={it}><Icon name="check" size={16} className="check"/> {it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-integ-sec">
        <div className="uq-container">
          <div className="sol-sec-head">
            <div className="label-kr"><span className="rule"/>연동</div>
            <h2 className="sol-sec-title">기존 업무 도구와<br/>바로 연결합니다.</h2>
          </div>
          <div className="sol-integ-grid">
            {s.integrations.map(name => (
              <div key={name} className="sol-integ-cell">{name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-specs-sec">
        <div className="uq-container">
          <div className="sol-specs-grid">
            <div>
              <div className="label-kr"><span className="rule"/>기술 스펙</div>
              <h2 className="sol-sec-title" style={{marginTop:12}}>엔터프라이즈<br/>요건 기본 탑재.</h2>
              <p className="sol-specs-note">모든 테넌트는 ISO 27001 인증 환경에서 격리 운영됩니다. 금융·공공 섹터의 감사 요건을 충족하도록 설계되었습니다.</p>
            </div>
            <div className="sol-specs-right">
              {s.specs.map(sp => (
                <div key={sp.label} className="sol-spec-row">
                  <span className="sol-spec-lbl">{sp.label}</span>
                  <span className="sol-spec-val">{sp.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sol-proc-sec">
        <div className="uq-container">
          <div className="sol-sec-head">
            <div className="label-kr"><span className="rule"/>도입 프로세스</div>
            <h2 className="sol-sec-title">2주 내 파일럿,<br/><span className="accent">1개월 내 전사 오픈</span>.</h2>
          </div>
          <div className="sol-proc-grid">
            {s.process.map((p, i) => (
              <div key={p.num} className="sol-proc-step">
                <div className="sol-proc-step-top">
                  <span className="sol-proc-step-num">{p.num}</span>
                  <span className="sol-proc-step-dur">{p.duration}</span>
                </div>
                <h3 className="sol-proc-step-title">{p.title}</h3>
                <p className="sol-proc-step-desc">{p.desc}</p>
                {i < s.process.length - 1 && <div className="sol-proc-step-line"/>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-cta-sec">
        <div className="uq-container">
          <div className="sol-cta-box">
            <div>
              <div className="label-kr" style={{color:'var(--blue-200)'}}><span className="rule" style={{background:'var(--blue-400)'}}/>Get started</div>
              <h2 className="sol-cta-title">{s.brand} 데모를<br/>요청하세요.</h2>
              <p className="sol-cta-desc">샘플 테넌트로 실제 기능을 체험해보실 수 있습니다. 기술 담당자가 직접 안내드립니다.</p>
            </div>
            <div className="sol-cta-actions">
              <Link href="/contact" className="btn btn-pri btn-lg">데모 요청 <Icon name="arrow-right" size={16}/></Link>
              <Link href="/solutions" className="btn btn-sec-dark btn-lg">다른 솔루션 보기</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
