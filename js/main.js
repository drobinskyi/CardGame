import Card from './card.js'

function newGame(container, cardsCount) {
    let cardsNumberArray = [];
    let cardsArray = [];
    let firstCard = null;
    let secondCard = null;

    // Створення ігрового поля
    
    for (let i = 1; i <= cardsCount / 2; i++) {
        cardsNumberArray.push(i)
        cardsNumberArray.push(i)
    }

    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

    for (const cardNumber of cardsNumberArray) {
        cardsArray.push(new Card(container, cardNumber, flip))
    }

    // Перевірка карт

    function flip(card) {
        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number !== secondCard.number) {
                firstCard.open = false
                secondCard.open = false
                firstCard = null
                secondCard = null
            }
        }

        if (firstCard == null) {
            firstCard = card
        } else {
            if (secondCard == null) {
                secondCard = card  
            }
        }

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number === secondCard.number) {
                firstCard.success = true
                secondCard.success = true
                firstCard = null
                secondCard = null
            }
        }

        // Завершення гри

        if (document.querySelectorAll('.card.success').length === cardsNumberArray.length) {
            alert('You win!');

            container.innerHTML = '';
            cardsNumberArray = [];
            cardsArray = [];
            firstCard = null;
            secondCard = null;

            newGame(container, cardsCount)
        }
    }
};

newGame(document.getElementById('game'), 8);