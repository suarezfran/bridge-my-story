export interface Section {
  id: number;
  title: string;
  subtitle: string;
  showName?: boolean;
  bgOpacity: number;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'certification' | 'milestone' | 'recognition';
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  phone?: string;
}

export interface ScrollState {
  currentSection: number;
  scrollProgress: number;
}

import { Variants } from 'framer-motion';

export type AnimationVariants = Variants;