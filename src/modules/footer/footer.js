export const footer = () => {
  let footer = document.createElement("div");
  footer.id = "footer";
  footer.innerHTML = `
    <h3>Copyright reserved : KiwiConvertor.Inc 2023</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorem laborum quas quaerat error! Dolorum minus sed consequatur quidem expedita dignissimos beatae nostrum ratione! Illo, nemo corrupti. Aliquam, modi. Pariatur!</p>
    <h4>Contact Us !</h4>
    <p>Mail : <a href="mailto:KiwiConvertor@kiwi.fr"> KiwiConvertor@kiwi.fr </a></p>
    <p>Phone : <a href="tel:+33 1 23 45 67 89"> +33 1 23 45 67 89 </a></p>
  `;

  document.body.appendChild(footer);
};
