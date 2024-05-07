
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


///////
/////// Menu burger
///////
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();