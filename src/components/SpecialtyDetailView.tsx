import React, { useState } from 'react';
import { 
  ArrowRight, Bookmark, Building2, MapPin, Calendar, Award, 
  CheckCircle2, FileText, Share2, Compass, Layers, Briefcase, 
  Scale, Lightbulb, Check, Sparkles, Building, Rocket, ChevronRight, 
  Eye, ChevronDown, ChevronUp, ShieldCheck, Download, ExternalLink,
  Clock, GraduationCap, UserCheck, Phone, CheckSquare
} from 'lucide-react';
import { SpecialtyItem } from '../types';
import { DEGREES_INFO, TRAINING_MODES_INFO } from '../data/metadata';
import { getSpecialtyDetailedProfile } from '../data/specialtyProfiles';

interface SpecialtyDetailViewProps {
  specialty: SpecialtyItem;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenGuide: () => void;
  onSelectRelated?: (specialty: SpecialtyItem) => void;
  onSelectOtherSpecialty?: (specialty: SpecialtyItem) => void;
}

export const SpecialtyDetailView: React.FC<SpecialtyDetailViewProps> = ({
  specialty,
  onBack,
  isFavorite,
  onToggleFavorite,
  onOpenGuide
}) => {
  const [copied, setCopied] = useState(false);
  const [openModule, setOpenModule] = useState<number | null>(0);

  const degInfo = DEGREES_INFO[specialty.degree];
  const modeInfo = TRAINING_MODES_INFO[specialty.trainingMode];
  const profile = getSpecialtyDetailedProfile(specialty.title, specialty.degree, specialty.sector);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `دليل التكوين المهني غرداية | تخصص: ${specialty.title} (${degInfo.arabicName}) - ${profile.civilServiceCategory} - المؤسسة: ${specialty.institutionName} - بلدية ${specialty.municipality}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  // Sample curriculum modules tailored to the degree and specialty
  const modulesList = [
    {
      title: "الوحدة الأولى: المبادئ العامة والمفاهيم النظرية الأساسية",
      hours: "120 ساعة تدريبية",
      description: `دراسة الأسس النظرية والتقنية المتعلقة بـ ${specialty.title}، وقراءة المخططات الفنية، والمصطلحات المهنية، وقواعد الأمن والسلامة في الورشة.`
    },
    {
      title: "الوحدة الثانية: التطبيقات التقنية واستخدام التجهيزات والبرمجيات",
      hours: "240 ساعة تدريبية",
      description: "التدريب الميداني على الأجهزة الحديثة، القياسات الفنية، واستخدام المعدات التخصصية والبرمجيات ذات الصلة تحت إشراف الأساتذة المؤطرين."
    },
    {
      title: "الوحدة الثالثة: التشخيص والصيانة ومراقبة الجودة",
      hours: "180 ساعة تدريبية",
      description: "معايير الجودة الجزائرية، كشف الأعطال وتصليحها، بروتوكولات المعايرة والصيانة الوقائية، وإعداد التقارير الفنية الدورية."
    },
    {
      title: "الوحدة الرابعة: التربص التطبيقي الميداني في الوسط المهني ومذكرة التخرج",
      hours: "300 ساعة (تربص ميداني)",
      description: "تربص تطبيقي مغلق في إحدى المؤسسات الاقتصادية الشريكة (سوناطراك، سونلغاز، مستشفيات الولاية، أو الورشات الكبرى) مع إعداد ومناقشة مشروع نهاية التكوين."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6 animate-in fade-in duration-200 pb-12">
      {/* Top Breadcrumbs & Back Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-gray-200 shadow-xs">
        <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
          <button 
            onClick={onBack}
            className="hover:text-emerald-700 font-medium flex items-center gap-1 transition"
          >
            <span>الرئيسية</span>
          </button>
          <span>/</span>
          <button 
            onClick={onBack}
            className="hover:text-emerald-700 font-medium transition"
          >
            <span>دليل التخصصات</span>
          </button>
          <span>/</span>
          <span className="text-emerald-800 font-bold truncate max-w-xs">{specialty.title}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>العودة إلى التخصصات</span>
          </button>

          <button
            onClick={() => onToggleFavorite(specialty.id)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition ${
              isFavorite
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-white text-slate-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{isFavorite ? 'محفوظ بالمفضلة' : 'حفظ في المفضلة'}</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white text-slate-700 border border-gray-200 hover:bg-gray-50 rounded-xl transition"
            title="نسخ ومشاركة معلومات التخصص"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">تم النسخ</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-slate-500" />
                <span>مشاركة</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Hero Banner Header (Matching the Qourse Template Green Top) */}
      <div className="bg-gradient-to-l from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-4">
          {/* Badge Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full font-bold bg-white text-emerald-950 shadow-xs border border-white/20">
              {degInfo.shortArabic} — المستوى {degInfo.levelNumber}
            </span>
            <span className="px-3 py-1 rounded-full font-semibold bg-emerald-700/80 text-emerald-100 border border-emerald-600">
              {modeInfo.name}
            </span>
            <span className="px-3 py-1 rounded-full font-semibold bg-amber-400/20 text-amber-200 border border-amber-400/30 flex items-center gap-1">
              <Scale className="w-3 h-3 text-amber-300" />
              <span>{profile.civilServiceCategory.split('—')[0]}</span>
            </span>
            <span className="px-3 py-1 rounded-full font-medium bg-white/10 text-emerald-100 border border-white/15">
              {specialty.sectorLabel}
            </span>
          </div>

          {/* Specialty Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
            {specialty.title}
          </h1>

          {/* Key Meta row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-emerald-100/90 pt-1 font-medium">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>{specialty.institutionName}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-300 shrink-0" />
              <span>ولاية غرداية • بلدية {specialty.municipality}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-300 shrink-0" />
              <span>مدة التكوين: {specialty.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-teal-300 shrink-0" />
              <span>المستوى المطلوب: {specialty.requiredLevel}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Layout (Matching "Course Detail" 4th screen in uploaded image) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* RIGHT (MAIN) COLUMN: Detailed Sections */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section 1: About the Course / نبذة وتعريف شامل بالتخصص */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 border-b border-gray-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="text-base sm:text-lg font-bold">
                نبذة وتعريف شامل بالتخصص (About the specialty)
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {profile.overview}
            </p>

            <div className="bg-emerald-50/60 border border-emerald-150 rounded-xl p-4 text-xs text-emerald-950 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                <Compass className="w-4 h-4 text-emerald-700" />
                <span>طبيعة جهاز التكوين: {modeInfo.name}</span>
              </div>
              <p className="text-emerald-900/85 leading-relaxed">
                {modeInfo.description}
              </p>
            </div>
          </div>

          {/* Section 2: What you will learn / الكفاءات والمهارات المكتسبة */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 border-b border-gray-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <CheckSquare className="w-4 h-4" />
              </div>
              <h2 className="text-base sm:text-lg font-bold">
                ماذا ستتعلم؟ والكفاءات المكتسبة (What you will learn)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {profile.keyCompetencies.map((comp, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 bg-gray-50/90 hover:bg-emerald-50/50 p-3.5 rounded-xl border border-gray-200/80 transition"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 leading-snug font-medium">
                    {comp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Course Curriculum & Modules / محاور وبرنامج التكوين */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2.5 text-slate-900">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold">
                    محاور وبرنامج التكوين (Course content)
                  </h2>
                  <p className="text-[11px] text-slate-500 font-normal">
                    وفق البرنامج البيداغوجي المعتمد من المعهد الوطني للتكوين المهني (INFEP)
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                4 محاور رئيسية
              </span>
            </div>

            {/* Accordion List */}
            <div className="space-y-2.5 pt-1">
              {modulesList.map((mod, idx) => {
                const isOpen = openModule === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenModule(isOpen ? null : idx)}
                      className="w-full text-right p-4 bg-gray-50/80 hover:bg-gray-100 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-800 transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span>{mod.title}</span>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[11px] font-normal text-slate-500 hidden sm:inline-block">
                          {mod.hours}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-emerald-700" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="p-4 bg-white border-t border-gray-100 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                        <p>{mod.description}</p>
                        <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-semibold pt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>يشمل تقييمات واختبارات دورية ومتابعة من الأستاذ المؤطر</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Legal Classification in Algerian Civil Service Law (الأمر 06-03 والمرسوم 07-304) */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 border-b border-gray-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold">
                  التصنيف الرسمي في الوظيف العمومي والتشريع الجزائري
                </h2>
                <p className="text-[11px] text-slate-500 font-normal">
                  بموجب الأمر 06-03 والمرسوم الرئاسي 07-304 المحدد لشبكة أجور الموظفين
                </p>
              </div>
            </div>

            <div className="bg-indigo-900 text-white rounded-2xl p-5 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs text-indigo-200 font-medium">الرتبة والتصنيف المعتمد:</span>
                <span className="bg-amber-400 text-indigo-950 font-bold px-3 py-0.5 rounded-full text-xs">
                  {degInfo.shortArabic} — رتبة معتمدة
                </span>
              </div>
              <p className="text-sm sm:text-base font-bold text-white">
                {profile.civilServiceCategory}
              </p>
              <p className="text-xs text-indigo-200/90 leading-relaxed pt-1">
                يمنح حامل هذه الشهادة الحق القانوني للمشاركة في مسابقات التوظيف على أساس الاختبارات والشهادة، وتولي المناصب المطابقة في قطاع الوظيفة العمومية والشركات الاقتصادية.
              </p>
            </div>

            {/* Careers List */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <span>المناصب والوظائف المتاحة لخريجي هذا التخصص:</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profile.suitableCareers.map((car, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 block leading-snug">{car}</span>
                      <span className="text-[10px] text-slate-500 font-medium">منصب مصنف في مدونة المهن الجزائرية</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Entrepreneurship / NESDA & ANGEM */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 text-xs space-y-1.5">
              <div className="font-bold text-amber-950 flex items-center gap-1.5">
                <Rocket className="w-4 h-4 text-amber-700" />
                <span>فرص ريادة الأعمال والاستثمار الخاص والدعم المالي:</span>
              </div>
              <p className="text-amber-900 leading-relaxed">
                {profile.entrepreneurshipOpportunities}
              </p>
            </div>
          </div>

          {/* Section 5: Admission Requirements & Registration Checklist */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2.5 text-slate-900">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <h2 className="text-base sm:text-lg font-bold">
                  شروط الالتحاق والوثائق المطلوبة لملف التسجيل
                </h2>
              </div>

              <button
                onClick={onOpenGuide}
                className="text-xs text-emerald-700 font-bold hover:underline"
              >
                الدليل التوجيهي الشامل
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>استمارة التسجيل عبر منصة (مهنتي - Mihnati)</span>
              </div>
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>نسخة طبق الأصل من الشهادة المدرسية</span>
              </div>
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>شهادة ميلاد أصلية حديثة</span>
              </div>
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>02 إلى 04 صور شمسية للمترشح</span>
              </div>
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>02 أظرفة بريدية عليها طابع وعنوان المترشح</span>
              </div>
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>وصل تسديد حقوق التسجيل الرمزية</span>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT (SIDEBAR) STICKY CARD: Quick Facts & Direct Enrollment (Like Course Detail screen in image) */}
        <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
          {/* Main Action Box */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden p-5 sm:p-6 space-y-5">
            {/* Trainee Trade Image Preview */}
            {profile.imageUrl ? (
              <div className="rounded-2xl overflow-hidden border border-gray-200 relative group bg-slate-900 shadow-inner">
                <img
                  src={profile.imageUrl}
                  alt={profile.imageAlt || specialty.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-48 sm:h-52 object-cover object-center transition duration-300 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3.5">
                  <div className="text-white text-xs">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600 text-white inline-flex items-center gap-1 mb-1 shadow-xs">
                      <Eye className="w-3 h-3" />
                      <span>بيئة عمل المتكون الميدانية</span>
                    </span>
                    <p className="font-semibold text-slate-100 truncate">
                      {profile.imageAlt}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Price / Tuition Tag (Free State Training in Algeria) */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
              <span className="text-[11px] font-semibold text-emerald-800 block">
                تكلفة التكوين في المراكز والمعاهد العمومية
              </span>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-900 tracking-tight my-0.5">
                تكوين مجاني 100% <span className="text-xs font-normal text-emerald-700">(مدعوم من الدولة)</span>
              </div>
              <p className="text-[10px] text-emerald-700">
                مع الاستفادة من منحة دراسية شهرية وتأمين اجتماعي طوال فترة التكوين
              </p>
            </div>

            {/* Primary Big CTA Button */}
            <a
              href="https://takwin.dz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 group text-center"
            >
              <span>سجل الآن عبر منصة تكوين (Takwin.dz)</span>
              <ExternalLink className="w-4 h-4 transition transform group-hover:translate-x-0.5" />
            </a>

            {/* Secondary Action: Print Card */}
            <button
              onClick={handlePrint}
              className="w-full bg-gray-50 hover:bg-gray-100 text-slate-700 font-semibold text-xs py-2.5 px-4 rounded-xl border border-gray-200 transition flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>طباعة بطاقة التخصص PDF</span>
            </button>

            {/* Course Key Specs List */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h4 className="text-xs font-bold text-slate-900">
                بطاقة معلومات التخصص:
              </h4>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                    <span>المستوى الدراسي:</span>
                  </span>
                  <span className="font-bold text-slate-900">{specialty.requiredLevel}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>مدة التكوين:</span>
                  </span>
                  <span className="font-bold text-slate-900">{specialty.duration}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-emerald-600" />
                    <span>نمط التكوين:</span>
                  </span>
                  <span className="font-bold text-emerald-800">{modeInfo.name}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>الشهادة المسلمة:</span>
                  </span>
                  <span className="font-bold text-slate-900">{degInfo.shortArabic}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-amber-600" />
                    <span>التصنيف القانوني:</span>
                  </span>
                  <span className="font-bold text-amber-800">{profile.civilServiceCategory.split('—')[0]}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>البلدية:</span>
                  </span>
                  <span className="font-bold text-slate-900">{specialty.municipality}</span>
                </div>
              </div>
            </div>

            {/* Value Highlights Checklist */}
            <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200 text-xs space-y-2">
              <h5 className="font-bold text-slate-900 mb-1">امتيازات مسار التكوين:</h5>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>شهادة وطنية معتمدة من الدولة الجزائرية</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>تأمين اجتماعي ومنحة دراسية شهرية</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>تربص تطبيقي في كبرى المؤسسات الاقتصادية</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>إمكانية الترقية ومواصلة التكوين عبر المعابر</span>
              </div>
            </div>

            {/* Institution Contact Card */}
            <div className="border border-gray-200 rounded-2xl p-4 bg-white space-y-2">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                المؤسسة المستقبلة للتسجيل:
              </span>
              <p className="text-xs font-bold text-slate-900">
                {specialty.institutionName}
              </p>
              <p className="text-[11px] text-slate-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                <span>بلدية {specialty.municipality}، ولاية غرداية</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
