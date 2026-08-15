import React from 'react';
import { Bookmark, Clock, MapPin, Building, GraduationCap, ChevronLeft, Scale, Eye } from 'lucide-react';
import { SpecialtyItem } from '../types';
import { DEGREES_INFO, TRAINING_MODES_INFO } from '../data/metadata';
import { getSpecialtyDetailedProfile } from '../data/specialtyProfiles';

interface SpecialtyCardProps {
  specialty: SpecialtyItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelect: (specialty: SpecialtyItem) => void;
}

export const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  specialty,
  isFavorite,
  onToggleFavorite,
  onSelect
}) => {
  const degInfo = DEGREES_INFO[specialty.degree];
  const modeInfo = TRAINING_MODES_INFO[specialty.trainingMode];
  const profile = getSpecialtyDetailedProfile(specialty.title, specialty.degree, specialty.sector);

  // Civil service category badge label according to Algerian legal system
  const civilServiceRankMap: Record<string, string> = {
    BTS: 'صنف 10 (وظيف عمومي)',
    BT: 'صنف 08 (وظيف عمومي)',
    CAP: 'صنف 06 (وظيف عمومي)',
    CMP: 'صنف 05 (وظيف عمومي)',
    CQP: 'تأهيل مهني نوعي',
    BEP: 'صنف 08',
    CFPS: 'مستوى تأهيلي'
  };

  const civilRank = civilServiceRankMap[specialty.degree] || 'تأهيل مهني';

  return (
    <div 
      onClick={() => onSelect(specialty)}
      className="bg-white rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between group relative cursor-pointer"
    >
      <div>
        {/* Trainee Trade Thumbnail Banner */}
        <div className="relative h-40 sm:h-44 bg-slate-900 overflow-hidden">
          {profile.imageUrl ? (
            <img
              src={profile.imageUrl}
              alt={profile.imageAlt || specialty.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.classList.add('bg-gradient-to-tr', 'from-emerald-950', 'to-teal-800');
                }
              }}
              className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-tr from-emerald-950 to-teal-800 flex items-center justify-center text-emerald-300">
              <GraduationCap className="w-10 h-10 opacity-40" />
            </div>
          )}

          {/* Floating Badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex flex-col justify-between p-3">
            <div className="flex items-center justify-between gap-1.5">
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold shadow-xs border ${degInfo.badgeClass}`}>
                {degInfo.shortArabic} | {degInfo.frenchCode}
              </span>

              {/* Bookmark Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(specialty.id);
                }}
                className={`p-1.5 rounded-full backdrop-blur-md border transition ${
                  isFavorite
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-sm'
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
                title={isFavorite ? 'إزالة من المفضلة' : 'حفظ في المفضلة'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? 'fill-slate-950' : ''}`} />
              </button>
            </div>

            <div className="flex items-center justify-between gap-2 text-white">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/90 text-slate-950 shadow-xs flex items-center gap-1">
                <Scale className="w-2.5 h-2.5" />
                <span>{civilRank}</span>
              </span>

              <span className="text-[10px] font-medium text-slate-200 flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>{specialty.duration}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 space-y-2.5">
          {/* Sector & Mode tag */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-semibold truncate">
              {specialty.sectorLabel}
            </span>
            <span>•</span>
            <span className="truncate">{modeInfo.name}</span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition leading-snug line-clamp-2">
            {specialty.title}
          </h3>

          {/* Institution & Municipality */}
          <div className="space-y-1 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 font-medium">
              <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{specialty.institutionName}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>بلدية {specialty.municipality}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info & Action */}
      <div className="p-4 pt-0">
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-slate-500">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate max-w-[150px]" title={specialty.requiredLevel}>
              {specialty.requiredLevel.split('(')[0]}
            </span>
          </div>

          <span className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-1 group-hover:translate-x-[-2px] transition">
            <span>التفاصيل الكاملة</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
