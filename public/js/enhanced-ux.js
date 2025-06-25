// Enhanced UX interactions for KFZ-Service Memmo

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
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

    // Add loading states to buttons
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 2000);
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .feature-card, .stats-card').forEach(el => {
        observer.observe(el);
    });

    // Emergency contact highlight
    const emergencyContact = document.querySelector('[href="tel:+4915757057121"]');
    if (emergencyContact) {
        emergencyContact.addEventListener('mouseenter', function() {
            this.classList.add('emergency-pulse');
        });
        emergencyContact.addEventListener('mouseleave', function() {
            this.classList.remove('emergency-pulse');
        });
    }

    // Add click analytics for important buttons
    const trackableButtons = document.querySelectorAll('[href^="tel:"], [href^="mailto:"], [href*="whatsapp"], [href*="maps"]');
    trackableButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.href.includes('tel:') ? 'phone_call' :
                          this.href.includes('mailto:') ? 'email' :
                          this.href.includes('whatsapp') ? 'whatsapp' :
                          this.href.includes('maps') ? 'directions' : 'click';
            
            // You can integrate with Google Analytics or other tracking here
            console.log(`User action: ${action}`, this.href);
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Service hours indicator
    function updateServiceHours() {
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const hour = now.getHours();
        
        const isOpen = day >= 1 && day <= 5 && hour >= 8 && hour < 18; // Monday-Friday 8-18
        const statusElements = document.querySelectorAll('.service-status');
        
        statusElements.forEach(element => {
            if (isOpen) {
                element.textContent = 'Jetzt geöffnet';
                element.className = 'service-status text-green-600 font-medium';
            } else {
                element.textContent = 'Geschlossen';
                element.className = 'service-status text-red-600 font-medium';
            }
        });
    }

    updateServiceHours();
    setInterval(updateServiceHours, 60000); // Update every minute

    // Form validation enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('border-red-500');
                    isValid = false;
                } else {
                    field.classList.remove('border-red-500');
                }
            });

            if (!isValid) {
                e.preventDefault();
                const firstError = this.querySelector('.border-red-500');
                if (firstError) {
                    firstError.focus();
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    });

    // Add typing effect to hero subtitle if not already present
    const typewriterElement = document.querySelector('.typewrite');
    if (typewriterElement) {
        const textArray = JSON.parse(typewriterElement.getAttribute('data-type'));
        const period = parseInt(typewriterElement.getAttribute('data-period')) || 2000;
        
        let loopNum = 0;
        let txt = '';
        let isDeleting = false;

        function type() {
            const i = loopNum % textArray.length;
            const fullTxt = textArray[i];

            if (isDeleting) {
                txt = fullTxt.substring(0, txt.length - 1);
            } else {
                txt = fullTxt.substring(0, txt.length + 1);
            }

            typewriterElement.innerHTML = txt;

            let typeSpeed = 200;

            if (isDeleting) {
                typeSpeed /= 2;
            }

            if (!isDeleting && txt === fullTxt) {
                typeSpeed = period;
                isDeleting = true;
            } else if (isDeleting && txt === '') {
                isDeleting = false;
                loopNum++;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }
});

// Handle view transitions
document.addEventListener('astro:page-load', function() {
    // Reinitialize any components that need it after navigation
    console.log('Page loaded with view transitions');
});

// Performance monitoring
window.addEventListener('load', function() {
    if ('performance' in window) {
        const loadTime = performance.now();
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
    }
});

// Error handling for better UX
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e);
    // You could show a user-friendly error message here
});

// Service Worker registration for offline capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
