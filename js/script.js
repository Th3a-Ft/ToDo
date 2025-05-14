//Menu dropdown
const drop = document.getElementById("dropdown");
const btnDrop = document.getElementById("btnDrop");

btnDrop.addEventListener("click", function () {
  //si le display est différent de block modifier le css display par block
  if (drop.style.display != "block") {
    drop.style.display = "block"
  } else {
    //si le display est block modifier le css display par none
    drop.style.display = "none"
  };
})



//Slider
//Tableau où sont stockés les images
const slides = ["img/ballon.jpg", "img/random.jpg","img/random2.jpg"];
//Variable de l'index
let currentIndex=0;

//fonction pour afficher les images 
function displaySlider(index) {
  //récupère l'élément du HTML où afficher le slider
  const sliderImg=document.getElementById("sliderImg")
  //mise à jour de la source de l'image avec le chemin d'accès de l'image stocké ds le tableau
  sliderImg.src=slides[index];
}

//fonction pour afficher la slide suivante
function nextSlider(){
  //incrémente la var currentIndex de 1 et vérifie que currentIndex est dans les limites du tableau
  //ex si currentIndex=1 : (1+1) % 2 = 2 % 2 = 0 currentIndex devient = 0 car longueur du tableau est 2
  currentIndex=(currentIndex+1)% slides.length;
  displaySlider(currentIndex);
}

displaySlider(currentIndex);
//la fonction nextSLider est appelée toutes les 4sec
setInterval("nextSlider()", 4000);
