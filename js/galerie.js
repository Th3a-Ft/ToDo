//API images
//Permet de fetch les img depuis l'API
async function fetchImg(nbreImg) {
    //Tant que le nbre limite n'est pas atteint, continuer à afficher les img
    for (let i = 0; i < nbreImg; i++) {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(reponse => reponse.json())
            .then(function (json) {
                //retourner seulement url de l'index 0
                displayImg(json[0].url);
            });
    }
}

//Afficher les img
//La fct prend en paramêtre json[0].url = imgCat
function displayImg(imgCat) {
    //Création de l'élément où afficher les img
    const divGalerie = document.createElement("div");
    const galerieImg = document.getElementById("galerie");

    //Appel des img dans le HTML 
    divGalerie.innerHTML =
        `<img src=${imgCat}>`
    galerieImg.appendChild(divGalerie);
}

fetchImg(5);


//Changement de l'affichage de la galerie
const displayMosaique = document.getElementById("mosaique");
const displayColonne = document.getElementById("colonne");

//Affichage en mosaique lorsque l'on clique sur l'image correspondante
displayMosaique.addEventListener("click", function () {
    galerie.style.flexDirection = "row";

});

//Affichage en colonne lorsque l'on clique sur l'image correspondante
displayColonne.addEventListener("click", function () {
    galerie.style.flexDirection = "column";

});


//Ajouter une image dans la galerie
const divFormImg = document.createElement("div");
const formImg = document.getElementById("formImg");
const openAddImg = document.getElementById("openAddImg")

//Affichage de l'espace formulaire quand on clique sur +
openAddImg.addEventListener("click", function () {
    if (formImg.style.display != "block") {
        formImg.style.display = "block"
    } else {
        formImg.style.display = "none"
    }
});



//Ajout de l'image suite à l'envoi du formulaire
const btnAddImg = document.getElementById("btnAddImg");

formImg.addEventListener("submit", function (event) {
    //Evite le rechargement auto de la page à l'envoi du form
    event.preventDefault();

    const urlImg = document.getElementById("urlImg").value;
    const divAddImg = document.createElement("div");
    const galerieImg = document.getElementById("galerie");

    //Ajout de la nvelle image dans la galerie
    divAddImg.innerHTML =
        `<button class="removeImg"><img src="img/removeImg.png"></button>
        <img src=${urlImg}>`

    galerieImg.appendChild(divAddImg);

    //Reset le champ du formulaire
    this.reset();

    //Incrémentation à chaque ajout d'image

    removeImg();
});

//Supprimer les éléments ajoutés (img ou jokes)
//Fct permettant de supprimer des images ajoutées
function removeImg() {
    //Sélectionne ts les éléments avec une classe removeImg --> l'id ne sélectionne que sur le 1er élément 
    const AllBtnRemove = document.querySelectorAll(".removeImg");

    //Pour chaque élément ayant la classe removeImg
    AllBtnRemove.forEach(btnRemove => {
        //Au clic de l'utilisateur supprimer le bloc parent du btn (donc la div)
        btnRemove.addEventListener("click", function () {
            btnRemove.parentNode.remove();
        })
    })
}


