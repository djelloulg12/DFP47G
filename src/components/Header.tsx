import React from 'react';
import { 
  Sparkles, Bookmark, FileText, School, Compass, 
  Search, Scale, Home, ExternalLink
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'catalog' | 'careers' | 'institutions' | 'orientation';
  setActiveTab: (tab: 'home' | 'catalog' | 'careers' | 'institutions' | 'orientation') => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenGuide: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  favoritesCount,
  onOpenFavorites,
  onOpenGuide,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <header className="bg-emerald-900 text-white sticky top-0 z-30 shadow-md border-b border-emerald-800 shrink-0">
      {/* Top Notification / Official Algerian banner */}
      <div className="bg-emerald-950/95 py-1.5 px-4 sm:px-6 text-xs font-medium text-emerald-200 flex items-center justify-between border-b border-emerald-800/60">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>الجمهورية الجزائرية الديمقراطية الشعبية — وزارة التكوين والتعليم المهنيين</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-emerald-300">
          <span className="bg-white/10 px-2.5 py-0.5 rounded-full text-[11px]">دورة التكوين 2024 / 2025</span>
          <span>•</span>
          <span>مديرية التكوين المهني لولاية غرداية</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo & Title */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 w-full md:w-auto cursor-pointer group"
        >
          <div className="w-10 h-10 bg-emerald-700/80 rounded-xl flex items-center justify-center font-black text-xl text-white border border-emerald-500/50 shrink-0 shadow-inner group-hover:bg-emerald-600 transition">
            غ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                دليل التكوين المهني
              </h1>
              <span className="bg-emerald-800 text-emerald-200 border border-emerald-700 text-xs px-2.5 py-0.5 rounded-full font-bold">
                ولاية غرداية
              </span>
            </div>
            <p className="text-xs text-emerald-200/80 font-normal">
              دليل التخصصات، التصنيف القانوني (الأمر 06-03) والمؤسسات التكوينية
            </p>
          </div>
        </div>

        {/* Global Search box in Header */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (activeTab === 'home') {
                setActiveTab('catalog');
              }
            }}
            placeholder="ابحث عن تخصص، منصب، أو مؤسسة..."
            className="w-full bg-emerald-950/70 text-white text-xs sm:text-sm placeholder:text-emerald-300/60 pl-4 pr-10 py-2.5 rounded-xl border border-emerald-700/80 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
          />
          <Search className="w-4 h-4 text-emerald-300/80 absolute right-3.5 top-1/2 -translate-y-1/2" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] text-emerald-200 hover:text-white bg-emerald-800 px-1.5 py-0.5 rounded"
            >
              مسح
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <button
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition shadow-xs"
            title="دليل التسجيل والملف"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-200" />
            <span>ملف التسجيل</span>
          </button>

          <button
            onClick={onOpenFavorites}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition shadow-xs relative"
            title="التخصصات المحفوظة"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-300" />
            <span>المفضلة</span>
            {favoritesCount > 0 && (
              <span className="bg-amber-400 text-emerald-950 text-[10px] font-bold px-1.5 py-0.2 rounded-full shadow-xs">
                {favoritesCount}
              </span>
            )}
          </button>

          <a
            href="https://takwin.dz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition shadow-sm"
          >
            <span>منصة تكوين (takwin.dz)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Tabs Navigation (Clean Qourse style bar) */}
      <div className="border-t border-emerald-800 bg-emerald-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1.5 overflow-x-auto py-1.5 text-xs sm:text-sm no-scrollbar">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition whitespace-nowrap ${
              activeTab === 'home'
                ? 'bg-white text-emerald-900 shadow-xs'
                : 'text-emerald-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>الرئيسية</span>
          </button>

          <button
            onClick={() => setActiveTab('catalog')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition whitespace-nowrap ${
              activeTab === 'catalog'
                ? 'bg-white text-emerald-900 shadow-xs'
                : 'text-emerald-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>دليل التخصصات والعروض</span>
          </button>

          <button
            onClick={() => setActiveTab('careers')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition whitespace-nowrap ${
              activeTab === 'careers'
                ? 'bg-white text-emerald-900 shadow-xs'
                : 'text-emerald-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <Scale className="w-4 h-4 text-amber-300" />
            <span>مدونة المهن والتصنيف القانوني</span>
            <span className="bg-amber-400/30 text-amber-200 text-[10px] px-1.5 py-0.5 rounded-full font-bold">الأمر 06-03</span>
          </button>

          <button
            onClick={() => setActiveTab('institutions')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition whitespace-nowrap ${
              activeTab === 'institutions'
                ? 'bg-white text-emerald-900 shadow-xs'
                : 'text-emerald-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <School className="w-4 h-4" />
            <span>المؤسسات والمراكز التكوينية</span>
          </button>

          <button
            onClick={() => setActiveTab('orientation')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition whitespace-nowrap ${
              activeTab === 'orientation'
                ? 'bg-white text-emerald-900 shadow-xs'
                : 'text-emerald-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <Compass className="w-4 h-4 text-emerald-300" />
            <span>مستشار التوجيه الذكي</span>
          </button>
        </div>
      </div>
    </header>
  );
};


