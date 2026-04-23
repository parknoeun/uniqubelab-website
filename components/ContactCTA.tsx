import Link from 'next/link';
import Icon from './Icon';

export default function ContactCTA() {
  return (
    <section className="ctaband">
      <div className="uq-container">
        <div className="ctaband-inner">
          <div>
            <div className="label-kr" style={{marginBottom:16}}><span className="rule"/>Next step</div>
            <h2>LMS·기업 웹 프로젝트를 준비 중이신가요?</h2>
            <p>요구사항을 공유해 주세요. 1 영업일 이내 범위·일정·예상 리스크를 정리해 회신드립니다.</p>
          </div>
          <div className="ctaband-actions">
            <Link href="/contact" className="btn btn-pri btn-xl">상담 요청하기 <Icon name="arrow-right" size={16}/></Link>
            <button className="btn btn-sec btn-xl">회사 소개서 다운로드 (PDF)</button>
            <div className="ctaband-contact">
              또는 직접 문의: <b>contact@uniqubelab.kr</b><br/>
              평일 09:00–18:00 · <b>+82 2 6000 0000</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}