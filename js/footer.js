// ===== FOOTER FUNCTIONALITY =====

// Initialize footer functionality
function initializeFooter() {
    initializeNewsletterSubscription();
    initializeFooterInteractions();
    initializeSmoothScrolling();
    initializeFooterAnimations();
    
    console.log('Footer functionality initialized');
}

// Newsletter subscription functionality
function initializeNewsletterSubscription() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmission);
    }
}

function handleNewsletterSubmission(e) {
    e.preventDefault();
    
    const emailInput = e.target.querySelector('.newsletter-input');
    const submitBtn = e.target.querySelector('.newsletter-btn');
    const email = emailInput.value.trim();
    
    // Validate email
    if (!isValidEmail(email)) {
        window.CAMBO.showNotification('Please enter a valid email address', 'error');
        emailInput.focus();
        return;
    }
    
    // Show loading state
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Subscribing...</span>';
    submitBtn.disabled = true;
    
    // Simulate API call (replace with actual newsletter service)
    setTimeout(() => {
        // Success simulation
        window.CAMBO.showNotification('🎉 Successfully subscribed! Welcome to the community!', 'success');
        
        // Reset form
        emailInput.value = '';
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
        
        // Add subscriber to local storage (for demo purposes)
        addSubscriber(email);
        
        // Show thank you message
        showThankYouMessage();
        
    }, 2000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function addSubscriber(email) {
    let subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
    }
}

function showThankYouMessage() {
    const newsletterContent = document.querySelector('.newsletter-content');
    const originalContent = newsletterContent.innerHTML;
    
    newsletterContent.innerHTML = `
        <div class="thank-you-message">
            <div class="thank-you-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h4>Thank You for Subscribing!</h4>
            <p>You'll receive updates about my latest projects, blog posts, and tech insights.</p>
            <button class="btn btn-outline" onclick="restoreNewsletterForm()">
                <i class="fas fa-arrow-left"></i> Back to Newsletter
            </button>
        </div>
    `;
    
    // Store original content for restoration
    newsletterContent.dataset.originalContent = originalContent;
}

function restoreNewsletterForm() {
    const newsletterContent = document.querySelector('.newsletter-content');
    const originalContent = newsletterContent.dataset.originalContent;
    
    if (originalContent) {
        newsletterContent.innerHTML = originalContent;
        // Re-initialize the form
        initializeNewsletterSubscription();
    }
}

// Footer interactions
function initializeFooterInteractions() {
    // Make social links more interactive
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click analytics (demo)
        link.addEventListener('click', function() {
            const platform = this.title || 'Unknown';
            console.log(`Social link clicked: ${platform}`);
            
            // Add click effect
            this.style.transform = 'translateY(-3px) scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1.1)';
            }, 150);
        });
    });
    
    // Make footer links more interactive
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // If it's an internal link (starts with #), handle smooth scrolling
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    
                    // Add highlight effect to target section
                    targetElement.classList.add('pulse-highlight');
                    setTimeout(() => {
                        targetElement.classList.remove('pulse-highlight');
                    }, 2000);
                }
            }
        });
    });
    
    // Make tech stack items interactive
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('click', function() {
            const tech = this.title;
            const techInfo = {
                'HTML5': 'The foundation of web content - semantic markup and modern web standards',
                'CSS3': 'Styling and animations - making the web beautiful and responsive',
                'JavaScript': 'The language of interactivity - bringing websites to life',
                'React': 'Component-based UI library - building modern user interfaces'
            };
            
            window.CAMBO.showNotification(`${tech}: ${techInfo[tech] || 'Modern web technology'}`, 'info');
            
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'translateY(0) scale(1)';
            }, 300);
        });
    });
    
    // Contact item interactions
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        const contactValue = item.querySelector('.contact-value');
        if (contactValue && contactValue.tagName === 'A') {
            contactValue.addEventListener('click', function() {
                const contactType = item.querySelector('.contact-label').textContent;
                console.log(`Contact clicked: ${contactType}`);
            });
        }
    });
}

// Smooth scrolling for footer links
function initializeSmoothScrolling() {
    // Back to top functionality (if needed)
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.title = 'Back to Top';
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Back to top click handler
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Add click animation
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
}

// Footer animations
function initializeFooterAnimations() {
    // Animate footer elements on scroll
    const footerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animation for footer sections
                if (entry.target.classList.contains('footer-section')) {
                    const links = entry.target.querySelectorAll('.footer-link');
                    links.forEach((link, index) => {
                        setTimeout(() => {
                            link.style.opacity = '1';
                            link.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe footer elements
    const footerElements = document.querySelectorAll('.footer-brand, .footer-section, .footer-newsletter');
    footerElements.forEach(element => {
        footerObserver.observe(element);
        
        // Prepare links for stagger animation
        if (element.classList.contains('footer-section')) {
            const links = element.querySelectorAll('.footer-link');
            links.forEach(link => {
                link.style.opacity = '0';
                link.style.transform = 'translateY(20px)';
                link.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            });
        }
    });
    
    // Animate social links on footer visibility
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
}

// Newsletter analytics (demo)
function trackNewsletterInteraction(action, data = {}) {
    console.log('Newsletter interaction:', action, data);
    
    // In a real application, you would send this to your analytics service
    // Example: Google Analytics, Mixpanel, etc.
}

// Footer utility functions
function getSubscriberCount() {
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    return subscribers.length;
}

function isSubscribed(email) {
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    return subscribers.includes(email);
}

// Export functions for global access
window.FooterFunctions = {
    restoreNewsletterForm,
    getSubscriberCount,
    isSubscribed,
    trackNewsletterInteraction
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFooter();
});

// Listen for language changes to update footer content
document.addEventListener('languageChanged', function(e) {
    // Update any dynamic footer content if needed
    const currentLang = e.detail.language;
    
    // Update newsletter form placeholder
    const newsletterInput = document.querySelector('.newsletter-input');
    if (newsletterInput) {
        const placeholder = currentLang === 'en' ? 
            'Enter your email address' : 
            'បញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នក';
        newsletterInput.placeholder = placeholder;
    }
});
