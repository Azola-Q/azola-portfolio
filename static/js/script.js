// 🔹 Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 🔹 Back-to-Top Button
const backToTopBtn = document.getElementById('back-to-top-primary');

// Show/hide button with fade effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
        backToTopBtn.style.opacity = '1';
    } else {
        backToTopBtn.style.opacity = '0';
        setTimeout(() => { backToTopBtn.style.display = 'none'; }, 300);
    }
});

// Smooth scroll to top when clicked
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Optional: Add a hover glow effect
backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.8)';
});
backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.boxShadow = 'none';
});
