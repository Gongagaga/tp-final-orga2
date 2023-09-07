import { baseDisplay } from "./page/base";
import { temperatureDisplay } from "./page/temperature";
import { weightDisplay } from "./page/weight";

export const convertor = () => {
  const convertorDiv = document.createElement("div");
  convertorDiv.id = "convertor-container";

  document.querySelector("#main").appendChild(convertorDiv);

  temperatureDisplay();
  weightDisplay();
  baseDisplay();
};
