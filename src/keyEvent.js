
//keyBoard.addEventListener('click', (event) => {
   // let target = event.target;
   // let className = target.id;
   // if (event.target.id === 'CapsLock'){
  //  let el = document.getElementById(className);    
   // el.classList.toggle("clickCaps");
   // textArea.Case = true;
    //textArea.Case();
   // textArea.createKeyboard();
  //  }
//})
document.addEventListener('keydown', (event) => {
    let className = event.code;
    console.log(className);
    let el = document.getElementById(className);    
    el.classList.add('click');
})

document.addEventListener('keyup', (event) => {
    let className = event.code;
    if (className === 'CapsLock'){
        let el = document.getElementById(className);    
        el.classList.toggle("clickCaps");
    }
    let el = document.getElementById(className);
    el.classList.remove('click');
})