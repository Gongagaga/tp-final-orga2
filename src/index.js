import { convertor } from "./modules/content/convertor";
import "./style.css";
import "./modules/content/img/kiwi.png";
import { navbarDisplay } from "./modules/navbar/navbar";
import { footer } from "./modules/footer/footer";
import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.start();

navbarDisplay();

const title = document.createElement("div");
title.id = "titleKiwi";
title.innerHTML = `
        <img src="/modules/content/img/kiwi.png" alt="converti mon kiwi" width="75px" height="75px">
        <h1>Convertis mon kiwi !</h1>
        <img src="/modules/content/img/kiwi.png" alt="converti mon kiwi" width="75px" height="75px">
    `;

document.querySelector("#main").appendChild(title);

convertor();

footer();
