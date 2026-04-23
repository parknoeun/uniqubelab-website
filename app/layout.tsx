import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '유니큐브랩 · 엔터프라이즈 SI',
  description: '기업·공공 기관을 위한 시스템 통합. 엔터프라이즈 LMS, 교육 플랫폼, 커스텀 웹 애플리케이션을 설계·구축·운영합니다.',
  openGraph: {
    title: '유니큐브랩 · 엔터프라이즈 SI',
    description: '기업·공공 기관을 위한 시스템 통합. 2018년 이후 42건의 프로덕션 공급, 평균 가동률 99.95%.',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
