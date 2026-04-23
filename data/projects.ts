export interface ProjectMetric {
  label: string;
  value: string;
  sub: string;
}

export interface Project {
  id: string;
  type: string;
  typeKey: string;
  sector: string;
  year: number;
  title: string;
  status: string;
  statusLabel: string;
  description: string;
  overview: string;
  features: string[];
  stack: string[];
  metrics: ProjectMetric[];
  duration: string;
  team: string;
}

export const UQ_PROJECTS: Project[] = [
  {
    id: 'hankook-lms',
    type: '엔터프라이즈 LMS',
    typeKey: 'lms',
    sector: '금융',
    year: 2024,
    title: '한국금융그룹 전사 LMS',
    status: 'delivered',
    statusLabel: '공급 완료',
    description: '18,000명 임직원과 42개 지점을 아우르는 SCORM 기반 차세대 LMS. 기존 Moodle 환경에서 무중단 마이그레이션을 완료.',
    overview: '10년간 운영되어 확장성이 한계에 도달한 Moodle 환경을 대체하기 위한 프로젝트. 14주 만에 풀스택 LMS를 설계·구축·오픈했으며, Okta SSO와 SAP SuccessFactors 인사 시스템과의 양방향 연동을 포함해 18,000명 분량의 자격 이력을 무손실로 이관.',
    features: [
      'Okta SSO (SAML 2.0) 기반 단일 로그인',
      'SCORM 2004 및 xAPI 콘텐츠 지원',
      '자격증 만료 자동 추적·알림 기능',
      'SAP SuccessFactors 양방향 동기화',
      '본사·지점 관리자별 권한 구분 운영',
      '한·영·중 3개 국어 동시 지원',
    ],
    stack: ['React 18', 'Node.js', 'PostgreSQL', 'Kubernetes', 'Okta SSO', 'SCORM 2004'],
    metrics: [
      { label: '활성 사용자', value: '18,000', sub: '월 기준' },
      { label: '자격 발급 기간', value: '-38%', sub: '기존 대비 단축' },
      { label: '가동률', value: '99.97%', sub: '최근 18개월' },
    ],
    duration: '14주',
    team: '엔지니어 9명',
  },
  {
    id: 'moe-training',
    type: '공공',
    typeKey: 'public',
    sector: '공공·교육',
    year: 2024,
    title: '교육부 교원 연수 플랫폼',
    status: 'delivered',
    statusLabel: '공급 완료',
    description: '초·중등 교원 120,000명을 위한 전국 단위 연수 플랫폼. 시험 엔진과 학점 이수 체계를 통합 운영.',
    overview: '17개 시·도 교육청으로 분산된 연수 시스템을 하나의 플랫폼으로 통합. 120,000명의 교원, 4,200개 강좌, 국가 자격 프레임워크 기반 학점 추적을 지원.',
    features: [
      '17개 지역 교육청 통합 인증 체계',
      '국가 교원 자격 프레임워크 연계 학점',
      '적응형 비트레이트 스트리밍',
      '산간 지역 대응 오프라인 모바일 모드',
      'WCAG 2.1 AA 접근성 준수',
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'HLS'],
    metrics: [
      { label: '등록 교원', value: '120K', sub: '전국 단위' },
      { label: '강좌 수', value: '4,200', sub: '운영 중' },
      { label: '가동률', value: '99.95%', sub: '최근 24개월' },
    ],
    duration: '22주',
    team: '엔지니어 14명',
  },
  {
    id: 'seoul-metro',
    type: '공공',
    typeKey: 'public',
    sector: '교통·안전',
    year: 2025,
    title: '서울교통공사 운영 훈련 포털',
    status: 'inprogress',
    statusLabel: '진행 중',
    description: '기관사·유지보수 인력 대상 안전 훈련·자격 관리 포털. 사고관리(IMS) 시스템과 연계.',
    overview: '서울교통공사 현장 인력의 법정 자격을 체계적으로 관리하는 훈련 시스템. 모든 자격 이력은 감사 가능하며, 규제 기관 제출용 리포트를 즉시 산출.',
    features: [
      '변경 불가능한 자격 감사 로그',
      '시나리오 기반 평가 엔진',
      '사고관리(IMS) 연동',
      '기지 태블릿용 오프라인 모드',
    ],
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'Kafka', 'On-prem'],
    metrics: [
      { label: '대상 인력', value: '6,400', sub: '전체 기관사' },
      { label: '감사 체계', value: 'ISO 27001', sub: '정합' },
      { label: '오픈 예정', value: '2026 Q3', sub: '단계 오픈' },
    ],
    duration: '32주 (진행 중)',
    team: '엔지니어 11명',
  },
  {
    id: 'daewoo-portal',
    type: '커스텀 웹',
    typeKey: 'custom',
    sector: '건설·엔지니어링',
    year: 2023,
    title: '대우건설 프로젝트 포트폴리오 포털',
    status: 'delivered',
    statusLabel: '공급 완료',
    description: '진행 중인 380개 이상의 건설 프로젝트를 단일 포털에서 관리. 실시간 KPI 대시보드와 레거시 ERP 통합.',
    overview: '흩어진 엑셀·레거시 도구를 대체해 프로젝트 매니저, 임원, 현장 감독이 같은 데이터를 공유하는 단일 소스로 통합.',
    features: [
      '실시간 프로젝트 KPI 대시보드',
      '버전 이력 기반 문서 관리',
      'Oracle EBS 재무 연동',
      '현장용 모바일 최적화',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Oracle EBS', 'Redis'],
    metrics: [
      { label: '관리 프로젝트', value: '380+', sub: '실시간 추적' },
      { label: '통합 소스', value: '12개', sub: '시스템' },
      { label: '채택률', value: '94%', sub: 'PM 기준 3개월' },
    ],
    duration: '18주',
    team: '엔지니어 8명',
  },
  {
    id: 'koreapost-training',
    type: '기업교육',
    typeKey: 'training',
    sector: '공공·물류',
    year: 2023,
    title: '우정사업본부 지점 직원 교육',
    status: 'delivered',
    statusLabel: '공급 완료',
    description: '28,000명 우정사업본부 지점 인력을 대상으로 한 표준 교육 체계. 역량 추적과 주기적 보수교육 자동 편성.',
    overview: '3,400개 지점의 온보딩 과정을 표준화하고, 법령 개정에 맞춰 보수교육 일정을 자동으로 편성하도록 설계.',
    features: [
      '역량 프레임워크 매핑',
      '보수교육 자동 편성',
      '지점장 대시보드',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    metrics: [
      { label: '온보딩 직원', value: '28,000', sub: '전국' },
      { label: '지점', value: '3,400', sub: '전국 네트워크' },
      { label: '30일 내 이수율', value: '91%', sub: '평균' },
    ],
    duration: '16주',
    team: '엔지니어 7명',
  },
  {
    id: 'kospi-reporting',
    type: '커스텀 웹',
    typeKey: 'custom',
    sector: '금융',
    year: 2025,
    title: 'KOSPI 홀딩스 금감원 보고 시스템',
    status: 'inprogress',
    statusLabel: '진행 중',
    description: '6개 자회사 데이터를 통합해 금감원 법정 보고를 자동화. 감사 가능성과 재현성을 설계 제1원칙으로.',
    overview: '금감원 제출용 리포트를 결정론적으로 산출하는 플랫폼. 모든 계산 단계는 원천 데이터까지 추적 가능하며, 과거 스냅샷으로부터 언제든 재현 가능.',
    features: [
      '결정론적 리포트 생성',
      '전체 데이터 포인트 감사 이력',
      '불변 스냅샷 아카이브',
      'FSS XBRL 포맷 출력',
    ],
    stack: ['Next.js', 'Python', 'PostgreSQL', 'Airflow', 'Kubernetes'],
    metrics: [
      { label: '대상 자회사', value: '6개', sub: '통합' },
      { label: '분기 리포트', value: '42건', sub: '자동 산출' },
      { label: '오픈 예정', value: '2026 Q2', sub: '단계 오픈' },
    ],
    duration: '28주 (진행 중)',
    team: '엔지니어 10명',
  },
];

export const UQ_PILLARS = [
  { num: '01', title: '증명된 실적', desc: '엔터프라이즈·공공 분야에서 14건 이상의 프로덕션 공급. 모든 사례는 숫자로 공개합니다.' },
  { num: '02', title: '엔지니어링 컬처', desc: '모든 시니어 엔지니어는 코드를 쓰고 운영합니다. 영업 조직이 만든 약속을 기술이 감당하지 못하는 일이 없습니다.' },
  { num: '03', title: '운영까지 책임', desc: '구축에서 끝나지 않습니다. 전담 운영팀이 99.95% 평균 가동률로 서비스 라이프사이클 전체를 담당합니다.' },
];

export const UQ_SERVICES = [
  {
    num: '01',
    key: 'lms',
    title: '엔터프라이즈 LMS',
    desc: 'SCORM·xAPI 표준을 준수하는 기업용 학습관리 시스템. SSO, 자격 추적, HRIS 연동까지 한 번에.',
    tags: ['SAP SuccessFactors', 'Okta / Azure AD', '멀티테넌시', 'SCORM 2004'],
  },
  {
    num: '02',
    key: 'training',
    title: '기업·공공 교육 플랫폼',
    desc: '규제 산업을 위한 역량 프레임워크, 평가 엔진, 이수 증빙 시스템. 감사 체계까지 포함.',
    tags: ['역량 매핑', 'ISO 27001', '컴플라이언스 리포트', '접근성 AA'],
  },
  {
    num: '03',
    key: 'custom',
    title: '커스텀 웹 애플리케이션',
    desc: '내부 업무 도구, 실시간 대시보드, 고객 접점 웹. 모던 프런트엔드와 견고한 백엔드 조합으로.',
    tags: ['React / TypeScript', 'Node.js / Spring', 'PostgreSQL', 'Redis'],
  },
  {
    num: '04',
    key: 'ops',
    title: '관리형 인프라·운영',
    desc: 'Kubernetes 기반 배포, 관측성, SLA 기반 24/7 운영. 구축 이후의 삶을 함께 책임집니다.',
    tags: ['AWS / On-prem', '99.9% SLA', '15분 내 초동', '증분 배포'],
  },
];

export const UQ_PROCESS = [
  { num: 'Step 01', title: '요건 진단', desc: '기존 시스템, 이해관계자, 규제 조건 분석. 범위·위험·성공 지표 정의.', duration: '1–2주' },
  { num: 'Step 02', title: '설계 제안', desc: '아키텍처와 일정을 2개 옵션으로 제안. 비용과 리스크를 함께 공개.', duration: '2–3주' },
  { num: 'Step 03', title: '프로토타입', desc: '핵심 사용자 플로우를 실동작 시제품으로 구현. 의사결정 비용을 낮춥니다.', duration: '2–4주' },
  { num: 'Step 04', title: '단계 개발', desc: '2주 스프린트 단위로 릴리스. 운영팀 온보딩과 함께 진행.', duration: '8–20주' },
  { num: 'Step 05', title: '오픈·이관', desc: '병렬 운영, 데이터 이관, 담당자 교육. 무중단 전환을 원칙으로.', duration: '2–4주' },
  { num: 'Step 06', title: '지속 운영', desc: 'SLA 기반 운영과 분기별 개선. 시스템 라이프사이클 전체 담당.', duration: '연 단위 계약' },
];

export const UQ_CLIENTS = [
  '한국금융그룹', '교육부', '서울교통공사', '대우건설',
  'KOSPI 홀딩스', '우정사업본부', 'LG CNS', '삼성SDS',
  '한국전력', 'KT DS', '신한금융투자', '현대모비스',
  '포스코ICT', 'NH농협', '국토교통부', '중소벤처기업부',
];

export const UQ_ABOUT_TIMELINE = [
  { year: '2018', text: '<strong>유니큐브랩 설립.</strong> 엔터프라이즈 학습 시스템 전문 기술 조직으로 출발.' },
  { year: '2019', text: '첫 금융권 공급 — 국내 3대 증권사 임직원 교육 플랫폼 구축.' },
  { year: '2020', text: 'ISO 27001 인증 취득. 운영 조직 신설로 연간 SLA 기반 계약 시작.' },
  { year: '2021', text: '공공 부문 진입. 교육부·서울시 산하 5개 기관에 연수 플랫폼 공급.' },
  { year: '2022', text: '자체 LMS 엔진 <strong>Uniqube Core v2</strong> 공개. SCORM·xAPI·LTI 1.3 완전 대응.' },
  { year: '2023', text: '임직원 52명. 연간 공급 프로젝트 12건. 평균 가동률 99.95% 달성.' },
  { year: '2024', text: '교원 120,000명 규모 전국 플랫폼 오픈. 현대건설·한국금융그룹 등 6개 사 신규 공급.' },
  { year: '2025', text: '임직원 70명. 공급 사례 42건 누적. 공공·금융·산업 3대 섹터에 집중.' },
];
