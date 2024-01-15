// Initialisation de Email.js avec vos identifiants API
emailjs.init('XjU4wG8jReDpbJ1MV');

// Gestion de la soumission du formulaire
document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtention des valeurs des champs
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Envoi de l'e-mail
    emailjs.send('service_qjlaqoh', 'template_sb0zwts', {
        to_email: to,
        subject: subject,
        message: message
    }).then(function (response) {
        console.log('E-mail envoyé avec succès!', response);
        // Vous pouvez ici ajouter du code pour afficher un message de confirmation
    }, function (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail', error)
        // Vous pouvez ici ajouter du code pour afficher un message d'erreur
    });
});

const modal = document.getElementById('myModal');
const openModalLink = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const emailForm = document.getElementById('emailForm');
const sendButton = emailForm.querySelector('input[type="submit"]');

// Ouvrir la modal lorsque le lien est cliqué
openModalLink.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Fermer la modal lorsque le bouton "Fermer" est cliqué
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fermer la modal si l'utilisateur clique en dehors de la modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Ajouter un gestionnaire d'événement de soumission du formulaire
emailForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ici, vous pouvez ajouter le code nécessaire pour envoyer l'e-mail.
    // Après l'envoi réussi de l'e-mail, vous pouvez fermer la modal

    // Fermer la modal
    modal.style.display = 'none';
});