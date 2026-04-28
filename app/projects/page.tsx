'use client';

import { useState } from 'react';
import ProjectSwiper from '@/components/ProjectSwiper';
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
          <ProjectSwiper projects={visible} variant="light" />
        </div>
      </section>
    </>
  );
}
