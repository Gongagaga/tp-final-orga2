import { formSubmit } from "./formSubmit";
import { pswrdShow } from "./passwordShow";
import { isStrongPassword } from "./password-checkup";

export const formCreate = () => {

// Créer la balise 'form'
let form = document.createElement('form');
    form.id = 'form';

// Créer les balises 'fieldset' et 'legend'
let fieldset = document.createElement('fieldset');

let legend = document.createElement('legend');
    legend.innerText = "Create Profile";

// Créer label + input 'name'
let nameDiv = document.createElement('div');

let labelUsername = document.createElement('label');
    labelUsername.textContent = 'Username : ';

let inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.id = 'username';
    inputUsername.name = 'username';
    inputUsername.required = true;
    inputUsername.placeholder = "Username";

nameDiv.appendChild(labelUsername);
nameDiv.appendChild(inputUsername);

// Créer label + input 'email'
let emailDiv = document.createElement('div');

let labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email : ';

let inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.id = 'email';
    inputEmail.name = 'email';
    inputEmail.required = true;
    inputEmail.placeholder = "Email";

emailDiv.appendChild(labelEmail);
emailDiv.appendChild(inputEmail);

// Créer label + input 'password'
let labelPswrd = document.createElement('label');
    labelPswrd.textContent = 'Password : ';

let inputPswrd = document.createElement('input');
    inputPswrd.type = 'password';
    inputPswrd.id = 'password';
    inputPswrd.name = 'password';
    inputPswrd.required = true;
    inputPswrd.placeholder = "Password";
    inputPswrd.addEventListener('input', function () {
        isStrongPassword(this.value);
    });

// Créer la barre de progression de sécurité du 'password'
let passwordStrengthBar = document.createElement('progress');
    passwordStrengthBar.id = 'passwordStrengthBar';
    passwordStrengthBar.max = '100'; // Valeur maximale de la barre de progression
    passwordStrengthBar.value = '0'; // Valeur initiale de la barre de progression

    // Créer la barre de progression de sécurité du 'password'
let strengthText = document.createElement('progresstext');
    strengthText.id = 'passwordStrengthText';
    strengthText.innerText ='Faible';


let passwordContainer = document.createElement('div');
    passwordContainer.id = 'passwordContainer'
// Créez un div pour contenir l'icône SVG et l'input du mot de passe
let passwordSvgContainer = document.createElement('div');
    passwordSvgContainer.id = 'passwordSvgContainer'

// Créez un div pour l'icône SVG qui affiche ou non le mdp
let svgContainer = document.createElement('div');
svgContainer.id = "eyeIcon";
svgContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#873e23"  width="25" height="25"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" /></svg>';
svgContainer.onclick = pswrdShow;


// Créer input 'submit'
let btnSubmit = document.createElement('button');
    btnSubmit.type = 'submit';
    btnSubmit.innerText = 'Submit';

let btn = document.createElement('div');
    btn.id = "btnSubmit";
    btn.class = "CTA submit-form"

btn.appendChild(btnSubmit);


passwordContainer.appendChild(labelPswrd);
passwordContainer.appendChild(inputPswrd);
passwordSvgContainer.appendChild(passwordContainer);
passwordSvgContainer.appendChild(svgContainer);

// Ajout du fieldset au form
form.appendChild(fieldset);

// Ajout des éléments au fieldset
fieldset.appendChild(legend);
fieldset.appendChild(nameDiv);
fieldset.appendChild(document.createElement('br')); // Saut de ligne

fieldset.appendChild(emailDiv);
fieldset.appendChild(document.createElement('br')); // Saut de ligne

fieldset.appendChild(passwordSvgContainer);
fieldset.appendChild(passwordStrengthBar);
fieldset.appendChild(document.createElement('br')); // Saut de ligne

fieldset.appendChild(strengthText);
fieldset.appendChild(document.createElement('br')); // Saut de ligne

fieldset.appendChild(btn);

// Ajout du form au document
document.querySelector('#main').appendChild(form);

// Appelle de la function de Submit
formSubmit();

}
