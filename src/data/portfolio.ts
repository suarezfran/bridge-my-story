import { Project, Experience, Education, Skill, Achievement, ContactInfo } from '@/types';


export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI/UX',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/username/project1',
    liveUrl: 'https://project1.com',
    featured: true
  },
  {
    id: 'project-2',
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI integration',
    technologies: ['React', 'Socket.io', 'OpenAI API', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/project2',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application',
    technologies: ['React Native', 'Express', 'MySQL', 'JWT'],
    githubUrl: 'https://github.com/username/project3'
  }
];

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company',
    position: 'Senior Software Engineer',
    location: 'Montevideo, Uruguay',
    startDate: '2022-01',
    endDate: '2024-01',
    description: [
      'Led development of microservices architecture',
      'Mentored junior developers',
      'Implemented CI/CD pipelines'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker']
  },
  {
    id: 'exp-2',
    company: 'Startup Inc',
    position: 'Full Stack Developer',
    location: 'Remote',
    startDate: '2020-06',
    endDate: '2021-12',
    description: [
      'Developed web applications from scratch',
      'Collaborated with cross-functional teams',
      'Optimized application performance'
    ],
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis']
  }
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'University of Technology',
    degree: 'Bachelor of Computer Science',
    field: 'Computer Science',
    startDate: '2016-03',
    endDate: '2020-12',
    description: 'Focus on software engineering and algorithms'
  },
  {
    id: 'edu-2',
    institution: 'Online Platform',
    degree: 'Certification',
    field: 'Cloud Computing',
    startDate: '2021-01',
    endDate: '2021-06',
    description: 'AWS Solutions Architect certification'
  }
];

export const skills: Skill[] = [
  { name: 'React', level: 'expert', category: 'frontend' },
  { name: 'TypeScript', level: 'advanced', category: 'frontend' },
  { name: 'Node.js', level: 'advanced', category: 'backend' },
  { name: 'Python', level: 'intermediate', category: 'backend' },
  { name: 'PostgreSQL', level: 'advanced', category: 'database' },
  { name: 'MongoDB', level: 'intermediate', category: 'database' },
  { name: 'AWS', level: 'intermediate', category: 'tools' },
  { name: 'Docker', level: 'intermediate', category: 'tools' }
];

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Best Developer Award',
    description: 'Recognized for outstanding contribution to team projects',
    date: '2023-12',
    category: 'award'
  },
  {
    id: 'ach-2',
    title: 'AWS Certified Solutions Architect',
    description: 'Professional certification in cloud architecture',
    date: '2021-06',
    category: 'certification'
  }
];

export const contactInfo: ContactInfo = {
  email: 'francisco@example.com',
  linkedin: 'https://linkedin.com/in/francisco-suarez',
  github: 'https://github.com/francisco-suarez',
  twitter: 'https://twitter.com/francisco_dev'
};