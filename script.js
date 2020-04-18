const startPage = document.getElementById('wrap');
const startButton = document.getElementById('buttonStart');
const allButtons = document.querySelectorAll('.list__item');
const buttonSimple = document.getElementById('simple');
const buttonMedium = document.getElementById('medium');
const buttonHard = document.getElementById('hard');
const gameContainer = document.querySelectorAll('.conteiner');
const playWrapper = document.getElementById('divGame');


const chooseLevel = (elem) => {
    allButtons.forEach((item) => item.classList.remove("checked"));
    elem.target.classList.add("checked");
};

allButtons.forEach((item) => item.addEventListener("click", chooseLevel));

let numberOfCard;

function getNumberOfCard() {
    if (buttonSimple.classList.contains("checked")) {
      playWrapper.className = 'container__three-card';
      return numberOfCard = 3;
  }
    else if (buttonMedium.classList.contains("checked")) {
      playWrapper.className = 'container__six-card';
      return numberOfCard = 6;
  }
    else {
      playWrapper.className = 'container__nine-card';
      return numberOfCard = 9;
  };
};


function processOfGame() {

getNumberOfCard();

function createCards(number) {
  let randomCard = Math.floor(Math.random() * number);
	  for (let i = 0; i < number; i++ ) {
         let card = document.createElement('div');
         let cardBackside = document.createElement('div');
         let winnerCard = document.createElement('div');
         let loserCard = document.createElement('div');

      if (i === randomCard) {
  		cardBackside.className ='card__backside';
  		card.className = "card__container";
  		card.append(cardBackside);
  		playWrapper.append(card);
  		winnerCard.className = 'winner__card';
  		card.append(winnerCard); 
    }
 	  else {
  		cardBackside.className ='card__backside';
  		card.className = "card__container";
  		card.append(cardBackside);
  		playWrapper.append(card);
  		loserCard.className = 'looser__card';
  		card.append(loserCard); 
    }
  };
};

createCards(numberOfCard);

let getStart = () => { 
    playWrapper.style.display = 'none';
    startPage.style.display = '';
}

const flipCard = document.querySelectorAll('.card__container');

let flipCardOnClick = (elem) => {
    elem.addEventListener('click', function() {
      flipCard.forEach(() => {
        this.classList.add('click');
        flipCard.forEach((item) => item.addEventListener('click', getStart))
      });
    });
  };

flipCard.forEach(flipCardOnClick);

 };

let startGame = () => { 
    playWrapper.innerHTML = '';
    playWrapper.style.display = 'flex';
    startPage.style.display = 'none';
    processOfGame();
  };


startButton.addEventListener('click', startGame);
