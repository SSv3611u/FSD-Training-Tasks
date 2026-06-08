// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

function handleContactSubmit(e) {
    e.preventDefault();
    
    // Form validation
    const form = e.target;
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    // Collect form data
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        category: document.getElementById('contactCategory').value,
        message: document.getElementById('contactMessage').value,
        timestamp: new Date().toISOString()
    };

    // Save to localStorage (for demo purposes)
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push(formData);
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    // Show success message
    showContactSuccessMessage();
    
    // Reset form
    form.reset();
    form.classList.remove('was-validated');
}

function showContactSuccessMessage() {
    const successMessage = document.getElementById('contactSuccessMessage');
    if (successMessage) {
        successMessage.classList.remove('d-none');
        successMessage.style.animation = 'slideInLeft 0.6s ease';
        
        // Scroll to message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Hide after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('d-none');
        }, 5000);
    }
}
