export const isStrongPassword = (password) => {
    // Calcul du score de force
    let score = 0;

    if (password.length >= 8) {
        score += 25;
    }

    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        score += 25;
    }

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        score += 25;
    }

    if (/[0-9]/.test(password)) {
        score += 25;
    }

    // Mettre à jour la valeur de la barre de progression
    let progressBar = document.querySelector('#passwordStrengthBar');
    progressBar.value = score;

    // Mettre à jour le texte de force du mot de passe
    let strengthText = document.querySelector('#passwordStrengthText');
    if (score >= 75) {
        strengthText.textContent = 'Fort';
    } else if (score >= 50) {
        strengthText.textContent = 'Moyen';
    } else {
        strengthText.textContent = 'Faible';
    }

    // Retourne true si le mot de passe est fort
    return score >= 75;
}
