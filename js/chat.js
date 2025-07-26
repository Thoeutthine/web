// ===== INTERACTIVE CHAT SYSTEM =====

// Chat responses database
const chatResponses = {
    en: {
        'what technologies do you work with?': {
            response: "I work with a diverse tech stack! 🚀\n\n• **Frontend**: React.js, HTML5, CSS3, JavaScript (ES6+)\n• **Backend**: Python, Node.js\n• **Design**: Canva, Figma, Adobe Creative Suite\n• **Development Tools**: Visual Studio Code, GitHub, Git\n• **Databases**: MongoDB, MySQL\n• **Other**: CSS Flexbox, Responsive Design, RESTful APIs\n\nI'm always learning new technologies to stay current with industry trends!",
            followUp: ["Tell me about your React.js experience", "What's your favorite development tool?", "How do you approach responsive design?"]
        },
        'tell me about your learning journey': {
            response: "My learning journey has been an exciting adventure! 🎓\n\n**Current Focus Areas:**\n• Mastering React.js for dynamic web applications\n• Diving deep into Python for backend development\n• Exploring cybersecurity fundamentals\n• Perfecting CSS Flexbox and Grid layouts\n\n**Learning Philosophy:**\nI believe in hands-on learning through building real projects. Each challenge teaches me something new, and I document my progress through micro-projects and blog posts.\n\n**Cultural Integration:**\nI'm passionate about bridging technology with Khmer culture, creating solutions that resonate with my community while meeting global standards.",
            followUp: ["What's your biggest learning challenge?", "How do you stay motivated?", "Tell me about your projects"]
        },
        'what are your future goals?': {
            response: "I have ambitious goals that blend technology with meaningful impact! 🎯\n\n**Short-term Goals (6-12 months):**\n• Complete advanced React.js certification\n• Build a family networking app for Khmer communities\n• Launch my bilingual tech blog\n• Contribute to open-source projects\n\n**Long-term Vision (2-5 years):**\n• Become a full-stack developer specializing in cultural tech solutions\n• Start a tech education initiative in Cambodia\n• Build applications that preserve and promote Khmer culture\n• Mentor other aspiring developers from Southeast Asia\n\n**Ultimate Dream:**\nCreate technology that bridges cultures and makes the digital world more inclusive for everyone! 🌍",
            followUp: ["How can I support your goals?", "Tell me about the family networking app", "What inspires your cultural focus?"]
        },
        'tell me about your react.js experience': {
            response: "React.js has become my favorite frontend framework! ⚛️\n\n**What I Love About React:**\n• Component-based architecture makes code reusable\n• Virtual DOM provides excellent performance\n• Huge ecosystem and community support\n• Perfect for building interactive UIs\n\n**Projects I've Built:**\n• Interactive portfolio components\n• Dynamic form handlers\n• Responsive navigation systems\n• Real-time chat interfaces\n\n**Currently Learning:**\n• React Hooks (useState, useEffect, custom hooks)\n• State management with Context API\n• Testing with Jest and React Testing Library\n• Next.js for server-side rendering",
            followUp: ["Show me your React projects", "What's challenging about React?", "Any React tips for beginners?"]
        },
        'what\'s your favorite development tool?': {
            response: "Visual Studio Code is my absolute favorite! 💻\n\n**Why I Love VS Code:**\n• Incredible extension ecosystem\n• Built-in Git integration\n• Excellent debugging capabilities\n• Customizable themes and layouts\n• IntelliSense for smart code completion\n\n**My Essential Extensions:**\n• Prettier for code formatting\n• ES7+ React/Redux/React-Native snippets\n• Live Server for instant preview\n• GitLens for enhanced Git capabilities\n• Bracket Pair Colorizer for better readability\n\n**Other Tools I Use:**\n• GitHub for version control and collaboration\n• Canva for quick design mockups\n• Chrome DevTools for debugging\n• Figma for UI/UX design",
            followUp: ["What's your VS Code setup?", "Any productivity tips?", "How do you organize your projects?"]
        },
        'how do you approach responsive design?': {
            response: "Responsive design is crucial for modern web development! 📱\n\n**My Approach:**\n• **Mobile-first design** - Start with mobile, then scale up\n• **CSS Flexbox & Grid** for flexible layouts\n• **Relative units** (rem, em, %) instead of fixed pixels\n• **Breakpoint strategy** for different screen sizes\n\n**Key Techniques:**\n• Fluid typography with clamp() function\n• Flexible images with max-width: 100%\n• CSS Grid for complex layouts\n• Media queries for device-specific styles\n\n**Testing Process:**\n• Chrome DevTools device simulation\n• Real device testing on multiple screens\n• Performance optimization for mobile networks\n\n**Cultural Consideration:**\nI ensure my designs work well with both English and Khmer text, considering different text lengths and reading patterns.",
            followUp: ["Show me responsive examples", "What about performance?", "Any mobile-specific challenges?"]
        },
        'default': {
            response: "That's a great question! 🤔 I'm still learning and growing every day. Here are some topics I'd love to discuss:\n\n• My technology stack and tools\n• Learning journey and experiences\n• Future goals and aspirations\n• Projects I'm working on\n• Challenges I've overcome\n• Cultural integration in tech\n\nFeel free to ask me anything about these topics, or use the quick questions below!",
            followUp: ["What technologies do you work with?", "Tell me about your learning journey", "What are your future goals?"]
        }
    },
    km: {
        'អ្នកធ្វើការជាមួយបច្ចេកវិទ្យាអ្វីខ្លះ?': {
            response: "ខ្ញុំធ្វើការជាមួយបច្ចេកវិទ្យាច្រើនប្រភេទ! 🚀\n\n• **Frontend**: React.js, HTML5, CSS3, JavaScript (ES6+)\n• **Backend**: Python, Node.js\n• **Design**: Canva, Figma, Adobe Creative Suite\n• **Development Tools**: Visual Studio Code, GitHub, Git\n• **Databases**: MongoDB, MySQL\n• **ផ្សេងៗ**: CSS Flexbox, Responsive Design, RESTful APIs\n\nខ្ញុំតែងតែរៀនបច្ចេកវិទ្យាថ្មីៗដើម្បីធ្វើឱ្យទាន់សម័យជាមួយនឹងនិន្នាការឧស្សាហកម្ម!",
            followUp: ["ប្រាប់ខ្ញុំអំពីបទពិសោធន៍ React.js របស់អ្នក", "តើឧបករណ៍អភិវឌ្ឍន៍ដែលអ្នកចូលចិត្តបំផុតជាអ្វី?", "តើអ្នកធ្វើការរចនាឆ្លើយតបយ៉ាងដូចម្តេច?"]
        },
        'ប្រាប់ខ្ញុំអំពីដំណើរសិក្សារបស់អ្នក': {
            response: "ដំណើរសិក្សារបស់ខ្ញុំគឺជាការផ្សងព្រេងដ៏រំភើប! 🎓\n\n**ផ្នែកដែលកំពុងផ្តោតសំខាន់:**\n• ស្វែងយល់ React.js សម្រាប់កម្មវិធីគេហទំព័រថាមវន្ត\n• សិក្សាស៊ីជម្រៅ Python សម្រាប់ការអភិវឌ្ឍន៍ backend\n• ស្វែងរកមូលដ្ឋានគ្រឹះនៃសុវត្ថិភាពអ៊ីនធឺណិត\n• ធ្វើឱ្យល្អឥតខ្ចោះ CSS Flexbox និង Grid layouts\n\n**ទស្សនវិជ្ជាសិក្សា:**\nខ្ញុំជឿជាក់លើការរៀនតាមរយៈការអនុវត្តជាក់ស្តែងតាមរយៈការបង្កើតគម្រោងពិតប្រាកដ។ បញ្ហាប្រឈមនីមួយៗបង្រៀនខ្ញុំនូវអ្វីថ្មី ហើយខ្ញុំកត់ត្រាវឌ្ឍនភាពរបស់ខ្ញុំតាមរយៈគម្រោងតូចៗ និងការសរសេរប្លុក។\n\n**ការរួមបញ្ចូលវប្បធម៌:**\nខ្ញុំមានចំណង់ចំណូលចិត្តក្នុងការភ្ជាប់បច្ចេកវិទ្យាជាមួយវប្បធម៌ខ្មែរ ដោយបង្កើតដំណោះស្រាយដែលឆ្លុះបញ្ចាំងសហគមន៍របស់ខ្ញុំ ខណៈពេលដែលបំពេញតាមស្តង់ដារសកល។",
            followUp: ["តើបញ្ហាប្រឈមធំបំផុតក្នុងការរៀនរបស់អ្នកជាអ្វី?", "តើអ្នកធ្វើយ៉ាងដូចម្តេចដើម្បីរក្សាការលើកទឹកចិត្ត?", "ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក"]
        },
        'តើគោលដៅអនាគតរបស់អ្នកជាអ្វី?': {
            response: "ខ្ញុំមានគោលដៅមហិច្ឆតាដែលរួមបញ្ចូលបច្ចេកវិទ្យាជាមួយនឹងផលប៉ះពាល់ដ៏មានន័យ! 🎯\n\n**គោលដៅរយៈពេលខ្លី (៦-១២ ខែ):**\n• បញ្ចប់វិញ្ញាបនបត្រកម្រិតខ្ពស់ React.js\n• បង្កើតកម្មវិធីបណ្តាញគ្រួសារសម្រាប់សហគមន៍ខ្មែរ\n• ចាប់ផ្តើមប្លុកបច្ចេកវិទ្យាពីរភាសារបស់ខ្ញុំ\n• ចូលរួមចំណែកដល់គម្រោង open-source\n\n**ចក្ខុវិស័យរយៈពេលវែង (២-៥ ឆ្នាំ):**\n• ក្លាយជាអ្នកអភិវឌ្ឍន៍ full-stack ដែលមានជំនាញពិសេសក្នុងដំណោះស្រាយបច្ចេកវិទ្យាវប្បធម៌\n• ចាប់ផ្តើមគំនិតផ្តួចផ្តើមអប់រំបច្ចេកវិទ្យានៅកម្ពុជា\n• បង្កើតកម្មវិធីដែលរក្សា និងលើកកម្ពស់វប្បធម៌ខ្មែរ\n• ណែនាំអ្នកអភិវឌ្ឍន៍ដទៃទៀតដែលមានមហិច្ឆតាពីអាស៊ីអាគ្នេយ៍\n\n**សុបិនចុងក្រោយ:**\nបង្កើតបច្ចេកវិទ្យាដែលភ្ជាប់វប្បធម៌ និងធ្វើឱ្យពិភពលោកឌីជីថលកាន់តែរួមបញ្ចូលសម្រាប់មនុស្សគ្រប់គ្នា! 🌍",
            followUp: ["តើខ្ញុំអាចគាំទ្រគោលដៅរបស់អ្នកយ៉ាងដូចម្តេច?", "ប្រាប់ខ្ញុំអំពីកម្មវិធីបណ្តាញគ្រួសារ", "តើអ្វីដែលបំផុសគំនិតអ្នកលើការផ្តោតលើវប្បធម៌?"]
        },
        'default': {
            response: "នោះជាសំណួរដ៏ល្អមួយ! 🤔 ខ្ញុំនៅតែកំពុងរៀន និងលូតលាស់រាល់ថ្ងៃ។ នេះគឺជាប្រធានបទមួយចំនួនដែលខ្ញុំចង់ពិភាក្សា:\n\n• បច្ចេកវិទ្យា និងឧបករណ៍របស់ខ្ញុំ\n• ដំណើរសិក្សា និងបទពិសោធន៍\n• គោលដៅ និងមហិច្ឆតាអនាគត\n• គម្រោងដែលខ្ញុំកំពុងធ្វើការ\n• បញ្ហាប្រឈមដែលខ្ញុំបានយកឈ្នះ\n• ការរួមបញ្ចូលវប្បធម៌ក្នុងបច្ចេកវិទ្យា\n\nសូមសួរខ្ញុំអ្វីក៏បានអំពីប្រធានបទទាំងនេះ ឬប្រើសំណួរលឿននៅខាងក្រោម!",
            followUp: ["អ្នកធ្វើការជាមួយបច្ចេកវិទ្យាអ្វីខ្លះ?", "ប្រាប់ខ្ញុំអំពីដំណើរសិក្សារបស់អ្នក", "តើគោលដៅអនាគតរបស់អ្នកជាអ្វី?"]
        }
    }
};

// Chat state
let chatHistory = [];
let isTyping = false;

// Initialize chat system
function initializeChat() {
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send');
    const quickQuestions = document.querySelectorAll('.quick-question');
    
    // Send button click
    if (chatSendBtn) {
        chatSendBtn.addEventListener('click', handleSendMessage);
    }
    
    // Enter key press
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
            }
        });
    }
    
    // Quick question buttons
    quickQuestions.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            sendMessage(question);
        });
    });
    
    console.log('Chat system initialized');
}

// Handle send message
function handleSendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    
    if (message && !isTyping) {
        sendMessage(message);
        chatInput.value = '';
    }
}

// Send message
function sendMessage(message) {
    if (isTyping) return;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    
    // Show typing indicator
    showTypingIndicator();
    
    // Get bot response after delay
    setTimeout(() => {
        const response = getBotResponse(message);
        hideTypingIndicator();
        addMessageToChat(response.text, 'bot');
        
        // Add follow-up questions if available
        if (response.followUp && response.followUp.length > 0) {
            setTimeout(() => {
                addFollowUpQuestions(response.followUp);
            }, 1000);
        }
    }, 1500 + Math.random() * 1000); // Random delay for realism
}

// Add message to chat
function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-text">${formatMessage(message)}</div>
                <div class="message-time">${getCurrentTime()}</div>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-text">${formatMessage(message)}</div>
                <div class="message-time">${getCurrentTime()}</div>
            </div>
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    
    // Animate message appearance
    setTimeout(() => {
        messageDiv.classList.add('fade-in-up');
    }, 100);
    
    // Scroll to bottom
    scrollChatToBottom();
    
    // Add to history
    chatHistory.push({ message, sender, timestamp: new Date() });
}

// Get bot response
function getBotResponse(userMessage) {
    const currentLang = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const responses = chatResponses[currentLang];
    const normalizedMessage = userMessage.toLowerCase().trim();
    
    // Check for exact matches first
    if (responses[normalizedMessage]) {
        return {
            text: responses[normalizedMessage].response,
            followUp: responses[normalizedMessage].followUp
        };
    }
    
    // Check for partial matches
    for (const key in responses) {
        if (key !== 'default' && (normalizedMessage.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedMessage))) {
            return {
                text: responses[key].response,
                followUp: responses[key].followUp
            };
        }
    }
    
    // Keyword-based responses
    const keywords = {
        en: {
            'react': 'tell me about your react.js experience',
            'python': 'what technologies do you work with?',
            'tools': 'what\'s your favorite development tool?',
            'responsive': 'how do you approach responsive design?',
            'goals': 'what are your future goals?',
            'learning': 'tell me about your learning journey',
            'experience': 'tell me about your learning journey',
            'projects': 'what are your future goals?',
            'skills': 'what technologies do you work with?'
        },
        km: {
            'react': 'ប្រាប់ខ្ញុំអំពីបទពិសោធន៍ React.js របស់អ្នក',
            'python': 'អ្នកធ្វើការជាមួយបច្ចេកវិទ្យាអ្វីខ្លះ?',
            'ឧបករណ៍': 'តើឧបករណ៍អភិវឌ្ឍន៍ដែលអ្នកចូលចិត្តបំផុតជាអ្វី?',
            'គោលដៅ': 'តើគោលដៅអនាគតរបស់អ្នកជាអ្វី?',
            'សិក្សា': 'ប្រាប់ខ្ញុំអំពីដំណើរសិក្សារបស់អ្នក',
            'បទពិសោធន៍': 'ប្រាប់ខ្ញុំអំពីដំណើរសិក្សារបស់អ្នក',
            'គម្រោង': 'តើគោលដៅអនាគតរបស់អ្នកជាអ្វី?',
            'ជំនាញ': 'អ្នកធ្វើការជាមួយបច្ចេកវិទ្យាអ្វីខ្លះ?'
        }
    };
    
    const langKeywords = keywords[currentLang];
    for (const keyword in langKeywords) {
        if (normalizedMessage.includes(keyword)) {
            const matchedKey = langKeywords[keyword];
            if (responses[matchedKey]) {
                return {
                    text: responses[matchedKey].response,
                    followUp: responses[matchedKey].followUp
                };
            }
        }
    }
    
    // Default response
    return {
        text: responses.default.response,
        followUp: responses.default.followUp
    };
}

// Format message (convert markdown-like syntax to HTML)
function formatMessage(message) {
    return message
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>')
        .replace(/•/g, '&bull;');
}

// Show typing indicator
function showTypingIndicator() {
    isTyping = true;
    const chatMessages = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    scrollChatToBottom();
}

// Hide typing indicator
function hideTypingIndicator() {
    isTyping = false;
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Add follow-up questions
function addFollowUpQuestions(questions) {
    const chatMessages = document.getElementById('chat-messages');
    const followUpDiv = document.createElement('div');
    followUpDiv.className = 'follow-up-questions';
    
    const questionsHTML = questions.map(question => 
        `<button class="follow-up-btn" onclick="sendMessage('${question}')">${question}</button>`
    ).join('');
    
    followUpDiv.innerHTML = `
        <div class="follow-up-title">You might also ask:</div>
        <div class="follow-up-buttons">${questionsHTML}</div>
    `;
    
    chatMessages.appendChild(followUpDiv);
    scrollChatToBottom();
}

// Scroll chat to bottom
function scrollChatToBottom() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Get current time
function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Clear chat history
function clearChat() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = `
        <div class="message bot-message">
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p data-en="Hi! I'm CAMBO's AI assistant. Ask me about my tech journey, skills, or projects!" data-km="សួស្តី! ខ្ញុំជាជំនួយការ AI របស់ CAMBO។ សួរខ្ញុំអំពីដំណើរបច្ចេកវិទ្យា ជំនាញ ឬគម្រោងរបស់ខ្ញុំ!">
                    Hi! I'm CAMBO's AI assistant. Ask me about my tech journey, skills, or projects!
                </p>
            </div>
        </div>
    `;
    chatHistory = [];
}

// Export chat functions
window.ChatSystem = {
    sendMessage,
    clearChat,
    getChatHistory: () => chatHistory
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeChat();
});

// Listen for language changes to update chat interface
document.addEventListener('languageChanged', function(e) {
    // Update quick questions
    const quickQuestions = document.querySelectorAll('.quick-question');
    quickQuestions.forEach(button => {
        const enText = button.getAttribute('data-en');
        const kmText = button.getAttribute('data-km');
        if (enText && kmText) {
            button.textContent = e.detail.language === 'en' ? enText : kmText;
            button.setAttribute('data-question', e.detail.language === 'en' ? enText : kmText);
        }
    });
});
