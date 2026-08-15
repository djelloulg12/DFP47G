import React from 'react';
import { Award, Building, Sparkles, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SPECIALTIES_DATA } from '../data/specialties';
import { INSTITUTIONS_LIST, MUNICIPALITIES_LIST } from '../data/metadata';

export const StatsBanner: React.FC = () => {
  const totalSpecialties = SPECIALTIES_DATA.length;
  const totalInstitutions = INSTITUTIONS_LIST.length;
  const totalMunicipalities = MUNICIPALITIES_LIST.length;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 my-4">
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-3.5 hover:border-emerald-300 transition-colors">
        <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium">عروض التكوين المفتوحة</p>
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {totalSpecialties} <span className="text-xs font-normal text-slate-400">تخصص</span>
          </p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-3.5 hover:border-emerald-300 transition-colors">
        <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium">مستويات الشهادات الوطنية</p>
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            7 <span className="text-xs font-normal text-slate-400">مستويات (BTS, BT...)</span>
          </p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-3.5 hover:border-emerald-300 transition-colors">
        <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
          <Building className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium">المؤسسات والمراكز المعتمدة</p>
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {totalInstitutions} <span className="text-xs font-normal text-slate-400">مؤسسة</span>
          </p>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-3.5 hover:border-emerald-300 transition-colors">
        <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium">تغطية بلديات الولاية</p>
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {totalMunicipalities} <span className="text-xs font-normal text-slate-400">بلدية ومنطقة</span>
          </p>
        </div>
      </div>
    </div>
  );
};
