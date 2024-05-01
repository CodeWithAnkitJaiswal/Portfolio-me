// Smooth scrolling for navigation links
document.querySelectorAll('.slide a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// menu

function show() {
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const list = document.getElementById('list');
    open.classList.toggle('active');
    close.classList.toggle('active');
    list.classList.toggle('active');
}

// to open contact page from button
function openContact() {
    window.location.href = 'contact.html';
}

function openProject() {
    window.location.href = 'projects.html';
}

// Highlight current section in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach((section, i) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[i].classList.add('active');
        }
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello, I'm Ankit Jaiswal"; // Your text here
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            const char = text.charAt(index);
            if (window.innerWidth < 480 && char === ',') {
                // Break the text at commas only when device width is less than 700px
                document.getElementById("typewriter-text").innerHTML += ",<br>";
            } else {
                document.getElementById("typewriter-text").innerHTML += char;
            }
            index++;
            setTimeout(typeWriter, 150); // Adjust typing speed here (milliseconds)
        } else {
            document.getElementById("blinking-cursor").style.display = "inline-block"; // Show blinking cursor
        }
    }

    setTimeout(typeWriter, 1000); // Delay the start of typing animation
});