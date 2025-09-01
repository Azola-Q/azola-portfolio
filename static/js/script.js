document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function(e) { e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); }); });
// Show/hide back-to-top buttons based on scroll position
const backToTopPrimary = document.getElementById('back-to-top-primary');
const backToTopSecondary = document.getElementById('back-to-top-secondary');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { 
    backToTopPrimary.style.display = 'block';
    backToTopSecondary.style.display = 'block';
  } else { backToTopPrimary.style.display = 'none';
           backToTopSecondary.style.display = 'none'; } });
// Smooth scroll to top when either button is clicked
backToTopPrimary.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
backToTopSecondary.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });});

const toggleButton = document.getElementById('aboutToggle');
const aboutContent = document.getElementById('aboutContent');
const typewriterText = document.getElementById('typewriterText');
let originalText = typewriterText.textContent;

// Clear content initially for typewriter
typewriterText.textContent = '';

toggleButton.addEventListener('click', () => {
    aboutContent.classList.toggle('open');

    // Update button text
    if (aboutContent.classList.contains('open')) {
        toggleButton.textContent = 'Retract Bio';
        typeWriter(originalText);
    } else {
        toggleButton.textContent = 'Launch Bio';
        typewriterText.textContent = ''; // reset when retracting
    }
});

// Typewriter function
function typeWriter(text, i = 0) {
    if (i < text.length) {
        typewriterText.textContent += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 30); // Adjust typing speed
    }
}
