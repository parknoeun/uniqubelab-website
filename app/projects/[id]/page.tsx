import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import ProjectVis from '@/components/ProjectVis';
import { UQ_PROJECTS } from '@/data/projects';

export function generateStaticParams() {
  return UQ_PROJECTS.map(p => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return params.then(({ id }) => {
    const p = UQ_PROJECTS.find(x => x.id === id);
    return {
      title: p ? `${p.title} · 유니큐브랩` : '프로젝트 · 유니큐브랩',
      description: p?.description,
    };
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idx = UQ_PROJECTS.findIndex(x => x.id === id);
  if (idx === -1) notFound();
  const p = UQ_PROJECTS[idx];

  return (
    <section className="detail">
      <div className="uq-container">
        <Link href="/projects" className="back-link">
          <Icon name="arrow-right" size={14} style={{transform:'rotate(180deg)'}}/> 프로젝트 목록으로
        </Link>
        <div className="detail-head">
          <div>
            <div className="label-kr"><span className="rule"/>{p.sector} · {p.year}</div>
            <h1>{p.title}</h1>
            <p className="lead">{p.description}</p>
          </div>
          <div className="detail-summary">
            <div className="detail-summary-row">
              <span className="label-kr">상태</span>
              <span className={'pcard-status ' + p.status} style={{alignSelf:'flex-start', marginTop:4}}>● {p.statusLabel}</span>
            </div>
            <div className="detail-summary-row"><span className="label-kr">공급 기간</span><span className="val">{p.duration}</span></div>
            <div className="detail-summary-row"><span className="label-kr">팀 규모</span><span className="val">{p.team}</span></div>
            <div className="detail-summary-row"><span className="label-kr">고객 섹터</span><span className="val">{p.sector}</span></div>
          </div>
        </div>

        <div className="detail-hero"><ProjectVis index={idx}/></div>

        <div className="detail-grid">
          <div>
            <div className="detail-section"><h2>개요</h2><p>{p.overview}</p></div>
            <div className="detail-section">
              <h2>주요 기능</h2>
              <ul className="feat-list">
                {p.features.map(f => <li key={f}><Icon name="check" size={18} className="check"/> {f}</li>)}
              </ul>
            </div>
          </div>
          <aside className="side">
            <div className="side-block">
              <div className="label-kr">기술 스택</div>
              <div className="side-stack">{p.stack.map(s => <span key={s} className="side-chip">{s}</span>)}</div>
            </div>
            <div className="side-block">
              <div className="label-kr">성과 지표</div>
              {p.metrics.map(m => (
                <div key={m.label} className="side-metric">
                  <span className="side-metric-val">{m.value}</span>
                  <span className="side-metric-lbl">{m.label}<br/><span style={{color:'var(--slate-400)', fontSize:11}}>{m.sub}</span></span>
                </div>
              ))}
            </div>
            <div className="side-block" style={{background:'var(--blue-50)', borderColor:'var(--blue-200)'}}>
              <div className="label-kr" style={{color:'var(--blue-700)'}}>비슷한 프로젝트를 준비 중이신가요?</div>
              <p style={{font:'400 13px/1.55 var(--font-kr)', color:'var(--slate-700)', margin:'0 0 8px'}}>유사 요건의 견적과 일정을 보내드립니다.</p>
              <Link href="/contact" className="btn btn-pri">상담 요청 <Icon name="arrow-right" size={14}/></Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
