'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import ProjectSwiper from './ProjectSwiper';
import { UQ_PROJECTS } from '@/data/projects';

export default function Projects() {
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
    <section className="projects-section" id="projects">
      <div className="uq-container">
        <div className="projects-head">
          <div>
            <div className="label-kr"><span className="rule"/>Case studies</div>
            <h2>숫자로 검증한 레퍼런스.</h2>
          </div>
          <p className="sub">프로젝트는 과장 없이 숫자로 공개합니다. 각 사례는 공급 범위·기간·팀 규모까지 기록합니다.</p>
        </div>
        <div className="filters">
          {filters.map(f => (
            <button key={f.key} className={'filter-pill ' + (filter === f.key ? 'active' : '')} onClick={() => setFilter(f.key)}>
              {f.label} <span style={{opacity:0.5, marginLeft:4, fontFamily:'var(--font-mono)', fontSize:11}}>{f.key==='all' ? UQ_PROJECTS.length : UQ_PROJECTS.filter(p => p.typeKey === f.key).length}</span>
            </button>
          ))}
        </div>
        <ProjectSwiper projects={visible} variant="dark" />
        <div style={{textAlign:'center', marginTop:48}}>
          <Link href="/projects" className="btn btn-sec btn-lg" style={{background:'transparent', color:'#fff', borderColor:'var(--slate-700)'}}>전체 프로젝트 보기 <Icon name="arrow-right" size={14}/></Link>
        </div>
      </div>
    </section>
  );
}