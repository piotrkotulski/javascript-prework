function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function scoreCounter(scoreCp, scorePl){
    const computerScore = document.getElementById('computerScore');
    const playerScore = document.getElementById('playerScore');
    computerScore.innerHTML = scoreCp;
    playerScore.innerHTML = scorePl;
}

function increaseCounter (counterId){
    const element = document.getElementById(counterId);
    const score = parseInt(element.innerHTML, 10);
    element.innerHTML = (score || 0) + 1;
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
        printMessage('Ty wygrywasz!');
        increaseCounter("playerScore");
    } else if ((argComputerMove == 'nożyce' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')) {
        printMessage('Ja wygrywam!');
        increaseCounter("computerScore");
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Nic z tego mamy remis!');
    } else {
        printMessage('Graczu pamiętaj wybierz numer z zakresu 1-3!');
    }
}