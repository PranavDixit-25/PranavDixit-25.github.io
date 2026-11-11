export interface AchievementItem {
    id: string;
    title: string;
    issuer: string;
    category: 'hackathon' | 'certification' | 'challenge' | 'workshop';
    categoryLabel: string;
    period: string;
    description: string;
    credentialBadge?: string;
}

export const achievements: AchievementItem[] = [
    {
        id: 'icp-wchl25',
        title: 'National Round Qualifier — ICP–WCHL25 Hackathon',
        issuer: 'SkillCred / DoraHacks',
        category: 'hackathon',
        categoryLabel: 'Competitive Hackathon',
        period: '2025–2026',
        description:
            'Advanced to the National Round of the competitive ICP–WCHL25 hackathon through SkillCred on DoraHacks, developing high-impact decentralized/software prototypes.',
    },
    {
        id: 'solution-challenge-2026',
        title: 'Prototype Submission — Solution Challenge 2026',
        issuer: 'Google Developer Student Clubs (GDSC)',
        category: 'hackathon',
        categoryLabel: 'Global Innovation Challenge',
        period: '2026',
        description:
            'Built and submitted an innovative prototype addressing global challenges as part of the Solution Challenge 2026 — Build with AI initiative.',
    },
    {
        id: 'gemini-ambassador-honor',
        title: 'Google Gemini Student Ambassador',
        issuer: 'Google Community Programs',
        category: 'challenge',
        categoryLabel: 'Ambassadorship',
        period: '2026 – Present',
        description:
            'Selected as a Google Gemini Student Ambassador to advocate for AI literacy, practical generative AI development, and campus tech empowerment.',
    },
    {
        id: '100-days-of-code',
        title: '100 Days of Code Challenge',
        issuer: 'Developer Community',
        category: 'challenge',
        categoryLabel: 'Coding Challenge',
        period: 'Completed',
        description:
            'Successfully completed the rigorous 100 Days of Code challenge, demonstrating disciplined daily coding habits, continuous learning, and open-source building.',
    },
    {
        id: '21-days-dsa',
        title: '21 Days of DSA Code Challenge',
        issuer: 'UPES ACM & ACM-W',
        category: 'challenge',
        categoryLabel: 'Algorithmic Challenge',
        period: 'Completed',
        description:
            'Completed the competitive 21-day Data Structures and Algorithms programming challenge organized by UPES ACM & ACM-W student chapters.',
    },
    {
        id: 'cisco-ai',
        title: 'Introduction to Modern AI',
        issuer: 'Cisco Networking Academy',
        category: 'certification',
        categoryLabel: 'Professional Certification',
        period: 'Verified',
        description:
            'Course certification covering contemporary machine learning concepts, neural network foundations, and modern AI application development.',
    },
    {
        id: 'cisco-python',
        title: 'Python Essentials 1 & 2',
        issuer: 'Cisco Networking Academy / OpenEDG',
        category: 'certification',
        categoryLabel: 'Professional Certification',
        period: 'Verified',
        description:
            'Comprehensive certifications covering foundational to advanced Python programming, object-oriented concepts, and standard library architectures.',
    },
    {
        id: 'cisco-os',
        title: 'Operating Systems Basics',
        issuer: 'Cisco Networking Academy',
        category: 'certification',
        categoryLabel: 'Professional Certification',
        period: 'Verified',
        description:
            'Certified in fundamental operating system architecture, process scheduling, memory hierarchies, and system call interfaces.',
    },
    {
        id: 'nit-kurukshetra',
        title: 'AI-Driven Computer & Network Security',
        issuer: 'NIT Kurukshetra / ISEA Phase-III',
        category: 'certification',
        categoryLabel: 'Academic Short-Term Course',
        period: 'Verified',
        description:
            'Specialized technical course examining AI-assisted threat detection, network intrusion monitoring, and modern cybersecurity defense protocols.',
    },
    {
        id: 'chatgpt-codex',
        title: 'ChatGPT Codex Technical Workshop',
        issuer: 'Technical Workshop',
        category: 'workshop',
        categoryLabel: 'AI Engineering Workshop',
        period: '2026',
        description:
            'Hands-on technical workshop exploring LLM-assisted programming workflows, prompt architecture, and automated coding paradigms.',
    },
    {
        id: 'cognition-workshop',
        title: 'COGNITION 4.0 React Native Bootcamp',
        issuer: 'COGNITION Technical Chapter',
        category: 'workshop',
        categoryLabel: 'Mobile App Workshop',
        period: 'Completed',
        description:
            'Intensive mobile engineering workshop building cross-platform React Native mobile applications and interface components.',
    },
    {
        id: 'ieee-lora-webinar',
        title: 'LoRA of Pre-trained Deep Neural Networks',
        issuer: 'IEEE Technical Community',
        category: 'workshop',
        categoryLabel: 'Advanced AI Seminar',
        period: 'Verified',
        description:
            'Advanced technical seminar examining Low-Rank Adaptation (LoRA) mechanisms for parameter-efficient fine-tuning (PEFT) of large language and vision models.',
    },
];
