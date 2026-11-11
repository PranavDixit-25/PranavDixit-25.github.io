import { projects, type Project } from '../data/projects';
import { profile } from '../data/profile';

export function initPortfolioUi(): void {
    initNavigationUi();
    initProjectModals();
    initResumeModal();
    initContactForm();
    initProjectFilters();
}

function initNavigationUi(): void {
    const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
    const mobileNav = document.querySelector<HTMLElement>('.mobile-nav');
    const mobileLinks = document.querySelectorAll<HTMLAnchorElement>('.mobile-nav__link');

    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isExpanded));
            mobileNav.classList.toggle('is-open', !isExpanded);
            document.body.classList.toggle('nav-open', !isExpanded);
        });

        mobileLinks.forEach((link) => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                mobileNav.classList.remove('is-open');
                document.body.classList.remove('nav-open');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (!targetId || targetId === '#') {
                return;
            }

            const targetElement = document.querySelector<HTMLElement>(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
}

function initProjectModals(): void {
    const modal = document.querySelector<HTMLElement>('#project-modal');
    if (!modal) {
        return;
    }

    const closeBtn = modal.querySelector<HTMLButtonElement>('.modal__close');
    const modalBackdrop = modal.querySelector<HTMLElement>('.modal__backdrop');
    const modalTitle = modal.querySelector<HTMLElement>('.modal__title');
    const modalCategory = modal.querySelector<HTMLElement>('.modal__category');
    const modalStatus = modal.querySelector<HTMLElement>('.modal__status');
    const modalOwnership = modal.querySelector<HTMLElement>('.modal__ownership');
    const modalPeriod = modal.querySelector<HTMLElement>('.modal__period');
    const modalDescription = modal.querySelector<HTMLElement>('.modal__description');
    const modalHighlights = modal.querySelector<HTMLElement>('.modal__highlights');
    const modalTech = modal.querySelector<HTMLElement>('.modal__tech');
    const modalMetrics = modal.querySelector<HTMLElement>('.modal__metrics');
    const modalMetricsWrapper = modal.querySelector<HTMLElement>('.modal__metrics-wrapper');
    const modalArch = modal.querySelector<HTMLElement>('.modal__arch');
    const modalArchWrapper = modal.querySelector<HTMLElement>('.modal__arch-wrapper');
    const modalLinks = modal.querySelector<HTMLElement>('.modal__links');

    const openProjectModal = (projectId: string) => {
        const project = projects.find((p) => p.id === projectId);
        if (!project) {
            return;
        }

        if (modalTitle) {
            modalTitle.textContent = project.title;
        }
        if (modalCategory) {
            modalCategory.textContent = project.categoryLabel;
        }
        if (modalStatus) {
            modalStatus.textContent = project.status;
            modalStatus.className = `modal__status status-badge status-badge--${project.statusType}`;
        }
        if (modalOwnership) {
            modalOwnership.textContent = project.ownership;
        }
        if (modalPeriod) {
            modalPeriod.textContent = project.period;
        }
        if (modalDescription) {
            modalDescription.textContent = project.description;
        }

        if (modalHighlights) {
            modalHighlights.innerHTML = project.keyHighlights
                .map((highlight) => `<li>${highlight}</li>`)
                .join('');
        }

        if (modalTech) {
            modalTech.innerHTML = project.technologies
                .map((tech) => `<span class="tech-chip">${tech}</span>`)
                .join('');
        }

        if (modalMetrics && modalMetricsWrapper) {
            if (project.metrics) {
                modalMetrics.textContent = project.metrics;
                modalMetricsWrapper.hidden = false;
            } else {
                modalMetricsWrapper.hidden = true;
            }
        }

        if (modalArch && modalArchWrapper) {
            if (project.architectureNotes) {
                modalArch.textContent = project.architectureNotes;
                modalArchWrapper.hidden = false;
            } else {
                modalArchWrapper.hidden = true;
            }
        }

        if (modalLinks) {
            let linksHtml = '';
            if (project.githubUrl) {
                linksHtml += `
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        <span>View Repository</span>
                    </a>
                `;
            }
            if (project.demoUrl) {
                linksHtml += `
                    <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span>Open Demo</span>
                    </a>
                `;
            }
            modalLinks.innerHTML = linksHtml;
        }

        modal.classList.add('is-active');
        document.body.classList.add('modal-open');
        modal.focus();
    };

    const closeProjectModal = () => {
        modal.classList.remove('is-active');
        document.body.classList.remove('modal-open');
    };

    closeBtn?.addEventListener('click', closeProjectModal);
    modalBackdrop?.addEventListener('click', closeProjectModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-active')) {
            closeProjectModal();
        }
    });

    // Attach click listeners to all project detail trigger buttons
    document.querySelectorAll<HTMLButtonElement>('[data-project-trigger]').forEach((button) => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project-trigger');
            if (projectId) {
                openProjectModal(projectId);
            }
        });
    });

    // Listen for custom project select events from 3D constellation
    window.addEventListener('portfolio-project-select', ((e: CustomEvent<Project>) => {
        if (e.detail?.id) {
            openProjectModal(e.detail.id);
        }
    }) as EventListener);
}

function initResumeModal(): void {
    const resumeModal = document.querySelector<HTMLElement>('#resume-modal');
    if (!resumeModal) {
        return;
    }

    const resumeBtns = document.querySelectorAll<HTMLButtonElement>('[data-resume-trigger]');
    const closeBtn = resumeModal.querySelector<HTMLButtonElement>('.modal__close');
    const backdrop = resumeModal.querySelector<HTMLElement>('.modal__backdrop');

    const openResumeModal = () => {
        resumeModal.classList.add('is-active');
        document.body.classList.add('modal-open');
    };

    const closeResumeModal = () => {
        resumeModal.classList.remove('is-active');
        document.body.classList.remove('modal-open');
    };

    resumeBtns.forEach((btn) => btn.addEventListener('click', openResumeModal));
    closeBtn?.addEventListener('click', closeResumeModal);
    backdrop?.addEventListener('click', closeResumeModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && resumeModal.classList.contains('is-active')) {
            closeResumeModal();
        }
    });
}

function initContactForm(): void {
    const form = document.querySelector<HTMLFormElement>('#contact-form');
    if (!form) {
        return;
    }

    const statusEl = document.querySelector<HTMLElement>('#contact-form-status');
    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = form.querySelector<HTMLInputElement>('#contact-name');
        const emailInput = form.querySelector<HTMLInputElement>('#contact-email');
        const subjectInput = form.querySelector<HTMLInputElement>('#contact-subject');
        const messageInput = form.querySelector<HTMLTextAreaElement>('#contact-message');

        const name = nameInput?.value.trim() ?? '';
        const email = emailInput?.value.trim() ?? '';
        const subject = subjectInput?.value.trim() ?? 'Portfolio Inquiry';
        const message = messageInput?.value.trim() ?? '';

        if (!name || !email || !message) {
            if (statusEl) {
                statusEl.textContent = 'Please fill out all required fields before submitting.';
                statusEl.className = 'contact-status contact-status--error';
                statusEl.hidden = false;
            }
            return;
        }

        // Show immediate positive feedback
        if (statusEl) {
            statusEl.innerHTML = `
                <span>Thank you, <strong>${escapeHtml(name)}</strong>! Launching your email client to dispatch this message directly to Pranav...</span>
            `;
            statusEl.className = 'contact-status contact-status--success';
            statusEl.hidden = false;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Opening Mail Client...';
        }

        // Construct direct mailto link to guarantee 100% reliable contact delivery without broken server dependencies
        const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
            `[Portfolio Inquiry] ${subject} from ${name}`,
        )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent via Code & Cognition Portfolio`,
        )}`;

        setTimeout(() => {
            window.location.href = mailtoUrl;
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Another Message';
            }
        }, 600);
    });
}

function initProjectFilters(): void {
    const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
    const projectCards = document.querySelectorAll<HTMLElement>('.project-card');

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterButtons.forEach((b) => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            projectCards.forEach((card) => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = '';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
}

function escapeHtml(str: string): string {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
