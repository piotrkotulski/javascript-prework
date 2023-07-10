function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function scoreCounter(scoreCp, scorePl){
    let cp = document.getElementById('computerScore');
    let pl = document.getElementById('playerScore');
    cp.innerHTML = scoreCp;
    pl.innerHTML = scorePl;
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
        counerPL++
    } else if ((argComputerMove == 'nożyce' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')) {
        printMessage('Ja wygrywam!');
        counterCP++
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Nic z tego mamy remis!');
    } else {
        printMessage('Graczu pamiętaj wybierz numer z zakresu 1-3!');
    }
}