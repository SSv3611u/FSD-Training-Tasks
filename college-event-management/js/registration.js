// Registration Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistrationSubmit);
    }
});

function handleRegistrationSubmit(e) {
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
        studentName: document.getElementById('studentName').value,
        rollNumber: document.getElementById('rollNumber').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        branch: document.getElementById('branch').value,
        gender: document.getElementById('gender').value,
        events: Array.from(document.getElementById('eventSelection').selectedOptions).map(o => o.value),
        experience: document.getElementById('experience').value,
        teamSize: document.getElementById('teamSize').value,
        additionalInfo: document.getElementById('additionalInfo').value,
        timestamp: new Date().toISOString()
    };

    // Save to localStorage (for demo purposes)
    const registrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    registrations.push(formData);
    localStorage.setItem('eventRegistrations', JSON.stringify(registrations));

    // Show success message
    showSuccessMessage();
    
    // Reset form
    form.reset();
    form.classList.remove('was-validated');
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
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

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Mobile number validation
function validateMobile(mobile) {
    const re = /^[0-9+\s\-\(\)]{10,}$/;
    return re.test(mobile);
}
