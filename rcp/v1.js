
const btn = document.querySelectorAll('button');
const userSelect = document.querySelectorAll('.user');
const computerSelect = document.querySelectorAll('.comp');
const winner = document.querySelectorAll('.result');
const result = ['가위', '바위', '보'];

const game = (user, computer) => {
    let msg;
    if(user === computer){
        msg = '무승부';
        alert(msg);
    } else {
        switch (user + computer){
            case '가위보':            
            case '보바위':            
            case '바위가위':
                msg = '승리';
                alert(msg);
                break;
            case '보가위':            
            case '가위바위':            
            case '바위보':
                msg = '패배';
                alert(msg);
                break;
        }
    }
    show(user, computer, msg)
}
const show = (user, computer, value) => {
    userSelect.textContent = user,
    computerSelect.textContent = computer,
    winner.textContent = value
    console.log(user, computer, value);
}

const select = (event) => {
    const user = event.target.innerText;
    const computer = result[Math.floor(Math.random() * 3)];
    game(user, computer);
}

btn.forEach((button) => {
    button.addEventListener('click', select);
})
