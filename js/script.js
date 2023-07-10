function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }else if (argMoveId == 2) {
        return  'papier';
    }else if (argMoveId == 3) {
        return  'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult (argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
        printMessage('Ty wygrywasz!');
    } else if ((argComputerMove == 'nożyce' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')) {
        printMessage('Ja wygrywam!');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Nic z tego mamy remis!');
    } else {
        printMessage('Graczu pamiętaj wybierz numer z zakresu 1-3!');
    }
}


    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);


    printMessage('Mój ruch to: ' + computerMove);
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    let playerMove = getMoveName(playerInput);


    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);






