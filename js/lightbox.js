// Complete Lightbox System - WORKING VERSION
document.addEventListener('DOMContentLoaded', () => {
    // Lightbox elements
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    
    // Define gallery data globally
    window.cricketGallery = [
        {
            src: 'images/ccc1.jpeg',
            title: 'Cricket Coaching',
            desc: 'Castleknock Cricket Club - Professional coaching sessions'
        },
        {
            src: 'images/ccc2.jpeg',
            title: 'Team Training',
            desc: 'Castleknock Cricket Club - Team practice and drills'
        },
        {
            src: 'images/ccc3.jpeg',
            title: 'Tournament Wins',
            desc: 'Castleknock Cricket Club - Celebrating tournament victories'
        },
        {
            src: 'images/ccc4.jpeg',
            title: 'Youth Development',
            desc: 'Castleknock Cricket Club - Youth cricket programs'
        },
        {
            src: 'images/ccc5.jpeg',
            title: 'Community Events',
            desc: 'Castleknock Cricket Club - Community engagement activities'
        },
        {
            src: 'images/ccc6.jpeg',
            title: 'School Programs',
            desc: 'Castleknock Cricket Club - School cricket initiatives'
        },
        {
            src: 'images/ccc7.jpeg',
            title: 'Achievements',
            desc: 'Castleknock Cricket Club - Awards and recognition'
        },
        {
            src: 'images/ccc8.jpeg',
            title: 'Junior Sports',
            desc: 'Castleknock Cricket Club - Junior cricket development'
        },
        {
            src: 'images/ccc9.jpeg',
            title: 'Progress Tracking',
            desc: 'Castleknock Cricket Club - Monitoring player development'
        },
        {
            src: 'images/ccc10.jpeg',
            title: 'Success Stories',
            desc: 'Castleknock Cricket Club - Celebrating success stories'
        }
    ];
    
    window.journeyGallery = [
        {
            src: 'images/about1.jpeg',
            title: 'Achievement Milestone',
            desc: 'From Dublin roots to community leadership - Celebrating achievements in community service'
        },
        {
            src: 'images/about-2.jpeg',
            title: 'Recognition Ceremony',
            desc: 'From Dublin roots to community leadership - Being recognized for community contributions'
        },
        {
            src: 'images/about-3.jpeg',
            title: 'Partnership Agreement',
            desc: 'From Dublin roots to community leadership - Building partnerships for community development'
        },
        {
            src: 'images/about-4.jpeg',
            title: 'Community Leadership',
            desc: 'From Dublin roots to community leadership - Leading community initiatives and programs'
        }
    ];
    
    // Global variables
    window.currentGallery = [];
    window.currentIndex = 0;
    
    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);
    
    // Close lightbox when clicking outside
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
    
    // Initialize functions as global
    window.openLightbox = openLightbox;
    window.openJourneyLightbox = openJourneyLightbox;
});

// Open cricket lightbox
function openLightbox(index) {
    window.currentGallery = window.cricketGallery;
    window.currentIndex = index;
    showLightbox();
}

// Open journey lightbox
function openJourneyLightbox(index) {
    window.currentGallery = window.journeyGallery;
    window.currentIndex = index;
    showLightbox();
}

// Show lightbox with current image
function showLightbox() {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    
    if (!window.currentGallery || window.currentGallery.length === 0) {
        console.error('No gallery data available');
        return;
    }
    
    const currentImage = window.currentGallery[window.currentIndex];
    
    // Set image and text
    lightboxImg.src = currentImage.src;
    lightboxTitle.textContent = currentImage.title;
    lightboxDesc.textContent = currentImage.desc;
    
    // Show lightbox
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('Lightbox opened:', currentImage);
}

// Close lightbox
function closeLightbox() {
    const lightboxModal = document.getElementById('lightboxModal');
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Previous image
function prevImage() {
    if (!window.currentGallery || window.currentGallery.length === 0) return;
    
    window.currentIndex = (window.currentIndex - 1 + window.currentGallery.length) % window.currentGallery.length;
    showLightbox();
}

// Next image
function nextImage() {
    if (!window.currentGallery || window.currentGallery.length === 0) return;
    
    window.currentIndex = (window.currentIndex + 1) % window.currentGallery.length;
    showLightbox();
}