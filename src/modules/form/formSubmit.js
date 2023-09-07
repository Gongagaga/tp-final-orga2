import { resDisplay } from "./resForm";

export const formSubmit = () => {
    // Ajout de l'event 'submit'
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Récupère les valeurs
        let name = document.querySelector('#username').value;
        let email = document.querySelector('#email').value;

        // Affiche les informations (sauf le mot de passe)
        let infoName = `Name : ${name} `;
        let infoEmail = `Email : ${email}`
        // Affiche les valeurs de Name et Email
        resDisplay(infoName, infoEmail);

        // Réinitialise le form
        form.reset();
    });
}