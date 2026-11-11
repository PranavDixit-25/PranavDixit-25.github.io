export interface LeadershipItem {
    id: string;
    role: string;
    organization: string;
    period: string;
    description: string;
    bullets: string[];
    tags: string[];
}

export const leadership: LeadershipItem[] = [
    {
        id: 'ieee-cs',
        role: 'Core Committee Member',
        organization: 'IEEE Computer Society, UPES Student Branch',
        period: '2024 – Present',
        description:
            'Active contributor to student technical initiatives, hands-on programming bootcamps, and competitive coding events.',
        bullets: [
            'Supported the Events Department in planning, scheduling, and orchestrating departmental technical symposiums.',
            'Mentored peer participants in algorithmic problem-solving, Git workflows, and software development practices.',
            'Collaborated with university faculty and guest speakers to conduct modern technology seminars.',
        ],
        tags: ['IEEE Computer Society', 'Events Management', 'Technical Mentorship', 'Workshop Coordination'],
    },
    {
        id: 'open-source-community',
        role: 'Open-Source Contributor & Advocate',
        organization: 'Global Developer Community & GitXplore (IEEE)',
        period: 'Ongoing',
        description:
            'Committed to collaborative open-source software building, documentation, and technical peer knowledge-sharing.',
        bullets: [
            'Maintains 20+ public repositories spanning AI prototypes, computer vision tools, and backend utilities.',
            'Active participant in GitXplore, community Git & GitHub workshops, and open collaborative code sprints.',
            'Regularly publishes project breakdowns, engineering findings, and learning milestones on LinkedIn.',
        ],
        tags: ['Open Source', 'GitHub', 'GitXplore', 'Technical Writing'],
    },
    {
        id: 'acm-student-chapter',
        role: 'Community Participant & DSA Contributor',
        organization: 'UPES ACM & ACM-W Student Chapters',
        period: '2024 – Present',
        description:
            'Engaged member of student ACM chapters participating in competitive programming sprints and technical challenges.',
        bullets: [
            'Completed the 21 Days of DSA Code challenge, refining computational thinking and algorithmic problem solving.',
            'Participates in peer-led code reviews, algorithm discussions, and technical hackathons.',
        ],
        tags: ['UPES ACM', 'ACM-W', 'Competitive Programming', 'Data Structures'],
    },
    {
        id: 'samarth-bharat-lead',
        role: 'Team Lead & Project Manager',
        organization: 'Samarth Bharat Vyaspeeth (NGO)',
        period: 'June 2025 – July 2025',
        description:
            'Spearheaded the educational software initiative coordinating technical sprints, mobile UI development, and timelines.',
        bullets: [
            'Guided a team of student engineers through requirement gathering, UI/UX wireframing, and code reviews.',
            'Maintained team velocity and punctual delivery for social-impact educational digital resources.',
        ],
        tags: ['Project Leadership', 'Social Impact', 'Agile Sprints', 'Team Management'],
    },
];
