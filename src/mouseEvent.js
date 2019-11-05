import './createKeyboard.js';
let keyBoard = document.getElementById('keyboard');

keyBoard.addEventListener('click', (event) => {
    let target = event.target;
    let className = target.id;
    if (event.target.id === 'CapsLock'){
    let el = document.getElementById(className);    
    el.classList.toggle("clickCaps");
    textArea.Case = true;
    //textArea.Case();
    textArea.createKeyboard();
    }
})

keyBoard.addEventListener('mousedown', (event) => {
    let target = event.target;
    let className = target.id;
    let el = document.getElementById(className);    
    el.classList.add('click');
})

keyBoard.addEventListener('mouseup', (event) => {
    let target = event.target;
    let className = target.id;
    let el = document.getElementById(className);
    el.classList.remove('click');
})

keyBoard.addEventListener('mouseout', (event) => {
    let target = event.target;
    let className = target.id;
    let el = document.getElementById(className);
    el.classList.remove('click');    
})