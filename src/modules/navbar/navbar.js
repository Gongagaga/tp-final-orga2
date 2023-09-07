export const navbarDisplay = () => {
  // Créez ensuite l'élément avec l'ID "nav" si nécessaire
  const nav = document.createElement("div");
  nav.id = "nav";

  // Ajoutez "nav" au conteneur principal
  document.body.appendChild(nav);

  // Logo à gauche
  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";
  const logo = document.createElement("img");
  logo.src = "/modules/content/img/kiwi.png"; // Remplacez 'logo.png' par le chemin de votre logo
  logo.alt = "converti mon kiwi";
  logoContainer.appendChild(logo);
  logo.style.width = "40px";

  // Onglets à droite
  const tabsContainer = document.createElement("div");
  tabsContainer.className = "tabs-container";

  // Liens des convertors
  const temperatureTab = createTab("Température", "#temperature");
  const weightTab = createTab("Poids", "#weight");
  const baseTab = createTab("Bases", "#bases");

  tabsContainer.appendChild(temperatureTab);
  tabsContainer.appendChild(weightTab);
  tabsContainer.appendChild(baseTab);

  // Ajoutez les éléments à la barre de navigation
  nav.appendChild(logoContainer);
  nav.appendChild(tabsContainer);

  // Ajoutez la barre de navigation au conteneur prévu
  document.querySelector("#main").appendChild(nav);
};

function createTab(label, targetId) {
  const tab = document.createElement("a");
  tab.className = "tab";
  tab.textContent = label;
  tab.href = targetId;
  return tab;
}
