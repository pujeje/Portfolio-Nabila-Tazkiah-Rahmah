import React from 'react';
import { SkillCategory } from '../types/portfolio';
import { AppTheme } from '../utils/themeConfig';
import { Layout, BarChart3, Code2, Users } from 'lucide-react';

interface SkillsSectionProps {
  categories: SkillCategory[];
  theme: AppTheme;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories, theme }) => {
  const isDark = theme.isDark;

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="w-5 h-5 text-rose-500" />;
      case 1:
        return <BarChart3 className="w-5 h-5 text-pink-500" />;
      case 2:
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case 3:
      default:
        return <Users className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className={`py-16 md:py-20 border-t ${theme.borderSubtle}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${isDark ? 'text-pink-400' : 'text-[#b84d66]'}`}>
            Competencies & Toolkit
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 ${theme.textPrimary}`}>
            Technical & Design Skills
          </h2>
        </div>

        {/* 4 Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                isDark
                  ? 'bg-[#15181f] border-white/10 hover:border-white/20'
                  : 'bg-white border-neutral-200/90 shadow-2xs hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-semibold ${theme.textSecondary}`}>
                    0{idx + 1}.
                  </span>
                  <div className={`p-2 rounded-xl ${isDark ? 'bg-white/5' : 'bg-neutral-100/80'}`}>
                    {getCategoryIcon(idx)}
                  </div>
                </div>

                <h3 className={`font-display text-lg font-bold tracking-tight mb-2 ${theme.textPrimary}`}>
                  {cat.category}
                </h3>

                {cat.description && (
                  <p className={`text-xs mb-4 pb-3 border-b leading-relaxed ${theme.textSecondary} ${
                    isDark ? 'border-white/10' : 'border-neutral-100'
                  }`}>
                    {cat.description}
                  </p>
                )}

                <ul className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className={`text-xs sm:text-sm flex items-center gap-2 transition-colors ${theme.textPrimary}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
