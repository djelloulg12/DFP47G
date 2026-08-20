import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HomeHero } from './components/HomeHero';
import { StatsBanner } from './components/StatsBanner';
import { FilterBar } from './components/FilterBar';
import { SpecialtyCard } from './components/SpecialtyCard';
import { SpecialtyDetailView } from './components/SpecialtyDetailView';
import { InstitutionsView } from './components/InstitutionsView';
import { OrientationWizard } from './components/OrientationWizard';
import { RegistrationGuideModal } from './components/RegistrationGuideModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { CareersAndLegalGuide } from './components/CareersAndLegalGuide';
import { SPECIALTIES_DATA } from './data/specialties';
import { SpecialtyItem, DegreeLevel, TrainingMode, Municipality, SectorCategory } from './types';
import { DEGREES_INFO } from './data/metadata';
import { ArrowUpDown, SearchX, ExternalLink, Sparkles, Building, Award, CheckCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'catalog' | 'careers' | 'institutions' | 'orientation'>('home');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedDegree, setSelectedDegree] = useState<DegreeLevel | 'ALL'>('ALL');
  const [selectedMode, setSelectedMode] = useState<TrainingMode | 'ALL'>('ALL');
  const [selectedMunicipality, setSelectedMunicipality] = useState<Municipality | 'ALL'>('ALL');
  const [selectedSector, setSelectedSector] = useState<SectorCategory | 'ALL'>('ALL');
  const [selectedInstitution, setSelectedInstitution] = useState<string | 'ALL'>('ALL');
  const [sortBy, setSortBy] = useState<'default' | 'degreeDesc' | 'alpha'>('default');

  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyItem | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);

  // Favorites state with localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ghardaia_vocational_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ghardaia_vocational_favorites', JSON.stringify(favorites));
    } catch {
      // Ignore storage errors
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleResetFilters = () => {
    setSelectedDegree('ALL');
    setSelectedMode('ALL');
    setSelectedMunicipality('ALL');
    setSelectedSector('ALL');
    setSelectedInstitution('ALL');
    setSearchTerm('');
  };

  // Filter and Search logic
  const filteredSpecialties = useMemo(() => {
    return SPECIALTIES_DATA.filter((item) => {
      const matchesSearch =
        !searchTerm.trim() ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.institutionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.municipality.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sectorLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.degreeLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.trainingModeLabel.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDegree = selectedDegree === 'ALL' || item.degree === selectedDegree;
      const matchesMode = selectedMode === 'ALL' || item.trainingMode === selectedMode;
      const matchesMunicipality = selectedMunicipality === 'ALL' || item.municipality === selectedMunicipality;
      const matchesSector = selectedSector === 'ALL' || item.sector === selectedSector;
      const matchesInstitution = selectedInstitution === 'ALL' || item.institutionName === selectedInstitution;

      return (
        matchesSearch &&
        matchesDegree &&
        matchesMode &&
        matchesMunicipality &&
        matchesSector &&
        matchesInstitution
      );
    }).sort((a, b) => {
      if (sortBy === 'degreeDesc') {
        return b.degreeLevelNum - a.degreeLevelNum;
      }
      if (sortBy === 'alpha') {
        return a.title.localeCompare(b.title, 'ar');
      }
      return 0;
    });
  }, [searchTerm, selectedDegree, selectedMode, selectedMunicipality, selectedSector, selectedInstitution, sortBy]);

  // Handle specialty selection: scrolls smoothly to top
  const handleSelectSpecialty = (specialty: SpecialtyItem) => {
    setSelectedSpecialty(specialty);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between text-slate-800 font-['Cairo',sans-serif]">
      <div>
        {/* Header Component */}
        <Header
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setSelectedSpecialty(null);
          }}
          favoritesCount={favorites.length}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
          onOpenGuide={() => setIsGuideOpen(true)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* If a specialty is selected, render the dedicated SpecialtyDetailView full page! */}
        {selectedSpecialty ? (
          <SpecialtyDetailView
            specialty={selectedSpecialty}
            onBack={() => setSelectedSpecialty(null)}
            isFavorite={favorites.includes(selectedSpecialty.id)}
            onToggleFavorite={toggleFavorite}
            onOpenGuide={() => setIsGuideOpen(true)}
            onSelectRelated={(relatedSpec) => handleSelectSpecialty(relatedSpec)}
          />
        ) : (
          /* Normal Tab Views */
          <div>
            {/* Tab 0: Home Page with Hero & Featured Specialities */}
            {activeTab === 'home' && (
              <div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                  <HomeHero
                    popularSpecialties={SPECIALTIES_DATA.slice(0, 6)}
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    onSelectSpecialty={handleSelectSpecialty}
                    onExploreCatalog={() => setActiveTab('catalog')}
                    onOpenOrientation={() => setActiveTab('orientation')}
                    onOpenCareers={() => setActiveTab('careers')}
                    onOpenGuide={() => setIsGuideOpen(true)}
                  />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-6 bg-emerald-600 rounded-full"></span>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                          أحدث وأهم تخصصات الدورة 2026 / 2027
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        تخصصات ذات قابلية تشغيل فورية ومصنفة قانونياً في الوظيفة العمومية والقطاع الاقتصادي
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab('catalog')}
                      className="px-4 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>تصفح كافة التخصصات ({SPECIALTIES_DATA.length})</span>
                    </button>
                  </div>

                  {/* Featured Specialties Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SPECIALTIES_DATA.slice(0, 9).map((specialty) => (
                      <SpecialtyCard
                        key={specialty.id}
                        specialty={specialty}
                        isFavorite={favorites.includes(specialty.id)}
                        onToggleFavorite={toggleFavorite}
                        onSelect={handleSelectSpecialty}
                      />
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setActiveTab('catalog')}
                      className="px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-md transition"
                    >
                      عرض جميع التخصصات وعروض التكوين ({SPECIALTIES_DATA.length} تخصص)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 1: Catalog View */}
            {activeTab === 'catalog' && (
              <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
                <StatsBanner />

                {/* Filter Bar */}
                <FilterBar
                  selectedDegree={selectedDegree}
                  setSelectedDegree={setSelectedDegree}
                  selectedMode={selectedMode}
                  setSelectedMode={setSelectedMode}
                  selectedMunicipality={selectedMunicipality}
                  setSelectedMunicipality={setSelectedMunicipality}
                  selectedSector={selectedSector}
                  setSelectedSector={setSelectedSector}
                  selectedInstitution={selectedInstitution}
                  setSelectedInstitution={setSelectedInstitution}
                  onResetFilters={handleResetFilters}
                  resultsCount={filteredSpecialties.length}
                />

                {/* Sorting and Summary Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-4 sm:px-5 py-3 rounded-2xl border border-gray-200 shadow-xs">
                  <div className="text-xs text-slate-600 font-medium">
                    عرض <span className="font-bold text-slate-900">{filteredSpecialties.length}</span> تخصصاً من أصل {SPECIALTIES_DATA.length}
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500 flex items-center gap-1">
                      <ArrowUpDown className="w-3.5 h-3.5 text-emerald-700" />
                      <span>ترتيب حسب:</span>
                    </span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-gray-50 border border-gray-200 text-slate-800 rounded-xl px-2.5 py-1 text-xs focus:ring-1 focus:ring-emerald-500 font-medium"
                    >
                      <option value="default">الترتيب الافتراضي</option>
                      <option value="degreeDesc">مستوى الشهادة (الأعلى أولاً)</option>
                      <option value="alpha">أبجدياً (أ - ي)</option>
                    </select>
                  </div>
                </div>

                {/* Cards Grid */}
                {filteredSpecialties.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSpecialties.map((specialty) => (
                      <SpecialtyCard
                        key={specialty.id}
                        specialty={specialty}
                        isFavorite={favorites.includes(specialty.id)}
                        onToggleFavorite={toggleFavorite}
                        onSelect={handleSelectSpecialty}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-slate-500 shadow-xs max-w-lg mx-auto">
                    <SearchX className="w-12 h-12 mx-auto mb-3 text-slate-300 stroke-[1.5]" />
                    <h3 className="text-sm font-bold text-slate-800 mb-1">لا توجد نتائج مطابقة لبحثك</h3>
                    <p className="text-xs text-slate-500 mb-4">
                      جرب البحث بكلمات أخرى أو قم بإلغاء بعض الفلاتر لعرض مزيد من التخصصات.
                    </p>
                    <button
                      onClick={handleResetFilters}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl transition shadow-xs"
                    >
                      إعادة ضبط جميع الفلاتر
                    </button>
                  </div>
                )}
              </main>
            )}

            {/* Tab 2: Careers & Algerian Legal Classification */}
            {activeTab === 'careers' && (
              <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                <CareersAndLegalGuide
                  onSelectSpecialtyByName={(title) => {
                    const found = SPECIALTIES_DATA.find(s => s.title === title || s.title.includes(title));
                    if (found) handleSelectSpecialty(found);
                  }}
                />
              </main>
            )}

            {/* Tab 3: Institutions View */}
            {activeTab === 'institutions' && (
              <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                <InstitutionsView onSelectSpecialty={handleSelectSpecialty} />
              </main>
            )}

            {/* Tab 4: Orientation Guide Wizard */}
            {activeTab === 'orientation' && (
              <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                <OrientationWizard
                  onSelectSpecialty={handleSelectSpecialty}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              </main>
            )}
          </div>
        )}
      </div>

      {/* Official Footer */}
      <footer className="bg-emerald-950 text-emerald-300 text-xs border-t border-emerald-900 py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-emerald-800 text-white font-black text-xs flex items-center justify-center">
                غ
              </div>
              <p className="text-white font-extrabold text-sm">
                بوابة ودليل التكوين المهني — ولاية غرداية
              </p>
            </div>
            <p className="text-[11px] text-emerald-300/80">
              وفق القانون الأساسي العام للوظيفة العمومية (الأمر 06-03) ومدونة المهن الوطنية (ROME).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <button onClick={() => setIsGuideOpen(true)} className="hover:text-white transition">
              ملف وشروط التسجيل
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('careers')} className="hover:text-white transition">
              التصنيف وسلم الأجور
            </button>
            <span>•</span>
            <a
              href="https://mihnati.mfep.gov.dz"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition flex items-center gap-1 text-emerald-400 font-bold"
            >
              <span>بوابة التسجيل الرسمي (مهنتي)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

      {/* Registration Guide Modal */}
      <RegistrationGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onSelectSpecialty={handleSelectSpecialty}
        onClearFavorites={() => setFavorites([])}
      />
    </div>
  );
}
