// ===== INTERACTIVE ELEMENTS SYSTEM =====

// Initialize all interactive elements
function initializeInteractiveElements() {
    makeHeroElementsClickable();
    makePhilosophyCardsInteractive();
    makeTimelineInteractive();
    makeStatsClickable();
    addHoverEffectsToAllElements();
    addClickEffectsToButtons();
    makeLogoInteractive();
    addEasterEggs();
    initializeKeyboardShortcuts();
    
    console.log('All interactive elements initialized');
}

// Make hero elements clickable
function makeHeroElementsClickable() {
    // Make floating icons clickable
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', function() {
            const technologies = ['React.js', 'Python', 'JavaScript', 'CSS3'];
            const tech = technologies[index];
            showTechInfo(tech);
            
            // Add click animation
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
        
        // Add hover tooltip
        icon.title = `Click to learn about ${['React.js', 'Python', 'JavaScript', 'CSS3'][index]}`;
    });
    
    // Make hero buttons more interactive
    const exploreBtn = document.getElementById('explore-skills');
    const resumeBtn = document.getElementById('view-resume');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            // Smooth scroll to skills section with animation
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth' });
                // Add pulse effect to skills section
                skillsSection.classList.add('pulse-highlight');
                setTimeout(() => skillsSection.classList.remove('pulse-highlight'), 2000);
            }
        });
    }
    
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function() {
            // Scroll to resume section or show resume modal
            const resumeSection = document.getElementById('resume');
            if (resumeSection) {
                resumeSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                showResumeModal();
            }
        });
    }
}

// Make philosophy cards interactive
function makePhilosophyCardsInteractive() {
    const philosophyCards = document.querySelectorAll('.philosophy-card');
    
    philosophyCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        
        // Add click handler
        card.addEventListener('click', function() {
            expandPhilosophyCard(this, index);
        });
        
        // Add interactive features
        const features = card.querySelectorAll('.feature');
        features.forEach(feature => {
            feature.style.cursor = 'pointer';
            feature.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.add('feature-clicked');
                showFeatureDetails(this.textContent);
                setTimeout(() => this.classList.remove('feature-clicked'), 1000);
            });
        });
    });
    
    // Make goal items clickable
    const goalItems = document.querySelectorAll('.goal-item');
    goalItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            showGoalDetails(this, index);
        });
    });
}

// Make timeline interactive
function makeTimelineInteractive() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const card = item.querySelector('.timeline-card');
        if (card) {
            card.style.cursor = 'pointer';
            
            // Add click to expand
            card.addEventListener('click', function() {
                toggleTimelineExpansion(item, index);
            });
        }
        
        // Make skill tags clickable
        const skillTags = item.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.style.cursor = 'pointer';
            tag.addEventListener('click', function(e) {
                e.stopPropagation();
                showSkillInfo(this.textContent);
                this.classList.add('skill-clicked');
                setTimeout(() => this.classList.remove('skill-clicked'), 500);
            });
        });
        
        // Make progress bar clickable
        const progressBar = item.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.cursor = 'pointer';
            progressBar.addEventListener('click', function(e) {
                e.stopPropagation();
                animateProgressBar(this);
            });
        }
    });
}

// Make stats clickable
function makeStatsClickable() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            showStatDetails(this, index);
            
            // Add click animation
            const number = this.querySelector('.stat-number');
            if (number) {
                number.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    number.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });
}

// Add hover effects to all elements
function addHoverEffectsToAllElements() {
    // Add hover effects to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add hover effects to section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.cursor = 'pointer';
        title.addEventListener('click', function() {
            this.classList.add('title-clicked');
            setTimeout(() => this.classList.remove('title-clicked'), 1000);
        });
    });
    
    // Add hover effects to icons
    const allIcons = document.querySelectorAll('i[class*="fa"]');
    allIcons.forEach(icon => {
        icon.style.cursor = 'pointer';
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Add click effect
        icon.addEventListener('click', function() {
            this.style.transform = 'scale(1.3) rotate(15deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        });
    });
}

// Add click effects to buttons
function addClickEffectsToButtons() {
    const allButtons = document.querySelectorAll('button, .btn');
    
    allButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Make logo interactive
function makeLogoInteractive() {
    const logo = document.querySelector('.logo-text');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            // Easter egg: cycle through different styles
            const styles = [
                'linear-gradient(45deg, #ff6b35, #f7931e)',
                'linear-gradient(45deg, #667eea, #764ba2)',
                'linear-gradient(45deg, #f093fb, #f5576c)',
                'linear-gradient(45deg, #4facfe, #00f2fe)',
                'var(--gradient-primary)' // back to original
            ];
            
            const currentIndex = parseInt(this.dataset.styleIndex || '0');
            const nextIndex = (currentIndex + 1) % styles.length;
            
            this.style.background = styles[nextIndex];
            this.style.webkitBackgroundClip = 'text';
            this.style.webkitTextFillColor = 'transparent';
            this.dataset.styleIndex = nextIndex;
            
            // Add rotation animation
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 500);
        });
    }
}

// Add easter eggs
function addEasterEggs() {
    let clickCount = 0;
    
    // Konami code easter egg
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Triple click easter egg
    document.addEventListener('click', function() {
        clickCount++;
        setTimeout(() => clickCount--, 1000);
        
        if (clickCount === 3) {
            showSecretMessage();
            clickCount = 0;
        }
    });
}

// Initialize keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K for search/chat focus
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const chatInput = document.getElementById('chat-input');
            if (chatInput) {
                chatInput.focus();
                chatInput.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        // Escape to close any open modals
        if (e.key === 'Escape') {
            closeAllModals();
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowDown' && e.ctrlKey) {
            e.preventDefault();
            scrollToNextSection();
        }
        if (e.key === 'ArrowUp' && e.ctrlKey) {
            e.preventDefault();
            scrollToPreviousSection();
        }
    });
}

// Helper functions for interactions
function showTechInfo(tech) {
    const techInfo = {
        'React.js': 'Building modern, interactive user interfaces with component-based architecture',
        'Python': 'Versatile programming language for backend development and data analysis',
        'JavaScript': 'The language of the web - making websites interactive and dynamic',
        'CSS3': 'Styling and animating web pages with modern CSS techniques'
    };
    
    window.CAMBO.showNotification(`${tech}: ${techInfo[tech]}`, 'info');
}

function expandPhilosophyCard(card, index) {
    const philosophies = [
        {
            title: 'Growth Mindset in Action',
            content: 'Every challenge is a stepping stone. I document my learning journey, share failures as lessons, and celebrate small wins. This mindset has helped me tackle complex problems and continuously improve my skills.'
        },
        {
            title: 'Bridging Cultures Through Code',
            content: 'Technology should preserve and celebrate cultural diversity. I\'m working on projects that support the Khmer language and create digital spaces where traditional values meet modern innovation.'
        },
        {
            title: 'Code with Purpose',
            content: 'Every line of code should serve a purpose beyond functionality. I focus on accessibility, user experience, and creating solutions that genuinely improve people\'s lives and strengthen communities.'
        }
    ];
    
    showDetailModal(philosophies[index].title, philosophies[index].content);
}

function showGoalDetails(item, index) {
    const goals = [
        {
            title: 'Family Networking App',
            details: 'A comprehensive platform featuring family trees, event planning, photo sharing, and communication tools specifically designed for Khmer families. Includes features like elder respect protocols and traditional calendar integration.',
            timeline: 'Target Launch: Q3 2024',
            technologies: 'React Native, Node.js, MongoDB, Firebase'
        },
        {
            title: 'Tech Education Initiative',
            details: 'Free coding bootcamps and online resources in Khmer language. Starting with basic web development and progressing to advanced topics. Partnering with local schools and community centers.',
            timeline: 'Pilot Program: Q2 2024',
            technologies: 'Educational Platform, Video Content, Interactive Coding Exercises'
        },
        {
            title: 'Khmer Language Tech',
            details: 'Developing better font rendering, input methods, and language processing tools for Khmer. Creating APIs and libraries that other developers can use to build Khmer-friendly applications.',
            timeline: 'Ongoing Research',
            technologies: 'Unicode, Font Technologies, NLP, Machine Learning'
        },
        {
            title: 'Innovation Hub',
            details: 'A physical and virtual space for Cambodian developers to collaborate, learn, and build. Featuring co-working spaces, mentorship programs, and startup incubation services.',
            timeline: 'Long-term Vision: 2025-2027',
            technologies: 'Community Building, Mentorship Platform, Project Management Tools'
        }
    ];
    
    const goal = goals[index];
    const content = `
        <div class="goal-details">
            <p><strong>Vision:</strong> ${goal.details}</p>
            <p><strong>Timeline:</strong> ${goal.timeline}</p>
            <p><strong>Technologies:</strong> ${goal.technologies}</p>
        </div>
    `;
    
    showDetailModal(goal.title, content);
}

function toggleTimelineExpansion(item, index) {
    const isExpanded = item.classList.contains('expanded');
    
    // Close all other expanded items
    document.querySelectorAll('.timeline-item.expanded').forEach(i => {
        i.classList.remove('expanded');
    });
    
    if (!isExpanded) {
        item.classList.add('expanded');
        // Add additional content
        addTimelineDetails(item, index);
    }
}

function addTimelineDetails(item, index) {
    const existingDetails = item.querySelector('.timeline-details');
    if (existingDetails) return;
    
    const details = document.createElement('div');
    details.className = 'timeline-details';
    details.innerHTML = `
        <div class="detail-section">
            <h5>Learning Resources Used:</h5>
            <ul>
                <li>Official documentation and tutorials</li>
                <li>Online courses and video content</li>
                <li>Hands-on projects and experiments</li>
                <li>Community forums and discussions</li>
            </ul>
        </div>
        <div class="detail-section">
            <h5>Challenges Overcome:</h5>
            <ul>
                <li>Understanding complex concepts through practice</li>
                <li>Debugging and problem-solving skills</li>
                <li>Building real-world applications</li>
                <li>Staying updated with best practices</li>
            </ul>
        </div>
    `;
    
    const card = item.querySelector('.timeline-card');
    card.appendChild(details);
}

function showSkillInfo(skill) {
    window.CAMBO.showNotification(`Exploring ${skill} - Click timeline items for more details!`, 'info');
}

function animateProgressBar(progressBar) {
    const fill = progressBar.querySelector('.progress-fill');
    if (fill) {
        const currentWidth = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => {
            fill.style.width = currentWidth;
        }, 100);
    }
}

function showStatDetails(item, index) {
    const stats = [
        'Skills mastered across frontend, backend, and design',
        'Projects completed including personal and learning exercises',
        'Dedicated hours of learning, coding, and problem-solving',
        'Certifications and achievements in web development'
    ];
    
    const label = item.querySelector('.stat-label').textContent;
    window.CAMBO.showNotification(`${label}: ${stats[index]}`, 'info');
}

function activateEasterEgg() {
    // Rainbow animation for the entire page
    document.body.style.animation = 'rainbow-bg 3s ease-in-out';
    window.CAMBO.showNotification('🎉 Konami Code activated! You found the easter egg!', 'success');
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 3000);
}

function showSecretMessage() {
    window.CAMBO.showNotification('🤫 Secret: This portfolio was built with love, coffee, and lots of debugging!', 'info');
}

function showDetailModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'detail-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" onclick="this.closest('.detail-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

function showResumeModal() {
    const content = `
        <div class="resume-preview">
            <h4>CAMBO - Creative Developer</h4>
            <p>Passionate about bridging technology and culture through innovative web development.</p>
            <div class="resume-sections">
                <div class="resume-section">
                    <h5>Skills</h5>
                    <p>React.js, Python, JavaScript, CSS3, HTML5, Git, Responsive Design</p>
                </div>
                <div class="resume-section">
                    <h5>Focus Areas</h5>
                    <p>Frontend Development, Cultural Technology Solutions, User Experience Design</p>
                </div>
            </div>
            <button class="btn btn-primary" onclick="window.print()">
                <i class="fas fa-download"></i> Download Resume
            </button>
        </div>
    `;
    
    showDetailModal('Resume Preview', content);
}

function closeAllModals() {
    const modals = document.querySelectorAll('.detail-modal, .tool-modal, .timeline-modal');
    modals.forEach(modal => modal.remove());
}

function scrollToNextSection() {
    const sections = document.querySelectorAll('section[id]');
    const currentScroll = window.scrollY;
    
    for (let section of sections) {
        if (section.offsetTop > currentScroll + 100) {
            section.scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

function scrollToPreviousSection() {
    const sections = Array.from(document.querySelectorAll('section[id]')).reverse();
    const currentScroll = window.scrollY;
    
    for (let section of sections) {
        if (section.offsetTop < currentScroll - 100) {
            section.scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeInteractiveElements();
});

// Export functions
window.InteractiveElements = {
    showTechInfo,
    expandPhilosophyCard,
    showGoalDetails,
    toggleTimelineExpansion,
    showDetailModal,
    closeAllModals
};
