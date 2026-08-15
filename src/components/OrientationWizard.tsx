import React, { useState } from 'react';
import { Compass, Sparkles, CheckCircle2, Award, ArrowLeft, RotateCcw, Briefcase, GraduationCap } from 'lucide-react';
import { SPECIALTIES_DATA } from '../data/specialties';
import { SpecialtyItem, DegreeLevel, TrainingMode } from '../types';
import { SpecialtyCard } from './SpecialtyCard';

interface OrientationWizardProps {
  onSelectSpecialty: (specialty: SpecialtyItem) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const OrientationWizard: React.FC<OrientationWizardProps> = ({
  onSelectSpecialty,
  favorites,
  onToggleFavorite
}) => {
  const [eduLevel, setEduLevel] = useState<string>('3AS');
  const [preferredMode, setPreferredMode] = useState<string>('ANY');
  const [statusType, setStatusType] = useState<string>('STUDENT');

  const getRecommendations = () => {
    return SPECIALTIES_DATA.filter((item) => {
      // Level matching logic based on Algerian standard
      let degreeMatch = false;

      if (eduLevel === '3AS' || eduLevel === 'BAC') {
        // High school 3AS or Bac can access BTS, BT, CAP, CQP, CMP
        degreeMatch = item.degree === 'BTS' || item.degree === 'BT';
      } else if (eduLevel === '2AS' || eduLevel === '1AS') {
        // 2AS/1AS can access BT, CAP, CMP, CQP
        degreeMatch = item.degree === 'BT' || item.degree === 'CAP';
      } else if (eduLevel === '4AM') {
        // 4AM can access CAP, CMP, BEP, CQP
        degreeMatch = item.degree === 'CAP' || item.degree === 'CMP' || item.degree === 'BEP';
      } else if (eduLevel === 'PRIMARY' || eduLevel === 'LESS_4AM') {
        // Below 4AM can access CFPS, CMP, CQP
        degreeMatch = item.degree === 'CFPS' || item.degree === 'CMP' || item.degree === 'CQP';
      } else {
        // No formal certificate / All
        degreeMatch = item.degree === 'CQP' || item.degree === 'CFPS';
      }

      // Status matching
      let statusMatch = true;
      if (statusType === 'HOMEMAKER') {
        statusMatch = item.trainingMode === 'homemakers' || item.trainingMode === 'qualifying_initial';
      } else if (statusType === 'WORKER') {
        statusMatch = item.trainingMode === 'evening';
      } else if (statusType === 'UNEMPLOYED_GRANT') {
        statusMatch = item.trainingMode === 'unemployment_grant' || item.degree === 'CQP';
      }

      // Mode matching
      let modeMatch = true;
      if (preferredMode !== 'ANY') {
        modeMatch = item.trainingMode === preferredMode;
      }

      return degreeMatch && statusMatch && modeMatch;
    });
  };

  const recommendations = getRecommendations();

  return (
    <div className="space-y-6">
      {/* Wizard Header Box */}
      <div className="bg-indigo-900 text-white rounded-2xl p-6 sm:p-7 shadow-sm border border-indigo-800 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-indigo-200 text-xs px-3 py-1 rounded-full font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>نظام التوجيه والمطابقة المهنية الذاتي</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
            ما هو التكوين والشهادة المناسبة لمستواك وظروفك؟
          </h2>
          <p className="text-xs sm:text-sm text-indigo-200/90 leading-relaxed font-normal">
            حدد مستواك الدراسي الحالي ونوع التفرغ لنقترح عليك مباشرة التخصصات المتاحة بولاية غرداية مع شروط الالتحاق الرسمية.
          </p>
        </div>
      </div>

      {/* Form Options Box */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm space-y-6">
        <div>
          <label className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span>1. ما هو آخر مستوى دراسي بلغته؟</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: '3AS', label: 'الثالثة ثانوي كاملة (3AS)', badge: 'ش.ت.س (BTS)' },
              { id: '2AS', label: 'الثانية أو الأولى ثانوي (2AS/1AS)', badge: 'تقني (BT)' },
              { id: '4AM', label: 'الرابعة متوسط كاملة (4AM)', badge: 'كفاءة مهنية (CAP)' },
              { id: 'PRIMARY', label: 'دون الرابعة متوسط أو الابتدائي', badge: 'تحكم مهني / تأهيلي' }
            ].map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setEduLevel(lvl.id)}
                className={`p-3.5 rounded-xl text-right border transition flex flex-col justify-between ${
                  eduLevel === lvl.id
                    ? 'border-indigo-600 bg-indigo-50/70 ring-1 ring-indigo-500 text-indigo-950 font-bold'
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-slate-700 font-medium'
                }`}
              >
                <span className="text-xs leading-snug mb-2">{lvl.label}</span>
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded w-fit">
                  {lvl.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Status / Situation */}
        <div>
          <label className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-600" />
            <span>2. ما هي وضعيتك الحالية وطبيعة التفرغ؟</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: 'STUDENT', label: 'طالب / متفرغ للتكوين', desc: 'حضوري وإقامي' },
              { id: 'APPRENTICE', label: 'راغب في التمهين والمنحة', desc: 'تمهين داخل ورشة/مؤسسة' },
              { id: 'HOMEMAKER', label: 'امرأة ماكثة في البيت', desc: 'برامج وحرف نسوية' },
              { id: 'WORKER', label: 'موظف أو عامل بالنهار', desc: 'دروس مسائية' }
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setStatusType(st.id)}
                className={`p-3.5 rounded-xl text-right border transition flex flex-col justify-between ${
                  statusType === st.id
                    ? 'border-indigo-600 bg-indigo-50/70 ring-1 ring-indigo-500 text-indigo-950 font-bold'
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-slate-700 font-medium'
                }`}
              >
                <span className="text-xs leading-snug mb-1">{st.label}</span>
                <span className="text-[10px] text-slate-500 font-normal">
                  {st.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Output Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>التخصصات المقترحة والمطابقة لبياناتك:</span>
          </h3>
          <p className="text-xs text-slate-500">
            تم العثور على {recommendations.length} تخصصاً مناسباً في مؤسسات ولاية غرداية
          </p>
        </div>

        <button
          onClick={() => {
            setEduLevel('3AS');
            setPreferredMode('ANY');
            setStatusType('STUDENT');
          }}
          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>إعادة التعيين</span>
        </button>
      </div>

      {/* Recommended Cards Grid */}
      {recommendations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((spec) => (
            <SpecialtyCard
              key={spec.id}
              specialty={spec}
              isFavorite={favorites.includes(spec.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectSpecialty}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center text-slate-500">
          <p className="text-sm font-bold text-slate-800 mb-1">لم نجد تخصصاً يطابق كافة الشروط المحددة بدقة</p>
          <p className="text-xs">يرجى تجربة تغيير نمط التكوين أو استعراض كامل الدليل من التبويب الرئيسي.</p>
        </div>
      )}
    </div>
  );
};
