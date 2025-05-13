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
function displaySlider() {
  const divSlider = document.createElement("div");
  const slider = document.getElementById("slider");

  const slides = ["img/ballon.jpg", "img/logo.png"];


  for (let i=0;i<slides.length;i++){
    //console.log(slides[1]);
    divSlider.innerHTML =
      `<img src=${slides[0]}>
    `
  };


  
  slider.appendChild(divSlider)
  


}

setInterval("displaySlider(1)", 4000);
