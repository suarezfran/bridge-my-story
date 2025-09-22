import { Project, Experience, Education, Skill, Achievement, ContactInfo } from '@/types';


export const projects: Project[] = [
  {
    id: 'tkn-project',
    title: 'Tokenization Platform',
    description: 'Secure microservice for merchant tokenization, handling sensitive payment data with encryption, batch processing, and vault integration.',
    technologies: ['Java', 'Spring Framework', 'MySQL', 'Angular', 'Spring Batch', 'Docker'],
    featured: true
  },
  {
    id: 'bridge-my-story',
    title: 'Bridge My Story',
    description: 'Portfolio created for Puentes Cohort #2, showcasing my projects and skills as part of a Silicon Valley immersion program connecting Latin American engineers with startup opportunities.',
    technologies: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    githubUrl: 'https://github.com/suarezfran/bridge-my-story',
    featured: true,
    inProgress: false
  },
  {
    id: 'elasticsearch-support',
    title: 'Elasticsearch Support for Analytics Module',
    description: 'Integrated Elasticsearch into a high-throughput analytics module to enable near-real-time search, aggregation, and observability across millions of transactions per day.',
    technologies: ['Elasticsearch', 'Java', 'Spring Boot', 'RabbitMQ', 'Docker', 'Kibana'],
    featured: true,
    inProgress: false,
  },
  {
    id: 'retail-brain',
    title: 'Retail Brain',
    description: 'Retail sales data analysis system with semantic search and market behavior analysis.',
    technologies: ['Go', 'PostgreSQL', 'Docker', 'OpenAI API'],
    githubUrl: 'https://github.com/suarezfran/retail-brain',
    featured: true,
    inProgress: true
  },
  {
    id: 'plus-edu',
    title: 'Mas Edu',
    description: 'Educational consulting platform showcasing innovative solutions for institutional management, teacher training, and school improvement.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/suarezfran/plus-edu',
    liveUrl: 'https://maseduglobal.com/',
    featured: true,
    inProgress: false
  },
  {
    id: 'vulnerability-report-bot',
    title: 'Vulnerability Report Bot',
    description: 'Automated bot that scans container images from Harbor with Trivy, aggregates linter findings, and generates actionable vulnerability reports and suggested code fixes using the OpenAI API.',
    technologies: ['Java', 'Spring Boot', 'Harbor API', 'OpenAI API', 'Sonar'],
    featured: true,
    inProgress: false
  }
  
];

export const experience: Experience[] = [
  {
    id: 'glic-solutions-2',
    company: 'Glic Solutions',
    position: 'Software Engineer II',
    location: 'Montevideo, Uruguay',
    startDate: '2024-10',
    endDate: 'Present',
    description: [
      'Experienced in full-stack development with a strong focus on backend and system architecture.',
      'Delivered client support and implemented tailored feature enhancements.',
      'Spearheaded the design and implementation of backend platforms to enhance system reliability and performance.'
    ],
  },
  {
    id: 'glic-solutions-1',
    company: 'Glic Solutions',
    position: 'Software Engineer I',
    location: 'Montevideo, Uruguay',
    startDate: '2022-12',
    endDate: '2024-10',
    description: [
      'Managed technology migrations, ensuring seamless transitions and system stability.',
      'Collaborated with team leaders to implement code refactoring and performance optimizations.',
      'Generated security reports, identifying vulnerabilities and code quality issues to support remediation efforts and maintain compliance with best practices.'
    ],
  }
];

export const education: Education[] = [
  {
    id: 'ort',
    institution: 'Universidad ORT Uruguay',
    degree: 'Bachelor of Computer Science',
    field: 'Computer Science',
    startDate: '2022-03',
    description: 'Focused on software engineering, algorithm design, and solving complex real-world problems.'
  },
  {
    id: 'english',
    institution: 'Michigan Language Assessment',
    degree: 'Certificate of Competency in English (ECCE)',
    field: 'English Language',
    startDate: '2021',
    description: 'Advanced English certification.'
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
    title: 'ICPC Regional Latin America Competitor',
    description: 'Selected to represent Universidad ORT Uruguay in a three-member team at the ICPC Regional Latin America, an inter-university programming contest focused on algorithmic and mathematical problem solving, aiming to qualify for the America Programmers\' Cup.',
    date: '2025',
    category: 'recognition'
  }
];

export const contactInfo: ContactInfo = {
  email: 'franciscoysuarez@gmail.com',
  linkedin: 'https://linkedin.com/in/fransuarez',
  github: 'https://github.com/suarezfran',
  whatsapp: 'https://wa.me/59894137314'
};