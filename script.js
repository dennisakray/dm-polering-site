// DM Polering Website - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Add animation to stats
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Update year in footer
    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').textContent = 
        document.querySelector('.footer-bottom p').textContent.replace('2025', currentYear);
    
    console.log('DM Polering website loaded successfully! 🚀');
});

