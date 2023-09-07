export const temperatureConvertor = () => {
  function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    let resultSpan = document.querySelector("#result");
    let result = "--";

    if (!isNaN(temperature)) {
      // Correction ici
      if (unit === "celsius") {
        result = `${temperature} °C équivaut à ${(
          (temperature * 9) / 5 +
          32
        ).toFixed(2)} °F`;
      } else if (unit === "fahrenheit") {
        result = `${temperature} °F équivaut à ${(
          ((temperature - 32) * 5) /
          9
        ).toFixed(2)} °C`;
      } else if (unit === "kelvin") {
        result = `${temperature} K équivaut à ${(temperature - 273.15).toFixed(
          2
        )} °C`;
      }
    }

    resultSpan.textContent = result;
  }
  const unitSelect = document.querySelector("#unit");
  const temperatureInput = document.querySelector("#temperature");
  temperatureInput.addEventListener("input", convertTemperature);
  unitSelect.addEventListener("change", convertTemperature);
};
