import { UQ_PILLARS } from '@/data/projects';

export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="uq-container">
        <div className="manifesto-grid">
          <div className="manifesto-left">
            <div className="label-kr"><span className="rule"/>회사 소개</div>
            <h2 className="manifesto-title">엔지니어가<br/>쓰고 <span className="mark">운영</span>합니다.</h2>
          </div>
          <div>
            <p className="manifesto-body">
              유니큐브랩은 <strong>기획 조직이 아닌 기술 조직</strong>입니다.
              시니어 엔지니어가 직접 설계하고 코드를 쓰며, 오픈 이후에도 운영을 책임집니다.
              &quot;공급 후 끝&quot;이 아닌, 시스템이 작동하는 매일을 함께 설계하기 위해서입니다.
            </p>
            <p className="manifesto-body">
              엔터프라이즈 LMS, 공공 교육 플랫폼, 금융·산업 커스텀 웹.
              세 영역에 집중해 <strong>42건의 프로덕션 시스템</strong>을 공급했고,
              지금도 최근 24개월 평균 <strong>99.95%</strong>의 가동률로 운영 중입니다.
            </p>
            <div className="manifesto-pillars">
              {UQ_PILLARS.map(p => (
                <div key={p.num} className="pillar">
                  <span className="pillar-num">{p.num}</span>
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}