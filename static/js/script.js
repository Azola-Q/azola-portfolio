document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show/hide back-to-top buttons based on scroll position
const backToTopPrimary = document.getElementById('back-to-top-primary');
const backToTopSecondary = document.getElementById('back-to-top-secondary');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopPrimary.style.display = 'block';
        backToTopSecondary.style.display = 'block';
    } else {
        backToTopPrimary.style.display = 'none';
        backToTopSecondary.style.display = 'none';
    }
});

// Smooth scroll to top when either button is clicked
backToTopPrimary.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
backToTopSecondary.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
