import { baseConvertor } from "../convertors/baseConvertor";
export const baseDisplay = () => {
  const converterContainer = document.getElementById("convertor-container");

  const baseDiv = document.createElement("div");
  baseDiv.setAttribute("x-show", "activeTab === 'bases'");

  baseDiv.innerHTML = `
        <h2>Convertisseur de bases</h2>

        <p>Convertisseur permettant de transformer : </p>
        <ul>
            <li>les Décimales en Binaire et Héxadécimales</li>
            <li>les Binaire en Décimales et Héxadécimales</li>
            <li>les Héxadécimales en Binaire et Décimales</li>
        </ul>
            
        <div class="input-container">
            <label for="input-number">Nombre :</label>
            <input type="text" id="input-number" placeholder="Entrez le nombre" required>
        </div>

        <div class="conversion-options">
            <label for="from-base">De la base :</label>
            <select id="from-base" required>
                <option value="decimal">Décimal</option>
                <option value="binary">Binaire</option>
                <option value="hexadecimal">Hexadécimal</option>
            </select>
            <br>
            <label for="to-base">Vers la base :</label>
            <select id="to-base" required>
                <option value="decimal">Décimal</option>
                <option value="binary">Binaire</option>
                <option value="hexadecimal">Hexadécimal</option>
            </select>
        </div>
        
        <div class="result-container">
            <p>Résultat :</p>
            <span id="base-result">--</span>
        </div>
    `;

  // Ajoutez le contenu à convertorContainer
  converterContainer.appendChild(baseDiv);

  // Appeler la fonction pour initialiser le convertisseur de bases
  baseConvertor();
};
