document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // --- A. Theme Toggle Logic ---
    function enableDarkMode() {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }

    function enableLightMode() {
        html.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }

    // Load saved preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light') {
        enableLightMode();
    } else if (savedTheme === 'dark') {
        enableDarkMode();
    } else if (prefersDark) {
        enableDarkMode();
    } else {
        enableDarkMode(); // Default to dark if no strong preference
    }

    themeToggle.addEventListener('click', () => {
        if (html.getAttribute('data-theme') === 'dark') {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    // --- B. Scroll-based Animations (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of element is visible
    });

    // Select all elements that need animation
    const animatedElements = document.querySelectorAll('.slide-up, .fade-in, .timeline-item, .project-card');
    
    animatedElements.forEach(el => {
        // Add the class defining the hidden initial state
        el.classList.add('initial-hidden'); 
        observer.observe(el);
    });
});
