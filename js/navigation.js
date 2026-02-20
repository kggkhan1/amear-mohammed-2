// Navigation logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    const navOverlay = document.getElementById('navOverlay');
    const servicesDropdown = document.getElementById('servicesDropdown');
    const peaceCommissionerDropdown = document.getElementById('peaceCommissionerDropdown');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        mainNav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
        
        // Toggle body scroll when menu is open
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking overlay
    navOverlay.addEventListener('click', function() {
        mainNav.classList.remove('active');
        navOverlay.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
        
        // Close any open dropdowns
        document.querySelectorAll('.dropdown.active').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
    
    // Mobile dropdown toggle for both dropdowns
    servicesDropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (e.target.closest('a')) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        }
    });
    
    peaceCommissionerDropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (e.target.closest('a')) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        }
    });
    
    // Close dropdown when clicking outside on desktop
    document.addEventListener('click', function(e) {
        if (window.innerWidth > 768 && 
            !e.target.closest('.dropdown') && 
            document.querySelector('.dropdown.active')) {
            document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 8px 30px rgba(0, 77, 38, 0.12)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.boxShadow = '0 5px 30px rgba(0, 77, 38, 0.08)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        }
    });
    
    // Close menu when window is resized above 768px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            navOverlay.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
            
            // Close any open dropdowns
            document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});