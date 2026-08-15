import React, { useState } from 'react';
import { Building, MapPin, Award, Search, CheckCircle2, ChevronDown, ChevronUp, Sparkles, ExternalLink } from 'lucide-react';
import { INSTITUTIONS_LIST } from '../data/metadata';
import { SPECIALTIES_DATA } from '../data/specialties';
import { Institution, SpecialtyItem } from '../types';

interface InstitutionsViewProps {
  onSelectSpecialty: (specialty: SpecialtyItem) => void;
}

export const InstitutionsView: React.FC<InstitutionsViewProps> = ({ onSelectSpecialty }) => {
  const [instSearch, setInstSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [expandedInstId, setExpandedInstId] = useState<string | null>(null);

  const filteredInstitutions = INSTITUTIONS_LIST.filter((inst) => {
    const matchesSearch =
      inst.name.toLowerCase().includes(instSearch.toLowerCase()) ||
      inst.municipality.toLowerCase().includes(instSearch.toLowerCase()) ||
      (inst.description && inst.description.toLowerCase().includes(instSearch.toLowerCase()));

    const matchesType =
      selectedType === 'ALL'
        ? true
        : selectedType === 'PRIVATE'
        ? inst.isPrivate
        : inst.type === selectedType;

    return matchesSearch && matchesType;
  });

  const getSpecialtiesForInst = (instName: string) => {
    return SPECIALTIES_DATA.filter((s) => s.institutionName === instName);
  };

  const toggleExpand = (id: string) => {
    setExpandedInstId(expandedInstId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-5 h-5 text-indigo-600" />
              <span>مؤسسات ومراكز التكوين والتعليم المهني بولاية غرداية</span>
            </h2>
            <p className="text-xs text-slate-500">
              دليل المعاهد المتخصصة، مراكز CFPA، والمؤسسات الخاصة المعتمدة عبر بلديات الولاية
            </p>
          </div>

          <div className="w-full sm:w-72 relative">
            <input
              type="text"
              value={instSearch}
              onChange={(e) => setInstSearch(e.target.value)}
              placeholder="ابحث عن مركز أو بلدية..."
              className="w-full bg-gray-50 text-slate-800 text-xs pl-3 pr-9 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Type Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 text-xs font-medium">
          <button
            onClick={() => setSelectedType('ALL')}
            className={`px-3 py-1.5 rounded-lg transition ${
              selectedType === 'ALL'
                ? 'bg-indigo-600 text-white font-bold shadow-sm'
                : 'bg-gray-50 text-slate-700 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            جميع المؤسسات ({INSTITUTIONS_LIST.length})
          </button>
          <button
            onClick={() => setSelectedType('INSFP')}
            className={`px-3 py-1.5 rounded-lg transition ${
              selectedType === 'INSFP'
                ? 'bg-indigo-600 text-white font-bold shadow-sm'
                : 'bg-gray-50 text-slate-700 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            المعاهد المتخصصة (INSFP)
          </button>
          <button
            onClick={() => setSelectedType('CFPA')}
            className={`px-3 py-1.5 rounded-lg transition ${
              selectedType === 'CFPA'
                ? 'bg-indigo-600 text-white font-bold shadow-sm'
                : 'bg-gray-50 text-slate-700 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            مراكز التكوين والتمهين (CFPA)
          </button>
          <button
            onClick={() => setSelectedType('IEP')}
            className={`px-3 py-1.5 rounded-lg transition ${
              selectedType === 'IEP'
                ? 'bg-indigo-600 text-white font-bold shadow-sm'
                : 'bg-gray-50 text-slate-700 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            معاهد التعليم المهني (IEP)
          </button>
          <button
            onClick={() => setSelectedType('PRIVATE')}
            className={`px-3 py-1.5 rounded-lg transition ${
              selectedType === 'PRIVATE'
                ? 'bg-indigo-600 text-white font-bold shadow-sm'
                : 'bg-gray-50 text-slate-700 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            المؤسسات الخاصة المعتمدة
          </button>
        </div>
      </div>

      {/* Institutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredInstitutions.map((inst) => {
          const specialties = getSpecialtiesForInst(inst.name);
          const isExpanded = expandedInstId === inst.id;

          return (
            <div
              key={inst.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-indigo-300 transition flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Header sub-card */}
                <div className="p-4 bg-slate-50 border-b border-gray-100 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        inst.isPrivate
                          ? 'bg-amber-50 text-amber-700 border-amber-200'
                          : inst.type === 'INSFP'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : inst.type === 'IEP'
                          ? 'bg-teal-50 text-teal-700 border-teal-200'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      {inst.isPrivate
                        ? 'خاص معتمد'
                        : inst.type === 'INSFP'
                        ? 'معهد وطني'
                        : inst.type === 'IEP'
                        ? 'تعليم مهني'
                        : 'مركز عمومي'}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {inst.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-500 bg-white border border-gray-200 px-2 py-0.5 rounded font-medium shrink-0">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    <span>{inst.municipality}</span>
                  </div>
                </div>

                <div className="p-4">
                  {inst.description && (
                    <p className="text-xs text-slate-600 mb-3 bg-gray-50 p-2.5 rounded-xl border border-gray-100 leading-relaxed">
                      {inst.description}
                    </p>
                  )}

                  <div className="text-xs font-semibold text-slate-600 mb-2 flex items-center justify-between">
                    <span>التخصصات المتاحة بالمركز:</span>
                    <span className="text-indigo-700 font-bold bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded text-[11px]">
                      {specialties.length} تخصص
                    </span>
                  </div>

                  {/* Specialties preview list */}
                  <div className="space-y-1.5 mb-2">
                    {(isExpanded ? specialties : specialties.slice(0, 3)).map((spec) => (
                      <div
                        key={spec.id}
                        onClick={() => onSelectSpecialty(spec)}
                        className="text-xs bg-gray-50 hover:bg-indigo-50/70 border border-gray-150 hover:border-indigo-200 rounded-xl p-2.5 flex items-center justify-between cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                          <span className="font-semibold text-slate-800 truncate">{spec.title}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] bg-white border border-gray-200 px-1.5 py-0.2 rounded font-bold text-slate-700">
                            {spec.degree}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            {spec.trainingModeLabel.split(' ')[0]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {specialties.length > 3 && (
                <div className="p-3 bg-slate-50/50 border-t border-gray-100">
                  <button
                    onClick={() => toggleExpand(inst.id)}
                    className="w-full text-xs font-bold text-indigo-700 hover:text-indigo-800 flex items-center justify-center gap-1 transition"
                  >
                    {isExpanded ? (
                      <>
                        <span>عرض أقل</span>
                        <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>عرض باقي التخصصات ({specialties.length - 3} تخصص إضافي)</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
