const result = document.querySelector('h1');
const userSelect = document.querySelector('.user');
const compSelect = document.querySelector('.comp');
const TYPE = { '가위': 0, '바위': 1, '보': -1, }
let score = { win: 0, lose: 0,}
document.querySelectorAll('button').forEach((e) => {
    e.addEventListener('click', (event) => {
        const btn = event.target.textContent;
        const user = TYPE[btn];
        const comp = Math.floor(Math.random() * 3);
        if(user === comp){
            result.textContent = '무승부:P';
        } else if([1, -2].includes(user - comp)){
            result.textContent = '승리XD';
            ++score.win;
        } else {
            result.textContent = '패배:(';
            ++score.lose;
        }
        userSelect.textContent = score.win;
        compSelect.textContent = score.lose;
        if(score.lose === 10){
            alert('컴퓨터에게 10번이나 진 당신에게 도착한 선물입니다. 확인하시겠습니까?');
            document.querySelector('#video').style.display = 'block';
        } else {
            document.querySelector('#video').style.display = 'none';
        };
    });
});