/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createKeyboard.js":
/*!*******************************!*\
  !*** ./src/createKeyboard.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable object-curly-spacing */
/* eslint-disable class-methods-use-this */
const keyboardSymbols = {
  Backquote: {
    main: 'ё',
    mainCaps: 'Ё',
    second: '`',
    secondCaps: '~',
  },
  Digit1: {
    main: '1',
    mainCaps: '!',
    second: '1',
    secondCaps: '!',
  },
  Digit2: {
    main: '2',
    mainCaps: '&#34;',
    second: '2',
    secondCaps: '&#64;',
  },
  Digit3: {
    main: '3',
    mainCaps: '&#34;',
    second: '3',
    secondCaps: '&#64;',
  },
  Digit4: {
    main: '4',
    mainCaps: '&#36;',
    second: '4',
    secondCaps: '&#59;',
  },
  Digit5: {
    main: '5',
    mainCaps: '&#37;',
    second: '5',
    secondCaps: '&#37;',
  },
  Digit6: {
    main: '6',
    mainCaps: '&#58;',
    second: '6',
    secondCaps: '&#94;',
  },
  Digit7: {
    main: '7',
    mainCaps: '&#63;',
    second: '7',
    secondCaps: '&#38;',
  },
  Digit8: {
    main: '8',
    mainCaps: '&#42;',
    second: '8',
    secondCaps: '&#42;',
  },
  Digit9: {
    main: '9',
    mainCaps: '&#40;',
    second: '9',
    secondCaps: '&#40;',
  },
  Digit0: {
    main: '0',
    mainCaps: '&#41;',
    second: '0',
    secondCaps: '&#41;',
  },
  Minus: {
    main: '&#45;',
    mainCaps: '&#95;',
    second: '&#45;',
    secondCaps: '&#95;',
  },
  Equal: {
    main: '&#61;',
    mainCaps: '&#43;',
    second: '&#61;',
    secondCaps: '&#43;',
  },
  Backspace: {
    main: 'Backspace',
    mainCaps: 'Backspace',
    second: 'Backspace',
    secondCaps: 'Backspace',
  },
  Tab: {
    main: 'Tab',
    mainCaps: 'Tab',
    second: 'Tab',
    secondCaps: 'Tab',
  },
  KeyQ: {
    main: 'й',
    mainCaps: 'Й',
    second: 'q',
    secondCaps: 'Q',
  },
  KeyW: {
    main: 'ц',
    mainCaps: 'Ц',
    second: 'w',
    secondCaps: 'W',
  },
  KeyE: {
    main: 'у',
    mainCaps: 'У',
    second: 'e',
    secondCaps: 'E',
  },
  KeyR: {
    main: 'к',
    mainCaps: 'К',
    second: 'r',
    secondCaps: 'R',
  },
  KeyT: {
    main: 'е',
    mainCaps: 'Е',
    second: 't',
    secondCaps: 'T',
  },
  KeyY: {
    main: 'н',
    mainCaps: 'Н',
    second: 'y',
    secondCaps: 'Y',
  },
  KeyU: {
    main: 'г',
    mainCaps: 'Г',
    second: 'u',
    secondCaps: 'U',
  },
  KeyI: {
    main: 'ш',
    mainCaps: 'Ш',
    second: 'I',
    secondCaps: 'i',
  },
  KeyO: {
    main: 'щ',
    mainCaps: 'Щ',
    second: 'o',
    secondCaps: 'O',
  },
  KeyP: {
    main: 'з',
    mainCaps: 'З',
    second: 'p',
    secondCaps: 'P',
  },
  BracketLeft: {
    main: 'х',
    mainCaps: 'Х',
    second: '&#91;',
    secondCaps: '&#123;',
  },
  BracketRight: {
    main: 'ъ',
    mainCaps: 'Ъ',
    second: '&#93;',
    secondCaps: '&#125;',
  },
  Backslash: {
    main: '&#92;',
    mainCaps: '&#47;',
    second: '&#92;',
    secondCaps: '&#124;',
  },
  Delete: {
    main: 'Del',
    mainCaps: 'Del',
    second: 'Del',
    secondCaps: 'Del',
  },
  CapsLock: {
    main: 'CapsLock',
    mainCaps: 'CapsLock',
    second: 'CapsLock',
    secondCaps: 'CapsLock',
  },
  KeyA: {
    main: 'ф',
    mainCaps: 'Ф',
    second: 'a',
    secondCaps: 'A',
  },
  KeyS: {
    main: 'ы',
    mainCaps: 'Ы',
    second: 's',
    secondCaps: 'S',
  },
  KeyD: {
    main: 'в',
    mainCaps: 'В',
    second: 'd',
    secondCaps: 'D',
  },
  KeyF: {
    main: 'а',
    mainCaps: 'А',
    second: 'f',
    secondCaps: 'F',
  },
  KeyG: {
    main: 'п',
    mainCaps: 'П',
    second: 'g',
    secondCaps: 'G',
  },
  KeyH: {
    main: 'р',
    mainCaps: 'Р',
    second: 'h',
    secondCaps: 'H',
  },
  KeyJ: {
    main: 'о',
    mainCaps: 'О',
    second: 'j',
    secondCaps: 'J',
  },
  KeyK: {
    main: 'л',
    mainCaps: 'Л',
    second: 'k',
    secondCaps: 'K',
  },
  KeyL: {
    main: 'д',
    mainCaps: 'Д',
    second: 'l',
    secondCaps: 'L',
  },
  Semicolon: {
    main: 'ж',
    mainCaps: 'Ж',
    second: '&#59;',
    secondCaps: '&#58;',
  },
  Quote: {
    main: 'э',
    mainCaps: 'Э',
    second: '&#39;',
    secondCaps: '&#34;',
  },
  Enter: {
    main: 'Enter',
    mainCaps: 'Enter',
    second: 'Enter',
    secondCaps: 'Enter',
  },
  ShiftLeft: {
    main: 'Shift',
    mainCaps: 'Shift',
    second: 'Shift',
    secondCaps: 'Shift',
  },
  KeyZ: {
    main: 'я',
    mainCaps: 'Я',
    second: 'z',
    secondCaps: 'Z',
  },
  KeyX: {
    main: 'ч',
    mainCaps: 'Ч',
    second: 'x',
    secondCaps: 'X',
  },
  KeyC: {
    main: 'с',
    mainCaps: 'С',
    second: 'c',
    secondCaps: 'C',
  },
  KeyV: {
    main: 'м',
    mainCaps: 'М',
    second: 'v',
    secondCaps: 'V',
  },
  KeyB: {
    main: 'и',
    mainCaps: 'И',
    second: 'b',
    secondCaps: 'B',
  },
  KeyN: {
    main: 'т',
    mainCaps: 'Т',
    second: 'n',
    secondCaps: 'N',
  },
  KeyM: {
    main: 'ь',
    mainCaps: 'Ь',
    second: 'm',
    secondCaps: 'M',
  },
  Comma: {
    main: 'б',
    mainCaps: 'Б',
    second: '&#44;',
    secondCaps: '&#139;',
  },
  Period: {
    main: 'ю',
    mainCaps: 'Ю',
    second: '&#46;',
    secondCaps: '&#155;',
  },
  Slash: {
    main: '&#46;',
    mainCaps: '&#44;',
    second: '&#47;',
    secondCaps: '&#63;',
  },
  ArrowUp: {
    main: '&uarr;',
    mainCaps: '&uarr;',
    second: '&uarr;',
    secondCaps: '&uarr;',
  },
  ShiftRight: {
    main: 'Shift',
    mainCaps: 'Shift',
    second: 'Shift',
    secondCaps: 'Shift',
  },
  ControlLeft: {
    main: 'Ctrl',
    mainCaps: 'Ctrl',
    second: 'Ctrl',
    secondCaps: 'Ctrl',
  },
  Win: {
    main: 'Win',
    mainCaps: 'Win',
    second: 'Win',
    secondCaps: 'Win',
  },
  AltLeft: {
    main: 'Alt',
    mainCaps: 'Alt',
    second: 'Alt',
    secondCaps: 'Alt',
  },
  Space: {
    main: '',
    mainCaps: '',
    second: '',
    secondCaps: '',
  },
  AltRight: {
    main: 'Alt',
    mainCaps: 'Alt',
    second: 'Alt',
    secondCaps: 'Alt',
  },
  ArrowLeft: {
    main: '&larr;',
    mainCaps: '&larr;',
    second: '&larr;',
    secondCaps: '&larr;',
  },
  ArrowDown: {
    main: '&darr;',
    mainCaps: '&darr;',
    second: '&darr;',
    secondCaps: '&darr;',
  },
  ArrowRight: {
    main: '&rarr;',
    mainCaps: '&rarr;',
    second: '&rarr;',
    secondCaps: '&rarr;',
  },
  ControlRight: {
    main: 'Ctrl',
    mainCaps: 'Ctrl',
    second: 'Ctrl',
    secondCaps: 'Ctrl',
  },
};


class Keyboard {
  constructor(Language = true, Case = false) {
    this.capslock = Case;
    this.main = Language;
  }

  createTextArea() {
    return '<div class="wrapper"><textarea class="result" id="result" rows="6" cols="60"></textarea><div class="keyboard" id="keyboard"></div></div>';
  }

  createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    if (this.capslock === false && this.main === true) {
      Object.keys(keyboardSymbols).forEach((item) => {
        if (item === 'Backspace') {
          const div = document.createElement('div');
          div.classList.add('key', 'backspace');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].main;
          keyboard.appendChild(div);
        } else if (item === 'Tab' || item === 'Del') {
          const div = document.createElement('div');
          div.classList.add('key', 'tab');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].main;
          keyboard.appendChild(div);
        } else if (item === 'CapsLock' || item === 'ShiftLeft') {
          const div = document.createElement('div');
          div.classList.add('key', 'capslock');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].main;
          keyboard.appendChild(div);
        } else if (item === 'Enter' || item === 'ShiftRight') {
          const div = document.createElement('div');
          div.classList.add('key', 'enter');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].main;
          keyboard.appendChild(div);
        } else if (item === 'Space') {
          const div = document.createElement('div');
          div.classList.add('key', 'space');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].main;
          keyboard.appendChild(div);
        } else {
          const div = document.createElement('div');
          div.classList.add('key');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].main;
          keyboard.appendChild(div);
        }
      });
    } else if (this.capslock === true && this.main === true) {
      Object.keys(keyboardSymbols).forEach((item) => {
        if (item === 'Backspace') {
          const div = document.createElement('div');
          div.classList.add('key', 'backspace');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].mainCaps;
          keyboard.appendChild(div);
        } else if (item === 'Tab' || item === 'Del') {
          const div = document.createElement('div');
          div.classList.add('key', 'tab');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].mainCaps;
          keyboard.appendChild(div);
        } else if (item === 'CapsLock' || item === 'ShiftLeft') {
          const div = document.createElement('div');
          div.classList.add('key', 'capslock');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].mainCaps;
          keyboard.appendChild(div);
        } else if (item === 'Enter' || item === 'ShiftRight') {
          const div = document.createElement('div');
          div.classList.add('key', 'enter');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].mainCaps;
          keyboard.appendChild(div);
        } else if (item === 'Space') {
          const div = document.createElement('div');
          div.classList.add('key', 'space');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].mainCaps;
          keyboard.appendChild(div);
        } else {
          const div = document.createElement('div');
          div.classList.add('key');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].mainCaps;
          keyboard.appendChild(div);
        }
      });
    } else if (this.capslock === false && this.main === false) {
      Object.keys(keyboardSymbols).forEach((item) => {
        if (item === 'Backspace') {
          const div = document.createElement('div');
          div.classList.add('key', 'backspace');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].second;
          keyboard.appendChild(div);
        } else if (item === 'Tab' || item === 'Del') {
          const div = document.createElement('div');
          div.classList.add('key', 'tab');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].second;
          keyboard.appendChild(div);
        } else if (item === 'CapsLock' || item === 'ShiftLeft') {
          const div = document.createElement('div');
          div.classList.add('key', 'capslock');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].second;
          keyboard.appendChild(div);
        } else if (item === 'Enter' || item === 'ShiftRight') {
          const div = document.createElement('div');
          div.classList.add('key', 'enter');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].second;
          keyboard.appendChild(div);
        } else if (item === 'Space') {
          const div = document.createElement('div');
          div.classList.add('key', 'space');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].second;
          keyboard.appendChild(div);
        } else {
          const div = document.createElement('div');
          div.classList.add('key');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].second;
          keyboard.appendChild(div);
        }
      });
    } else if (this.capslock === true && this.main === false) {
      Object.keys(keyboardSymbols).forEach((item) => {
        if (item === 'Backspace') {
          const div = document.createElement('div');
          div.classList.add('key', 'backspace');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].secondCaps;
          keyboard.appendChild(div);
        } else if (item === 'Tab' || item === 'Del') {
          const div = document.createElement('div');
          div.classList.add('key', 'tab');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].secondCaps;
          keyboard.appendChild(div);
        } else if (item === 'CapsLock' || item === 'ShiftLeft') {
          const div = document.createElement('div');
          div.classList.add('key', 'capslock');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].secondCaps;
          keyboard.appendChild(div);
        } else if (item === 'Enter' || item === 'ShiftRight') {
          const div = document.createElement('div');
          div.classList.add('key', 'enter');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].secondCaps;
          keyboard.appendChild(div);
        } else if (item === 'Space') {
          const div = document.createElement('div');
          div.classList.add('key', 'space');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].secondCaps;
          keyboard.appendChild(div);
        } else {
          const div = document.createElement('div');
          div.classList.add('key');
          div.id = item;
          div.innerHTML = keyboardSymbols[item].secondCaps;
          keyboard.appendChild(div);
        }
      });
    }
  }

  get Case() {
    return this.capslock;
  }

  changeCase() {
    if (this.capslock === true) {
      this.capslock = false;
    } else if (this.capslock === false) {
      this.capslock = true;
    }
  }

  get Language() {
    return this.main;
  }

  set Language(value) {
    this.main = value;
  }

  changeLanguage() {
    if (this.main === true) {
      this.main = false;
    } else if (this.main === false) {
      this.main = true;
    }
  }
}

const textArea = new Keyboard(true, false);
console.log(`textarea.Lang = ${textArea.Language}`);
//localStorage.setItem(textArea.Language, textArea.Language);
document.body.innerHTML = textArea.createTextArea();
textArea.createKeyboard();

//document.body.innerHTML = textArea.createTextArea();
//console.log(localStorage.getItem('lang'));
//console.log(textArea.Language);
//textArea.createKeyboard();

const keyBoard = document.getElementById('keyboard');

const input = document.getElementById('result');
input.focus();
keyBoard.addEventListener('click', (event) => {
  if (event.target.id === 'CapsLock') {
    keyBoard.innerHTML = '';
    textArea.changeCase();
    textArea.createKeyboard();
  }
});

keyBoard.addEventListener('mousedown', (event) => {
  input.focus();
  const {target} = event;
  const className = target.id;
  const el = document.getElementById(className);
  el.classList.add('click');
  if (className !== 'Tab' && className !== 'CapsLock' && className !== 'ShiftLeft' && className !== 'ShiftRight' && className !== 'ControlLeft' && className !== 'ControlRight' && className !== 'metaKey' && className !== 'Backspace' && className !== 'Delete' && className !== 'Enter' && className !== 'Space' && className !== 'AltLeft' && className !== 'AltRight' && className !== 'ArrowLeft' && className !== 'ArrowUp' && className !== 'ArrowDown' && className !== 'ArrowRight' && className !== 'Win') {
    input.value += el.innerHTML;
  } else if (className === 'Tab') {
    input.value += '\t';
  } else if (className === 'Space') {
    input.value += ' ';
  } else if (className === 'ShiftLeft' || className === 'ShiftRight') {
    keyBoard.innerHTML = '';
    textArea.changeCase();
    textArea.createKeyboard();
  } else if (className === 'Enter') {
    input.value += '\n';
  }
});

keyBoard.addEventListener('mouseup', (event) => {
  input.focus();
  const {target} = event;
  const className = target.id;
  const el = document.getElementById(className);
  el.classList.remove('click');
  if (className === 'ShiftLeft' || className === 'ShiftRight') {
    keyBoard.innerHTML = '';
    textArea.changeCase();
    textArea.createKeyboard();
  }
});

keyBoard.addEventListener('mouseout', (event) => {
  const {target} = event;
  const className = target.id;
  const el = document.getElementById(className);
  el.classList.remove('click');
});

document.addEventListener('keydown', (event) => {
  input.focus();
  const className = event.code;

  if (event.code === 'AltLeft' || (event.ShiftLeft || event.metaKey)) {
    keyBoard.innerHTML = '';
    textArea.changeLanguage();
    localStorage.setItem(textArea.Language, textArea.Language);
    console.log(`textArea.Language = ${textArea.Language} localStorage.getItem = ${localStorage.getItem(textArea.Language)}`);
    textArea.createKeyboard();
  } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyBoard.innerHTML = '';
    textArea.changeCase();
    textArea.createKeyboard();
  }
  const el = document.getElementById(className);
  el.classList.add('click');
});

document.addEventListener('keyup', (event) => {
  input.focus();
  const className = event.code;
  const el = document.getElementById(className);
  if (className === 'CapsLock') {
    keyBoard.innerHTML = '';
    textArea.changeCase();
    textArea.createKeyboard();
    el.classList.toggle('clickCaps');
  } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    keyBoard.innerHTML = '';
    textArea.changeCase();
    textArea.createKeyboard();
  }
  el.classList.remove('click');
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createKeyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createKeyboard */ "./src/createKeyboard.js");
/* harmony import */ var _createKeyboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_createKeyboard__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUtleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzlkOWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0Esc0JBQXNCO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0Esc0JBQXNCO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0Esc0JBQXNC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QUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsU0FBUyxPQUFPO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGtCQUFrQiwwQkFBMEIsd0NBQXdDO0FBQzNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcHJCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJCO0FBQ0Q7Ozs7Ozs7Ozs7OztBQ0QxQix1QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1zcGFjaW5nICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5jb25zdCBrZXlib2FyZFN5bWJvbHMgPSB7XG4gIEJhY2txdW90ZToge1xuICAgIG1haW46ICfRkScsXG4gICAgbWFpbkNhcHM6ICfQgScsXG4gICAgc2Vjb25kOiAnYCcsXG4gICAgc2Vjb25kQ2FwczogJ34nLFxuICB9LFxuICBEaWdpdDE6IHtcbiAgICBtYWluOiAnMScsXG4gICAgbWFpbkNhcHM6ICchJyxcbiAgICBzZWNvbmQ6ICcxJyxcbiAgICBzZWNvbmRDYXBzOiAnIScsXG4gIH0sXG4gIERpZ2l0Mjoge1xuICAgIG1haW46ICcyJyxcbiAgICBtYWluQ2FwczogJyYjMzQ7JyxcbiAgICBzZWNvbmQ6ICcyJyxcbiAgICBzZWNvbmRDYXBzOiAnJiM2NDsnLFxuICB9LFxuICBEaWdpdDM6IHtcbiAgICBtYWluOiAnMycsXG4gICAgbWFpbkNhcHM6ICcmIzM0OycsXG4gICAgc2Vjb25kOiAnMycsXG4gICAgc2Vjb25kQ2FwczogJyYjNjQ7JyxcbiAgfSxcbiAgRGlnaXQ0OiB7XG4gICAgbWFpbjogJzQnLFxuICAgIG1haW5DYXBzOiAnJiMzNjsnLFxuICAgIHNlY29uZDogJzQnLFxuICAgIHNlY29uZENhcHM6ICcmIzU5OycsXG4gIH0sXG4gIERpZ2l0NToge1xuICAgIG1haW46ICc1JyxcbiAgICBtYWluQ2FwczogJyYjMzc7JyxcbiAgICBzZWNvbmQ6ICc1JyxcbiAgICBzZWNvbmRDYXBzOiAnJiMzNzsnLFxuICB9LFxuICBEaWdpdDY6IHtcbiAgICBtYWluOiAnNicsXG4gICAgbWFpbkNhcHM6ICcmIzU4OycsXG4gICAgc2Vjb25kOiAnNicsXG4gICAgc2Vjb25kQ2FwczogJyYjOTQ7JyxcbiAgfSxcbiAgRGlnaXQ3OiB7XG4gICAgbWFpbjogJzcnLFxuICAgIG1haW5DYXBzOiAnJiM2MzsnLFxuICAgIHNlY29uZDogJzcnLFxuICAgIHNlY29uZENhcHM6ICcmIzM4OycsXG4gIH0sXG4gIERpZ2l0ODoge1xuICAgIG1haW46ICc4JyxcbiAgICBtYWluQ2FwczogJyYjNDI7JyxcbiAgICBzZWNvbmQ6ICc4JyxcbiAgICBzZWNvbmRDYXBzOiAnJiM0MjsnLFxuICB9LFxuICBEaWdpdDk6IHtcbiAgICBtYWluOiAnOScsXG4gICAgbWFpbkNhcHM6ICcmIzQwOycsXG4gICAgc2Vjb25kOiAnOScsXG4gICAgc2Vjb25kQ2FwczogJyYjNDA7JyxcbiAgfSxcbiAgRGlnaXQwOiB7XG4gICAgbWFpbjogJzAnLFxuICAgIG1haW5DYXBzOiAnJiM0MTsnLFxuICAgIHNlY29uZDogJzAnLFxuICAgIHNlY29uZENhcHM6ICcmIzQxOycsXG4gIH0sXG4gIE1pbnVzOiB7XG4gICAgbWFpbjogJyYjNDU7JyxcbiAgICBtYWluQ2FwczogJyYjOTU7JyxcbiAgICBzZWNvbmQ6ICcmIzQ1OycsXG4gICAgc2Vjb25kQ2FwczogJyYjOTU7JyxcbiAgfSxcbiAgRXF1YWw6IHtcbiAgICBtYWluOiAnJiM2MTsnLFxuICAgIG1haW5DYXBzOiAnJiM0MzsnLFxuICAgIHNlY29uZDogJyYjNjE7JyxcbiAgICBzZWNvbmRDYXBzOiAnJiM0MzsnLFxuICB9LFxuICBCYWNrc3BhY2U6IHtcbiAgICBtYWluOiAnQmFja3NwYWNlJyxcbiAgICBtYWluQ2FwczogJ0JhY2tzcGFjZScsXG4gICAgc2Vjb25kOiAnQmFja3NwYWNlJyxcbiAgICBzZWNvbmRDYXBzOiAnQmFja3NwYWNlJyxcbiAgfSxcbiAgVGFiOiB7XG4gICAgbWFpbjogJ1RhYicsXG4gICAgbWFpbkNhcHM6ICdUYWInLFxuICAgIHNlY29uZDogJ1RhYicsXG4gICAgc2Vjb25kQ2FwczogJ1RhYicsXG4gIH0sXG4gIEtleVE6IHtcbiAgICBtYWluOiAn0LknLFxuICAgIG1haW5DYXBzOiAn0JknLFxuICAgIHNlY29uZDogJ3EnLFxuICAgIHNlY29uZENhcHM6ICdRJyxcbiAgfSxcbiAgS2V5Vzoge1xuICAgIG1haW46ICfRhicsXG4gICAgbWFpbkNhcHM6ICfQpicsXG4gICAgc2Vjb25kOiAndycsXG4gICAgc2Vjb25kQ2FwczogJ1cnLFxuICB9LFxuICBLZXlFOiB7XG4gICAgbWFpbjogJ9GDJyxcbiAgICBtYWluQ2FwczogJ9CjJyxcbiAgICBzZWNvbmQ6ICdlJyxcbiAgICBzZWNvbmRDYXBzOiAnRScsXG4gIH0sXG4gIEtleVI6IHtcbiAgICBtYWluOiAn0LonLFxuICAgIG1haW5DYXBzOiAn0JonLFxuICAgIHNlY29uZDogJ3InLFxuICAgIHNlY29uZENhcHM6ICdSJyxcbiAgfSxcbiAgS2V5VDoge1xuICAgIG1haW46ICfQtScsXG4gICAgbWFpbkNhcHM6ICfQlScsXG4gICAgc2Vjb25kOiAndCcsXG4gICAgc2Vjb25kQ2FwczogJ1QnLFxuICB9LFxuICBLZXlZOiB7XG4gICAgbWFpbjogJ9C9JyxcbiAgICBtYWluQ2FwczogJ9CdJyxcbiAgICBzZWNvbmQ6ICd5JyxcbiAgICBzZWNvbmRDYXBzOiAnWScsXG4gIH0sXG4gIEtleVU6IHtcbiAgICBtYWluOiAn0LMnLFxuICAgIG1haW5DYXBzOiAn0JMnLFxuICAgIHNlY29uZDogJ3UnLFxuICAgIHNlY29uZENhcHM6ICdVJyxcbiAgfSxcbiAgS2V5SToge1xuICAgIG1haW46ICfRiCcsXG4gICAgbWFpbkNhcHM6ICfQqCcsXG4gICAgc2Vjb25kOiAnSScsXG4gICAgc2Vjb25kQ2FwczogJ2knLFxuICB9LFxuICBLZXlPOiB7XG4gICAgbWFpbjogJ9GJJyxcbiAgICBtYWluQ2FwczogJ9CpJyxcbiAgICBzZWNvbmQ6ICdvJyxcbiAgICBzZWNvbmRDYXBzOiAnTycsXG4gIH0sXG4gIEtleVA6IHtcbiAgICBtYWluOiAn0LcnLFxuICAgIG1haW5DYXBzOiAn0JcnLFxuICAgIHNlY29uZDogJ3AnLFxuICAgIHNlY29uZENhcHM6ICdQJyxcbiAgfSxcbiAgQnJhY2tldExlZnQ6IHtcbiAgICBtYWluOiAn0YUnLFxuICAgIG1haW5DYXBzOiAn0KUnLFxuICAgIHNlY29uZDogJyYjOTE7JyxcbiAgICBzZWNvbmRDYXBzOiAnJiMxMjM7JyxcbiAgfSxcbiAgQnJhY2tldFJpZ2h0OiB7XG4gICAgbWFpbjogJ9GKJyxcbiAgICBtYWluQ2FwczogJ9CqJyxcbiAgICBzZWNvbmQ6ICcmIzkzOycsXG4gICAgc2Vjb25kQ2FwczogJyYjMTI1OycsXG4gIH0sXG4gIEJhY2tzbGFzaDoge1xuICAgIG1haW46ICcmIzkyOycsXG4gICAgbWFpbkNhcHM6ICcmIzQ3OycsXG4gICAgc2Vjb25kOiAnJiM5MjsnLFxuICAgIHNlY29uZENhcHM6ICcmIzEyNDsnLFxuICB9LFxuICBEZWxldGU6IHtcbiAgICBtYWluOiAnRGVsJyxcbiAgICBtYWluQ2FwczogJ0RlbCcsXG4gICAgc2Vjb25kOiAnRGVsJyxcbiAgICBzZWNvbmRDYXBzOiAnRGVsJyxcbiAgfSxcbiAgQ2Fwc0xvY2s6IHtcbiAgICBtYWluOiAnQ2Fwc0xvY2snLFxuICAgIG1haW5DYXBzOiAnQ2Fwc0xvY2snLFxuICAgIHNlY29uZDogJ0NhcHNMb2NrJyxcbiAgICBzZWNvbmRDYXBzOiAnQ2Fwc0xvY2snLFxuICB9LFxuICBLZXlBOiB7XG4gICAgbWFpbjogJ9GEJyxcbiAgICBtYWluQ2FwczogJ9CkJyxcbiAgICBzZWNvbmQ6ICdhJyxcbiAgICBzZWNvbmRDYXBzOiAnQScsXG4gIH0sXG4gIEtleVM6IHtcbiAgICBtYWluOiAn0YsnLFxuICAgIG1haW5DYXBzOiAn0KsnLFxuICAgIHNlY29uZDogJ3MnLFxuICAgIHNlY29uZENhcHM6ICdTJyxcbiAgfSxcbiAgS2V5RDoge1xuICAgIG1haW46ICfQsicsXG4gICAgbWFpbkNhcHM6ICfQkicsXG4gICAgc2Vjb25kOiAnZCcsXG4gICAgc2Vjb25kQ2FwczogJ0QnLFxuICB9LFxuICBLZXlGOiB7XG4gICAgbWFpbjogJ9CwJyxcbiAgICBtYWluQ2FwczogJ9CQJyxcbiAgICBzZWNvbmQ6ICdmJyxcbiAgICBzZWNvbmRDYXBzOiAnRicsXG4gIH0sXG4gIEtleUc6IHtcbiAgICBtYWluOiAn0L8nLFxuICAgIG1haW5DYXBzOiAn0J8nLFxuICAgIHNlY29uZDogJ2cnLFxuICAgIHNlY29uZENhcHM6ICdHJyxcbiAgfSxcbiAgS2V5SDoge1xuICAgIG1haW46ICfRgCcsXG4gICAgbWFpbkNhcHM6ICfQoCcsXG4gICAgc2Vjb25kOiAnaCcsXG4gICAgc2Vjb25kQ2FwczogJ0gnLFxuICB9LFxuICBLZXlKOiB7XG4gICAgbWFpbjogJ9C+JyxcbiAgICBtYWluQ2FwczogJ9CeJyxcbiAgICBzZWNvbmQ6ICdqJyxcbiAgICBzZWNvbmRDYXBzOiAnSicsXG4gIH0sXG4gIEtleUs6IHtcbiAgICBtYWluOiAn0LsnLFxuICAgIG1haW5DYXBzOiAn0JsnLFxuICAgIHNlY29uZDogJ2snLFxuICAgIHNlY29uZENhcHM6ICdLJyxcbiAgfSxcbiAgS2V5TDoge1xuICAgIG1haW46ICfQtCcsXG4gICAgbWFpbkNhcHM6ICfQlCcsXG4gICAgc2Vjb25kOiAnbCcsXG4gICAgc2Vjb25kQ2FwczogJ0wnLFxuICB9LFxuICBTZW1pY29sb246IHtcbiAgICBtYWluOiAn0LYnLFxuICAgIG1haW5DYXBzOiAn0JYnLFxuICAgIHNlY29uZDogJyYjNTk7JyxcbiAgICBzZWNvbmRDYXBzOiAnJiM1ODsnLFxuICB9LFxuICBRdW90ZToge1xuICAgIG1haW46ICfRjScsXG4gICAgbWFpbkNhcHM6ICfQrScsXG4gICAgc2Vjb25kOiAnJiMzOTsnLFxuICAgIHNlY29uZENhcHM6ICcmIzM0OycsXG4gIH0sXG4gIEVudGVyOiB7XG4gICAgbWFpbjogJ0VudGVyJyxcbiAgICBtYWluQ2FwczogJ0VudGVyJyxcbiAgICBzZWNvbmQ6ICdFbnRlcicsXG4gICAgc2Vjb25kQ2FwczogJ0VudGVyJyxcbiAgfSxcbiAgU2hpZnRMZWZ0OiB7XG4gICAgbWFpbjogJ1NoaWZ0JyxcbiAgICBtYWluQ2FwczogJ1NoaWZ0JyxcbiAgICBzZWNvbmQ6ICdTaGlmdCcsXG4gICAgc2Vjb25kQ2FwczogJ1NoaWZ0JyxcbiAgfSxcbiAgS2V5Wjoge1xuICAgIG1haW46ICfRjycsXG4gICAgbWFpbkNhcHM6ICfQrycsXG4gICAgc2Vjb25kOiAneicsXG4gICAgc2Vjb25kQ2FwczogJ1onLFxuICB9LFxuICBLZXlYOiB7XG4gICAgbWFpbjogJ9GHJyxcbiAgICBtYWluQ2FwczogJ9CnJyxcbiAgICBzZWNvbmQ6ICd4JyxcbiAgICBzZWNvbmRDYXBzOiAnWCcsXG4gIH0sXG4gIEtleUM6IHtcbiAgICBtYWluOiAn0YEnLFxuICAgIG1haW5DYXBzOiAn0KEnLFxuICAgIHNlY29uZDogJ2MnLFxuICAgIHNlY29uZENhcHM6ICdDJyxcbiAgfSxcbiAgS2V5Vjoge1xuICAgIG1haW46ICfQvCcsXG4gICAgbWFpbkNhcHM6ICfQnCcsXG4gICAgc2Vjb25kOiAndicsXG4gICAgc2Vjb25kQ2FwczogJ1YnLFxuICB9LFxuICBLZXlCOiB7XG4gICAgbWFpbjogJ9C4JyxcbiAgICBtYWluQ2FwczogJ9CYJyxcbiAgICBzZWNvbmQ6ICdiJyxcbiAgICBzZWNvbmRDYXBzOiAnQicsXG4gIH0sXG4gIEtleU46IHtcbiAgICBtYWluOiAn0YInLFxuICAgIG1haW5DYXBzOiAn0KInLFxuICAgIHNlY29uZDogJ24nLFxuICAgIHNlY29uZENhcHM6ICdOJyxcbiAgfSxcbiAgS2V5TToge1xuICAgIG1haW46ICfRjCcsXG4gICAgbWFpbkNhcHM6ICfQrCcsXG4gICAgc2Vjb25kOiAnbScsXG4gICAgc2Vjb25kQ2FwczogJ00nLFxuICB9LFxuICBDb21tYToge1xuICAgIG1haW46ICfQsScsXG4gICAgbWFpbkNhcHM6ICfQkScsXG4gICAgc2Vjb25kOiAnJiM0NDsnLFxuICAgIHNlY29uZENhcHM6ICcmIzEzOTsnLFxuICB9LFxuICBQZXJpb2Q6IHtcbiAgICBtYWluOiAn0Y4nLFxuICAgIG1haW5DYXBzOiAn0K4nLFxuICAgIHNlY29uZDogJyYjNDY7JyxcbiAgICBzZWNvbmRDYXBzOiAnJiMxNTU7JyxcbiAgfSxcbiAgU2xhc2g6IHtcbiAgICBtYWluOiAnJiM0NjsnLFxuICAgIG1haW5DYXBzOiAnJiM0NDsnLFxuICAgIHNlY29uZDogJyYjNDc7JyxcbiAgICBzZWNvbmRDYXBzOiAnJiM2MzsnLFxuICB9LFxuICBBcnJvd1VwOiB7XG4gICAgbWFpbjogJyZ1YXJyOycsXG4gICAgbWFpbkNhcHM6ICcmdWFycjsnLFxuICAgIHNlY29uZDogJyZ1YXJyOycsXG4gICAgc2Vjb25kQ2FwczogJyZ1YXJyOycsXG4gIH0sXG4gIFNoaWZ0UmlnaHQ6IHtcbiAgICBtYWluOiAnU2hpZnQnLFxuICAgIG1haW5DYXBzOiAnU2hpZnQnLFxuICAgIHNlY29uZDogJ1NoaWZ0JyxcbiAgICBzZWNvbmRDYXBzOiAnU2hpZnQnLFxuICB9LFxuICBDb250cm9sTGVmdDoge1xuICAgIG1haW46ICdDdHJsJyxcbiAgICBtYWluQ2FwczogJ0N0cmwnLFxuICAgIHNlY29uZDogJ0N0cmwnLFxuICAgIHNlY29uZENhcHM6ICdDdHJsJyxcbiAgfSxcbiAgV2luOiB7XG4gICAgbWFpbjogJ1dpbicsXG4gICAgbWFpbkNhcHM6ICdXaW4nLFxuICAgIHNlY29uZDogJ1dpbicsXG4gICAgc2Vjb25kQ2FwczogJ1dpbicsXG4gIH0sXG4gIEFsdExlZnQ6IHtcbiAgICBtYWluOiAnQWx0JyxcbiAgICBtYWluQ2FwczogJ0FsdCcsXG4gICAgc2Vjb25kOiAnQWx0JyxcbiAgICBzZWNvbmRDYXBzOiAnQWx0JyxcbiAgfSxcbiAgU3BhY2U6IHtcbiAgICBtYWluOiAnJyxcbiAgICBtYWluQ2FwczogJycsXG4gICAgc2Vjb25kOiAnJyxcbiAgICBzZWNvbmRDYXBzOiAnJyxcbiAgfSxcbiAgQWx0UmlnaHQ6IHtcbiAgICBtYWluOiAnQWx0JyxcbiAgICBtYWluQ2FwczogJ0FsdCcsXG4gICAgc2Vjb25kOiAnQWx0JyxcbiAgICBzZWNvbmRDYXBzOiAnQWx0JyxcbiAgfSxcbiAgQXJyb3dMZWZ0OiB7XG4gICAgbWFpbjogJyZsYXJyOycsXG4gICAgbWFpbkNhcHM6ICcmbGFycjsnLFxuICAgIHNlY29uZDogJyZsYXJyOycsXG4gICAgc2Vjb25kQ2FwczogJyZsYXJyOycsXG4gIH0sXG4gIEFycm93RG93bjoge1xuICAgIG1haW46ICcmZGFycjsnLFxuICAgIG1haW5DYXBzOiAnJmRhcnI7JyxcbiAgICBzZWNvbmQ6ICcmZGFycjsnLFxuICAgIHNlY29uZENhcHM6ICcmZGFycjsnLFxuICB9LFxuICBBcnJvd1JpZ2h0OiB7XG4gICAgbWFpbjogJyZyYXJyOycsXG4gICAgbWFpbkNhcHM6ICcmcmFycjsnLFxuICAgIHNlY29uZDogJyZyYXJyOycsXG4gICAgc2Vjb25kQ2FwczogJyZyYXJyOycsXG4gIH0sXG4gIENvbnRyb2xSaWdodDoge1xuICAgIG1haW46ICdDdHJsJyxcbiAgICBtYWluQ2FwczogJ0N0cmwnLFxuICAgIHNlY29uZDogJ0N0cmwnLFxuICAgIHNlY29uZENhcHM6ICdDdHJsJyxcbiAgfSxcbn07XG5cblxuY2xhc3MgS2V5Ym9hcmQge1xuICBjb25zdHJ1Y3RvcihMYW5ndWFnZSA9IHRydWUsIENhc2UgPSBmYWxzZSkge1xuICAgIHRoaXMuY2Fwc2xvY2sgPSBDYXNlO1xuICAgIHRoaXMubWFpbiA9IExhbmd1YWdlO1xuICB9XG5cbiAgY3JlYXRlVGV4dEFyZWEoKSB7XG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwid3JhcHBlclwiPjx0ZXh0YXJlYSBjbGFzcz1cInJlc3VsdFwiIGlkPVwicmVzdWx0XCIgcm93cz1cIjZcIiBjb2xzPVwiNjBcIj48L3RleHRhcmVhPjxkaXYgY2xhc3M9XCJrZXlib2FyZFwiIGlkPVwia2V5Ym9hcmRcIj48L2Rpdj48L2Rpdj4nO1xuICB9XG5cbiAgY3JlYXRlS2V5Ym9hcmQoKSB7XG4gICAgY29uc3Qga2V5Ym9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5Ym9hcmQnKTtcbiAgICBpZiAodGhpcy5jYXBzbG9jayA9PT0gZmFsc2UgJiYgdGhpcy5tYWluID09PSB0cnVlKSB7XG4gICAgICBPYmplY3Qua2V5cyhrZXlib2FyZFN5bWJvbHMpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0gPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2tleScsICdiYWNrc3BhY2UnKTtcbiAgICAgICAgICBkaXYuaWQgPSBpdGVtO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBrZXlib2FyZFN5bWJvbHNbaXRlbV0ubWFpbjtcbiAgICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdUYWInIHx8IGl0ZW0gPT09ICdEZWwnKSB7XG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2tleScsICd0YWInKTtcbiAgICAgICAgICBkaXYuaWQgPSBpdGVtO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBrZXlib2FyZFN5bWJvbHNbaXRlbV0ubWFpbjtcbiAgICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdDYXBzTG9jaycgfHwgaXRlbSA9PT0gJ1NoaWZ0TGVmdCcpIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5JywgJ2NhcHNsb2NrJyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLm1haW47XG4gICAgICAgICAga2V5Ym9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtID09PSAnRW50ZXInIHx8IGl0ZW0gPT09ICdTaGlmdFJpZ2h0Jykge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrZXknLCAnZW50ZXInKTtcbiAgICAgICAgICBkaXYuaWQgPSBpdGVtO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBrZXlib2FyZFN5bWJvbHNbaXRlbV0ubWFpbjtcbiAgICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdTcGFjZScpIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5JywgJ3NwYWNlJyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLm1haW47XG4gICAgICAgICAga2V5Ym9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5Jyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLm1haW47XG4gICAgICAgICAga2V5Ym9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNhcHNsb2NrID09PSB0cnVlICYmIHRoaXMubWFpbiA9PT0gdHJ1ZSkge1xuICAgICAgT2JqZWN0LmtleXMoa2V5Ym9hcmRTeW1ib2xzKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrZXknLCAnYmFja3NwYWNlJyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLm1haW5DYXBzO1xuICAgICAgICAgIGtleWJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gJ1RhYicgfHwgaXRlbSA9PT0gJ0RlbCcpIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5JywgJ3RhYicpO1xuICAgICAgICAgIGRpdi5pZCA9IGl0ZW07XG4gICAgICAgICAgZGl2LmlubmVySFRNTCA9IGtleWJvYXJkU3ltYm9sc1tpdGVtXS5tYWluQ2FwcztcbiAgICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdDYXBzTG9jaycgfHwgaXRlbSA9PT0gJ1NoaWZ0TGVmdCcpIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5JywgJ2NhcHNsb2NrJyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLm1haW5DYXBzO1xuICAgICAgICAgIGtleWJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gJ0VudGVyJyB8fCBpdGVtID09PSAnU2hpZnRSaWdodCcpIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5JywgJ2VudGVyJyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLm1haW5DYXBzO1xuICAgICAgICAgIGtleWJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gJ1NwYWNlJykge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrZXknLCAnc3BhY2UnKTtcbiAgICAgICAgICBkaXYuaWQgPSBpdGVtO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBrZXlib2FyZFN5bWJvbHNbaXRlbV0ubWFpbkNhcHM7XG4gICAgICAgICAga2V5Ym9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5Jyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLm1haW5DYXBzO1xuICAgICAgICAgIGtleWJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jYXBzbG9jayA9PT0gZmFsc2UgJiYgdGhpcy5tYWluID09PSBmYWxzZSkge1xuICAgICAgT2JqZWN0LmtleXMoa2V5Ym9hcmRTeW1ib2xzKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrZXknLCAnYmFja3NwYWNlJyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLnNlY29uZDtcbiAgICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdUYWInIHx8IGl0ZW0gPT09ICdEZWwnKSB7XG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2tleScsICd0YWInKTtcbiAgICAgICAgICBkaXYuaWQgPSBpdGVtO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBrZXlib2FyZFN5bWJvbHNbaXRlbV0uc2Vjb25kO1xuICAgICAgICAgIGtleWJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gJ0NhcHNMb2NrJyB8fCBpdGVtID09PSAnU2hpZnRMZWZ0Jykge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrZXknLCAnY2Fwc2xvY2snKTtcbiAgICAgICAgICBkaXYuaWQgPSBpdGVtO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBrZXlib2FyZFN5bWJvbHNbaXRlbV0uc2Vjb25kO1xuICAgICAgICAgIGtleWJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gJ0VudGVyJyB8fCBpdGVtID09PSAnU2hpZnRSaWdodCcpIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5JywgJ2VudGVyJyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLnNlY29uZDtcbiAgICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdTcGFjZScpIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5JywgJ3NwYWNlJyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLnNlY29uZDtcbiAgICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrZXknKTtcbiAgICAgICAgICBkaXYuaWQgPSBpdGVtO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBrZXlib2FyZFN5bWJvbHNbaXRlbV0uc2Vjb25kO1xuICAgICAgICAgIGtleWJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jYXBzbG9jayA9PT0gdHJ1ZSAmJiB0aGlzLm1haW4gPT09IGZhbHNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhrZXlib2FyZFN5bWJvbHMpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0gPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2tleScsICdiYWNrc3BhY2UnKTtcbiAgICAgICAgICBkaXYuaWQgPSBpdGVtO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBrZXlib2FyZFN5bWJvbHNbaXRlbV0uc2Vjb25kQ2FwcztcbiAgICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdUYWInIHx8IGl0ZW0gPT09ICdEZWwnKSB7XG4gICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2tleScsICd0YWInKTtcbiAgICAgICAgICBkaXYuaWQgPSBpdGVtO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBrZXlib2FyZFN5bWJvbHNbaXRlbV0uc2Vjb25kQ2FwcztcbiAgICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdDYXBzTG9jaycgfHwgaXRlbSA9PT0gJ1NoaWZ0TGVmdCcpIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5JywgJ2NhcHNsb2NrJyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLnNlY29uZENhcHM7XG4gICAgICAgICAga2V5Ym9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtID09PSAnRW50ZXInIHx8IGl0ZW0gPT09ICdTaGlmdFJpZ2h0Jykge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrZXknLCAnZW50ZXInKTtcbiAgICAgICAgICBkaXYuaWQgPSBpdGVtO1xuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBrZXlib2FyZFN5bWJvbHNbaXRlbV0uc2Vjb25kQ2FwcztcbiAgICAgICAgICBrZXlib2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdTcGFjZScpIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5JywgJ3NwYWNlJyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLnNlY29uZENhcHM7XG4gICAgICAgICAga2V5Ym9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna2V5Jyk7XG4gICAgICAgICAgZGl2LmlkID0gaXRlbTtcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0ga2V5Ym9hcmRTeW1ib2xzW2l0ZW1dLnNlY29uZENhcHM7XG4gICAgICAgICAga2V5Ym9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IENhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2Fwc2xvY2s7XG4gIH1cblxuICBjaGFuZ2VDYXNlKCkge1xuICAgIGlmICh0aGlzLmNhcHNsb2NrID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNhcHNsb2NrID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNhcHNsb2NrID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5jYXBzbG9jayA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IExhbmd1YWdlKCkge1xuICAgIHJldHVybiB0aGlzLm1haW47XG4gIH1cblxuICBzZXQgTGFuZ3VhZ2UodmFsdWUpIHtcbiAgICB0aGlzLm1haW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGNoYW5nZUxhbmd1YWdlKCkge1xuICAgIGlmICh0aGlzLm1haW4gPT09IHRydWUpIHtcbiAgICAgIHRoaXMubWFpbiA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tYWluID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5tYWluID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgdGV4dEFyZWEgPSBuZXcgS2V5Ym9hcmQodHJ1ZSwgZmFsc2UpO1xuY29uc29sZS5sb2coYHRleHRhcmVhLkxhbmcgPSAke3RleHRBcmVhLkxhbmd1YWdlfWApO1xuLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0ZXh0QXJlYS5MYW5ndWFnZSwgdGV4dEFyZWEuTGFuZ3VhZ2UpO1xuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB0ZXh0QXJlYS5jcmVhdGVUZXh0QXJlYSgpO1xudGV4dEFyZWEuY3JlYXRlS2V5Ym9hcmQoKTtcblxuLy9kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHRleHRBcmVhLmNyZWF0ZVRleHRBcmVhKCk7XG4vL2NvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJykpO1xuLy9jb25zb2xlLmxvZyh0ZXh0QXJlYS5MYW5ndWFnZSk7XG4vL3RleHRBcmVhLmNyZWF0ZUtleWJvYXJkKCk7XG5cbmNvbnN0IGtleUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleWJvYXJkJyk7XG5cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xuaW5wdXQuZm9jdXMoKTtcbmtleUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdDYXBzTG9jaycpIHtcbiAgICBrZXlCb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICB0ZXh0QXJlYS5jaGFuZ2VDYXNlKCk7XG4gICAgdGV4dEFyZWEuY3JlYXRlS2V5Ym9hcmQoKTtcbiAgfVxufSk7XG5cbmtleUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICBpbnB1dC5mb2N1cygpO1xuICBjb25zdCB7dGFyZ2V0fSA9IGV2ZW50O1xuICBjb25zdCBjbGFzc05hbWUgPSB0YXJnZXQuaWQ7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xhc3NOYW1lKTtcbiAgZWwuY2xhc3NMaXN0LmFkZCgnY2xpY2snKTtcbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ1RhYicgJiYgY2xhc3NOYW1lICE9PSAnQ2Fwc0xvY2snICYmIGNsYXNzTmFtZSAhPT0gJ1NoaWZ0TGVmdCcgJiYgY2xhc3NOYW1lICE9PSAnU2hpZnRSaWdodCcgJiYgY2xhc3NOYW1lICE9PSAnQ29udHJvbExlZnQnICYmIGNsYXNzTmFtZSAhPT0gJ0NvbnRyb2xSaWdodCcgJiYgY2xhc3NOYW1lICE9PSAnbWV0YUtleScgJiYgY2xhc3NOYW1lICE9PSAnQmFja3NwYWNlJyAmJiBjbGFzc05hbWUgIT09ICdEZWxldGUnICYmIGNsYXNzTmFtZSAhPT0gJ0VudGVyJyAmJiBjbGFzc05hbWUgIT09ICdTcGFjZScgJiYgY2xhc3NOYW1lICE9PSAnQWx0TGVmdCcgJiYgY2xhc3NOYW1lICE9PSAnQWx0UmlnaHQnICYmIGNsYXNzTmFtZSAhPT0gJ0Fycm93TGVmdCcgJiYgY2xhc3NOYW1lICE9PSAnQXJyb3dVcCcgJiYgY2xhc3NOYW1lICE9PSAnQXJyb3dEb3duJyAmJiBjbGFzc05hbWUgIT09ICdBcnJvd1JpZ2h0JyAmJiBjbGFzc05hbWUgIT09ICdXaW4nKSB7XG4gICAgaW5wdXQudmFsdWUgKz0gZWwuaW5uZXJIVE1MO1xuICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gJ1RhYicpIHtcbiAgICBpbnB1dC52YWx1ZSArPSAnXFx0JztcbiAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09ICdTcGFjZScpIHtcbiAgICBpbnB1dC52YWx1ZSArPSAnICc7XG4gIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09PSAnU2hpZnRMZWZ0JyB8fCBjbGFzc05hbWUgPT09ICdTaGlmdFJpZ2h0Jykge1xuICAgIGtleUJvYXJkLmlubmVySFRNTCA9ICcnO1xuICAgIHRleHRBcmVhLmNoYW5nZUNhc2UoKTtcbiAgICB0ZXh0QXJlYS5jcmVhdGVLZXlib2FyZCgpO1xuICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gJ0VudGVyJykge1xuICAgIGlucHV0LnZhbHVlICs9ICdcXG4nO1xuICB9XG59KTtcblxua2V5Qm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICBpbnB1dC5mb2N1cygpO1xuICBjb25zdCB7dGFyZ2V0fSA9IGV2ZW50O1xuICBjb25zdCBjbGFzc05hbWUgPSB0YXJnZXQuaWQ7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xhc3NOYW1lKTtcbiAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2snKTtcbiAgaWYgKGNsYXNzTmFtZSA9PT0gJ1NoaWZ0TGVmdCcgfHwgY2xhc3NOYW1lID09PSAnU2hpZnRSaWdodCcpIHtcbiAgICBrZXlCb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICB0ZXh0QXJlYS5jaGFuZ2VDYXNlKCk7XG4gICAgdGV4dEFyZWEuY3JlYXRlS2V5Ym9hcmQoKTtcbiAgfVxufSk7XG5cbmtleUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHt0YXJnZXR9ID0gZXZlbnQ7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IHRhcmdldC5pZDtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjbGFzc05hbWUpO1xuICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjbGljaycpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgaW5wdXQuZm9jdXMoKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gZXZlbnQuY29kZTtcblxuICBpZiAoZXZlbnQuY29kZSA9PT0gJ0FsdExlZnQnIHx8IChldmVudC5TaGlmdExlZnQgfHwgZXZlbnQubWV0YUtleSkpIHtcbiAgICBrZXlCb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICB0ZXh0QXJlYS5jaGFuZ2VMYW5ndWFnZSgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRleHRBcmVhLkxhbmd1YWdlLCB0ZXh0QXJlYS5MYW5ndWFnZSk7XG4gICAgY29uc29sZS5sb2coYHRleHRBcmVhLkxhbmd1YWdlID0gJHt0ZXh0QXJlYS5MYW5ndWFnZX0gbG9jYWxTdG9yYWdlLmdldEl0ZW0gPSAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKHRleHRBcmVhLkxhbmd1YWdlKX1gKTtcbiAgICB0ZXh0QXJlYS5jcmVhdGVLZXlib2FyZCgpO1xuICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdTaGlmdExlZnQnIHx8IGV2ZW50LmNvZGUgPT09ICdTaGlmdFJpZ2h0Jykge1xuICAgIGtleUJvYXJkLmlubmVySFRNTCA9ICcnO1xuICAgIHRleHRBcmVhLmNoYW5nZUNhc2UoKTtcbiAgICB0ZXh0QXJlYS5jcmVhdGVLZXlib2FyZCgpO1xuICB9XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2xhc3NOYW1lKTtcbiAgZWwuY2xhc3NMaXN0LmFkZCgnY2xpY2snKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICBpbnB1dC5mb2N1cygpO1xuICBjb25zdCBjbGFzc05hbWUgPSBldmVudC5jb2RlO1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNsYXNzTmFtZSk7XG4gIGlmIChjbGFzc05hbWUgPT09ICdDYXBzTG9jaycpIHtcbiAgICBrZXlCb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICB0ZXh0QXJlYS5jaGFuZ2VDYXNlKCk7XG4gICAgdGV4dEFyZWEuY3JlYXRlS2V5Ym9hcmQoKTtcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdjbGlja0NhcHMnKTtcbiAgfSBlbHNlIGlmIChldmVudC5jb2RlID09PSAnU2hpZnRMZWZ0JyB8fCBldmVudC5jb2RlID09PSAnU2hpZnRSaWdodCcpIHtcbiAgICBrZXlCb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICB0ZXh0QXJlYS5jaGFuZ2VDYXNlKCk7XG4gICAgdGV4dEFyZWEuY3JlYXRlS2V5Ym9hcmQoKTtcbiAgfVxuICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjbGljaycpO1xufSk7XG4iLCJpbXBvcnQgJy4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9jcmVhdGVLZXlib2FyZCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9