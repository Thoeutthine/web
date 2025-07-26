// ===== MICRO-PROJECTS INTERACTIVE FUNCTIONALITY =====

// Color Palette Generator
function generateRandomPalette() {
    const palette = document.getElementById('color-palette');
    const swatches = palette.querySelectorAll('.color-swatch');
    
    swatches.forEach(swatch => {
        const randomColor = generateRandomColor();
        swatch.style.background = randomColor;
        swatch.setAttribute('onclick', `copyColor('${randomColor}')`);
        
        // Add animation
        swatch.style.transform = 'scale(0.8)';
        setTimeout(() => {
            swatch.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Add generation effect
    palette.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        palette.style.transform = 'rotateY(0deg)';
    }, 300);
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function copyColor(color) {
    navigator.clipboard.writeText(color).then(() => {
        window.CAMBO.showNotification(`Copied ${color} to clipboard!`, 'success');
        
        // Add visual feedback
        const swatch = event.target;
        const originalTransform = swatch.style.transform;
        swatch.style.transform = 'scale(1.2)';
        setTimeout(() => {
            swatch.style.transform = originalTransform;
        }, 200);
    }).catch(() => {
        window.CAMBO.showNotification('Failed to copy color', 'error');
    });
}

// CSS Animation Showcase
function triggerAnimation(animationType) {
    const element = document.getElementById('animated-element');
    
    // Remove existing animation classes
    element.className = 'animated-element';
    
    // Add new animation class
    setTimeout(() => {
        element.classList.add(`animate-${animationType}`);
    }, 10);
    
    // Remove animation class after completion
    setTimeout(() => {
        element.classList.remove(`animate-${animationType}`);
    }, 1000);
}

// Quiz App
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
        correct: 0
    },
    {
        question: "Which CSS property is used for changing text color?",
        options: ["text-color", "font-color", "color"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
        correct: 1
    },
    {
        question: "Which JavaScript method is used to select an element by ID?",
        options: ["getElementById()", "selectById()", "getElement()"],
        correct: 0
    },
    {
        question: "What is the correct way to create a function in JavaScript?",
        options: ["function = myFunction() {}", "function myFunction() {}", "create myFunction() {}"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let quizScore = 0;

function selectAnswer(selectedIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    
    // Remove previous selections
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect', 'selected');
    });
    
    // Mark selected answer
    options[selectedIndex].classList.add('selected');
    
    if (selectedIndex === currentQuestion.correct) {
        options[selectedIndex].classList.add('correct');
        quizScore++;
        window.CAMBO.showNotification('Correct! 🎉', 'success');
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[currentQuestion.correct].classList.add('correct');
        window.CAMBO.showNotification('Incorrect. Try the next question!', 'error');
    }
    
    // Update score
    document.getElementById('quiz-score').textContent = quizScore;
    
    // Move to next question after delay
    setTimeout(() => {
        nextQuestion();
    }, 2000);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= quizQuestions.length) {
        // Quiz completed
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('quiz-question').textContent = question.question;
    
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        option.textContent = question.options[index];
        option.className = 'quiz-option';
        option.setAttribute('onclick', `selectAnswer(${index})`);
    });
}

function showQuizResults() {
    const container = document.getElementById('quiz-container');
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    
    let message = '';
    if (percentage >= 80) {
        message = 'Excellent! You\'re a web dev expert! 🚀';
    } else if (percentage >= 60) {
        message = 'Good job! Keep learning! 📚';
    } else {
        message = 'Keep practicing! You\'ll get there! 💪';
    }
    
    container.innerHTML = `
        <div class="quiz-results">
            <h4>Quiz Complete!</h4>
            <div class="score-circle">
                <span class="score-percentage">${percentage}%</span>
            </div>
            <p>${message}</p>
            <p>You scored ${quizScore} out of ${quizQuestions.length}</p>
            <button class="demo-btn" onclick="restartQuiz()">
                <i class="fas fa-redo"></i> Try Again
            </button>
        </div>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="quiz-question" id="quiz-question">What does HTML stand for?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="selectAnswer(0)">HyperText Markup Language</button>
            <button class="quiz-option" onclick="selectAnswer(1)">High Tech Modern Language</button>
            <button class="quiz-option" onclick="selectAnswer(2)">Home Tool Markup Language</button>
        </div>
        <div class="quiz-score">Score: <span id="quiz-score">0</span>/5</div>
    `;
}

// Typography Playground
function updateTypography() {
    const demoText = document.getElementById('demo-text');
    const fontSize = document.getElementById('font-size').value;
    const fontFamily = document.getElementById('font-family').value;
    
    demoText.style.fontSize = fontSize + 'px';
    demoText.style.fontFamily = fontFamily;
    
    // Add update animation
    demoText.style.transform = 'scale(1.05)';
    setTimeout(() => {
        demoText.style.transform = 'scale(1)';
    }, 200);
}

// Responsive Design Tester
function setDeviceSize(device) {
    const frame = document.getElementById('device-frame');
    const website = frame.querySelector('.demo-website');
    
    // Remove existing device classes
    frame.className = 'device-frame';
    
    // Add new device class
    frame.classList.add(`device-${device}`);
    
    // Add transition effect
    website.style.opacity = '0.5';
    setTimeout(() => {
        website.style.opacity = '1';
    }, 300);
    
    // Show notification
    const deviceNames = {
        mobile: '📱 Mobile (375px)',
        tablet: '📱 Tablet (768px)',
        desktop: '💻 Desktop (1200px)'
    };
    
    window.CAMBO.showNotification(`Switched to ${deviceNames[device]}`, 'info');
}

// Code Formatter
function formatCode() {
    const input = document.getElementById('code-input').value;
    const output = document.getElementById('formatted-code');
    
    if (!input.trim()) {
        window.CAMBO.showNotification('Please enter some code to format!', 'error');
        return;
    }
    
    // Simple JavaScript formatting (basic)
    let formatted = input
        .replace(/\{/g, ' {\n  ')
        .replace(/\}/g, '\n}')
        .replace(/;/g, ';\n  ')
        .replace(/\n\s*\n/g, '\n')
        .trim();
    
    // Add syntax highlighting classes
    formatted = formatted
        .replace(/\b(function|const|let|var|if|else|for|while|return)\b/g, '<span class="keyword">$1</span>')
        .replace(/\b(console|document|window)\b/g, '<span class="object">$1</span>')
        .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>')
        .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');
    
    output.innerHTML = `<code>${formatted}</code>`;
    
    // Add formatting animation
    output.style.opacity = '0';
    setTimeout(() => {
        output.style.opacity = '1';
    }, 100);
    
    window.CAMBO.showNotification('Code formatted successfully!', 'success');
}

// Initialize micro-projects
function initializeMicroProjects() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Initialize color palette transition
    const colorPalette = document.getElementById('color-palette');
    if (colorPalette) {
        colorPalette.style.transition = 'transform 0.3s ease';
    }
    
    // Initialize animated element
    const animatedElement = document.getElementById('animated-element');
    if (animatedElement) {
        animatedElement.style.transition = 'all 0.3s ease';
    }
    
    // Initialize typography demo
    const demoText = document.getElementById('demo-text');
    if (demoText) {
        demoText.style.transition = 'all 0.3s ease';
    }
    
    // Initialize device frame
    const deviceFrame = document.getElementById('device-frame');
    if (deviceFrame) {
        deviceFrame.style.transition = 'all 0.3s ease';
    }
    
    console.log('Micro-projects initialized');
}

// Export functions for global access
window.MicroProjects = {
    generateRandomPalette,
    copyColor,
    triggerAnimation,
    selectAnswer,
    updateTypography,
    setDeviceSize,
    formatCode,
    restartQuiz
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMicroProjects();
});

// Listen for language changes to update project content
document.addEventListener('languageChanged', function(e) {
    // Update any dynamic content that needs language-specific updates
    const currentLang = e.detail.language;
    
    // Update quiz if needed
    if (currentLang === 'km') {
        // Could add Khmer translations for quiz questions here
    }
});
