export type ThemeMode = 'light' | 'dark';

export interface AppTheme {
  isDark: boolean;
  bgCanvas: string;
  bgSurface: string;
  bgCard: string;
  borderSubtle: string;
  textPrimary: string;
  textSecondary: string;
  primaryLight: string;
  primaryText: string;
  buttonBg: string;
  buttonHover: string;
  buttonText: string;
}

export const getTheme = (isDark: boolean): AppTheme => {
  if (isDark) {
    return {
      isDark: true,
      bgCanvas: 'bg-[#0e1013]',
      bgSurface: 'bg-[#14171d]',
      bgCard: 'bg-[#181b22]',
      borderSubtle: 'border-white/10',
      textPrimary: 'text-[#f3f4f6]',
      textSecondary: 'text-[#9ca3af]',
      primaryLight: 'bg-[#3b1723]/60',
      primaryText: 'text-[#f472b6]',
      buttonBg: 'bg-[#b84d66]',
      buttonHover: 'hover:bg-[#a03d54]',
      buttonText: 'text-white',
    };
  }

  // Soft warm pastel light mode with soft pink accents
  return {
    isDark: false,
    bgCanvas: 'bg-[#faf8f7]',
    bgSurface: 'bg-[#f6eff1]',
    bgCard: 'bg-white',
    borderSubtle: 'border-[#ede2e5]',
    textPrimary: 'text-[#201d1e]',
    textSecondary: 'text-[#68595f]',
    primaryLight: 'bg-[#fceef2]',
    primaryText: 'text-[#b84d66]',
    buttonBg: 'bg-[#d97288]',
    buttonHover: 'hover:bg-[#c65e74]',
    buttonText: 'text-white',
  };
};
