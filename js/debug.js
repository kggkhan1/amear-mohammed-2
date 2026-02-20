// Debug script to check lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== LIGHTBOX DEBUG INFO ===');
    
    // Check if lightbox modal exists
    const lightboxModal = document.getElementById('lightboxModal');
    console.log('Main lightbox modal exists:', !!lightboxModal);
    
    // Check if simple journey lightbox exists
    const simpleLightbox = document.getElementById('simpleJourneyLightbox');
    console.log('Simple journey lightbox exists:', !!simpleLightbox);
    
    // Check journey gallery items
    const journeyItems = document.querySelectorAll('.journey-gallery .gallery-item');
    console.log('Journey gallery items found:', journeyItems.length);
    
    // Add click handlers if missing
    journeyItems.forEach((item, index) => {
        const currentOnClick = item.getAttribute('onclick');
        console.log(`Item ${index} onclick:`, currentOnClick);
        
        if (!currentOnClick || !currentOnClick.includes('openSimpleJourneyLightbox')) {
            item.setAttribute('onclick', `openSimpleJourneyLightbox(${index})`);
            console.log(`Fixed onclick for item ${index}`);
        }
    });
    
    console.log('=== END DEBUG INFO ===');
});