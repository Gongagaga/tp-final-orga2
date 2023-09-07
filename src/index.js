import { convertor } from "./modules/content/convertor";
// import { formCreate } from "./modules/form/formCreate";
import "./style.css";
import "./modules/content/img/kiwi.png";

// formCreate()
const title = document.createElement("div");
title.id = "titleKiwi";
title.innerHTML = `
        <img src="/modules/content/img/kiwi.png" alt="converti mon kiwi" width="75px">
        <h1>Convertis mon kiwi !</h1>
        <img src="/modules/content/img/kiwi.png" alt="converti mon kiwi" width="75px">
    `;

document.querySelector("#main").appendChild(title);

convertor();
