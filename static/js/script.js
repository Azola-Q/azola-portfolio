// Smooth scrolling for anchor links with href starting '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Back-to-top button logic with fade-in/out
const backToTop = document.getElementById('back-to-top-primary');

function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 100) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}
window.addEventListener('scroll', toggleBackToTop);

// Initial check on load
toggleBackToTop();

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Scroll-triggered animations using IntersectionObserver
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animatedElements.forEach(el => observer.observe(el));
