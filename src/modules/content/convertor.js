import { baseDisplay } from "./page/base";
import { homeText } from "./page/home";
import { temperatureDisplay } from "./page/temperature";
import { weightDisplay } from "./page/weight";

export const convertor = () => {
  const convertorDiv = document.createElement("div");
  convertorDiv.id = "convertor-container";

  document.querySelector("#main").appendChild(convertorDiv);

  homeText();
  temperatureDisplay();
  weightDisplay();
  baseDisplay();
};
