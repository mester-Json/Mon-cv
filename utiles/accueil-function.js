
emailjs.init('SGbl2DwG5zNA_zMMo');

document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const userEmail = document.getElementById('userEmail').value; // Récupérer l'email de l'utilisateur
    const to = 'decubberjayson@gmail.com'; // Ton adresse email préconfigurée
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Vérifie que l'email de l'utilisateur et les autres champs ne sont pas vides
    if (!userEmail || !subject || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Envoi de l'email à ton adresse avec les informations du formulaire
    emailjs.send('service_9mysr3b', 'template_sb0zwts', {
        to_email: to,        // Ton email (destinataire)
        subject: subject,    // Sujet de l'email
        message: message,    // Message de l'utilisateur
        from_email: userEmail, // L'email de l'utilisateur
    }).then(function (response) {
        console.log('E-mail envoyé avec succès!', response);
    }, function (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail', error);
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


//////////cookie

// Vérifier si l'utilisateur a déjà donné son consentement
if (!sessionStorage.getItem('cookiesAccepted')) {
    // Afficher la pop-up si le consentement n'est pas encore donné
    document.getElementById('cookiePopup').style.display = 'block';
}

// Lorsque l'utilisateur accepte les cookies
document.getElementById('acceptCookies').addEventListener('click', function () {
    sessionStorage.setItem('cookiesAccepted', 'true'); // Enregistre le consentement dans localStorage
    document.getElementById('cookiePopup').style.display = 'none'; // Ferme la pop-up
});

// Lorsque l'utilisateur refuse les cookies
document.getElementById('declineCookies').addEventListener('click', function () {
    sessionStorage.setItem('cookiesAccepted', 'false'); // Enregistre que l'utilisateur a refusé
    document.getElementById('cookiePopup').style.display = 'none'; // Ferme la pop-up
});


document.addEventListener("DOMContentLoaded", function () {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    // Si l'utilisateur n'a pas encore pris de décision
    if (cookiesAccepted === null) {
        // Afficher la pop-up RGPD
        document.getElementById('cookiePopup').style.display = 'flex';
        // Désactiver le lien jusqu'à ce que l'utilisateur accepte les cookies
        document.getElementById('openModal').style.pointerEvents = 'none';
    } else {
        // Si les cookies sont acceptés, activer le lien
        if (cookiesAccepted === 'true') {
            document.getElementById('openModal').style.pointerEvents = 'auto';
        } else {
            // Si les cookies sont refusés, désactiver le lien
            document.getElementById('openModal').style.pointerEvents = 'none';
        }
    }

    // Accepter les cookies
    document.getElementById('acceptCookies').addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');  // Sauvegarde l'acceptation des cookies
        document.getElementById('cookiePopup').style.display = 'none';  // Cache la pop-up
        document.getElementById('openModal').style.pointerEvents = 'auto';  // Active le clic
    });

    // Refuser les cookies
    document.getElementById('declineCookies').addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'false');  // Sauvegarde le refus des cookies
        document.getElementById('rgpdPopup').style.display = 'none';  // Cache la pop-up
        document.getElementById('openModal').style.pointerEvents = 'none';  // Désactive le clic
    });

    // Ouvrir la modal si les cookies sont acceptés
    document.getElementById('openModal').addEventListener('click', function (e) {
        if (localStorage.getItem('cookiesAccepted') !== 'true') {
            e.preventDefault();  // Si les cookies ne sont pas acceptés, désactive le clic
            alert('Vous devez accepter les cookies pour accéder à cette fonctionnalité.');
        } else {
            document.getElementById('myModal').style.display = 'block';  // Ouvre la modal si accepté
        }
    });

    // Fermer la modal
    document.getElementById('closeModal').addEventListener('click', function () {
        document.getElementById('myModal').style.display = 'none';  // Ferme la modal
    });
});
