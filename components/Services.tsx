import Icon from './Icon';
import { UQ_SERVICES } from '@/data/projects';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="uq-container">
        <div className="services-head">
          <div>
            <div className="label-kr"><span className="rule"/>서비스</div>
            <h2>End-to-end 시스템 통합, 네 가지 영역.</h2>
          </div>
          <p className="sub">컨설팅·설계·개발·배포·운영까지 한 조직이 책임집니다. 외부 인력 재하청 없이.</p>
        </div>
        <div className="services-list">
          {UQ_SERVICES.map(s => (
            <div key={s.num} className="service-row">
              <span className="service-num">{s.num}</span>
              <div><h3 className="service-title">{s.title}</h3></div>
              <div>
                <p className="service-desc">{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
                </div>
              </div>
              <div className="service-arrow"><Icon name="arrow-right" size={18}/></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}