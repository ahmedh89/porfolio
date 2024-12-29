// Växla aktiv klass i navigeringsmenyn
const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Smooth scroll till sektioner
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Visa "till toppen"-knapp vid scroll
const toTopButton = document.createElement('button');
toTopButton.innerText = '⬆';
toTopButton.className = 'to-top-button';
document.body.appendChild(toTopButton);

toTopButton.style.display = 'none';
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTopButton.style.display = 'block';
    } else {
        toTopButton.style.display = 'none';
    }
});

toTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
