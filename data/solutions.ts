export interface SolutionHighlight {
  val: string;
  lbl: string;
}

export interface SolutionPillar {
  num: string;
  title: string;
  desc: string;
  items: string[];
}

export interface SolutionProcess {
  num: string;
  title: string;
  desc: string;
  duration: string;
}

export interface SolutionSpec {
  label: string;
  value: string;
}

export interface Solution {
  id: string;
  brand: string;
  tagline: string;
  status: string;
  statusLabel: string;
  summary: string;
  hero: {
    title1: string;
    title2: string;
    desc: string;
    highlights: SolutionHighlight[];
  };
  pillars: SolutionPillar[];
  integrations: string[];
  specs: SolutionSpec[];
  process: SolutionProcess[];
}

export const UQ_SOLUTIONS: Solution[] = [
  {
    id: 'uniqube-lms',
    brand: 'Uniqube LMS',
    tagline: '엔터프라이즈 학습을 위한 SaaS',
    status: 'live',
    statusLabel: '서비스 중',
    summary: '기업·공공 기관을 위한 클라우드 기반 학습관리 시스템. 복잡한 구축 없이 즉시 도입, 규모에 따라 확장되는 멀티테넌트 SaaS.',
    hero: {
      title1: '구축 없이 시작하는',
      title2: '엔터프라이즈 LMS.',
      desc: 'Uniqube LMS는 수 만 명 단위의 학습자를 즉시 수용하도록 설계된 멀티테넌트 SaaS입니다. SCORM 2004·xAPI·LTI 1.3을 네이티브로 지원하며, SSO와 HRIS 연동을 기본 제공합니다.',
      highlights: [
        { val: '10k+', lbl: '동시 접속 지원' },
        { val: '5분', lbl: '테넌트 생성 시간' },
        { val: '99.95%', lbl: '서비스 SLA' },
      ],
    },
    pillars: [
      {
        num: '01', title: '학습 운영',
        desc: '과정·커리큘럼 편성부터 이수 증빙까지. 규제 산업이 요구하는 증거를 자동으로 남깁니다.',
        items: ['과정·커리큘럼·학습경로 설계', '이수 조건과 재수강 규칙 엔진', '자격증 만료 자동 추적 및 알림', '이수 증빙 PDF 자동 발급'],
      },
      {
        num: '02', title: '콘텐츠 표준',
        desc: '업계 표준을 네이티브로 구현. 외부 저작 도구와 기존 자산을 그대로 활용합니다.',
        items: ['SCORM 2004 4th Edition 완전 지원', 'xAPI (Tin Can) · cmi5 대응', 'LTI 1.3 외부 도구 연동', 'HLS 적응형 비트레이트 스트리밍'],
      },
      {
        num: '03', title: '인증·연동',
        desc: '기존 ID 체계를 그대로 사용합니다. 별도 계정 관리 없이 하루 만에 연결.',
        items: ['SAML 2.0 / OIDC 기반 SSO', 'Okta · Azure AD · Keycloak 지원', 'SCIM 2.0 사용자 자동 프로비저닝', 'SAP SuccessFactors · Workday HRIS'],
      },
      {
        num: '04', title: '평가·리포트',
        desc: '시나리오 기반 평가와 역량 프레임워크. 경영진이 바로 보는 대시보드까지.',
        items: ['문항 은행과 랜덤 출제 엔진', '역량·직무 매핑 기반 리포트', '부서장용 학습 현황 대시보드', 'CSV · XBRL 포맷 보고서 내보내기'],
      },
      {
        num: '05', title: '보안·컴플라이언스',
        desc: '감사 가능성을 설계 제1원칙으로. 규제 산업 공급 이력으로 검증된 체계.',
        items: ['ISO 27001 · ISMS 인증 환경', '변경 불가능한 감사 로그', '전송·저장 구간 AES-256 암호화', '개인정보 분리 보관 및 가명 처리'],
      },
      {
        num: '06', title: '멀티테넌시·확장',
        desc: '조직 단위로 완전 격리된 환경. 테넌트별 브랜딩과 정책을 독립 관리.',
        items: ['테넌트별 독립 데이터베이스 스키마', '화이트라벨 브랜딩·도메인 매핑', '지역별 데이터 거주성 (KR · US · EU)', 'Auto-scaling Kubernetes 클러스터'],
      },
    ],
    integrations: [
      'SAP SuccessFactors', 'Workday HCM', 'Oracle HCM Cloud',
      'Okta', 'Azure AD', 'Keycloak', 'Google Workspace',
      'Microsoft Teams', 'Slack', 'Zoom', 'Webex',
      'Salesforce', 'HubSpot', 'Notion', 'Confluence',
    ],
    specs: [
      { label: '배포', value: 'AWS Seoul · Tokyo · Frankfurt (온프레미스 옵션)' },
      { label: '인증', value: 'SAML 2.0, OIDC, SCIM 2.0' },
      { label: '콘텐츠 표준', value: 'SCORM 1.2 / 2004, xAPI, cmi5, LTI 1.3' },
      { label: '접근성', value: 'WCAG 2.1 AA 준수' },
      { label: '언어', value: '한 · 영 · 중 · 일 기본 제공, i18n 확장 가능' },
      { label: '가용성', value: '99.95% SLA, Multi-AZ 이중화' },
    ],
    process: [
      { num: 'Step 01', title: '테넌트 생성', desc: '5분 내 독립 환경 프로비저닝. 도메인·브랜딩 설정.', duration: '1일' },
      { num: 'Step 02', title: 'SSO·HRIS 연결', desc: '기존 ID 체계와 인사 시스템 연동. 샘플 사용자로 검증.', duration: '3–5일' },
      { num: 'Step 03', title: '콘텐츠 이관', desc: 'SCORM 패키지 일괄 업로드 또는 기존 LMS 마이그레이션.', duration: '1–2주' },
      { num: 'Step 04', title: '파일럿 운영', desc: '소규모 부서 대상 베타 운영. 사용자 피드백 반영.', duration: '2–4주' },
      { num: 'Step 05', title: '전사 오픈', desc: '전 임직원 오픈. 전담 운영 조직이 24/7 지원.', duration: '상시' },
    ],
  },
];
