import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="uq-footer">
      <div className="uq-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/assets/logo.svg" alt="Uniqube Lab" width={120} height={28} style={{ height: 28, width: 'auto', filter: 'brightness(0) invert(1)' }} />
            <p className="footer-tag">기업·공공 기관을 위한 시스템 통합. 서울, 대한민국.<br/>엔터프라이즈 LMS · 교육 플랫폼 · 커스텀 웹.</p>
          </div>
          <div className="footer-col"><h4>Services</h4><span>엔터프라이즈 LMS</span><span>교육 플랫폼</span><span>커스텀 웹</span><span>관리형 운영</span></div>
          <div className="footer-col"><h4>Company</h4><Link href="/about">회사 소개</Link><Link href="/projects">프로젝트</Link><span>채용</span><span>보도자료</span></div>
          <div className="footer-col"><h4>Contact</h4><span>contact@uniqubelab.kr</span><span>+82 2 6000 0000</span><span>서울 강남구 테헤란로</span></div>
          <div className="footer-col"><h4>Compliance</h4><span>ISO 27001</span><span>ISO 9001</span><span>정보보호 관리체계</span><span>개인정보 처리방침</span></div>
        </div>
        <div className="footer-bar">
          <span>© 2026 주식회사 유니큐브랩 · UniqubeLab Co., Ltd.</span>
          <div className="footer-bar-links"><span>이용약관</span><span>개인정보처리방침</span><span>ISO 27001</span></div>
        </div>
      </div>
    </footer>
  );
}
