import Card from './card.js'

let cardsCount = 6;
let cardsNumberArray = [];
let cardsArray = [];

function newGame(container, cardsCount) {
    for (let i = 1; i <= cardsCount / 2; i++) {
        cardsNumberArray.push(i)
        cardsNumberArray.push(i)
    }

    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

    for (const cardNumber of cardsNumberArray) {
        cardsArray.push(new Card(container, cardNumber, flip))
    }

    function flip() {
        console.log('flip');
    }
    console.log(cardsNumberArray);
};

newGame(document.getElementById('game'), cardsCount);