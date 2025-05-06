
/**
 * La var bntMenuDrop permet de select ts les éléments de classe menuDropdown du HTML
 * addEventListener = sur la var bntMenuDrop il va se passer tel événement au click de la souris
 **/
const btnMenuDrop = document.getElementById("menuDropdown");
const contentMenuDrop = document.getElementById("menuDropContent");


//Fct permettant d'afficher le content du sous-menu quand elle est appelée
function displayDrop() {
  contentMenuDrop.classList.toggle("show");
  console.log("Affichage console");
}

//Fct permet d'exécuter la fct au click
btnMenuDrop.addEventListener("click", function () {
  displayDrop();
});

//Lorsqu'on clique n'importe où et que le menu est ouvert, le menu se ferme
window.onclick= function () {
  if (contentMenuDrop.classList.toggle("show")) {
    contentMenuDrop.classList.remove("show");
    console.log("Remove");
  }
};


