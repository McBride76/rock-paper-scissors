let wins = 0;
let losses = 0;
let ties = 0;

const rps = ['Rock', 'Paper', 'Scissors'];

rock.addEventListener('click', () => {
    let randNum = Math.floor(Math.random() * 3);
    userChoiceImg.src = "rock3.png";
    userChoiceTxt.textContent = "You chose rock"
    userChoiceContainer.classList.add('show');
    let cpuChoice = rps[randNum];
    switch (cpuChoice) {
        case 'Rock':
            cpuChoiceImg.src = "rock3.png";
            cpuChoiceTxt.textContent = "CPU chose rock";
            cpuChoiceContainer.classList.add('show');
            dispResult.textContent = "You both chose rock, its a tie";
            ties++;
            break;
        case 'Paper':
            cpuChoiceImg.src = "paper.png";
            cpuChoiceTxt.textContent = "CPU chose paper";
            cpuChoiceContainer.classList.add('show');
            dispResult.textContent = "Paper beats rock, you lose";
            losses++;
            dispCpuScore.textContent = losses;
            break;
        case 'Scissors':
            cpuChoiceImg.src = "scissors2.png";
            cpuChoiceTxt.textContent = "CPU chose scissors";
            cpuChoiceContainer.classList.add('show');
            dispResult.textContent = "Rock beats scissors, you win!";
            wins++;
            dispUserScore.textContent = wins;
            break;
    }
})

paper.addEventListener('click', () => {
    let randNum = Math.floor(Math.random() * 3);
    userChoiceImg.src = "paper.png";
    userChoiceTxt.textContent = "You chose paper";
    userChoiceContainer.classList.add('show');
    let cpuChoice = rps[randNum];
    switch (cpuChoice) {
        case 'Rock':
            cpuChoiceImg.src = "rock3.png";
            cpuChoiceTxt.textContent = "CPU chose rock";
            cpuChoiceContainer.classList.add('show');
            dispResult.textContent = "Paper beats rock, you win!";
            wins++;
            dispUserScore.textContent = wins;
            break;
        case 'Paper':
            cpuChoiceImg.src = "paper.png";
            cpuChoiceTxt.textContent = "CPU chose paper";
            cpuChoiceContainer.classList.add('show');
            dispResult.textContent = "You both chose paper, its a tie";
            ties++;
            break;
        case 'Scissors':
            cpuChoiceImg.src = "scissors2.png";
            cpuChoiceTxt.textContent = "CPU chose scissors";
            cpuChoiceContainer.classList.add('show');
            dispResult.textContent = "Scissors beats paper, you lose";
            losses++;
            dispCpuScore.textContent = losses;
            break;
    }
})

scissors.addEventListener('click', () => {
    let randNum = Math.floor(Math.random() * 3);
    userChoiceImg.src = "scissors2.png";
    userChoiceTxt.textContent = "You chose scissors";
    userChoiceContainer.classList.add('show');
    let cpuChoice = rps[randNum];
    switch (cpuChoice) {
        case 'Rock':
            cpuChoiceImg.src = "rock3.png";
            cpuChoiceTxt.textContent = "CPU chose rock";
            cpuChoiceContainer.classList.add('show');
            dispResult.textContent = "Rock beats scissors, you lose";
            losses++;
            dispCpuScore.textContent = losses;
            break;
        case 'Paper':
            cpuChoiceImg.src = "paper.png";
            cpuChoiceTxt.textContent = "CPU chose paper";
            cpuChoiceContainer.classList.add('show');
            dispResult.textContent = "Scissors beats paper, you win!";
            wins++;
            dispUserScore.textContent = wins;
            break;
        case 'Scissors':
            cpuChoiceImg.src = "scissors2.png";
            cpuChoiceTxt.textContent = "CPU chose scissors";
            cpuChoiceContainer.classList.add('show');
            dispResult.textContent = "You both chose scissors, its a tie";
            ties++;
            dispCpuScore.textContent = losses;
            break;
    }
})

resetBtn.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    ties = 0;
    highestStreak = 0;
    cpuChoiceContainer.classList.remove('show');
    userChoiceContainer.classList.remove('show');
    dispResult.textContent = "";
    dispCpuScore.textContent = wins;
    dispUserScore.textContent = wins;
})

statsBtn.addEventListener('click', () => {
    statsPage.classList.toggle('show');
    let closeStats = statsPage.querySelector('#closeStats');
    closeStats.addEventListener('click', () => {
        statsPage.classList.remove('show');
    })
    statsPage.querySelector('#dispWins').textContent = wins;
    //let dispWins = statsPage.querySelector('#dispWins');
    statsPage.querySelector('#dispLosses').textContent = losses;
    statsPage.querySelector('#dispTies').textContent = ties;
    if (wins === 0 && losses === 0) {
        statsPage.querySelector('#dispWinLoss').textContent = 0;
    } else {
        statsPage.querySelector('#dispWinLoss').textContent = (wins/losses).toFixed(2);
    }
    statsPage.querySelector('#dispTotalGames').textContent = wins+losses+ties;
})