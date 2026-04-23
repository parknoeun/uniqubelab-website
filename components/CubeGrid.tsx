'use client';

import { useState, useEffect, useRef } from 'react';

export default function CubeGrid() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!stageRef.current) return;
      const r = stageRef.current.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5);
      const y = ((e.clientY - r.top) / r.height - 0.5);
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const cubes = [
    { x: 0, y: 0, h: false }, { x: 1, y: 0, h: true }, { x: 2, y: 0, h: false },
    { x: 0, y: 1, h: false }, { x: 1, y: 1, h: false }, { x: 2, y: 1, h: true },
    { x: 0, y: 2, h: true },  { x: 1, y: 2, h: false }, { x: 2, y: 2, h: false },
  ];

  const rotX = 55 + mouse.y * 4;
  const rotZ = -45 + mouse.x * 4;

  return (
    <div className="hero-visual">
      <div className="cube-stage" ref={stageRef}>
        <div className="cube-stage-inner" style={{ transform: `rotateX(${rotX}deg) rotateZ(${rotZ}deg)` }}>
          {cubes.map((c, i) => (
            <div key={i}
                 className={'cube' + (c.h ? ' highlight' : '')}
                 style={{
                   left: `${c.x * 120 + 40}px`,
                   top: `${c.y * 120 + 40}px`,
                   transform: c.h ? `translateZ(${30 + mouse.y * 10}px)` : 'translateZ(0)',
                   transitionDelay: `${i * 30}ms`,
                 }}>
              <div className="cube-face top"><span className="cube-label">{`${String(c.x+1).padStart(2,'0')}:${String(c.y+1).padStart(2,'0')}`}</span></div>
              <div className="cube-face bottom"/>
              <div className="cube-face front"/>
              <div className="cube-face back"/>
              <div className="cube-face left"/>
              <div className="cube-face right"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}