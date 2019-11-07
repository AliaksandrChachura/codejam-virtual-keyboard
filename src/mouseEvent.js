let keyBoard = document.getElementById('keyboard');
let input = document.getElementById('result').value;


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