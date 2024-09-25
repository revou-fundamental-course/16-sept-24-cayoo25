const form = document.getElementById('myForm');
const nameSpan = document.getElementById('name');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('input-name').value;
    const birthDate = document.getElementById('date-input').value;
    const gender = document.getElementById('input-gender').value;
    const message = document.getElementById('input-message').value;

    nameSpan.textContent = name;

    document.getElementById('info-name').textContent = name;
    document.getElementById('info-date').textContent = birthDate;
    document.getElementById('info-gender').textContent = gender;
    document.getElementById('info-message').textContent = message;

    form.reset();
});

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.images img');
const navLinks = document.querySelectorAll('.navigations a');
let currentIndex = 0;

function showSlide(index) {
    if (index >= images.length) {
        currentIndex = 0; 
    } else if (index < 0) {
        currentIndex = images.length - 1; 
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100; 
    slides.style.transform = `translateX(${offset}%)`;
    
    navLinks.forEach((link, idx) => {
        link.classList.toggle('active', idx === currentIndex);
    });
}

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(index);
    });
});

setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000); 
