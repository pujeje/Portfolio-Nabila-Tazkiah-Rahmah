import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import { PortfolioData, PortfolioProfile } from '../types/portfolio';
import { AppTheme } from '../utils/themeConfig';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (updatedData: PortfolioData) => void;
  theme: AppTheme;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  theme,
}) => {
  const [profile, setProfile] = useState<PortfolioProfile>({ ...data.profile });

  if (!isOpen) return null;

  const isDark = theme.isDark;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...data,
      profile,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className={`relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl ${
        isDark ? 'bg-[#15181f] border-white/15 text-white' : 'bg-white border-neutral-200 text-neutral-900'
      }`}>
        <div className={`p-6 border-b flex items-center justify-between ${
          isDark ? 'border-white/10' : 'border-neutral-200'
        }`}>
          <h3 className="font-display text-xl font-bold">
            Edit Portfolio Profile Information
          </h3>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              isDark ? 'hover:bg-white/10 text-neutral-400 hover:text-white' : 'hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
          <div className="space-y-1">
            <label className={`font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              Full Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className={`w-full p-2.5 rounded-xl border outline-none ${
                isDark ? 'bg-neutral-900 border-white/10 text-white focus:border-emerald-500' : 'border-neutral-300 focus:border-emerald-600'
              }`}
              required
            />
          </div>

          <div className="space-y-1">
            <label className={`font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              Headline / Title
            </label>
            <input
              type="text"
              value={profile.title}
              onChange={(e) => setProfile({ ...profile, title: e.target.value })}
              className={`w-full p-2.5 rounded-xl border outline-none ${
                isDark ? 'bg-neutral-900 border-white/10 text-white focus:border-emerald-500' : 'border-neutral-300 focus:border-emerald-600'
              }`}
              required
            />
          </div>

          <div className="space-y-1">
            <label className={`font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              University / Institution
            </label>
            <input
              type="text"
              value={profile.institution}
              onChange={(e) => setProfile({ ...profile, institution: e.target.value })}
              className={`w-full p-2.5 rounded-xl border outline-none ${
                isDark ? 'bg-neutral-900 border-white/10 text-white focus:border-emerald-500' : 'border-neutral-300 focus:border-emerald-600'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className={`font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                Contact Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className={`w-full p-2.5 rounded-xl border outline-none ${
                  isDark ? 'bg-neutral-900 border-white/10 text-white focus:border-emerald-500' : 'border-neutral-300 focus:border-emerald-600'
                }`}
                required
              />
            </div>

            <div className="space-y-1">
              <label className={`font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                WhatsApp / Phone
              </label>
              <input
                type="text"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className={`w-full p-2.5 rounded-xl border outline-none ${
                  isDark ? 'bg-neutral-900 border-white/10 text-white focus:border-emerald-500' : 'border-neutral-300 focus:border-emerald-600'
                }`}
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className={`font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              About Me / Bio
            </label>
            <textarea
              rows={4}
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              className={`w-full p-2.5 rounded-xl border outline-none resize-none leading-relaxed ${
                isDark ? 'bg-neutral-900 border-white/10 text-white focus:border-pink-400' : 'border-neutral-300 focus:border-pink-400'
              }`}
              required
            />
          </div>

          <div className={`pt-4 border-t flex items-center justify-end gap-3 ${
            isDark ? 'border-white/10' : 'border-neutral-200'
          }`}>
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 text-xs rounded-xl border transition-colors ${
                isDark ? 'border-white/10 text-neutral-300 hover:bg-white/5' : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-5 py-2 text-xs font-semibold rounded-xl ${theme.buttonBg} ${theme.buttonHover} ${theme.buttonText} flex items-center gap-2 cursor-pointer`}
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
