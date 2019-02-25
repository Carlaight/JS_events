//Fonctionnalité 1 et 1 bis:

// 1. Find and store the element we want to listen to events on.
let footer = document.querySelector('footer');

// 2. Define the function that will respond to the event.
let nbOfClicks = 0;
let clickFooter = function(){
  console.log('Click!')
  nbOfClicks += 1
  console.log('Click numéro ' + nbOfClicks);
};
// 3. Add the event listener for the element and function
footer.addEventListener('Click' ,clickFooter);



//Fonctionnalité 2 :

// 1. Find and store the element we want to listen to events on.
let hamburger = document.querySelector('.navbar-toggler');
// console.log(hamburger);

let navbarHeader = document.getElementById('navbarHeader');
// console.log(navbarHeader);

// 2. Define the function that will respond to the event.
let navbarToggle = function(){
navbarHeader.classList.toggle('collapse');
};
// 3. Add the event listener for the element and function
hamburger.addEventListener('click', navbarToggle);



//Fonctionnalité 3 :

// 1. Find and store the element we want to listen to events on.
let card1 = document.getElementsByClassName('card')[0];
// console.log(card1.innerHTML);
let card1EditBtn = card1.getElementsByTagName('button')[1];
let card1Text = card1.getElementsByClassName('card-text')[0];

// // 2. Define the function that will respond to the event.
let inRed = function(){
card1Text.style.color = 'red';
};
// 3. Add the event listener for the element and function
card1EditBtn.addEventListener('click', inRed);



//Fonctionnalité 4 :

// 1. Find and store the element we want to listen to events on.
let card2 = document.getElementsByClassName('card')[1];
// console.log(card1.innerHTML);
let card2EditBtn = card2.getElementsByTagName('button')[1];
let card2Text = card2.getElementsByClassName('card-text')[0];

// 2. Define the function that will respond to the event.
let inGreenToggle = function(){
  if (card2Text.style.color === 'green')
  {
    card2Text.style.color = '' ;
  }
  else if (card2Text.style.color === '')
  {
  card2Text.style.color = 'green';
  };
  }
// 3. Add the event listener for the element and function
card2EditBtn.addEventListener('click', inGreenToggle);



//Fonctionnalité 5 :

// 1. Find and store the element we want to listen to events on.
let navbar = document.getElementsByClassName("navbar")[0];
// console.log(navbar)
let bootstrapLink = document.querySelector("link");
// console.log(bootstrapLink.getAttribute("href"));

// 2. Define the function that will respond to the event.
let bootstrapDisable = function()
  {
  if (bootstrapLink.attributes[1].value == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") 
  {
    bootstrapLink.setAttribute("href", "");
  }
  else if (bootstrapLink.attributes[1].value == "") 
  {
    bootstrapLink.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
  }
  }
// 3. Add the event listener for the element and function
navbar.addEventListener('dblclick', bootstrapDisable);



//Fonctionnalité 6 :

// 1. Find and store the element we want to listen to events on.
let cards = document.getElementsByClassName("card");
// console.log(cards);

// 2. Define the function that will respond to the event.
let cardToggle = function()
  {
  if (this.getElementsByClassName("card-text")[0].style.visibility == "hidden") 
  {
    this.getElementsByTagName("img")[0].style.width = "100%";
    this.getElementsByClassName("card-text")[0].style.visibility = "visible";
  }
  else {
    this.getElementsByTagName("img")[0].style.width = "20%";
    this.getElementsByClassName("card-text")[0].style.visibility = "hidden";
  }
}

// 3. Add the event listener for the element and function
for(var i = 0; i < cards.length; i++) 
{
  cards[i].addEventListener('mouseenter', cardToggle);
}


//Fonctionnalité 7 :

// 1. Find and store the element we want to listen to events on.
let buttonShuffle = document.getElementsByClassName("btn")[1];
// console.log(cardsShuffle)
let rowOfCards = document.getElementsByClassName("row")[1];

console.log(rowOfCards)
console.log(rowOfCards.lastElementChild.innerHTML)
console.log(rowOfCards.lastElementChild)

// 2. Define the function that will respond to the event.
let cardsShuffle = function() 
{
// manque le principal ahahahah
}

// 3. Add the event listener for the element and function
buttonShuffle.addEventListener('click', cardsShuffle);
