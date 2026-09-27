import React from 'react';
import { Download } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { AppTheme } from '../utils/themeConfig';

interface CvSectionProps {
  profile: PortfolioProfile;
  theme: AppTheme;
}

export const CvSection: React.FC<CvSectionProps> = ({ profile, theme }) => {
  const isDark = theme.isDark;
  const cvImg = profile.cvImageUrl;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* Download Action Button */}
      {cvImg && (
        <div className="flex justify-end mb-4">
          <a
            href={cvImg}
            download="CV_Nabila_Tazkiah_Rahmah.png"
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
              isDark
                ? 'bg-pink-600 hover:bg-pink-500 text-white shadow-pink-950/40'
                : 'bg-pink-600 hover:bg-pink-700 text-white shadow-pink-200'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>
      )}

      {/* CV Image Display */}
      <div className="flex justify-center">
        {cvImg ? (
          <div className={`w-full rounded-2xl overflow-hidden border shadow-2xl transition-all ${
            isDark ? 'border-white/10 bg-neutral-900 shadow-black/60' : 'border-neutral-200/90 bg-white shadow-xl'
          }`}>
            <img
              src={cvImg}
              alt={`Curriculum Vitae - ${profile.name}`}
              className="w-full h-auto object-contain block mx-auto select-none"
              loading="eager"
            />
          </div>
        ) : (
          <div className={`w-full p-12 text-center rounded-2xl border ${
            isDark ? 'border-white/10 bg-white/5' : 'border-neutral-200 bg-neutral-50'
          }`}>
            <p className={`text-sm ${theme.textSecondary}`}>
              CV image not found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
