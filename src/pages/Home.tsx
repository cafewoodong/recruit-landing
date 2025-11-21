
import { RecruitForm } from "@/components/RecruitForm"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Check,
  ChevronDown
} from "lucide-react"

/**
 * Home Component
 * 프라임에셋 입사 모집 랜딩 페이지
 */
export default function Home() {
  const scrollToForm = () => {
    const formElement = document.getElementById('recruit-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="font-bold text-xl text-blue-900 flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-600" />
            PRIME ASSET
          </div>
          <Button size="sm" onClick={scrollToForm} className="bg-blue-600 hover:bg-blue-700">
            상담 신청
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-40">
             <img 
              src="https://pub-cdn.sider.ai/u/U0KAHZ1EG2Y/web-coder/691f0bf5965d1d957f04d528/resource/3dce58d7-caa2-4d46-9ecc-0a6fb46be004.jpg" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center break-keep">
            <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm font-medium bg-blue-500/20 text-blue-100 border-blue-400/30">
              2025년 프라임에셋 특별 모집
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-snug md:leading-tight">
              당신의 가치를 <br className="hidden md:block" />
              <span className="text-blue-400">가장 투명하게</span> 증명하세요
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              업계 최고의 수수료율, 공정한 승급 시스템, 
              그리고 전문가로 성장할 수 있는 체계적인 교육을 약속합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={scrollToForm} className="w-full sm:w-auto text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20">
                지금 지원하기
              </Button>
              <a 
                href="https://www.primeasset.kr/about/company" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full text-lg px-8 py-6 text-slate-900 border-white/20 bg-white/10 hover:bg-white/20 text-white hover:text-white">
                  자세히 알아보기
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 break-keep">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                왜 <span className="text-blue-600">프라임에셋</span>인가요?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                단순한 보험 대리점이 아닙니다. <br className="hidden md:block"/>
                우리는 설계사님의 성장이 곧 회사의 성장이라 믿습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
                  title: "업계 최고 수준 수수료",
                  description: "투명하게 공개된 수수료 규정에 따라, 노력한 만큼 정당하게 보상받으세요. 관리자 오버라이딩 없이 투명합니다."
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-blue-600" />,
                  title: "공정한 승급 시스템",
                  description: "밸류체인 시스템을 통해 누구나 본부장까지 승격할 수 있습니다. 인맥이 아닌 실력으로 평가받습니다."
                },
                {
                  icon: <Users className="h-10 w-10 text-blue-600" />,
                  title: "체계적인 교육 지원",
                  description: "신입 정착 교육부터 전문가 심화 과정까지. 혼자가 아닌 함께 성장하는 문화를 지향합니다."
                }
              ].map((feature, index) => (
                <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow text-center md:text-left">
                  <div className="mb-4 p-3 bg-blue-100 rounded-xl w-fit mx-auto md:mx-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed break-keep">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Detail Section (Blog Summary) */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 space-y-6 text-center md:text-left break-keep">
                <h2 className="text-3xl font-bold text-slate-900">
                  보험 영업의 <br className="hidden md:block"/>
                  <span className="text-blue-600">새로운 기준</span>을 제시합니다
                </h2>
                <ul className="space-y-4 text-left inline-block md:block">
                  {[
                    "33개 보험사 제휴로 폭넓은 상품 설계 가능",
                    "영업 가족을 위한 다양한 시책 및 프로모션",
                    "DB 제공 및 영업 지원 시스템 완비",
                    "수평적이고 자유로운 조직 문화"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 pt-4 leading-relaxed">
                  경력직 설계사님에게는 전직장 소득 증빙에 따른 최고의 우대 조건을, 
                  신입 설계사님에게는 체계적인 정착 프로그램을 지원합니다.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                   <img 
                    src="https://pub-cdn.sider.ai/u/U0KAHZ1EG2Y/web-coder/691f0bf5965d1d957f04d528/resource/3ff15e7b-f28e-4358-b46e-d85929b11d4a.jpg" 
                    alt="Growth" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-6 break-keep">
                    <div className="text-sm text-blue-600 font-bold mb-2">GROWTH SYSTEM</div>
                    <h4 className="text-xl font-bold mb-2">밸류체인 (Value-Chain)</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      프라임에셋만의 독보적인 승격 시스템으로, 
                      개인의 성과가 곧 조직의 성장으로 이어지는 선순환 구조를 만듭니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recruitment Form Section */}
        <section id="recruit-form" className="py-24 bg-blue-900 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10 text-white break-keep">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">지금 바로 도전하세요</h2>
              <p className="text-blue-200 text-lg">
                간단한 정보를 남겨주시면 담당자가 친절하게 안내해 드립니다.
              </p>
            </div>
            
            <RecruitForm />
            
            <div className="mt-12 text-center text-blue-300/60 text-sm space-y-1 break-keep px-4">
              <p className="font-semibold text-blue-200">프라임에셋 마스터사업부</p>
              <p>서울 구로구 항동 산51-1, 구로SKV1센터 201호 프라임에셋 마스터사업부 서울사무소</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-sm">
          <p className="mb-2">© 2025 Prime Asset Recruitment. All rights reserved.</p>
          <p>본 페이지는 보험설계사 모집을 위한 홍보 페이지입니다.</p>
        </div>
      </footer>
      
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Button 
          onClick={scrollToForm}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 p-0 flex items-center justify-center"
        >
          <ChevronDown className="h-6 w-6 text-white animate-bounce" />
        </Button>
      </div>
    </div>
  )
}
