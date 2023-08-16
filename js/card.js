let card;
let _open = false,
    _success = false

function newCard(container, number, action) {
    card = document.createElement('div');
    card.classList.add('card');
    card.textContent = number;

    card.addEventListener('click', () => {
        if (_open == false && _success == false) {
            card.classList.add('open');
            _open = true
            action(card)
        }
    })
    container.append(card);

}

function flip(card) {
    console.log(card);
}

newCard(document.getElementById('game'), 4, flip);
