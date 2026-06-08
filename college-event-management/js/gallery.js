// Gallery Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    renderGallery(galleryData);
    setupGalleryFilters();
});

function setupGalleryFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
        });
    });
}

function filterGallery(filter) {
    let filtered;
    
    if (filter === 'all') {
        filtered = galleryData;
    } else {
        filtered = galleryData.filter(item => item.category === filter);
    }
    
    renderGallery(filtered);
}

// Add hover effect animation
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
    });
});
