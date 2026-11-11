export interface ProfileData {
    name: string;
    brand: string;
    role: string;
    positioning: string;
    tagline: string;
    university: string;
    degree: string;
    graduation: string;
    cgpa: string;
    location: string;
    email: string;
    github: string;
    githubUsername: string;
    linkedin: string;
    shortBio: string;
    developerStory: {
        intro: string;
        spark: string;
        jarvis: string;
        currentFocus: string;
        vision: string;
    };
    stats: {
        label: string;
        value: string;
        description: string;
    }[];
}

export const profile: ProfileData = {
    name: 'Pranav Dixit',
    brand: 'Code & Cognition',
    role: 'AI/ML Engineer & Full-Stack Developer',
    positioning: 'AI/ML-focused Computer Science student building software that connects practical engineering with intelligent systems.',
    tagline: 'Building intelligent systems and practical software through code, data, and AI.',
    university: 'UPES, Dehradun',
    degree: 'B.Tech in Computer Science & Engineering (AI/ML)',
    graduation: 'Expected May 2028',
    cgpa: '8.4 / 10',
    location: 'Dehradun, Uttarakhand, India',
    email: 'pranav1467d@gmail.com',
    github: 'https://github.com/PranavDixit-25',
    githubUsername: 'PranavDixit-25',
    linkedin: 'https://www.linkedin.com/in/pranav-dixit-9ab7b7345/',
    shortBio:
        'I am a Computer Science and Engineering student specialising in Artificial Intelligence and Machine Learning at UPES. I enjoy solving logical problems and building software that connects practical engineering with AI. My work spans backend development, full-stack applications, data engineering, analytics, computer vision, and AI-assisted prototypes.',
    developerStory: {
        intro:
            'My journey in computing is driven by a deep curiosity for how logical rules can govern both digital machines and intelligent systems.',
        spark:
            'My interest in programming began after a summer robotics camp where I was introduced to Arduino coding. Seeing code control something in the physical world made technology feel tangible, alive, and immensely exciting.',
        jarvis:
            'Around Class 10, my curiosity evolved into a fascination with Artificial Intelligence, partly inspired by the concept of building a personal intelligent assistant like JARVIS from Iron Man. That ambition to turn complex operational data and sensory inputs into intuitive, real-time intelligence still shapes what I build.',
        currentFocus:
            'Today, I am actively deepening my understanding of AI model training, machine learning pipelines, and agentic AI architectures while maintaining rigorous foundations in backend systems, database design, and modern web development.',
        vision:
            'My goal is to continuously build practical, high-impact software, solve demanding engineering challenges, and pursue a technical career creating cognitive, reliable systems.',
    },
    stats: [
        {
            label: 'Academic Standing',
            value: '8.4 CGPA',
            description: 'B.Tech CSE (AI/ML) at UPES Dehradun',
        },
        {
            label: 'Open Source Repos',
            value: '20+ Repos',
            description: 'Active public projects on GitHub',
        },
        {
            label: 'Contributions',
            value: '344+ Commits',
            description: 'Reported GitHub contributions across repositories',
        },
        {
            label: 'Community Leadership',
            value: 'Ambassador',
            description: 'Google Gemini Student Ambassador & IEEE Core Member',
        },
    ],
};
