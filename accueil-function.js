
emailjs.init('SGbl2DwG5zNA_zMMo');

document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_qjlaqoh', 'template_sb0zwts', {
        to_email: to,
        subject: subject,
        message: message
    }).then(function (response) {
        console.log('E-mail envoyé avec succès!', response);
    }, function (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail', error)
    });
});

const modal = document.getElementById('myModal');
const openModalLink = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const emailForm = document.getElementById('emailForm');
const sendButton = emailForm.querySelector('input[type="submit"]');

openModalLink.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

emailForm.addEventListener('submit', function (event) {
    event.preventDefault();

    modal.style.display = 'none';
});