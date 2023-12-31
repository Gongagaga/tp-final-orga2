export const homeText = () => {
  const convertorContainer = document.getElementById("convertor-container");
  let homeDiv = document.createElement("div");
  homeDiv.setAttribute("x-show", "activeTab === 'accueil'");
  homeDiv.setAttribute("x-transition:enter", "fade-enter");
  homeDiv.setAttribute("x-transition:leave", "fade-leave");

  let homeText = `   
        <h2>Bienvenue sur "Convertis mon kiwi" !</h2>
        <h2>Notre site simplifie vos conversions d'unités, que ce soit des kilogrammes, des décimales ou des températures.</h2>
        <h2>Ne cherchez plus, notre outil convivial est là pour rendre vos conversions aussi simples que de croquer dans un kiwi bien mûr.</h2>
        <h2>Rejoignez-nous pour simplifier votre quotidien en un seul clic.</h2>
    `;

  homeDiv.innerHTML = homeText;

  convertorContainer.appendChild(homeDiv);
};
