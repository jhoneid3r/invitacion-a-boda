// Wedding date - Set your wedding date here
const weddingDate = new Date('August 29, 2025 14:00:00').getTime();

// DOM elements
const countdownElements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

// Countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        // Wedding day has passed
        Object.values(countdownElements).forEach(element => {
            element.textContent = '00';
        });
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown display with animation
    updateElementWithAnimation(countdownElements.days, days);
    updateElementWithAnimation(countdownElements.hours, hours);
    updateElementWithAnimation(countdownElements.minutes, minutes);
    updateElementWithAnimation(countdownElements.seconds, seconds);
}

// Animate countdown number changes
function updateElementWithAnimation(element, newValue) {
    const currentValue = parseInt(element.textContent);
    if (currentValue !== newValue) {
        element.style.transform = 'scale(1.2)';
        element.style.color = '#F2EAD3';
        
        setTimeout(() => {
            element.textContent = newValue.toString().padStart(2, '0');
            element.style.transform = 'scale(1)';
            element.style.color = '';
        }, 150);
    }
}

// Add loading animation
function initLoadingAnimation() {
    const elements = document.querySelectorAll('.date-box, .location-box, .bible-verse');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Initialize loading animations
    initLoadingAnimation();
}); 