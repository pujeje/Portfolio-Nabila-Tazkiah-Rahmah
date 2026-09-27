import React from 'react';
import { GraduationCap } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { AppTheme } from '../utils/themeConfig';

interface HeroProps {
  profile: PortfolioProfile;
  theme: AppTheme;
}

export const Hero: React.FC<HeroProps> = ({ profile, theme }) => {
  const isDark = theme.isDark;

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
      {/* Subtle organic background glow */}
      <div className={`absolute top-10 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none ${
        isDark ? 'bg-pink-950/20' : 'bg-[#fae8eb]/70'
      }`} />
      <div className={`absolute top-28 right-10 w-80 h-80 rounded-full blur-3xl -z-10 pointer-events-none ${
        isDark ? 'bg-purple-950/20' : 'bg-[#f4efe5]/80'
      }`} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Profile & About Me Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                  isDark ? 'text-pink-400' : 'text-[#b84d66]'
                }`}>
                  Computer Science Student
                </div>
                <h1 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-0.5 ${theme.textPrimary}`}>
                  {profile.name}
                </h1>
                <div className={`text-xs sm:text-sm font-mono ${theme.textSecondary} mt-1`}>
                  {profile.institution}
                </div>
              </div>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed ${theme.textSecondary}`}>
              {profile.bio}
            </p>

            {/* Academic & Focus Details */}
            <div className={`pt-5 border-t ${theme.borderSubtle} grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs`}>
              <div>
                <span className="opacity-60 block">Academic Institution:</span>
                <span className={`font-semibold ${theme.textPrimary}`}>{profile.institution}</span>
              </div>
              <div>
                <span className="opacity-60 block">Major:</span>
                <span className={`font-semibold ${theme.textPrimary}`}>Computer Science</span>
              </div>
              <div>
                <span className="opacity-60 block">Core Focus:</span>
                <span className={`font-semibold ${theme.textPrimary}`}>UI/UX Design & Data Analytics</span>
              </div>
            </div>
          </div>

          {/* Right: Portrait Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className={`relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden border shadow-xl ${
                isDark ? 'border-white/10 bg-[#14171d]' : 'border-neutral-200/90 bg-white'
              }`}>
                <img
                  src={profile.avatarUrl}
                  alt={`Professional portrait of ${profile.name}`}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800';
                  }}
                  className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-103"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono tracking-wider uppercase opacity-80">
                    Bina Nusantara University
                  </div>
                  <div className="font-display text-lg sm:text-xl font-bold">
                    {profile.name}
                  </div>
                  <div className="text-xs text-neutral-200 flex items-center gap-2 mt-0.5">
                    <span>Computer Science</span>
                    <span>·</span>
                    <span>UI/UX & Data Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
