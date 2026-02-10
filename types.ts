
export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  year: string;
  status?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
