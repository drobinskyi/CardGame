let cardsCount = 6;
let cardsNumberArray = [];

function newGame(cardsCount) {
    for (let i = 1; i <= cardsCount / 2; i++) {
        cardsNumberArray.push(i)
        cardsNumberArray.push(i)
    }

    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)
    console.log(cardsNumberArray);
};

newGame(cardsCount);