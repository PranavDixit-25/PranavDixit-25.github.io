export interface ExperienceItem {
    id: string;
    role: string;
    organization: string;
    period: string;
    location: string;
    type: 'internship' | 'ambassador' | 'freelance' | 'leadership';
    status: string;
    description: string;
    responsibilities: string[];
    skills: string[];
}

export const experiences: ExperienceItem[] = [
    {
        id: 'anantixia',
        role: 'Java Backend Developer Intern',
        organization: 'Anantixia Pvt. Ltd.',
        period: 'June 2026 – July 2026',
        location: 'Remote',
        type: 'internship',
        status: 'Completed',
        description:
            'Engineered robust backend microservices and database foundations for core application modules.',
        responsibilities: [
            'Developed and maintained scalable RESTful web services utilizing Java and Spring Boot.',
            'Designed normalized MySQL database schemas, write-optimized queries, and transactional CRUD operations.',
            'Implemented secure endpoint authentication and granular role-based access control (RBAC).',
            'Conducted thorough API verification with Postman suites and collaborated using Git-centric team workflows.',
        ],
        skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Postman', 'Git', 'GitHub'],
    },
    {
        id: 'xebia',
        role: 'Intern',
        organization: 'Xebia IT Architects via Xebia Academy',
        period: 'July 2026 (Two-Week Programme)',
        location: 'Remote',
        type: 'internship',
        status: 'Completed',
        description:
            'Completed a two-week internship programme providing exposure to a professional IT working environment.',
        responsibilities: [
            'Completed a two-week internship programme gaining exposure to a professional corporate IT environment.',
            'Observed enterprise software development workflows, professional standards, and team collaboration practices.',
        ],
        skills: ['Professional IT Environment', 'Software Industry Exposure'],
    },
    {
        id: 'gemini-ambassador',
        role: 'Google Gemini Student Ambassador',
        organization: 'Google / Campus Ambassador Community',
        period: 'May 2026 – Present',
        location: 'Remote / Campus',
        type: 'ambassador',
        status: 'Active',
        description:
            'Driving student AI literacy, hands-on developer workshops, and community adoption around Google Gemini and generative AI tools.',
        responsibilities: [
            'Championing practical AI engineering, prompt design, and Gemini API integration among student developers.',
            'Facilitating technical knowledge sharing, AI literacy sessions, and developer hackathon preparation.',
            'Serving as a liaison between campus developer talent and Google developer initiatives.',
        ],
        skills: ['Google Gemini API', 'Generative AI', 'Developer Advocacy', 'AI Literacy', 'Community Leadership'],
    },
    {
        id: 'freelance',
        role: 'Freelance Web Developer',
        organization: 'Independent Practice',
        period: 'January 2026 – Present',
        location: 'Remote',
        type: 'freelance',
        status: 'Active',
        description:
            'Delivering bespoke, high-performance, mobile-first web applications and personal identity sites for individual clients.',
        responsibilities: [
            'Building responsive, accessible web interfaces utilizing modern HTML, CSS, JavaScript, and component architectures.',
            'Optimizing performance, asset delivery, and search engine discoverability across viewports.',
            'Translating client branding visions into intuitive, interactive user experiences.',
        ],
        skills: ['HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'Responsive Web Design', 'Client Consultation'],
    },
    {
        id: 'samarth-bharat',
        role: 'Team Lead & Project Manager',
        organization: 'Samarth Bharat Vyaspeeth (NGO)',
        period: 'June 2025 – July 2025',
        location: 'Mumbai, India',
        type: 'leadership',
        status: 'Completed',
        description:
            'Led educational mobile-app development planning and coordinated UI/UX decisions, technical execution, teamwork, and timelines.',
        responsibilities: [
            'Led educational mobile-app development planning for NGO outreach initiatives.',
            'Coordinated UI/UX decisions, technical execution, teamwork, and delivery timelines.',
            'Managed cross-functional collaboration and sprint deliverables.',
        ],
        skills: ['Project Management', 'Team Leadership', 'UI/UX Planning', 'Team Coordination'],
    },
];
