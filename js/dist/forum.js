module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var details_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! details-polyfill */ "./node_modules/details-polyfill/index.js");
/* harmony import */ var details_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(details_polyfill__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/details-polyfill/index.js":
/*!************************************************!*\
  !*** ./node_modules/details-polyfill/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;void (function (root, factory) {
  if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
}(this, function () {
  var DETAILS = 'details'
  var SUMMARY = 'summary'

  var supported = checkSupport()
  if (supported) return

  // Add a classname
  document.documentElement.className += ' no-details'

  window.addEventListener('click', clickHandler)

  injectStyle('details-polyfill-style',
    'html.no-details ' + DETAILS + ':not([open]) > :not(' + SUMMARY + ') { display: none; }\n' +
    'html.no-details ' + DETAILS + ' > ' + SUMMARY + ':before { content: "\u25b6"; display: inline-block; font-size: .8em; width: 1.5em; }\n' +
    'html.no-details ' + DETAILS + '[open] > ' + SUMMARY + ':before { content: "\u25bc"; }')

  /*
   * Click handler for `<summary>` tags
   */

  function clickHandler (e) {
    if (e.target.nodeName.toLowerCase() === 'summary') {
      var details = e.target.parentNode
      if (!details) return

      if (details.getAttribute('open')) {
        details.open = false
        details.removeAttribute('open')
      } else {
        details.open = true
        details.setAttribute('open', 'open')
      }
    }
  }

  /*
   * Checks for support for `<details>`
   */

  function checkSupport () {
    var el = document.createElement(DETAILS)
    if (!('open' in el)) return false

    el.innerHTML = '<' + SUMMARY + '>a</' + SUMMARY + '>b'
    document.body.appendChild(el)

    var diff = el.offsetHeight
    el.open = true
    var result = (diff != el.offsetHeight)

    document.body.removeChild(el)
    return result
  }

  /*
   * Injects styles (idempotent)
   */

  function injectStyle (id, style) {
    if (document.getElementById(id)) return

    var el = document.createElement('style')
    el.id = id
    el.innerHTML = style

    document.getElementsByTagName('head')[0].appendChild(el)
  }
})); // eslint-disable-line semi


/***/ })

/******/ });
//# sourceMappingURL=forum.js.map