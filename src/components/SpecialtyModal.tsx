import React, { useState } from 'react';
import { 
  X, Bookmark, Building2, MapPin, Calendar, Award, CheckCircle2, 
  FileText, Share2, Compass, Layers, Briefcase, Scale, Lightbulb, 
  Check, Sparkles, Building, Rocket, ChevronRight, Eye
} from 'lucide-react';
import { SpecialtyItem } from '../types';
import { DEGREES_INFO, TRAINING_MODES_INFO } from '../data/metadata';
import { getSpecialtyDetailedProfile } from '../data/specialtyProfiles';

interface SpecialtyModalProps {
  specialty: SpecialtyItem | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenGuide: () => void;
}

export const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
  specialty,
  onClose,
  isFavorite,
  onToggleFavorite,
  onOpenGuide
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'careers' | 'legal' | 'registration'>('overview');
  const [copied, setCopied] = useState(false);

  if (!specialty) return null;

  const degInfo = DEGREES_INFO[specialty.degree];
  const modeInfo = TRAINING_MODES_INFO[specialty.trainingMode];
  const profile = getSpecialtyDetailedProfile(specialty.title, specialty.degree, specialty.sector);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `تخصص: ${specialty.title} (${degInfo.arabicName}) - ${profile.civilServiceCategory} - ${specialty.institutionName} - ولاية غرداية`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-4 sm:my-8 animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-indigo-900 text-white p-4 sm:p-6 relative border-b border-indigo-800 shrink-0">
          <button
            onClick={onClose}
            className="absolute left-4 top-4 text-indigo-200 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-lg border border-white/15 transition"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border ${degInfo.badgeClass}`}>
              {degInfo.shortArabic} | {degInfo.frenchCode} — المستوى {degInfo.levelNumber > 0 ? degInfo.levelNumber : 'التأهيلي'}
            </span>
            <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded border ${modeInfo.badgeColor}`}>
              {modeInfo.name}
            </span>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-indigo-800/80 text-indigo-200 border border-indigo-700">
              {specialty.sectorLabel}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
            {specialty.title}
          </h2>

          <p className="text-xs text-indigo-200/90 flex flex-wrap items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
            <span className="font-medium">{specialty.institutionName}</span>
            <span>•</span>
            <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>ولاية غرداية (بلدية {specialty.municipality})</span>
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 border-b border-gray-200 bg-gray-50/80 text-xs font-semibold text-slate-600 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-2.5 border-b-2 transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-indigo-600 text-indigo-700 font-bold bg-white rounded-t-lg'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>تعريف ونبذة التخصص</span>
          </button>

          <button
            onClick={() => setActiveTab('careers')}
            className={`px-3.5 py-2.5 border-b-2 transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'careers'
                ? 'border-indigo-600 text-indigo-700 font-bold bg-white rounded-t-lg'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>المناصب والمهن المتاحة</span>
          </button>

          <button
            onClick={() => setActiveTab('legal')}
            className={`px-3.5 py-2.5 border-b-2 transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'legal'
                ? 'border-indigo-600 text-indigo-700 font-bold bg-white rounded-t-lg'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>التصنيف وفق القانون الجزائري</span>
          </button>

          <button
            onClick={() => setActiveTab('registration')}
            className={`px-3.5 py-2.5 border-b-2 transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'registration'
                ? 'border-indigo-600 text-indigo-700 font-bold bg-white rounded-t-lg'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>شروط وملف التسجيل</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 space-y-5 text-slate-800 overflow-y-auto flex-1 text-xs">
          {/* TAB 1: OVERVIEW & TRADE PHOTO */}
          {activeTab === 'overview' && (
            <div className="space-y-5">
              {/* Photo of Trainee performing trade */}
              {profile.imageUrl && (
                <div className="rounded-xl overflow-hidden border border-gray-200 relative group bg-slate-900">
                  <img
                    src={profile.imageUrl}
                    alt={profile.imageAlt || "المتكون أثناء أداء مهنته"}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 sm:h-56 object-cover object-center transition duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3.5 sm:p-4">
                    <div className="text-white">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-600/90 text-white inline-flex items-center gap-1 mb-1">
                        <Eye className="w-3 h-3" />
                        <span>بيئة العمل الميدانية للمتكون</span>
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-100">
                        {profile.imageAlt}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Definition and Overview */}
              <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 sm:p-5">
                <h3 className="text-xs sm:text-sm font-bold text-indigo-950 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>نبذة وتعريف شامل بالتخصص:</span>
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  {profile.overview}
                </p>
              </div>

              {/* Key Technical Competencies */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>الكفاءات والمهارات التي يكتسبها المتكون أثناء التكوين:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {profile.keyCompetencies.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs text-slate-700 leading-normal">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Facts Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
                  <span className="text-[10px] text-slate-500 block mb-0.5">المستوى المطلوب</span>
                  <span className="font-bold text-slate-900 text-xs">{specialty.requiredLevel}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
                  <span className="text-[10px] text-slate-500 block mb-0.5">مدة التكوين</span>
                  <span className="font-bold text-slate-900 text-xs">{specialty.duration}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
                  <span className="text-[10px] text-slate-500 block mb-0.5">نمط التكوين</span>
                  <span className="font-bold text-indigo-700 text-xs">{modeInfo.name}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
                  <span className="text-[10px] text-slate-500 block mb-0.5">التصنيف الوظيفي</span>
                  <span className="font-bold text-emerald-700 text-xs">{degInfo.shortArabic} (م {degInfo.levelNumber})</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SUITABLE CAREERS & JOBS */}
          {activeTab === 'careers' && (
            <div className="space-y-4">
              <div className="bg-indigo-900 text-white p-4 rounded-xl">
                <h3 className="text-xs sm:text-sm font-bold flex items-center gap-2 mb-1">
                  <Briefcase className="w-4 h-4 text-indigo-300" />
                  <span>المناصب والمهن المفتوحة لحاملي شهادة {specialty.title}:</span>
                </h3>
                <p className="text-[11px] text-indigo-200">
                  وفقاً لمدونة المهن الجزائرية (ROME) وشبكات التوظيف في القطاعين العام والخاص
                </p>
              </div>

              {/* Careers List */}
              <div className="space-y-2.5">
                {profile.suitableCareers.map((career, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl border border-gray-200 bg-white hover:border-indigo-300 transition flex items-start gap-3 shadow-xs"
                  >
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {career}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        منصب عمل معتمد ومصنف في سوق الشغل والوظيف العمومي الجزائري
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sectors of employment */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-indigo-600" />
                  <span>الهيئات والقطاعات المشغلة للتخصص:</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 text-xs">
                  {profile.employmentSectors.map((sec, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-200">
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>{sec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entrepreneurship / Freelance */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
                <h4 className="text-xs font-bold text-amber-950 mb-1 flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5 text-amber-700" />
                  <span>فرص المقاولاتية والنشاط الحر (دعم الدولة):</span>
                </h4>
                <p className="text-xs text-amber-900 leading-relaxed">
                  {profile.entrepreneurshipOpportunities}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: LEGAL CLASSIFICATION IN ALGERIAN LAW */}
          {activeTab === 'legal' && (
            <div className="space-y-4">
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm mb-2">
                  <Scale className="w-4 h-4 text-indigo-700" />
                  <span>التصنيف في قانون الوظيفة العمومية والتشريع الجزائري</span>
                </div>
                <div className="bg-white p-3.5 rounded-lg border border-indigo-200 font-bold text-xs sm:text-sm text-indigo-900 mb-3">
                  {profile.civilServiceCategory}
                </div>
                <p className="text-xs text-indigo-900/90 leading-relaxed">
                  يخضع ترتيب حاملي شهادات التكوين المهني في الجزائر لأحكام <strong>الأمر رقم 06-03</strong> المتضمن القانون الأساسي العام للوظيفة العمومية، و<strong>المرسوم الرئاسي رقم 07-304</strong> المحدد للشبكة الاستدلالية لمرتبات الموظفين:
                </p>
              </div>

              {/* Salary Grades Breakdown Table */}
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <div className="bg-gray-100 px-4 py-2.5 font-bold text-xs text-slate-800 border-b border-gray-200">
                  سلم تصنيف الشهادات الوطنية للتكوين المهني في الوظيف العمومي:
                </div>
                <div className="divide-y divide-gray-200 text-xs">
                  <div className={`p-3 flex items-center justify-between gap-2 ${specialty.degree === 'BTS' ? 'bg-indigo-50/80 font-bold text-indigo-950' : 'text-slate-700'}`}>
                    <div>
                      <span className="font-bold">شهادة تقني سامي (BTS) — المستوى 5</span>
                      <p className="text-[11px] text-slate-500 font-normal">30 شهراً من التكوين (مستوى 3 ثانوي)</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-indigo-100 text-indigo-800 font-bold text-xs whitespace-nowrap">
                      الصنف 12 (رتبة تقني سامي)
                    </span>
                  </div>

                  <div className={`p-3 flex items-center justify-between gap-2 ${specialty.degree === 'BT' ? 'bg-indigo-50/80 font-bold text-indigo-950' : 'text-slate-700'}`}>
                    <div>
                      <span className="font-bold">شهادة تقني (BT) — المستوى 4</span>
                      <p className="text-[11px] text-slate-500 font-normal">24 شهراً من التكوين (مستوى 2 ثانوي)</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-bold text-xs whitespace-nowrap">
                      الصنف 10 (رتبة تقني)
                    </span>
                  </div>

                  <div className={`p-3 flex items-center justify-between gap-2 ${specialty.degree === 'CAP' ? 'bg-indigo-50/80 font-bold text-indigo-950' : 'text-slate-700'}`}>
                    <div>
                      <span className="font-bold">شهادة الكفاءة المهنية (CAP) — المستوى 3</span>
                      <p className="text-[11px] text-slate-500 font-normal">12 إلى 18 شهراً (مستوى 4 متوسط)</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-xs whitespace-nowrap">
                      الصنف 8 (عون تقني مؤهل)
                    </span>
                  </div>

                  <div className={`p-3 flex items-center justify-between gap-2 ${specialty.degree === 'CMP' ? 'bg-indigo-50/80 font-bold text-indigo-950' : 'text-slate-700'}`}>
                    <div>
                      <span className="font-bold">شهادة التحكم المهني (CMP) — المستوى 2</span>
                      <p className="text-[11px] text-slate-500 font-normal">12 شهراً من التكوين (مستوى أساسي)</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-bold text-xs whitespace-nowrap">
                      الصنف 6 أو 7 (عامل متخصص)
                    </span>
                  </div>
                </div>
              </div>

              {/* Rights and advantages note */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-950 text-xs leading-relaxed">
                <p className="font-bold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>حقوق الترقية والمسار المهني:</span>
                </p>
                <p>
                  تمنح هذه الشهادة حاملها حق المشاركة في المسابقات على أساس الاختبارات أو الشهادة بالوظيف العمومي، فضلاً عن إمكانية مواصلة التكوين عبر نظام <strong>المعابر (Passerelles)</strong> للارتقاء إلى المستويات العليا.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: REGISTRATION & REQUIREMENTS */}
          {activeTab === 'registration' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">المستوى الدراسي المشترط:</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{specialty.requiredLevel}</span>
                  </p>
                </div>

                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">مدة التكوين الرسمية:</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{specialty.duration}</span>
                  </p>
                </div>
              </div>

              {/* Mode details */}
              <div className="bg-indigo-50/60 border border-indigo-150 rounded-xl p-3.5">
                <h4 className="text-xs font-bold text-indigo-900 mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-indigo-600" />
                  <span>تفاصيل جهاز التكوين: {modeInfo.name}</span>
                </h4>
                <p className="text-xs text-indigo-950/80 leading-relaxed">
                  {modeInfo.description}
                </p>
              </div>

              {/* Required Documents */}
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>الوثائق المطلوبة لملف التسجيل الأولي:</span>
                  </h4>
                  <button
                    onClick={onOpenGuide}
                    className="text-xs text-indigo-600 font-semibold hover:underline"
                  >
                    الدليل الكامل للتسجيل
                  </button>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>استمارة التسجيل عبر منصة (مهنتي - Mihnati)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>نسخة من الشهادة المدرسية الأصلية المصادق عليها</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>شهادة ميلاد أصلية من الحالة المدنية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>عدد 02 أو 04 صور شمسية حديثة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>02 أظرفة بريدية عليها طوابع وعنوان المترشح</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>وصل دفع حقوق التسجيل الرمزية</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-gray-50 px-4 sm:px-6 py-3.5 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(specialty.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
                isFavorite
                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                  : 'bg-white text-slate-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>{isFavorite ? 'محفوظ بالمفضلة' : 'حفظ التخصص'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white text-slate-700 border border-gray-200 hover:bg-gray-100 rounded-lg transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">تم النسخ!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>نسخ المعلومات</span>
                </>
              )}
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition shadow-sm"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

