const computer = document.querySelectorAll('#computer');
let result = document.querySelectorAll('#winner').textContent;

document.querySelectorAll('button').forEach((e) => {
    e.addEventListener('click', () => {
        const user = event.target.textContent;
        const type = ['가위', '바위', '보'];
        const comp = type[Math.floor(Math.random() * 3)];
        const num = {
            가위: 0,
            바위: 1,
            보: -1
        }

        if(num[user] - num[comp] === 0){
            result = '무승부';
            console.log(result);
        } else if([1, -2].includes(num[user] - num[comp])){
            result = '승리';
            console.log(result);
        } else {
            result = '패배';
            console.log(result);
        }
    }) 
})