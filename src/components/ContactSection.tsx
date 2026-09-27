import React, { useState } from 'react';
import { Mail, Copy, Check, Phone, MessageSquare, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { AppTheme } from '../utils/themeConfig';

interface ContactSectionProps {
  profile: PortfolioProfile;
  theme: AppTheme;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, theme }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const isDark = theme.isDark;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const cleanPhone = (profile.phone || '085772311049').replace(/[^0-9]/g, '');
  const waNumber = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(`Collaboration Inquiry — ${profile.name}`)}`;

  return (
    <section id="contact" className={`py-16 md:py-20 border-t ${theme.borderSubtle}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${isDark ? 'text-pink-400' : 'text-[#b84d66]'}`}>
            Direct Communication
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${theme.textPrimary}`}>
            Let's Connect & Collaborate
          </h2>
          <p className={`text-sm ${theme.textSecondary} leading-relaxed`}>
            Open for internships, UI/UX design engagements, data analytics opportunities, and innovative tech collaborations. Reach out directly via WhatsApp or Email.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp Direct Card */}
          <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${
            isDark
              ? 'bg-[#15181f] border-white/10 hover:border-pink-500/40'
              : 'bg-white border-neutral-200/90 hover:border-pink-500/40 shadow-2xs'
          } flex flex-col justify-between space-y-5`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-mono ${theme.textSecondary}`}>WhatsApp & Mobile</div>
                  <div className={`text-base sm:text-lg font-bold ${theme.textPrimary} mt-0.5`}>
                    {profile.phone}
                  </div>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className={`p-2 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                  isDark
                    ? 'border-white/10 hover:bg-white/5 text-neutral-300'
                    : 'border-neutral-200 hover:bg-neutral-50 text-neutral-600'
                }`}
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-pink-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#d97288] hover:bg-[#c65e74] text-white text-xs font-semibold shadow-xs transition-all active:scale-98 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>

          {/* Email Direct Card */}
          <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${
            isDark
              ? 'bg-[#15181f] border-white/10 hover:border-blue-500/40'
              : 'bg-white border-neutral-200/90 hover:border-blue-500/40 shadow-2xs'
          } flex flex-col justify-between space-y-5`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className={`text-xs font-mono ${theme.textSecondary}`}>Official Email</div>
                  <div className={`text-xs sm:text-sm font-bold ${theme.textPrimary} mt-0.5 truncate`}>
                    {profile.email}
                  </div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className={`p-2 rounded-lg border text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                  isDark
                    ? 'border-white/10 hover:bg-white/5 text-neutral-300'
                    : 'border-neutral-200 hover:bg-neutral-50 text-neutral-600'
                }`}
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-pink-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-all active:scale-98 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Open Direct in Gmail (Web)</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Supporting Meta Strip: Institution & Socials */}
        <div className={`mt-8 p-6 rounded-2xl border ${theme.borderSubtle} ${
          isDark ? 'bg-[#12141a]' : 'bg-neutral-100/50'
        } flex flex-col sm:flex-row items-center justify-between gap-6`}>
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-xl bg-neutral-500/10 text-neutral-500 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-xs font-bold ${theme.textPrimary}`}>
                {profile.institution}
              </div>
              <div className={`text-[11px] font-mono ${theme.textSecondary}`}>
                Computer Science Department · {profile.location}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {profile.socials
              .filter((soc) => !['email', 'whatsapp'].includes(soc.platform.toLowerCase()))
              .map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                    isDark
                      ? 'border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300'
                      : 'border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 shadow-2xs'
                  }`}
                >
                  <span>{soc.platform}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              ))}
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className={`pt-12 mt-12 border-t ${theme.borderSubtle} flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${theme.textSecondary}`}>
          <div>
            © {new Date().getFullYear()} {profile.name} · {profile.institution}. All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
};
