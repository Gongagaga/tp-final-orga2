import { weightConvertor } from "../convertors/weightConvertor";

export const weightDisplay = () => {
  const convertorContainer = document.getElementById("convertor-container");
  const weightDiv = document.createElement("div"); // Créez un élément div
  weightDiv.setAttribute("x-show", "activeTab === 'weight'");

  weightDiv.innerHTML = `
        <h2>Convertisseur de poids</h2>
        
        <p>Convertisseur permettant de transformer : </p>
        <ul>
            <li>les Kg en Lb</li>
            <li>les Lb en Kg</li>
            <li>les Oz en Kg</li>
        </ul>

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
