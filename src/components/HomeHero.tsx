import React from 'react';
import { 
  Sparkles, ArrowLeft, CheckCircle2, Award, Building2, 
  Compass, FileText, Scale, Briefcase, Star, Clock, MapPin, 
  ChevronLeft, ShieldCheck, Rocket, ChevronRight, Eye
} from 'lucide-react';
import { SpecialtyItem } from '../types';
import { DEGREES_INFO, TRAINING_MODES_INFO } from '../data/metadata';
import { getSpecialtyDetailedProfile } from '../data/specialtyProfiles';

// Collaboration Hero Image
const HERO_IMAGE = '/src/assets/images/hero_trainees_collaboration_1786780228879.jpg';

interface HomeHeroProps {
  onExploreCatalog: () => void;
  onOpenOrientation?: () => void;
  onOpenGuide: () => void;
  onOpenCareers?: () => void;
  popularSpecialties?: SpecialtyItem[];
  onSelectSpecialty: (specialty: SpecialtyItem) => void;
  favorites?: string[];
  onToggleFavorite?: (id: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onExploreCatalog,
  onOpenOrientation,
  onOpenGuide,
  onOpenCareers,
  popularSpecialties = [],
  onSelectSpecialty,
  favorites = [],
  onToggleFavorite
}) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      {/* 1. Main Hero Banner Section (Like Top-Left in Template) */}
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg relative overflow-hidden">
        {/* Glow and design accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          {/* Text & CTAs (Col 7) */}
          <div className="lg:col-span-7 space-y-5 text-right">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>دورة التكوين والتعليم المهنيين — ولاية غرداية</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              انطلق في مسارك المهني وحدد مستقبلك
            </h1>

            <p className="text-xs sm:text-base text-emerald-100/90 leading-relaxed font-normal max-w-2xl">
              بوابة ولاية غرداية الموحدة لاستكشاف التخصصات والشهادات الوطنية المعتمدة، التصنيف القانوني في الوظيف العمومي (الأمر 06-03)، ومناصب العمل الواعدة في كبرى الشركات.
            </p>

            {/* Value checklist pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-emerald-100 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-emerald-950 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>شهادات دولة معتمدة (BTS, BT, CAP)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-emerald-950 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>تكوين مجاني 100% مع منحة شهرية</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-emerald-950 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>تربص تطبيقي ميداني في كبرى الشركات</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-emerald-950 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>فرص تمويل المشاريع المصغرة (NESDA)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onExploreCatalog}
                className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-md flex items-center gap-2"
              >
                <span>استكشف دليل التخصصات</span>
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenOrientation}
                className="bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/20 transition flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-emerald-300" />
                <span>مستشار التوجيه الذكي</span>
              </button>

              <button
                onClick={onOpenCareers}
                className="bg-emerald-950/60 hover:bg-emerald-950 text-emerald-200 font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl border border-emerald-700/60 transition flex items-center gap-1.5"
              >
                <Scale className="w-4 h-4 text-amber-300" />
                <span>التصنيف القانوني والمهن</span>
              </button>
            </div>
          </div>

          {/* Hero Collage Image (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-emerald-950 group">
              <img
                src={HERO_IMAGE}
                alt="متكونون ومتربصون في ورشة التكوين المهني بغرداية"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover object-center transition duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <div className="text-white">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600 text-white inline-flex items-center gap-1 mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>ورشات تطبيقية حديثة</span>
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-100">
                    تأطير تطبيقي ونظري متكامل وفق أحدث المعايير المهنية
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Trust Card Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-medium">الشهادات المسلّمة</p>
                <p className="text-xs font-bold text-slate-900">شهادات دولة معتمدة 100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Employment & Partnership Trust Strip */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs">
        <p className="text-xs font-bold text-slate-500 text-center uppercase tracking-wider mb-4">
          تخصصات مؤهلة للعمل والتربص لدى كبرى الهيئات والمؤسسات الوطنية والاقتصادية
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-slate-700">
          <span className="px-3.5 py-1.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>مجمع سوناطراك</span>
          </span>
          <span className="px-3.5 py-1.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            <span>الشركة الوطنية سونلغاز</span>
          </span>
          <span className="px-3.5 py-1.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>اتصالات الجزائر وموبيليس</span>
          </span>
          <span className="px-3.5 py-1.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            <span>المراكز الاستشفائية والمستشفيات</span>
          </span>
          <span className="px-3.5 py-1.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>مجمع كوسيدار للبناء والري</span>
          </span>
          <span className="px-3.5 py-1.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-1.5">
            <Rocket className="w-3.5 h-3.5 text-purple-600" />
            <span>الوكالة الوطنية لدعم المقاولاتية (NESDA)</span>
          </span>
        </div>
      </div>

      {/* 3. Key Statistics Numbers Strip (Matching About Screen in Template) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">150+</p>
            <p className="text-xs text-slate-500 font-medium">تخصص مهني معتمد</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">12+</p>
            <p className="text-xs text-slate-500 font-medium">مؤسسة ومعهد تكويني</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">8</p>
            <p className="text-xs text-slate-500 font-medium">بلديات مغطاة بالولاية</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">100%</p>
            <p className="text-xs text-slate-500 font-medium">شهادات وطنية مصنفة</p>
          </div>
        </div>
      </div>

      {/* 4. Popular Courses / التخصصات الأكثر طلباً (Matching "Our popular course" in template) */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                التخصصات الأكثر طلباً في سوق الشغل بولاية غرداية
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              تخصصات واعدة في الصناعة، الطاقات المتجددة، التقنيات البيوطبية، والإعلام الآلي
            </p>
          </div>

          <button
            onClick={onExploreCatalog}
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-xl transition flex items-center gap-1.5"
          >
            <span>استعراض جميع التخصصات</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Popular Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularSpecialties.map((spec) => {
            const degInfo = DEGREES_INFO[spec.degree];
            const modeInfo = TRAINING_MODES_INFO[spec.trainingMode];
            const profile = getSpecialtyDetailedProfile(spec.title, spec.degree, spec.sector);
            const isFav = favorites.includes(spec.id);

            return (
              <div
                key={spec.id}
                onClick={() => onSelectSpecialty(spec)}
                className="bg-white rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Photo thumbnail */}
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                    <img
                      src={profile.imageUrl || HERO_IMAGE}
                      alt={profile.imageAlt || spec.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end justify-between p-3.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600 text-white shadow-xs">
                        {spec.sectorLabel}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/90 text-slate-900 shadow-xs">
                        {degInfo.shortArabic}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {profile.civilServiceCategory.split('—')[0]}
                      </span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        <span>{spec.duration}</span>
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition">
                      {spec.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {profile.overview}
                    </p>

                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1 border-t border-gray-100">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{spec.institutionName}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 sm:p-5 pt-0 flex items-center justify-between gap-2 border-t border-gray-50">
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <span>عرض التفاصيل الكاملة</span>
                    <ChevronLeft className="w-3.5 h-3.5 transition transform group-hover:-translate-x-1" />
                  </span>

                  <span className="text-[10px] text-slate-400 font-medium">
                    ولاية غرداية ({spec.municipality})
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
