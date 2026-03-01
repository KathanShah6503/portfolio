export const siteData = {
  name: 'Kathan Shah',
  title: 'Full-Stack Developer',
  location: 'Hyderabad, India',
  email: 'kathan.builds@gmail.com',
  github: 'https://www.github.com/KathanShah6503',
  linkedin: 'https://www.linkedin.com/in/kathanshah653',
  bio: 'Full-Stack Developer with 2+ years of experience building production-grade fintech systems across frontend and backend. I specialize in React/TypeScript interfaces, scalable Node.js APIs, and performance-focused data workflows with MongoDB/PostgreSQL.',
  summary: 'I build reliable, scalable software with a strong focus on performance, clean architecture, and user experience.'
};

export const skills = {
  frontend: ['React.js', 'Redux', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Material UI'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'Microservices'],
  databases: ['MongoDB', 'PostgreSQL', 'Indexing', 'Transactions'],
  cloudDevops: ['AWS (EC2, ECS, Lambda, SQS, S3)', 'Docker', 'Jenkins', 'CI/CD', 'Git']
};

export const experience = [
  {
    company: 'KFin Technologies Limited',
    role: 'Software Engineer',
    location: 'Hyderabad, India',
    period: 'Jan 2024 – Present',
    highlights: [
      'Developed scalable frontend modules using React, Redux, and TypeScript for fintech systems handling 50k+ daily requests.',
      'Created and maintained 40+ RESTful APIs enabling seamless frontend-backend integration across internal and external platforms.',
      'Optimized MongoDB write-heavy operations with indexing and bulk operations, reducing API latency from 30s to under 10s.',
      'Containerized services with Docker and contributed to AWS-based deployments and CI/CD workflows.'
    ]
  }
];

export const projects = [
  {
    name: 'News Aggregator Website with Elastic Search',
    period: 'May 2023 – July 2023',
    stack: ['ReactJS', 'ExpressJS', 'NodeJS', 'Elasticsearch'],
    summary:
      'Designed and optimized index mappings for 200k+ news documents, and implemented full-text search with performant query architecture.',
    links: {
      demo: '',
      repo: ''
    }
  }
];
