// ===== ABOUT SECTION FUNCTIONALITY =====

// Journey step data
const journeySteps = {
    en: [
        {
            title: "The Spark of Curiosity",
            content: "It all started with a simple question: 'How do websites work?' This curiosity led me to write my first HTML page and discover the magic of creating something from nothing but code.",
            achievements: ["First HTML page", "Basic CSS styling", "JavaScript 'Hello World'"],
            technologies: ["HTML", "CSS", "Basic JavaScript"]
        },
        {
            title: "Building the Foundation",
            content: "Diving deep into the fundamentals of web development. Learning semantic HTML, modern CSS techniques, and JavaScript ES6+ features. Every bug was a lesson, every project a stepping stone.",
            achievements: ["Responsive layouts", "CSS Grid & Flexbox", "DOM manipulation", "Event handling"],
            technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Git"]
        },
        {
            title: "Component-Based Thinking",
            content: "Discovering React opened up a new world of possibilities. Learning to think in components, managing state, and building interactive user interfaces that users actually enjoy using.",
            achievements: ["React components", "State management", "Hooks mastery", "Interactive UIs"],
            technologies: ["React.js", "JSX", "React Hooks", "Component Architecture"]
        },
        {
            title: "Cultural Integration",
            content: "Realizing that technology should serve communities, not just businesses. Started focusing on creating solutions that honor Khmer culture while embracing global innovation.",
            achievements: ["Bilingual applications", "Cultural design patterns", "Community-focused projects"],
            technologies: ["Internationalization", "Cultural UX", "Accessibility", "Community Research"]
        },
        {
            title: "Full-Stack Vision",
            content: "The journey continues! Planning to expand into backend development, database design, and creating complete solutions that bridge technology and culture for the Cambodian community.",
            achievements: ["Portfolio website", "Interactive demos", "Cultural tech advocacy"],
            technologies: ["Python", "Node.js", "Databases", "Full-Stack Architecture"]
        }
    ],
    km: [
        {
            title: "ការបញ្ឆេះនៃការចង់ដឹងចង់ឃើញ",
            content: "វាចាប់ផ្តើមដោយសំណួរសាមញ្ញមួយ៖ 'តើគេហទំព័រដំណើរការយ៉ាងដូចម្តេច?' ការចង់ដឹងចង់ឃើញនេះនាំខ្ញុំឱ្យសរសេរទំព័រ HTML ដំបូងរបស់ខ្ញុំ និងរកឃើញភាពអស្ចារ្យនៃការបង្កើតអ្វីមួយពីគ្មានអ្វីក្រៅពីកូដ។",
            achievements: ["ទំព័រ HTML ដំបូង", "ការធ្វើស្ទីល CSS មូលដ្ឋាន", "JavaScript 'Hello World'"],
            technologies: ["HTML", "CSS", "JavaScript មូលដ្ឋាន"]
        },
        {
            title: "ការបង្កើតមូលដ្ឋាន",
            content: "ការសិក្សាយ៉ាងស៊ីជម្រៅអំពីមូលដ្ឋានគ្រឹះនៃការអភិវឌ្ឍន៍គេហទំព័រ។ ការរៀន HTML semantic បច្ចេកទេស CSS ទំនើប និងលក្ខណៈពិសេស JavaScript ES6+។ កំហុសគ្រប់យ៉ាងគឺជាមេរៀន គម្រោងគ្រប់យ៉ាងគឺជាជំហានឈានទៅមុខ។",
            achievements: ["ប្លង់ឆ្លើយតប", "CSS Grid & Flexbox", "ការរៀបចំ DOM", "ការគ្រប់គ្រងព្រឹត្តិការណ៍"],
            technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Git"]
        },
        {
            title: "ការគិតផ្អែកលើសមាសធាតុ",
            content: "ការរកឃើញ React បានបើកពិភពលោកថ្មីនៃលទ្ធភាព។ ការរៀនគិតជាសមាសធាតុ ការគ្រប់គ្រង state និងការបង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់អន្តរកម្មដែលអ្នកប្រើប្រាស់ពិតជាចូលចិត្តប្រើ។",
            achievements: ["សមាសធាតុ React", "ការគ្រប់គ្រង State", "ការស្វែងយល់ Hooks", "UI អន្តរកម្ម"],
            technologies: ["React.js", "JSX", "React Hooks", "ស្ថាបត្យកម្មសមាសធាតុ"]
        },
        {
            title: "ការរួមបញ្ចូលវប្បធម៌",
            content: "ការដឹងថាបច្ចេកវិទ្យាគួរតែបម្រើសហគមន៍ មិនមែនគ្រាន់តែអាជីវកម្មទេ។ ចាប់ផ្តើមផ្តោតលើការបង្កើតដំណោះស្រាយដែលគោរពវប្បធម៌ខ្មែរ ខណៈពេលដែលទទួលយកនវានុវត្តន៍សកល។",
            achievements: ["កម្មវិធីពីរភាសា", "លំនាំការរចនាវប្បធម៌", "គម្រោងផ្តោតលើសហគមន៍"],
            technologies: ["អន្តរជាតិកម្ម", "UX វប្បធម៌", "ការចូលប្រើ", "ការស្រាវជ្រាវសហគមន៍"]
        },
        {
            title: "ចក្ខុវិស័យ Full-Stack",
            content: "ដំណើរនៅបន្ត! គ្រោងពង្រីកទៅការអភិវឌ្ឍន៍ backend ការរចនាមូលដ្ឋានទិន្នន័យ និងការបង្កើតដំណោះស្រាយពេញលេញដែលភ្ជាប់បច្ចេកវិទ្យា និងវប្បធម៌សម្រាប់សហគមន៍កម្ពុជា។",
            achievements: ["គេហទំព័រ Portfolio", "ការបង្ហាញអន្តរកម្ម", "ការតស៊ូមតិបច្ចេកវិទ្យាវប្បធម៌"],
            technologies: ["Python", "Node.js", "មូលដ្ឋានទិន្នន័យ", "ស្ថាបត្យកម្ម Full-Stack"]
        }
    ]
};

// Highlight details data
const highlightDetails = {
    en: [
        {
            title: "Frontend Specialist",
            description: "Passionate about creating beautiful, responsive, and accessible user interfaces. Specializing in React.js, modern CSS, and JavaScript ES6+.",
            skills: ["React.js", "CSS3 & Sass", "JavaScript ES6+", "Responsive Design", "Accessibility", "Performance Optimization"],
            experience: "2+ years of hands-on experience building interactive web applications"
        },
        {
            title: "Cultural Tech Advocate",
            description: "Dedicated to bridging the gap between modern technology and traditional Khmer culture. Creating solutions that preserve heritage while embracing innovation.",
            skills: ["Internationalization", "Cultural UX Design", "Khmer Typography", "Community Research", "Cultural Sensitivity", "Heritage Preservation"],
            experience: "Focused on creating technology that serves and honors Cambodian communities"
        },
        {
            title: "Community Builder",
            description: "Believing in the power of technology to connect people and strengthen communities. Building platforms and tools that bring people together.",
            skills: ["Community Engagement", "User Research", "Collaborative Development", "Mentoring", "Knowledge Sharing", "Social Impact"],
            experience: "Committed to using technology as a force for positive social change"
        }
    ],
    km: [
        {
            title: "អ្នកជំនាញ Frontend",
            description: "មានចំណង់ចំណូលចិត្តក្នុងការបង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់ដ៏ស្រស់ស្អាត ឆ្លើយតប និងអាចចូលប្រើបាន។ ជំនាញពិសេសលើ React.js, CSS ទំនើប និង JavaScript ES6+។",
            skills: ["React.js", "CSS3 & Sass", "JavaScript ES6+", "ការរចនាឆ្លើយតប", "ការចូលប្រើ", "ការបង្កើនប្រសិទ្ធភាព"],
            experience: "បទពិសោធន៍ 2+ ឆ្នាំក្នុងការបង្កើតកម្មវិធីគេហទំព័រអន្តរកម្ម"
        },
        {
            title: "អ្នកតស៊ូមតិបច្ចេកវិទ្យាវប្បធម៌",
            description: "ប្តេជ្ញាចិត្តក្នុងការភ្ជាប់គម្លាតរវាងបច្ចេកវិទ្យាទំនើប និងវប្បធម៌ខ្មែរប្រពៃណី។ បង្កើតដំណោះស្រាយដែលរក្សាបេតិកភណ្ឌ ខណៈពេលដែលទទួលយកនវានុវត្តន៍។",
            skills: ["អន្តរជាតិកម្ម", "ការរចនា UX វប្បធម៌", "អក្សរសិល្ប៍ខ្មែរ", "ការស្រាវជ្រាវសហគមន៍", "ភាពប្រុងប្រយ័ត្នវប្បធម៌", "ការរក្សាបេតិកភណ្ឌ"],
            experience: "ផ្តោតលើការបង្កើតបច្ចេកវិទ្យាដែលបម្រើ និងគោរពសហគមន៍កម្ពុជា"
        },
        {
            title: "អ្នកបង្កើតសហគមន៍",
            description: "ជឿជាក់លើអំណាចនៃបច្ចេកវិទ្យាក្នុងការភ្ជាប់មនុស្ស និងពង្រឹងសហគមន៍។ បង្កើតវេទិកា និងឧបករណ៍ដែលនាំមនុស្សមកជួបគ្នា។",
            skills: ["ការចូលរួមសហគមន៍", "ការស្រាវជ្រាវអ្នកប្រើប្រាស់", "ការអភិវឌ្ឍន៍សហការ", "ការណែនាំ", "ការចែករំលែកចំណេះដឹង", "ផលប៉ះពាល់សង្គម"],
            experience: "ប្តេជ្ញាចិត្តប្រើបច្ចេកវិទ្យាជាកម្លាំងសម្រាប់ការផ្លាស់ប្តូរសង្គមវិជ្ជមាន"
        }
    ]
};

// Initialize about section
function initializeAboutSection() {
    initializeStatCards();
    initializeJourneyMap();
    initializeHighlights();
    initializeScrollAnimations();
    
    console.log('About section initialized');
}

// Initialize stat cards
function initializeStatCards() {
    const statCards = document.querySelectorAll('.stat-card');
    
    // Animate numbers when cards come into view
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const targetNumber = parseInt(statNumber.getAttribute('data-number'));
                animateNumber(statNumber, targetNumber);
            }
        });
    }, { threshold: 0.5 });
    
    statCards.forEach(card => observer.observe(card));
}

// Animate stat card on click
function animateStatCard(card) {
    // Add click animation
    card.style.transform = 'scale(1.05)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 200);
    
    // Show stat details
    const statLabel = card.querySelector('.stat-label').textContent;
    const statNumber = card.querySelector('.stat-number').textContent;
    
    const statDetails = {
        'Years Learning': 'Started my coding journey in 2022 with HTML and CSS',
        'Projects Built': 'From simple landing pages to interactive web applications',
        'Technologies': 'Frontend focused: React, JavaScript, CSS, and more',
        'Cups of Coffee': 'Fuel for late-night coding sessions and debugging marathons',
        'ឆ្នាំនៃការរៀន': 'ចាប់ផ្តើមដំណើរសរសេរកូដរបស់ខ្ញុំក្នុងឆ្នាំ ២០២២ ជាមួយ HTML និង CSS',
        'គម្រោងដែលបានបង្កើត': 'ពីទំព័រចុះចតសាមញ្ញទៅកម្មវិធីគេហទំព័រអន្តរកម្ម',
        'បច្ចេកវិទ្យា': 'ផ្តោតលើ Frontend: React, JavaScript, CSS និងច្រើនទៀត',
        'ពែងកាហ្វេ': 'ឥន្ធនៈសម្រាប់ការសរសេរកូដពេលយប់ និងការកែកំហុស'
    };
    
    const detail = statDetails[statLabel] || `${statNumber} - ${statLabel}`;
    window.CAMBO.showNotification(detail, 'info');
}

// Animate number counting
function animateNumber(element, target) {
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

// Initialize journey map
function initializeJourneyMap() {
    // Set up initial state
    showJourneyStep(0);
}

// Show journey step details
function showJourneyStep(stepIndex) {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const steps = journeySteps[currentLang];
    const step = steps[stepIndex];
    
    if (!step) return;
    
    // Update active step
    const journeySteps = document.querySelectorAll('.journey-step');
    journeySteps.forEach((stepEl, index) => {
        stepEl.classList.toggle('active', index === stepIndex);
    });
    
    // Update details
    const detailsContainer = document.getElementById('journey-details');
    if (detailsContainer) {
        detailsContainer.innerHTML = `
            <div class="journey-detail active" data-detail="${stepIndex}">
                <h4>${step.title}</h4>
                <p>${step.content}</p>
                <div class="journey-achievements">
                    <h5>${currentLang === 'en' ? 'Key Achievements:' : 'សមិទ្ធផលសំខាន់ៗ:'}</h5>
                    <ul>
                        ${step.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
                <div class="journey-technologies">
                    <h5>${currentLang === 'en' ? 'Technologies:' : 'បច្ចេកវិទ្យា:'}</h5>
                    <div class="tech-tags">
                        ${step.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    // Add animation
    detailsContainer.style.opacity = '0';
    setTimeout(() => {
        detailsContainer.style.opacity = '1';
    }, 100);
}

// Show highlight details
function showHighlightDetails(highlightIndex) {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const highlights = highlightDetails[currentLang];
    const highlight = highlights[highlightIndex];
    
    if (!highlight) return;
    
    // Create modal content
    const modalContent = `
        <div class="highlight-modal-content">
            <h3>${highlight.title}</h3>
            <p class="highlight-description">${highlight.description}</p>
            <div class="highlight-skills">
                <h4>${currentLang === 'en' ? 'Core Skills:' : 'ជំនាញសំខាន់ៗ:'}</h4>
                <div class="skills-grid">
                    ${highlight.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="highlight-experience">
                <h4>${currentLang === 'en' ? 'Experience:' : 'បទពិសោធន៍:'}</h4>
                <p>${highlight.experience}</p>
            </div>
        </div>
    `;
    
    // Show modal using existing modal system
    window.InteractiveElements.showDetailModal(highlight.title, modalContent);
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Add highlight effect
        section.classList.add('pulse-highlight');
        setTimeout(() => {
            section.classList.remove('pulse-highlight');
        }, 2000);
    } else {
        // If section doesn't exist, show notification
        const sectionNames = {
            'contact': 'Contact section coming soon!',
            'projects': 'Projects section'
        };
        
        window.CAMBO.showNotification(
            sectionNames[sectionId] || `${sectionId} section`, 
            'info'
        );
    }
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.about-intro, .about-stats, .journey-section, .about-cta');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger highlight items
                if (entry.target.classList.contains('about-intro')) {
                    const highlights = entry.target.querySelectorAll('.highlight-item');
                    highlights.forEach((highlight, index) => {
                        setTimeout(() => {
                            highlight.style.opacity = '1';
                            highlight.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
        
        // Prepare highlight items for stagger animation
        if (element.classList.contains('about-intro')) {
            const highlights = element.querySelectorAll('.highlight-item');
            highlights.forEach(highlight => {
                highlight.style.opacity = '0';
                highlight.style.transform = 'translateY(20px)';
                highlight.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
        }
    });
}

// Initialize highlights
function initializeHighlights() {
    const highlightItems = document.querySelectorAll('.highlight-item');
    
    highlightItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Export functions for global access
window.AboutSection = {
    showJourneyStep,
    showHighlightDetails,
    animateStatCard,
    scrollToSection
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAboutSection();
});

// ===== NEW INTERACTIVE FEATURES =====

// Interest details data
const interestDetails = {
    en: [
        {
            title: "Photography",
            description: "Capturing the beauty of Cambodia through my lens. From ancient temples to modern cityscapes, I love documenting the blend of tradition and progress.",
            details: ["Street photography in Phnom Penh", "Temple architecture documentation", "Cultural event photography", "Nature and landscape shots"],
            equipment: ["Smartphone camera", "Basic editing apps", "Eye for composition"]
        },
        {
            title: "Learning Languages",
            description: "Passionate about communication in all its forms. Whether it's human languages or programming languages, I believe they all connect us.",
            details: ["Native Khmer speaker", "Fluent in English", "Learning JavaScript 'dialects'", "Interested in Thai and Vietnamese"],
            benefits: ["Better cultural understanding", "Enhanced problem-solving", "Improved communication skills"]
        },
        {
            title: "Community Events",
            description: "Active participant in both tech meetups and cultural festivals. I believe in the power of community to drive innovation and preserve heritage.",
            details: ["Tech meetups and workshops", "Cultural festivals and celebrations", "Community volunteer work", "Knowledge sharing sessions"],
            impact: ["Building local tech community", "Preserving cultural traditions", "Mentoring newcomers"]
        },
        {
            title: "Gaming",
            description: "Strategy games and puzzles help me think differently about problem-solving. The logical thinking required translates well to coding challenges.",
            details: ["Strategy and puzzle games", "Logic-based challenges", "Team-based problem solving", "Game design appreciation"],
            skills: ["Strategic thinking", "Pattern recognition", "Team coordination", "Persistence"]
        }
    ],
    km: [
        {
            title: "ការថតរូប",
            description: "ចាប់យកភាពស្រស់ស្អាតកម្ពុជាតាមរយៈកែវភ្នែករបស់ខ្ញុំ។ ពីប្រាសាទបុរាណទៅទីក្រុងទំនើប ខ្ញុំចូលចិត្តកត់ត្រាការលាយបញ្ចូលគ្នានៃប្រពៃណី និងការរីកចម្រើន។",
            details: ["ការថតរូបតាមផ្លូវនៅភ្នំពេញ", "ការកត់ត្រាស្ថាបត្យកម្មប្រាសាទ", "ការថតរូបព្រឹត្តិការណ៍វប្បធម៌", "ការថតរូបធម្មជាតិ និងទេសភាព"],
            equipment: ["កាមេរ៉ាទូរស័ព្ទ", "កម្មវិធីកែសម្រួលមូលដ្ឋាន", "ភ្នែកសម្រាប់ការរៀបចំ"]
        },
        {
            title: "ការរៀនភាសា",
            description: "មានចំណង់ចំណូលចិត្តចំពោះការទំនាក់ទំនងគ្រប់ទម្រង់។ មិនថាវាជាភាសាមនុស្ស ឬភាសាសរសេរកម្មវិធី ខ្ញុំជឿថាវាភ្ជាប់យើងទាំងអស់គ្នា។",
            details: ["អ្នកនិយាយភាសាខ្មែរដើម", "ចេះភាសាអង់គ្លេសយ៉ាងស្ទាត់", "កំពុងរៀន 'ភាសាបែប' JavaScript", "ចាប់អារម្មណ៍ភាសាថៃ និងវៀតណាម"],
            benefits: ["ការយល់ដឹងវប្បធម៌កាន់តែប្រសើរ", "ការដោះស្រាយបញ្ហាកាន់តែប្រសើរ", "ជំនាញទំនាក់ទំនងកាន់តែប្រសើរ"]
        },
        {
            title: "ព្រឹត្តិការណ៍សហគមន៍",
            description: "អ្នកចូលរួមសកម្មទាំងការជួបជុំបច្ចេកវិទ្យា និងពិធីបុណ្យវប្បធម៌។ ខ្ញុំជឿលើអំណាចសហគមន៍ក្នុងការជំរុញនវានុវត្តន៍ និងរក្សាបេតិកភណ្ឌ។",
            details: ["ការជួបជុំ និងសិក្ខាសាលាបច្ចេកវិទ្យា", "ពិធីបុណ្យ និងការប្រារព្ធវប្បធម៌", "ការងារស្ម័គ្រចិត្តសហគមន៍", "វគ្គចែករំលែកចំណេះដឹង"],
            impact: ["បង្កើតសហគមន៍បច្ចេកវិទ្យាមូលដ្ឋាន", "រក្សាប្រពៃណីវប្បធម៌", "ណែនាំអ្នកចូលថ្មី"]
        },
        {
            title: "ការលេងហ្គេម",
            description: "ហ្គេមយុទ្ធសាស្ត្រ និងបញ្ហាស្មុគស្មាញជួយខ្ញុំគិតខុសពីការដោះស្រាយបញ្ហា។ ការគិតឡូជិកដែលត្រូវការបកប្រែបានល្អទៅនឹងបញ្ហាប្រឈមសរសេរកូដ។",
            details: ["ហ្គេមយុទ្ធសាស្ត្រ និងបញ្ហាស្មុគស្មាញ", "បញ្ហាប្រឈមផ្អែកលើឡូជិក", "ការដោះស្រាយបញ្ហាជាក្រុម", "ការកោតសរសើរការរចនាហ្គេម"],
            skills: ["ការគិតយុទ្ធសាស្ត្រ", "ការស្គាល់លំនាំ", "ការសម្របសម្រួលក្រុម", "ការតស៊ូ"]
        }
    ]
};

// Skills radar data
const radarSkills = [
    { name: 'Frontend', value: 85, angle: 0 },
    { name: 'Design', value: 70, angle: 60 },
    { name: 'Problem Solving', value: 90, angle: 120 },
    { name: 'Communication', value: 80, angle: 180 },
    { name: 'Learning', value: 95, angle: 240 },
    { name: 'Creativity', value: 75, angle: 300 }
];

// Fun facts data
let currentFactIndex = 0;
const totalFacts = 5;

// Inspirational quotes data
const quotes = {
    en: [
        {
            text: "The best way to predict the future is to create it.",
            author: "Peter Drucker"
        },
        {
            text: "Code is poetry written in logic.",
            author: "Unknown"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Technology is best when it brings people together.",
            author: "Matt Mullenweg"
        },
        {
            text: "Innovation distinguishes between a leader and a follower.",
            author: "Steve Jobs"
        },
        {
            text: "The future belongs to those who learn more skills and combine them in creative ways.",
            author: "Robert Greene"
        },
        {
            text: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
            author: "Patrick McKenzie"
        }
    ],
    km: [
        {
            text: "វិធីល្អបំផុតដើម្បីទស្សន៍ទាយអនាគតគឺការបង្កើតវា។",
            author: "Peter Drucker"
        },
        {
            text: "កូដគឺជាកំណាព្យដែលសរសេរជាឡូជិក។",
            author: "មិនស្គាល់"
        },
        {
            text: "វិធីតែមួយគត់ដើម្បីធ្វើការងារអស្ចារ្យគឺស្រលាញ់អ្វីដែលអ្នកធ្វើ។",
            author: "Steve Jobs"
        },
        {
            text: "បច្ចេកវិទ្យាល្អបំផុតនៅពេលដែលវានាំមនុស្សមកជួបគ្នា។",
            author: "Matt Mullenweg"
        },
        {
            text: "នវានុវត្តន៍បែងចែករវាងអ្នកដឹកនាំ និងអ្នកតាម។",
            author: "Steve Jobs"
        },
        {
            text: "អនាគតជាកម្មសិទ្ធិរបស់អ្នកដែលរៀនជំនាញច្រើន និងបញ្ចូលពួកវាតាមវិធីច្នៃប្រឌិត។",
            author: "Robert Greene"
        },
        {
            text: "អ្នកអភិវឌ្ឍន៍អស្ចារ្យគ្រប់រូបដែលអ្នកស្គាល់បានទៅដល់ទីនោះដោយដោះស្រាយបញ្ហាដែលពួកគេមិនមានលក្ខណៈសម្បត្តិដើម្បីដោះស្រាយរហូតដល់ពួកគេពិតជាធ្វើវា។",
            author: "Patrick McKenzie"
        }
    ]
};

let currentQuoteIndex = 0;

// Show interest details
function showInterestDetails(interestIndex) {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const interests = interestDetails[currentLang];
    const interest = interests[interestIndex];

    if (!interest) return;

    const modalContent = `
        <div class="interest-modal-content">
            <h3>${interest.title}</h3>
            <p class="interest-description">${interest.description}</p>
            <div class="interest-details">
                <h4>${currentLang === 'en' ? 'What I Do:' : 'អ្វីដែលខ្ញុំធ្វើ:'}</h4>
                <ul>
                    ${interest.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
            ${interest.equipment ? `
                <div class="interest-equipment">
                    <h4>${currentLang === 'en' ? 'Tools & Equipment:' : 'ឧបករណ៍:'}</h4>
                    <div class="equipment-tags">
                        ${interest.equipment.map(item => `<span class="equipment-tag">${item}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            ${interest.benefits ? `
                <div class="interest-benefits">
                    <h4>${currentLang === 'en' ? 'Benefits:' : 'អត្ថប្រយោជន៍:'}</h4>
                    <ul>
                        ${interest.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            ${interest.impact ? `
                <div class="interest-impact">
                    <h4>${currentLang === 'en' ? 'Community Impact:' : 'ផលប៉ះពាល់សហគមន៍:'}</h4>
                    <ul>
                        ${interest.impact.map(impact => `<li>${impact}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            ${interest.skills ? `
                <div class="interest-skills">
                    <h4>${currentLang === 'en' ? 'Skills Developed:' : 'ជំនាញដែលបានអភិវឌ្ឍ:'}</h4>
                    <div class="skills-tags">
                        ${interest.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    window.InteractiveElements.showDetailModal(interest.title, modalContent);
}

// Initialize radar chart
function initializeRadarChart() {
    const radarData = document.getElementById('radar-data');
    if (!radarData) return;

    // Create radar polygon
    const polygon = document.createElement('div');
    polygon.className = 'radar-polygon';
    radarData.appendChild(polygon);

    // Create data points
    radarSkills.forEach((skill, index) => {
        const point = document.createElement('div');
        point.className = 'radar-point';
        point.style.setProperty('--angle', skill.angle + 'deg');
        point.style.setProperty('--distance', '0%');
        point.setAttribute('data-skill', skill.name);
        point.setAttribute('data-value', skill.value);
        point.title = `${skill.name}: ${skill.value}%`;
        radarData.appendChild(point);
    });
}

// Animate radar chart
function animateRadar() {
    const points = document.querySelectorAll('.radar-point');
    const polygon = document.querySelector('.radar-polygon');

    // Animate points
    points.forEach((point, index) => {
        const value = parseInt(point.getAttribute('data-value'));
        const distance = value + '%';

        setTimeout(() => {
            point.style.setProperty('--distance', distance);
            point.classList.add('animated');
        }, index * 200);
    });

    // Animate polygon
    setTimeout(() => {
        updateRadarPolygon();
    }, points.length * 200 + 500);
}

// Reset radar chart
function resetRadar() {
    const points = document.querySelectorAll('.radar-point');
    const polygon = document.querySelector('.radar-polygon');

    points.forEach(point => {
        point.style.setProperty('--distance', '0%');
        point.classList.remove('animated');
    });

    if (polygon) {
        polygon.style.clipPath = '';
    }
}

// Update radar polygon
function updateRadarPolygon() {
    const polygon = document.querySelector('.radar-polygon');
    if (!polygon) return;

    const points = [];
    radarSkills.forEach(skill => {
        const angle = (skill.angle - 90) * (Math.PI / 180); // Convert to radians, adjust for top start
        const distance = skill.value / 100 * 50; // 50% is the radius
        const x = 50 + distance * Math.cos(angle);
        const y = 50 + distance * Math.sin(angle);
        points.push(`${x}% ${y}%`);
    });

    polygon.style.clipPath = `polygon(${points.join(', ')})`;
}

// Fun facts carousel functions
function showFact(factIndex) {
    const factCards = document.querySelectorAll('.fact-card');
    const indicators = document.querySelectorAll('.indicator');

    // Remove active class from all
    factCards.forEach(card => card.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to current
    factCards[factIndex].classList.add('active');
    indicators[factIndex].classList.add('active');

    currentFactIndex = factIndex;
}

function nextFact() {
    const nextIndex = (currentFactIndex + 1) % totalFacts;
    showFact(nextIndex);
}

function previousFact() {
    const prevIndex = (currentFactIndex - 1 + totalFacts) % totalFacts;
    showFact(prevIndex);
}

// Auto-advance facts
function startFactsAutoplay() {
    setInterval(() => {
        nextFact();
    }, 5000); // Change every 5 seconds
}

// Quote generator functions
function generateNewQuote() {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const quotesList = quotes[currentLang];

    // Get next quote
    currentQuoteIndex = (currentQuoteIndex + 1) % quotesList.length;
    const newQuote = quotesList[currentQuoteIndex];

    // Update quote with animation
    const quoteElement = document.getElementById('current-quote');
    const authorElement = document.getElementById('quote-author');

    if (quoteElement && authorElement) {
        // Fade out
        quoteElement.style.opacity = '0';

        setTimeout(() => {
            // Update content
            const quoteText = quoteElement.querySelector('p');
            if (quoteText) {
                quoteText.textContent = `"${newQuote.text}"`;
            }
            authorElement.textContent = `- ${newQuote.author}`;

            // Fade in
            quoteElement.style.opacity = '1';
        }, 300);
    }
}

function shareQuote() {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const currentQuote = quotes[currentLang][currentQuoteIndex];

    const shareText = `"${currentQuote.text}" - ${currentQuote.author}`;

    if (navigator.share) {
        navigator.share({
            title: 'Inspirational Quote',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            window.CAMBO.showNotification('Quote copied to clipboard!', 'success');
        }).catch(() => {
            window.CAMBO.showNotification('Could not copy quote', 'error');
        });
    }
}

// Initialize new features
function initializeNewFeatures() {
    initializeRadarChart();
    startFactsAutoplay();

    // Add click handlers for interest cards
    const interestCards = document.querySelectorAll('.interest-card');
    interestCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Initialize quote transition
    const quoteElement = document.getElementById('current-quote');
    if (quoteElement) {
        quoteElement.style.transition = 'opacity 0.3s ease';
    }
}

// Update global functions
window.AboutSection = {
    ...window.AboutSection,
    showInterestDetails,
    animateRadar,
    resetRadar,
    showFact,
    nextFact,
    previousFact,
    generateNewQuote,
    shareQuote
};

// Listen for language changes
document.addEventListener('languageChanged', function() {
    // Refresh journey step details with new language
    const activeStep = document.querySelector('.journey-step.active');
    if (activeStep) {
        const stepIndex = parseInt(activeStep.getAttribute('data-step'));
        showJourneyStep(stepIndex);
    }

    // Update current quote
    generateNewQuote();
});

// Initialize new features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeNewFeatures();
    }, 1000);
});
