import { UQ_CLIENTS } from '@/data/projects';

export default function Clients() {
  return (
    <section className="clients">
      <div className="uq-container">
        <h3>금융·공공·산업 분야 기관이 유니큐브랩을 택했습니다.</h3>
        <div className="clients-grid">
          {UQ_CLIENTS.map(c => <div key={c} className="client-cell">{c}</div>)}
        </div>
      </div>
    </section>
  );
}