'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import ProjectVis from './ProjectVis';
import type { Project } from '@/data/projects';

interface ProjectSwiperProps {
  projects: Project[];
  variant: 'dark' | 'light';
}

function DarkCard({ p, i }: { p: Project; i: number }) {
  return (
    <Link href={`/projects/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article className="pcard" style={{ height: '100%' }}>
        <ProjectVis index={i} />
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
      </article>
    </Link>
  );
}

function LightCard({ p, i }: { p: Project; i: number }) {
  return (
    <Link href={`/projects/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article className="pcard-light" style={{ height: '100%' }}>
        <ProjectVis index={i} />
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
  );
}

export default function ProjectSwiper({ projects, variant }: ProjectSwiperProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const Card = variant === 'dark' ? DarkCard : LightCard;
  const gridClass = variant === 'dark' ? 'pgrid' : 'pgrid-light';

  if (!isMobile) {
    return (
      <div className={gridClass}>
        {projects.map((p, i) => <Card key={p.id} p={p} i={i} />)}
      </div>
    );
  }

  return (
    <div className="project-swiper-wrap">
      <Swiper
        modules={[Pagination, FreeMode]}
        spaceBetween={12}
        slidesPerView={1.15}
        freeMode
        pagination={{ clickable: true }}
        style={{ paddingBottom: 40 }}
      >
        {projects.map((p, i) => (
          <SwiperSlide key={p.id}>
            <Card p={p} i={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
