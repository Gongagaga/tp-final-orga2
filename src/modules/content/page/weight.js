import { weightConvertor } from "../convertors/weightConvertor";

export const weightDisplay = () => {
  const convertorContainer = document.getElementById("convertor-container");

  const weightDiv = document.createElement("div"); // Créez un élément div
  weightDiv.innerHTML = `
        <h1>Convertisseur de poids</h1>
        
        <div class="input-container">
            <label for="weight">Poids :</label>
            <input type="number" id="weight" placeholder="Entrez le poids" required>
            <select id="weight-unit" required>
                <option value="kg">Kilogrammes (kg)</option>
                <option value="lb">Livres (lb)</option>
                <option value="oz">Onces (oz)</option>
            </select>
        </div>
        
        <div class="result-container">
            <p>Résultat :</p>
            <span id="weight-result">--</span>
        </div>
    `;

  // Ajoutez le contenu à convertorContainer
  convertorContainer.appendChild(weightDiv);

  // Appeler la fonction pour initialiser le convertisseur de poids
  weightConvertor();
};
