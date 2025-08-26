import React, { useState, useEffect, useRef } from 'react';
import { Play, Users, Globe, Zap, ArrowRight, CheckCircle, Star, Calendar, Mail } from 'lucide-react';

// 1. 언어 데이터 객체 생성
const translations = {
  jp: {
    poweredBy: "Powered by XROMEDA",
    fairName: "XR Fair Tokyo 2025",
    heroTitle: "VROOKと共に<br />日本市場の新たな<br /><span class='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>XRコンテンツビジネス</span>を<br />切り拓きましょう！",
    heroSubtitle: "貴社のVR技術力とIPをVROOKのXRファンダムプラットフォームで拡張するチャンス！",
    meetingRequest: "XR Fair Tokyo ミーティング予約",
    demo: "VROOK デモを見る",
    introTitle: "日本のIPが、VROOKで新たな価値を生み出す",
    xromedaDesc: "<strong class='text-white'>XROMEDA</strong>は、公演、ファッション、フィットネスなど多様なオフライン体験をXR技術でオンライン化し、クリエイターのファンダムビジネスを拡張する次世代XRファンダムプラットフォームです。",
    vrookDesc: "<strong class='text-white'>VROOK</strong>はXROMEDAの中核サービスで、既存の2Dグラビアを没入型VRコンテンツに再構成し、ファンには現場の臨場感を、アーティストには持続可能な収益化の機会を提供する革新的な<strong class='text-purple-300'>VRセレブグラビア</strong>です。",
    nipaDesc: "私どもは<strong class='text-white'>NIPA(情報通信産業振興院)</strong>の支援を受け、今回のXR Fair Tokyoに参加することになりました。日本の優れたパートナーと共に、現地のXRファンダム市場を開拓し、新たな成功神話を作り上げることを期待しています。",
    serviceComposition: "VROOK サービス構成",
    serviceCompositionSub: "グラビア、映像、VRを一つに",
    vrVideo: "VR映像",
    vrVideoDesc: "3D 8K VR技術で制作された独占映像",
    digitalPhotos: "デジタル写真",
    digitalPhotosDesc: "超高画質2Dプレミアムグラビア",
    makingFilm: "メイキング映像",
    makingFilmDesc: "撮影現場のビハインドストーリー",
    aiPhotobook: "AIグラビア",
    aiPhotobookDesc: "AI技術で生成された独創的な合成グラビア",
    valuePropTitle: "なぜVROOKと共にすべきなのか？",
    techTitle: "圧倒的な技術力と効率性",
    techDesc: "3D 8K VR技術を通じて既存のグラビアを次世代のリアルコンテンツに進化させます。VR+2D同時撮影、専門編集、チャンネルアップロードまでサポートするオールインワン制作サービスで、パートナーの制作負担を減らし、コンテンツの品質を最大化します。",
    techHighlight: "オールインワン制作サービス",
    profitTitle: "パートナー収益最大化の仕組み",
    profitDesc: "VROOKは、パートナー様のIP価値が最高の収益へと繋がるよう設計されています。メンバーシップ、PPV、ファンからの支援、ブランド広告マッチングなど、市場で実証済みの強力な収益モデルを統合的に提供し、IP収益を最大化する最良の機会を提供します。",
    profitHighlight: "強力な収益モデル",
    globalTitle: "グローバルファンダムへの拡張",
    globalDesc: "安定したグローバル決済/精算システムと多言語サポートを通じて、パートナーの大切なIPが日本を越えて世界中のファンと出会える道を開きます。",
    globalHighlight: "グローバル進出",
    successTitle: "“参加クリエイターたちが証明します”",
    successDesc: "フィットネス、モデル、コスプレなど、様々な分野のクリエイターがVROOKを通じてファンダムを拡大し、新たな収益を創出しています。",
    testimonial: "“VROOKのVR技術のおかげで、ファンに全く新しい体験をプレゼントできました。”",
    partnerTitle: "VROOKと共に新たな次元のコンテンツを体験し、<br />あなたのIPビジネスを拡張してください！",
    vrPartner: "VRコンテンツ制作パートナー",
    vrPartnerDesc: "VROOKの没入型VRセレブグラビア制作のため、優れたVR映像制作技術を持つパートナーを探しています。(一般の高品質映像制作者も歓迎します)",
    vrPartnerReq1: "VR映像制作技術を保有",
    vrPartnerReq2: "高品質コンテンツ制作経験",
    vrPartnerReq3: "日本市場への進出意欲",
    ipPartner: "IP事業パートナー",
    ipPartnerDesc: "日本の有名エンターテインメント社、MCN、モデル、漫画、アニメなど、多様なIP事業者と協力し、魅力的なXRコンテンツを共同制作したいと考えています。",
    ipPartnerReq1: "魅力的なIP及びインフルエンサーを保有",
    ipPartnerReq2: "ファンダムビジネスの拡張意欲",
    ipPartnerReq3: "グローバル市場への進出計画",
    ctaTitle: "今すぐVROOKのパートナーになるチャンスを掴んでください！",
    ctaDesc: "XR Fair Tokyo ブース <strong class='text-white'>[ブース番号 TBD]</strong>でVROOKの革新的な技術を直接体験し、具体的な協力策を議論してください。",
    companyName: "会社名 *",
    companyNamePlaceholder: "会社名を入力してください",
    contactName: "担当者名 *",
    contactNamePlaceholder: "担当者名を入力してください",
    email: "メールアドレス *",
    emailPlaceholder: "メールアドレスを入力してください",
    phone: "連絡先",
    phonePlaceholder: "連絡先を入力してください",
    interestField: "協力関心分野 *",
    interestFieldPlaceholder: "選択してください",
    interestVr: "VR制作",
    interestIp: "IP提供",
    interestJoint: "共同事業",
    interestOther: "その他",
    interestIpField: "関心IP (任意)",
    interestIpPlaceholder: "保有または関心のあるIPを入力してください",
    submitMeeting: "XR Fair Tokyo ミーティングを予約",
    submitInquiry: "VROOK パートナーシップに関するお問い合わせ",
    xromedaLinkText: "XROMEDAクリエイターページへ",
    footerDesc: "次世代XRファンダムプラットフォームで新しいコンテンツ体験を提供します。",
    contactInfo: "連絡先情報",
    address: "住所",
    keywords: "キーワード",
    copyright: "© 2025 XROMEDA Inc. All rights reserved. | XR Fair Tokyo 2025 | Supported by NIPA (情報通信産業振興院)",
  },
  kr: {
    poweredBy: "Powered by XROMEDA",
    fairName: "XR Fair Tokyo 2025",
    heroTitle: "VROOK과 함께<br />일본 시장의 새로운<br /><span class='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>XR 콘텐츠 비즈니스</span>를<br />개척하세요!",
    heroSubtitle: "귀사의 VR 기술력과 IP를 VROOK의 XR 팬덤 플랫폼으로 확장할 기회!",
    meetingRequest: "XR Fair Tokyo 미팅 신청",
    demo: "VROOK 데모 보기",
    introTitle: "일본의 IP, VROOK으로 새로운 가치를 창출하다",
    xromedaDesc: "<strong class='text-white'>XROMEDA</strong>는 공연, 패션, 피트니스 등 다양한 오프라인 경험을 XR 기술로 온라인화하여 크리에이터의 팬덤 비즈니스를 확장하는 차세대 XR 팬덤 플랫폼입니다.",
    vrookDesc: "<strong class='text-white'>VROOK</strong>은 XROMEDA의 핵심 서비스로, 기존의 2D 화보를 몰입형 VR 콘텐츠로 재구성하여 팬에게는 현장의 생생함을, 아티스트에게는 지속 가능한 수익화의 기회를 제공하는 혁신적인 <strong class='text-purple-300'>VR 셀럽 화보</strong>입니다.",
    nipaDesc: "저희는 <strong class='text-white'>NIPA(정보통신산업진흥원)</strong>의 지원을 받아 이번 XR Fair Tokyo에 참가하게 되었습니다. 일본의 뛰어난 파트너들과 함께 현지 XR 팬덤 시장을 개척하고, 새로운 성공 신화를 만들어가기를 기대합니다.",
    serviceComposition: "VROOK 서비스 구성",
    serviceCompositionSub: "화보, 영상, VR을 하나로",
    vrVideo: "VR 영상",
    vrVideoDesc: "3D 8K VR 기술로 제작된 독점 영상",
    digitalPhotos: "디지털 사진",
    digitalPhotosDesc: "초고화질 2D 프리미엄 화보",
    makingFilm: "메이킹 영상",
    makingFilmDesc: "촬영 현장의 비하인드 스토리",
    aiPhotobook: "AI 화보",
    aiPhotobookDesc: "AI 기술로 생성된 독창적 합성 화보",
    valuePropTitle: "왜 VROOK과 함께해야 하는가?",
    techTitle: "압도적인 기술력과 효율성",
    techDesc: "3D 8K VR 기술을 통해 기존 화보를 차세대 실감형 콘텐츠로 진화시킵니다. VR+2D 동시 촬영, 전문 편집, 채널 업로드까지 지원하는 올인원(All-in-One) 제작 서비스로 파트너사의 제작 부담은 줄이고 콘텐츠 품질은 극대화합니다.",
    techHighlight: "올인원 제작 서비스",
    profitTitle: "파트너 수익 극대화 구조",
    profitDesc: "VROOK은 파트너사의 IP 가치가 최고의 수익으로 연결되도록 설계되었습니다. 멤버십, 단건결제(PPV), 팬 후원, 브랜드 광고 매칭 등 시장에서 검증된 강력한 수익 모델을 통합 제공하여, IP 수익을 극대화할 최상의 기회를 제공합니다.",
    profitHighlight: "강력한 수익 모델",
    globalTitle: "글로벌 팬덤 확장",
    globalDesc: "안정적인 글로벌 결제/정산 시스템과 다국어 지원을 통해, 파트너사의 소중한 IP가 일본을 넘어 전 세계 팬들과 만날 수 있는 길을 열어드립니다.",
    globalHighlight: "글로벌 진출",
    successTitle: "\"함께한 크리에이터들이 증명합니다\"",
    successDesc: "피트니스, 모델, 코스프레 등 다양한 분야의 크리에이터들이 VROOK을 통해 팬덤을 확장하고 새로운 수익을 창출하고 있습니다.",
    testimonial: "\"VROOK의 VR 기술 덕분에 팬들에게 완전히 새로운 경험을 선물할 수 있었습니다.\"",
    partnerTitle: "VROOK과 함께 새로운 차원의 콘텐츠를 경험하고,<br />당신의 IP 비즈니스를 확장하세요!",
    vrPartner: "VR 콘텐츠 제작 파트너",
    vrPartnerDesc: "VROOK의 몰입형 VR 셀럽 화보 제작을 위한 뛰어난 VR 영상 제작 기술을 보유한 파트너를 찾습니다. (일반 고품질 영상 제작사도 환영합니다)",
    vrPartnerReq1: "VR 영상 제작 기술력 보유",
    vrPartnerReq2: "고품질 콘텐츠 제작 경험",
    vrPartnerReq3: "일본 시장 진출 의지",
    ipPartner: "IP 사업 파트너",
    ipPartnerDesc: "일본의 유명 엔터테인먼트사, MCN, 모델, 만화, 애니메이션 등 다양한 IP 사업자와 협력하여 매력적인 XR 콘텐츠를 공동 제작하고자 합니다.",
    ipPartnerReq1: "매력적인 IP 및 인플루언서 보유",
    ipPartnerReq2: "팬덤 비즈니스 확장 의지",
    ipPartnerReq3: "글로벌 시장 진출 계획",
    ctaTitle: "지금 바로 VROOK의 파트너가 될 기회를 잡으세요!",
    ctaDesc: "XR Fair Tokyo 부스 <strong class='text-white'>[부스 번호 TBD]</strong>에서 VROOK의 혁신적인 기술을 직접 경험하고, 구체적인 협력 방안을 논의하세요.",
    companyName: "회사명 *",
    companyNamePlaceholder: "회사명을 입력하세요",
    contactName: "담당자 이름 *",
    contactNamePlaceholder: "담당자 이름을 입력하세요",
    email: "이메일 *",
    emailPlaceholder: "이메일을 입력하세요",
    phone: "연락처",
    phonePlaceholder: "연락처를 입력하세요",
    interestField: "협력 관심 분야 *",
    interestFieldPlaceholder: "선택해주세요",
    interestVr: "VR 제작",
    interestIp: "IP 제공",
    interestJoint: "공동 사업",
    interestOther: "기타",
    interestIpField: "관심 IP (선택사항)",
    interestIpPlaceholder: "보유 또는 관심 IP를 입력하세요",
    submitMeeting: "XR Fair Tokyo 미팅 신청하기",
    submitInquiry: "VROOK 파트너십 문의하기",
    xromedaLinkText: "XROMEDA 크리에이터 페이지로 이동",
    footerDesc: "차세대 XR 팬덤 플랫폼으로 새로운 콘텐츠 경험을 제공합니다.",
    contactInfo: "Contact Info",
    address: "주소",
    keywords: "Keywords",
    copyright: "© 2025 XROMEDA Inc. All rights reserved. | XR Fair Tokyo 2025 | Supported by NIPA (정보통신산업진흥원)",
  },
};

const VROOKLandingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    company: '', name: '', email: '', phone: '', interest: '', ip: ''
  });
  // 1. 언어 상태 추가 (기본 'jp')
  const [language, setLanguage] = useState('jp'); 
  const ctaRef = useRef(null); // Ref for the CTA section

  const T = translations[language]; // 현재 언어 텍스트

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // 2. 스크롤 이동 함수
  const handleScrollToCta = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const influencers = [ "겨우디", "모모리나", "テイルズ360ワールド", "Golf Full Course", "Ava Monroe" ];

  // HTML 문자열을 렌더링하기 위한 헬퍼 컴포넌트
  const RawHTML = ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />;
  const RawHTMLP = ({ html, className }) => <p className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  const RawHTMLH1 = ({ html, className }) => <h1 className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  const RawHTMLH2 = ({ html, className }) => <h2 className={className} dangerouslySetInnerHTML={{ __html: html }} />;


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden font-['Pretendard']">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold">V</div>
              <span className="text-xl font-bold">VROOK</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm opacity-80 hidden sm:block">{T.poweredBy}</div>
              {/* 1. 언어 전환 버튼 */}
              <button 
                onClick={() => setLanguage(lang => lang === 'jp' ? 'kr' : 'jp')}
                className="border border-white/30 px-3 py-1 rounded-md text-sm hover:bg-white/10 transition-all"
              >
                {language === 'jp' ? 'KR' : 'JP'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className={`relative min-h-screen flex items-center justify-center pt-20 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("...")` }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              {T.fairName}
            </span>
            <RawHTMLH1 html={T.heroTitle} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight" />
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              {T.heroSubtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             {/* 2. 스크롤 이동 함수 연결 */}
            <button onClick={handleScrollToCta} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{T.meetingRequest}</span>
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>{T.demo}</span>
            </button>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className={`py-20 transition-all duration-1000 ${isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{T.introTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <RawHTMLP html={T.xromedaDesc} className="text-lg text-blue-100 mb-6 leading-relaxed" />
              <RawHTMLP html={T.vrookDesc} className="text-lg text-blue-100 mb-6 leading-relaxed" />
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <RawHTMLP html={T.nipaDesc} className="text-blue-100" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{T.serviceComposition}</h3>
                  <p className="text-blue-200">"{T.serviceCompositionSub}"</p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: "🎥", title: T.vrVideo, desc: T.vrVideoDesc },
                    { icon: "📸", title: T.digitalPhotos, desc: T.digitalPhotosDesc },
                    { icon: "🎬", title: T.makingFilm, desc: T.makingFilmDesc },
                    { icon: "🤖", title: T.aiPhotobook, desc: T.aiPhotobookDesc }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-blue-200">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="value" className={`py-20 bg-gradient-to-r from-black/20 to-purple-900/20 transition-all duration-1000 ${isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{T.valuePropTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-12 h-12 text-purple-400" />, title: T.techTitle, description: T.techDesc, highlight: T.techHighlight },
              { icon: <Star className="w-12 h-12 text-blue-400" />, title: T.profitTitle, description: T.profitDesc, highlight: T.profitHighlight },
              { icon: <Globe className="w-12 h-12 text-green-400" />, title: T.globalTitle, description: T.globalDesc, highlight: T.globalHighlight }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-blue-100 mb-4 leading-relaxed">{item.description}</p>
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg px-4 py-2 inline-block">
                    <span className="text-sm font-semibold text-purple-200">{item.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className={`py-20 transition-all duration-1000 ${isVisible.success ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{T.successTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{T.successDesc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {influencers.map((name, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{name.charAt(0)}</div>
                <h3 className="font-semibold text-lg">{name}</h3>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <blockquote className="text-xl italic text-blue-100 mb-4">{T.testimonial}</blockquote>
            <cite className="text-purple-300 font-semibold">- テイルズ360ワールド</cite>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className={`py-20 bg-gradient-to-r from-black/20 to-blue-900/20 transition-all duration-1000 ${isVisible.partnership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <RawHTMLH2 html={T.partnerTitle} className="text-3xl md:text-4xl font-bold mb-6" />
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm border border-purple-300/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold">{T.vrPartner}</h3>
              </div>
              <p className="text-purple-100 mb-6 leading-relaxed">{T.vrPartnerDesc}</p>
              <div className="space-y-3">
                {[T.vrPartnerReq1, T.vrPartnerReq2, T.vrPartnerReq3].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-purple-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm border border-blue-300/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">{T.ipPartner}</h3>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">{T.ipPartnerDesc}</p>
              <div className="space-y-3">
                {[T.ipPartnerReq1, T.ipPartnerReq2, T.ipPartnerReq3].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" ref={ctaRef} className={`py-20 transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{T.ctaTitle}</h2>
              <RawHTMLP html={T.ctaDesc} className="text-xl text-blue-100" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="company">{T.companyName}</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors" placeholder={T.companyNamePlaceholder} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">{T.contactName}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors" placeholder={T.contactNamePlaceholder} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">{T.email}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors" placeholder={T.emailPlaceholder} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">{T.phone}</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors" placeholder={T.phonePlaceholder} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="interest">{T.interestField}</label>
                <select id="interest" name="interest" value={formData.interest} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white">
                  <option value="" className="bg-gray-800">{T.interestFieldPlaceholder}</option>
                  <option value="vr-production" className="bg-gray-800">{T.interestVr}</option>
                  <option value="ip-provider" className="bg-gray-800">{T.interestIp}</option>
                  <option value="joint-business" className="bg-gray-800">{T.interestJoint}</option>
                  <option value="other" className="bg-gray-800">{T.interestOther}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="ip">{T.interestIpField}</label>
                <input type="text" id="ip" name="ip" value={formData.ip} onChange={handleInputChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors" placeholder={T.interestIpPlaceholder} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{T.submitMeeting}</span>
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>{T.submitInquiry}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. XROMEDA 링크 섹션 추가 */}
      <section className="py-12 text-center">
        <a 
          href="https://xromeda.com/creators" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-lg text-blue-200 hover:text-white transition-colors group"
        >
          <span>{T.xromedaLinkText}</span>
          <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold">V</div>
                <span className="text-xl font-bold">VROOK</span>
              </div>
              <p className="text-blue-200 mb-4">{T.footerDesc}</p>
              <div className="text-sm text-blue-300">Powered by <strong>XROMEDA Inc.</strong></div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">{T.contactInfo}</h3>
              <div className="space-y-2 text-blue-200">
                <p>사업자등록번호: [TBD]</p>
                <p>{T.address}: [Company Address]</p>
                <p>{T.phone}: [Phone Number]</p>
                <p>이메일: contact@xromeda.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">{T.keywords}</h3>
              <div className="flex flex-wrap gap-2">
                {[ '#XR', '#VR', '#AI', '#콘텐츠제작', '#IP사업', '#팬덤플랫폼', '#일본시장', '#XRFairTokyo', '#XROMEDA', '#VROOK', '#가상현실', '#몰입형콘텐츠', '#파트너십', '#일본엔터테인먼트', '#MCN', '#VR영상제작' ].map((tag, index) => (
                  <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded-full text-blue-200">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-blue-300">{T.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VROOKLandingPage;