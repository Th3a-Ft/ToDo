//Formulaire
const form = document.getElementById("newForm");

form.addEventListener("submit",function(event){
  //preventDefault() permet de ne pas recharger la page quand on submit le formulaire : le form n'est pas envoyé au serveur !
  event.preventDefault();
  //les données à récupérer pour l'affichage des nouvelles blagues
  const question=document.getElementById("questionMyJokes").value;
  const answer=document.getElementById("answerMyJokes").value;


  //Créer les card où sont affichées les jokes
  const cardMyJokes=document.createElement("div");
  cardMyJokes.innerHTML=`
  <p>${question}</p>
  <p>${answer}</p>
  `

  const displayJokes=document.getElementById("mesJokes");

  displayJokes.appendChild(cardMyJokes);



  //Permet de reset le formulaire une fois que les données sont envoyées
  this.reset();



})

