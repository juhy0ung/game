let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['가위', '바위', '보'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = '';
    
    if (playerChoice === computerChoice) {
        result = '비겼습니다!';
    } else if (
        (playerChoice === '가위' && computerChoice === '보') ||
        (playerChoice === '바위' && computerChoice === '가위') ||
        (playerChoice === '보' && computerChoice === '바위')
    ) {
        result = '승리했습니다!';
        playerScore++;
    } else {
        result = '패배했습니다!';
        computerScore++;
    }

    document.getElementById('result').innerHTML = 
        `당신: ${playerChoice}, 컴퓨터: ${computerChoice}<br>${result}`;
    
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}
