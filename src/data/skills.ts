export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'database';
}

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'React Native', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'RESTful APIs', category: 'backend' },
  { name: 'AWS Lambda', category: 'backend' },
  
  // Database
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  
  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Azure DevOps', category: 'tools' },
  { name: 'Jest', category: 'tools' },
  { name: 'Testing Library', category: 'tools' },
];

export const SKILL_CATEGORIES = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools & Testing',
};
