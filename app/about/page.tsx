import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { UQ_ABOUT_TIMELINE } from '@/data/projects';

export const metadata: Metadata = {
  title: '회사 소개 · 유니큐브랩',
  description: '2018년 설립 이후 유니큐브랩은 엔터프라이즈·공공 시스템 통합에 집중해 왔습니다.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="about-hero">
        <div className="uq-container">
          <div className="label-kr"><span className="rule"/>About</div>
          <h1>기술 조직으로 출발해<br/>기술 조직으로 성장합니다.</h1>
          <p>2018년 설립 이후 유니큐브랩은 엔터프라이즈·공공 시스템 통합에 집중해 왔습니다. 70명의 엔지니어가 직접 쓰고 직접 운영하는 조직으로.</p>
        </div>
      </section>
      <section className="about-body">
        <div className="uq-container">
          <div className="about-block">
            <div><div className="about-block-label">01 · Mission</div></div>
            <div>
              <h2>시스템은 구축이 아닌 운영으로 증명됩니다.</h2>
              <p>많은 SI 조직이 오픈 시점까지만 책임집니다. 우리는 거기서부터 시작한다고 믿습니다. 시스템이 5년, 10년 동안 한 조직의 일상을 지탱하려면, 설계 단계의 결정은 운영을 아는 조직이 내려야 합니다.</p>
              <p>그래서 유니큐브랩의 시니어 엔지니어는 모두 코드를 쓰고, 오픈한 시스템을 직접 운영합니다. 외부 재하청 없이, 하나의 팀이 라이프사이클 전체를 책임집니다.</p>
            </div>
          </div>
          <div className="about-block">
            <div><div className="about-block-label">02 · Focus</div></div>
            <div>
              <h2>세 영역에만 집중합니다.</h2>
              <p><strong>엔터프라이즈 LMS, 공공 교육 플랫폼, 금융·산업 커스텀 웹.</strong> 유행을 따라 새 영역을 확장하는 대신, 이 세 영역에서 깊이 있는 노하우를 축적해 왔습니다.</p>
              <p>덕분에 같은 문제를 이미 풀어 본 적이 있는 경우가 많습니다. 고객의 요구사항은 독특하지만, 해결의 구조는 반복 가능한 패턴을 가집니다. 우리는 그 패턴을 공유합니다.</p>
            </div>
          </div>
          <div className="about-block">
            <div><div className="about-block-label">03 · Timeline</div></div>
            <div>
              <h2>8년의 기록.</h2>
              <div className="about-timeline">
                {UQ_ABOUT_TIMELINE.map(y => (
                  <div key={y.year} className="about-year">
                    <span className="about-year-num">{y.year}</span>
                    <span className="about-year-text" dangerouslySetInnerHTML={{__html: y.text}}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="about-block">
            <div><div className="about-block-label">04 · Culture</div></div>
            <div>
              <h2>엔지니어링 원칙.</h2>
              <p><strong>기본 원칙 1.</strong> 시니어 엔지니어는 코드를 쓴다. 모든 결정은 현장의 제약을 아는 사람이 내립니다.</p>
              <p><strong>기본 원칙 2.</strong> 약속은 숫자로 한다. &quot;더 빠르게&quot;, &quot;더 안정적으로&quot; 같은 표현 대신 &quot;−38%&quot;, &quot;99.95%&quot;처럼 측정 가능한 숫자로 이야기합니다.</p>
              <p><strong>기본 원칙 3.</strong> 운영은 구축의 연장이다. 오픈이 끝이 아니라 시작입니다. 전담 운영팀이 SLA를 책임집니다.</p>
            </div>
          </div>
          <div style={{textAlign:'center', marginTop:48}}>
            <Link href="/contact" className="btn btn-pri btn-xl">상담 요청하기 <Icon name="arrow-right" size={16}/></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
