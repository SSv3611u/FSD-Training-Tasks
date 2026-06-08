// Main JavaScript for College Event Management System

// Events Data
const eventsData = [
    {
        id: 1,
        name: 'Technical Quiz Championship',
        category: 'Technical',
        date: 'March 15, 2024',
        time: '09:00 AM - 11:00 AM',
        venue: 'Lab Block - A101',
        description: 'Compete in our technical quiz championship and test your knowledge across various domains.',
        image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Technical+Quiz',
        participants: 150,
        difficulty: 'Intermediate'
    },
    {
        id: 2,
        name: 'Code Clash Hackathon',
        category: 'Technical',
        date: 'March 20-22, 2024',
        time: '10:30 AM - 04:30 PM',
        venue: 'Main Auditorium',
        description: 'A 48-hour hackathon where teams build innovative solutions to real-world problems.',
        image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Hackathon',
        participants: 200,
        difficulty: 'Advanced'
    },
    {
        id: 3,
        name: 'Poster Presentation Competition',
        category: 'Technical',
        date: 'March 25, 2024',
        time: '02:00 PM - 05:00 PM',
        venue: 'Convention Center',
        description: 'Present your research projects in poster format and compete for exciting prizes.',
        image: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=Poster+Presentation',
        participants: 80,
        difficulty: 'Intermediate'
    },
    {
        id: 4,
        name: 'Coding Contest',
        category: 'Technical',
        date: 'April 1, 2024',
        time: '11:00 AM - 02:00 PM',
        venue: 'Computer Lab - C202',
        description: 'Solve algorithmic problems and prove your coding skills in this competitive contest.',
        image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Coding+Contest',
        participants: 120,
        difficulty: 'Advanced'
    },
    {
        id: 5,
        name: 'Project Expo',
        category: 'Technical',
        date: 'April 5, 2024',
        time: '01:00 PM - 06:00 PM',
        venue: 'Campus Ground',
        description: 'Showcase your semester projects and network with industry professionals.',
        image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Project+Expo',
        participants: 250,
        difficulty: 'Beginner'
    },
    {
        id: 6,
        name: 'Annual Cultural Fest',
        category: 'Cultural',
        date: 'April 10-12, 2024',
        time: '06:00 PM - 10:00 PM',
        venue: 'Main Hall',
        description: 'Experience the diverse culture of our college through music, dance, and performances.',
        image: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=Cultural+Fest',
        participants: 500,
        difficulty: 'Beginner'
    },
    {
        id: 7,
        name: 'Sports Day Inauguration',
        category: 'Sports',
        date: 'April 15, 2024',
        time: '08:00 AM - 05:00 PM',
        venue: 'Sports Complex',
        description: 'Compete in various sports events and win medals for your department.',
        image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Sports+Day',
        participants: 400,
        difficulty: 'Intermediate'
    },
    {
        id: 8,
        name: 'Web Development Workshop',
        category: 'Workshop',
        date: 'April 8, 2024',
        time: '10:00 AM - 01:00 PM',
        venue: 'Tech Lab Building',
        description: 'Learn modern web development technologies from industry experts.',
        image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Web+Workshop',
        participants: 100,
        difficulty: 'Beginner'
    }
];

// Gallery Data
const galleryData = [
    {
        id: 1,
        title: 'Hackathon 2023',
        category: 'Technical',
        image: 'https://via.placeholder.com/400x400/667eea/ffffff?text=Hackathon+2023'
    },
    {
        id: 2,
        title: 'Cultural Fest Opening',
        category: 'Cultural',
        image: 'https://via.placeholder.com/400x400/f093fb/ffffff?text=Cultural+Opening'
    },
    {
        id: 3,
        title: 'Sports Day Finals',
        category: 'Sports',
        image: 'https://via.placeholder.com/400x400/764ba2/ffffff?text=Sports+Day'
    },
    {
        id: 4,
        title: 'Technical Workshop',
        category: 'Workshop',
        image: 'https://via.placeholder.com/400x400/667eea/ffffff?text=Workshop'
    },
    {
        id: 5,
        title: 'Prize Distribution',
        category: 'Technical',
        image: 'https://via.placeholder.com/400x400/f093fb/ffffff?text=Prize+Distribution'
    },
    {
        id: 6,
        title: 'Dance Performance',
        category: 'Cultural',
        image: 'https://via.placeholder.com/400x400/764ba2/ffffff?text=Dance+Performance'
    },
    {
        id: 7,
        title: 'Group Photo',
        category: 'Cultural',
        image: 'https://via.placeholder.com/400x400/667eea/ffffff?text=Group+Photo'
    },
    {
        id: 8,
        title: 'Relay Race',
        category: 'Sports',
        image: 'https://via.placeholder.com/400x400/f093fb/ffffff?text=Relay+Race'
    },
    {
        id: 9,
        title: 'Coding Session',
        category: 'Workshop',
        image: 'https://via.placeholder.com/400x400/764ba2/ffffff?text=Coding+Session'
    },
    {
        id: 10,
        title: 'Quiz Finals',
        category: 'Technical',
        image: 'https://via.placeholder.com/400x400/667eea/ffffff?text=Quiz+Finals'
    },
    {
        id: 11,
        title: 'Band Performance',
        category: 'Cultural',
        image: 'https://via.placeholder.com/400x400/f093fb/ffffff?text=Band+Performance'
    },
    {
        id: 12,
        title: 'Field Events',
        category: 'Sports',
        image: 'https://via.placeholder.com/400x400/764ba2/ffffff?text=Field+Events'
    }
];

// Utility function to render events
function renderEvents(events) {
    const container = document.getElementById('eventsContainer');
    if (!container) return;

    container.innerHTML = '';
    
    if (events.length === 0) {
        container.innerHTML = '<div class="col-12"><div class="alert alert-info">No events found matching your criteria.</div></div>';
        return;
    }

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'col-md-6 col-lg-4';
        eventCard.innerHTML = `
            <div class="card event-card border-0 h-100">
                <img src="${event.image}" class="card-img-top" alt="${event.name}">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">${event.category}</span>
                    <h5 class="card-title fw-bold">${event.name}</h5>
                    <p class="card-text text-muted small">
                        <i class="fas fa-calendar me-2"></i>${event.date}
                    </p>
                    <p class="card-text text-muted small">
                        <i class="fas fa-map-marker-alt me-2"></i>${event.venue}
                    </p>
                    <p class="card-text text-muted small">
                        <i class="fas fa-users me-2"></i>${event.participants} Participants
                    </p>
                    <button class="btn btn-primary btn-sm mt-3" onclick="showEventDetails(${event.id})">
                        View Details
                    </button>
                </div>
            </div>
        `;
        container.appendChild(eventCard);
    });
}

// Show event details in modal
function showEventDetails(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;

    document.getElementById('eventModalTitle').textContent = event.name;
    document.getElementById('eventModalBody').innerHTML = `
        <img src="${event.image}" class="img-fluid mb-3 rounded" alt="${event.name}">
        <p class="mb-2"><strong>Date:</strong> ${event.date}</p>
        <p class="mb-2"><strong>Time:</strong> ${event.time}</p>
        <p class="mb-2"><strong>Venue:</strong> ${event.venue}</p>
        <p class="mb-2"><strong>Category:</strong> <span class="badge bg-primary">${event.category}</span></p>
        <p class="mb-2"><strong>Difficulty:</strong> <span class="badge bg-info">${event.difficulty}</span></p>
        <p class="mb-2"><strong>Participants:</strong> ${event.participants}</p>
        <p class="mb-2"><strong>Description:</strong></p>
        <p>${event.description}</p>
    `;

    const modal = new bootstrap.Modal(document.getElementById('eventModal'));
    modal.show();
}

// Render gallery items
function renderGallery(items) {
    const container = document.getElementById('galleryContainer');
    if (!container) return;

    container.innerHTML = '';
    
    items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'col-md-6 col-lg-4';
        galleryItem.innerHTML = `
            <div class="gallery-item position-relative overflow-hidden rounded-12">
                <img src="${item.image}" alt="${item.title}" class="img-fluid">
                <div class="gallery-overlay">
                    <div class="text-center text-white">
                        <h6 class="fw-bold mb-2">${item.title}</h6>
                        <button class="btn btn-light btn-sm" onclick="openGalleryImage('${item.image}', '${item.title}')">
                            <i class="fas fa-expand me-1"></i>View
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(galleryItem);
    });
}

// Open gallery image in modal
function openGalleryImage(imageSrc, title) {
    document.getElementById('eventModalTitle').textContent = title;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('eventModalTitle').textContent = title;
    
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to elements
    const elements = document.querySelectorAll('.card, .highlight-card');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});
