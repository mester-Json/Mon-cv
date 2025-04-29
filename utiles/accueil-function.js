document.addEventListener("DOMContentLoaded", function () {
    emailjs.init('SGbl2DwG5zNA_zMMo');

    const emailForm = document.getElementById('emailForm');
    const modal = document.getElementById('myModal');
    const openModalLink = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const sendButton = emailForm.querySelector('input[type="submit"]');

    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const userEmail = document.getElementById('userEmail').value;
        const to = 'decubberjayson@gmail.com';
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!userEmail || !subject || !message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        emailjs.send('service_9mysr3b', 'template_sb0zwts', {
            to_email: to,
            subject: subject,
            message: message,
            from_email: userEmail,
        }).then(function (response) {
            console.log('E-mail envoyé avec succès!', response);
            modal.style.display = 'none';
        }, function (error) {
            console.log('Erreur lors de l\'envoi de l\'e-mail', error);
        });
    });

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

    // Gestion des cookies
    const cookiePopup = document.getElementById('cookiePopup');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');

    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (cookiesAccepted === null) {
        cookiePopup.style.display = 'flex';
        openModalLink.style.pointerEvents = 'none';
    } else if (cookiesAccepted === 'true') {
        openModalLink.style.pointerEvents = 'auto';
    } else {
        openModalLink.style.pointerEvents = 'none';
    }

    acceptCookies.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookiePopup.style.display = 'none';
        openModalLink.style.pointerEvents = 'auto';
    });

    declineCookies.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'false');
        cookiePopup.style.display = 'none';
        openModalLink.style.pointerEvents = 'none';
    });

    openModalLink.addEventListener('click', function (e) {
        if (localStorage.getItem('cookiesAccepted') !== 'true') {
            e.preventDefault();
            alert('Vous devez accepter les cookies pour accéder à cette fonctionnalité.');
        } else {
            modal.style.display = 'block';
        }
    });
});
