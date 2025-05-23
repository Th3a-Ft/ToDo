//Feed blague
  //Permet de consommer l'API
async function fetchJokes(nbreJokes) {
  //Indique le nbre de fois recharger l'API et donc le nbre de fois afficher blaque
  for (let i = 0; i < nbreJokes; i++) {
    //Récupère les données de l'API
    fetch("https://v2.jokeapi.dev/joke/Any?lang=fr")
      //Then() execute fct une fois que promesse est résolue
      //Transforme la réponse en json
      .then(reponse => reponse.json())
      //Affiche les données json de l'API
      .then(function (json) {
        //Execute la fct displayJokes avec comme paramètre la question (setup) et la réponse (delivery)
        displayJokes(json.setup, json.delivery);
      })

  }
}

fetchJokes(3);

function displayJokes(question, answer) {
  //Affichage de l'API dans le html
  //créer un élément div 
  const dadJokes = document.createElement("div");
  //on sélectionnne l'élement feed du HTML où sera affiché le feed
  const cardFeed = document.getElementById("displayFeed");

  //affiche les élements dans la section dadjokes dans le html
  dadJokes.innerHTML =
    `<p>${question}</p>
        <p>${answer}</p>
        <hr>`

  //ajoute l'élément enfant dadJokes à l'élément parent cardFeed
  cardFeed.appendChild(dadJokes);
}

//Btn reload blagues
function reloadJokes() {
  const btnReloadJokes = document.getElementById("reloadJokes");
  const dadJokes = document.getElementById("displayFeed");
  btnReloadJokes.addEventListener("click", function () {
    dadJokes.innerHTML =
      ``
      fetchJokes(3);
  }); 
}

reloadJokes();
