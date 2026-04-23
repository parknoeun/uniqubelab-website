import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '문의 · 유니큐브랩',
  description: '프로젝트를 시작해 봅시다. 1 영업일 이내 범위·일정·예상 리스크를 정리해 회신드립니다.',
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="uq-container">
        <div className="contact-hero">
          <div className="label-kr"><span className="rule"/>Contact</div>
          <h1>프로젝트를<br/>시작해 봅시다.</h1>
          <p>요구사항을 간단히 공유해 주세요. 1 영업일 이내 범위·일정·예상 리스크와 유사 레퍼런스를 정리해 회신드립니다.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-row">
              <span className="contact-info-label"><Icon name="mail" size={14} style={{display:'inline', marginRight:8, verticalAlign:'-2px'}}/>Email</span>
              <span className="contact-info-val">contact@uniqubelab.kr</span>
              <span className="contact-info-sub">평일 1 영업일 내 회신</span>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-label"><Icon name="phone" size={14} style={{display:'inline', marginRight:8, verticalAlign:'-2px'}}/>Phone</span>
              <span className="contact-info-val">+82 2 6000 0000</span>
              <span className="contact-info-sub">평일 09:00–18:00 KST</span>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-label"><Icon name="map-pin" size={14} style={{display:'inline', marginRight:8, verticalAlign:'-2px'}}/>Office</span>
              <span className="contact-info-val">서울 강남구 테헤란로 427</span>
              <span className="contact-info-sub">역삼역 4번 출구 도보 5분</span>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-label">Business</span>
              <span className="contact-info-val">주식회사 유니큐브랩</span>
              <span className="contact-info-sub">대표 홍길동 · 사업자등록번호 123-45-67890</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
