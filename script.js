const previewcontanier = document.querySelector('.popupcontainer');
const previewbox = previewcontanier.querySelectorAll('.model');
document.querySelectorAll('.works .workcard').forEach((workcard) => {
  workcard.onclick = () => {
    previewcontanier.style.display = 'flex';
    const name = workcard.getAttribute('data-name');
    previewbox.forEach((model) => {
      const target = model.getAttribute('data-target');
      if (name === target) {
        model.classList.add('active1');
      }
    });
  };
});
previewbox.forEach((materialicons) => {
  materialicons.querySelector('.w3-xxxlarge').onclick = () => {
    materialicons.classList.remove('active1');
    previewcontanier.style.display = 'none';
  };
});