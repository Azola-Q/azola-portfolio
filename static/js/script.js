document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function(e) { 
        e.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); 
    }); 
}); 

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

backToTopPrimary.addEventListener('click', () => { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}); 

backToTopSecondary.addEventListener('click', () => { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
});

// --- About Me toggle + typewriter ---
// Paste the code below exactly here
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('aboutToggle');
    const aboutContent = document.getElementById('aboutContent');
    const typewriterText = document.getElementById('typewriterText');

    if (!toggleButton || !aboutContent || !typewriterText) return;

    let originalText = typewriterText.textContent;
    typewriterText.textContent = '';

    toggleButton.addEventListener('click', () => {
        aboutContent.classList.toggle('open');

        if (aboutContent.classList.contains('open')) {
            toggleButton.textContent = 'Retract Bio';
            typeWriter(originalText);
        } else {
            toggleButton.textContent = 'Launch Bio';
            typewriterText.textContent = '';
        }
    });

    function typeWriter(text, i = 0) {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            setTimeout(() => typeWriter(text, i + 1), 30);
        }
    }
});
