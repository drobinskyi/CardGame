import Card from './card.js'

const numberOfCards = 12;
const container = document.getElementById('game');

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
            youWin(cardsNumberArray, cardsArray, firstCard, secondCard);
        }
    }
};

// Повідомлення "You win!"

function youWin(cardsNumberArray, cardsArray, firstCard, secondCard) {
    const message = document.querySelector('.you-win');
    const reload = document.querySelector('.reload');
    message.innerHTML = `<h2 class="win-message">You win!</h2>`

    reload.innerHTML = `
        <button class="button-new-game">
            <i class="fa-solid fa-rotate fa-spin"></i>    
        </button>
    `

    // Запуск нової гри

    const newGameBtn = document.querySelector('.button-new-game');
    newGameBtn.addEventListener('click', () => {
        container.innerHTML = '';
        message.innerHTML = '';
        reload.innerHTML = '';
        cardsNumberArray = [];
        cardsArray = [];
        firstCard = null;
        secondCard = null;

        newGame(container, numberOfCards);
    })
}

// Зміна теми

const modeBtn = document.querySelector('.button-mode');
const field = document.querySelector('.main');
const title = document.querySelector('h1');

const mode = localStorage.getItem("mode");
if (mode) {
    modeBtn.classList.add(mode);
    field.classList.add(mode);
    title.classList.add(mode);
}

// Зміна іконки в кнопці

function buttonsIcon() {
    if (document.querySelector('.dark-mode')) {
        modeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`
    } else {
        modeBtn.innerHTML =  `<i class="fa-solid fa-moon"></i>`
    }
}

modeBtn.addEventListener('click', () => {
    modeBtn.classList.toggle('dark-mode');
    field.classList.toggle('dark-mode');
    title.classList.toggle('dark-mode');

    buttonsIcon();

    const mode = localStorage.getItem('mode');
    if (mode === 'dark-mode') {
        localStorage.setItem('mode', '')
    } else {
        localStorage.setItem('mode', 'dark-mode')
    }
});

buttonsIcon();
newGame(container, numberOfCards);