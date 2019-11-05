//document.body.innerHTML = '<div class="wrapper"><textarea class="result" id="result" rows="6" cols="60"></textarea><div class="keyboard" id="keyboard"><div class="row"><div class="key"><span class="Backquote on">ё</span></div>        <div class="key"><span class="Digit1 on">1</span></div><div class="key"><span class="Digit2 on">2</span></div><div class="key"><span class="Digit3 on">3</span></div><div class="key"><span class="Digit4 on">4</span></div><div class="key"><span class="Digit5 on">5</span></div><div class="key"><span class="Digit6 on">6</span></div><div class="key"><span class="Digit7 on">7</span></div><div class="key"><span class="Digit8 on">8</span></div><div class="key"><span class="Digit9 on">9</span></div><div class="key"><span class="Digit0 on">0</span></div><div class="key"><span class="Minus on"><span class="case down">-</span></span></div><div class="key"><span class="Equal on"><span class="case down">=</span></span></div><div class="key backspace"><span class="Backspace on"><span class="case down">Backspace</span></span></div></div><div class="row"><div class="key tab"><span class="Tab on"><span class="case down">Tab</span></span></div><div class="key"><span class="KeyQ on"><span class="case down">й</span></span></div><div class="key"><span class="KeyW on"><span class="case down">ц</span></span></div><div class="key"><span class="KeyE on"><span class="case down">у</span></span></div><div class="key"><span class="KeyR on"><span class="case down">к</span></span></div><div class="key"><span class="KeyT on"><span class="case down">е</span></span></div><div class="key"><span class="KeyY on"><span class="case down">н</span></span></div><div class="key"><span class="KeyU on"><span class="case down">г</span></span></div><div class="key"><span class="KeyI on"><span class="case down">ш</span></span></div><div class="key"><span class="KeyO on"><span class="case down">щ</span></span></div><div class="key"><span class="KeyP on"><span class="case down">з</span></span></div><div class="key"><span class="BracketLeft on"><span class="case down">х</span></span></div><div class="key"><span class="BracketRight on"><span class="case down">ъ</span></span></div><div class="key"><span class="Backslash on"><span class="case down">	&#92;</span></span></div><div class="key del"><span class="Delete on"><span class="case down">DEL</span></span></div></div><div class="row"><div class="key capslock"><span class="CapsLock on"><span class="case down">CapsLock</span></span></div><div class="key"><span class="KeyA on"><span class="case down">ф</span></span></div><div class="key"><span class="KeyS on"><span class="case down">ы</span></span></div><div class="key"><span class="KeyD on"><span class="case down">в</span></span></div><div class="key"><span class="KeyF on"><span class="case down">а</span></span></div><div class="key"><span class="KeyG on"><span class="case down">п</span></span></div><div class="key"><span class="KeyH on"><span class="case down">р</span></span></div><div class="key"><span class="KeyJ on"><span class="case down">о</span></span></div><div class="key"><span class="KeyK on"><span class="case down">л</span></span></div><div class="key"><span class="KeyL on"><span class="case down">д</span></span></div><div class="key"><span class="Semicolon on"><span class="case down">ж</span></span></div><div class="key"><span class="Quote on"><span class="case down">э</span></span></div><div class="key enter"><span class="Enter on"><span class="case down">ENTER</span></span></div></div><div class="row"><div class="key shift"><span class="ShiftLeft on"><span class="case down">Shift</span></span></div><div class="key"><span class="KeyZ on"><span class="case down">я</span></span></div><div class="key"><span class="KeyX on"><span class="case down">ч</span></span></div><div class="key"><span class="KeyC on"><span class="case down">с</span></span></div><div class="key"><span class="KeyV on"><span class="case down">м</span></span></div><div class="key"><span class="KeyB on"><span class="case down">и</span></span></div><div class="key"><span class="KeyN on"><span class="case down">т</span></span></div><div class="key"><span class="KeyM on"><span class="case down">ь</span></span></div><div class="key"><span class="Comma on"><span class="case down">б</span></span></div><div class="key"><span class="Period on"><span class="case down">ю</span></span></div><div class="key"><span class="Slash on"><span class="case down">.</span></span></div><div class="key arrow"><span class="ArrowUp on"><span class="case down">&uarr;</span></span></div><div class="key shift-right"><span class="ShiftRight on"><span class="case down">Shift</span></span></div></div><div class="row"><div class="key ctrl"><span class="ControlLeft on"><span class="case down">Ctrl</span></span></div><div class="key win"><span class="Metaleft on"><span class="case down">Win</span></span></div><div class="key alt active"><span class="AltLeft on"><span class="case down">Alt</span></span></div><div class="key space"><span class="Space on"><span class="case down"></span></span></div><div class="key alt"><span class="AltRight on"><span class="case down">Alt</span></span></div><div class="key arrow"><span class="ArrowLeft on"><span class="case down">&larr;</span></span></div><div class="key arrow"><span class="ArrowDown on"><span class="case down">&darr;</span></span></div><div class="key arrow"><span class="ArrowRight on"><span class="case down">&rarr;</span></span></div><div class="key ctrl"><span class="ControlRight on"><span class="case down">Ctrl</span></span></div></div></div></div>';
const keyboardSymbols = {
    Backquote: {
        main: "ё",
        mainCaps: "Ё",
        second: "`",
        secondCaps: "~"
    },
    Digit1: {
        main: "1",
        mainCaps: "!",
        second: "1",
        secondCaps: "!"
    },
    Digit2: {
        main: "2",
        mainCaps: "&#34;",
        second: "2",
        secondCaps: "&#64;"
    },
    Digit3: {
        main: "3",
        mainCaps: "&#34;",
        second: "3",
        secondCaps: "&#64;"
    },
    Digit4: {
        main: "4",
        mainCaps: "&#36;",
        second: "4",
        secondCaps: "&#59;"
    },
    Digit5: {
        main: "5",
        mainCaps: "&#37;",
        second: "5",
        secondCaps: "&#37;"
    },
    Digit6: {
        main: "6",
        mainCaps: "&#58;",
        second: "6",
        secondCaps: "&#94;"
    },
    Digit7: {
        main: "7",
        mainCaps: "&#63;",
        second: "7",
        secondCaps: "&#38;"
    },
    Digit8: {
        main: "8",
        mainCaps: "&#42;",
        second: "8",
        secondCaps: "&#42;"
    },
    Digit9: {
        main: "9",
        mainCaps: "&#40;",
        second: "9",
        secondCaps: "&#40;"
    },
    Digit0: {
        main: "0",
        mainCaps: "&#41;",
        second: "0",
        secondCaps: "&#41;"
    },
    Minus: {
        main: "&#45;",
        mainCaps: "&#95;",
        second: "&#45;",
        secondCaps: "&#95;"
    },
    Equal: {
        main: "&#61;",
        mainCaps: "&#43;",
        second: "&#61;",
        secondCaps: "&#43;"
    },
    Backspace: {
        main: "Backspace",
        mainCaps: "Backspace",
        second: "Backspace",
        secondCaps: "Backspace"
    },
    Tab: {
        main: "Tab",
        mainCaps: "Tab",
        second: "Tab",
        secondCaps: "Tab"
    },
    KeyQ: {
        main: "й",
        mainCaps: "Й",
        second: "q",
        secondCaps: "Q"
    },
    KeyW: {
        main: "ц",
        mainCaps: "Ц",
        second: "w",
        secondCaps: "W"
    },
    KeyE: {
        main: "у",
        mainCaps: "У",
        second: "e",
        secondCaps: "E"
    },
    KeyR: {
        main: "к",
        mainCaps: "К",
        second: "r",
        secondCaps: "R"
    },
    KeyT: {
        main: "е",
        mainCaps: "Е",
        second: "t",
        secondCaps: "T"
    },
    KeyY: {
        main: "н",
        mainCaps: "Н",
        second: "y",
        secondCaps: "Y"
    },
    KeyU: {
        main: "г",
        mainCaps: "Г",
        second: "u",
        secondCaps: "U"
    },
    KeyI: {
        main: "ш",
        mainCaps: "Ш",
        second: "I",
        secondCaps: "i"
    },
    KeyO: {
        main: "щ",
        mainCaps: "Щ",
        second: "o",
        secondCaps: "O"
    },
    KeyP: {
        main: "з",
        mainCaps: "З",
        second: "p",
        secondCaps: "P"
    },
    BracketLeft: {
        main: "х",
        mainCaps: "Х",
        second: "&#91;",
        secondCaps: "&#123;"
    },
    BracketRight: {
        main: "ъ",
        mainCaps: "Ъ",
        second: "&#93;",
        secondCaps: "&#125;"
    },
    BackSlash: {
        main: "&#92;",
        mainCaps: "&#47;",
        second: "&#92;",
        secondCaps: "&#124;"
    },
    CapsLock: {
        main: "CapsLock",
        mainCaps: "CapsLock",
        second: "CapsLock",
        secondCaps: "CapsLock"
    },
    KeyA: {
        main: "ф",
        mainCaps: "Ф",
        second: "a",
        secondCaps: "A"
    },
    KeyS: {
        main: "ы",
        mainCaps: "Ы",
        second: "s",
        secondCaps: "S"
    },
    KeyD: {
        main: "в",
        mainCaps: "В",
        second: "d",
        secondCaps: "D"
    },
    KeyF: {
        main: "а",
        mainCaps: "А",
        second: "f",
        secondCaps: "F"
    },
    KeyG: {
        main: "п",
        mainCaps: "П",
        second: "g",
        secondCaps: "G"
    },
    KeyH: {
        main: "р",
        mainCaps: "Р",
        second: "h",
        secondCaps: "H"
    },
    KeyJ: {
        main: "о",
        mainCaps: "О",
        second: "j",
        secondCaps: "J"
    },
    KeyK: {
        main: "л",
        mainCaps: "Л",
        second: "k",
        secondCaps: "K"
    },
    KeyL: {
        main: "д",
        mainCaps: "Д",
        second: "l",
        secondCaps: "L"
    },
    Semicolon: {
        main: "ж",
        mainCaps: "Ж",
        second: "&#59;",
        secondCaps: "&#58;"
    },
    Quote: {
        main: "э",
        mainCaps: "Э",
        second: "&#39;",
        secondCaps: "&#34;"
    },
    Enter: {
        main: "Enter",
        mainCaps: "Enter",
        second: "Enter",
        secondCaps: "Enter"
    },
    ShiftLeft: {
        main: "Shift",
        mainCaps: "Shift",
        second: "Shift",
        secondCaps: "Shift"
    },
    KeyZ: {
        main: "я",
        mainCaps: "Я",
        second: "z",
        secondCaps: "Z"
    },
    KeyX: {
        main: "ч",
        mainCaps: "Ч",
        second: "x",
        secondCaps: "X"
    },
    KeyC: {
        main: "с",
        mainCaps: "С",
        second: "c",
        secondCaps: "C"
    },
    KeyV: {
        main: "м",
        mainCaps: "М",
        second: "v",
        secondCaps: "V"
    },
    KeyB: {
        main: "и",
        mainCaps: "И",
        second: "b",
        secondCaps: "B"
    },
    KeyN: {
        main: "т",
        mainCaps: "Т",
        second: "n",
        secondCaps: "N"
    },
    KeyM: {
        main: "ь",
        mainCaps: "Ь",
        second: "m",
        secondCaps: "M"
    },
    Comma: {
        main: "б",
        mainCaps: "Б",
        second: "&#44;",
        secondCaps: "&#139;"
    },
    Period: {
        main: "ю",
        mainCaps: "Ю",
        second: "&#46;",
        secondCaps: "&#155;"
    },
    Slash: {
        main: "&#46;",
        mainCaps: "&#44;",
        second: "&#47;",
        secondCaps: "&#63;"
    },
    ArrowUp: {
        main: "&uarr;",
        mainCaps: "&uarr;",
        second: "&uarr;",
        secondCaps: "&uarr;"
    },
    ShiftRight: {
        main: "Shift",
        mainCaps: "Shift",
        second: "Shift",
        secondCaps: "Shift"
    },
    ControlLeft: {
        main: "Ctrl",
        mainCaps: "Ctrl",
        second: "Ctrl",
        secondCaps: "Ctrl"
    },
    Win: {
        main: "Win",
        mainCaps: "Win",
        second: "Win",
        secondCaps: "Win"
    },
    AltLeft: {
        main: "Alt",
        mainCaps: "Alt",
        second: "Alt",
        secondCaps: "Alt"
    },
    Space: {
        main: "",
        mainCaps: "",
        second: "",
        secondCaps: ""
    },
    AltRight: {
        main: "Alt",
        mainCaps: "Alt",
        second: "Alt",
        secondCaps: "Alt"
    },
    ArrowLeft: {
        main: "&larr;",
        mainCaps: "&larr;",
        second: "&larr;",
        secondCaps: "&larr;"
    },
    ArrowDown: {
        main: "&darr;",
        mainCaps: "&darr;",
        second: "&darr;",
        secondCaps: "&darr;"
    },
    ArrowRight: {
        main: "&rarr;",
        mainCaps: "&rarr;",
        second: "&rarr;",
        secondCaps: "&rarr;"
    },
    ControlRight: {
        main: "Ctrl",
        mainCaps: "Ctrl",
        second: "Ctrl",
        secondCaps: "Ctrl"
    }
}

class keyboard {
    constructor() {
        this.key;
        //this.keyboard = keyboardSymbols;
        this.capslock = false;
        this.main = true;
    }

    createTextArea() {
        return '<div class="wrapper"><textarea class="result" id="result" rows="6" cols="60"></textarea><div class="keyboard" id="keyboard"></div></div>';
    }

    createKeyboard() {
        let div = document.createElement('div');
        div.classList.add('row');
        for (let key in keyboardSymbols) {
            if (this.capslock === false && this.main === true){
                div.insertAdjacentHTML('beforeend', `<div class="key">${keyboardSymbols.key.main}</div>`);
            }
        }
       
    }
}
let newKeyboard = new keyboard();
document.body.innerHTML = newKeyboard.createTextArea();// + newKeyboard.createKeyboard();
