import React from 'react';
import { Filter, RotateCcw, Building2, Award, Briefcase, MapPin, Layers } from 'lucide-react';
import { DegreeLevel, TrainingMode, Municipality, SectorCategory } from '../types';
import { DEGREES_INFO, TRAINING_MODES_INFO, SECTORS_INFO, MUNICIPALITIES_LIST, INSTITUTIONS_LIST } from '../data/metadata';

interface FilterBarProps {
  selectedDegree: DegreeLevel | 'ALL';
  setSelectedDegree: (deg: DegreeLevel | 'ALL') => void;
  selectedMode: TrainingMode | 'ALL';
  setSelectedMode: (mode: TrainingMode | 'ALL') => void;
  selectedMunicipality: Municipality | 'ALL';
  setSelectedMunicipality: (mun: Municipality | 'ALL') => void;
  selectedSector: SectorCategory | 'ALL';
  setSelectedSector: (sec: SectorCategory | 'ALL') => void;
  selectedInstitution: string | 'ALL';
  setSelectedInstitution: (inst: string | 'ALL') => void;
  onResetFilters: () => void;
  resultsCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedDegree,
  setSelectedDegree,
  selectedMode,
  setSelectedMode,
  selectedMunicipality,
  setSelectedMunicipality,
  selectedSector,
  setSelectedSector,
  selectedInstitution,
  setSelectedInstitution,
  onResetFilters,
  resultsCount
}) => {
  const hasActiveFilter =
    selectedDegree !== 'ALL' ||
    selectedMode !== 'ALL' ||
    selectedMunicipality !== 'ALL' ||
    selectedSector !== 'ALL' ||
    selectedInstitution !== 'ALL';

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-4 sm:p-5 mb-6 space-y-4">
      {/* Top Filter Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3.5">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <Filter className="w-4 h-4 text-emerald-700" />
          <span className="text-sm">تصفية وتخصيص عروض التكوين</span>
          <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs px-2.5 py-0.5 rounded-full font-bold">
            {resultsCount} تخصص مطابق
          </span>
        </div>

        {hasActiveFilter && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3 py-1.5 rounded-xl transition font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>إعادة ضبط الفلاتر</span>
          </button>
        )}
      </div>

      {/* Quick Degree Selector Pills */}
      <div>
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-emerald-700" />
          <span>تصنيف الشهادات والمستويات:</span>
        </label>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedDegree('ALL')}
            className={`px-3 py-1.5 text-xs rounded-xl font-medium transition ${
              selectedDegree === 'ALL'
                ? 'bg-emerald-700 text-white font-bold shadow-xs'
                : 'bg-gray-50 text-slate-700 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            جميع الشهادات
          </button>
          {(Object.keys(DEGREES_INFO) as DegreeLevel[]).map((deg) => {
            const item = DEGREES_INFO[deg];
            const isSelected = selectedDegree === deg;
            return (
              <button
                key={deg}
                onClick={() => setSelectedDegree(isSelected ? 'ALL' : deg)}
                className={`px-3 py-1.5 text-xs rounded-xl font-medium transition border ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs font-bold'
                    : 'bg-gray-50 text-slate-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <span>{item.shortArabic}</span>
                <span className="opacity-80 mr-1">({item.arabicName})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Select Dropdowns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
        {/* Training Mode */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
            <span>نمط وجهاز التكوين:</span>
          </label>
          <select
            value={selectedMode}
            onChange={(e) => setSelectedMode(e.target.value as TrainingMode | 'ALL')}
            className="w-full bg-gray-50 border border-gray-200 text-slate-800 text-xs rounded-xl p-2.5 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 font-medium"
          >
            <option value="ALL">جميع الأنماط والأجهزة</option>
            {(Object.keys(TRAINING_MODES_INFO) as TrainingMode[]).map((mode) => (
              <option key={mode} value={mode}>
                {TRAINING_MODES_INFO[mode].name}
              </option>
            ))}
          </select>
        </div>

        {/* Municipality */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>البلدية / المنطقة:</span>
          </label>
          <select
            value={selectedMunicipality}
            onChange={(e) => setSelectedMunicipality(e.target.value as Municipality | 'ALL')}
            className="w-full bg-gray-50 border border-gray-200 text-slate-800 text-xs rounded-xl p-2.5 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 font-medium"
          >
            <option value="ALL">جميع بلديات الولاية</option>
            {MUNICIPALITIES_LIST.map((mun) => (
              <option key={mun} value={mun}>
                {mun}
              </option>
            ))}
          </select>
        </div>

        {/* Professional Sector */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>الشعبة المهنية:</span>
          </label>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value as SectorCategory | 'ALL')}
            className="w-full bg-gray-50 border border-gray-200 text-slate-800 text-xs rounded-xl p-2.5 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 font-medium"
          >
            <option value="ALL">جميع الشعب والمجالات</option>
            {(Object.keys(SECTORS_INFO) as SectorCategory[]).map((sec) => (
              <option key={sec} value={sec}>
                {SECTORS_INFO[sec].name}
              </option>
            ))}
          </select>
        </div>

        {/* Institution */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            <span>المؤسسة التكوينية:</span>
          </label>
          <select
            value={selectedInstitution}
            onChange={(e) => setSelectedInstitution(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 text-slate-800 text-xs rounded-xl p-2.5 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 font-medium"
          >
            <option value="ALL">جميع المؤسسات والمراكز</option>
            {INSTITUTIONS_LIST.map((inst) => (
              <option key={inst.id} value={inst.name}>
                {inst.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
