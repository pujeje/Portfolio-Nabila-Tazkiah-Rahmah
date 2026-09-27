import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Experience, Education } from '../types/portfolio';

interface ExperienceSectionProps {
  experiences: Experience[];
  education: Education[];
  theme: 'dark' | 'light' | 'travertine';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  education,
  theme,
}) => {
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="py-20 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
              02. Rekam Jejak
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Pengalaman & Latar Belakang
            </h2>
            <p className="text-sm opacity-70 leading-relaxed">
              Perjalanan profesional dalam merancang produk digital skala besar, memimpin kolaborasi desain, dan menginisiasi standar arsitektur UI/UX.
            </p>

            <div className={`p-5 rounded-xl border mt-6 ${
              isDark ? 'bg-neutral-900/60 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Etos Kerja</span>
              </div>
              <p className="text-xs opacity-80 leading-relaxed">
                Menghubungkan user problem dengan business growth melalui riset terukur, prototipe cepat, dan implementasi token desain yang konsisten.
              </p>
            </div>
          </div>

          {/* Right Column: Experience Timeline & Education */}
          <div className="lg:col-span-8 space-y-12">
            {/* Work History */}
            <div className="space-y-8">
              <h3 className="text-xs font-mono uppercase tracking-wider opacity-60">
                Riwayat Profesional
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div
                    key={exp.id || idx}
                    className={`p-6 sm:p-7 rounded-xl border transition-all ${
                      isDark
                        ? 'bg-[#121318] border-white/[0.08] hover:border-white/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h4 className="font-display text-xl font-bold tracking-tight text-white">
                        {String(idx + 1).padStart(2, '0')}. {exp.role}
                      </h4>
                      {/* Zero-Pill unboxed period */}
                      <span className="text-xs font-mono text-blue-400 tabular-nums font-medium">
                        {exp.period}
                      </span>
                    </div>

                    {/* Unboxed Company & Location */}
                    <div className="text-xs font-medium text-neutral-400 mb-4 flex items-center gap-2">
                      <span className="text-neutral-200">{exp.company}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-sm opacity-80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements with Claim-to-Proof */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-2 pt-2 border-t border-white/5">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="text-xs opacity-75 flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education History */}
            {education && education.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-wider opacity-60">
                  Pendidikan & Sertifikasi
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {education.map((edu, idx) => (
                    <div
                      key={edu.id || idx}
                      className={`p-5 rounded-xl border ${
                        isDark ? 'bg-neutral-900/40 border-white/[0.08]' : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="text-xs font-mono text-neutral-400 mb-1">
                        {edu.period}
                      </div>
                      <div className="font-display text-base font-bold mb-1">
                        {edu.institution}
                      </div>
                      <div className="text-xs text-blue-400 font-medium mb-2">
                        {edu.degree}
                      </div>
                      {edu.details && (
                        <p className="text-xs opacity-70 leading-relaxed">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
