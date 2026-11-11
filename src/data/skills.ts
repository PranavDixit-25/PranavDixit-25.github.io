export interface SkillCategory {
    id: string;
    name: string;
    icon: string;
    description: string;
    skills: {
        name: string;
        highlight?: boolean;
    }[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'languages',
        name: 'Programming Languages',
        icon: 'terminal',
        description: 'Core languages utilized for systems programming, data engineering, and web applications.',
        skills: [
            { name: 'Java', highlight: true },
            { name: 'Python', highlight: true },
            { name: 'SQL', highlight: true },
            { name: 'JavaScript (ESNext)', highlight: true },
            { name: 'TypeScript', highlight: true },
            { name: 'C' },
        ],
    },
    {
        id: 'backend',
        name: 'Backend & Databases',
        icon: 'database',
        description: 'Architecting scalable server microservices, relational databases, and data persistence layers.',
        skills: [
            { name: 'FastAPI', highlight: true },
            { name: 'PostgreSQL', highlight: true },
            { name: 'Node.js', highlight: true },
            { name: 'Spring Boot', highlight: true },
            { name: 'MySQL', highlight: true },
            { name: 'MongoDB', highlight: true },
            { name: 'Express.js' },
            { name: 'Flask' },
            { name: 'SQLAlchemy' },
            { name: 'REST APIs' },
            { name: 'SQLite / FTS5' },
        ],
    },
    {
        id: 'frontend',
        name: 'Frontend & Mobile',
        icon: 'layout',
        description: 'Building responsive, accessible interfaces and cross-platform mobile experiences.',
        skills: [
            { name: 'React', highlight: true },
            { name: 'Streamlit', highlight: true },
            { name: 'Tailwind CSS', highlight: true },
            { name: 'React Native', highlight: true },
            { name: 'Vite' },
            { name: 'Angular' },
            { name: 'HTML5 & CSS3' },
            { name: 'SCSS' },
            { name: 'Plotly' },
        ],
    },
    {
        id: 'ai-data',
        name: 'Data, AI & Computer Vision',
        icon: 'cpu',
        description: 'Extracting operational insights, automating computer vision tasks, and applying LLM/agentic patterns.',
        skills: [
            { name: 'Pandas & NumPy', highlight: true },
            { name: 'OpenCV', highlight: true },
            { name: 'MediaPipe', highlight: true },
            { name: 'Google Gemini API', highlight: true },
            { name: 'ETL Pipelines', highlight: true },
            { name: 'PyAutoGUI' },
            { name: 'BM25 Document Search' },
            { name: 'SQL Analytics' },
            { name: 'Tesseract OCR' },
        ],
    },
    {
        id: 'devops-cloud',
        name: 'Cloud & DevOps',
        icon: 'cloud',
        description: 'Containerization, automated version control, and collaborative developer environments.',
        skills: [
            { name: 'Git & GitHub', highlight: true },
            { name: 'Docker', highlight: true },
            { name: 'Linux Environments', highlight: true },
            { name: 'Postman API Testing', highlight: true },
            { name: 'CI/CD Concepts' },
            { name: 'Azure DevOps' },
            { name: 'AWS (Basics)' },
        ],
    },
    {
        id: 'foundations',
        name: 'Computer Science Foundations',
        icon: 'layers',
        description: 'Theoretical and structural principles powering clean, maintainable engineering.',
        skills: [
            { name: 'Data Structures & Algorithms', highlight: true },
            { name: 'Object-Oriented Programming (OOP)', highlight: true },
            { name: 'Database Management Systems (DBMS)', highlight: true },
            { name: 'System Design Principles', highlight: true },
            { name: 'Computer Networks' },
            { name: 'Operating Systems' },
        ],
    },
];
