// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Load home page initially
    loadPage('home');
    
    // Set up hash-based navigation
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        loadPage(hash);
    }
    
    // Handle browser back/forward buttons
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            loadPage(hash);
        }
    });
});

// Page loading function
async function loadPage(pageId) {
    try {
        // Update URL hash
        window.location.hash = pageId;
        
        // Update active nav link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${pageId}`) {
                link.classList.add('active');
            }
        });
        
        // Load page content
        const response = await fetch(`pages/${pageId}.html`);
        const html = await response.text();
        document.getElementById('main-content').innerHTML = html;
        
        // Close mobile menu if open
        const mainNav = document.getElementById('mainNav');
        const navOverlay = document.getElementById('navOverlay');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            navOverlay.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Trigger animations on the new page
        setTimeout(() => {
            animateOnScroll();
        }, 100);
        
    } catch (error) {
        console.error('Error loading page:', error);
        document.getElementById('main-content').innerHTML = `
            <div class="container section-padding">
                <div class="section-title">
                    <h2>Page Not Found</h2>
                    <p class="section-subtitle">The requested page could not be loaded.</p>
                    <a href="#home" class="btn" onclick="loadPage('home')">Return to Home</a>
                </div>
            </div>
        `;
    }
}

// Alias for compatibility with existing code
function showPage(pageId) {
    loadPage(pageId);
}