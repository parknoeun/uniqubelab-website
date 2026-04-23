import Link from 'next/link';
import Icon from './Icon';
import CubeGrid from './CubeGrid';

export default function Hero() {
  const techs = ['React 18', 'TypeScript', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Kubernetes', 'Kafka', 'Redis', 'Okta SSO', 'SCORM 2004', 'xAPI', 'WCAG 2.1 AA', 'ISO 27001', 'SAP SuccessFactors', 'Oracle EBS', 'Next.js', 'Python', 'Airflow'];
  const marquee = [...techs, ...techs];

  return (
    <section className="hero">
      <div className="hero-bg-grid"/>
      <div className="uq-container">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-eyebrow"><span className="dot"/>엔터프라이즈 · 공공 SI · 2018년부터</div>
            <h1 className="hero-title">
              증명된 시스템으로<br/>
              <span className="accent">쌓아 올립니다.</span>
            </h1>
            <p className="hero-sub">유니큐브랩은 기업·공공 기관의 학습 플랫폼, 교육 시스템, 맞춤형 웹 애플리케이션을 설계·구축·운영합니다. 2018년 이후 42건의 프로덕션 공급, 평균 가동률 99.95%.</p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-pri btn-lg">상담 요청하기 <Icon name="arrow-right" size={16}/></Link>
              <Link href="/projects" className="btn btn-sec btn-lg">사례 보기 <Icon name="arrow-up-right" size={14}/></Link>
            </div>
            <div className="hero-meta">
              <div><span className="hero-meta-val"><span className="blue">42</span></span><span className="hero-meta-lbl">누적 공급 사례</span></div>
              <div><span className="hero-meta-val">99.95<span style={{fontSize:16}}>%</span></span><span className="hero-meta-lbl">평균 가동률</span></div>
              <div><span className="hero-meta-val">12<span style={{fontSize:16}}>주</span></span><span className="hero-meta-lbl">평균 공급 기간</span></div>
              <div><span className="hero-meta-val">8<span style={{fontSize:16}}>년</span></span><span className="hero-meta-lbl">기술 조직 운영</span></div>
            </div>
          </div>
          <CubeGrid/>
        </div>
        <div className="hero-marquee">
          <span className="hero-marquee-label">◉ Stack in production</span>
          <div style={{overflow:'hidden', flex:1}}>
            <div className="hero-marquee-track">
              {marquee.map((t, i) => <span key={i}>{t} ·</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}