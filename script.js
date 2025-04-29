const nbreJokes = 5;

//Permet de consommer l'API
async function fetchJokes() {
  //Indique le nbre de fois recharger l'API et donc le nbre de fois afficher blaque
  for (let i = 0; i < nbreJokes; i++) {
    const reponse = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr");
    const jokes = await reponse.json();  //await permet d'attendre le résultat de l'API avant de continuer la fct 
    console.log(jokes.setup);
    console.log(jokes.delivery);


    //Affichage de l'API dans le html
    //créer un élément div 
    const dadJokes = document.createElement("div");
    //on sélectionnne l'élement feed du HTML où sera affiché le feed
    const cardFeed = document.getElementById("feed");

    //affiche les élements dans la section dadjokes dans le html
    dadJokes.innerHTML =
      `<h3>Dads Jokes Feed</h3>
      <p>${jokes.setup}</p>
      <p>${jokes.delivery}</p>`

    //ajoute l'élément enfant dadJokes à l'élément parent cardFeed
    cardFeed.appendChild(dadJokes);

  }
}

fetchJokes();