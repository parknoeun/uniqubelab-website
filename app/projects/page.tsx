'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectVis from '@/components/ProjectVis';
import { UQ_PROJECTS } from '@/data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const filters = [
    { key: 'all', label: '전체' },
    { key: 'lms', label: '엔터프라이즈 LMS' },
    { key: 'public', label: '공공' },
    { key: 'custom', label: '커스텀 웹' },
    { key: 'training', label: '기업교육' },
  ];
  const visible = filter === 'all' ? UQ_PROJECTS : UQ_PROJECTS.filter(p => p.typeKey === filter);

  return (
    <>
      <section className="projects-page-hero">
        <div className="uq-container">
          <div className="label-kr"><span className="rule"/>Projects</div>
          <h1>공급 사례.</h1>
          <p>2018년 이후 유니큐브랩이 설계·구축·운영한 42건의 프로덕션 시스템. 아래는 대표 사례 6건입니다.</p>
        </div>
      </section>
      <section className="projects-page-body">
        <div className="uq-container">
          <div className="filters">
            {filters.map(f => (
              <button key={f.key} className={'filter-pill ' + (filter === f.key ? 'active' : '')} onClick={() => setFilter(f.key)}>
                {f.label} <span style={{opacity:0.5, marginLeft:4, fontFamily:'var(--font-mono)', fontSize:11}}>{f.key === 'all' ? UQ_PROJECTS.length : UQ_PROJECTS.filter(p => p.typeKey === f.key).length}</span>
              </button>
            ))}
          </div>
          <div className="pgrid-light">
            {visible.map((p, i) => (
              <Link href={`/projects/${p.id}`} key={p.id} style={{textDecoration:'none', color:'inherit'}}>
                <article className="pcard-light">
                  <ProjectVis index={i}/>
                  <div className="pcard-light-body">
                    <div className="pcard-meta">
                      <span className="pcard-sector">{p.sector} · {p.year}</span>
                      <span className={'pcard-status ' + p.status}>● {p.statusLabel}</span>
                    </div>
                    <h3 className="pcard-title">{p.title}</h3>
                    <p className="pcard-desc">{p.description}</p>
                    <div className="pcard-metrics">
                      {p.metrics.map(m => (
                        <div key={m.label}>
                          <span className="pcard-metric-val">{m.value}</span>
                          <span className="pcard-metric-lbl">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
