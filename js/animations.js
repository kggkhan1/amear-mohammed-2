// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

// Initialize animations on page load
window.addEventListener('load', () => {
    // Trigger initial animation check
    animateOnScroll();
    
    // Add scroll listener for animations
    window.addEventListener('scroll', animateOnScroll);
});

// FAQ toggle functionality
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqAnswer = faqItems[index].querySelector('.faq-answer');
    const faqIcon = faqItems[index].querySelector('.faq-icon i');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-answer').forEach((answer, i) => {
        if (i !== index && answer.classList.contains('active')) {
            answer.classList.remove('active');
            document.querySelectorAll('.faq-icon i')[i].className = 'fas fa-chevron-down';
        }
    });
    
    // Toggle current FAQ item
    if (faqAnswer.classList.contains('active')) {
        faqAnswer.classList.remove('active');
        faqIcon.className = 'fas fa-chevron-down';
    } else {
        faqAnswer.classList.add('active');
        faqIcon.className = 'fas fa-chevron-up';
    }
}