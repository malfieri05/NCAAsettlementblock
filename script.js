// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('joinForm');
    const successMessage = document.getElementById('successMessage');

    // Countdown Timer to December 15, 2025
    function updateCountdown() {
        const now = new Date();
        const targetDate = new Date('December 15, 2025 23:59:59');
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            document.getElementById('countdown-timer').innerHTML = 'Target Reached!';
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const timerElement = document.getElementById('countdown-timer');
        timerElement.innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = '(' + value;
            } else if (value.length <= 6) {
                value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
            } else {
                value = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
        }
        e.target.value = value;
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable submit button and show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.querySelector('.button-text').style.display = 'none';
        submitButton.querySelector('.button-loading').style.display = 'inline';

        // Get form data
        const formData = new FormData(form);
        
        // Convert FormData to URLSearchParams for Google Apps Script
        const urlEncodedData = new URLSearchParams(formData).toString();
        
        // Send to Google Apps Script (also sends emails automatically)
        // Use mode: 'no-cors' to avoid CORS issues with Google Apps Script
        fetch(form.action, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: urlEncodedData
        })
        .then(() => {
            console.log('Form submitted successfully to Google Apps Script');
            
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset button state (keep disabled since form is hidden)
            submitButton.disabled = false;
            submitButton.querySelector('.button-text').style.display = 'inline';
            submitButton.querySelector('.button-loading').style.display = 'none';
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your application. Please try again or contact us directly at 925-759-0895.');
            
            // Re-enable button
            submitButton.disabled = false;
            submitButton.querySelector('.button-text').style.display = 'inline';
            submitButton.querySelector('.button-loading').style.display = 'none';
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navigation
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items (optional - remove if you want multiple open at once)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Mobile tooltip functionality - make info icons clickable
    const infoIcons = document.querySelectorAll('.info-icon');
    
    infoIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Close all other tooltips
            infoIcons.forEach(otherIcon => {
                if (otherIcon !== icon) {
                    otherIcon.classList.remove('active');
                }
            });
            
            // Toggle current tooltip
            this.classList.toggle('active');
        });
    });

    // Close tooltips when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.info-icon')) {
            infoIcons.forEach(icon => {
                icon.classList.remove('active');
            });
        }
    });
});

// Function to send data to your backend (implement as needed)
function sendToBackend(formData) {
    // Example using fetch API
    /*
    fetch('https://your-api-endpoint.com/submissions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // You can add additional success handling here
        // For example, sending to a CRM, email service, etc.
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your application. Please try again.');
    });
    */
    
    // Example: Send to Google Sheets, Airtable, or your preferred backend
    // This is just a placeholder - implement based on your infrastructure
}

// Optional: Add analytics tracking
function trackFormSubmission(formData) {
    // Google Analytics example
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submission', {
            'event_category': 'Block Application',
            'event_label': 'Join Form',
            'value': formData.claimSize
        });
    }
    
    // Facebook Pixel example
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: 'Block Application',
            value: formData.claimSize
        });
    }
}

// Note: Form submissions are automatically:
// 1. Saved to Google Sheets (spreadsheet ID: 1_Zbzs0ZJsizAq1zKC2xVIDsp64SnEEm2PbTKgKviOyM)
// 2. Emailed to: malfieri05@gmail.com and isaachodgins@outlook.com
// Handled by Google Apps Script web app

