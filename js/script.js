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