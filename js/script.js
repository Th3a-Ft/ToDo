const nbreJokes = 3;

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
      `<p>${jokes.setup}</p>
      <p>${jokes.delivery}</p>
      <hr>`

    //ajoute l'élément enfant dadJokes à l'élément parent cardFeed
    cardFeed.appendChild(dadJokes);

  }
}

fetchJokes();



//Menu dropdown
const drop = document.getElementById("dropdown");
const btnDrop = document.getElementById("btnDrop");

btnDrop.addEventListener("click", function () {
  //si le display est différent de block modifier le css display par block
  if (drop.style.display != "block") {
    drop.style.display = "block"
  }else{
  //si le display est block modifier le css display par none
    drop.style.display = "none"
  };
})


























/*
//Formulaire
const form = document.getElementById("newForm");

form.innerHTML =
  `<h3>Formulaire</h3>
  <label name="question">Question</label>
  <textarea type="text" id="question" name="question"></textarea>
  <label name="answer">Answer</label>
  <textarea type="text" id="answer" name="answer"></textarea>
  <button type="submit">Envoyer le message</button>`





//Faire une card où la réponse au formulaire est affichée

const myDadJokes = document.createElement("div");
const cardJokes = document.getElementById("mesJokes")


const question = document.getElementById("question").value
const answer = document.getElementById("answer").value

const myJokes = {
  question: question,
  answer: answer
};


cardJokes.innerHTML =
  `<p>${myJokes.question}</p>
    <p>${myJokes.answer}</p>`

console.log(myJokes.question);
console.log(myJokes.answer);
console.log(myJokes);*/