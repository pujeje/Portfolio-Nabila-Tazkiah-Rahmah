export interface ProjectLink {
  label: string;
  url: string;
  type?: 'demo' | 'github' | 'figma' | 'powerbi' | 'tableau' | 'drive' | 'external';
}

export interface Project {
  id: string;
  title: string;
  category: 'Data Analytics & BI' | 'UI/UX & Product Design' | 'Full-stack Development' | 'Data Engineering' | 'Social Impact';
  year: string;
  role: string;
  projectType: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  links?: ProjectLink[];
  deliverables?: string[];
  challenge?: string;
  solution?: string;
}

export interface ValuePillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: 'sparkles' | 'compass' | 'layers' | 'heartHandshake';
  tag: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: string[];
}

export interface PortfolioProfile {
  name: string;
  title: string;
  institution: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  phone: string;
  availableForHire: boolean;
  availabilityText: string;
  cvUrl?: string;
  cvImageUrl?: string;
  socials: {
    platform: string;
    url: string;
    label: string;
  }[];
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface PortfolioData {
  profile: PortfolioProfile;
  projects: Project[];
  pillars: ValuePillar[];
  experiences?: Experience[];
  education: Education[];
  skillCategories: SkillCategory[];
}
