const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input = document.querySelector('input');
const word = document.querySelector('span');
const btn = document.querySelector('button');

function correct(e){
    e.preventDefault();
    let preWord = word.innerText;
    if(preWord[preWord.length - 1] === input.value[0]) {
        h1.textContent = '성공입니다. 계속하세요:)'
        word.textContent = input.value;
    } else if(input.value.length === 0){
        alert('단어를 입력해주세요.');
    } else {
        h1.textContent = '틀렸습니다. 다시 도전해보세요:{';
    };
    input.value = '';
};
btn.addEventListener('click', correct);