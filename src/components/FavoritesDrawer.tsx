import React from 'react';
import { X, Bookmark, Trash2, Printer, ChevronLeft, Building, MapPin, Award } from 'lucide-react';
import { SpecialtyItem } from '../types';
import { SPECIALTIES_DATA } from '../data/specialties';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectSpecialty: (specialty: SpecialtyItem) => void;
  onClearFavorites: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onToggleFavorite,
  onSelectSpecialty,
  onClearFavorites
}) => {
  if (!isOpen) return null;

  const favoriteItems = SPECIALTIES_DATA.filter((s) => favorites.includes(s.id));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-start bg-stone-950/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-in slide-in-from-right duration-200">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h2 className="text-sm sm:text-base font-bold text-slate-900">
              التخصصات المحفوظة ({favoriteItems.length})
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-gray-200 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Items */}
        <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3">
          {favoriteItems.length > 0 ? (
            favoriteItems.map((spec) => (
              <div
                key={spec.id}
                className="bg-white rounded-xl border border-gray-200 hover:border-indigo-300 p-3.5 transition group flex flex-col justify-between gap-2 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {spec.degree} • {spec.trainingModeLabel}
                    </span>
                    <button
                      onClick={() => onToggleFavorite(spec.id)}
                      className="text-slate-400 hover:text-rose-600 transition p-1"
                      title="إزالة من المحفوظات"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3
                    onClick={() => {
                      onSelectSpecialty(spec);
                      onClose();
                    }}
                    className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 cursor-pointer transition leading-snug"
                  >
                    {spec.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 truncate">
                    <Building className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate">{spec.institutionName}</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">بلدية {spec.municipality}</span>
                  <button
                    onClick={() => {
                      onSelectSpecialty(spec);
                      onClose();
                    }}
                    className="text-indigo-600 font-semibold hover:underline flex items-center gap-0.5"
                  >
                    <span>عرض التفاصيل</span>
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-slate-400">
              <Bookmark className="w-12 h-12 mx-auto mb-3 stroke-[1.5] text-slate-300" />
              <p className="text-sm font-bold text-slate-700 mb-1">لا توجد تخصصات محفوظة بعد</p>
              <p className="text-xs text-slate-500">
                اضغط على أيقونة الحفظ (⭐) بجانب أي تخصص في الدليل للرجوع إليه هنا في أي وقت.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {favoriteItems.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between gap-3">
            <button
              onClick={onClearFavorites}
              className="flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 font-medium px-3 py-2 rounded-lg hover:bg-rose-50 transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>مسح الكل</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>طباعة القائمة</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
