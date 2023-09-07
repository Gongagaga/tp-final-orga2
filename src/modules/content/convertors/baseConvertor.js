export const baseConvertor = () => {
  const inputNumber = document.getElementById("input-number");
  const fromBaseSelect = document.getElementById("from-base");
  const toBaseSelect = document.getElementById("to-base");
  const resultSpan = document.getElementById("base-result");

  function convertBase() {
    const inputValue = inputNumber.value.trim();
    const fromBase = fromBaseSelect.value;
    const toBase = toBaseSelect.value;
    let result = "--";

    if (inputValue) {
      if (fromBase === "decimal") {
        if (toBase === "binary") {
          result = parseInt(inputValue).toString(2);
        } else if (toBase === "hexadecimal") {
          result = parseInt(inputValue).toString(16).toUpperCase();
        } else {
          result = inputValue;
        }
      } else if (fromBase === "binary") {
        if (toBase === "decimal") {
          result = parseInt(inputValue, 2).toString(10);
        } else if (toBase === "hexadecimal") {
          result = parseInt(inputValue, 2).toString(16).toUpperCase();
        } else {
          result = inputValue;
        }
      } else if (fromBase === "hexadecimal") {
        if (toBase === "decimal") {
          result = parseInt(inputValue, 16).toString(10);
        } else if (toBase === "binary") {
          result = parseInt(inputValue, 16).toString(2);
        } else {
          result = inputValue.toUpperCase();
        }
      }
    }

    resultSpan.textContent = result;
  }

  inputNumber.addEventListener("input", convertBase);
  fromBaseSelect.addEventListener("change", convertBase);
  toBaseSelect.addEventListener("change", convertBase);
};
