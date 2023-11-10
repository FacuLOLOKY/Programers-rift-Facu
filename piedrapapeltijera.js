const options = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'];

function getUserChoice() {
    let userChoice = prompt('Elige una opción:\n1. Piedra\n2. Papel\n3. Tijera\n4. Lagarto\n5. Spock');
    userChoice = parseInt(userChoice);
    
    while (userChoice < 1 || userChoice > 5 || isNaN(userChoice)) {
        alert('Opción no válida. Elige una opción válida.');
        userChoice = prompt('Elige una opción:\n1. Piedra\n2. Papel\n3. Tijera\n4. Lagarto\n5. Spock');
        userChoice = parseInt(userChoice);
    }
    
    return options[userChoice - 1];
}

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Empate';
    }

    const winningMoves = {
        'Piedra': ['Tijera', 'Lagarto'],
        'Papel': ['Piedra', 'Spock'],
        'Tijera': ['Papel', 'Lagarto'],
        'Lagarto': ['Papel', 'Spock'],
        'Spock': ['Piedra', 'Tijera']
    };

    return winningMoves[userChoice].includes(computerChoice) ? 'Ganaste' : 'Perdiste';
}

function displayResult(result) {
    console.log(result);
}

function playGame() {
    let keepPlaying = true;
    let score = { user: 0, computer: 0, ties: 0 };
    
    while (keepPlaying) {
        const userChoice = getUserChoice();
        const computerChoice = computerPlay();
        const result = compare(userChoice, computerChoice);
        
        displayResult(`Tú elegiste: ${userChoice}\nLa computadora eligió: ${computerChoice}\nResultado: ${result}`);
        
        if (result === 'Ganaste') {
            score.user++;
        } else if (result === 'Perdiste') {
            score.computer++;
        } else {
            score.ties++;
        }
        
        console.log(`Puntuación - Usuario: ${score.user}, Computadora: ${score.computer}, Empates: ${score.ties}`);
        
        keepPlaying = confirm('¿Quieres continuar jugando?');
    }
}

playGame();