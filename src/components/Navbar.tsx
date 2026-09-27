import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { AppTheme } from '../utils/themeConfig';

export type NavTab = 'home' | 'projects' | 'about' | 'cv' | 'contact';

interface NavbarProps {
  profile: PortfolioProfile;
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  projectCount?: number;
  theme: AppTheme;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeTab,
  onSelectTab,
  theme,
}) => {
  const isDark = theme.isDark;
  const navRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'Values' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'Contact' },
  ];

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setCanScrollLeft(scrollLeft > 6);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (navRef.current) {
      const scrollAmount = direction === 'left' ? -110 : 110;
      navRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 250);
    }
  };

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors ${theme.borderSubtle} ${isDark ? 'bg-[#0e1013]/95' : 'bg-[#faf8f5]/95'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-6 overflow-hidden">
        {/* Left: Full Name - Stays fixed and NEVER scrolls */}
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center text-left cursor-pointer group shrink-0"
          title={profile.name}
        >
          <span className={`font-display text-xs sm:text-lg md:text-xl font-bold tracking-tight whitespace-nowrap ${theme.textPrimary} group-hover:opacity-80 transition-opacity`}>
            {profile.name}
          </span>
        </button>

        {/* Right: Only the nav items scroll horizontally on mobile with arrow indicator */}
        <div className="flex items-center min-w-0 flex-1 justify-end gap-1 relative overflow-hidden">
          {/* Mobile Left Arrow (appears when scrolled right) */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className={`sm:hidden shrink-0 p-1.5 rounded-lg border transition-all cursor-pointer ${
                isDark
                  ? 'bg-neutral-800 border-white/20 text-white hover:bg-neutral-700'
                  : 'bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-100 shadow-2xs'
              }`}
              aria-label="Scroll tabs left"
              title="Scroll left"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Scrollable nav items */}
          <nav
            ref={navRef}
            onScroll={checkScroll}
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? isDark
                        ? 'bg-white/10 text-white shadow-2xs font-bold'
                        : 'bg-white text-neutral-900 border border-neutral-200/80 shadow-2xs font-bold'
                      : `${theme.textSecondary} hover:${theme.textPrimary}`
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Right Arrow (->) */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className={`sm:hidden shrink-0 p-1.5 rounded-lg border transition-all cursor-pointer ${
                isDark
                  ? 'bg-neutral-800 border-white/20 text-white hover:bg-neutral-700'
                  : 'bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-100 shadow-2xs'
              }`}
              aria-label="Scroll tabs right"
              title="Scroll right"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
