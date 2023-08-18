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

// Зміна теми

const modeBtn = document.querySelector('.button-mode');
const field = document.querySelector('.main');
const title = document.querySelector('.title');

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

newGame(document.getElementById('game'), 8);