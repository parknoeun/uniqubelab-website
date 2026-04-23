export default function BigStats() {
  return (
    <section className="bigstats">
      <div className="uq-container">
        <div className="bigstats-inner">
          <div className="bigstats-head">
            <div className="label-kr bigstats-label"><span className="rule"/>성과 지표</div>
            <h2>숫자는 감추지 않습니다.</h2>
            <p>프로젝트 성과는 마케팅 카피가 아닌 측정 가능한 숫자로만 이야기합니다. 2018년부터 지금까지.</p>
          </div>
          <div className="bigstats-list">
            <div className="bigstat">
              <span className="bigstat-val">42</span>
              <p className="bigstat-desc">누적 <strong>프로덕션 공급 사례</strong>. 엔터프라이즈·공공·산업 분야 기관 14곳.</p>
            </div>
            <div className="bigstat">
              <span className="bigstat-val">99.95<span style={{fontSize:32, marginLeft:4}}>%</span></span>
              <p className="bigstat-desc"><strong>최근 24개월 평균 가동률.</strong> 운영 조직이 직접 책임지는 SLA 계약 기반.</p>
            </div>
            <div className="bigstat">
              <span className="bigstat-val">168K</span>
              <p className="bigstat-desc">일일 활성 사용자 지원 규모. <strong>18,000명 기업</strong>부터 <strong>120,000명 공공</strong>까지.</p>
            </div>
            <div className="bigstat">
              <span className="bigstat-val">12<span style={{fontSize:32, marginLeft:4}}>주</span></span>
              <p className="bigstat-desc">첫 미팅에서 <strong>프로덕션 오픈</strong>까지의 평균 소요. 최단 기록은 8주.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}