(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Clipboard"] = factory();
	else
		root["Clipboard"] = factory();
})(globalThis, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

;// CONCATENATED MODULE: ./src/clipBoard.js


const copyEvent = function(ele, content) {
  ele.addEventListener('click', () => {
    navigator.clipboard.writeText(content.slice(0, -2)).then(res => {
      navigator.clipboard.readText().then(res => {
        console.log(res)
      })
    })
  })
}

const createClipboard = function({innerData, width = '', height = '', textColor = ''}) {
  let wrap = document.createElement('div');
  let pre = document.createElement('pre');
  let copyIco = document.createElement('span')

  pre.innerHTML = innerData;
  wrap.classList.add('wrap');
  wrap.style.cssText = `width: ${width}px; height: ${height}px; color: ${textColor}; `;
  copyIco.innerText = '复制';
  copyIco.classList.add('copy-ico');
  copyIco.addEventListener('click', function(){
    this.style.setProperty('background-color', '#aaa')
    this.style.setProperty('color', 'gray')
    setTimeout(() => {
      this.removeEventListener('click')
    });
  })

  copyEvent(copyIco, wrap.textContent)

  wrap.appendChild(pre);
  wrap.appendChild(copyIco);
  return wrap;
}

/* harmony default export */ const clipBoard = (createClipboard);
;// CONCATENATED MODULE: ./src/index.js


// let clipb = createClipboard(params)
// document.body.appendChild(clipb)

/* harmony default export */ const src = (clipBoard);
/******/ 	return __webpack_exports__;
/******/ })()
;
});