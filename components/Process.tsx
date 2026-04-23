import { UQ_PROCESS } from '@/data/projects';

export default function Process() {
  return (
    <section className="process">
      <div className="uq-container">
        <div className="process-head">
          <div className="label-kr" style={{justifyContent:'center'}}><span className="rule"/>프로세스</div>
          <h2>6단계. 진단부터 운영까지.</h2>
          <p className="sub">첫 미팅에서 오픈까지 평균 12주. 이후 연 단위 운영으로 시스템 라이프사이클 전체를 함께합니다.</p>
        </div>
        <div className="process-track">
          {UQ_PROCESS.map(s => (
            <div key={s.num} className="process-step">
              <span className="process-num">{s.num}</span>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
              <div className="process-duration">{s.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}