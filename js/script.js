
let counterCP = 0;
let counerPL = 0;
function playGame(playerInput) {

    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);


    printMessage('Mój ruch to: ' + computerMove);
    let playerMove = getMoveName(playerInput);


    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);
    scoreCounter(counterCP, counerPL);

}

let rockBtt = document.getElementById('play-rock');
let paperBtt = document.getElementById('play-paper');
let scissorsBtt = document.getElementById('play-scissors');

rockBtt.addEventListener('click', function () {
    playGame(1)
});
paperBtt.addEventListener('click', function () {
    playGame(2)
});
scissorsBtt.addEventListener('click', function () {
    playGame(3);
});








