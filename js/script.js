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



