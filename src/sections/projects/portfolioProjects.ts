import { type PortfolioProject } from './portfolioConstellation';
import { preloadImage } from '../../utils/assetLoaders';
import { portfolioSkills } from './portfolioSkills';
import {
    PROJECT_DETAILS_IMAGE_SIZES,
    PROJECT_PREVIEW_IMAGE_SIZES,
    projectImagesById,
} from './projectImageAssets';

const withProjectScreenshots = (projects: PortfolioProject[]): PortfolioProject[] =>
    projects.map((project) => ({
        ...project,
        screenshot: projectImagesById[project.id]?.preview,
        detailsScreenshot: projectImagesById[project.id]?.details,
        skills: project.skills.map(
            (skill) =>
                portfolioSkills[portfolioSkills.findIndex((s) => s.id === skill)]?.label ?? skill,
        ),
    }));

const getAdjacentProjects = (
    project: PortfolioProject,
    projects: PortfolioProject[],
): PortfolioProject[] => {
    const index = projects.findIndex((candidate) => candidate.id === project.id);
    if (index < 0 || projects.length < 2) {
        return [];
    }

    return [
        projects[(index - 1 + projects.length) % projects.length],
        projects[(index + 1) % projects.length],
    ];
};

export const preloadAdjacentProjectScreenshots = (project: PortfolioProject): void => {
    const constellationProjects = portfolioProjects.filter(
        (candidate) => candidate.constellation.id === project.constellation.id,
    );
    const adjacentProjects = new Set([
        ...getAdjacentProjects(project, portfolioProjects),
        ...getAdjacentProjects(project, constellationProjects),
    ]);

    adjacentProjects.forEach((candidate) => {
        if (candidate.screenshot) {
            preloadImage(candidate.screenshot, PROJECT_PREVIEW_IMAGE_SIZES);
        }
    });
};

export const preloadAdjacentProjectDetails = async (project: PortfolioProject): Promise<void> => {
    const adjacentScreenshots = getAdjacentProjects(project, portfolioProjects).flatMap(
        (candidate) => (candidate.detailsScreenshot ? [candidate.detailsScreenshot] : []),
    );

    await Promise.allSettled(
        adjacentScreenshots.map((source) => preloadImage(source, PROJECT_DETAILS_IMAGE_SIZES)),
    );
};

const aiAndDataProjects: PortfolioProject[] = [
    {
        id: 'supplychain-ai',
        title: 'SupplyChain AI — Analytics & Operations Assistant',
        label: 'SupplyChain AI',
        description:
            'A full-stack operational analytics platform engineered to turn raw supply chain data into high-value decision support across inventory health, procurement, stockout risks, suppliers, and shipments. Features ETL pipelines, normalized PostgreSQL, FastAPI services, a 7-module Streamlit dashboard, and a deterministic conversational assistant with BM25 / SQLite FTS5 document retrieval.',
        period: '2026',
        role: 'Analytics Platform',
        skills: [
            'python',
            'postgresql',
            'fastapi',
            'sqlalchemy',
            'pandas',
            'streamlit',
            'plotly',
            'sqlite-fts5',
            'etl',
        ],
        domain: 'AI/ML & Enterprise Analytics',
        owner: 'Featured Core Project',
        constellation: {
            id: 'front-end',
            position: [-1.15, 0.75, -0.15],
            links: ['legal-lens', 'resqconnect-ai'],
        },
    },
    {
        id: 'legal-lens',
        title: 'Legal Lens — Legal Metrology AI Compliance Platform',
        label: 'Legal Lens',
        description:
            'AI-assisted consumer compliance inspection platform built for Smart India Hackathon (SIH26034) under the Legal Metrology (Packaged Commodities) Rules, 2011. Extracts mandatory packaged product declarations, runs a deterministic compliance rule engine, and generates downloadable audit reports.',
        period: 'SIH 2026',
        role: 'Team Lead (Backend, AI/RAG & Architecture)',
        skills: [
            'python',
            'fastapi',
            'sqlalchemy',
            'postgresql',
            'opencv',
            'tesseract-ocr',
            'docker',
        ],
        domain: 'Regulatory Compliance & AI Inspection',
        owner: 'Smart India Hackathon Team Project',
        constellation: {
            id: 'front-end',
            position: [-1.45, -0.4, 0.12],
            links: ['supplychain-ai'],
        },
    },
    {
        id: 'resqconnect-ai',
        title: 'ResQConnect AI — Emergency Response Network',
        label: 'ResQConnect AI',
        description:
            'Conceptual emergency response network architecture connecting patients, ambulance operators, and hospitals. Features voice-assisted SOS, Gemini-assisted severity triage, scoring-based ambulance allocation, and live transit alert workflows.',
        period: '2026',
        role: 'Lead Developer',
        skills: ['javascript', 'gemini-api', 'rest-api'],
        domain: 'Emergency Medical Coordination & AI Triage',
        owner: 'Concept Prototype',
        constellation: {
            id: 'front-end',
            position: [-0.85, -0.85, -0.22],
            links: ['supplychain-ai'],
        },
    },
];

const fullStackProjects: PortfolioProject[] = [
    {
        id: 'unismart-lms',
        title: 'UniSmart LMS — Intelligent Academic Portal',
        label: 'UniSmart LMS',
        description:
            'An academic management platform prototype featuring decoupled Administrator and Faculty portals, role-based access control, OTP/JWT authentication, automated class scheduling, Excel data import/export, and generative AI attendance analytics.',
        period: '2026',
        role: 'Full-Stack Developer',
        skills: [
            'react',
            'vite',
            'tailwind',
            'nodejs',
            'mongodb',
            'jwt',
            'gemini-api',
        ],
        domain: 'Educational Technology & Enterprise Portals',
        owner: 'Academic Project Prototype',
        constellation: {
            id: 'full-stack',
            position: [0.15, 0.95, -0.25],
            links: ['lost-and-found'],
        },
    },
    {
        id: 'lost-and-found',
        title: 'Campus Lost & Found Management System',
        label: 'Lost & Found',
        description:
            'A desktop management application for university campuses to streamline lost property reporting, verification, and claim processing. Built with layered OOP architecture (GUI, Manager, Model, Interface, Utility) and persistent JSON storage.',
        period: '2025',
        role: 'Independent Developer',
        skills: ['java', 'swing', 'system-design', 'dsa'],
        domain: 'Campus Administration & Desktop Applications',
        owner: 'Standalone Desktop Application',
        constellation: {
            id: 'full-stack',
            position: [-0.18, 0.1, 0.28],
            links: ['unismart-lms'],
        },
    },
];

const visionAndMobileProjects: PortfolioProject[] = [
    {
        id: 'hand-gesture-mouse',
        title: 'Hand Gesture Virtual Mouse',
        label: 'Virtual Mouse',
        description:
            'A webcam-driven human-computer interaction system leveraging real-time computer vision and hand tracking to control OS mouse pointer movement, clicks, scrolling, and dragging via pinch gestures.',
        period: '2025–2026',
        role: 'Computer Vision Developer',
        skills: ['python', 'opencv', 'mediapipe', 'pyautogui', 'computer-vision'],
        domain: 'HCI & Real-Time Computer Vision',
        owner: 'Independent Open-Source Project',
        constellation: {
            id: 'back-end',
            position: [1.12, 0.65, -0.18],
            links: ['vigilant'],
        },
    },
    {
        id: 'vigilant',
        title: 'Vigilant — Vision-Based Access & Safety Monitoring',
        label: 'Vigilant',
        description:
            'Ongoing computer-vision surveillance project designed to monitor campus vehicle entry/exit points, automate license plate recognition (ANPR), and detect two-wheeler helmet safety violations in real time.',
        period: '2026 (Active)',
        role: 'Lead Vision Engineer',
        skills: ['python', 'opencv', 'computer-vision', 'tesseract-ocr'],
        domain: 'Surveillance Analytics & Safety Vision',
        owner: 'In-Progress Development Project',
        constellation: {
            id: 'back-end',
            position: [1.38, -0.25, 0.15],
            links: ['hand-gesture-mouse', 'expense-tracker'],
        },
    },
    {
        id: 'expense-tracker',
        title: 'Expense Tracker Mobile App',
        label: 'Expense Tracker',
        description:
            'A cross-platform mobile expense tracking application developed during the COGNITION 4.0 workshop, featuring category-based expense logging, local persistence, and responsive UI state management.',
        period: '2026',
        role: 'Mobile Developer',
        skills: ['react-native', 'javascript', 'tailwind'],
        domain: 'Personal Finance & Cross-Platform Mobile',
        owner: 'COGNITION 4.0 Workshop Project',
        constellation: {
            id: 'back-end',
            position: [0.88, -0.88, -0.12],
            links: ['vigilant'],
        },
    },
];

export const portfolioProjects: PortfolioProject[] = withProjectScreenshots([
    ...aiAndDataProjects,
    ...fullStackProjects,
    ...visionAndMobileProjects,
]);
