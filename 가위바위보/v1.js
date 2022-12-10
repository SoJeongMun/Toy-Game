const btn = document.querySelectorAll('button');
const userSelect = document.querySelector('.user');
const computerSelect = document.querySelector('.comp');
const winner = document.querySelector('.result');
const type = {
    '가위': 0,
    '바위': 1,
    '보': 2,
}
let winScore = 0;
let loseScore = 0;

const game = (user, computer) => {
    let msg;
    if(user === computer){
        msg = '무승부';
    } else {
        switch (user - computer){
            case 2:            
            case -1:
                msg = '승리';
                winScore++;
                break;
            case 1:            
            case -2:
                msg = '패배';
                loseScore++;
                break;
        }
    }
    show(winScore, loseScore, msg)
    
    if(loseScore == 10){
        alert('10번이나 패배한 당신에게 드리는 선물입니다. 확인하시겠습니까?');
        document.querySelector('#video').style.display = 'block';
    } else {
        document.querySelector('#video').style.display = 'none';
    }
}
const show = (winScore, loseScore, value) => {
    userSelect.textContent = winScore,
    computerSelect.textContent = loseScore,
    winner.textContent = value
}

const select = (event) => {
    const user = type[event.target.innerText];
    const computer = Math.floor(Math.random() * 3);
    game(user, computer);
}

btn.forEach((button) => {
    button.addEventListener('click', select);
})
