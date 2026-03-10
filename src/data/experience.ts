export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies?: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: 'Wazuh',
    position: 'Software Engineer',
    startDate: '2025',
    endDate: null,
    description: [
      'Developing new features for Wazuh Dashboard',
      'Contributing to new versions of the security platform dashboard',
      'Working with modern frontend technologies in an open-source security project',
    ],
    technologies: ['React', 'TypeScript', 'OpenSearch Dashboards'],
  },
  {
    company: 'LearUp',
    position: 'Senior Full Stack Developer',
    startDate: 'Nov 2024',
    endDate: 'Dec 2024',
    description: [
      'Led frontend development of a document management system using React and modern JavaScript practices',
      'Implemented responsive and intuitive user interfaces for document handling workflows',
      'Developed automated background processes using Python cronjobs for document processing',
    ],
    technologies: ['React', 'JavaScript', 'Python'],
  },
  {
    company: 'Prediktia',
    position: 'Senior Full Stack Developer',
    startDate: 'Jan 2023',
    endDate: 'Aug 2024',
    description: [
      'Architected and developed a responsive inventory optimization platform using Next.js',
      'Built intuitive user interfaces for computer vision-based product matching system',
      'Implemented serverless backend architecture using Node.js and AWS Lambda',
      'Established CI/CD pipelines with Azure DevOps for automated testing and deployment',
    ],
    technologies: ['Next.js', 'Node.js', 'AWS Lambda', 'Azure DevOps'],
  },
  {
    company: '10Pearls',
    position: 'Mid Frontend Developer',
    startDate: 'Jul 2021',
    endDate: 'Sep 2022',
    description: [
      'Developed comprehensive payment module interfaces for web and mobile platforms',
      'Built responsive web interfaces using React and mobile interfaces with React Native',
      'Created user-friendly interfaces for payment history, account management, and P2P transfers',
      'Ensured consistent user experience across platforms through component-based architecture',
    ],
    technologies: ['React', 'React Native', 'TypeScript'],
  },
  {
    company: 'Pratech Group',
    position: 'Junior Frontend Developer',
    startDate: 'Aug 2019',
    endDate: 'Jun 2021',
    description: [
      'Developed frontend for vehicle insurance purchasing system with payment gateway integration',
    ],
    technologies: ['JavaScript', 'React'],
  },
];
