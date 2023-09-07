export const navbarDisplay = () => {
  // Créez ensuite l'élément avec l'ID "nav" si nécessaire
  const nav = document.createElement("div");
  nav.id = "nav";

  // Ajoutez "nav" au conteneur principal
  document.body.appendChild(nav);

  // Structure HTML du menu
  const menuHTML = `
    <div class="logo-container">
        <a href="javascript:void(0)" @click="activeTab = 'accueil'"><img src="/modules/content/img/kiwi.png" alt="converti mon kiwi" style="width: 40px;"></a>
    </div>
    <div class="tabs-container">
        <a class="tab" href="javascript:void(0)" @click="activeTab = 'temperature'">Température</a>
        <a class="tab" href="javascript:void(0)" @click="activeTab = 'weight'">Poids</a>
        <a class="tab" href="javascript:void(0)" @click="activeTab = 'bases'">Bases</a>
    </div>
  `;

  // Utilisez innerHTML pour définir la structure HTML du menu
  nav.innerHTML = menuHTML;

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
