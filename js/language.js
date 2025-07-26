// ===== LANGUAGE MANAGEMENT =====

// Language data
const languageData = {
    en: {
        // Navigation
        'Home': 'Home',
        'About': 'About',
        'Skills': 'Skills',
        'Projects': 'Projects',
        'Blog': 'Blog',
        'Contact': 'Contact',
        
        // Hero Section
        'Welcome to': 'Welcome to',
        'Creative Tech Portfolio': 'Creative Tech Portfolio',
        'Exploring the intersection of technology, creativity, and Khmer culture through innovative web development and design.': 'Exploring the intersection of technology, creativity, and Khmer culture through innovative web development and design.',
        'Explore My Skills': 'Explore My Skills',
        'View Resume': 'View Resume',
        
        // Chat Section
        'Ask Me Anything': 'Ask Me Anything',
        'Hi! I\'m CAMBO\'s AI assistant. Ask me about my tech journey, skills, or projects!': 'Hi! I\'m CAMBO\'s AI assistant. Ask me about my tech journey, skills, or projects!',
        'Type your question here...': 'Type your question here...',
        'What technologies do you work with?': 'What technologies do you work with?',
        'Tell me about your learning journey': 'Tell me about your learning journey',
        'What are your future goals?': 'What are your future goals?',
        
        // Toolbox Section
        'My Toolbox': 'My Toolbox',
        
        // Education Section
        'Learning Journey': 'Learning Journey',
        
        // Philosophy Section
        'Philosophy & Goals': 'Philosophy & Goals',
        
        // Projects Section
        'Micro-Projects Spotlight': 'Micro-Projects Spotlight',
        
        // Skills Section
        'Tech Stack': 'Tech Stack',
        
        // Blog Section
        'Blog & Insights': 'Blog & Insights',
        'Let\'s Collaborate!': 'Let\'s Collaborate!',
        'Ready to work together on something amazing?': 'Ready to work together on something amazing?',
        'Get In Touch': 'Get In Touch',
        
        // Contact Section
        'Send Message': 'Send Message',
        'Your Name': 'Your Name',
        'Your Email': 'Your Email',
        'Your Message': 'Your Message',
        'Send': 'Send',
        
        // Footer
        'Made with': 'Made with',
        'by CAMBO': 'by CAMBO',
        
        // Common
        'Loading...': 'Loading...',
        'Read More': 'Read More',
        'Learn More': 'Learn More',
        'Download': 'Download',
        'Close': 'Close',
        'Next': 'Next',
        'Previous': 'Previous'
    },
    
    km: {
        // Navigation
        'Home': 'ទំព័រដើម',
        'About': 'អំពីខ្ញុំ',
        'Skills': 'ជំនាញ',
        'Projects': 'គម្រោង',
        'Blog': 'ប្លុក',
        'Contact': 'ទំនាក់ទំនង',
        
        // Hero Section
        'Welcome to': 'សូមស្វាគមន៍មកកាន់',
        'Creative Tech Portfolio': 'ផតហ្វូលីយ៉ូបច្ចេកវិទ្យាច្នៃប្រឌិត',
        'Exploring the intersection of technology, creativity, and Khmer culture through innovative web development and design.': 'ស្វែងរកចំណុចប្រសព្វនៃបច្ចេកវិទ្យា ភាពច្នៃប្រឌិត និងវប្បធម៌ខ្មែរតាមរយៈការអភិវឌ្ឍន៍គេហទំព័រនិងការរចនាប្រកបដោយភាពច្នៃប្រឌិត។',
        'Explore My Skills': 'ស្វែងយល់ជំនាញរបស់ខ្ញុំ',
        'View Resume': 'មើលប្រវត្តិរូប',
        
        // Chat Section
        'Ask Me Anything': 'សួរខ្ញុំអ្វីក៏បាន',
        'Hi! I\'m CAMBO\'s AI assistant. Ask me about my tech journey, skills, or projects!': 'សួស្តី! ខ្ញុំជាជំនួយការ AI របស់ CAMBO។ សួរខ្ញុំអំពីដំណើរបច្ចេកវិទ្យា ជំនាញ ឬគម្រោងរបស់ខ្ញុំ!',
        'Type your question here...': 'វាយសំណួររបស់អ្នកនៅទីនេះ...',
        'What technologies do you work with?': 'អ្នកធ្វើការជាមួយបច្ចេកវិទ្យាអ្វីខ្លះ?',
        'Tell me about your learning journey': 'ប្រាប់ខ្ញុំអំពីដំណើរសិក្សារបស់អ្នក',
        'What are your future goals?': 'តើគោលដៅអនាគតរបស់អ្នកជាអ្វី?',
        
        // Toolbox Section
        'My Toolbox': 'ប្រអប់ឧបករណ៍របស់ខ្ញុំ',
        
        // Education Section
        'Learning Journey': 'ដំណើរសិក្សា',
        
        // Philosophy Section
        'Philosophy & Goals': 'ទស្សនវិជ្ជា និងគោលដៅ',
        
        // Projects Section
        'Micro-Projects Spotlight': 'គម្រោងតូចៗពិសេស',
        
        // Skills Section
        'Tech Stack': 'ជំនាញបច្ចេកវិទ្យា',
        
        // Blog Section
        'Blog & Insights': 'ប្លុក និងការយល់ដឹង',
        'Let\'s Collaborate!': 'តោះសហការគ្នា!',
        'Ready to work together on something amazing?': 'តើអ្នកត្រៀមរួចហើយដើម្បីធ្វើការជាមួយគ្នាលើអ្វីដែលអស្ចារ្យមួយទេ?',
        'Get In Touch': 'ទាក់ទងមកខ្ញុំ',
        
        // Contact Section
        'Send Message': 'ផ្ញើសារ',
        'Your Name': 'ឈ្មោះរបស់អ្នក',
        'Your Email': 'អ៊ីមែលរបស់អ្នក',
        'Your Message': 'សាររបស់អ្នក',
        'Send': 'ផ្ញើ',
        
        // Footer
        'Made with': 'បង្កើតដោយ',
        'by CAMBO': 'ដោយ CAMBO',
        
        // Common
        'Loading...': 'កំពុងផ្ទុក...',
        'Read More': 'អានបន្ថែម',
        'Learn More': 'ស្វែងយល់បន្ថែម',
        'Download': 'ទាញយក',
        'Close': 'បិទ',
        'Next': 'បន្ទាប់',
        'Previous': 'មុន'
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize language system
function initializeLanguage() {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.id === 'lang-en' ? 'en' : 'km';
            setLanguage(lang);
        });
    });
    
    console.log('Language system initialized');
}

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update language buttons
    updateLanguageButtons(lang);
    
    // Update all text elements
    updateTextElements(lang);
    
    // Update placeholders
    updatePlaceholders(lang);
    
    // Update document language attribute
    document.documentElement.lang = lang;
    
    // Trigger custom event for other components
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Update language buttons
function updateLanguageButtons(lang) {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.classList.remove('active');
        if ((lang === 'en' && button.id === 'lang-en') || 
            (lang === 'km' && button.id === 'lang-km')) {
            button.classList.add('active');
        }
    });
}

// Update text elements
function updateTextElements(lang) {
    const elements = document.querySelectorAll('[data-en], [data-km]');
    
    elements.forEach(element => {
        const key = lang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-km');
        if (key && languageData[lang][key]) {
            element.textContent = languageData[lang][key];
        } else if (key) {
            element.textContent = key; // Fallback to the key itself
        }
    });
}

// Update placeholders
function updatePlaceholders(lang) {
    const elements = document.querySelectorAll('[data-en-placeholder], [data-km-placeholder]');
    
    elements.forEach(element => {
        const key = lang === 'en' ? element.getAttribute('data-en-placeholder') : element.getAttribute('data-km-placeholder');
        if (key && languageData[lang][key]) {
            element.placeholder = languageData[lang][key];
        } else if (key) {
            element.placeholder = key; // Fallback to the key itself
        }
    });
}

// Get translated text
function getText(key, lang = currentLanguage) {
    return languageData[lang][key] || key;
}

// Add translation to existing element
function addTranslation(element, enText, kmText) {
    element.setAttribute('data-en', enText);
    element.setAttribute('data-km', kmText);
    
    // Update immediately with current language
    const currentText = currentLanguage === 'en' ? enText : kmText;
    if (languageData[currentLanguage][currentText]) {
        element.textContent = languageData[currentLanguage][currentText];
    } else {
        element.textContent = currentText;
    }
}

// Dynamic content translation
function translateDynamicContent(content, lang = currentLanguage) {
    if (typeof content === 'object' && content.en && content.km) {
        return content[lang] || content.en;
    }
    return content;
}

// Format numbers based on language
function formatNumberByLanguage(number, lang = currentLanguage) {
    if (lang === 'km') {
        // Khmer number formatting (if needed)
        return number.toLocaleString('km-KH');
    }
    return number.toLocaleString('en-US');
}

// Format dates based on language
function formatDateByLanguage(date, lang = currentLanguage) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    if (lang === 'km') {
        return date.toLocaleDateString('km-KH', options);
    }
    return date.toLocaleDateString('en-US', options);
}

// RTL/LTR support (if needed for future languages)
function updateTextDirection(lang) {
    const isRTL = ['ar', 'he', 'fa'].includes(lang);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
}

// Font loading for Khmer text
function loadKhmerFonts() {
    if (currentLanguage === 'km') {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@300;400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        
        // Apply Khmer font to body when Khmer is selected
        document.body.style.fontFamily = '"Noto Sans Khmer", var(--font-secondary)';
    } else {
        document.body.style.fontFamily = 'var(--font-secondary)';
    }
}

// Language detection from browser
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('km')) {
        return 'km';
    }
    return 'en';
}

// Export functions for global use
window.LanguageManager = {
    setLanguage,
    getText,
    addTranslation,
    translateDynamicContent,
    formatNumberByLanguage,
    formatDateByLanguage,
    getCurrentLanguage: () => currentLanguage,
    getSupportedLanguages: () => Object.keys(languageData)
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    loadKhmerFonts();
});

// Listen for language changes to update fonts
document.addEventListener('languageChanged', function(e) {
    loadKhmerFonts();
    
    // Update any dynamic content that needs language-specific formatting
    const numberElements = document.querySelectorAll('[data-number]');
    numberElements.forEach(element => {
        const number = parseFloat(element.getAttribute('data-number'));
        element.textContent = formatNumberByLanguage(number, e.detail.language);
    });
    
    const dateElements = document.querySelectorAll('[data-date]');
    dateElements.forEach(element => {
        const dateString = element.getAttribute('data-date');
        const date = new Date(dateString);
        element.textContent = formatDateByLanguage(date, e.detail.language);
    });
});
