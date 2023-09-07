import { temperatureConvertor } from "../convertors/temperatureConvertor";

export const temperatureDisplay = () => {
  const convertorContainer = document.getElementById("convertor-container");

  const temperatureDiv = document.createElement("div"); // Créez un élément div
  temperatureDiv.innerHTML = `
        <h2>Convertisseur de température</h2>
        
        <div class="input-container">
            <label for="temperature">Température :</label>
            <input type="number" id="temperature" placeholder="Entrez la température" required>
            <select id="unit" required>
                <option value="celsius">Celsius (°C)</option>
                <option value="fahrenheit">Fahrenheit (°F)</option>
                <option value="kelvin">Kelvin (K)</option>
            </select>
        </div>
        
        <div class="result-container">
            <p>Résultat :</p>
            <span id="result">--</span>
        </div>
    `;

  // Ajoutez le contenu à convertorContainer
  convertorContainer.appendChild(temperatureDiv);

  temperatureConvertor();
};
