// ===== EDUCATION TIMELINE SYSTEM =====

// Education data
const educationData = {
    en: [
        {
            id: 1,
            title: "HTML & CSS Fundamentals",
            category: "Frontend Basics",
            period: "2023 Q1",
            status: "completed",
            progress: 100,
            description: "Mastered the building blocks of web development with semantic HTML and modern CSS techniques.",
            skills: ["HTML5", "CSS3", "Semantic Markup", "Web Accessibility"],
            badge: "fas fa-code",
            color: "#E34F26",
            achievements: [
                "Built 5 responsive landing pages",
                "Learned CSS Grid and Flexbox",
                "Implemented accessibility best practices"
            ]
        },
        {
            id: 2,
            title: "JavaScript ES6+",
            category: "Programming Language",
            period: "2023 Q2",
            status: "completed",
            progress: 100,
            description: "Developed strong foundation in modern JavaScript programming and DOM manipulation.",
            skills: ["ES6+ Syntax", "DOM Manipulation", "Event Handling", "Async/Await"],
            badge: "fab fa-js-square",
            color: "#F7DF1E",
            achievements: [
                "Created interactive web applications",
                "Mastered promises and async programming",
                "Built dynamic user interfaces"
            ]
        },
        {
            id: 3,
            title: "CSS Flexbox & Grid",
            category: "Layout Systems",
            period: "2023 Q2",
            status: "completed",
            progress: 100,
            description: "Advanced CSS layout techniques for creating responsive and flexible web designs.",
            skills: ["Flexbox", "CSS Grid", "Responsive Design", "Mobile-First"],
            badge: "fas fa-th-large",
            color: "#1572B6",
            achievements: [
                "Mastered complex layout patterns",
                "Built responsive navigation systems",
                "Created mobile-first designs"
            ]
        },
        {
            id: 4,
            title: "React.js Development",
            category: "Frontend Framework",
            period: "2023 Q3",
            status: "in-progress",
            progress: 85,
            description: "Building modern, interactive user interfaces with React's component-based architecture.",
            skills: ["Components", "JSX", "Hooks", "State Management"],
            badge: "fab fa-react",
            color: "#61DAFB",
            achievements: [
                "Built multiple React applications",
                "Mastered React Hooks",
                "Implemented state management"
            ]
        },
        {
            id: 5,
            title: "Python Programming",
            category: "Backend Language",
            period: "2023 Q4",
            status: "in-progress",
            progress: 80,
            description: "Learning versatile Python programming for backend development and automation.",
            skills: ["Python Syntax", "Data Structures", "OOP", "Web Frameworks"],
            badge: "fab fa-python",
            color: "#3776AB",
            achievements: [
                "Built CLI applications",
                "Learned Django basics",
                "Created automation scripts"
            ]
        },
        {
            id: 6,
            title: "Cybersecurity Fundamentals",
            category: "Security",
            period: "2024 Q1",
            status: "planned",
            progress: 30,
            description: "Understanding web security principles and best practices for secure development.",
            skills: ["Web Security", "HTTPS", "Authentication", "Data Protection"],
            badge: "fas fa-shield-alt",
            color: "#FF6B35",
            achievements: [
                "Learning security fundamentals",
                "Studying common vulnerabilities",
                "Implementing secure coding practices"
            ]
        },
        {
            id: 7,
            title: "Full-Stack Integration",
            category: "Advanced Development",
            period: "2024 Q2",
            status: "planned",
            progress: 0,
            description: "Combining frontend and backend technologies to build complete web applications.",
            skills: ["API Integration", "Database Design", "Authentication", "Deployment"],
            badge: "fas fa-layer-group",
            color: "#8B5CF6",
            achievements: [
                "Plan to build full-stack applications",
                "Learn database integration",
                "Master deployment strategies"
            ]
        }
    ],
    km: [
        {
            id: 1,
            title: "HTML & CSS មូលដ្ឋាន",
            category: "Frontend មូលដ្ឋាន",
            period: "២០២៣ ត្រីមាសទី១",
            status: "completed",
            progress: 100,
            description: "ស្វែងយល់ពីមូលដ្ឋានគ្រឹះនៃការអភិវឌ្ឍន៍គេហទំព័រជាមួយ HTML និង CSS ទំនើប។",
            skills: ["HTML5", "CSS3", "Semantic Markup", "Web Accessibility"],
            badge: "fas fa-code",
            color: "#E34F26",
            achievements: [
                "បង្កើតទំព័រចុះចត ៥ ដែលឆ្លើយតប",
                "រៀន CSS Grid និង Flexbox",
                "អនុវត្តការអាចចូលប្រើបានល្អបំផុត"
            ]
        },
        {
            id: 2,
            title: "JavaScript ES6+",
            category: "ភាសាកម្មវិធី",
            period: "២០២៣ ត្រីមាសទី២",
            status: "completed",
            progress: 100,
            description: "អភិវឌ្ឍមូលដ្ឋានរឹងមាំក្នុងការសរសេរកម្មវិធី JavaScript ទំនើប និងការរៀបចំ DOM។",
            skills: ["ES6+ Syntax", "DOM Manipulation", "Event Handling", "Async/Await"],
            badge: "fab fa-js-square",
            color: "#F7DF1E",
            achievements: [
                "បង្កើតកម្មវិធីគេហទំព័រអន្តរកម្ម",
                "ស្វែងយល់ promises និងការសរសេរកម្មវិធី async",
                "បង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់ថាមវន្ត"
            ]
        },
        {
            id: 3,
            title: "CSS Flexbox & Grid",
            category: "ប្រព័ន្ធប្លង់",
            period: "២០២៣ ត្រីមាសទី២",
            status: "completed",
            progress: 100,
            description: "បច្ចេកទេស CSS កម្រិតខ្ពស់សម្រាប់បង្កើតការរចនាគេហទំព័រឆ្លើយតប និងបត់បែន។",
            skills: ["Flexbox", "CSS Grid", "Responsive Design", "Mobile-First"],
            badge: "fas fa-th-large",
            color: "#1572B6",
            achievements: [
                "ស្វែងយល់ពីលំនាំប្លង់ស្មុគស្មាញ",
                "បង្កើតប្រព័ន្ធរុករកឆ្លើយតប",
                "បង្កើតការរចនា mobile-first"
            ]
        },
        {
            id: 4,
            title: "ការអភិវឌ្ឍន៍ React.js",
            category: "Frontend Framework",
            period: "២០២៣ ត្រីមាសទី៣",
            status: "in-progress",
            progress: 85,
            description: "បង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់ទំនើប និងអន្តរកម្មជាមួយស្ថាបត្យកម្មផ្អែកលើសមាសធាតុរបស់ React។",
            skills: ["Components", "JSX", "Hooks", "State Management"],
            badge: "fab fa-react",
            color: "#61DAFB",
            achievements: [
                "បង្កើតកម្មវិធី React ច្រើន",
                "ស្វែងយល់ React Hooks",
                "អនុវត្តការគ្រប់គ្រង state"
            ]
        },
        {
            id: 5,
            title: "ការសរសេរកម្មវិធី Python",
            category: "ភាសា Backend",
            period: "២០២៣ ត្រីមាសទី៤",
            status: "in-progress",
            progress: 80,
            description: "រៀនការសរសេរកម្មវិធី Python ដែលអាចប្រើបានច្រើនសម្រាប់ការអភិវឌ្ឍន៍ backend និងស្វ័យប្រវត្តិកម្ម។",
            skills: ["Python Syntax", "Data Structures", "OOP", "Web Frameworks"],
            badge: "fab fa-python",
            color: "#3776AB",
            achievements: [
                "បង្កើតកម្មវិធី CLI",
                "រៀនមូលដ្ឋាន Django",
                "បង្កើត script ស្វ័យប្រវត្តិកម្ម"
            ]
        },
        {
            id: 6,
            title: "មូលដ្ឋានសុវត្ថិភាពអ៊ីនធឺណិត",
            category: "សុវត្ថិភាព",
            period: "២០២៤ ត្រីមាសទី១",
            status: "planned",
            progress: 30,
            description: "យល់ដឹងពីគោលការណ៍សុវត្ថិភាពគេហទំព័រ និងការអនុវត្តល្អបំផុតសម្រាប់ការអភិវឌ្ឍន៍សុវត្ថិភាព។",
            skills: ["Web Security", "HTTPS", "Authentication", "Data Protection"],
            badge: "fas fa-shield-alt",
            color: "#FF6B35",
            achievements: [
                "កំពុងរៀនមូលដ្ឋានសុវត្ថិភាព",
                "សិក្សាភាពងាយរងគ្រោះទូទៅ",
                "អនុវត្តការសរសេរកូដសុវត្ថិភាព"
            ]
        },
        {
            id: 7,
            title: "ការរួមបញ្ចូល Full-Stack",
            category: "ការអភិវឌ្ឍន៍កម្រិតខ្ពស់",
            period: "២០២៤ ត្រីមាសទី២",
            status: "planned",
            progress: 0,
            description: "រួមបញ្ចូលបច្ចេកវិទ្យា frontend និង backend ដើម្បីបង្កើតកម្មវិធីគេហទំព័រពេញលេញ។",
            skills: ["API Integration", "Database Design", "Authentication", "Deployment"],
            badge: "fas fa-layer-group",
            color: "#8B5CF6",
            achievements: [
                "គម្រោងបង្កើតកម្មវិធី full-stack",
                "រៀនការរួមបញ្ចូលមូលដ្ឋានទិន្នន័យ",
                "ស្វែងយល់យុទ្ធសាស្ត្រ deployment"
            ]
        }
    ]
};

// Initialize education timeline
function initializeEducationTimeline() {
    loadTimelineItems();
    animateStats();
    
    console.log('Education timeline initialized');
}

// Load timeline items
function loadTimelineItems() {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const timeline = document.getElementById('education-timeline');
    
    if (!timeline) return;
    
    const items = educationData[currentLang];
    timeline.innerHTML = '';
    
    items.forEach((item, index) => {
        const timelineItem = createTimelineItem(item, index);
        timeline.appendChild(timelineItem);
    });
    
    // Animate timeline items on scroll
    observeTimelineItems();
}

// Create timeline item
function createTimelineItem(item, index) {
    const itemDiv = document.createElement('div');
    itemDiv.className = `timeline-item ${item.status} animate-on-scroll`;
    itemDiv.style.setProperty('--item-color', item.color);
    
    const isLeft = index % 2 === 0;
    itemDiv.classList.add(isLeft ? 'timeline-left' : 'timeline-right');
    
    itemDiv.innerHTML = `
        <div class="timeline-marker">
            <div class="timeline-badge">
                <i class="${item.badge}"></i>
            </div>
            <div class="timeline-line"></div>
        </div>
        <div class="timeline-content">
            <div class="timeline-card">
                <div class="timeline-header">
                    <div class="timeline-period">${item.period}</div>
                    <div class="timeline-status status-${item.status}">
                        ${getStatusText(item.status)}
                    </div>
                </div>
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-category">${item.category}</div>
                <p class="timeline-description">${item.description}</p>
                <div class="timeline-skills">
                    ${item.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                <div class="timeline-progress">
                    <div class="progress-label">Progress: ${item.progress}%</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${item.progress}%" data-progress="${item.progress}"></div>
                    </div>
                </div>
                <div class="timeline-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                        ${item.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
                <button class="timeline-expand" onclick="expandTimelineItem(${item.id})">
                    <i class="fas fa-chevron-down"></i>
                    <span>View Details</span>
                </button>
            </div>
        </div>
    `;
    
    return itemDiv;
}

// Get status text
function getStatusText(status) {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    
    const statusTexts = {
        en: {
            completed: 'Completed',
            'in-progress': 'In Progress',
            planned: 'Planned'
        },
        km: {
            completed: 'បានបញ្ចប់',
            'in-progress': 'កំពុងដំណើរការ',
            planned: 'បានគ្រោង'
        }
    };
    
    return statusTexts[currentLang][status] || status;
}

// Observe timeline items for animation
function observeTimelineItems() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // Animate progress bar
                const progressBar = entry.target.querySelector('.progress-fill');
                if (progressBar) {
                    const progress = progressBar.getAttribute('data-progress');
                    setTimeout(() => {
                        progressBar.style.width = progress + '%';
                    }, 500);
                }
            }
        });
    }, observerOptions);
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));
}

// Animate statistics
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Animate number counting
function animateNumber(element) {
    const target = parseInt(element.getAttribute('data-number'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        const displayValue = element.textContent.includes('+') ? 
            Math.floor(current) + '+' : 
            Math.floor(current);
        
        element.textContent = displayValue;
    }, 16);
}

// Expand timeline item
function expandTimelineItem(itemId) {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const item = educationData[currentLang].find(i => i.id === itemId);
    
    if (!item) return;
    
    // Create expanded modal or detailed view
    const modal = document.createElement('div');
    modal.className = 'timeline-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeTimelineModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <div class="timeline-badge-large">
                    <i class="${item.badge}" style="color: ${item.color}"></i>
                </div>
                <div class="timeline-info">
                    <h2>${item.title}</h2>
                    <div class="timeline-meta">
                        <span class="category">${item.category}</span>
                        <span class="period">${item.period}</span>
                        <span class="status status-${item.status}">${getStatusText(item.status)}</span>
                    </div>
                </div>
                <button class="modal-close" onclick="closeTimelineModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="description-full">${item.description}</p>
                <div class="skills-section">
                    <h4>Skills & Technologies:</h4>
                    <div class="skills-grid">
                        ${item.skills.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
                    </div>
                </div>
                <div class="achievements-section">
                    <h4>Key Achievements:</h4>
                    <div class="achievements-list">
                        ${item.achievements.map(achievement => `
                            <div class="achievement-item">
                                <i class="fas fa-trophy"></i>
                                <span>${achievement}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="progress-section">
                    <h4>Learning Progress:</h4>
                    <div class="progress-bar-large">
                        <div class="progress-fill" style="width: ${item.progress}%; background: ${item.color}"></div>
                    </div>
                    <div class="progress-text">${item.progress}% Complete</div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

// Close timeline modal
function closeTimelineModal() {
    const modal = document.querySelector('.timeline-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Export functions
window.EducationTimeline = {
    expandTimelineItem,
    closeTimelineModal
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEducationTimeline();
});

// Listen for language changes
document.addEventListener('languageChanged', function() {
    loadTimelineItems();
});
