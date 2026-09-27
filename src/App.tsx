import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/defaultPortfolio';
import { PortfolioData } from './types/portfolio';
import { Navbar, NavTab } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { EditProfileModal } from './components/EditProfileModal';
import { CvSection } from './components/CvSection';
import { getTheme } from './utils/themeConfig';
import { Check, Sun, Moon } from 'lucide-react';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    // Clear out outdated previous cache versions if present
    try {
      localStorage.removeItem('nabila_porto_v6');
      localStorage.removeItem('nabila_porto_v5_en');
      localStorage.removeItem('nabila_porto_v4_en');
    } catch (_) {}

    const saved = localStorage.getItem('nabila_porto_v7');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.profile && Array.isArray(parsed.projects) && parsed.projects.length > 0) {
          const mergedProjects = initialPortfolioData.projects.map((initialProj) => {
            const savedProj = parsed.projects.find((p: { id: string }) => p.id === initialProj.id);
            if (!savedProj) return initialProj;
            return {
              ...initialProj,
              ...savedProj,
              image: initialProj.image,
              links: savedProj.links && savedProj.links.length > 0 ? savedProj.links : initialProj.links,
              liveUrl: savedProj.liveUrl || initialProj.liveUrl,
            };
          });

          return {
            ...initialPortfolioData,
            ...parsed,
            projects: mergedProjects,
            profile: {
              ...initialPortfolioData.profile,
              ...(parsed.profile || {}),
              avatarUrl: initialPortfolioData.profile.avatarUrl,
              cvImageUrl: initialPortfolioData.profile.cvImageUrl,
              socials: initialPortfolioData.profile.socials,
            },
          };
        }
      } catch (e) {
        console.error('Failed to parse local portfolio data', e);
      }
    }
    return initialPortfolioData;
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('nabila_dark_mode');
    return saved ? saved === 'true' : false;
  });

  const [activeTab, setActiveTab] = useState<NavTab>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'projects', 'about', 'cv', 'contact'].includes(hash)) {
        return hash as NavTab;
      }
    }
    return 'home';
  });

  const theme = getTheme(isDark);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('nabila_porto_v7', JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [data]);

  useEffect(() => {
    try {
      localStorage.setItem('nabila_dark_mode', String(isDark));
    } catch (e) {
      console.warn('Could not save dark mode', e);
    }
  }, [isDark]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTheme = () => {
    setIsDark(!isDark);
    showToast(!isDark ? 'Dark mode activated' : 'Light mode activated');
  };

  return (
    <div className={`min-h-screen overflow-x-hidden ${theme.bgCanvas} ${theme.textPrimary} transition-colors duration-300 antialiased selection:bg-pink-500/20 selection:text-pink-900`}>
      {/* Navbar with Tab Navigation */}
      <Navbar
        profile={data.profile}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        projectCount={data.projects.length}
        theme={theme}
      />

      <main>
        {/* VIEW 1: HOME */}
        {activeTab === 'home' && (
          <div>
            <Hero
              profile={data.profile}
              theme={theme}
            />

            {/* Competencies & Toolkit */}
            <SkillsSection
              categories={data.skillCategories}
              theme={theme}
            />

            {/* Minimal Clean Home Footer */}
            <footer className={`py-12 border-t ${theme.borderSubtle}`}>
              <div className="max-w-7xl mx-auto px-6 text-xs">
                <div className={theme.textSecondary}>
                  © {new Date().getFullYear()} {data.profile.name} · {data.profile.institution}. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        )}

        {/* VIEW 2: DEDICATED PROJECTS PAGE */}
        {activeTab === 'projects' && (
          <ProjectShowcase
            projects={data.projects}
            profile={data.profile}
            theme={theme}
            onBackToHome={() => handleSelectTab('home')}
            onUpdateProjects={(updated) => {
              setData((prev) => ({
                ...prev,
                projects: updated,
              }));
              showToast('Link project berhasil disimpan!');
            }}
          />
        )}

        {/* VIEW 3: ABOUT (PROFESSIONAL VALUES & ETHICS) */}
        {activeTab === 'about' && (
          <div className="py-6">
            <PillarsSection
              pillars={data.pillars}
              theme={theme}
            />
          </div>
        )}

        {/* VIEW 4: DEDICATED CV SHOWCASE */}
        {activeTab === 'cv' && (
          <CvSection
            profile={data.profile}
            theme={theme}
          />
        )}

        {/* VIEW 5: CONTACT */}
        {activeTab === 'contact' && (
          <div className="pt-6">
            <ContactSection
              profile={data.profile}
              theme={theme}
            />
          </div>
        )}
      </main>

      {/* Floating Dark / Light Mode Toggle */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={handleToggleTheme}
          className={`p-3 rounded-full border shadow-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer flex items-center gap-2 ${
            isDark
              ? 'bg-[#181b22] border-white/20 text-amber-300'
              : 'bg-white border-neutral-300/80 text-neutral-700'
          }`}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-300" />
          ) : (
            <Moon className="w-5 h-5 text-neutral-700" />
          )}
        </button>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        data={data}
        onSave={(updated) => {
          setData(updated);
          showToast('Profile updated successfully.');
        }}
        theme={theme}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-medium shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200 border border-white/10">
          <Check className="w-4 h-4 text-pink-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
