// ===== CAROUSEL SYSTEM =====

// Toolbox data
const toolboxData = {
    en: [
        {
            name: "Visual Studio Code",
            category: "Development",
            description: "My primary code editor with powerful extensions and debugging capabilities",
            icon: "fas fa-code",
            color: "#007ACC",
            features: ["IntelliSense", "Git Integration", "Extensions", "Debugging"],
            proficiency: 95
        },
        {
            name: "React.js",
            category: "Frontend Framework",
            description: "Building dynamic and interactive user interfaces with component-based architecture",
            icon: "fab fa-react",
            color: "#61DAFB",
            features: ["Components", "Hooks", "State Management", "Virtual DOM"],
            proficiency: 85
        },
        {
            name: "Python",
            category: "Programming Language",
            description: "Versatile language for backend development, data analysis, and automation",
            icon: "fab fa-python",
            color: "#3776AB",
            features: ["Django", "Flask", "Data Science", "Automation"],
            proficiency: 80
        },
        {
            name: "GitHub",
            category: "Version Control",
            description: "Collaborative development platform for version control and project management",
            icon: "fab fa-github",
            color: "#181717",
            features: ["Git", "Collaboration", "CI/CD", "Project Management"],
            proficiency: 90
        },
        {
            name: "Canva",
            category: "Design Tool",
            description: "Creating stunning graphics, presentations, and visual content for projects",
            icon: "fas fa-palette",
            color: "#00C4CC",
            features: ["Graphics", "Templates", "Branding", "Social Media"],
            proficiency: 88
        },
        {
            name: "CSS3 & Flexbox",
            category: "Styling",
            description: "Modern CSS techniques for responsive and beautiful web layouts",
            icon: "fab fa-css3-alt",
            color: "#1572B6",
            features: ["Flexbox", "Grid", "Animations", "Responsive Design"],
            proficiency: 92
        },
        {
            name: "JavaScript ES6+",
            category: "Programming Language",
            description: "Modern JavaScript for interactive web applications and dynamic functionality",
            icon: "fab fa-js-square",
            color: "#F7DF1E",
            features: ["ES6+", "DOM Manipulation", "Async/Await", "APIs"],
            proficiency: 87
        },
        {
            name: "Figma",
            category: "UI/UX Design",
            description: "Collaborative design tool for creating user interfaces and prototypes",
            icon: "fab fa-figma",
            color: "#F24E1E",
            features: ["Prototyping", "Components", "Collaboration", "Design Systems"],
            proficiency: 75
        }
    ],
    km: [
        {
            name: "Visual Studio Code",
            category: "ការអភិវឌ្ឍន៍",
            description: "កម្មវិធីសរសេរកូដចម្បងរបស់ខ្ញុំដែលមានផ្នែកបន្ថែមដ៏មានអានុភាព និងលទ្ធភាពកែកំហុស",
            icon: "fas fa-code",
            color: "#007ACC",
            features: ["IntelliSense", "ការរួមបញ្ចូល Git", "ផ្នែកបន្ថែម", "ការកែកំហុស"],
            proficiency: 95
        },
        {
            name: "React.js",
            category: "Frontend Framework",
            description: "បង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់ថាមវន្ត និងអន្តរកម្មជាមួយស្ថាបត្យកម្មផ្អែកលើសមាសធាតុ",
            icon: "fab fa-react",
            color: "#61DAFB",
            features: ["សមាសធាតុ", "Hooks", "ការគ្រប់គ្រង State", "Virtual DOM"],
            proficiency: 85
        },
        {
            name: "Python",
            category: "ភាសាកម្មវិធី",
            description: "ភាសាដែលអាចប្រើបានច្រើនសម្រាប់ការអភិវឌ្ឍន៍ backend ការវិភាគទិន្នន័យ និងស្វ័យប្រវត្តិកម្ម",
            icon: "fab fa-python",
            color: "#3776AB",
            features: ["Django", "Flask", "វិទ្យាសាស្ត្រទិន្នន័យ", "ស្វ័យប្រវត្តិកម្ម"],
            proficiency: 80
        },
        {
            name: "GitHub",
            category: "ការគ្រប់គ្រងកំណែ",
            description: "វេទិកាអភិវឌ្ឍន៍សហការសម្រាប់ការគ្រប់គ្រងកំណែ និងការគ្រប់គ្រងគម្រោង",
            icon: "fab fa-github",
            color: "#181717",
            features: ["Git", "សហការ", "CI/CD", "ការគ្រប់គ្រងគម្រោង"],
            proficiency: 90
        },
        {
            name: "Canva",
            category: "ឧបករណ៍រចនា",
            description: "បង្កើតក្រាហ្វិកដ៏អស្ចារ្យ ការបង្ហាញ និងមាតិកាមើលឃើញសម្រាប់គម្រោង",
            icon: "fas fa-palette",
            color: "#00C4CC",
            features: ["ក្រាហ្វិក", "គំរូ", "ម៉ាកយីហោ", "ប្រព័ន្ធផ្សព្វផ្សាយសង្គម"],
            proficiency: 88
        },
        {
            name: "CSS3 & Flexbox",
            category: "ការធ្វើស្ទីល",
            description: "បច្ចេកទេស CSS ទំនើបសម្រាប់ប្លង់គេហទំព័រឆ្លើយតប និងស្រស់ស្អាត",
            icon: "fab fa-css3-alt",
            color: "#1572B6",
            features: ["Flexbox", "Grid", "ចលនា", "ការរចនាឆ្លើយតប"],
            proficiency: 92
        },
        {
            name: "JavaScript ES6+",
            category: "ភាសាកម្មវិធី",
            description: "JavaScript ទំនើបសម្រាប់កម្មវិធីគេហទំព័រអន្តរកម្ម និងមុខងារថាមវន្ត",
            icon: "fab fa-js-square",
            color: "#F7DF1E",
            features: ["ES6+", "ការរៀបចំ DOM", "Async/Await", "APIs"],
            proficiency: 87
        },
        {
            name: "Figma",
            category: "ការរចនា UI/UX",
            description: "ឧបករណ៍រចនាសហការសម្រាប់បង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់ និងគំរូ",
            icon: "fab fa-figma",
            color: "#F24E1E",
            features: ["ការបង្កើតគំរូ", "សមាសធាតុ", "សហការ", "ប្រព័ន្ធរចនា"],
            proficiency: 75
        }
    ]
};

// Carousel state
let currentSlide = 0;
let isAutoPlaying = true;
let autoPlayInterval;

// Initialize carousel
function initializeCarousel() {
    loadToolboxItems();
    setupCarouselControls();
    startAutoPlay();
    
    console.log('Carousel system initialized');
}

// Load toolbox items
function loadToolboxItems() {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const tools = toolboxData[currentLang];
    const track = document.getElementById('toolbox-track');
    
    if (!track) return;
    
    track.innerHTML = '';
    
    tools.forEach((tool, index) => {
        const toolCard = createToolCard(tool, index);
        track.appendChild(toolCard);
    });
    
    updateCarouselPosition();
}

// Create tool card
function createToolCard(tool, index) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.style.setProperty('--tool-color', tool.color);
    
    card.innerHTML = `
        <div class="tool-icon">
            <i class="${tool.icon}"></i>
        </div>
        <div class="tool-content">
            <div class="tool-header">
                <h3 class="tool-name">${tool.name}</h3>
                <span class="tool-category">${tool.category}</span>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-features">
                ${tool.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <div class="tool-proficiency">
                <div class="proficiency-label">Proficiency</div>
                <div class="proficiency-bar">
                    <div class="proficiency-fill" style="width: ${tool.proficiency}%"></div>
                </div>
                <div class="proficiency-value">${tool.proficiency}%</div>
            </div>
        </div>
        <div class="tool-overlay">
            <button class="tool-learn-more" onclick="showToolDetails(${index})">
                <i class="fas fa-info-circle"></i>
                Learn More
            </button>
        </div>
    `;
    
    return card;
}

// Setup carousel controls
function setupCarouselControls() {
    const prevBtn = document.getElementById('toolbox-prev');
    const nextBtn = document.getElementById('toolbox-next');
    const carousel = document.querySelector('.toolbox-carousel');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            previousSlide();
            pauseAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            pauseAutoPlay();
        });
    }
    
    // Touch/swipe support
    if (carousel) {
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const threshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    previousSlide();
                }
                pauseAutoPlay();
            }
        }
    }
    
    // Pause autoplay on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', pauseAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }
}

// Next slide
function nextSlide() {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const totalSlides = toolboxData[currentLang].length;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarouselPosition();
}

// Previous slide
function previousSlide() {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const totalSlides = toolboxData[currentLang].length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarouselPosition();
}

// Update carousel position
function updateCarouselPosition() {
    const track = document.getElementById('toolbox-track');
    if (!track) return;
    
    const slideWidth = 100; // Percentage
    const offset = -currentSlide * slideWidth;
    track.style.transform = `translateX(${offset}%)`;
    
    // Update active indicators if they exist
    updateCarouselIndicators();
}

// Update carousel indicators
function updateCarouselIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Start autoplay
function startAutoPlay() {
    if (isAutoPlaying) return;
    
    isAutoPlaying = true;
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
}

// Pause autoplay
function pauseAutoPlay() {
    isAutoPlaying = false;
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

// Show tool details (modal or expanded view)
function showToolDetails(index) {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const tool = toolboxData[currentLang][index];
    
    // Create modal or show details
    const modal = document.createElement('div');
    modal.className = 'tool-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeToolModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <div class="tool-icon-large">
                    <i class="${tool.icon}" style="color: ${tool.color}"></i>
                </div>
                <div class="tool-info">
                    <h2>${tool.name}</h2>
                    <span class="tool-category">${tool.category}</span>
                </div>
                <button class="modal-close" onclick="closeToolModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="tool-description-full">${tool.description}</p>
                <div class="tool-features-grid">
                    <h4>Key Features:</h4>
                    <div class="features-list">
                        ${tool.features.map(feature => `<div class="feature-item"><i class="fas fa-check"></i>${feature}</div>`).join('')}
                    </div>
                </div>
                <div class="proficiency-section">
                    <h4>Proficiency Level:</h4>
                    <div class="proficiency-bar-large">
                        <div class="proficiency-fill" style="width: ${tool.proficiency}%; background: ${tool.color}"></div>
                    </div>
                    <span class="proficiency-text">${tool.proficiency}% - ${getProficiencyLevel(tool.proficiency)}</span>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

// Close tool modal
function closeToolModal() {
    const modal = document.querySelector('.tool-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Get proficiency level text
function getProficiencyLevel(percentage) {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 70) return 'Intermediate';
    if (percentage >= 60) return 'Beginner';
    return 'Learning';
}

// Responsive carousel adjustments
function adjustCarouselForScreenSize() {
    const screenWidth = window.innerWidth;
    const track = document.getElementById('toolbox-track');
    
    if (!track) return;
    
    let slidesToShow = 1;
    if (screenWidth >= 1200) slidesToShow = 3;
    else if (screenWidth >= 768) slidesToShow = 2;
    
    // Adjust card width based on slides to show
    const cards = track.querySelectorAll('.tool-card');
    cards.forEach(card => {
        card.style.width = `${100 / slidesToShow}%`;
    });
}

// Export carousel functions
window.CarouselSystem = {
    nextSlide,
    previousSlide,
    showToolDetails,
    closeToolModal,
    startAutoPlay,
    pauseAutoPlay
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    adjustCarouselForScreenSize();
});

// Listen for window resize
window.addEventListener('resize', window.CAMBO.debounce(adjustCarouselForScreenSize, 250));

// Listen for language changes
document.addEventListener('languageChanged', function() {
    loadToolboxItems();
    currentSlide = 0; // Reset to first slide
    updateCarouselPosition();
});
