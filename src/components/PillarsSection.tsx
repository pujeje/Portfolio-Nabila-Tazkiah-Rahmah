import React from 'react';
import { Sparkles, Compass, Layers, HeartHandshake } from 'lucide-react';
import { ValuePillar } from '../types/portfolio';
import { AppTheme } from '../utils/themeConfig';

interface PillarsSectionProps {
  pillars: ValuePillar[];
  theme: AppTheme;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ pillars, theme }) => {
  const isDark = theme.isDark;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-rose-500" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-pink-500" />;
      case 'heartHandshake':
      default:
        return <HeartHandshake className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="pillars" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${isDark ? 'text-pink-400' : 'text-[#b84d66]'}`}>
            Professional Values & Motivation
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 ${theme.textPrimary}`}>
            Work Ethic & Principles
          </h2>
        </div>

        {/* 4 Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border transition-all duration-300 space-y-4 ${
                isDark
                  ? 'bg-[#15181f] border-white/10 hover:border-white/20'
                  : 'bg-white border-neutral-200/90 shadow-2xs hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono uppercase tracking-wider font-medium ${theme.textSecondary}`}>
                  {pillar.tag}
                </span>
                <div className={`p-2.5 rounded-xl ${
                  isDark ? 'bg-white/5' : 'bg-neutral-100/80'
                }`}>
                  {getIcon(pillar.iconName)}
                </div>
              </div>

              <div>
                <h3 className={`font-display text-xl font-bold tracking-tight ${theme.textPrimary}`}>
                  {pillar.title}
                </h3>
                <div className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-pink-400' : 'text-[#b84d66]'}`}>
                  {pillar.subtitle}
                </div>
              </div>

              <p className={`text-xs sm:text-sm ${theme.textSecondary} leading-relaxed`}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
