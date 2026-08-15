import React, { useState } from 'react';
import { 
  Scale, Briefcase, Award, CheckCircle2, Building, Rocket, 
  Search, ShieldCheck, ChevronLeft, Eye, ExternalLink, Sparkles
} from 'lucide-react';
import { SPECIALTY_PROFILES_DATA, TRADE_IMAGES } from '../data/specialtyProfiles';

interface CareersAndLegalGuideProps {
  onSelectSpecialtyByName?: (name: string) => void;
}

export const CareersAndLegalGuide: React.FC<CareersAndLegalGuideProps> = ({
  onSelectSpecialtyByName
}) => {
  const [selectedTrade, setSelectedTrade] = useState<string>("صيانة المُعدّات الطبية");
  const [searchQuery, setSearchQuery] = useState("");

  const profilesList = Object.values(SPECIALTY_PROFILES_DATA);

  const filteredProfiles = profilesList.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.suitableCareers.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
    p.civilServiceCategory.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentProfile = SPECIALTY_PROFILES_DATA[selectedTrade] || profilesList[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Hero Banner */}
      <div className="bg-indigo-900 text-white rounded-2xl p-6 sm:p-7 shadow-sm border border-indigo-800 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-indigo-200 text-xs px-3 py-1 rounded-full font-bold mb-3">
            <Scale className="w-3.5 h-3.5 text-indigo-300" />
            <span>مدونة المهن والتصنيف في الوظيف العمومي والتشريع الجزائري</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
            المناصب الوظيفية، التصنيف القانوني، وبيئة عمل المتخرجين
          </h2>
          <p className="text-xs sm:text-sm text-indigo-200/90 leading-relaxed font-normal">
            استكشف تعريف كل تخصص، الرتبة الرسمية في شبكة الأجور (الأمر 06-03 والمرسوم 07-304)، الآفاق المهنية في القطاعين العام والخاص، وفرص ريادة الأعمال المدعومة.
          </p>
        </div>
      </div>

      {/* Official Legal Classification Matrix Summary */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-600" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            سلم تصنيف شهادات التكوين المهني في الوظيفة العمومية الجزائرية (الأمر 06-03 والمرسوم 07-304)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-xl border border-indigo-200 bg-indigo-50/50">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-indigo-950">تقني سامي (BTS)</span>
              <span className="bg-indigo-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">الصنف 10</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              المستوى 5 (الرقم الاستدلالي 453) — قبول بالثالثة ثانوي كاملة (3AS). رتبة تقني سامي وإشراف تقني وتطبيقي.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-blue-950">تقني (BT)</span>
              <span className="bg-blue-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">الصنف 08</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              المستوى 4 (الرقم الاستدلالي 379) — قبول بالثانية ثانوي كاملة (2AS) أو معابر. رتبة تقني في الأسلاك المشتركة.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-emerald-950">كفاءة مهنية (CAP)</span>
              <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">الصنف 06</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              المستوى 3 (الرقم الاستدلالي 315) — قبول بالرابعة متوسط (4AM). رتبة عون تقني / عامل مهني مؤهل.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/50">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-amber-950">تحكم مهني (CMP)</span>
              <span className="bg-amber-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">الصنف 05</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              المستوى 2 (الرقم الاستدلالي 288) — قبول بالثانية أو الثالثة متوسط. رتبة عامل مهني متخصص.
            </p>
          </div>
        </div>

        {/* Vital Note on Economic Sector and Conventions */}
        <div className="p-4 rounded-xl bg-slate-900 text-white text-xs space-y-2 border border-slate-800">
          <div className="flex items-center gap-2 font-bold text-amber-300">
            <Scale className="w-4 h-4" />
            <span>تنبيه تشريعي هام: تصنيف المؤسسات الاقتصادية (القطاع الاقتصادي العام والخاص)</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            تخضع الشركات والمؤسسات الاقتصادية (مثل شركات قطاع المحروقات، مجمعات سوناطراك وسونلغاز، البنوك، المقاولات ومصانع القطاع الخاص) <strong>للاتفاقيات الجماعية (Conventions Collectives)</strong> والأنظمة الداخلية وشبكات أجور مستقلة خاصة بها مبنية على منصب العمل، الخبرة الميدانية، والإنتاجية وساعات العمل، ولا تطبق الشبكة الاستدلالية للوظيفة العمومية.
          </p>
        </div>
      </div>

      {/* Interactive Trade Profile Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Trade Selector List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
            <h4 className="text-xs font-bold text-slate-800 mb-2.5 flex items-center justify-between">
              <span>اختر التخصص لاستعراض تعريفه ومهنه:</span>
              <span className="text-[11px] text-slate-500 font-normal">({filteredProfiles.length} تخصص)</span>
            </h4>

            {/* Quick Search */}
            <div className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن منصب أو تخصص..."
                className="w-full bg-gray-50 text-xs px-3 py-2 pr-8 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Trade Buttons */}
            <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
              {filteredProfiles.map((p) => {
                const isSelected = selectedTrade === p.title || p.title.includes(selectedTrade);
                return (
                  <button
                    key={p.title}
                    onClick={() => setSelectedTrade(p.title)}
                    className={`w-full text-right p-3 rounded-xl border text-xs transition flex flex-col gap-1 ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold shadow-xs'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-slate-700 font-medium'
                    }`}
                  >
                    <span className="leading-snug">{p.title}</span>
                    <span className="text-[10px] text-indigo-700 font-normal truncate">
                      {p.civilServiceCategory.split('—')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Trade Card with Real Photo */}
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-5 sm:p-6 space-y-5">
            {/* Header of selected profile */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800 border border-indigo-200">
                  {currentProfile.degreeLevelName}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {currentProfile.civilServiceCategory.split('—')[0]}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentProfile.title}
              </h3>
            </div>

            {/* Photo of Trainee in Action */}
            {currentProfile.imageUrl && (
              <div className="rounded-xl overflow-hidden border border-gray-200 relative group bg-slate-900">
                <img
                  src={currentProfile.imageUrl}
                  alt={currentProfile.imageAlt || "المتكون أثناء أداء مهنته"}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-600 text-white inline-flex items-center gap-1 mb-1">
                      <Eye className="w-3 h-3" />
                      <span>صورة تجسيدية لبيئة عمل المتكون الميدانية</span>
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-100">
                      {currentProfile.imageAlt}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Overview & Definition */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h4 className="text-xs font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>تعريف ونبذة التخصص:</span>
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {currentProfile.overview}
              </p>
            </div>

            {/* Suitable Careers List */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-2.5 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <span>المناصب والوظائف التي يشغلها الخريج (مدونة المهن الجزائرية):</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {currentProfile.suitableCareers.map((career, idx) => (
                  <div key={idx} className="bg-indigo-50/40 p-3 rounded-lg border border-indigo-150 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-indigo-950 leading-snug">{career}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Classification Details */}
            <div className="bg-indigo-900 text-white p-4 rounded-xl">
              <div className="flex items-center gap-2 font-bold text-xs mb-1">
                <Scale className="w-4 h-4 text-indigo-300" />
                <span>التصنيف القانوني في الوظيف العمومي:</span>
              </div>
              <p className="text-xs text-indigo-100 font-semibold mb-1">
                {currentProfile.civilServiceCategory}
              </p>
              <p className="text-[11px] text-indigo-200/90 leading-relaxed">
                محدد رسمياً وفق أحكام الأمر 06-03 المتضمن القانون الأساسي للوظيفة العمومية، مع حق الترقية عبر المسابقات والمعابر.
              </p>
            </div>

            {/* Key Competencies */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>الكفاءات التقنية والتطبيقية المكتسبة:</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {currentProfile.keyCompetencies.map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entrepreneurship Opportunity */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h4 className="text-xs font-bold text-amber-950 mb-1 flex items-center gap-1.5">
                <Rocket className="w-4 h-4 text-amber-700" />
                <span>فرص الاستثمار الخاص والتمويل المدعوم (NESDA / ANGEM):</span>
              </h4>
              <p className="text-xs text-amber-900 leading-relaxed">
                {currentProfile.entrepreneurshipOpportunities}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
