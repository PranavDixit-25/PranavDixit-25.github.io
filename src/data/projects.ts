export interface Project {
    id: string;
    title: string;
    shortTitle: string;
    category: 'ai-ml' | 'full-stack' | 'systems-mobile';
    categoryLabel: string;
    status: string;
    statusType: 'completed' | 'prototype' | 'in-progress' | 'demo';
    ownership: string;
    featured: boolean;
    period: string;
    tagline: string;
    description: string;
    keyHighlights: string[];
    technologies: string[];
    metrics?: string;
    githubUrl?: string;
    demoUrl?: string;
    architectureNotes?: string;
    constellationCoords: [number, number, number];
}

export const projects: Project[] = [
    {
        id: 'supplychain-ai',
        title: 'SupplyChain AI — Analytics & Operations Assistant',
        shortTitle: 'SupplyChain AI',
        category: 'ai-ml',
        categoryLabel: 'AI/ML & Data Engineering',
        status: 'Milestone Completed / Analytics Platform',
        statusType: 'prototype',
        ownership: 'Core Analytics Platform',
        featured: true,
        period: '2026',
        tagline: 'End-to-end supply chain analytics platform with deterministic AI assistant.',
        description:
            'A full-stack operational analytics platform engineered to transform raw supply chain data into high-value decision support across inventory health, procurement, stockout risks, suppliers, and shipments.',
        keyHighlights: [
            'Automated ETL pipelines with strict schema validation and a normalized PostgreSQL 17 database.',
            'Seven-module interactive analytics dashboard built with Streamlit and Plotly for multi-tier KPI monitoring.',
            'Deterministic conversational assistant with intent classification, allowlisted tool execution, and multi-turn conversational context.',
            'Hybrid retrieval engine combining BM25 and SQLite FTS5 for precision document and supplier record retrieval.',
            'Architected with clean separation across data pipelines, FastAPI REST services, and analytical queries.',
        ],
        technologies: [
            'Python 3.11',
            'PostgreSQL',
            'FastAPI',
            'SQLAlchemy',
            'Pandas',
            'Streamlit',
            'Plotly',
            'SQLite FTS5',
            'Pydantic',
        ],
        metrics: '2,300+ Verified Records · 7 Analytic Modules · Fast SQL Aggregations',
        architectureNotes:
            'Data Layer: PostgreSQL 17 + SQLAlchemy models; API Layer: FastAPI endpoints; Analytics: Pandas & Plotly; Assistant: Deterministic intent router with allowlisted tool definitions and BM25 document indexing.',
        constellationCoords: [0, 0.4, 0.2],
    },
    {
        id: 'unismart-lms',
        title: 'UniSmart LMS — Intelligent Academic Portal',
        shortTitle: 'UniSmart LMS',
        category: 'full-stack',
        categoryLabel: 'Full-Stack Development',
        status: 'Prototype / Academic Project',
        statusType: 'prototype',
        ownership: 'Individual Project',
        featured: false,
        period: '2026',
        tagline: 'AI-assisted learning management system prototype with dual portals.',
        description:
            'An academic management platform prototype featuring decoupled Administrator and Faculty portals, role-based access control, and generative AI attendance analytics.',
        keyHighlights: [
            'Decoupled Admin and Faculty portals with JWT authentication and role-based permissions.',
            'Interactive attendance tracking with AI-driven student engagement insights.',
            'Automated student and faculty scheduling with Excel import/export via ExcelJS.',
            'Responsive frontend built with React, Vite, and Tailwind CSS backed by Node.js and MongoDB.',
        ],
        technologies: [
            'React',
            'Vite',
            'Tailwind CSS',
            'Node.js',
            'Express',
            'MongoDB',
            'Mongoose',
            'JWT',
            'Google Generative AI SDK',
            'ExcelJS',
        ],
        githubUrl: 'https://github.com/PranavDixit-25/unismart-lms',
        constellationCoords: [-0.9, -0.3, -0.2],
    },
    {
        id: 'hand-gesture-mouse',
        title: 'Hand Gesture Virtual Mouse',
        shortTitle: 'Virtual Mouse',
        category: 'ai-ml',
        categoryLabel: 'Computer Vision & AI',
        status: 'Completed',
        statusType: 'completed',
        ownership: 'Individual Project',
        featured: false,
        period: '2025–2026',
        tagline: 'Real-time webcam computer vision interface for touchless desktop control.',
        description:
            'A webcam-driven human-computer interaction system that leverages hand tracking and landmark geometry to control OS-level mouse pointer movement and gestures in real time.',
        keyHighlights: [
            'Precision cursor movement tracked via index finger tip with smoothing interpolation.',
            'Gesture mapping: thumb-index pinch for left-click, thumb-middle pinch for right-click, three-finger pinch for double-click.',
            'Sustained pinch detection for drag-and-drop operations.',
            'Fist gesture to pause tracking and open palm gesture to resume control instantly.',
        ],
        technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'NumPy'],
        githubUrl: 'https://github.com/PranavDixit-25/hand-gesture-mouse',
        constellationCoords: [0.8, -0.5, 0.1],
    },
    {
        id: 'legal-lens',
        title: 'Legal Lens — Packaged Commodities AI Compliance',
        shortTitle: 'Legal Lens',
        category: 'ai-ml',
        categoryLabel: 'AI/ML & Compliance',
        status: 'Prototype / SIH Project (SIH26034)',
        statusType: 'prototype',
        ownership: 'Team Lead (Backend, AI/RAG & Architecture)',
        featured: false,
        period: 'Smart India Hackathon 2026',
        tagline: 'AI consumer compliance inspection platform under Legal Metrology Rules.',
        description:
            'An automated compliance verification platform designed for packaged goods under the Legal Metrology (Packaged Commodities) Rules, 2011, created for Smart India Hackathon.',
        keyHighlights: [
            'Led technical architecture, backend API design, and OCR pipeline integration.',
            'Automated extraction of mandatory declarations including MRP, net quantity, manufacturer, and packaging dates.',
            'Deterministic compliance rule engine evaluating regulatory thresholds and non-compliance flags.',
            'Automated inspection reporting with downloadable PDF compliance audits.',
        ],
        technologies: [
            'Python',
            'FastAPI',
            'SQLAlchemy',
            'PostgreSQL',
            'OpenCV',
            'Tesseract OCR',
            'Pydantic',
            'ReportLab',
            'Docker Compose',
        ],
        githubUrl: 'https://github.com/vanshsa1234-hub/Legal-Metrology-AI-Compliance-System',
        constellationCoords: [0.6, 0.7, -0.3],
    },
    {
        id: 'resqconnect-ai',
        title: 'ResQConnect AI — Emergency Response Network',
        shortTitle: 'ResQConnect AI',
        category: 'ai-ml',
        categoryLabel: 'AI/ML & Systems Demo',
        status: 'Demo / Concept Prototype',
        statusType: 'demo',
        ownership: 'Individual Project',
        featured: false,
        period: '2026',
        tagline: 'AI-assisted triage and smart dispatch platform connecting patients and first responders.',
        description:
            'A conceptual emergency response architecture connecting patients, ambulance operators, and hospital trauma centers with AI-driven severity triage.',
        keyHighlights: [
            'Patient portal featuring one-tap emergency SOS and voice-assisted emergency input.',
            'Gemini-assisted triage classification and urgency scoring for incoming requests.',
            'Rule-based dispatch queue and driver accept/decline coordination workflow.',
            'Hospital incoming-patient dashboard displaying triage urgency and estimated transit times.',
        ],
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Google Gemini', 'Simulated Routing'],
        githubUrl: 'https://github.com/PranavDixit-25/ResQConnect-ai',
        constellationCoords: [-0.6, 0.6, 0.3],
    },
    {
        id: 'vigilant',
        title: 'Vigilant — Vision-Based Access & Safety Monitoring',
        shortTitle: 'Vigilant',
        category: 'ai-ml',
        categoryLabel: 'Computer Vision',
        status: 'In Progress',
        statusType: 'in-progress',
        ownership: 'Individual Project',
        featured: false,
        period: '2026 (Active Development)',
        tagline: 'Automated vehicle access tracking and rider safety violation detection.',
        description:
            'An ongoing computer-vision surveillance project designed to monitor campus and facility vehicle access points while enforcing safety protocols.',
        keyHighlights: [
            'Real-time vehicle entry and exit logging using camera video streams.',
            'Automatic Number Plate Recognition (ANPR) pipeline utilizing OCR.',
            'Rider safety inspection targeting two-wheeler helmet compliance.',
            'Centralized parking visit ledger and security audit records.',
        ],
        technologies: ['Python', 'OpenCV', 'Computer Vision', 'OCR Algorithms', 'NumPy'],
        constellationCoords: [0.4, -0.8, -0.1],
    },
    {
        id: 'lost-and-found',
        title: 'Campus Lost & Found Management System',
        shortTitle: 'Lost & Found',
        category: 'systems-mobile',
        categoryLabel: 'Desktop Systems & OOP',
        status: 'Completed',
        statusType: 'completed',
        ownership: 'Individual Project',
        featured: false,
        period: '2025',
        tagline: 'Multi-role Java desktop application built with clean object-oriented design.',
        description:
            'A desktop management application designed for university campuses to streamline lost property reporting, verification, and claim processing.',
        keyHighlights: [
            'Layered architecture adhering to OOP principles (GUI, Manager, Model, Interface, Utility).',
            'Distinct Student and Administrator access tiers with claim approval lifecycles.',
            'Search, category filtering, and status updates with robust JSON file persistence.',
            'Packaged as a standalone runnable desktop JAR application.',
        ],
        technologies: ['Java', 'Java Swing', 'JSON Storage', 'OOP Architecture'],
        githubUrl: 'https://github.com/PranavDixit-25/Lost-And-Found-Management-System',
        demoUrl: 'https://drive.google.com/file/d/1HNDPAX5QU_kg-r6zh_QI7PEWjYh6XNPi/view?usp=sharing',
        constellationCoords: [-0.8, -0.6, 0.2],
    },
    {
        id: 'expense-tracker',
        title: 'Expense Tracker Mobile App',
        shortTitle: 'Expense Tracker',
        category: 'systems-mobile',
        categoryLabel: 'Mobile Development',
        status: 'Completed Workshop Project',
        statusType: 'completed',
        ownership: 'COGNITION 4.0 Workshop Project',
        featured: false,
        period: '2026',
        tagline: 'Cross-platform mobile expense and budget tracker built with React Native.',
        description:
            'A mobile personal finance utility developed during the COGNITION 4.0 mobile app development workshop, focusing on clean UI state management and rapid transaction logging.',
        keyHighlights: [
            'Fast entry of daily personal expenses with category assignment.',
            'Local state persistence for instant retrieval across sessions.',
            'Visual budget breakdown and spending summaries.',
        ],
        technologies: ['React Native', 'JavaScript', 'Mobile UI Design'],
        constellationCoords: [-0.2, -0.9, -0.3],
    },
];
