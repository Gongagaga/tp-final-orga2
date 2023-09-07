export const weightConvertor = () => {
  const weightInput = document.getElementById("weight");
  const unitSelect = document.getElementById("weight-unit");
  const resultSpan = document.getElementById("weight-result");

  const convertWeight = () => {
    const weight = parseFloat(weightInput.value);
    const unit = unitSelect.value;
    let result = "--";

    if (!isNaN(weight)) {
      if (unit === "kg") {
        result = `${weight} kg équivaut à ${(weight * 2.20462).toFixed(2)} lb`;
      } else if (unit === "lb") {
        result = `${weight} lb équivaut à ${(weight / 2.20462).toFixed(2)} kg`;
      } else if (unit === "oz") {
        result = `${weight} oz équivaut à ${(weight / 35.274).toFixed(2)} kg`;
      }
    }
    resultSpan.textContent = result;
  };
  weightInput.addEventListener("input", convertWeight);
  unitSelect.addEventListener("change", convertWeight);
};
