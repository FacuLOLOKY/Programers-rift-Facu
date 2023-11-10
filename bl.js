
let deck = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
deck = deck.concat(deck, deck, deck);
function dealCard() {
    return deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
}
function handValue(hand) {
    let value = 0;
    let aces = 0;
    for (let i = 0; i < hand.length; i++) {
        if (hand[i] === 'A') {
            value += 11;
            aces += 1;
        } else if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J') {
            value += 10;
        } else {
            value += parseInt(hand[i]);
        }
    }
    while (value > 21 && aces > 0) {
        value -= 10;
        aces -= 1;
    }

    return value;
}
let playerHand = [dealCard(), dealCard()];
let computerHand = [dealCard(), dealCard()];

alert('¡Bienvenido al Blackjack!');
alert('Tus cartas: ' + playerHand.join(', '));
alert('Cartas del crupier: ' + computerHand[0] + ', ?');
let playerBusted = false;
let playerChoice = prompt('¿queres otra carta? (s/n)');
while (playerChoice.toLowerCase() === 's' && !playerBusted) {
    playerHand.push(dealCard());
    alert('Tus cartas: ' + playerHand.join(', '));

    if (handValue(playerHand) > 21) {
        alert('¡Te has pasado de 21! Has perdido.');
        playerBusted = true;
    } else {
        playerChoice = prompt('¿queres otra carta? (s/n)');
    }
}
if (!playerBusted) {
    while (handValue(computerHand) < 17) {
        computerHand.push(dealCard());
    }
    alert('Cartas finales del crupier: ' + computerHand.join(', '));
    if (handValue(computerHand) > 21) {
        alert('¡El crupier se ha pasado de 21! ¡GANASTE!');
    } else if (handValue(playerHand) > handValue(computerHand)) {
        alert('¡GANASTE!');
    } else if (handValue(playerHand) < handValue(computerHand)) {
        alert('PERDISTE.');
    } else {
        alert('Empate.');
    }
}

console.log('Tus cartas: ', playerHand.join(', '));
console.log('Cartas del crupier: ', computerHand[0], '?');
playerHand.push(dealCard());
console.log('Tus cartas: ', playerHand.join(', '));
console.log('Total de puntos: ', handValue(playerHand));
if (handValue(playerHand) > 21) {
    console.log('¡Te has pasado de 21! Has perdido.');
  }
while (handValue(computerHand) < 17) {
    computerHand.push(dealCard());
    console.log('El crupier pide otra carta.');
    console.log('Cartas del crupier: ', computerHand.join(', '));
    console.log('Total de puntos del crupier: ', handValue(computerHand));
  }
if (handValue(computerHand) > 21) {
    console.log('¡El crupier se ha pasado de 21! ¡Has ganado!');
  } else if (handValue(playerHand) > handValue(computerHand)) {
    console.log('¡Has ganado!');
  } else if (handValue(playerHand) < handValue(computerHand)) {
    console.log('Has perdido.');
  } else {
    console.log('Empate.');
  }
