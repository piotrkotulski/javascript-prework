
{
    const playGame = function (playerInput) {

        clearMessages();
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);


        printMessage('Mój ruch to: ' + computerMove);
        const playerMove = getMoveName(playerInput);


        printMessage('Twój ruch to: ' + playerMove);
        displayResult(computerMove, playerMove);
    }


    const rockBtt = document.getElementById('play-rock');
    const paperBtt = document.getElementById('play-paper');
    const scissorsBtt = document.getElementById('play-scissors');



    rockBtt.addEventListener('click', function () {
        playGame(1)
    });
    paperBtt.addEventListener('click', function () {
        playGame(2)
    });
    scissorsBtt.addEventListener('click', function () {
        playGame(3);
    });
}









