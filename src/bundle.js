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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/styles/main.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9998; }\n\n.cc-revoke {\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 3px;\n  margin-right: 10px;\n  border-radius: 10px;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalizes the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n.form {\n  display: flex;\n  margin: 16px; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0;\n    padding: 0 10px; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      text-transform: uppercase;\n      display: inline-block; }\n\n.cc-categories {\n  display: inline-flex;\n  padding: 0;\n  margin: 0; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-radius: 0;\n    border-right: none;\n    outline: none;\n    text-transform: capitalize; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      height: 18px;\n      width: 18px;\n      margin-bottom: 5px;\n      margin-right: 5px;\n      display: block;\n      cursor: pointer; }\n    .cc-categories .cc-btn label {\n      display: flex;\n      margin: 0;\n      align-items: center;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 10px;\n      border-top-left-radius: 10px;\n      border-bottom-left-radius: 10px; }\n  .cc-categories .cc-info {\n    font-size: 1.0em;\n    border-left: none;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border-right: 2px solid lightgrey;\n    padding: 4px; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 14px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: calc(100% - 32px);\n    max-width: 350px;\n    flex-direction: column; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: statuses, statusDeny, statusAllow, statusDismiss, categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statuses", function() { return statuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDeny", function() { return statusDeny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusAllow", function() { return statusAllow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDismiss", function() { return statusDismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });


var statuses = ["DENY", "ALLOW", "DISMISS"];
var statusDeny = "DENY";
var statusAllow = "ALLOW";
var statusDismiss = "DISMISS";
var categories = [{
  name: "ESSENTIEL",
  explainText: "Ces cookies sont essentiels pour la navigation sur Nextories.com"
}, {
  name: "STATISTIQUES",
  explainText: "Ces cookies permettent de réaliser des statistiques anonymes de visites et d'utilisation du site internet."
}];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/CookieConsent */ "./src/models/CookieConsent.js");


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}




if (typeof exports !== 'undefined') {
  module.exports = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
} else {
  window.CookieConsent = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/models/Base.js":
/*!****************************!*\
  !*** ./src/models/Base.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);





var emitter = new events__WEBPACK_IMPORTED_MODULE_2___default.a();

var Base = function Base() {
  var defaultOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Base);

  this.options = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["mergeOptions"])(defaultOptions, options);
  this.on = emitter.on.bind(emitter);
  this.emit = emitter.emit.bind(emitter);
};



/***/ }),

/***/ "./src/models/CookieConsent.js":
/*!*************************************!*\
  !*** ./src/models/CookieConsent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieConsent; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _Legal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Legal */ "./src/models/Legal.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Location */ "./src/models/Location.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Popup */ "./src/models/Popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // This function initializes the app by combining the use of the Popup, Locator and Law modules
// You can string together these three modules yourself however you want, by writing a new function.

var CookieConsent =
/*#__PURE__*/
function (_Base) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(CookieConsent, _Base);

  function CookieConsent() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CookieConsent);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CookieConsent).call(this, options));
    var answers = _constants__WEBPACK_IMPORTED_MODULE_11__["categories"].map(function (category) {
      var cookieName = _this.options.cookie && _this.options.cookie.name ? _this.options.cookie.name : 'cookieconsent_status_';
      var answer = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getCookie"])(cookieName + category.name);
      return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isValidStatus"])(answer) ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, category.name, answer) : undefined;
    }).filter(function (obj) {
      return obj ? obj[Object.keys(obj)[0]] : false;
    }); // if they have already answered

    if (answers.length > 0) {
      _this.initializationComplete({
        answers: answers
      });
    } else if (_this.options.legal && _this.options.legal.countryCode) {
      _this.initializationComplete({
        code: _this.options.legal.countryCode
      });
    } else if (_this.options.location) {
      new _Location__WEBPACK_IMPORTED_MODULE_9__["default"](_this.options.location).locate(_this.initializationComplete.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), _this.initializationError.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)));
    } else {
      _this.initializationComplete({});
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CookieConsent, [{
    key: "initializationComplete",
    value: function initializationComplete(result) {
      var _this2 = this;

      if (result.code) {
        this.options = new _Legal__WEBPACK_IMPORTED_MODULE_8__["default"](this.options.legal).applyLaw(this.options, result.code);
      }

      var initialData = result.answers && result.answers.reduce(function (obj, val) {
        return _objectSpread({}, obj, {}, val);
      });
      this.popup = new _Popup__WEBPACK_IMPORTED_MODULE_10__["default"](this.options, initialData);
      setTimeout(function () {
        return _this2.emit("initialized", _this2.popup, initialData);
      }, 0);
    }
  }, {
    key: "initializationError",
    value: function initializationError(error) {
      var _this3 = this;

      setTimeout(function () {
        return _this3.emit("error", error, new _Popup__WEBPACK_IMPORTED_MODULE_10__["default"](_this3.options));
      }, 0);
    }
  }, {
    key: "getCountryLaws",
    value: function getCountryLaws(countryCode) {
      return new _Legal__WEBPACK_IMPORTED_MODULE_8__["default"](this.options.legal).get(countryCode);
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.popup.isOpen();
    }
  }, {
    key: "close",
    value: function close() {
      return this.popup.close(), this;
    }
  }, {
    key: "revokeChoice",
    value: function revokeChoice() {
      return this.popup.revokeChoice(), this;
    }
  }, {
    key: "open",
    value: function open() {
      return this.popup.open(), this;
    }
  }, {
    key: "toggleRevokeButton",
    value: function toggleRevokeButton(bool) {
      return this.popup.toggleRevokeButton(bool), this;
    }
  }, {
    key: "setStatuses",
    value: function setStatuses(status) {
      return this.popup.setStatuses(status), this;
    }
  }, {
    key: "clearStatuses",
    value: function clearStatuses() {
      return this.popup.clearStatuses(), this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      return this.popup.destroy(), this;
    }
  }]);

  return CookieConsent;
}(_Base__WEBPACK_IMPORTED_MODULE_7__["default"]);


_constants__WEBPACK_IMPORTED_MODULE_11__["statuses"].reduce(function (obj, status) {
  return Object.defineProperty(CookieConsent, status, {
    get: function get() {
      return status;
    },
    set: function set() {},
    enumerable: false,
    writeable: false,
    configurable: false
  }), obj;
}, CookieConsent);

/***/ }),

/***/ "./src/models/Legal.js":
/*!*****************************!*\
  !*** ./src/models/Legal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Legal; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_legal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options/legal */ "./src/options/legal.js");










var Legal =
/*#__PURE__*/
function (_Base) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Legal, _Base);

  function Legal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Legal);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Legal).call(this, _options_legal__WEBPACK_IMPORTED_MODULE_6__["default"], options));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Legal, [{
    key: "get",
    value: function get(countryCode) {
      return {
        hasLaw: this.options.hasLaw.indexOf(countryCode) >= 0,
        revokable: this.options.revokable.indexOf(countryCode) >= 0,
        explicitAction: this.options.explicitAction.indexOf(countryCode) >= 0
      };
    }
  }, {
    key: "applyLaw",
    value: function applyLaw(options, countryCode) {
      var country = this.get(countryCode);

      if (!country.hasLaw) {
        // The country has no cookie law
        options.enabled = false;
        this.emit("noCookieLaw", countryCode, country);
      }

      if (this.options.regionalLaw) {
        if (country.revokable) {
          // We must provide an option to revoke consent at a later time
          options.revokable = true;
        }

        if (country.explicitAction) {
          // The user must explicitly click the consent button
          options.dismissOnScroll = false;
          options.dismissOnTimeout = false;
        }
      }

      return options;
    }
  }]);

  return Legal;
}(_Base__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/models/Location.js":
/*!********************************!*\
  !*** ./src/models/Location.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options/location */ "./src/options/location.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");









 // An object containing all the location services we have already set up.
// When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
// When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.
// When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
// cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
// with the data (or Error), and `cookieconsent.locate` will take care of the rest

var Location =
/*#__PURE__*/
function (_Base) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Location, _Base);

  function Location(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Location);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Location).call(this, _options_location__WEBPACK_IMPORTED_MODULE_6__["default"], options));
    _this.currentServiceIndex = -1; // the index (in options) of the service we're currently using

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Location, [{
    key: "getNextService",
    value: function getNextService() {
      var service;

      do {
        service = this.getServiceByIdx(++this.currentServiceIndex);
      } while (this.currentServiceIndex < this.options.services.length && !service);

      return service;
    }
  }, {
    key: "getServiceByIdx",
    value: function getServiceByIdx(idx) {
      // This can either be the name of a default locationService, or a function.
      var serviceOption = this.options.services[idx]; // If it's a string, use one of the location services.

      if (typeof serviceOption === 'function') {
        var dynamicOpts = serviceOption();
        return dynamicOpts.name ? Object.assign({}, dynamicOpts, this.options.serviceDefinitions[dynamicOpts.name](dynamicOpts)) : dynamicOpts;
      } // If it's a string, use one of the location services.


      if (typeof serviceOption === 'string') {
        return this.options.serviceDefinitions[serviceOption]();
      } // If it's an object, assume {name: 'ipinfo', ...otherOptions}
      // Allows user to pass in API keys etc.


      if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"])(serviceOption)) {
        return this.options.serviceDefinitions[serviceOption.name](serviceOption);
      }

      return null;
    } // This runs the service located at index `currentServiceIndex`.
    // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully

  }, {
    key: "locate",
    value: function locate(complete, error) {
      var service = this.getNextService();

      if (!service) {
        error(new Error('No services to run'));
        return;
      }

      this.callbackComplete = complete;
      this.callbackError = error;
      this.runService(service, this.runNextServiceOnError.bind(this));
    } // Potentially adds a callback to a url for jsonp.

  }, {
    key: "setupUrl",
    value: function setupUrl(service) {
      var serviceOpts = this.getCurrentServiceOpts();
      return service.url.replace(/\{(.*?)\}/g, function (_, param) {
        if (param === 'callback') {
          var tempName = 'callback' + Date.now();

          window[tempName] = function (res) {
            service.__JSONP_DATA = JSON.stringify(res);
          };

          return tempName;
        }

        if (param in serviceOpts.interpolateUrl) {
          return serviceOpts.interpolateUrl[param];
        }
      });
    } // requires a `service` object that defines at least a `url` and `callback`

  }, {
    key: "runService",
    value: function runService(service, complete) {
      var _this2 = this;

      // basic check to ensure it resembles a `service`
      if (!service || !service.url || !service.callback) {
        return;
      } // we call either `getScript` or `makeAsyncRequest` depending on the type of resource


      var requestFunction = service.isScript ? _utils__WEBPACK_IMPORTED_MODULE_7__["getScript"] : _utils__WEBPACK_IMPORTED_MODULE_7__["makeAsyncRequest"]; // both functions have similar signatures so we can pass the same arguments to both

      requestFunction(this.setupUrl(service), function (xhr) {
        // if `!xhr`, then `getScript` function was used, so there is no response text
        var responseText = xhr ? xhr.responseText : ''; // if the resource is a script, then this function is called after the script has been run.
        // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
        // been called (as the JSONP callback). This callback sets the __JSONP_DATA property

        if (service.__JSONP_DATA) {
          responseText = service.__JSONP_DATA;
          delete service.__JSONP_DATA;
        } // call the service callback with the response text (so it can parse the response)


        _this2.runServiceCallback.call(_this2, complete, service, responseText);
      }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
    } // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
    // We need to run its callback which determines if its successful or not
    // `complete` is called on success or failure

  }, {
    key: "runServiceCallback",
    value: function runServiceCallback(complete, service, responseText) {
      var _this3 = this;

      // this is the function that is called if the service uses the async callback in its handler method
      var serviceResultHandler = function serviceResultHandler(asyncResult) {
        // if `result` is a valid value, then this function shouldn't really run
        // even if it is called by `service.callback`
        if (!result) {
          _this3.onServiceResult(complete, asyncResult);
        }
      }; // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
      // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready


      var result = service.callback(serviceResultHandler, responseText);

      if (result) {
        this.onServiceResult(complete, result);
      }
    } // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
    // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data

  }, {
    key: "onServiceResult",
    value: function onServiceResult(complete, result) {
      // convert result to nodejs style async callback
      if (result instanceof Error || result && result.error) {
        complete.call(this, result, null);
      } else {
        complete.call(this, null, result);
      }
    } // if `err` is set, the next service handler is called
    // if `err` is null, the `onComplete` handler is called with `data`

  }, {
    key: "runNextServiceOnError",
    value: function runNextServiceOnError(err, data) {
      if (err) {
        this.logError(err);
        var nextService = this.getNextService();

        if (nextService) {
          this.runService(nextService, this.runNextServiceOnError.bind(this));
        } else {
          this.completeService.call(this, this.callbackError, new Error('All services failed'));
        }
      } else {
        this.completeService.call(this, this.callbackComplete, data);
      }
    }
  }, {
    key: "getCurrentServiceOpts",
    value: function getCurrentServiceOpts() {
      var val = this.options.services[this.currentServiceIndex];

      if (typeof val == 'string') {
        return {
          name: val
        };
      } else if (typeof val == 'function') {
        return val();
      } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"])(val)) {
        return val;
      } else {
        return {};
      }
    } // calls the `onComplete` callback after resetting the `currentServiceIndex`

  }, {
    key: "completeService",
    value: function completeService(fn, data) {
      this.currentServiceIndex = -1;
      fn && fn(data);
    }
  }, {
    key: "logError",
    value: function logError(err) {
      console.warn("The service[".concat(this.currentServiceIndex, "] (").concat(this.getServiceByIdx(this.currentServiceIndex).url, ") responded with the following error"), err);
    }
  }]);

  return Location;
}(_Base__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/models/Popup.js":
/*!*****************************!*\
  !*** ./src/models/Popup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../options/popup */ "./src/options/popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");













var Popup =
/*#__PURE__*/
function (_Base) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Popup, _Base);

  function Popup(options, initialValues) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Popup);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Popup).call(this, _options_popup__WEBPACK_IMPORTED_MODULE_7__["default"], options));
    _this.userCategories = initialValues || {
      ESSENTIEL: _constants__WEBPACK_IMPORTED_MODULE_8__["statusAllow"],
      STATISTIQUES: _constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]
    };
    _this.customStyles = {};

    _this.transitionEnd = function () {
      var el = document.createElement('div');
      var trans = {
        t: 'transitionend',
        OT: 'oTransitionEnd',
        msT: 'MSTransitionEnd',
        MozT: 'transitionend',
        WebkitT: 'webkitTransitionEnd'
      };

      for (var prefix in trans) {
        if (trans.hasOwnProperty(prefix) && typeof el.style[prefix + 'ransition'] !== 'undefined') {
          return trans[prefix];
        }
      }

      return '';
    }(); //TODO RECUPERER LA BONNE VALEUR dans hasTransition


    _this.hasTransition = !!_this.transitionEnd; // returns true if `onComplete` was called

    if (_this.canUseCookies()) {
      // user has already answered
      _this.options.enabled = false;
    } // apply blacklist / whitelist


    if (_this.options.blacklistPage.includes(location.pathname)) {
      _this.options.enabled = false;
    }

    if (_this.options.whitelistPage.includes(location.pathname)) {
      _this.options.enabled = true;
    } // the full markup either contains the wrapper or it does not (for multiple instances)


    var cookiePopup = _this.options.window.replace('{{classes}}', _this.getPopupClasses().join(' ')).replace('{{children}}', _this.getPopupInnerMarkup()); // if user passes html, use it instead


    var customHTML = _this.options.overrideHTML;

    if (typeof customHTML == 'string' && customHTML.length) {
      cookiePopup = customHTML;
    } // if static, we need to grow the element from 0 height so it doesn't jump the page
    // content. we wrap an element around it which will mask the hidden content


    if (_this.options.static) {
      // `grower` is a wrapper div with a hidden overflow whose height is animated
      var wrapper = _this.appendMarkup("<div class=\"cc-grower\">".concat(cookiePopup, "</div>"));

      wrapper.style.display = ''; // set it to visible (because appendMarkup hides it)

      _this.element = wrapper.firstChild; // get the `element` reference from the wrapper

      _this.element.style.display = 'none';

      _this.element.classList.add('cc-invisible');
    } else {
      _this.element = _this.appendMarkup(cookiePopup);
    }

    _this.applyAutoDismiss();

    _this.applyRevokeButton();

    if (_this.options.autoOpen) {
      _this.autoOpen();
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Popup, [{
    key: "open",
    value: function open() {
      if (!this.element) return;

      if (!this.isOpen()) {
        if (this.hasTransition) {
          this.fadeIn();
        } else {
          this.element.style.display = '';
        }

        this.element.querySelectorAll('.cc-btn [type="checkbox"]').forEach(function (checkbox) {
          checkbox.dispatchEvent(new Event('change'));
        });

        if (this.options.revokable) {
          this.toggleRevokeButton();
        }

        this.emit("popupOpened");
      }

      return this;
    }
  }, {
    key: "close",
    value: function close(showRevoke) {
      if (!this.element) return;

      if (this.isOpen()) {
        if (this.hasTransition) {
          this.fadeOut();
        } else {
          this.element.style.display = 'none';
        }

        if (showRevoke && this.options.revokable) {
          this.toggleRevokeButton(true);
        }

        this.emit("popupClosed");
      }

      return this;
    }
  }, {
    key: "fadeIn",
    value: function fadeIn() {
      var _this2 = this;

      var el = this.element;
      if (!this.hasTransition || !el) return; // This should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
      // 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
      // has a chance to run, then we run it ourselves

      if (this.afterTransition) {
        this.afterFadeOut(el);
      }

      if (el.classList.contains('cc-invisible')) {
        el.style.display = '';

        if (this.options.static) {
          this.element.parentNode.style.maxHeight = this.element.clientHeight + 'px';
        }

        var fadeInTimeout = 20; // (ms) DO NOT MAKE THIS VALUE SMALLER. See below
        // Although most browsers can handle values less than 20ms, it should remain above this value.
        // This is because we are waiting for a "browser redraw" before we remove the 'cc-invisible' class.
        // If the class is remvoed before a redraw could happen, then the fadeIn effect WILL NOT work, and
        // the popup will appear from nothing. Therefore we MUST allow enough time for the browser to do
        // its thing. The actually difference between using 0 and 20 in a set timeout is neglegible anyway

        this.openingTimeout = setTimeout(function () {
          return _this2.afterFadeIn(el);
        }, fadeInTimeout);
      }
    }
    /**
     * This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
     * There is a good reason why it's called in a timeout. Read 'fadeIn'
     */

  }, {
    key: "afterFadeIn",
    value: function afterFadeIn(element) {
      this.openingTimeout = null;
      element.classList.remove('cc-invisible');
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      var _this3 = this;

      if (!this.hasTransition || !this.element) return;

      if (this.openingTimeout) {
        clearTimeout(this.openingTimeout);
        this.afterFadeIn(this.element);
      }

      if (!this.element.classList.contains('cc-invisible')) {
        if (this.options.static) {
          this.element.parentNode.style.maxHeight = '';
        }

        this.afterTransition = function () {
          return _this3.afterFadeOut(_this3.element);
        };

        this.element.addEventListener(this.transitionEnd, this.afterTransition);
        this.element.classList.add('cc-invisible');
      }
    }
  }, {
    key: "afterFadeOut",
    value: function afterFadeOut(el) {
      el.style.display = 'none'; // after close and before open, the display should be none

      el.removeEventListener(this.transitionEnd, this.afterTransition);
      this.afterTransition = null;
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.element && this.element.style.display === '' && (this.hasTransition ? !this.element.classList.contains('cc-invisible') : true);
    }
  }, {
    key: "toggleRevokeButton",
    value: function toggleRevokeButton(show) {
      if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
    }
  }, {
    key: "revokeChoice",
    value: function revokeChoice(preventOpen) {
      this.options.enabled = true;
      this.clearStatuses();
      this.emit("revokeChoice");

      if (!preventOpen) {
        this.autoOpen();
      }
    }
    /**
     * Has the user responded to the banner
     * @return { boolean } - true if any cookies have been set
     */

  }, {
    key: "hasAnswered",
    value: function hasAnswered() {
      return this.getStatuses().some(function (status) {
        return !!status;
      });
    }
    /**
     * Indicates if the user has given consent to all of the categories
     * @return { array<boolean> } - true if consent has been given
     */

  }, {
    key: "hasConsented",
    value: function hasConsented() {
      return this.getStatuses().map(function (status) {
        return status === _constants__WEBPACK_IMPORTED_MODULE_8__["statusAllow"] || status === _constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"];
      });
    } // opens the popup if no answer has been given

  }, {
    key: "autoOpen",
    value: function autoOpen() {
      var hasAnswered = this.hasAnswered();

      if (!hasAnswered && this.options.enabled) {
        this.open();
      } else if (hasAnswered && this.options.revokable) {
        this.toggleRevokeButton(true);
      }
    }
    /** 
     * Set's cookie statuses
     * @param { string<status> } allOrUndef      - If this is the only param, set ALL if not, set Uncategorized cookies statuses set to value.
     * @param { string<status> } essential       - Essential Cookies status set to value
     * @param { string<status> } personalization - Preferences / Functionality set to value
     * @param { string<status> } analytics       - Analytis Cookies status set to value
     * @param { string<status> } marketing       - Marketing Cookies status set to value
     * @return { undefined }
    */

  }, {
    key: "setStatuses",
    value: function setStatuses() {
      var _this4 = this,
          _arguments = arguments;

      var _this$options$cookie = this.options.cookie,
          name = _this$options$cookie.name,
          expiryDays = _this$options$cookie.expiryDays,
          domain = _this$options$cookie.domain,
          path = _this$options$cookie.path,
          secure = _this$options$cookie.secure;

      var updateCategoryStatus = function updateCategoryStatus(categoryName, status) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isValidStatus"])(status)) {
          var cookieName = name + '_' + categoryName;
          var previousStatus = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getCookie"])(cookieName);

          if (!previousStatus || status !== _constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setCookie"])(cookieName, status, expiryDays, domain, path, secure);

            _this4.emit("statusChanged", cookieName, status, previousStatus);
          }
        } else {
          _this4.clearStatuses();
        }
      };

      if (arguments.length === 0) {
        _constants__WEBPACK_IMPORTED_MODULE_8__["categories"].forEach(function (category) {
          return updateCategoryStatus(category.name, _this4.userCategories[category.name]);
        });
      } else if (arguments.length === 1) {
        _constants__WEBPACK_IMPORTED_MODULE_8__["categories"].forEach(function (category) {
          return updateCategoryStatus(category.name, _arguments[0]);
        });
      } else if (arguments.length > 1) {
        arguments.forEach(function (categoryStatus, index) {
          updateCategoryStatus(_this4.userCategories[index], categoryStatus);
        });
      }
    }
    /**
     * Get all cookie categoies statuses
     * @return { array<string> } - cookie categories status in order of categories
     */

  }, {
    key: "getStatuses",
    value: function getStatuses() {
      var _this5 = this;

      return _constants__WEBPACK_IMPORTED_MODULE_8__["categories"].map(function (category) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getCookie"])(_this5.options.cookie.name + '_' + category.name);
      });
    }
    /**
     * Clear all cookie categoies statuses
     */

  }, {
    key: "clearStatuses",
    value: function clearStatuses() {
      var _this$options$cookie2 = this.options.cookie,
          name = _this$options$cookie2.name,
          domain = _this$options$cookie2.domain,
          path = _this$options$cookie2.path;
      _constants__WEBPACK_IMPORTED_MODULE_8__["categories"].forEach(function (category) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setCookie"])(name + '_' + category.name, '', -1, domain, path);
      });
    }
  }, {
    key: "canUseCookies",
    value: function canUseCookies() {
      var _this6 = this;

      if (!window.navigator.cookieEnabled || window.CookiesOK || window.navigator.CookiesOK) {
        return true;
      }

      var statusesValues = this.getStatuses();
      var matches = statusesValues.map(function (status, index) {
        return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _constants__WEBPACK_IMPORTED_MODULE_8__["categories"][index].name, Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isValidStatus"])(status));
      });
      var hasMatches = matches.filter(function (match) {
        return match[Object.keys(match)[0]];
      }).length > 0;
      statusesValues.forEach(function (status, index) {
        return _this6.userCategories[_constants__WEBPACK_IMPORTED_MODULE_8__["categories"][index].name] === status ? status : _this6.userCategories[_constants__WEBPACK_IMPORTED_MODULE_8__["categories"][index].name];
      });
      return hasMatches;
    } // top, bottom, left, right

  }, {
    key: "getPositionClasses",
    value: function getPositionClasses() {
      return this.options.position.split('-').map(function (pos) {
        return 'cc-' + pos;
      });
    }
  }, {
    key: "getPopupClasses",
    value: function getPopupClasses() {
      var opts = this.options;
      var positionStyle = opts.position == 'top' || opts.position == 'bottom' ? 'banner' : 'floating';

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isMobile"])() && opts.mobileForceFloat) {
        positionStyle = 'floating';
      }

      var classes = ['cc-' + positionStyle, // floating or banner
      'cc-type-' + opts.type, // add the compliance type
      'cc-theme-' + opts.theme];

      if (opts.static) {
        classes.push('cc-static');
      }

      classes.push.apply(classes, this.getPositionClasses()); // we only add extra styles if `palette` has been set to a valid value

      this.attachCustomPalette(this.options.palette); // if we override the palette, add the class that enables this

      if (this.customStyleSelector) {
        classes.push(this.customStyleSelector);
      }

      return classes;
    }
  }, {
    key: "getPopupInnerMarkup",
    value: function getPopupInnerMarkup() {
      var interpolated = {};
      var opts = this.options; // removes link if showLink is false

      if (!opts.showLink) {
        opts.elements.link = '';
        opts.elements.messagelink = opts.elements.message;
      }

      Object.keys(opts.elements).forEach(function (prop) {
        interpolated[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["interpolateString"])(opts.elements[prop], function (name) {
          var str = opts.content[name];
          return name && typeof str == 'string' && str.length ? str : '';
        });
      }); // checks if the type is valid and defaults to info if it's not

      var complianceType = opts.compliance[opts.type];

      if (!complianceType) {
        complianceType = opts.compliance.info;
      } // build the compliance types from the already interpolated `elements`


      interpolated.compliance = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["interpolateString"])(complianceType, function (name) {
        return interpolated[name];
      }); // checks if the layout is valid and defaults to basic if it's not

      var layout = opts.layouts[opts.layout];

      if (!layout) {
        layout = opts.layouts.basic;
      }

      return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["interpolateString"])(layout, function (match) {
        return interpolated[match];
      });
    }
  }, {
    key: "appendMarkup",
    value: function appendMarkup(markup) {
      var _this7 = this;

      var opts = this.options;
      var div = document.createElement('div');
      var cont = opts.container && opts.container.nodeType === 1 ? opts.container : document.body;
      div.innerHTML = markup;
      var el = div.children[0];
      el.style.display = 'none';

      if (el.classList.contains('cc-window') && this.hasTransition) {
        el.classList.add('cc-invisible');
      }

      el.addEventListener('click', function (event) {
        return _this7.handleButtonClick(event);
      });
      el.querySelectorAll('.cc-btn [type="checkbox"]').forEach(function (checkbox) {
        //Initialize the checked value of checkboxes
        checkbox.checked = _this7.userCategories[checkbox.name] === _constants__WEBPACK_IMPORTED_MODULE_8__["statusAllow"];

        if (checkbox.name === 'ESSENTIEL') {
          checkbox.disabled = true;
          checkbox.checked = true;
        }

        checkbox.addEventListener('change', function () {
          _this7.userCategories[checkbox.name] = checkbox.checked ? _constants__WEBPACK_IMPORTED_MODULE_8__["statusAllow"] : _constants__WEBPACK_IMPORTED_MODULE_8__["statusDeny"];
        });
        checkbox.addEventListener('click', function (event) {
          return event.stopPropagation();
        });
      });
      el.querySelectorAll(".cc-info").forEach(function (showInfo) {
        showInfo.addEventListener('mousedown', function (event) {
          if (this === document.activeElement) {
            this.blur();
            event.preventDefault();
          }
        });
      });

      if (opts.autoAttach) {
        try {
          if (!cont.firstChild) {
            cont.appendChild(el);
          } else {
            cont.insertBefore(el, cont.firstChild);
          }
        } catch (error) {
          throw new Error("No container to attach too. Make sure the DOM has loaded. Is your script loaded just before the `</body>` tag?");
        }
      }

      return el;
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(event) {
      // returns the parent element with the specified class, or the original element - null if not found
      var btn = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["traverseDOMPath"])(event.target, 'cc-btn') || event.target;

      if (btn.classList.contains('cc-btn') && btn.classList.contains('cc-save')) {
        this.setStatuses();
        this.close(true);
        return;
      }

      if (btn.classList.contains('cc-btn')) {
        var matches = btn.className.match(new RegExp('\\bcc-(' + _constants__WEBPACK_IMPORTED_MODULE_8__["statuses"].map(function (str) {
          return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        }).join('|') + ')\\b'));
        var match = matches && matches[1] || false;

        if (match) {
          this.setStatuses(match);
          this.close(true);
        }

        return;
      }

      if (btn.classList.contains('cc-close')) {
        this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);
        this.close(true);
        return;
      }

      if (btn.classList.contains('cc-revoke')) {
        this.revokeChoice();
        return;
      }
    }
  }, {
    key: "attachCustomPalette",
    value: function attachCustomPalette(palette) {
      var hashStr = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["hash"])(JSON.stringify(palette));
      var selector = 'cc-color-override-' + hashStr;
      var isValid = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"])(palette);
      this.customStyleSelector = isValid ? selector : null;

      if (isValid) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["addCustomStylesheet"])(hashStr, palette, '.' + selector);
      }

      return isValid;
    }
  }, {
    key: "getEventPath",
    value: function getEventPath(event) {
      var path = event.composedPath ? event.composedPath() : function (arr, element) {
        while (element) {
          arr.push(element);
          element = element.parentNode;
        }

        return arr;
      }([], event.target);

      if (!path) {
        console.warn("'.path' & '.composedPath' failed to generate an event path.");
        return;
      }

      return path;
    }
  }, {
    key: "applyAutoDismiss",
    value: function applyAutoDismiss() {
      var _this8 = this;

      var _this$options = this.options,
          enabled = _this$options.enabled,
          delay = _this$options.dismissOnTimeout,
          scrollRange = _this$options.dismissOnScroll,
          dismissOnLinkClick = _this$options.dismissOnLinkClick,
          dismissOnWindowClick = _this$options.dismissOnWindowClick,
          dismissOnKeyPress = _this$options.dismissOnKeyPress;

      if (enabled) {
        if (typeof delay == 'number' && delay >= 0) {
          this.dismissTimeout = setTimeout(function () {
            _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);

            _this8.close(true);
          }, Math.floor(delay));
        } else if (typeof scrollRange == 'number' && scrollRange >= 0) {
          this.onWindowScroll = function () {
            if (window.pageYOffset > Math.floor(scrollRange)) {
              if (_this8.isOpen()) {
                _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);

                _this8.close(true);
              }

              window.removeEventListener('scroll', _this8.onWindowScroll, {
                passive: true
              });
              _this8.onWindowScroll = null;
            }
          };

          window.addEventListener('scroll', this.onWindowScroll, {
            passive: true
          });
        } else if (dismissOnWindowClick) {
          this.onWindowClick = function (evt) {
            if (!getEventPath(evt).some(function (element) {
              return _this8.options.ignoreClicksFrom.some(function (ignoredClick) {
                return element.classList && element.classList.contains(ignoredClick);
              });
            })) {
              _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);

              _this8.close(true);

              window.removeEventListener('click', _this8.onWindowClick);
              window.removeEventListener('touchend', _this8.onWindowClick);
              _this8.onWindowClick = null;
            }
          };

          window.addEventListener('click', this.onWindowClick);
          window.addEventListener('touchend', this.onWindowClick);
        } else if (dismissOnLinkClick) {
          this.onLinkClick = function (evt) {
            if (getEventPath(evt).some(function (elem) {
              return typeof elem.tagName !== 'undefined' && elem.tagName === 'A';
            })) {
              _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);

              _this8.close(true);

              window.removeEventListener('click', _this8.onLinkClick);
              _this8.onLinkClick = null;
            }
          };

          window.addEventListener('click', this.onLinkClick);
        } else if (dismissOnKeyPress) {
          this.onKeyPress = function (event) {
            var keyCode = event.keyCode;

            if (keyCode === 13) {
              _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusAllow"]);

              _this8.close(true);
            } else if (keyCode === 27) {
              _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);

              _this8.close(true);
            }
          };

          window.addEventListener('onkeypress', this.onKeyPress);
        }
      }
    }
  }, {
    key: "applyRevokeButton",
    value: function applyRevokeButton() {
      // revokable is true if advanced compliance is selected
      if (this.options.type != 'info' && this.options.regionalLaw == true) this.options.revokable = true; // animateRevokable false for mobile devices

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isMobile"])()) this.options.animateRevokable = false;

      if (this.options.revokable) {
        var classes = this.getPositionClasses();

        if (this.options.animateRevokable) {
          classes.push('cc-animate');
        }

        if (this.customStyleSelector) {
          classes.push(this.customStyleSelector);
        }

        if (this.options.theme) {
          classes.push('cc-theme-' + this.options.theme);
        }

        console.log(this.options.content.policy);
        var revokeBtn = this.options.revokeBtn.replace('{{classes}}', classes.join(' ')).replace('{{policy}}', this.options.content.policy);
        this.revokeBtn = this.appendMarkup(revokeBtn);
        var btn = this.revokeBtn;

        if (this.options.animateRevokable) {
          var onMouseMove = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["throttle"])(function (evt) {
            var active = false;
            var minY = 20;
            var maxY = window.innerHeight - 20;

            if (btn.classList.contains('cc-top') && evt.clientY < minY || btn.classList.contains('cc-bottom') && evt.clientY > maxY) {
              active = true;
            }

            if (active && !btn.classList.contains('cc-active')) {
              btn.classList.add('cc-active');
            } else if (!active && btn.classList.contains('cc-active')) {
              btn.classList.remove('cc-active');
            }
          }, 200);
          this.onMouseMove = onMouseMove;
          window.addEventListener('mousemove', onMouseMove);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      console.warn("Destroying...");

      if (this.element) {
        this.element.remove();
      }

      if (this.revokeBtn) {
        this.revokeBtn.remove();
      }

      if (this.onWindowScroll) {
        window.removeEventListener('scroll', this.onWindowScroll);
      }

      if (this.onWindowClick) {
        window.removeEventListener('click', this.onWindowClick);
        window.removeEventListener('touchend', this.onWindowClick);
      }

      if (this.onLinkClick) {
        window.removeEventListener('click', this.onLinkClick);
      }

      if (this.onKeyPress) {
        window.addEventListener('onkeypress', this.onKeyPress);
      }
    }
  }]);

  return Popup;
}(_Base__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/options/legal.js":
/*!******************************!*\
  !*** ./src/options/legal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  // Make this false if you want to disable all regional overrides for settings.
  // If true, options can differ by country, depending on their cookie law.
  // It does not affect hiding the popup for countries that do not have cookie law.
  regionalLaw: true,
  // countries that enforce some version of a cookie law
  hasLaw: ['AT', 'BE', 'BG', 'HR', 'CZ', 'CY', 'DK', 'EE', 'FI', 'FR', 'DE', 'EL', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'SK', 'ES', 'SE', 'GB', 'UK', 'GR', 'EU', 'RO'],
  // countries that say that all cookie consent choices must be revokable (a user must be able too change their mind)
  revokable: ['HR', 'CY', 'DK', 'EE', 'FR', 'DE', 'LV', 'LT', 'NL', 'NO', 'PT', 'ES'],
  // countries that say that a person can only "consent" if the explicitly click on "I agree".
  // in these countries, consent cannot be implied via a timeout or by scrolling down the page
  explicitAction: ['HR', 'IT', 'ES', 'NO']
});

/***/ }),

/***/ "./src/options/location.js":
/*!*********************************!*\
  !*** ./src/options/location.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var toError = function toError(obj) {
  return new Error('Error [' + (obj.code || 'UNKNOWN') + ']: ' + obj.error);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  // The default timeout is 5 seconds. This is mainly needed to catch JSONP requests that error.
  // Otherwise there is no easy way to catch JSONP errors. That means that if a JSONP fails, the
  // app will take `timeout` milliseconds to react to a JSONP network error.
  timeout: 5000,
  // the order that services will be attempted in
  services: ['ipinfo'
  /*
    // 'ipinfodb' requires some options, so we define it using an object
  // this object will be passed to the function that defines the service
    {
    name: 'ipinfodb',
    interpolateUrl: {
      // obviously, this is a fake key
      api_key: 'vOgI3748dnIytIrsJcxS7qsDf6kbJkE9lN4yEDrXAqXcKUNvjjZPox3ekXqmMMld'
    },
  },
    // as well as defining an object, you can define a function that returns an object
    function () {
    return {name: 'ipinfodb'}
  },
    */
  ],
  serviceDefinitions: {
    ipinfo: function ipinfo() {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//ipinfo.io',
        headers: ['Accept: application/json'],
        callback: function callback(done, response) {
          try {
            var json = JSON.parse(response);
            return json.error ? toError(json) : {
              code: json.country
            };
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
        }
      };
    },
    // This service requires an option to define `key`. Options are proived using objects or functions
    ipinfodb: function ipinfodb() {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}',
        isScript: true,
        // this is JSONP, therefore we must set it to run as a script
        callback: function callback(done, response) {
          try {
            var json = JSON.parse(response);
            return json.statusCode == 'ERROR' ? toError({
              error: json.statusMessage
            }) : {
              code: json.countryCode
            };
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
        }
      };
    },
    maxmind: function maxmind() {
      return {
        // This service responds with a JavaScript file which defines additional functionality. Once loaded, we must
        // make an additional AJAX call. Therefore we provide a `done` callback that can be called asynchronously
        url: '//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
        isScript: true,
        // this service responds with a JavaScript file, so it must be run as a script
        callback: function callback(done) {
          // if everything went okay then `geoip2` WILL be defined
          if (!window.geoip2) {
            done(new Error('Unexpected response format. The downloaded script should have exported `geoip2` to the global scope'));
            return;
          }

          geoip2.country(function (location) {
            try {
              done({
                code: location.country.iso_code
              });
            } catch (err) {
              done(toError(err));
            }
          }, function (err) {
            done(toError(err));
          }); // We can't return anything, because we need to wait for the second AJAX call to return.
          // Then we can 'complete' the service by passing data or an error to the `done` callback.
        }
      };
    }
  }
});

/***/ }),

/***/ "./src/options/popup.js":
/*!******************************!*\
  !*** ./src/options/popup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index.js */ "./src/constants/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  // if false, this prevents the popup from showing (useful for giving to control to another piece of code)
  enabled: true,
  // optional (expecting a HTML element) if passed, the popup is appended to this element. default is `document.body`
  container: null,
  // defaults cookie options - it is RECOMMENDED to set these values to correspond with your server
  cookie: {
    // This is the name of this cookie - you can ignore this
    name: 'cookieconsent_status',
    // This is the url path that the cookie 'name' belongs to. The cookie can only be read at this location
    path: '/',
    // This is the domain that the cookie 'name' belongs to. The cookie can only be read on this domain.
    //  - Guide to cookie domains - https://www.mxsasha.eu/blog/2014/03/04/definitive-guide-to-cookie-domains/
    domain: document.domain,
    // The cookies expire date, specified in days (specify -1 for no expiry)
    expiryDays: 365,
    // If true the cookie will be created with the secure flag. Secure cookies will only be transmitted via HTTPS.
    secure: document.location.protocol === 'https:'
  },
  // each item defines the inner text for the element that it references
  content: {
    header: 'Cookies used on the website!',
    message: 'This website uses cookies to ensure you get the best experience on our website.',
    dismiss: 'Got it!',
    allow: 'Allow cookies',
    deny: 'Decline',
    link: 'Learn more',
    href: 'https://www.cookiesandyou.com',
    close: '&#x274c',
    target: '_blank',
    save: 'Save',
    policy: 'Cookie Policy'
  },
  // This is the HTML for the elements above. The string {{header}} will be replaced with the equivalent text below.
  // You can remove "{{header}}" and write the content directly inside the HTML if you want.
  //
  //  - ARIA rules suggest to ensure controls are tabbable (so the browser can find the first control),
  //    and to set the focus to the first interactive control (https://w3c.github.io/using-aria/)
  elements: {
    header: '<span class="cc-header">{{header}}</span>&nbsp',
    message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
    messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
    dismiss: "<a aria-label=\"dismiss cookie message\" role=button tabindex=\"0\" class=\"cc-btn cc-".concat(_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDismiss"], "\">{{dismiss}}</a>"),
    allow: "<a aria-label=\"allow cookies\" role=button tabindex=\"0\"  class=\"cc-btn cc-".concat(_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusAllow"], "\">{{allow}}</a>"),
    deny: "<a aria-label=\"deny cookies\" role=button tabindex=\"0\" class=\"cc-btn cc-".concat(_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDeny"], "\">{{deny}}</a>"),
    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',
    categories: '<ul class="cc-categories">' + _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["categories"].map(function (category, index) {
      return "<li class=\"cc-category\">\n          <button class=\"cc-btn\" tabindex=\"0\"><label for=\"id_".concat(category.name, "\"><input type=\"checkbox\" id=\"id_").concat(category.name, "\" name=\"").concat(category.name, "\"/>").concat(category.name, "</label></button>\n          <button class=\"cc-btn cc-info fal fa-info-square\" aria-label=\"").concat(category.name, " Definition Button\" tabindex=\"").concat(index + 1, "\"></button>\n          <div class=\"cc-tooltip\">\n            ").concat(category.explainText, "\n          </div>\n        </li>");
    }).join("") + '</ul>',
    save: "<button class=\"cc-btn cc-save\">{{save}}</button>" //compliance: compliance is also an element, but it is generated by the application, depending on `type` below

  },
  // The placeholders {{classes}} and {{children}} both get replaced during initialisation:
  //  - {{classes}} is where additional classes get added
  //  - {{children}} is where the HTML children are placed
  window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',
  modal: '',
  // This is the html for the revoke button. This only shows up after the user has selected their level of consent
  // It can be enabled of disabled using the `revokable` option
  revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>',
  // define types of 'compliance' here. '{{value}}' strings in here are linked to `elements`
  compliance: {
    info: '{{messagelink}}<div class="cc-compliance">{{dismiss}}</div>',
    'opt-in': '{{messagelink}}<div class="cc-compliance cc-highlight">{{deny}}{{allow}}{{customize}}</div>',
    'opt-out': '{{messagelink}}<div class="cc-compliance cc-highlight">{{dismiss}}{{deny}}</div>',
    categories: '{{message}}<div class="form">{{categories}}{{save}}</div>'
  },
  // select your type of popup here
  type: 'info',
  // refers to `compliance` (in other words, the buttons that are displayed)
  // define layout layouts here
  layouts: {
    // the 'block' layout tend to be for square floating popups
    basic: '{{compliance}}',
    'basic-close': '{{compliance}}{{close}}',
    'basic-header': '{{header}}{{compliance}}' // add a custom layout here, then add some new css with the class '.cc-layout-my-cool-layout'
    //'my-cool-layout': '<div class="my-special-layout">{{message}}{{compliance}}</div>{{close}}',

  },
  // default layout (see above)
  layout: 'basic',
  // this refers to the popup windows position. we currently support:
  //  - banner positions: top, bottom
  //  - floating positions: top-left, top-right, bottom-left, bottom-right
  //
  // adds a class `cc-floating` or `cc-banner` which helps when styling
  position: 'bottom',
  // default position is 'bottom'
  // Available styles
  //    -block (default, no extra classes)
  //    -edgeless
  //    -classic
  // use your own style name and use `.cc-theme-STYLENAME` class in CSS to edit.
  // Note: style "wire" is used for the configurator, but has no CSS styles of its own, only palette is used.
  theme: 'block',
  // The popup is `fixed` by default, but if you want it to be static (inline with the page content), set this to false
  // Note: by default, we animate the height of the popup from 0 to full size
  static: false,
  // if you want custom colours, pass them in here. this object should look like this.
  // ideally, any custom colours/themes should be created in a separate style sheet, as this is more efficient.
  //   {
  //     popup: {background: '#000000', text: '#fff', link: '#fff'},
  //     button: {background: 'transparent', border: '#f8e71c', text: '#f8e71c'},
  //     highlight: {background: '#f8e71c', border: '#f8e71c', text: '#000000'},
  //   }
  // `highlight` is optional and extends `button`. if it exists, it will apply to the first button
  // only background needs to be defined for every element. if not set, other colors can be calculated from it
  palette: null,
  // Some countries REQUIRE that a user can change their mind. You can configure this yourself.
  // Most of the time this should be false, but the `cookieconsent.legal` can change this to `true` if it detects that it should
  revokable: false,
  // if true, the revokable button will tranlate in and out
  animateRevokable: true,
  // used to disable link on existing layouts
  // replaces element messagelink with message and removes content of link
  showLink: true,
  // set value as scroll range to enable
  dismissOnScroll: false,
  // set value as time in milliseconds to autodismiss after set time
  dismissOnTimeout: false,
  // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
  dismissOnWindowClick: false,
  // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
  dismissOnLinkClick: false,
  // set value as keys are pressed, ( allowKeyCode = 13, denyKeyCode = 27 )
  dismissOnKeyPress: false,
  // If `dismissOnWindowClick` is true, we can click on 'revoke' and we'll still dismiss the banner, so we need exceptions.
  // should be an array of class names (not CSS selectors)
  ignoreClicksFrom: ['cc-revoke', 'cc-btn', 'cc-link'],
  // already includes the revoke button and the banner itself
  // The application automatically decide whether the popup should open.
  // Set this to false to prevent this from happening and to allow you to control the behaviour yourself
  autoOpen: true,
  // By default the created HTML is automatically appended to the container (which defaults to <body>). You can prevent this behaviour
  // by setting this to false, but if you do, you must attach the `element` yourself, which is a public property of the popup instance:
  //
  //     const instance = cookieconsent.factory(options)
  //     document.body.appendChild(instance.element)
  //
  autoAttach: true,
  // set value if floating layout should be forced for mobile devices
  mobileForceFloat: false,
  // simple whitelist/blacklist for pages. specify page by:
  //   - using a string : '/index.html'           (matches '/index.html' exactly) OR
  //   - using RegExp   : /\/page_[\d]+\.html/    (matched '/page_1.html' and '/page_2.html' etc)
  whitelistPage: [],
  blacklistPage: [],
  // If this is defined, then it is used as the inner html instead of layout. This allows for ultimate customisation.
  // Be sure to use the classes `cc-btn` and `cc-ALLOW`, `cc-DENY` or `cc-DISMISS`. They enable the app to register click
  // handlers. You can use other pre-existing classes too. See `src/styles` folder.
  overrideHTML: null
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/utils/async.js":
/*!****************************!*\
  !*** ./src/utils/async.js ***!
  \****************************/
/*! exports provided: getScript, makeAsyncRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncRequest", function() { return makeAsyncRequest; });


var getScript = function getScript(url, callback, timeout) {
  var timeoutIdx;
  var scriptTag = document.createElement('script');
  scriptTag.type = 'text/' + (url.type || 'javascript');
  scriptTag.src = url.src || url;
  scriptTag.async = false;

  scriptTag.onreadystatechange = s.onload = function () {
    // this code handles two scenarios, whether called by onload or onreadystatechange
    var state = scriptTag.readyState;
    clearTimeout(timeoutIdx);

    if (!callback.done && (!state || /loaded|complete/.test(state))) {
      callback.done = true;
      callback();
      scriptTag.onreadystatechange = scriptTag.onload = null;
    }
  };

  document.body.appendChild(scriptTag); // You can't catch JSONP Errors, because it's handled by the script tag
  // one way is to use a timeout

  timeoutIdx = setTimeout(function () {
    callback.done = true;
    callback();
    scriptTag.onreadystatechange = scriptTag.onload = null;
  }, timeout);
};
var makeAsyncRequest = function makeAsyncRequest(url, onComplete, timeout, postData, requestHeaders) {
  var xhr = new (window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');
  xhr.open(postData ? 'POST' : 'GET', url, 1);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  if (Array.isArray(requestHeaders)) {
    for (var i = 0, l = requestHeaders.length; i < l; ++i) {
      var split = requestHeaders[i].split(':', 2);
      xhr.setRequestHeader(split[0].replace(/^\s+|\s+$/g, ''), split[1].replace(/^\s+|\s+$/g, ''));
    }
  }

  if (typeof onComplete == 'function') {
    xhr.onreadystatechange = function () {
      if (xhr.readyState > 3) {
        onComplete(xhr);
      }
    };
  }

  xhr.send(postData);
};

/***/ }),

/***/ "./src/utils/cookie.js":
/*!*****************************!*\
  !*** ./src/utils/cookie.js ***!
  \*****************************/
/*! exports provided: getCookie, setCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });


var getCookie = function getCookie(name) {
  var value = ' ' + document.cookie;
  var parts = value.split(' ' + name + '=');
  return parts.length < 2 ? undefined : parts.pop().split(';').shift();
};
var setCookie = function setCookie(name, value, expiryDays, domain, path, secure) {
  var exdate = new Date();
  exdate.setHours(exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24);
  document.cookie = name + '=' + value + ';expires=' + exdate.toUTCString() + ';path=' + (path || '/') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '') + ';SameSite=Strict';
};

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! exports provided: traverseDOMPath, addCustomStylesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomStylesheet", function() { return addCustomStylesheet; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");




var traverseDOMPath = function traverseDOMPath(elem, className) {
  return !elem || !elem.parentNode ? null : elem.classList.contains(className) ? elem : traverseDOMPath(elem.parentNode, className);
};
var addCustomStylesheet = function addCustomStylesheet(id, palette, prefix) {
  var colorStyles = {};
  var popup = palette.popup,
      button = palette.button,
      highlight = palette.highlight,
      saveButton = palette.saveButton; // needs background colour, text and link will be set to black/white if not specified

  if (popup) {
    // assumes popup.background is set
    popup.text = popup.text ? popup.text : Object(_style__WEBPACK_IMPORTED_MODULE_1__["getContrast"])(popup.background);
    popup.link = popup.link ? popup.link : popup.text;
    colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-window'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-revoke'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = ['color: ' + popup.link];

    if (button) {
      // assumes button.background is set
      button.text = button.text ? button.text : Object(_style__WEBPACK_IMPORTED_MODULE_1__["getContrast"])(button.background);
      button.border = button.border ? button.border : 'transparent';
      colorStyles[prefix + ' .cc-btn'] = ['color: ' + button.text, 'border-color: ' + button.border, 'background-color: ' + button.background];

      if (button.padding) {
        colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
      }

      if (button.background != 'transparent') {
        colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = ['background-color: ' + (button.hover || Object(_style__WEBPACK_IMPORTED_MODULE_1__["getHoverColor"])(button.background))];
      }

      if (highlight) {
        //assumes highlight.background is set
        highlight.text = highlight.text ? highlight.text : Object(_style__WEBPACK_IMPORTED_MODULE_1__["getContrast"])(highlight.background);
        highlight.border = highlight.border ? highlight.border : 'transparent';
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + highlight.text, 'border-color: ' + highlight.border, 'background-color: ' + highlight.background];
      } else {
        // sets highlight text color to popup text. background and border are transparent by default.
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + popup.text];
      }
    }

    if (saveButton) {
      colorStyles["".concat(prefix, " .cc-btn.cc-save")] = ['color: ' + saveButton.text, 'border-color: ' + saveButton.border, 'background-color: ' + saveButton.background];
    }
  } // this will be interpretted as CSS. the key is the selector, and each array element is a rule


  var style = document.createElement('style');
  style.id = id;
  document.head.appendChild(style);
  Object.entries(colorStyles).forEach(function (_ref, index) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        prop = _ref2[0],
        value = _ref2[1];

    return style.sheet.insertRule("".concat(prop, "{").concat(value.join(';'), "}"), index);
  });
  return style;
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getCookie, setCookie, interpolateString, throttle, hash, normalizeHex, getContrast, getLuminance, getHoverColor, traverseDOMPath, addCustomStylesheet, isValidStatus, isPlainObject, isMobile, getScript, makeAsyncRequest, mergeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return interpolateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomStylesheet", function() { return addCustomStylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncRequest", function() { return makeAsyncRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie */ "./src/utils/cookie.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation */ "./src/utils/validation.js");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./async */ "./src/utils/async.js");




var getCookie = _cookie__WEBPACK_IMPORTED_MODULE_1__["getCookie"];
var setCookie = _cookie__WEBPACK_IMPORTED_MODULE_1__["setCookie"];
var interpolateString = function interpolateString(str, callback) {
  return str.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function (matches, replaced) {
    return callback(replaced) || '';
  });
}; // only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)

var throttle = function throttle(callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(void 0, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}; // only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)

var hash = function hash(str) {
  var hashNum = 0,
      i = 0,
      chr,
      len = str.length;
  if (str.length === 0) return hashNum;

  for (i; i < len; ++i) {
    chr = str.charCodeAt(i);
    hashNum = (hashNum << 5) - hashNum + chr;
    hashNum |= 0;
  }

  return hashNum;
};

var normalizeHex = _style__WEBPACK_IMPORTED_MODULE_2__["normalizeHex"];
var getContrast = _style__WEBPACK_IMPORTED_MODULE_2__["getContrast"];
var getLuminance = _style__WEBPACK_IMPORTED_MODULE_2__["getLuminance"];
var getHoverColor = _style__WEBPACK_IMPORTED_MODULE_2__["getHoverColor"];

var traverseDOMPath = _dom__WEBPACK_IMPORTED_MODULE_3__["traverseDOMPath"];
var addCustomStylesheet = _dom__WEBPACK_IMPORTED_MODULE_3__["addCustomStylesheet"];

var isValidStatus = _validation__WEBPACK_IMPORTED_MODULE_4__["isValidStatus"];
var isPlainObject = _validation__WEBPACK_IMPORTED_MODULE_4__["isPlainObject"];
var isMobile = _validation__WEBPACK_IMPORTED_MODULE_4__["isMobile"];

var getScript = _async__WEBPACK_IMPORTED_MODULE_5__["getScript"];
var makeAsyncRequest = _async__WEBPACK_IMPORTED_MODULE_5__["makeAsyncRequest"];

var loopProperties = function loopProperties(overwrites) {
  return function (obj, _ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (value instanceof Object && !(value instanceof Array)) {
      if (overwrites[key] instanceof Object && !(overwrites[key] instanceof Array)) {
        obj[key] = Object.entries(value).reduce(loopProperties(overwrites[key]), {});
      } else {
        obj[key] = value;
      }
    } else {
      if (overwrites.hasOwnProperty(key)) {
        obj[key] = overwrites[key];
      } else {
        obj[key] = value;
      }
    }

    return obj;
  };
};

var mergeOptions = function mergeOptions(defaults, overwrites) {
  return Object.entries(defaults).reduce(loopProperties(overwrites), {});
};

/***/ }),

/***/ "./src/utils/style.js":
/*!****************************!*\
  !*** ./src/utils/style.js ***!
  \****************************/
/*! exports provided: normalizeHex, getContrast, getLuminance, getHoverColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });


var normalizeHex = function normalizeHex(hex) {
  return hex[0] == '#' ? hex.substr(1) : hex.length == 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex;
}; // used to get text colors if not set

var getContrast = function getContrast(hex) {
  hex = normalizeHex(hex);
  var r = parseInt(hex.substr(0, 2), 16);
  var g = parseInt(hex.substr(2, 2), 16);
  var b = parseInt(hex.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
}; // used to change color on highlight

var getLuminance = function getLuminance(hex) {
  var num = parseInt(normalizeHex(hex), 16),
      amt = 38,
      R = (num >> 16) + amt,
      B = (num >> 8 & 0x00ff) + amt,
      G = (num & 0x0000ff) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};
var getHoverColor = function getHoverColor(hex) {
  hex = normalizeHex(hex); // for black buttons

  return hex === '000000' ? '#222' : getLuminance(hex);
};

/***/ }),

/***/ "./src/utils/validation.js":
/*!*********************************!*\
  !*** ./src/utils/validation.js ***!
  \*********************************/
/*! exports provided: isValidStatus, isMobile, isPlainObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");




/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */

var isValidStatus = function isValidStatus(status) {
  return _constants__WEBPACK_IMPORTED_MODULE_1__["statuses"].indexOf(status) >= 0;
};
var isMobile = function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}; // The code "typeof obj === 'object' && obj !== null" allows Array objects

var isPlainObject = function isPlainObject(obj) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) === 'object' && obj !== null && obj.constructor == Object;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Nvb2tpZUNvbnNlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9MZWdhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvbGVnYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/M2Q0MiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsic3RhdHVzZXMiLCJzdGF0dXNEZW55Iiwic3RhdHVzQWxsb3ciLCJzdGF0dXNEaXNtaXNzIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJleHBsYWluVGV4dCIsIndpbmRvdyIsIk5vZGVMaXN0IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsIkFycmF5IiwiZXhwb3J0cyIsIm1vZHVsZSIsIkNvb2tpZUNvbnNlbnQiLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiQmFzZSIsImRlZmF1bHRPcHRpb25zIiwib3B0aW9ucyIsIm1lcmdlT3B0aW9ucyIsIm9uIiwiYmluZCIsImVtaXQiLCJhbnN3ZXJzIiwibWFwIiwiY2F0ZWdvcnkiLCJjb29raWVOYW1lIiwiY29va2llIiwiYW5zd2VyIiwiZ2V0Q29va2llIiwiaXNWYWxpZFN0YXR1cyIsInVuZGVmaW5lZCIsImZpbHRlciIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJpbml0aWFsaXphdGlvbkNvbXBsZXRlIiwibGVnYWwiLCJjb3VudHJ5Q29kZSIsImNvZGUiLCJsb2NhdGlvbiIsIkxvY2F0aW9uIiwibG9jYXRlIiwiaW5pdGlhbGl6YXRpb25FcnJvciIsInJlc3VsdCIsIkxlZ2FsIiwiYXBwbHlMYXciLCJpbml0aWFsRGF0YSIsInJlZHVjZSIsInZhbCIsInBvcHVwIiwiUG9wdXAiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJnZXQiLCJpc09wZW4iLCJjbG9zZSIsInJldm9rZUNob2ljZSIsIm9wZW4iLCJib29sIiwidG9nZ2xlUmV2b2tlQnV0dG9uIiwic3RhdHVzIiwic2V0U3RhdHVzZXMiLCJjbGVhclN0YXR1c2VzIiwiZGVzdHJveSIsImRlZmluZVByb3BlcnR5Iiwic2V0IiwiZW51bWVyYWJsZSIsIndyaXRlYWJsZSIsImNvbmZpZ3VyYWJsZSIsImhhc0xhdyIsImluZGV4T2YiLCJyZXZva2FibGUiLCJleHBsaWNpdEFjdGlvbiIsImNvdW50cnkiLCJlbmFibGVkIiwicmVnaW9uYWxMYXciLCJkaXNtaXNzT25TY3JvbGwiLCJkaXNtaXNzT25UaW1lb3V0IiwiY3VycmVudFNlcnZpY2VJbmRleCIsInNlcnZpY2UiLCJnZXRTZXJ2aWNlQnlJZHgiLCJzZXJ2aWNlcyIsImlkeCIsInNlcnZpY2VPcHRpb24iLCJkeW5hbWljT3B0cyIsImFzc2lnbiIsInNlcnZpY2VEZWZpbml0aW9ucyIsImlzUGxhaW5PYmplY3QiLCJjb21wbGV0ZSIsImdldE5leHRTZXJ2aWNlIiwiRXJyb3IiLCJjYWxsYmFja0NvbXBsZXRlIiwiY2FsbGJhY2tFcnJvciIsInJ1blNlcnZpY2UiLCJydW5OZXh0U2VydmljZU9uRXJyb3IiLCJzZXJ2aWNlT3B0cyIsImdldEN1cnJlbnRTZXJ2aWNlT3B0cyIsInVybCIsInJlcGxhY2UiLCJfIiwicGFyYW0iLCJ0ZW1wTmFtZSIsIkRhdGUiLCJub3ciLCJyZXMiLCJfX0pTT05QX0RBVEEiLCJKU09OIiwic3RyaW5naWZ5IiwiaW50ZXJwb2xhdGVVcmwiLCJjYWxsYmFjayIsInJlcXVlc3RGdW5jdGlvbiIsImlzU2NyaXB0IiwiZ2V0U2NyaXB0IiwibWFrZUFzeW5jUmVxdWVzdCIsInNldHVwVXJsIiwieGhyIiwicmVzcG9uc2VUZXh0IiwicnVuU2VydmljZUNhbGxiYWNrIiwiY2FsbCIsInRpbWVvdXQiLCJkYXRhIiwiaGVhZGVycyIsInNlcnZpY2VSZXN1bHRIYW5kbGVyIiwiYXN5bmNSZXN1bHQiLCJvblNlcnZpY2VSZXN1bHQiLCJlcnIiLCJsb2dFcnJvciIsIm5leHRTZXJ2aWNlIiwiY29tcGxldGVTZXJ2aWNlIiwiZm4iLCJjb25zb2xlIiwid2FybiIsImluaXRpYWxWYWx1ZXMiLCJ1c2VyQ2F0ZWdvcmllcyIsIkVTU0VOVElFTCIsIlNUQVRJU1RJUVVFUyIsImN1c3RvbVN0eWxlcyIsInRyYW5zaXRpb25FbmQiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zIiwidCIsIk9UIiwibXNUIiwiTW96VCIsIldlYmtpdFQiLCJwcmVmaXgiLCJoYXNPd25Qcm9wZXJ0eSIsInN0eWxlIiwiaGFzVHJhbnNpdGlvbiIsImNhblVzZUNvb2tpZXMiLCJibGFja2xpc3RQYWdlIiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsIndoaXRlbGlzdFBhZ2UiLCJjb29raWVQb3B1cCIsImdldFBvcHVwQ2xhc3NlcyIsImpvaW4iLCJnZXRQb3B1cElubmVyTWFya3VwIiwiY3VzdG9tSFRNTCIsIm92ZXJyaWRlSFRNTCIsInN0YXRpYyIsIndyYXBwZXIiLCJhcHBlbmRNYXJrdXAiLCJkaXNwbGF5IiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBseUF1dG9EaXNtaXNzIiwiYXBwbHlSZXZva2VCdXR0b24iLCJhdXRvT3BlbiIsImZhZGVJbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInNob3dSZXZva2UiLCJmYWRlT3V0IiwiYWZ0ZXJUcmFuc2l0aW9uIiwiYWZ0ZXJGYWRlT3V0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwibWF4SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZmFkZUluVGltZW91dCIsIm9wZW5pbmdUaW1lb3V0IiwiYWZ0ZXJGYWRlSW4iLCJyZW1vdmUiLCJjbGVhclRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3ciLCJyZXZva2VCdG4iLCJwcmV2ZW50T3BlbiIsImdldFN0YXR1c2VzIiwic29tZSIsImhhc0Fuc3dlcmVkIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJ1cGRhdGVDYXRlZ29yeVN0YXR1cyIsImNhdGVnb3J5TmFtZSIsInByZXZpb3VzU3RhdHVzIiwic2V0Q29va2llIiwiYXJndW1lbnRzIiwiY2F0ZWdvcnlTdGF0dXMiLCJpbmRleCIsIm5hdmlnYXRvciIsImNvb2tpZUVuYWJsZWQiLCJDb29raWVzT0siLCJzdGF0dXNlc1ZhbHVlcyIsIm1hdGNoZXMiLCJoYXNNYXRjaGVzIiwibWF0Y2giLCJwb3NpdGlvbiIsInNwbGl0IiwicG9zIiwib3B0cyIsInBvc2l0aW9uU3R5bGUiLCJpc01vYmlsZSIsIm1vYmlsZUZvcmNlRmxvYXQiLCJjbGFzc2VzIiwidHlwZSIsInRoZW1lIiwicHVzaCIsImFwcGx5IiwiZ2V0UG9zaXRpb25DbGFzc2VzIiwiYXR0YWNoQ3VzdG9tUGFsZXR0ZSIsInBhbGV0dGUiLCJjdXN0b21TdHlsZVNlbGVjdG9yIiwiaW50ZXJwb2xhdGVkIiwic2hvd0xpbmsiLCJlbGVtZW50cyIsImxpbmsiLCJtZXNzYWdlbGluayIsIm1lc3NhZ2UiLCJwcm9wIiwiaW50ZXJwb2xhdGVTdHJpbmciLCJzdHIiLCJjb250ZW50IiwiY29tcGxpYW5jZVR5cGUiLCJjb21wbGlhbmNlIiwiaW5mbyIsImxheW91dCIsImxheW91dHMiLCJiYXNpYyIsIm1hcmt1cCIsImRpdiIsImNvbnQiLCJjb250YWluZXIiLCJub2RlVHlwZSIsImJvZHkiLCJpbm5lckhUTUwiLCJjaGlsZHJlbiIsImV2ZW50IiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhdXRvQXR0YWNoIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJidG4iLCJ0cmF2ZXJzZURPTVBhdGgiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJSZWdFeHAiLCJoYXNoU3RyIiwiaGFzaCIsInNlbGVjdG9yIiwiaXNWYWxpZCIsImFkZEN1c3RvbVN0eWxlc2hlZXQiLCJjb21wb3NlZFBhdGgiLCJhcnIiLCJkZWxheSIsInNjcm9sbFJhbmdlIiwiZGlzbWlzc09uTGlua0NsaWNrIiwiZGlzbWlzc09uV2luZG93Q2xpY2siLCJkaXNtaXNzT25LZXlQcmVzcyIsImRpc21pc3NUaW1lb3V0IiwiTWF0aCIsImZsb29yIiwib25XaW5kb3dTY3JvbGwiLCJwYWdlWU9mZnNldCIsInBhc3NpdmUiLCJvbldpbmRvd0NsaWNrIiwiZXZ0IiwiZ2V0RXZlbnRQYXRoIiwiaWdub3JlQ2xpY2tzRnJvbSIsImlnbm9yZWRDbGljayIsIm9uTGlua0NsaWNrIiwiZWxlbSIsInRhZ05hbWUiLCJvbktleVByZXNzIiwia2V5Q29kZSIsImFuaW1hdGVSZXZva2FibGUiLCJsb2ciLCJwb2xpY3kiLCJvbk1vdXNlTW92ZSIsInRocm90dGxlIiwiYWN0aXZlIiwibWluWSIsIm1heFkiLCJpbm5lckhlaWdodCIsImNsaWVudFkiLCJ0b0Vycm9yIiwiaXBpbmZvIiwiZG9uZSIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlIiwiaXBpbmZvZGIiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsIm1heG1pbmQiLCJnZW9pcDIiLCJpc29fY29kZSIsInByb3RvY29sIiwiaGVhZGVyIiwiZGlzbWlzcyIsImFsbG93IiwiZGVueSIsImhyZWYiLCJzYXZlIiwibW9kYWwiLCJ0aW1lb3V0SWR4Iiwic2NyaXB0VGFnIiwic3JjIiwiYXN5bmMiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJzIiwib25sb2FkIiwic3RhdGUiLCJyZWFkeVN0YXRlIiwidGVzdCIsIm9uQ29tcGxldGUiLCJwb3N0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwic2V0UmVxdWVzdEhlYWRlciIsImlzQXJyYXkiLCJpIiwibCIsInNlbmQiLCJ2YWx1ZSIsInBhcnRzIiwicG9wIiwic2hpZnQiLCJleGRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidG9VVENTdHJpbmciLCJpZCIsImNvbG9yU3R5bGVzIiwiYnV0dG9uIiwiaGlnaGxpZ2h0Iiwic2F2ZUJ1dHRvbiIsInRleHQiLCJnZXRDb250cmFzdCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJwYWRkaW5nIiwiaG92ZXIiLCJnZXRIb3ZlckNvbG9yIiwiaGVhZCIsImVudHJpZXMiLCJzaGVldCIsImluc2VydFJ1bGUiLCJyZXBsYWNlZCIsImxpbWl0Iiwid2FpdCIsImhhc2hOdW0iLCJjaHIiLCJsZW4iLCJjaGFyQ29kZUF0Iiwibm9ybWFsaXplSGV4IiwiZ2V0THVtaW5hbmNlIiwiZG9tIiwidmFsaWRhdGlvbiIsImFzeW5jRm5zIiwibG9vcFByb3BlcnRpZXMiLCJvdmVyd3JpdGVzIiwia2V5IiwiZGVmYXVsdHMiLCJoZXgiLCJzdWJzdHIiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsInlpcSIsIm51bSIsImFtdCIsIlIiLCJCIiwiRyIsInRvU3RyaW5nIiwic2xpY2UiLCJ1c2VyQWdlbnQiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNE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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUVBO0FBRUE7Ozs7OztBQUtPLElBQU01VyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFnQyxNQUFNO0FBQUEsU0FBSS9ELG1EQUFRLENBQUN5RSxPQUFULENBQWlCVixNQUFqQixLQUE0QixDQUFoQztBQUFBLENBQTVCO0FBRUEsSUFBTWtLLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsU0FDdEIsaUVBQWlFdUgsSUFBakUsQ0FBdUVuSSxTQUFTLENBQUNvTSxTQUFqRixDQURzQjtBQUFBLENBQWpCLEMsQ0FHUDs7QUFDTyxJQUFNL1QsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBeEQsR0FBRztBQUFBLFNBQUkscUVBQU9BLEdBQVAsTUFBZSxRQUFmLElBQTJCQSxHQUFHLEtBQUssSUFBbkMsSUFBMkNBLEdBQUcsQ0FBQ3dYLFdBQUosSUFBbUJ2WCxNQUFsRTtBQUFBLENBQXpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2Mtd2luZG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTsgfVxcblxcbi5jYy13aW5kb3cuY2MtaW52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4vKiBvbmx5IGFuaW1hdGUgaWZoYXMgY2xhc3MgJ2NjLWFuaW1hdGUnICovXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWdyb3dlciB7XFxuICAvKiBJbml0aWFsbHkgd2UgZG9uJ3Qgd2FudCBhbnkgaGVpZ2h0LCBhbmQgd2Ugd2FudCB0aGUgY29udGVudHMgdG8gYmUgaGlkZGVuICovXFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIFNldCBvdXIgdHJhbnNpdGlvbnMgdXAuICovXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbXMtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzOyB9XFxuXFxuLyogdGhlIHBvcHVwIHdpbmRvdyAqL1xcbi5jYy13aW5kb3csXFxuLmNjLXJldm9rZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGV4Y2x1ZGUgcGFkZGluZyB3aGVuIGRlYWxpbmcgd2l0aCB3aWR0aCAqL1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQ2FsaWJyaSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAvKiBieSBzZXR0aW5nIHRoZSBiYXNlIGZvbnQgaGVyZSwgd2UgY2FuIHNpemUgdGhlIHJlc3Qgb2YgdGhlIHBvcHVwIHVzaW5nIENTUyBgZW1gICovXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvKiB0aGUgZm9sbG93aW5nIGFyZSByYW5kb20gdW5qdXN0aWZpZWQgc3R5bGVzIC0ganVzdCBiZWNhdXNlIC0gc2hvdWxkIHByb2JhYmx5IGJlIHJlbW92ZWQgKi9cXG4gIHotaW5kZXg6IDk5OTg7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHotaW5kZXg6IDk5OTk7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljOyB9XFxuXFxuLyogMiBiYXNpYyB0eXBlcyBvZiB3aW5kb3cgLSBmbG9hdGluZyAvIGJhbm5lciAqL1xcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWF4LXdpZHRoOiAyNGVtO1xcbiAgLyogMWVtID09IDE2cHggdGhlcmVmb3JlIDI0ZW0gPT0gMzg0cHggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4vKiBjbGlja2FibGUgdGhpbmdzICovXFxuLmNjLWJ0bixcXG4uY2MtbGluayxcXG4uY2MtY2xvc2UsXFxuLmNjLXJldm9rZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2MtbGluayB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWxpbms6aG92ZXIge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jYy1saW5rOmFjdGl2ZSxcXG4uY2MtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbml0aWFsOyB9XFxuXFxuLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpob3ZlcixcXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1jbG9zZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41ZW07XFxuICByaWdodDogMC41ZW07XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgLyogc2VlaW5nIGFzIHRoaXMgY29udGFpbnMgdGV4dCBhbmQgbm90IGFuIGltYWdlLCB0aGUgZWxlbWVudCB0YWxsZXIgdGhhbiBpdCBpcyB3aWRlIChiZWNhdXNlIGl0IGlzIHRleHQpICovXFxuICAvKiAgLSB3ZSB3YW50IGl0IHRvIGJlIGEgc3F1YXJlLCBiZWNhdXNlIGl0J3MgYWN0aW5nIGFzIGFuIGljb24gKi9cXG4gIC8qICAtIHNldHRpbmcgdGhlIGxpbmUgaGVpZ2h0IG5vcm1hbGl6ZXMgdGhlIGhlaWdodCAqL1xcbiAgbGluZS1oZWlnaHQ6IDAuNzU7IH1cXG5cXG4uY2MtY2xvc2U6aG92ZXIsXFxuLmNjLWNsb3NlOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4vKiBUaGlzIGZpbGUgc2hvdWxkIGNvbnRhaW4gc3R5bGVzIHRoYXQgbW9kaWZpZXMgdGhlIHBvcHVwIGxheW91dC4gKi9cXG4vKiBCeSBsYXlvdXQsIHdlIG1lYW4gdGhlIHBoeXNpY2FsIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgcG9wdXAgd2luZG93LCBhbmQgdGhlIG1hcmdpbiAvIHBhZGRpbmcgYXJvdW5kIHRob3NlIGVsZW1lbnRzLiAqL1xcbi5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWxlZnQge1xcbiAgbGVmdDogM2VtO1xcbiAgcmlnaHQ6IHVuc2V0OyB9XFxuXFxuLmNjLXJldm9rZS5jYy1yaWdodCB7XFxuICByaWdodDogM2VtO1xcbiAgbGVmdDogdW5zZXQ7IH1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxNnB4OyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRkxPQVRJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB0aGVzZSBjbGFzc2VzIHBvc2l0aW9uIHRoZSBmbG9hdGluZyBlbGVtZW50ICovXFxuLmNjLXRvcCB7XFxuICB0b3A6IDFlbTsgfVxcblxcbi5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDFlbTsgfVxcblxcbi5jYy1yaWdodCB7XFxuICByaWdodDogMWVtOyB9XFxuXFxuLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDFlbTsgfVxcblxcbi8qIGxpbmtzIHRoYXQgYXJlIGRpcmVjdCBkZWNlbmRhbnRzIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYmxvY2sgKi9cXG4uY2MtZmxvYXRpbmcgPiAuY2MtbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlIHtcXG4gIGZsZXg6IDEgMCBhdXRvOyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQkFOTkVSICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdG9wIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5jYy1iYW5uZXIuY2MtYm90dG9tIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDsgfVxcblxcbi5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMWVtOyB9XFxuXFxuLyogQ09NUExJQU5DRSBCT1ggKi9cXG4uY2MtY29tcGxpYW5jZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSA+IC5jYy1idG4ge1xcbiAgZmxleDogMTsgfVxcblxcbi5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcblxcbi8qIENhdGVnb3JpZXMgTGF5b3V0ICovXFxuLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTBweDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmNjLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgaGVpZ2h0OiAxOHB4O1xcbiAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biBsYWJlbCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxLjBlbTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiA0cHg7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm86Zm9jdXMgKyAuY2MtdG9vbHRpcCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJvdHRvbTogNDZweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNyk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxNHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTsgfVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAuY2Mtd2luZG93LFxcbiAgLmNjLXJldm9rZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY2MtYnRuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfSB9XFxuXFxuLyogZGltZW5zaW9ucyBmb3IgJ2lQaG9uZTYgUGx1cycgYW5kIGxvd2VyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAuY2Mtd2luZG93LmNjLXRvcCB7XFxuICAgIHRvcDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1ib3R0b20ge1xcbiAgICBib3R0b206IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyLCAuY2Mtd2luZG93LmNjLWZsb2F0aW5nLCAuY2Mtd2luZG93LmNjLXJpZ2h0LCAuY2Mtd2luZG93LmNjLWxlZnQge1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLWNvbXBsaWFuY2Uge1xcbiAgICAgIGZsZXg6IDEgMSBhdXRvOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gICAgbWF4LXdpZHRoOiBub25lOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYy13aW5kb3cgLmNjLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gICAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpub3QoLmNjLWluZm8pIHtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpO1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gIC5mb3JtIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7IH0gfVxcblxcbi8qIENsYXNzaWMgKi9cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtY29tcGxpYW5jZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4OiBub25lOyB9XFxuXFxuLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogLTFweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgei1pbmRleDogMTsgfVxcbiAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgbGVmdDogNnB4O1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveDpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXDFGNUY1XFxcIjsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNjLWJ0bi1jaGVja2JveDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXFwyNzEzXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNSk7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4uY2MtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiB0aGluIHNvbGlkIGxpZ2h0Z3JleTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi8qIEVkZ2VsZXNzICovXFxuLmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXdpbmRvdyB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC44ZW0gMS44ZW07XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICBwYWRkaW5nOiAwLjRlbSA0cHg7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXR1c2VzID0gWyBcIkRFTllcIiwgXCJBTExPV1wiLCBcIkRJU01JU1NcIiBdXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNEZW55ID0gXCJERU5ZXCJcclxuZXhwb3J0IGNvbnN0IHN0YXR1c0FsbG93ID0gXCJBTExPV1wiXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNEaXNtaXNzID0gXCJESVNNSVNTXCJcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRVNTRU5USUVMXCIsXHJcbiAgICAgICAgZXhwbGFpblRleHQ6IFwiQ2VzIGNvb2tpZXMgc29udCBlc3NlbnRpZWxzIHBvdXIgbGEgbmF2aWdhdGlvbiBzdXIgTmV4dG9yaWVzLmNvbVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNUQVRJU1RJUVVFU1wiLFxyXG4gICAgICAgIGV4cGxhaW5UZXh0OiBcIkNlcyBjb29raWVzIHBlcm1ldHRlbnQgZGUgcsOpYWxpc2VyIGRlcyBzdGF0aXN0aXF1ZXMgYW5vbnltZXMgZGUgdmlzaXRlcyBldCBkJ3V0aWxpc2F0aW9uIGR1IHNpdGUgaW50ZXJuZXQuXCIsXHJcbiAgICB9ICBcclxuXVxyXG4iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaWYgKHdpbmRvdy5Ob2RlTGlzdCAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcclxuICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XHJcbn1cclxuXHJcbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXHJcblxyXG5pbXBvcnQgQ29va2llQ29uc2VudCBmcm9tIFwiLi9tb2RlbHMvQ29va2llQ29uc2VudFwiXHJcblxyXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBDb29raWVDb25zZW50XHJcbn0gZWxzZSB7XHJcbiAgd2luZG93LkNvb2tpZUNvbnNlbnQgPSBDb29raWVDb25zZW50XHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgbWVyZ2VPcHRpb25zIH0gZnJvbSBcIi4uL3V0aWxzXCJcclxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCJcclxuXHJcbmNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBkZWZhdWx0T3B0aW9ucyA9IHt9LCBvcHRpb25zID0ge30gKXtcclxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxyXG4gICAgdGhpcy5vbiA9IGVtaXR0ZXIub24uYmluZCggZW1pdHRlciApXHJcbiAgICB0aGlzLmVtaXQgPSBlbWl0dGVyLmVtaXQuYmluZCggZW1pdHRlciApXHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgTGVnYWwgZnJvbSBcIi4vTGVnYWxcIlxyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vTG9jYXRpb25cIlxyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIlxyXG5cclxuaW1wb3J0IHsgc3RhdHVzZXMsIGNhdGVnb3JpZXMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBpc1ZhbGlkU3RhdHVzIH0gZnJvbSBcIi4uL3V0aWxzXCJcclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIGFwcCBieSBjb21iaW5pbmcgdGhlIHVzZSBvZiB0aGUgUG9wdXAsIExvY2F0b3IgYW5kIExhdyBtb2R1bGVzXHJcbi8vIFlvdSBjYW4gc3RyaW5nIHRvZ2V0aGVyIHRoZXNlIHRocmVlIG1vZHVsZXMgeW91cnNlbGYgaG93ZXZlciB5b3Ugd2FudCwgYnkgd3JpdGluZyBhIG5ldyBmdW5jdGlvbi5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUNvbnNlbnQgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyA9IHt9ICl7XHJcbiAgICBzdXBlciggb3B0aW9ucyApXHJcblxyXG4gICAgY29uc3QgYW5zd2VycyA9IGNhdGVnb3JpZXMubWFwKCBjYXRlZ29yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSB0aGlzLm9wdGlvbnMuY29va2llICYmIHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA/IHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA6ICdjb29raWVjb25zZW50X3N0YXR1c18nXHJcbiAgICAgIGNvbnN0IGFuc3dlciA9IGdldENvb2tpZSggY29va2llTmFtZSArIGNhdGVnb3J5Lm5hbWUgKVxyXG4gICAgICByZXR1cm4gaXNWYWxpZFN0YXR1cyhhbnN3ZXIpID8geyBbY2F0ZWdvcnkubmFtZV06IGFuc3dlciB9IDogdW5kZWZpbmVkXHJcbiAgICB9KS5maWx0ZXIob2JqID0+IG9iaiA/IG9ialtPYmplY3Qua2V5cyhvYmopWzBdXSA6IGZhbHNlKVxyXG5cclxuICAgIC8vIGlmIHRoZXkgaGF2ZSBhbHJlYWR5IGFuc3dlcmVkXHJcbiAgICBpZiAoYW5zd2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZSggeyBhbnN3ZXJzIH0pO1xyXG4gICAgfSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmxlZ2FsICYmIHRoaXMub3B0aW9ucy5sZWdhbC5jb3VudHJ5Q29kZSApIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlKCB7IGNvZGU6IHRoaXMub3B0aW9ucy5sZWdhbC5jb3VudHJ5Q29kZSB9IClcclxuICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5sb2NhdGlvbiApIHtcclxuICAgICAgbmV3IExvY2F0aW9uKCB0aGlzLm9wdGlvbnMubG9jYXRpb24gKS5sb2NhdGUoIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZS5iaW5kKCB0aGlzICksIHRoaXMuaW5pdGlhbGl6YXRpb25FcnJvci5iaW5kKCB0aGlzICkgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlKHt9KVxyXG4gICAgfVxyXG4gIH1cclxuICBpbml0aWFsaXphdGlvbkNvbXBsZXRlKCByZXN1bHQgKXtcclxuICAgIGlmIChyZXN1bHQuY29kZSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgTGVnYWwodGhpcy5vcHRpb25zLmxlZ2FsKS5hcHBseUxhdyggdGhpcy5vcHRpb25zLCByZXN1bHQuY29kZSApXHJcbiAgICB9XHJcbiAgICBjb25zdCBpbml0aWFsRGF0YSA9IHJlc3VsdC5hbnN3ZXJzICYmIHJlc3VsdC5hbnN3ZXJzLnJlZHVjZSgob2JqLCB2YWwpID0+ICh7Li4ub2JqLCAuLi52YWx9KSk7XHJcbiAgICB0aGlzLnBvcHVwID0gbmV3IFBvcHVwKCB0aGlzLm9wdGlvbnMsIGluaXRpYWxEYXRhIClcclxuICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdChcImluaXRpYWxpemVkXCIsIHRoaXMucG9wdXAsIGluaXRpYWxEYXRhICksIDAgKVxyXG4gIH1cclxuICBpbml0aWFsaXphdGlvbkVycm9yKCBlcnJvciApIHtcclxuICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdCggXCJlcnJvclwiLCBlcnJvciwgbmV3IFBvcHVwKCB0aGlzLm9wdGlvbnMgKSApLCAwIClcclxuICB9XHJcbiAgZ2V0Q291bnRyeUxhd3MoIGNvdW50cnlDb2RlICl7XHJcbiAgICByZXR1cm4gbmV3IExlZ2FsKHRoaXMub3B0aW9ucy5sZWdhbCkuZ2V0KCBjb3VudHJ5Q29kZSApXHJcbiAgfVxyXG4gIGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnBvcHVwLmlzT3BlbigpXHJcbiAgfVxyXG4gIGNsb3NlKCl7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmNsb3NlKCksIHRoaXMgKVxyXG4gIH1cclxuICByZXZva2VDaG9pY2UoKSB7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLnJldm9rZUNob2ljZSgpLCB0aGlzIClcclxuICB9XHJcbiAgb3Blbigpe1xyXG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5vcGVuKCksIHRoaXMgKVxyXG4gIH1cclxuICB0b2dnbGVSZXZva2VCdXR0b24oIGJvb2wgKSB7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLnRvZ2dsZVJldm9rZUJ1dHRvbiggYm9vbCApLCB0aGlzIClcclxuICB9XHJcbiAgc2V0U3RhdHVzZXMoIHN0YXR1cyApIHtcclxuICAgIHJldHVybiAodGhpcy5wb3B1cC5zZXRTdGF0dXNlcyggc3RhdHVzICksIHRoaXMgKVxyXG4gIH1cclxuICBjbGVhclN0YXR1c2VzKCl7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmNsZWFyU3RhdHVzZXMoKSwgdGhpcyApXHJcbiAgfVxyXG4gIGRlc3Ryb3koKXtcclxuICAgIHJldHVybiAoIHRoaXMucG9wdXAuZGVzdHJveSgpLCB0aGlzIClcclxuICB9XHJcbn1cclxuXHJcbnN0YXR1c2VzLnJlZHVjZSggKCBvYmosIHN0YXR1cyApID0+XHJcbiggT2JqZWN0LmRlZmluZVByb3BlcnR5KCBDb29raWVDb25zZW50LCBzdGF0dXMsIHtcclxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXR1cyB9LFxyXG4gIHNldDogZnVuY3Rpb24gKCkge30sXHJcbiAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgd3JpdGVhYmxlOiBmYWxzZSxcclxuICBjb25maWd1cmFibGU6IGZhbHNlXHJcbn0pLCBvYmogKSwgQ29va2llQ29uc2VudCApIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvbGVnYWxcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnYWwgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyA9IHt9ICkge1xyXG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcclxuICB9XHJcbiAgZ2V0KCBjb3VudHJ5Q29kZSApe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGFzTGF3OiB0aGlzLm9wdGlvbnMuaGFzTGF3LmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXHJcbiAgICAgIHJldm9rYWJsZTogdGhpcy5vcHRpb25zLnJldm9rYWJsZS5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxyXG4gICAgICBleHBsaWNpdEFjdGlvbjogdGhpcy5vcHRpb25zLmV4cGxpY2l0QWN0aW9uLmluZGV4T2YoY291bnRyeUNvZGUpID49IDBcclxuICAgIH1cclxuICB9XHJcbiAgYXBwbHlMYXcoIG9wdGlvbnMsIGNvdW50cnlDb2RlICl7XHJcbiAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXQoY291bnRyeUNvZGUpXHJcblxyXG4gICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xyXG4gICAgICAvLyBUaGUgY291bnRyeSBoYXMgbm8gY29va2llIGxhd1xyXG4gICAgICBvcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICB0aGlzLmVtaXQoIFwibm9Db29raWVMYXdcIiwgY291bnRyeUNvZGUsIGNvdW50cnkgKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcpIHtcclxuICAgICAgaWYgKGNvdW50cnkucmV2b2thYmxlKSB7XHJcbiAgICAgICAgLy8gV2UgbXVzdCBwcm92aWRlIGFuIG9wdGlvbiB0byByZXZva2UgY29uc2VudCBhdCBhIGxhdGVyIHRpbWVcclxuICAgICAgICBvcHRpb25zLnJldm9rYWJsZSA9IHRydWVcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvdW50cnkuZXhwbGljaXRBY3Rpb24pIHtcclxuICAgICAgICAvLyBUaGUgdXNlciBtdXN0IGV4cGxpY2l0bHkgY2xpY2sgdGhlIGNvbnNlbnQgYnV0dG9uXHJcbiAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25TY3JvbGwgPSBmYWxzZVxyXG4gICAgICAgIG9wdGlvbnMuZGlzbWlzc09uVGltZW91dCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25zXHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvbG9jYXRpb25cIlxyXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBnZXRTY3JpcHQsIG1ha2VBc3luY1JlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbHNcIlxyXG5cclxuLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyB3ZSBoYXZlIGFscmVhZHkgc2V0IHVwLlxyXG4vLyBXaGVuIHVzaW5nIGEgc2VydmljZSwgaXQgY291bGQgZWl0aGVyIHJldHVybiBhIGRhdGEgc3RydWN0dXJlIGluIHBsYWluIHRleHQgKGxpa2UgYSBKU09OIG9iamVjdCkgb3IgYW4gZXhlY3V0YWJsZSBzY3JpcHRcclxuLy8gV2hlbiB0aGUgcmVzcG9uc2UgbmVlZHMgdG8gYmUgZXhlY3V0ZWQgYnkgdGhlIGJyb3dzZXIsIHRoZW4gYGlzU2NyaXB0YCBtdXN0IGJlIHNldCB0byB0cnVlLCBvdGhlcndpc2UgaXQgd29uJ3Qgd29yay5cclxuXHJcbi8vIFdoZW4gdGhlIHNlcnZpY2UgdXNlcyBhIHNjcmlwdCwgdGhlIGNoYW5jZXMgYXJlIHRoYXQgeW91J2xsIGhhdmUgdG8gdXNlIHRoZSBzY3JpcHQgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzLiBJbiB0aGVzZVxyXG4vLyBjYXNlcywgdGhlIHNlcnZpY2VzIGBjYWxsYmFja2AgcHJvcGVydHkgaXMgY2FsbGVkIHdpdGggYSBgZG9uZWAgZnVuY3Rpb24uIFdoZW4gcGVyZm9ybWluZyBhc3luYyBvcGVyYXRpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkXHJcbi8vIHdpdGggdGhlIGRhdGEgKG9yIEVycm9yKSwgYW5kIGBjb29raWVjb25zZW50LmxvY2F0ZWAgd2lsbCB0YWtlIGNhcmUgb2YgdGhlIHJlc3RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uIGV4dGVuZHMgQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XHJcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxyXG4gICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTEgLy8gdGhlIGluZGV4IChpbiBvcHRpb25zKSBvZiB0aGUgc2VydmljZSB3ZSdyZSBjdXJyZW50bHkgdXNpbmdcclxuICB9XHJcblxyXG4gIGdldE5leHRTZXJ2aWNlKCkge1xyXG4gICAgbGV0IHNlcnZpY2VcclxuICAgIGRvIHtcclxuICAgICAgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KCsrdGhpcy5jdXJyZW50U2VydmljZUluZGV4KVxyXG4gICAgfSB3aGlsZSAoXHJcbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA8IHRoaXMub3B0aW9ucy5zZXJ2aWNlcy5sZW5ndGggJiZcclxuICAgICAgIXNlcnZpY2VcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gc2VydmljZVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VydmljZUJ5SWR4KGlkeCkge1xyXG4gICAgLy8gVGhpcyBjYW4gZWl0aGVyIGJlIHRoZSBuYW1lIG9mIGEgZGVmYXVsdCBsb2NhdGlvblNlcnZpY2UsIG9yIGEgZnVuY3Rpb24uXHJcbiAgICBjb25zdCBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cclxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zdCBkeW5hbWljT3B0cyA9IHNlcnZpY2VPcHRpb24oKVxyXG4gICAgICByZXR1cm4gZHluYW1pY09wdHMubmFtZSA/IFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICB7fSxcclxuICAgICAgICAgIGR5bmFtaWNPcHRzLFxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1sgZHluYW1pY09wdHMubmFtZSBdKCBkeW5hbWljT3B0cyApXHJcbiAgICAgICAgKSA6IGR5bmFtaWNPcHRzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXHJcbiAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgYXNzdW1lIHtuYW1lOiAnaXBpbmZvJywgLi4ub3RoZXJPcHRpb25zfVxyXG4gICAgLy8gQWxsb3dzIHVzZXIgdG8gcGFzcyBpbiBBUEkga2V5cyBldGMuXHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChzZXJ2aWNlT3B0aW9uKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uLm5hbWVdKFxyXG4gICAgICAgIHNlcnZpY2VPcHRpb25cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIHJ1bnMgdGhlIHNlcnZpY2UgbG9jYXRlZCBhdCBpbmRleCBgY3VycmVudFNlcnZpY2VJbmRleGAuXHJcbiAgLy8gSWYgdGhlIHNlcnZpY2UgZmFpbHMsIGBydW5OZXh0U2VydmljZU9uRXJyb3JgIHdpbGwgY29udGludWUgdHJ5aW5nIGVhY2ggc2VydmljZSB1bnRpbCBhbGwgZmFpbCwgb3Igb25lIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcclxuICBsb2NhdGUoY29tcGxldGUsIGVycm9yKSB7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpXHJcblxyXG4gICAgaWYgKCFzZXJ2aWNlKSB7XHJcbiAgICAgIGVycm9yKG5ldyBFcnJvcignTm8gc2VydmljZXMgdG8gcnVuJykpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSA9IGNvbXBsZXRlXHJcbiAgICB0aGlzLmNhbGxiYWNrRXJyb3IgPSBlcnJvclxyXG5cclxuICAgIHRoaXMucnVuU2VydmljZShzZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKVxyXG4gIH1cclxuXHJcbiAgLy8gUG90ZW50aWFsbHkgYWRkcyBhIGNhbGxiYWNrIHRvIGEgdXJsIGZvciBqc29ucC5cclxuICBzZXR1cFVybChzZXJ2aWNlKSB7XHJcbiAgICBjb25zdCBzZXJ2aWNlT3B0cyA9IHRoaXMuZ2V0Q3VycmVudFNlcnZpY2VPcHRzKClcclxuICAgIHJldHVybiBzZXJ2aWNlLnVybC5yZXBsYWNlKC9cXHsoLio/KVxcfS9nLCBmdW5jdGlvbihfLCBwYXJhbSkge1xyXG4gICAgICBpZiAocGFyYW0gPT09ICdjYWxsYmFjaycpIHtcclxuICAgICAgICBjb25zdCB0ZW1wTmFtZSA9ICdjYWxsYmFjaycgKyBEYXRlLm5vdygpXHJcbiAgICAgICAgd2luZG93W3RlbXBOYW1lXSA9IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgc2VydmljZS5fX0pTT05QX0RBVEEgPSBKU09OLnN0cmluZ2lmeShyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXJhbSBpbiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybCkge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybFtwYXJhbV1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIHJlcXVpcmVzIGEgYHNlcnZpY2VgIG9iamVjdCB0aGF0IGRlZmluZXMgYXQgbGVhc3QgYSBgdXJsYCBhbmQgYGNhbGxiYWNrYFxyXG4gIHJ1blNlcnZpY2Uoc2VydmljZSwgY29tcGxldGUpIHtcclxuICAgIC8vIGJhc2ljIGNoZWNrIHRvIGVuc3VyZSBpdCByZXNlbWJsZXMgYSBgc2VydmljZWBcclxuICAgIGlmICghc2VydmljZSB8fCAhc2VydmljZS51cmwgfHwgIXNlcnZpY2UuY2FsbGJhY2spIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2UgY2FsbCBlaXRoZXIgYGdldFNjcmlwdGAgb3IgYG1ha2VBc3luY1JlcXVlc3RgIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiByZXNvdXJjZVxyXG4gICAgY29uc3QgcmVxdWVzdEZ1bmN0aW9uID0gc2VydmljZS5pc1NjcmlwdCA/IGdldFNjcmlwdCA6IG1ha2VBc3luY1JlcXVlc3RcclxuXHJcbiAgICAvLyBib3RoIGZ1bmN0aW9ucyBoYXZlIHNpbWlsYXIgc2lnbmF0dXJlcyBzbyB3ZSBjYW4gcGFzcyB0aGUgc2FtZSBhcmd1bWVudHMgdG8gYm90aFxyXG4gICAgcmVxdWVzdEZ1bmN0aW9uKFxyXG4gICAgICB0aGlzLnNldHVwVXJsKHNlcnZpY2UpLFxyXG4gICAgICB4aHIgPT4ge1xyXG4gICAgICAgIC8vIGlmIGAheGhyYCwgdGhlbiBgZ2V0U2NyaXB0YCBmdW5jdGlvbiB3YXMgdXNlZCwgc28gdGhlcmUgaXMgbm8gcmVzcG9uc2UgdGV4dFxyXG4gICAgICAgIGxldCByZXNwb25zZVRleHQgPSB4aHIgPyB4aHIucmVzcG9uc2VUZXh0IDogJydcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHJlc291cmNlIGlzIGEgc2NyaXB0LCB0aGVuIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gcnVuLlxyXG4gICAgICAgIC8vIGlmIHRoZSBzY3JpcHQgaXMgSlNPTlAsIHRoZW4gYSB0aW1lIGRlZmluZWQgZnVuY3Rpb24gYGNhbGxiYWNrX3tEYXRlLm5vd31gIGhhcyBhbHJlYWR5XHJcbiAgICAgICAgLy8gYmVlbiBjYWxsZWQgKGFzIHRoZSBKU09OUCBjYWxsYmFjaykuIFRoaXMgY2FsbGJhY2sgc2V0cyB0aGUgX19KU09OUF9EQVRBIHByb3BlcnR5XHJcbiAgICAgICAgaWYgKHNlcnZpY2UuX19KU09OUF9EQVRBKSB7XHJcbiAgICAgICAgICByZXNwb25zZVRleHQgPSBzZXJ2aWNlLl9fSlNPTlBfREFUQVxyXG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuX19KU09OUF9EQVRBXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYWxsIHRoZSBzZXJ2aWNlIGNhbGxiYWNrIHdpdGggdGhlIHJlc3BvbnNlIHRleHQgKHNvIGl0IGNhbiBwYXJzZSB0aGUgcmVzcG9uc2UpXHJcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlQ2FsbGJhY2suY2FsbCh0aGlzLCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0KVxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLm9wdGlvbnMudGltZW91dCxcclxuICAgICAgc2VydmljZS5kYXRhLFxyXG4gICAgICBzZXJ2aWNlLmhlYWRlcnNcclxuICAgIClcclxuXHJcbiAgICAvLyBgc2VydmljZS5kYXRhYCBhbmQgYHNlcnZpY2UuaGVhZGVyc2AgYXJlIG9wdGlvbmFsICh0aGV5IG9ubHkgY291bnQgaWYgYCFzZXJ2aWNlLmlzU2NyaXB0YCBhbnl3YXkpXHJcbiAgfVxyXG5cclxuICAvLyBUaGUgc2VydmljZSByZXF1ZXN0IGhhcyBydW4gKGFuZCBwb3NzaWJseSBoYXMgYSBgcmVzcG9uc2VUZXh0YCkgW25vIGByZXNwb25zZVRleHRgIGlmIGBpc1NjcmlwdGBdXHJcbiAgLy8gV2UgbmVlZCB0byBydW4gaXRzIGNhbGxiYWNrIHdoaWNoIGRldGVybWluZXMgaWYgaXRzIHN1Y2Nlc3NmdWwgb3Igbm90XHJcbiAgLy8gYGNvbXBsZXRlYCBpcyBjYWxsZWQgb24gc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgcnVuU2VydmljZUNhbGxiYWNrKCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0ICkge1xyXG4gICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHNlcnZpY2UgdXNlcyB0aGUgYXN5bmMgY2FsbGJhY2sgaW4gaXRzIGhhbmRsZXIgbWV0aG9kXHJcbiAgICBjb25zdCBzZXJ2aWNlUmVzdWx0SGFuZGxlciA9IGFzeW5jUmVzdWx0ID0+IHtcclxuICAgICAgLy8gaWYgYHJlc3VsdGAgaXMgYSB2YWxpZCB2YWx1ZSwgdGhlbiB0aGlzIGZ1bmN0aW9uIHNob3VsZG4ndCByZWFsbHkgcnVuXHJcbiAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0KCBjb21wbGV0ZSwgYXN5bmNSZXN1bHQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGUgZnVuY3Rpb24gYHNlcnZpY2UuY2FsbGJhY2tgIHdpbGwgZWl0aGVyIGV4dHJhY3QgYSBjb3VudHJ5IGNvZGUgZnJvbSBgcmVzcG9uc2VUZXh0YCBhbmQgcmV0dXJuIGl0IChpbiBgcmVzdWx0YClcclxuICAgIC8vIG9yIChpZiBpdCBoYXMgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzKSBpdCB3aWxsIGNhbGwgYSBgZG9uZWAgY2FsbGJhY2sgd2l0aCB0aGUgY291bnRyeSBjb2RlIHdoZW4gaXQgaXMgcmVhZHlcclxuICAgIGNvbnN0IHJlc3VsdCA9IHNlcnZpY2UuY2FsbGJhY2soc2VydmljZVJlc3VsdEhhbmRsZXIsIHJlc3BvbnNlVGV4dClcclxuXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0KCBjb21wbGV0ZSwgcmVzdWx0IClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFRoaXMgaXMgY2FsbGVkIHdpdGggdGhlIGByZXN1bHRgIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgIHJlZ2FyZGxlc3Mgb2YgaG93IGl0IHByb3ZpZGVkIHRoYXQgcmVzdWx0IChzeW5jIG9yIGFzeW5jKS5cclxuICAvLyBgcmVzdWx0YCB3aWxsIGJlIHdoYXRldmVyIGlzIHJldHVybmVkIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgLiBBIHNlcnZpY2UgY2FsbGJhY2sgc2hvdWxkIHByb3ZpZGUgYW4gb2JqZWN0IHdpdGggZGF0YVxyXG4gIG9uU2VydmljZVJlc3VsdChjb21wbGV0ZSwgcmVzdWx0KSB7XHJcbiAgICAvLyBjb252ZXJ0IHJlc3VsdCB0byBub2RlanMgc3R5bGUgYXN5bmMgY2FsbGJhY2tcclxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciB8fCAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikpIHtcclxuICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCByZXN1bHQsIG51bGwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIG51bGwsIHJlc3VsdClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGlmIGBlcnJgIGlzIHNldCwgdGhlIG5leHQgc2VydmljZSBoYW5kbGVyIGlzIGNhbGxlZFxyXG4gIC8vIGlmIGBlcnJgIGlzIG51bGwsIHRoZSBgb25Db21wbGV0ZWAgaGFuZGxlciBpcyBjYWxsZWQgd2l0aCBgZGF0YWBcclxuICBydW5OZXh0U2VydmljZU9uRXJyb3IoZXJyLCBkYXRhKSB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHRoaXMubG9nRXJyb3IoZXJyKVxyXG5cclxuICAgICAgY29uc3QgbmV4dFNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcclxuXHJcbiAgICAgIGlmIChuZXh0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucnVuU2VydmljZShuZXh0U2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKFxyXG4gICAgICAgICAgdGhpcyxcclxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tFcnJvcixcclxuICAgICAgICAgIG5ldyBFcnJvcignQWxsIHNlcnZpY2VzIGZhaWxlZCcpXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKHRoaXMsIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSwgZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRTZXJ2aWNlT3B0cygpIHtcclxuICAgIGNvbnN0IHZhbCA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1t0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXhdXHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIHtuYW1lOiB2YWx9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gdmFsKClcclxuICAgIH1lbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcclxuICAgICAgcmV0dXJuIHZhbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGNhbGxiYWNrIGFmdGVyIHJlc2V0dGluZyB0aGUgYGN1cnJlbnRTZXJ2aWNlSW5kZXhgXHJcbiAgY29tcGxldGVTZXJ2aWNlKGZuLCBkYXRhKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMVxyXG5cclxuICAgIGZuICYmIGZuKGRhdGEpXHJcbiAgfVxyXG5cclxuICBsb2dFcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgYFRoZSBzZXJ2aWNlWyR7dGhpcy5jdXJyZW50U2VydmljZUluZGV4fV0gKCR7dGhpcy5nZXRTZXJ2aWNlQnlJZHgodGhpcy5jdXJyZW50U2VydmljZUluZGV4KS51cmx9KSByZXNwb25kZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yYCxcclxuICAgICAgIGVyclxyXG4gICAgKVxyXG4gIH1cclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcclxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL3BvcHVwXCJcclxuaW1wb3J0IHtcclxuICBjYXRlZ29yaWVzLFxyXG4gIHN0YXR1c2VzLFxyXG4gIHN0YXR1c0Rpc21pc3MsXHJcbiAgc3RhdHVzQWxsb3csXHJcbiAgc3RhdHVzRGVueSxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHtcclxuICBhZGRDdXN0b21TdHlsZXNoZWV0LFxyXG4gIGdldENvb2tpZSxcclxuICBoYXNoLFxyXG4gIGludGVycG9sYXRlU3RyaW5nLFxyXG4gIGlzTW9iaWxlLFxyXG4gIGlzUGxhaW5PYmplY3QsXHJcbiAgaXNWYWxpZFN0YXR1cyxcclxuICBzZXRDb29raWUsXHJcbiAgdGhyb3R0bGUsXHJcbiAgdHJhdmVyc2VET01QYXRoLFxyXG59IGZyb20gXCIuLi91dGlsc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zLCBpbml0aWFsVmFsdWVzICkge1xyXG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcclxuICAgIHRoaXMudXNlckNhdGVnb3JpZXMgPSBpbml0aWFsVmFsdWVzIHx8IHtcclxuICAgICAgRVNTRU5USUVMICAgICAgOiBzdGF0dXNBbGxvdyxcclxuICAgICAgU1RBVElTVElRVUVTICAgOiBzdGF0dXNEaXNtaXNzLFxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXN0b21TdHlsZXMgPSB7fVxyXG4gICAgdGhpcy50cmFuc2l0aW9uRW5kID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgIGNvbnN0IHRyYW5zID0ge1xyXG4gICAgICAgIHQ6ICd0cmFuc2l0aW9uZW5kJyxcclxuICAgICAgICBPVDogJ29UcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICBtc1Q6ICdNU1RyYW5zaXRpb25FbmQnLFxyXG4gICAgICAgIE1velQ6ICd0cmFuc2l0aW9uZW5kJyxcclxuICAgICAgICBXZWJraXRUOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBmb3IgKGxldCBwcmVmaXggaW4gdHJhbnMpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0cmFucy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpICYmXHJcbiAgICAgICAgICB0eXBlb2YgZWwuc3R5bGVbcHJlZml4ICsgJ3JhbnNpdGlvbiddICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRyYW5zW3ByZWZpeF1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9KSgpXHJcblxyXG4gICAgLy9UT0RPIFJFQ1VQRVJFUiBMQSBCT05ORSBWQUxFVVIgZGFucyBoYXNUcmFuc2l0aW9uXHJcbiAgICB0aGlzLmhhc1RyYW5zaXRpb24gPSAhIXRoaXMudHJhbnNpdGlvbkVuZDtcclxuXHJcbiAgICAvLyByZXR1cm5zIHRydWUgaWYgYG9uQ29tcGxldGVgIHdhcyBjYWxsZWRcclxuICAgIGlmICh0aGlzLmNhblVzZUNvb2tpZXMoKSkge1xyXG4gICAgICAvLyB1c2VyIGhhcyBhbHJlYWR5IGFuc3dlcmVkXHJcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2VcclxuICAgIH1cclxuICAgIC8vIGFwcGx5IGJsYWNrbGlzdCAvIHdoaXRlbGlzdFxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5ibGFja2xpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLndoaXRlbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZSBmdWxsIG1hcmt1cCBlaXRoZXIgY29udGFpbnMgdGhlIHdyYXBwZXIgb3IgaXQgZG9lcyBub3QgKGZvciBtdWx0aXBsZSBpbnN0YW5jZXMpXHJcbiAgICBsZXQgY29va2llUG9wdXAgPSB0aGlzLm9wdGlvbnMud2luZG93XHJcbiAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIHRoaXMuZ2V0UG9wdXBDbGFzc2VzKCkuam9pbignICcpKVxyXG4gICAgICAucmVwbGFjZSgne3tjaGlsZHJlbn19JywgdGhpcy5nZXRQb3B1cElubmVyTWFya3VwKCkpXHJcblxyXG4gICAgLy8gaWYgdXNlciBwYXNzZXMgaHRtbCwgdXNlIGl0IGluc3RlYWRcclxuICAgIGNvbnN0IGN1c3RvbUhUTUwgPSB0aGlzLm9wdGlvbnMub3ZlcnJpZGVIVE1MXHJcbiAgICBpZiAodHlwZW9mIGN1c3RvbUhUTUwgPT0gJ3N0cmluZycgJiYgY3VzdG9tSFRNTC5sZW5ndGggKSB7XHJcbiAgICAgIGNvb2tpZVBvcHVwID0gY3VzdG9tSFRNTFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIHN0YXRpYywgd2UgbmVlZCB0byBncm93IHRoZSBlbGVtZW50IGZyb20gMCBoZWlnaHQgc28gaXQgZG9lc24ndCBqdW1wIHRoZSBwYWdlXHJcbiAgICAvLyBjb250ZW50LiB3ZSB3cmFwIGFuIGVsZW1lbnQgYXJvdW5kIGl0IHdoaWNoIHdpbGwgbWFzayB0aGUgaGlkZGVuIGNvbnRlbnRcclxuICAgIFxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcclxuICAgICAgLy8gYGdyb3dlcmAgaXMgYSB3cmFwcGVyIGRpdiB3aXRoIGEgaGlkZGVuIG92ZXJmbG93IHdob3NlIGhlaWdodCBpcyBhbmltYXRlZFxyXG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5hcHBlbmRNYXJrdXAoYDxkaXYgY2xhc3M9XCJjYy1ncm93ZXJcIj4ke2Nvb2tpZVBvcHVwfTwvZGl2PmApXHJcblxyXG4gICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnJyAvLyBzZXQgaXQgdG8gdmlzaWJsZSAoYmVjYXVzZSBhcHBlbmRNYXJrdXAgaGlkZXMgaXQpXHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHdyYXBwZXIuZmlyc3RDaGlsZCAvLyBnZXQgdGhlIGBlbGVtZW50YCByZWZlcmVuY2UgZnJvbSB0aGUgd3JhcHBlclxyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuYXBwZW5kTWFya3VwKGNvb2tpZVBvcHVwKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwbHlBdXRvRGlzbWlzcygpXHJcbiAgICB0aGlzLmFwcGx5UmV2b2tlQnV0dG9uKClcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuKSB7XHJcbiAgICAgIHRoaXMuYXV0b09wZW4oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcclxuICAgICAgaWYgKHRoaXMuaGFzVHJhbnNpdGlvbikge1xyXG4gICAgICAgIHRoaXMuZmFkZUluKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNjLWJ0biBbdHlwZT1cImNoZWNrYm94XCJdJyApLmZvckVhY2goIGNoZWNrYm94ID0+IHtcclxuICAgICAgICBjaGVja2JveC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24oKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCggXCJwb3B1cE9wZW5lZFwiIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoIHNob3dSZXZva2UgKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuXHJcbiAgICBcclxuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhc1RyYW5zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmZhZGVPdXQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzaG93UmV2b2tlICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCggXCJwb3B1cENsb3NlZFwiIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgZmFkZUluKCkge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRcclxuXHJcbiAgICBpZiAoIXRoaXMuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVyblxyXG5cclxuICAgIC8vIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgQUZURVIgZmFkZU91dCAod2hpY2ggaXMgZ292ZXJuZWQgYnkgdGhlICd0cmFuc2l0aW9uZW5kJyBldmVudCkuXHJcbiAgICAvLyAndHJhbnNpdGlvbmVuZCcgaXNuJ3QgYWxsIHRoYXQgcmVsaWFibGUsIHNvLCBpZiB3ZSB0cnkgYW5kIGZhZGVJbiBiZWZvcmUgJ3RyYW5zaXRpb25lbmQnIGhhc1xyXG4gICAgLy8gaGFzIGEgY2hhbmNlIHRvIHJ1biwgdGhlbiB3ZSBydW4gaXQgb3Vyc2VsdmVzXHJcbiAgICBpZiAodGhpcy5hZnRlclRyYW5zaXRpb24pIHtcclxuICAgICAgdGhpcy5hZnRlckZhZGVPdXQoZWwpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcclxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnXHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZhZGVJblRpbWVvdXQgPSAyMCAvLyAobXMpIERPIE5PVCBNQUtFIFRISVMgVkFMVUUgU01BTExFUi4gU2VlIGJlbG93XHJcblxyXG4gICAgICAvLyBBbHRob3VnaCBtb3N0IGJyb3dzZXJzIGNhbiBoYW5kbGUgdmFsdWVzIGxlc3MgdGhhbiAyMG1zLCBpdCBzaG91bGQgcmVtYWluIGFib3ZlIHRoaXMgdmFsdWUuXHJcbiAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB3ZSBhcmUgd2FpdGluZyBmb3IgYSBcImJyb3dzZXIgcmVkcmF3XCIgYmVmb3JlIHdlIHJlbW92ZSB0aGUgJ2NjLWludmlzaWJsZScgY2xhc3MuXHJcbiAgICAgIC8vIElmIHRoZSBjbGFzcyBpcyByZW12b2VkIGJlZm9yZSBhIHJlZHJhdyBjb3VsZCBoYXBwZW4sIHRoZW4gdGhlIGZhZGVJbiBlZmZlY3QgV0lMTCBOT1Qgd29yaywgYW5kXHJcbiAgICAgIC8vIHRoZSBwb3B1cCB3aWxsIGFwcGVhciBmcm9tIG5vdGhpbmcuIFRoZXJlZm9yZSB3ZSBNVVNUIGFsbG93IGVub3VnaCB0aW1lIGZvciB0aGUgYnJvd3NlciB0byBkb1xyXG4gICAgICAvLyBpdHMgdGhpbmcuIFRoZSBhY3R1YWxseSBkaWZmZXJlbmNlIGJldHdlZW4gdXNpbmcgMCBhbmQgMjAgaW4gYSBzZXQgdGltZW91dCBpcyBuZWdsZWdpYmxlIGFueXdheVxyXG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLmFmdGVyRmFkZUluKGVsKSxcclxuICAgICAgICBmYWRlSW5UaW1lb3V0XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbmVlZHMgdG8gYmUgY2FsbGVkIGFmdGVyICdmYWRlSW4nLiBUaGlzIGlzIHRoZSBjb2RlIHRoYXQgYWN0dWFsbHkgY2F1c2VzIHRoZSBmYWRlSW4gdG8gd29ya1xyXG4gICAqIFRoZXJlIGlzIGEgZ29vZCByZWFzb24gd2h5IGl0J3MgY2FsbGVkIGluIGEgdGltZW91dC4gUmVhZCAnZmFkZUluJ1xyXG4gICAqL1xyXG4gIGFmdGVyRmFkZUluKCBlbGVtZW50ICkge1xyXG4gICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IG51bGxcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2MtaW52aXNpYmxlJylcclxuICB9XHJcbiAgXHJcbiAgZmFkZU91dCgpIHtcclxuICAgIGlmICghdGhpcy5oYXNUcmFuc2l0aW9uIHx8ICF0aGlzLmVsZW1lbnQpIHJldHVyblxyXG5cclxuICAgIGlmICh0aGlzLm9wZW5pbmdUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9wZW5pbmdUaW1lb3V0KVxyXG4gICAgICB0aGlzLmFmdGVyRmFkZUluKHRoaXMuZWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gJydcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSAoKSA9PiB0aGlzLmFmdGVyRmFkZU91dCh0aGlzLmVsZW1lbnQpXHJcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pXHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYWZ0ZXJGYWRlT3V0KGVsKSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIC8vIGFmdGVyIGNsb3NlIGFuZCBiZWZvcmUgb3BlbiwgdGhlIGRpc3BsYXkgc2hvdWxkIGJlIG5vbmVcclxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbilcclxuICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5lbGVtZW50ICYmXHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnJyAmJlxyXG4gICAgICAodGhpcy5oYXNUcmFuc2l0aW9uID8gIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpIDogdHJ1ZSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIHRvZ2dsZVJldm9rZUJ1dHRvbihzaG93KSB7XHJcbiAgICBpZiAodGhpcy5yZXZva2VCdG4pIHRoaXMucmV2b2tlQnRuLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gJycgOiAnbm9uZSdcclxuICB9XHJcblxyXG4gIHJldm9rZUNob2ljZShwcmV2ZW50T3Blbikge1xyXG4gICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlXHJcbiAgICB0aGlzLmNsZWFyU3RhdHVzZXMoKVxyXG5cclxuICAgIHRoaXMuZW1pdCggXCJyZXZva2VDaG9pY2VcIiApXHJcblxyXG4gICAgaWYgKCFwcmV2ZW50T3Blbikge1xyXG4gICAgICB0aGlzLmF1dG9PcGVuKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhcyB0aGUgdXNlciByZXNwb25kZWQgdG8gdGhlIGJhbm5lclxyXG4gICAqIEByZXR1cm4geyBib29sZWFuIH0gLSB0cnVlIGlmIGFueSBjb29raWVzIGhhdmUgYmVlbiBzZXRcclxuICAgKi9cclxuICBoYXNBbnN3ZXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkuc29tZSggc3RhdHVzID0+ICEhc3RhdHVzIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0byBhbGwgb2YgdGhlIGNhdGVnb3JpZXNcclxuICAgKiBAcmV0dXJuIHsgYXJyYXk8Ym9vbGVhbj4gfSAtIHRydWUgaWYgY29uc2VudCBoYXMgYmVlbiBnaXZlblxyXG4gICAqL1xyXG4gIGhhc0NvbnNlbnRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkubWFwKCBzdGF0dXMgPT4gc3RhdHVzID09PSBzdGF0dXNBbGxvdyB8fCBzdGF0dXMgPT09IHN0YXR1c0Rpc21pc3MgKVxyXG4gIH1cclxuXHJcbiAgLy8gb3BlbnMgdGhlIHBvcHVwIGlmIG5vIGFuc3dlciBoYXMgYmVlbiBnaXZlblxyXG4gIGF1dG9PcGVuKCkge1xyXG4gICAgY29uc3QgaGFzQW5zd2VyZWQgPSB0aGlzLmhhc0Fuc3dlcmVkKClcclxuICAgIGlmICghaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5vcGVuKClcclxuICAgIH0gZWxzZSBpZiAoaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFxyXG4gICAqIFNldCdzIGNvb2tpZSBzdGF0dXNlc1xyXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gYWxsT3JVbmRlZiAgICAgIC0gSWYgdGhpcyBpcyB0aGUgb25seSBwYXJhbSwgc2V0IEFMTCBpZiBub3QsIHNldCBVbmNhdGVnb3JpemVkIGNvb2tpZXMgc3RhdHVzZXMgc2V0IHRvIHZhbHVlLlxyXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gZXNzZW50aWFsICAgICAgIC0gRXNzZW50aWFsIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxyXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gcGVyc29uYWxpemF0aW9uIC0gUHJlZmVyZW5jZXMgLyBGdW5jdGlvbmFsaXR5IHNldCB0byB2YWx1ZVxyXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gYW5hbHl0aWNzICAgICAgIC0gQW5hbHl0aXMgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXHJcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBtYXJrZXRpbmcgICAgICAgLSBNYXJrZXRpbmcgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXHJcbiAgICogQHJldHVybiB7IHVuZGVmaW5lZCB9XHJcbiAgKi9cclxuICBzZXRTdGF0dXNlcygpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUgfSA9IHRoaXMub3B0aW9ucy5jb29raWVcclxuXHJcbiAgICBjb25zdCB1cGRhdGVDYXRlZ29yeVN0YXR1cyA9ICggY2F0ZWdvcnlOYW1lLCBzdGF0dXMgKSA9PiB7XHJcbiAgICAgIGlmIChpc1ZhbGlkU3RhdHVzKHN0YXR1cykpIHtcclxuICAgICAgICBjb25zdCBjb29raWVOYW1lID0gbmFtZSsnXycrY2F0ZWdvcnlOYW1lXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdGF0dXMgPSBnZXRDb29raWUoY29va2llTmFtZSk7XHJcbiAgICAgICAgaWYgKCFwcmV2aW91c1N0YXR1cyB8fCBzdGF0dXMgIT09IHN0YXR1c0Rpc21pc3MpIHtcclxuICAgICAgICAgIHNldENvb2tpZShjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKVxyXG4gICAgICAgICAgdGhpcy5lbWl0KCBcInN0YXR1c0NoYW5nZWRcIiwgY29va2llTmFtZSwgc3RhdHVzLCBwcmV2aW91c1N0YXR1cyApXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnkubmFtZSwgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcnkubmFtZSBdICkgKVxyXG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcclxuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnkubmFtZSwgYXJndW1lbnRzWyAwIF0gKSApXHJcbiAgICB9IGVsc2UgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcclxuICAgICAgYXJndW1lbnRzLmZvckVhY2goICggY2F0ZWdvcnlTdGF0dXMsIGluZGV4ICkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcclxuICAgKiBAcmV0dXJuIHsgYXJyYXk8c3RyaW5nPiB9IC0gY29va2llIGNhdGVnb3JpZXMgc3RhdHVzIGluIG9yZGVyIG9mIGNhdGVnb3JpZXNcclxuICAgKi9cclxuICBnZXRTdGF0dXNlcygpIHtcclxuICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcCggY2F0ZWdvcnkgPT4gZ2V0Q29va2llKHRoaXMub3B0aW9ucy5jb29raWUubmFtZSsnXycrY2F0ZWdvcnkubmFtZSkgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcclxuICAgKi9cclxuICBjbGVhclN0YXR1c2VzKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBkb21haW4sIHBhdGggfSA9IHRoaXMub3B0aW9ucy5jb29raWVcclxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnkgPT4ge1xyXG4gICAgICBzZXRDb29raWUobmFtZSsnXycrY2F0ZWdvcnkubmFtZSwgJycsIC0xLCBkb21haW4sIHBhdGgpXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICBjYW5Vc2VDb29raWVzKCkge1xyXG4gICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQgfHwgd2luZG93LkNvb2tpZXNPSyB8fCB3aW5kb3cubmF2aWdhdG9yLkNvb2tpZXNPSyApIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0dXNlc1ZhbHVlcyA9IHRoaXMuZ2V0U3RhdHVzZXMoKVxyXG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XS5uYW1lXTogaXNWYWxpZFN0YXR1cyggc3RhdHVzICkgfSApIClcclxuICAgIGNvbnN0IGhhc01hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbWF0Y2ggPT4gbWF0Y2hbT2JqZWN0LmtleXMobWF0Y2gpWzBdXSApLmxlbmd0aCA+IDBcclxuICAgIHN0YXR1c2VzVmFsdWVzLmZvckVhY2goICggc3RhdHVzLCBpbmRleCApID0+XHJcbiAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3JpZXNbIGluZGV4IF0ubmFtZSBdID09PSBzdGF0dXNcclxuICAgICAgICA/IHN0YXR1cyA6IHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3JpZXNbIGluZGV4IF0ubmFtZSBdIClcclxuXHJcbiAgICByZXR1cm4gaGFzTWF0Y2hlc1xyXG4gIH1cclxuXHJcbiAgLy8gdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0XHJcbiAgZ2V0UG9zaXRpb25DbGFzc2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wb3NpdGlvbi5zcGxpdCggJy0nICkubWFwKCBwb3MgPT4gJ2NjLScrcG9zKVxyXG4gIH1cclxuXHJcbiAgZ2V0UG9wdXBDbGFzc2VzKCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xyXG4gICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxyXG4gICAgICBvcHRzLnBvc2l0aW9uID09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT0gJ2JvdHRvbSdcclxuICAgICAgICA/ICdiYW5uZXInXHJcbiAgICAgICAgOiAnZmxvYXRpbmcnXHJcblxyXG4gICAgaWYgKGlzTW9iaWxlKCkgJiYgb3B0cy5tb2JpbGVGb3JjZUZsb2F0KSB7XHJcbiAgICAgIHBvc2l0aW9uU3R5bGUgPSAnZmxvYXRpbmcnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IFtcclxuICAgICAgJ2NjLScgKyBwb3NpdGlvblN0eWxlLCAvLyBmbG9hdGluZyBvciBiYW5uZXJcclxuICAgICAgJ2NjLXR5cGUtJyArIG9wdHMudHlwZSwgLy8gYWRkIHRoZSBjb21wbGlhbmNlIHR5cGVcclxuICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXHJcbiAgICBdXHJcblxyXG4gICAgaWYgKG9wdHMuc3RhdGljKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnY2Mtc3RhdGljJylcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzLnB1c2guYXBwbHkoY2xhc3NlcywgdGhpcy5nZXRQb3NpdGlvbkNsYXNzZXMoKSlcclxuXHJcbiAgICAvLyB3ZSBvbmx5IGFkZCBleHRyYSBzdHlsZXMgaWYgYHBhbGV0dGVgIGhhcyBiZWVuIHNldCB0byBhIHZhbGlkIHZhbHVlXHJcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVBhbGV0dGUodGhpcy5vcHRpb25zLnBhbGV0dGUpXHJcblxyXG4gICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcclxuICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvcilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xhc3Nlc1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9wdXBJbm5lck1hcmt1cCgpIHtcclxuICAgIGNvbnN0IGludGVycG9sYXRlZCA9IHt9XHJcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXHJcblxyXG4gICAgLy8gcmVtb3ZlcyBsaW5rIGlmIHNob3dMaW5rIGlzIGZhbHNlXHJcbiAgICBpZiAoIW9wdHMuc2hvd0xpbmspIHtcclxuICAgICAgb3B0cy5lbGVtZW50cy5saW5rID0gJycgXHJcbiAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3Qua2V5cyhvcHRzLmVsZW1lbnRzKS5mb3JFYWNoKCBwcm9wID0+IHtcclxuICAgICAgaW50ZXJwb2xhdGVkW3Byb3BdID0gaW50ZXJwb2xhdGVTdHJpbmcoXHJcbiAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcclxuICAgICAgICBuYW1lID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN0ciA9IG9wdHMuY29udGVudFtuYW1lXVxyXG4gICAgICAgICAgcmV0dXJuIG5hbWUgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyAmJiBzdHIubGVuZ3RoID8gc3RyIDogJydcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgLy8gY2hlY2tzIGlmIHRoZSB0eXBlIGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBpbmZvIGlmIGl0J3Mgbm90XHJcbiAgICBsZXQgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2Vbb3B0cy50eXBlXVxyXG4gICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xyXG4gICAgICBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZS5pbmZvXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYnVpbGQgdGhlIGNvbXBsaWFuY2UgdHlwZXMgZnJvbSB0aGUgYWxyZWFkeSBpbnRlcnBvbGF0ZWQgYGVsZW1lbnRzYFxyXG4gICAgaW50ZXJwb2xhdGVkLmNvbXBsaWFuY2UgPSBpbnRlcnBvbGF0ZVN0cmluZyggY29tcGxpYW5jZVR5cGUsIG5hbWUgPT4gaW50ZXJwb2xhdGVkW25hbWVdIClcclxuXHJcbiAgICAvLyBjaGVja3MgaWYgdGhlIGxheW91dCBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gYmFzaWMgaWYgaXQncyBub3RcclxuICAgIGxldCBsYXlvdXQgPSBvcHRzLmxheW91dHNbb3B0cy5sYXlvdXRdXHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICBsYXlvdXQgPSBvcHRzLmxheW91dHMuYmFzaWNcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGludGVycG9sYXRlU3RyaW5nKGxheW91dCwgbWF0Y2ggPT5pbnRlcnBvbGF0ZWRbbWF0Y2hdIClcclxuICB9XHJcblxyXG4gIGFwcGVuZE1hcmt1cChtYXJrdXApIHtcclxuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjb250ID1cclxuICAgICAgb3B0cy5jb250YWluZXIgJiYgb3B0cy5jb250YWluZXIubm9kZVR5cGUgPT09IDFcclxuICAgICAgICA/IG9wdHMuY29udGFpbmVyXHJcbiAgICAgICAgOiBkb2N1bWVudC5ib2R5XHJcblxyXG4gICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cFxyXG5cclxuICAgIGNvbnN0IGVsID0gZGl2LmNoaWxkcmVuWzBdXHJcblxyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIHRoaXMuaGFzVHJhbnNpdGlvbikge1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5oYW5kbGVCdXR0b25DbGljayggZXZlbnQgKSApXHJcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNjLWJ0biBbdHlwZT1cImNoZWNrYm94XCJdJyApLmZvckVhY2goIGNoZWNrYm94ID0+IHtcclxuICAgICAgLy9Jbml0aWFsaXplIHRoZSBjaGVja2VkIHZhbHVlIG9mIGNoZWNrYm94ZXNcclxuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRoaXMudXNlckNhdGVnb3JpZXNbIGNoZWNrYm94Lm5hbWUgXSA9PT0gc3RhdHVzQWxsb3c7XHJcbiAgICAgIGlmIChjaGVja2JveC5uYW1lID09PSAnRVNTRU5USUVMJykge1xyXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNoZWNrYm94Lm5hbWUgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyBzdGF0dXNBbGxvdyA6IHN0YXR1c0RlbnlcclxuICAgICAgfSlcclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZXZlbnQgPT4gKGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKSApXHJcbiAgICB9KVxyXG4gICAgZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYy1pbmZvXCIpLmZvckVhY2goIHNob3dJbmZvID0+IHtcclxuICAgICAgc2hvd0luZm8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICBpZiAoIHRoaXMgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgICkge1xyXG4gICAgICAgICAgdGhpcy5ibHVyKClcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChvcHRzLmF1dG9BdHRhY2gpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoIWNvbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgY29udC5hcHBlbmRDaGlsZChlbClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udC5pbnNlcnRCZWZvcmUoZWwsIGNvbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIk5vIGNvbnRhaW5lciB0byBhdHRhY2ggdG9vLiBNYWtlIHN1cmUgdGhlIERPTSBoYXMgbG9hZGVkLiBJcyB5b3VyIHNjcmlwdCBsb2FkZWQganVzdCBiZWZvcmUgdGhlIGA8L2JvZHk+YCB0YWc/XCIgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsXHJcbiAgfVxyXG5cclxuICBoYW5kbGVCdXR0b25DbGljayhldmVudCkge1xyXG4gICAgLy8gcmV0dXJucyB0aGUgcGFyZW50IGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGNsYXNzLCBvciB0aGUgb3JpZ2luYWwgZWxlbWVudCAtIG51bGwgaWYgbm90IGZvdW5kXHJcbiAgICBjb25zdCBidG4gPSB0cmF2ZXJzZURPTVBhdGgoZXZlbnQudGFyZ2V0LCAnY2MtYnRuJykgfHwgZXZlbnQudGFyZ2V0XHJcbiAgICBcclxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1zYXZlJyApKXtcclxuICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXHJcbiAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSkge1xyXG4gICAgICBjb25zdCBtYXRjaGVzID0gYnRuLmNsYXNzTmFtZS5tYXRjaChcclxuICAgICAgICBuZXcgUmVnRXhwKCdcXFxcYmNjLSgnICsgc3RhdHVzZXMubWFwKCBzdHIgPT4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJykgKS5qb2luKCd8JykgKyAnKVxcXFxiJylcclxuICAgICAgKVxyXG4gICAgICBjb25zdCBtYXRjaCA9IChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHx8IGZhbHNlXHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzZXMobWF0Y2gpXHJcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1jbG9zZScgKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXHJcbiAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXJldm9rZScgKSkge1xyXG4gICAgICB0aGlzLnJldm9rZUNob2ljZSgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXR0YWNoQ3VzdG9tUGFsZXR0ZShwYWxldHRlKSB7XHJcbiAgICBjb25zdCBoYXNoU3RyID0gaGFzaChKU09OLnN0cmluZ2lmeShwYWxldHRlKSlcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gJ2NjLWNvbG9yLW92ZXJyaWRlLScgKyBoYXNoU3RyXHJcbiAgICBjb25zdCBpc1ZhbGlkID0gaXNQbGFpbk9iamVjdChwYWxldHRlKVxyXG5cclxuICAgIHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvciA9IGlzVmFsaWQgPyBzZWxlY3RvciA6IG51bGxcclxuXHJcbiAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICBhZGRDdXN0b21TdHlsZXNoZWV0KGhhc2hTdHIsIHBhbGV0dGUsICcuJyArIHNlbGVjdG9yKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVmFsaWRcclxuICB9XHJcblxyXG5cclxuICBnZXRFdmVudFBhdGgoIGV2ZW50ICkge1xyXG4gICAgY29uc3QgcGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpIDogKGZ1bmN0aW9uICggYXJyLCBlbGVtZW50ICkge1xyXG4gICAgICB3aGlsZSAoIGVsZW1lbnQgKSB7XHJcbiAgICAgICAgYXJyLnB1c2goIGVsZW1lbnQgKVxyXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyXHJcbiAgICB9KShbXSxldmVudC50YXJnZXQgKVxyXG4gICAgaWYgKCAhcGF0aCApIHtcclxuICAgICAgY29uc29sZS53YXJuKCBcIicucGF0aCcgJiAnLmNvbXBvc2VkUGF0aCcgZmFpbGVkIHRvIGdlbmVyYXRlIGFuIGV2ZW50IHBhdGguXCIgKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoXHJcbiAgfVxyXG5cclxuICBhcHBseUF1dG9EaXNtaXNzKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBlbmFibGVkLFxyXG4gICAgICBkaXNtaXNzT25UaW1lb3V0ICA6IGRlbGF5LFxyXG4gICAgICBkaXNtaXNzT25TY3JvbGwgICA6c2Nyb2xsUmFuZ2UsXHJcbiAgICAgIGRpc21pc3NPbkxpbmtDbGljayxcclxuICAgICAgZGlzbWlzc09uV2luZG93Q2xpY2ssXHJcbiAgICAgIGRpc21pc3NPbktleVByZXNzXHJcbiAgICB9ID0gdGhpcy5vcHRpb25zXHJcblxyXG4gICAgaWYgKCBlbmFibGVkICkge1xyXG4gICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcclxuICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gc2V0VGltZW91dCggKCk9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXHJcbiAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgICAgfSwgTWF0aC5mbG9vcihkZWxheSkpXHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNjcm9sbFJhbmdlID09ICdudW1iZXInICYmIHNjcm9sbFJhbmdlID49IDApIHtcclxuICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IE1hdGguZmxvb3Ioc2Nyb2xsUmFuZ2UpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxyXG4gICAgICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoZGlzbWlzc09uV2luZG93Q2xpY2spIHtcclxuICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBldnQgPT4ge1xyXG4gICAgICAgICAgaWYgKCAhZ2V0RXZlbnRQYXRoKCBldnQgKS5zb21lKCBlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pZ25vcmVDbGlja3NGcm9tLnNvbWUoIGlnbm9yZWRDbGljayA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBpZ25vcmVkQ2xpY2sgKVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25XaW5kb3dDbGljaylcclxuICAgICAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25XaW5kb3dDbGljaylcclxuICAgICAgfSBlbHNlIGlmIChkaXNtaXNzT25MaW5rQ2xpY2spIHtcclxuICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gZXZ0ID0+IHtcclxuICAgICAgICAgIGlmICggZ2V0RXZlbnRQYXRoKCBldnQgKS5zb21lKCBlbGVtID0+IHR5cGVvZiBlbGVtLnRhZ05hbWUgIT09ICd1bmRlZmluZWQnICYmIGVsZW0udGFnTmFtZSA9PT0gJ0EnICkgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0Rpc21pc3MgKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcclxuICAgICAgICAgICAgdGhpcy5vbkxpbmtDbGljayA9IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcclxuICAgICAgfSBlbHNlIGlmICggZGlzbWlzc09uS2V5UHJlc3MgKSB7XHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnRcclxuICAgICAgICAgICAgaWYgKCBrZXlDb2RlID09PSAxMyApIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKCBzdGF0dXNBbGxvdyApXHJcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzRGlzbWlzcyApXHJcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnb25rZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5UmV2b2tlQnV0dG9uKCkge1xyXG4gICAgLy8gcmV2b2thYmxlIGlzIHRydWUgaWYgYWR2YW5jZWQgY29tcGxpYW5jZSBpcyBzZWxlY3RlZFxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy50eXBlICE9ICdpbmZvJyAmJiB0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcgPT0gdHJ1ZSkgdGhpcy5vcHRpb25zLnJldm9rYWJsZSA9IHRydWVcclxuICAgIC8vIGFuaW1hdGVSZXZva2FibGUgZmFsc2UgZm9yIG1vYmlsZSBkZXZpY2VzXHJcbiAgICBpZiAoaXNNb2JpbGUoKSkgdGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUgPSBmYWxzZVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XHJcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmdldFBvc2l0aW9uQ2xhc3NlcygpXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xyXG4gICAgICAgIGNsYXNzZXMucHVzaCgnY2MtYW5pbWF0ZScpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xyXG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50aGVtZSkge1xyXG4gICAgICAgIGNsYXNzZXMucHVzaCgnY2MtdGhlbWUtJyt0aGlzLm9wdGlvbnMudGhlbWUpXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSApXHJcbiAgICAgIGNvbnN0IHJldm9rZUJ0biA9IHRoaXMub3B0aW9ucy5yZXZva2VCdG5cclxuICAgICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCBjbGFzc2VzLmpvaW4oJyAnKSlcclxuICAgICAgICAucmVwbGFjZSgne3twb2xpY3l9fScsIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSlcclxuXHJcbiAgICAgIHRoaXMucmV2b2tlQnRuID0gdGhpcy5hcHBlbmRNYXJrdXAocmV2b2tlQnRuKVxyXG5cclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5yZXZva2VCdG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XHJcbiAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSB0aHJvdHRsZShmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgIGxldCBhY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgY29uc3QgbWluWSA9IDIwXHJcbiAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjBcclxuXHJcbiAgICAgICAgICBpZiAoICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXRvcCcgKSAmJiBldnQuY2xpZW50WSA8IG1pblkgKSB8fFxyXG4gICAgICAgICAgICAgICAgKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYm90dG9tJyApICYmIGV2dC5jbGllbnRZID4gbWF4WSApICkge1xyXG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGFjdGl2ZSAmJiAhYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcclxuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCggJ2NjLWFjdGl2ZScgKVxyXG4gICAgICAgICAgfSBlbHNlIGlmICggIWFjdGl2ZSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xyXG4gICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCAnY2MtYWN0aXZlJyApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMjAwKVxyXG5cclxuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmVcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZGVzdHJveSgpe1xyXG4gICAgY29uc29sZS53YXJuKCBcIkRlc3Ryb3lpbmcuLi5cIilcclxuICAgIGlmICggdGhpcy5lbGVtZW50ICl7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKVxyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLnJldm9rZUJ0biApe1xyXG4gICAgICB0aGlzLnJldm9rZUJ0bi5yZW1vdmUoKVxyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLm9uV2luZG93U2Nyb2xsICl7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsIClcclxuICAgIH1cclxuICAgIGlmICggdGhpcy5vbldpbmRvd0NsaWNrICkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2sgKVxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMub25MaW5rQ2xpY2sgKSB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMub25LZXlQcmVzcyApIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBNYWtlIHRoaXMgZmFsc2UgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSBhbGwgcmVnaW9uYWwgb3ZlcnJpZGVzIGZvciBzZXR0aW5ncy5cclxuICAvLyBJZiB0cnVlLCBvcHRpb25zIGNhbiBkaWZmZXIgYnkgY291bnRyeSwgZGVwZW5kaW5nIG9uIHRoZWlyIGNvb2tpZSBsYXcuXHJcbiAgLy8gSXQgZG9lcyBub3QgYWZmZWN0IGhpZGluZyB0aGUgcG9wdXAgZm9yIGNvdW50cmllcyB0aGF0IGRvIG5vdCBoYXZlIGNvb2tpZSBsYXcuXHJcbiAgcmVnaW9uYWxMYXc6IHRydWUsXHJcblxyXG4gIC8vIGNvdW50cmllcyB0aGF0IGVuZm9yY2Ugc29tZSB2ZXJzaW9uIG9mIGEgY29va2llIGxhd1xyXG4gIGhhc0xhdzogW1xyXG4gICAgJ0FUJyxcclxuICAgICdCRScsXHJcbiAgICAnQkcnLFxyXG4gICAgJ0hSJyxcclxuICAgICdDWicsXHJcbiAgICAnQ1knLFxyXG4gICAgJ0RLJyxcclxuICAgICdFRScsXHJcbiAgICAnRkknLFxyXG4gICAgJ0ZSJyxcclxuICAgICdERScsXHJcbiAgICAnRUwnLFxyXG4gICAgJ0hVJyxcclxuICAgICdJRScsXHJcbiAgICAnSVQnLFxyXG4gICAgJ0xWJyxcclxuICAgICdMVCcsXHJcbiAgICAnTFUnLFxyXG4gICAgJ01UJyxcclxuICAgICdOTCcsXHJcbiAgICAnTk8nLFxyXG4gICAgJ1BMJyxcclxuICAgICdQVCcsXHJcbiAgICAnU0snLFxyXG4gICAgJ0VTJyxcclxuICAgICdTRScsXHJcbiAgICAnR0InLFxyXG4gICAgJ1VLJyxcclxuICAgICdHUicsXHJcbiAgICAnRVUnLFxyXG4gICAgJ1JPJ1xyXG4gIF0sXHJcblxyXG4gIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGFsbCBjb29raWUgY29uc2VudCBjaG9pY2VzIG11c3QgYmUgcmV2b2thYmxlIChhIHVzZXIgbXVzdCBiZSBhYmxlIHRvbyBjaGFuZ2UgdGhlaXIgbWluZClcclxuICByZXZva2FibGU6IFtcclxuICAgICdIUicsXHJcbiAgICAnQ1knLFxyXG4gICAgJ0RLJyxcclxuICAgICdFRScsXHJcbiAgICAnRlInLFxyXG4gICAgJ0RFJyxcclxuICAgICdMVicsXHJcbiAgICAnTFQnLFxyXG4gICAgJ05MJyxcclxuICAgICdOTycsXHJcbiAgICAnUFQnLFxyXG4gICAgJ0VTJ1xyXG4gIF0sXHJcblxyXG4gIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGEgcGVyc29uIGNhbiBvbmx5IFwiY29uc2VudFwiIGlmIHRoZSBleHBsaWNpdGx5IGNsaWNrIG9uIFwiSSBhZ3JlZVwiLlxyXG4gIC8vIGluIHRoZXNlIGNvdW50cmllcywgY29uc2VudCBjYW5ub3QgYmUgaW1wbGllZCB2aWEgYSB0aW1lb3V0IG9yIGJ5IHNjcm9sbGluZyBkb3duIHRoZSBwYWdlXHJcbiAgZXhwbGljaXRBY3Rpb246IFsnSFInLCAnSVQnLCAnRVMnLCAnTk8nXVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmNvbnN0IHRvRXJyb3IgPSBvYmogPT4gbmV3IEVycm9yKCdFcnJvciBbJyArIChvYmouY29kZSB8fCAnVU5LTk9XTicpICsgJ106ICcgKyBvYmouZXJyb3IpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gVGhlIGRlZmF1bHQgdGltZW91dCBpcyA1IHNlY29uZHMuIFRoaXMgaXMgbWFpbmx5IG5lZWRlZCB0byBjYXRjaCBKU09OUCByZXF1ZXN0cyB0aGF0IGVycm9yLlxyXG4gIC8vIE90aGVyd2lzZSB0aGVyZSBpcyBubyBlYXN5IHdheSB0byBjYXRjaCBKU09OUCBlcnJvcnMuIFRoYXQgbWVhbnMgdGhhdCBpZiBhIEpTT05QIGZhaWxzLCB0aGVcclxuICAvLyBhcHAgd2lsbCB0YWtlIGB0aW1lb3V0YCBtaWxsaXNlY29uZHMgdG8gcmVhY3QgdG8gYSBKU09OUCBuZXR3b3JrIGVycm9yLlxyXG4gIHRpbWVvdXQ6IDUwMDAsXHJcblxyXG4gIC8vIHRoZSBvcmRlciB0aGF0IHNlcnZpY2VzIHdpbGwgYmUgYXR0ZW1wdGVkIGluXHJcbiAgc2VydmljZXM6IFtcclxuICAgICdpcGluZm8nXHJcblxyXG4gICAgLypcclxuXHJcbiAgICAvLyAnaXBpbmZvZGInIHJlcXVpcmVzIHNvbWUgb3B0aW9ucywgc28gd2UgZGVmaW5lIGl0IHVzaW5nIGFuIG9iamVjdFxyXG4gICAgLy8gdGhpcyBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyB0aGUgc2VydmljZVxyXG5cclxuICAgIHtcclxuICAgICAgbmFtZTogJ2lwaW5mb2RiJyxcclxuICAgICAgaW50ZXJwb2xhdGVVcmw6IHtcclxuICAgICAgICAvLyBvYnZpb3VzbHksIHRoaXMgaXMgYSBmYWtlIGtleVxyXG4gICAgICAgIGFwaV9rZXk6ICd2T2dJMzc0OGRuSXl0SXJzSmN4Uzdxc0RmNmtiSmtFOWxONHlFRHJYQXFYY0tVTnZqalpQb3gzZWtYcW1NTWxkJ1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBhcyB3ZWxsIGFzIGRlZmluaW5nIGFuIG9iamVjdCwgeW91IGNhbiBkZWZpbmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0XHJcblxyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge25hbWU6ICdpcGluZm9kYid9XHJcbiAgICB9LFxyXG5cclxuICAgICovXHJcbiAgXSxcclxuXHJcbiAgc2VydmljZURlZmluaXRpb25zOiB7XHJcbiAgICBpcGluZm86IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxyXG4gICAgICAgIHVybDogJy8vaXBpbmZvLmlvJyxcclxuICAgICAgICBoZWFkZXJzOiBbJ0FjY2VwdDogYXBwbGljYXRpb24vanNvbiddLFxyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiBqc29uLmVycm9yXHJcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKGpzb24pXHJcbiAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBUaGlzIHNlcnZpY2UgcmVxdWlyZXMgYW4gb3B0aW9uIHRvIGRlZmluZSBga2V5YC4gT3B0aW9ucyBhcmUgcHJvaXZlZCB1c2luZyBvYmplY3RzIG9yIGZ1bmN0aW9uc1xyXG4gICAgaXBpbmZvZGI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxyXG4gICAgICAgIHVybDpcclxuICAgICAgICAgICcvL2FwaS5pcGluZm9kYi5jb20vdjMvaXAtY291bnRyeS8/a2V5PXthcGlfa2V5fSZmb3JtYXQ9anNvbiZjYWxsYmFjaz17Y2FsbGJhY2t9JyxcclxuICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBpcyBKU09OUCwgdGhlcmVmb3JlIHdlIG11c3Qgc2V0IGl0IHRvIHJ1biBhcyBhIHNjcmlwdFxyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiBqc29uLnN0YXR1c0NvZGUgPT0gJ0VSUk9SJ1xyXG4gICAgICAgICAgICAgID8gdG9FcnJvcih7ZXJyb3I6IGpzb24uc3RhdHVzTWVzc2FnZX0pXHJcbiAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeUNvZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbWF4bWluZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUgd2hpY2ggZGVmaW5lcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkuIE9uY2UgbG9hZGVkLCB3ZSBtdXN0XHJcbiAgICAgICAgLy8gbWFrZSBhbiBhZGRpdGlvbmFsIEFKQVggY2FsbC4gVGhlcmVmb3JlIHdlIHByb3ZpZGUgYSBgZG9uZWAgY2FsbGJhY2sgdGhhdCBjYW4gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgdXJsOiAnLy9qcy5tYXhtaW5kLmNvbS9qcy9hcGlzL2dlb2lwMi92Mi4xL2dlb2lwMi5qcycsXHJcbiAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlLCBzbyBpdCBtdXN0IGJlIHJ1biBhcyBhIHNjcmlwdFxyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lKSB7XHJcbiAgICAgICAgICAvLyBpZiBldmVyeXRoaW5nIHdlbnQgb2theSB0aGVuIGBnZW9pcDJgIFdJTEwgYmUgZGVmaW5lZFxyXG4gICAgICAgICAgaWYgKCF3aW5kb3cuZ2VvaXAyKSB7XHJcbiAgICAgICAgICAgIGRvbmUoXHJcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZm9ybWF0LiBUaGUgZG93bmxvYWRlZCBzY3JpcHQgc2hvdWxkIGhhdmUgZXhwb3J0ZWQgYGdlb2lwMmAgdG8gdGhlIGdsb2JhbCBzY29wZSdcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZ2VvaXAyLmNvdW50cnkoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRvbmUoe1xyXG4gICAgICAgICAgICAgICAgICBjb2RlOiBsb2NhdGlvbi5jb3VudHJ5Lmlzb19jb2RlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG5cclxuICAgICAgICAgIC8vIFdlIGNhbid0IHJldHVybiBhbnl0aGluZywgYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBzZWNvbmQgQUpBWCBjYWxsIHRvIHJldHVybi5cclxuICAgICAgICAgIC8vIFRoZW4gd2UgY2FuICdjb21wbGV0ZScgdGhlIHNlcnZpY2UgYnkgcGFzc2luZyBkYXRhIG9yIGFuIGVycm9yIHRvIHRoZSBgZG9uZWAgY2FsbGJhY2suXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCB7IHN0YXR1c0RlbnksIHN0YXR1c0FsbG93LCBzdGF0dXNEaXNtaXNzLCBjYXRlZ29yaWVzIH0gIGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIGlmIGZhbHNlLCB0aGlzIHByZXZlbnRzIHRoZSBwb3B1cCBmcm9tIHNob3dpbmcgKHVzZWZ1bCBmb3IgZ2l2aW5nIHRvIGNvbnRyb2wgdG8gYW5vdGhlciBwaWVjZSBvZiBjb2RlKVxyXG4gIGVuYWJsZWQ6IHRydWUsXHJcblxyXG4gIC8vIG9wdGlvbmFsIChleHBlY3RpbmcgYSBIVE1MIGVsZW1lbnQpIGlmIHBhc3NlZCwgdGhlIHBvcHVwIGlzIGFwcGVuZGVkIHRvIHRoaXMgZWxlbWVudC4gZGVmYXVsdCBpcyBgZG9jdW1lbnQuYm9keWBcclxuICBjb250YWluZXI6IG51bGwsXHJcblxyXG4gIC8vIGRlZmF1bHRzIGNvb2tpZSBvcHRpb25zIC0gaXQgaXMgUkVDT01NRU5ERUQgdG8gc2V0IHRoZXNlIHZhbHVlcyB0byBjb3JyZXNwb25kIHdpdGggeW91ciBzZXJ2ZXJcclxuICBjb29raWU6IHtcclxuICAgIC8vIFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhpcyBjb29raWUgLSB5b3UgY2FuIGlnbm9yZSB0aGlzXHJcbiAgICBuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxyXG4gICAgLy8gVGhpcyBpcyB0aGUgdXJsIHBhdGggdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgYXQgdGhpcyBsb2NhdGlvblxyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgLy8gVGhpcyBpcyB0aGUgZG9tYWluIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIG9uIHRoaXMgZG9tYWluLlxyXG4gICAgLy8gIC0gR3VpZGUgdG8gY29va2llIGRvbWFpbnMgLSBodHRwczovL3d3dy5teHNhc2hhLmV1L2Jsb2cvMjAxNC8wMy8wNC9kZWZpbml0aXZlLWd1aWRlLXRvLWNvb2tpZS1kb21haW5zL1xyXG4gICAgZG9tYWluOiBkb2N1bWVudC5kb21haW4sXHJcbiAgICAvLyBUaGUgY29va2llcyBleHBpcmUgZGF0ZSwgc3BlY2lmaWVkIGluIGRheXMgKHNwZWNpZnkgLTEgZm9yIG5vIGV4cGlyeSlcclxuICAgIGV4cGlyeURheXM6IDM2NSxcclxuICAgIC8vIElmIHRydWUgdGhlIGNvb2tpZSB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgc2VjdXJlIGZsYWcuIFNlY3VyZSBjb29raWVzIHdpbGwgb25seSBiZSB0cmFuc21pdHRlZCB2aWEgSFRUUFMuXHJcbiAgICBzZWN1cmU6IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6J1xyXG4gIH0sXHJcblxyXG4gIC8vIGVhY2ggaXRlbSBkZWZpbmVzIHRoZSBpbm5lciB0ZXh0IGZvciB0aGUgZWxlbWVudCB0aGF0IGl0IHJlZmVyZW5jZXNcclxuICBjb250ZW50OiB7XHJcbiAgICBoZWFkZXIgOiAnQ29va2llcyB1c2VkIG9uIHRoZSB3ZWJzaXRlIScsXHJcbiAgICBtZXNzYWdlOiAnVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBlbnN1cmUgeW91IGdldCB0aGUgYmVzdCBleHBlcmllbmNlIG9uIG91ciB3ZWJzaXRlLicsXHJcbiAgICBkaXNtaXNzOiAnR290IGl0IScsXHJcbiAgICBhbGxvdyAgOiAnQWxsb3cgY29va2llcycsXHJcbiAgICBkZW55ICAgOiAnRGVjbGluZScsXHJcbiAgICBsaW5rICAgOiAnTGVhcm4gbW9yZScsXHJcbiAgICBocmVmICAgOiAnaHR0cHM6Ly93d3cuY29va2llc2FuZHlvdS5jb20nLFxyXG4gICAgY2xvc2UgIDogJyYjeDI3NGMnLFxyXG4gICAgdGFyZ2V0IDogJ19ibGFuaycsXHJcbiAgICBzYXZlICAgOiAnU2F2ZScsXHJcbiAgICBwb2xpY3kgOiAnQ29va2llIFBvbGljeSdcclxuICB9LFxyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBIVE1MIGZvciB0aGUgZWxlbWVudHMgYWJvdmUuIFRoZSBzdHJpbmcge3toZWFkZXJ9fSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGVxdWl2YWxlbnQgdGV4dCBiZWxvdy5cclxuICAvLyBZb3UgY2FuIHJlbW92ZSBcInt7aGVhZGVyfX1cIiBhbmQgd3JpdGUgdGhlIGNvbnRlbnQgZGlyZWN0bHkgaW5zaWRlIHRoZSBIVE1MIGlmIHlvdSB3YW50LlxyXG4gIC8vXHJcbiAgLy8gIC0gQVJJQSBydWxlcyBzdWdnZXN0IHRvIGVuc3VyZSBjb250cm9scyBhcmUgdGFiYmFibGUgKHNvIHRoZSBicm93c2VyIGNhbiBmaW5kIHRoZSBmaXJzdCBjb250cm9sKSxcclxuICAvLyAgICBhbmQgdG8gc2V0IHRoZSBmb2N1cyB0byB0aGUgZmlyc3QgaW50ZXJhY3RpdmUgY29udHJvbCAoaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3VzaW5nLWFyaWEvKVxyXG4gIGVsZW1lbnRzOiB7XHJcbiAgICBoZWFkZXI6ICc8c3BhbiBjbGFzcz1cImNjLWhlYWRlclwiPnt7aGVhZGVyfX08L3NwYW4+Jm5ic3AnLFxyXG4gICAgbWVzc2FnZTpcclxuICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX08L3NwYW4+JyxcclxuICAgIG1lc3NhZ2VsaW5rOlxyXG4gICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fSA8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT48L3NwYW4+JyxcclxuICAgIGRpc21pc3M6XHJcbiAgICAgIGA8YSBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLSR7c3RhdHVzRGlzbWlzc31cIj57e2Rpc21pc3N9fTwvYT5gLFxyXG4gICAgYWxsb3c6XHJcbiAgICAgIGA8YSBhcmlhLWxhYmVsPVwiYWxsb3cgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiICBjbGFzcz1cImNjLWJ0biBjYy0ke3N0YXR1c0FsbG93fVwiPnt7YWxsb3d9fTwvYT5gLFxyXG4gICAgZGVueTpcclxuICAgICAgYDxhIGFyaWEtbGFiZWw9XCJkZW55IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy0ke3N0YXR1c0Rlbnl9XCI+e3tkZW55fX08L2E+YCxcclxuICAgIGxpbms6XHJcbiAgICAgICc8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT4nLFxyXG4gICAgY2xvc2U6XHJcbiAgICAgICc8c3BhbiBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtY2xvc2VcIj57e2Nsb3NlfX08L3NwYW4+JyxcclxuICAgIGNhdGVnb3JpZXM6ICc8dWwgY2xhc3M9XCJjYy1jYXRlZ29yaWVzXCI+JyArXHJcbiAgICAgIGNhdGVnb3JpZXMubWFwKCAoIGNhdGVnb3J5LCBpbmRleCApID0+XHJcbiAgICAgICAgYDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCIwXCI+PGxhYmVsIGZvcj1cImlkXyR7Y2F0ZWdvcnkubmFtZX1cIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJpZF8ke2NhdGVnb3J5Lm5hbWV9XCIgbmFtZT1cIiR7Y2F0ZWdvcnkubmFtZX1cIi8+JHtjYXRlZ29yeS5uYW1lfTwvbGFiZWw+PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm8gZmFsIGZhLWluZm8tc3F1YXJlXCIgYXJpYS1sYWJlbD1cIiR7Y2F0ZWdvcnkubmFtZX0gRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIiR7aW5kZXgrMX1cIj48L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XHJcbiAgICAgICAgICAgICR7Y2F0ZWdvcnkuZXhwbGFpblRleHR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPmBcclxuICAgICAgKS5qb2luKFwiXCIpXHJcbiAgICAgICsgJzwvdWw+JyxcclxuICAgIHNhdmU6IGA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLXNhdmVcIj57e3NhdmV9fTwvYnV0dG9uPmBcclxuICAgIC8vY29tcGxpYW5jZTogY29tcGxpYW5jZSBpcyBhbHNvIGFuIGVsZW1lbnQsIGJ1dCBpdCBpcyBnZW5lcmF0ZWQgYnkgdGhlIGFwcGxpY2F0aW9uLCBkZXBlbmRpbmcgb24gYHR5cGVgIGJlbG93XHJcbiAgfSxcclxuXHJcbiAgLy8gVGhlIHBsYWNlaG9sZGVycyB7e2NsYXNzZXN9fSBhbmQge3tjaGlsZHJlbn19IGJvdGggZ2V0IHJlcGxhY2VkIGR1cmluZyBpbml0aWFsaXNhdGlvbjpcclxuICAvLyAgLSB7e2NsYXNzZXN9fSBpcyB3aGVyZSBhZGRpdGlvbmFsIGNsYXNzZXMgZ2V0IGFkZGVkXHJcbiAgLy8gIC0ge3tjaGlsZHJlbn19IGlzIHdoZXJlIHRoZSBIVE1MIGNoaWxkcmVuIGFyZSBwbGFjZWRcclxuICB3aW5kb3c6XHJcbiAgICAnPGRpdiByb2xlPVwiZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1sYWJlbD1cImNvb2tpZWNvbnNlbnRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy13aW5kb3cge3tjbGFzc2VzfX1cIj48IS0tZ29vZ2xlb2ZmOiBhbGwtLT57e2NoaWxkcmVufX08IS0tZ29vZ2xlb246IGFsbC0tPjwvZGl2PicsXHJcbiAgXHJcbiAgbW9kYWw6ICcnLFxyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBodG1sIGZvciB0aGUgcmV2b2tlIGJ1dHRvbi4gVGhpcyBvbmx5IHNob3dzIHVwIGFmdGVyIHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB0aGVpciBsZXZlbCBvZiBjb25zZW50XHJcbiAgLy8gSXQgY2FuIGJlIGVuYWJsZWQgb2YgZGlzYWJsZWQgdXNpbmcgdGhlIGByZXZva2FibGVgIG9wdGlvblxyXG4gIHJldm9rZUJ0bjogJzxkaXYgY2xhc3M9XCJjYy1yZXZva2Uge3tjbGFzc2VzfX1cIj57e3BvbGljeX19PC9kaXY+JyxcclxuXHJcbiAgLy8gZGVmaW5lIHR5cGVzIG9mICdjb21wbGlhbmNlJyBoZXJlLiAne3t2YWx1ZX19JyBzdHJpbmdzIGluIGhlcmUgYXJlIGxpbmtlZCB0byBgZWxlbWVudHNgXHJcbiAgY29tcGxpYW5jZToge1xyXG4gICAgaW5mbzogJ3t7bWVzc2FnZWxpbmt9fTxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlXCI+e3tkaXNtaXNzfX08L2Rpdj4nLFxyXG4gICAgJ29wdC1pbic6XHJcbiAgICAgICd7e21lc3NhZ2VsaW5rfX08ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rlbnl9fXt7YWxsb3d9fXt7Y3VzdG9taXplfX08L2Rpdj4nLFxyXG4gICAgJ29wdC1vdXQnOlxyXG4gICAgICAne3ttZXNzYWdlbGlua319PGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2UgY2MtaGlnaGxpZ2h0XCI+e3tkaXNtaXNzfX17e2Rlbnl9fTwvZGl2PicsXHJcbiAgICBjYXRlZ29yaWVzOiAne3ttZXNzYWdlfX08ZGl2IGNsYXNzPVwiZm9ybVwiPnt7Y2F0ZWdvcmllc319e3tzYXZlfX08L2Rpdj4nXHJcbiAgfSxcclxuXHJcbiAgLy8gc2VsZWN0IHlvdXIgdHlwZSBvZiBwb3B1cCBoZXJlXHJcbiAgdHlwZTogJ2luZm8nLCAvLyByZWZlcnMgdG8gYGNvbXBsaWFuY2VgIChpbiBvdGhlciB3b3JkcywgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgZGlzcGxheWVkKVxyXG5cclxuICAvLyBkZWZpbmUgbGF5b3V0IGxheW91dHMgaGVyZVxyXG4gIGxheW91dHM6IHtcclxuICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXHJcbiAgICBiYXNpYyAgICAgICAgIDogJ3t7Y29tcGxpYW5jZX19JyxcclxuICAgICdiYXNpYy1jbG9zZScgOiAne3tjb21wbGlhbmNlfX17e2Nsb3NlfX0nLFxyXG4gICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3tjb21wbGlhbmNlfX0nXHJcbiAgICAvLyBhZGQgYSBjdXN0b20gbGF5b3V0IGhlcmUsIHRoZW4gYWRkIHNvbWUgbmV3IGNzcyB3aXRoIHRoZSBjbGFzcyAnLmNjLWxheW91dC1teS1jb29sLWxheW91dCdcclxuICAgIC8vJ215LWNvb2wtbGF5b3V0JzogJzxkaXYgY2xhc3M9XCJteS1zcGVjaWFsLWxheW91dFwiPnt7bWVzc2FnZX19e3tjb21wbGlhbmNlfX08L2Rpdj57e2Nsb3NlfX0nLFxyXG4gIH0sXHJcblxyXG4gIC8vIGRlZmF1bHQgbGF5b3V0IChzZWUgYWJvdmUpXHJcbiAgbGF5b3V0OiAnYmFzaWMnLFxyXG5cclxuICAvLyB0aGlzIHJlZmVycyB0byB0aGUgcG9wdXAgd2luZG93cyBwb3NpdGlvbi4gd2UgY3VycmVudGx5IHN1cHBvcnQ6XHJcbiAgLy8gIC0gYmFubmVyIHBvc2l0aW9uczogdG9wLCBib3R0b21cclxuICAvLyAgLSBmbG9hdGluZyBwb3NpdGlvbnM6IHRvcC1sZWZ0LCB0b3AtcmlnaHQsIGJvdHRvbS1sZWZ0LCBib3R0b20tcmlnaHRcclxuICAvL1xyXG4gIC8vIGFkZHMgYSBjbGFzcyBgY2MtZmxvYXRpbmdgIG9yIGBjYy1iYW5uZXJgIHdoaWNoIGhlbHBzIHdoZW4gc3R5bGluZ1xyXG4gIHBvc2l0aW9uOiAnYm90dG9tJywgLy8gZGVmYXVsdCBwb3NpdGlvbiBpcyAnYm90dG9tJ1xyXG5cclxuICAvLyBBdmFpbGFibGUgc3R5bGVzXHJcbiAgLy8gICAgLWJsb2NrIChkZWZhdWx0LCBubyBleHRyYSBjbGFzc2VzKVxyXG4gIC8vICAgIC1lZGdlbGVzc1xyXG4gIC8vICAgIC1jbGFzc2ljXHJcbiAgLy8gdXNlIHlvdXIgb3duIHN0eWxlIG5hbWUgYW5kIHVzZSBgLmNjLXRoZW1lLVNUWUxFTkFNRWAgY2xhc3MgaW4gQ1NTIHRvIGVkaXQuXHJcbiAgLy8gTm90ZTogc3R5bGUgXCJ3aXJlXCIgaXMgdXNlZCBmb3IgdGhlIGNvbmZpZ3VyYXRvciwgYnV0IGhhcyBubyBDU1Mgc3R5bGVzIG9mIGl0cyBvd24sIG9ubHkgcGFsZXR0ZSBpcyB1c2VkLlxyXG4gIHRoZW1lOiAnYmxvY2snLFxyXG5cclxuICAvLyBUaGUgcG9wdXAgaXMgYGZpeGVkYCBieSBkZWZhdWx0LCBidXQgaWYgeW91IHdhbnQgaXQgdG8gYmUgc3RhdGljIChpbmxpbmUgd2l0aCB0aGUgcGFnZSBjb250ZW50KSwgc2V0IHRoaXMgdG8gZmFsc2VcclxuICAvLyBOb3RlOiBieSBkZWZhdWx0LCB3ZSBhbmltYXRlIHRoZSBoZWlnaHQgb2YgdGhlIHBvcHVwIGZyb20gMCB0byBmdWxsIHNpemVcclxuICBzdGF0aWM6IGZhbHNlLFxyXG5cclxuICAvLyBpZiB5b3Ugd2FudCBjdXN0b20gY29sb3VycywgcGFzcyB0aGVtIGluIGhlcmUuIHRoaXMgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhpcy5cclxuICAvLyBpZGVhbGx5LCBhbnkgY3VzdG9tIGNvbG91cnMvdGhlbWVzIHNob3VsZCBiZSBjcmVhdGVkIGluIGEgc2VwYXJhdGUgc3R5bGUgc2hlZXQsIGFzIHRoaXMgaXMgbW9yZSBlZmZpY2llbnQuXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHBvcHVwOiB7YmFja2dyb3VuZDogJyMwMDAwMDAnLCB0ZXh0OiAnI2ZmZicsIGxpbms6ICcjZmZmJ30sXHJcbiAgLy8gICAgIGJ1dHRvbjoge2JhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnI2Y4ZTcxYyd9LFxyXG4gIC8vICAgICBoaWdobGlnaHQ6IHtiYWNrZ3JvdW5kOiAnI2Y4ZTcxYycsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnIzAwMDAwMCd9LFxyXG4gIC8vICAgfVxyXG4gIC8vIGBoaWdobGlnaHRgIGlzIG9wdGlvbmFsIGFuZCBleHRlbmRzIGBidXR0b25gLiBpZiBpdCBleGlzdHMsIGl0IHdpbGwgYXBwbHkgdG8gdGhlIGZpcnN0IGJ1dHRvblxyXG4gIC8vIG9ubHkgYmFja2dyb3VuZCBuZWVkcyB0byBiZSBkZWZpbmVkIGZvciBldmVyeSBlbGVtZW50LiBpZiBub3Qgc2V0LCBvdGhlciBjb2xvcnMgY2FuIGJlIGNhbGN1bGF0ZWQgZnJvbSBpdFxyXG4gIHBhbGV0dGU6IG51bGwsXHJcblxyXG4gIC8vIFNvbWUgY291bnRyaWVzIFJFUVVJUkUgdGhhdCBhIHVzZXIgY2FuIGNoYW5nZSB0aGVpciBtaW5kLiBZb3UgY2FuIGNvbmZpZ3VyZSB0aGlzIHlvdXJzZWxmLlxyXG4gIC8vIE1vc3Qgb2YgdGhlIHRpbWUgdGhpcyBzaG91bGQgYmUgZmFsc2UsIGJ1dCB0aGUgYGNvb2tpZWNvbnNlbnQubGVnYWxgIGNhbiBjaGFuZ2UgdGhpcyB0byBgdHJ1ZWAgaWYgaXQgZGV0ZWN0cyB0aGF0IGl0IHNob3VsZFxyXG4gIHJldm9rYWJsZTogZmFsc2UsXHJcblxyXG4gIC8vIGlmIHRydWUsIHRoZSByZXZva2FibGUgYnV0dG9uIHdpbGwgdHJhbmxhdGUgaW4gYW5kIG91dFxyXG4gIGFuaW1hdGVSZXZva2FibGU6IHRydWUsXHJcblxyXG4gIC8vIHVzZWQgdG8gZGlzYWJsZSBsaW5rIG9uIGV4aXN0aW5nIGxheW91dHNcclxuICAvLyByZXBsYWNlcyBlbGVtZW50IG1lc3NhZ2VsaW5rIHdpdGggbWVzc2FnZSBhbmQgcmVtb3ZlcyBjb250ZW50IG9mIGxpbmtcclxuICBzaG93TGluazogdHJ1ZSxcclxuXHJcbiAgLy8gc2V0IHZhbHVlIGFzIHNjcm9sbCByYW5nZSB0byBlbmFibGVcclxuICBkaXNtaXNzT25TY3JvbGw6IGZhbHNlLFxyXG5cclxuICAvLyBzZXQgdmFsdWUgYXMgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gYXV0b2Rpc21pc3MgYWZ0ZXIgc2V0IHRpbWVcclxuICBkaXNtaXNzT25UaW1lb3V0OiBmYWxzZSxcclxuXHJcbiAgLy8gc2V0IHZhbHVlIGFzIGNsaWNrIGFueXRoaW5nIG9uIHRoZSBwYWdlLCBleGNsdWRpbmcgdGhlIGBpZ25vcmVDbGlja3NGcm9tYCBiZWxvdyAoaWYgd2UgY2xpY2sgb24gdGhlIHJldm9rZSBidXR0b24gZXRjKVxyXG4gIGRpc21pc3NPbldpbmRvd0NsaWNrOiBmYWxzZSxcclxuXHJcbiAgLy8gc2V0IHZhbHVlIGFzIGNsaWNrIGFueXRoaW5nIG9uIHRoZSBwYWdlLCBleGNsdWRpbmcgdGhlIGBpZ25vcmVDbGlja3NGcm9tYCBiZWxvdyAoaWYgd2UgY2xpY2sgb24gdGhlIHJldm9rZSBidXR0b24gZXRjKVxyXG4gIGRpc21pc3NPbkxpbmtDbGljazogZmFsc2UsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBhcyBrZXlzIGFyZSBwcmVzc2VkLCAoIGFsbG93S2V5Q29kZSA9IDEzLCBkZW55S2V5Q29kZSA9IDI3IClcclxuICBkaXNtaXNzT25LZXlQcmVzczogZmFsc2UsXHJcblxyXG4gIC8vIElmIGBkaXNtaXNzT25XaW5kb3dDbGlja2AgaXMgdHJ1ZSwgd2UgY2FuIGNsaWNrIG9uICdyZXZva2UnIGFuZCB3ZSdsbCBzdGlsbCBkaXNtaXNzIHRoZSBiYW5uZXIsIHNvIHdlIG5lZWQgZXhjZXB0aW9ucy5cclxuICAvLyBzaG91bGQgYmUgYW4gYXJyYXkgb2YgY2xhc3MgbmFtZXMgKG5vdCBDU1Mgc2VsZWN0b3JzKVxyXG4gIGlnbm9yZUNsaWNrc0Zyb206IFsnY2MtcmV2b2tlJywgJ2NjLWJ0bicsICdjYy1saW5rJ10sIC8vIGFscmVhZHkgaW5jbHVkZXMgdGhlIHJldm9rZSBidXR0b24gYW5kIHRoZSBiYW5uZXIgaXRzZWxmXHJcblxyXG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBhdXRvbWF0aWNhbGx5IGRlY2lkZSB3aGV0aGVyIHRoZSBwb3B1cCBzaG91bGQgb3Blbi5cclxuICAvLyBTZXQgdGhpcyB0byBmYWxzZSB0byBwcmV2ZW50IHRoaXMgZnJvbSBoYXBwZW5pbmcgYW5kIHRvIGFsbG93IHlvdSB0byBjb250cm9sIHRoZSBiZWhhdmlvdXIgeW91cnNlbGZcclxuICBhdXRvT3BlbjogdHJ1ZSxcclxuXHJcbiAgLy8gQnkgZGVmYXVsdCB0aGUgY3JlYXRlZCBIVE1MIGlzIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciAod2hpY2ggZGVmYXVsdHMgdG8gPGJvZHk+KS4gWW91IGNhbiBwcmV2ZW50IHRoaXMgYmVoYXZpb3VyXHJcbiAgLy8gYnkgc2V0dGluZyB0aGlzIHRvIGZhbHNlLCBidXQgaWYgeW91IGRvLCB5b3UgbXVzdCBhdHRhY2ggdGhlIGBlbGVtZW50YCB5b3Vyc2VsZiwgd2hpY2ggaXMgYSBwdWJsaWMgcHJvcGVydHkgb2YgdGhlIHBvcHVwIGluc3RhbmNlOlxyXG4gIC8vXHJcbiAgLy8gICAgIGNvbnN0IGluc3RhbmNlID0gY29va2llY29uc2VudC5mYWN0b3J5KG9wdGlvbnMpXHJcbiAgLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UuZWxlbWVudClcclxuICAvL1xyXG4gIGF1dG9BdHRhY2g6IHRydWUsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBpZiBmbG9hdGluZyBsYXlvdXQgc2hvdWxkIGJlIGZvcmNlZCBmb3IgbW9iaWxlIGRldmljZXNcclxuICBtb2JpbGVGb3JjZUZsb2F0OiBmYWxzZSxcclxuXHJcbiAgLy8gc2ltcGxlIHdoaXRlbGlzdC9ibGFja2xpc3QgZm9yIHBhZ2VzLiBzcGVjaWZ5IHBhZ2UgYnk6XHJcbiAgLy8gICAtIHVzaW5nIGEgc3RyaW5nIDogJy9pbmRleC5odG1sJyAgICAgICAgICAgKG1hdGNoZXMgJy9pbmRleC5odG1sJyBleGFjdGx5KSBPUlxyXG4gIC8vICAgLSB1c2luZyBSZWdFeHAgICA6IC9cXC9wYWdlX1tcXGRdK1xcLmh0bWwvICAgIChtYXRjaGVkICcvcGFnZV8xLmh0bWwnIGFuZCAnL3BhZ2VfMi5odG1sJyBldGMpXHJcbiAgd2hpdGVsaXN0UGFnZTogW10sXHJcbiAgYmxhY2tsaXN0UGFnZTogW10sXHJcblxyXG4gIC8vIElmIHRoaXMgaXMgZGVmaW5lZCwgdGhlbiBpdCBpcyB1c2VkIGFzIHRoZSBpbm5lciBodG1sIGluc3RlYWQgb2YgbGF5b3V0LiBUaGlzIGFsbG93cyBmb3IgdWx0aW1hdGUgY3VzdG9taXNhdGlvbi5cclxuICAvLyBCZSBzdXJlIHRvIHVzZSB0aGUgY2xhc3NlcyBgY2MtYnRuYCBhbmQgYGNjLUFMTE9XYCwgYGNjLURFTllgIG9yIGBjYy1ESVNNSVNTYC4gVGhleSBlbmFibGUgdGhlIGFwcCB0byByZWdpc3RlciBjbGlja1xyXG4gIC8vIGhhbmRsZXJzLiBZb3UgY2FuIHVzZSBvdGhlciBwcmUtZXhpc3RpbmcgY2xhc3NlcyB0b28uIFNlZSBgc3JjL3N0eWxlc2AgZm9sZGVyLlxyXG4gIG92ZXJyaWRlSFRNTDogbnVsbFxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTY3JpcHQgPSAoIHVybCwgY2FsbGJhY2ssIHRpbWVvdXQgKSA9PiB7XHJcbiAgbGV0IHRpbWVvdXRJZHhcclxuICBjb25zdCBzY3JpcHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxyXG5cclxuICBzY3JpcHRUYWcudHlwZSA9ICd0ZXh0LycgKyAodXJsLnR5cGUgfHwgJ2phdmFzY3JpcHQnKVxyXG4gIHNjcmlwdFRhZy5zcmMgPSB1cmwuc3JjIHx8IHVybFxyXG4gIHNjcmlwdFRhZy5hc3luYyA9IGZhbHNlXHJcblxyXG4gIHNjcmlwdFRhZy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gdGhpcyBjb2RlIGhhbmRsZXMgdHdvIHNjZW5hcmlvcywgd2hldGhlciBjYWxsZWQgYnkgb25sb2FkIG9yIG9ucmVhZHlzdGF0ZWNoYW5nZVxyXG4gICAgY29uc3Qgc3RhdGUgPSBzY3JpcHRUYWcucmVhZHlTdGF0ZVxyXG5cclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWR4KVxyXG5cclxuICAgIGlmICghY2FsbGJhY2suZG9uZSAmJiAoIXN0YXRlIHx8IC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qoc3RhdGUpKSkge1xyXG4gICAgICBjYWxsYmFjay5kb25lID0gdHJ1ZVxyXG4gICAgICBjYWxsYmFjaygpXHJcbiAgICAgIHNjcmlwdFRhZy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzY3JpcHRUYWcub25sb2FkID0gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRUYWcpXHJcblxyXG4gIC8vIFlvdSBjYW4ndCBjYXRjaCBKU09OUCBFcnJvcnMsIGJlY2F1c2UgaXQncyBoYW5kbGVkIGJ5IHRoZSBzY3JpcHQgdGFnXHJcbiAgLy8gb25lIHdheSBpcyB0byB1c2UgYSB0aW1lb3V0XHJcbiAgdGltZW91dElkeCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBjYWxsYmFjay5kb25lID0gdHJ1ZVxyXG4gICAgY2FsbGJhY2soKVxyXG4gICAgc2NyaXB0VGFnLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHNjcmlwdFRhZy5vbmxvYWQgPSBudWxsXHJcbiAgfSwgdGltZW91dClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VBc3luY1JlcXVlc3QgPSAoIHVybCwgb25Db21wbGV0ZSwgdGltZW91dCwgcG9zdERhdGEsIHJlcXVlc3RIZWFkZXJzICkgPT4ge1xyXG4gIGNvbnN0IHhociA9IG5ldyAod2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IHdpbmRvdy5BY3RpdmVYT2JqZWN0KShcclxuICAgICdNU1hNTDIuWE1MSFRUUC4zLjAnXHJcbiAgKVxyXG5cclxuICB4aHIub3Blbihwb3N0RGF0YSA/ICdQT1NUJyA6ICdHRVQnLCB1cmwsIDEpXHJcblxyXG4gIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KHJlcXVlc3RIZWFkZXJzKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSByZXF1ZXN0SGVhZGVycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgY29uc3Qgc3BsaXQgPSByZXF1ZXN0SGVhZGVyc1tpXS5zcGxpdCgnOicsIDIpXHJcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxyXG4gICAgICAgIHNwbGl0WzBdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSxcclxuICAgICAgICBzcGxpdFsxXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvbkNvbXBsZXRlID09ICdmdW5jdGlvbicpIHtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID4gMykge1xyXG4gICAgICAgIG9uQ29tcGxldGUoeGhyKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB4aHIuc2VuZChwb3N0RGF0YSlcclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gbmFtZSA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSAnICcgKyBkb2N1bWVudC5jb29raWVcclxuICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyArIG5hbWUgKyAnPScpXHJcbiAgcmV0dXJuIHBhcnRzLmxlbmd0aCA8IDJcclxuICAgID8gdW5kZWZpbmVkXHJcbiAgICA6IHBhcnRzXHJcbiAgICAgICAgLnBvcCgpXHJcbiAgICAgICAgLnNwbGl0KCc7JylcclxuICAgICAgICAuc2hpZnQoKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gZnVuY3Rpb24gKCBuYW1lLCB2YWx1ZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUgKSB7XHJcbiAgY29uc3QgZXhkYXRlID0gbmV3IERhdGUoKVxyXG4gIGV4ZGF0ZS5zZXRIb3VycyhleGRhdGUuZ2V0SG91cnMoKSArICgodHlwZW9mIGV4cGlyeURheXMgIT09IFwibnVtYmVyXCIgID8gMzY1IDogZXhwaXJ5RGF5cyApICogMjQpKVxyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJztleHBpcmVzPScgKyBleGRhdGUudG9VVENTdHJpbmcoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgJztwYXRoPScgKyAocGF0aCB8fCAnLycpICtcclxuICAgICAgICAgICAgICAgICAgICAoIGRvbWFpbiA/ICc7ZG9tYWluPScgKyBkb21haW4gOiAnJyApICtcclxuICAgICAgICAgICAgICAgICAgICAoIHNlY3VyZSA/ICc7c2VjdXJlJyA6ICcnICkgK1xyXG4gICAgICAgICAgICAgICAgICAgICc7U2FtZVNpdGU9U3RyaWN0JztcclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgeyBnZXRDb250cmFzdCwgZ2V0SG92ZXJDb2xvciB9IGZyb20gJy4vc3R5bGUnXHJcblxyXG5leHBvcnQgY29uc3QgdHJhdmVyc2VET01QYXRoID0gKCBlbGVtLCBjbGFzc05hbWUgKSA9PlxyXG4gICFlbGVtIHx8ICFlbGVtLnBhcmVudE5vZGVcclxuICA/IG51bGwgOiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXHJcbiAgPyBlbGVtIDogdHJhdmVyc2VET01QYXRoKGVsZW0ucGFyZW50Tm9kZSwgY2xhc3NOYW1lKVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZEN1c3RvbVN0eWxlc2hlZXQgPSAoaWQsIHBhbGV0dGUsIHByZWZpeCkgPT4ge1xyXG4gIGNvbnN0IGNvbG9yU3R5bGVzID0ge31cclxuICBjb25zdCB7IHBvcHVwLCBidXR0b24sIGhpZ2hsaWdodCwgc2F2ZUJ1dHRvbiB9ID0gcGFsZXR0ZVxyXG5cclxuICAvLyBuZWVkcyBiYWNrZ3JvdW5kIGNvbG91ciwgdGV4dCBhbmQgbGluayB3aWxsIGJlIHNldCB0byBibGFjay93aGl0ZSBpZiBub3Qgc3BlY2lmaWVkXHJcbiAgaWYgKHBvcHVwKSB7XHJcbiAgICAgIC8vIGFzc3VtZXMgcG9wdXAuYmFja2dyb3VuZCBpcyBzZXRcclxuICAgICAgcG9wdXAudGV4dCA9IHBvcHVwLnRleHQgPyBwb3B1cC50ZXh0IDogZ2V0Q29udHJhc3QocG9wdXAuYmFja2dyb3VuZClcclxuICAgICAgcG9wdXAubGluayA9IHBvcHVwLmxpbmsgPyBwb3B1cC5saW5rIDogcG9wdXAudGV4dFxyXG4gICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy10b29sdGlwLCAnICsgcHJlZml4ICsgJyAuY2MtdG9vbHRpcDphZnRlciddID0gW1xyXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZCxcclxuICAgICAgXVxyXG4gICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXdpbmRvdyddID0gW1xyXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZCxcclxuICAgICAgXVxyXG4gICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXJldm9rZSddID0gW1xyXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZCxcclxuICAgICAgXVxyXG4gICAgICBjb2xvclN0eWxlc1tcclxuICAgICAgICAgIHByZWZpeCArICcgLmNjLWxpbmssJyArIHByZWZpeCArICcgLmNjLWxpbms6YWN0aXZlLCcgKyBwcmVmaXggKyAnIC5jYy1saW5rOnZpc2l0ZWQnXHJcbiAgICAgIF0gPSBbJ2NvbG9yOiAnICsgcG9wdXAubGlua11cclxuXHJcbiAgICAgIGlmIChidXR0b24pIHtcclxuICAgICAgICAgIC8vIGFzc3VtZXMgYnV0dG9uLmJhY2tncm91bmQgaXMgc2V0XHJcbiAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvbi50ZXh0ID8gYnV0dG9uLnRleHQgOiBnZXRDb250cmFzdChidXR0b24uYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICBidXR0b24uYm9yZGVyID0gYnV0dG9uLmJvcmRlciA/IGJ1dHRvbi5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10gPSBbXHJcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgYnV0dG9uLnRleHQsXHJcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGJ1dHRvbi5ib3JkZXIsXHJcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBidXR0b24uYmFja2dyb3VuZCxcclxuICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICBpZiAoYnV0dG9uLnBhZGRpbmcpIHtcclxuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXS5wdXNoKCdwYWRkaW5nOiAnICsgYnV0dG9uLnBhZGRpbmcpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChidXR0b24uYmFja2dyb3VuZCAhPSAndHJhbnNwYXJlbnQnKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuOmhvdmVyLCAnICsgcHJlZml4ICsgJyAuY2MtYnRuOmZvY3VzJ10gPSBbXHJcbiAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgKGJ1dHRvbi5ob3ZlciB8fCBnZXRIb3ZlckNvbG9yKGJ1dHRvbi5iYWNrZ3JvdW5kKSksXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChoaWdobGlnaHQpIHtcclxuICAgICAgICAgICAgICAvL2Fzc3VtZXMgaGlnaGxpZ2h0LmJhY2tncm91bmQgaXMgc2V0XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0LnRleHQgPSBoaWdobGlnaHQudGV4dFxyXG4gICAgICAgICAgICAgICAgICA/IGhpZ2hsaWdodC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgIDogZ2V0Q29udHJhc3QoaGlnaGxpZ2h0LmJhY2tncm91bmQpO1xyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodC5ib3JkZXIgPSBoaWdobGlnaHQuYm9yZGVyID8gaGlnaGxpZ2h0LmJvcmRlciA6ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQnXSA9IFtcclxuICAgICAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgaGlnaGxpZ2h0LnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBoaWdobGlnaHQuYm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGhpZ2hsaWdodC5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gc2V0cyBoaWdobGlnaHQgdGV4dCBjb2xvciB0byBwb3B1cCB0ZXh0LiBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgYXJlIHRyYW5zcGFyZW50IGJ5IGRlZmF1bHQuXHJcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQnXSA9IFtcclxuICAgICAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzYXZlQnV0dG9uKSB7XHJcbiAgICAgICAgICBjb2xvclN0eWxlc1tgJHtwcmVmaXh9IC5jYy1idG4uY2Mtc2F2ZWBdID0gW1xyXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIHNhdmVCdXR0b24udGV4dCxcclxuICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgc2F2ZUJ1dHRvbi5ib3JkZXIsXHJcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBzYXZlQnV0dG9uLmJhY2tncm91bmQsXHJcbiAgICAgICAgICBdXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRoaXMgd2lsbCBiZSBpbnRlcnByZXR0ZWQgYXMgQ1NTLiB0aGUga2V5IGlzIHRoZSBzZWxlY3RvciwgYW5kIGVhY2ggYXJyYXkgZWxlbWVudCBpcyBhIHJ1bGVcclxuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcclxuICBzdHlsZS5pZCA9IGlkXHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc3R5bGUgKVxyXG4gIE9iamVjdC5lbnRyaWVzKCBjb2xvclN0eWxlcyApLmZvckVhY2goICggWyBwcm9wLCB2YWx1ZSBdLCBpbmRleCApID0+XHJcbiAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKCBgJHtwcm9wfXske3ZhbHVlLmpvaW4oJzsnKX19YCwgaW5kZXggKVxyXG4gIClcclxuICByZXR1cm4gc3R5bGVcclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgKiBhcyBjb29raWUgZnJvbSBcIi4vY29va2llXCJcclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IGNvb2tpZS5nZXRDb29raWVcclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IGNvb2tpZS5zZXRDb29raWVcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGVTdHJpbmcgPSAoIHN0ciwgY2FsbGJhY2sgKSA9PlxyXG4gIHN0ci5yZXBsYWNlKCAve3soW2Etel1bYS16MC05XFwtX10qKX19L2dpICwgKCBtYXRjaGVzLCByZXBsYWNlZCApID0+IGNhbGxiYWNrKCByZXBsYWNlZCApIHx8ICcnKVxyXG5cclxuLy8gb25seSB1c2VkIGZvciB0aHJvdHRsaW5nIHRoZSAnbW91c2Vtb3ZlJyBldmVudCAodXNlZCBmb3IgYW5pbWF0aW5nIHRoZSByZXZva2UgYnV0dG9uIHdoZW4gYGFuaW1hdGVSZXZva2FibGVgIGlzIHRydWUpXHJcbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChjYWxsYmFjaywgbGltaXQpID0+IHtcclxuICBsZXQgd2FpdCA9IGZhbHNlXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF3YWl0KSB7XHJcbiAgICAgIGNhbGxiYWNrKC4uLmFyZ3VtZW50cylcclxuICAgICAgd2FpdCA9IHRydWVcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICB3YWl0ID0gZmFsc2VcclxuICAgICAgfSwgbGltaXQpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBvbmx5IHVzZWQgZm9yIGhhc2hpbmcganNvbiBvYmplY3RzICh1c2VkIGZvciBoYXNoIG1hcHBpbmcgcGFsZXR0ZSBvYmplY3RzLCB1c2VkIHdoZW4gY3VzdG9tIGNvbG91cnMgYXJlIHBhc3NlZCB0aHJvdWdoIEphdmFTY3JpcHQpXHJcbmV4cG9ydCBjb25zdCBoYXNoID0gc3RyID0+IHtcclxuICBsZXQgaGFzaE51bSA9IDAsXHJcbiAgICBpID0gMCxcclxuICAgIGNocixcclxuICAgIGxlbiA9IHN0ci5sZW5ndGhcclxuICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2hOdW1cclxuICBmb3IgKCBpOyBpIDwgbGVuOyArK2kgKSB7XHJcbiAgICBjaHIgPSBzdHIuY2hhckNvZGVBdCggaSApXHJcbiAgICBoYXNoTnVtID0gKCBoYXNoTnVtIDw8IDUgKSAtIGhhc2hOdW0gKyBjaHJcclxuICAgIGhhc2hOdW0gfD0gMFxyXG4gIH1cclxuICByZXR1cm4gaGFzaE51bVxyXG59XHJcbmltcG9ydCAqIGFzIHN0eWxlIGZyb20gXCIuL3N0eWxlXCJcclxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhleCA9IHN0eWxlLm5vcm1hbGl6ZUhleFxyXG5leHBvcnQgY29uc3QgZ2V0Q29udHJhc3QgPSBzdHlsZS5nZXRDb250cmFzdFxyXG5leHBvcnQgY29uc3QgZ2V0THVtaW5hbmNlID0gc3R5bGUuZ2V0THVtaW5hbmNlXHJcbmV4cG9ydCBjb25zdCBnZXRIb3ZlckNvbG9yID1zdHlsZS5nZXRIb3ZlckNvbG9yXHJcblxyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vZG9tXCJcclxuZXhwb3J0IGNvbnN0IHRyYXZlcnNlRE9NUGF0aCA9IGRvbS50cmF2ZXJzZURPTVBhdGhcclxuZXhwb3J0IGNvbnN0IGFkZEN1c3RvbVN0eWxlc2hlZXQgPSBkb20uYWRkQ3VzdG9tU3R5bGVzaGVldFxyXG5cclxuaW1wb3J0ICogYXMgdmFsaWRhdGlvbiBmcm9tIFwiLi92YWxpZGF0aW9uXCJcclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRTdGF0dXMgPSB2YWxpZGF0aW9uLmlzVmFsaWRTdGF0dXNcclxuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSB2YWxpZGF0aW9uLmlzUGxhaW5PYmplY3RcclxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlID0gdmFsaWRhdGlvbi5pc01vYmlsZVxyXG5cclxuaW1wb3J0ICogYXMgYXN5bmNGbnMgZnJvbSBcIi4vYXN5bmNcIlxyXG5leHBvcnQgY29uc3QgZ2V0U2NyaXB0ID0gYXN5bmNGbnMuZ2V0U2NyaXB0XHJcbmV4cG9ydCBjb25zdCBtYWtlQXN5bmNSZXF1ZXN0ID0gYXN5bmNGbnMubWFrZUFzeW5jUmVxdWVzdFxyXG5cclxuY29uc3QgbG9vcFByb3BlcnRpZXMgPSBvdmVyd3JpdGVzID0+IChvYmosIFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gIGlmICggdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSApIHtcclxuICAgIGlmICggb3ZlcndyaXRlc1sga2V5IF0gaW5zdGFuY2VvZiBPYmplY3QgJiYgIShvdmVyd3JpdGVzWyBrZXkgXSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICBvYmpbIGtleSBdID0gT2JqZWN0LmVudHJpZXModmFsdWUpLnJlZHVjZShsb29wUHJvcGVydGllcyhvdmVyd3JpdGVzW2tleV0pLCB7fSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9ialsga2V5IF0gPSB2YWx1ZVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIG92ZXJ3cml0ZXMuaGFzT3duUHJvcGVydHkoIGtleSApICkge1xyXG4gICAgICBvYmpbIGtleSBdID0gb3ZlcndyaXRlc1sga2V5IF1cclxuICAgIH1lbHNlIHtcclxuICAgICAgb2JqWyBrZXkgXSA9IHZhbHVlIFxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gb2JqXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXJnZU9wdGlvbnMgPSAoIGRlZmF1bHRzLCBvdmVyd3JpdGVzICkgPT5cclxuICBPYmplY3QuZW50cmllcyhkZWZhdWx0cykucmVkdWNlKGxvb3BQcm9wZXJ0aWVzKG92ZXJ3cml0ZXMpLCB7fSlcclxuIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCBub3JtYWxpemVIZXggPSBoZXggPT5cclxuICBoZXhbMF0gPT0gJyMnXHJcbiAgICA/IGhleC5zdWJzdHIoMSkgOiBoZXgubGVuZ3RoID09IDNcclxuICAgID8gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdIDogaGV4XHJcblxyXG4vLyB1c2VkIHRvIGdldCB0ZXh0IGNvbG9ycyBpZiBub3Qgc2V0XHJcbmV4cG9ydCBjb25zdCBnZXRDb250cmFzdCA9IGhleCA9PiB7XHJcbiAgaGV4ID0gbm9ybWFsaXplSGV4KGhleClcclxuICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cigwLCAyKSwgMTYpXHJcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zdWJzdHIoMiwgMiksIDE2KVxyXG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDQsIDIpLCAxNilcclxuICBjb25zdCB5aXEgPSAociAqIDI5OSArIGcgKiA1ODcgKyBiICogMTE0KSAvIDEwMDBcclxuICByZXR1cm4geWlxID49IDEyOCA/ICcjMDAwJyA6ICcjZmZmJ1xyXG59XHJcblxyXG4vLyB1c2VkIHRvIGNoYW5nZSBjb2xvciBvbiBoaWdobGlnaHRcclxuZXhwb3J0IGNvbnN0IGdldEx1bWluYW5jZSA9IGhleCA9PiB7XHJcbiAgY29uc3QgbnVtID0gcGFyc2VJbnQobm9ybWFsaXplSGV4KGhleCksIDE2KSxcclxuICAgIGFtdCA9IDM4LFxyXG4gICAgUiA9IChudW0gPj4gMTYpICsgYW10LFxyXG4gICAgQiA9ICgobnVtID4+IDgpICYgMHgwMGZmKSArIGFtdCxcclxuICAgIEcgPSAobnVtICYgMHgwMDAwZmYpICsgYW10XHJcbiAgICByZXR1cm4gJyMnICsgKFxyXG4gICAgMHgxMDAwMDAwICtcclxuICAgIChSIDwgMjU1ID8gKFIgPCAxID8gMCA6IFIpIDogMjU1KSAqIDB4MTAwMDAgK1xyXG4gICAgKEIgPCAyNTUgPyAoQiA8IDEgPyAwIDogQikgOiAyNTUpICogMHgxMDAgK1xyXG4gICAgKEcgPCAyNTUgPyAoRyA8IDEgPyAwIDogRykgOiAyNTUpXHJcbiAgKVxyXG4gICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgLnNsaWNlKDEpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEhvdmVyQ29sb3IgPSBoZXggPT4ge1xyXG4gIGhleCA9IG5vcm1hbGl6ZUhleCggaGV4IClcclxuICAvLyBmb3IgYmxhY2sgYnV0dG9uc1xyXG4gIHJldHVybiBoZXggPT09ICcwMDAwMDAnID8gJyMyMjInIDogZ2V0THVtaW5hbmNlKCBoZXggKVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCB7IHN0YXR1c2VzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGEgc3RhdHVzIGlzIGluIHRoZSBjb25zdGFudHMgbGlzdFxyXG4gKiBAcGFyYW0geyBzdHJpbmcgfSBzdGF0dXMgLSBTdGF0dXMgU3RyaW5nIHRvXHJcbiAqIEByZXR1cm4geyBib29sZWFuIH0gLSBpZiBzdGF0dXMgaXMgdmFsaWRcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1ZhbGlkU3RhdHVzID0gc3RhdHVzID0+IHN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA+PSAwXHJcblxyXG5leHBvcnQgY29uc3QgaXNNb2JpbGUgPSAoKSA9PlxyXG4gIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApXHJcblxyXG4vLyBUaGUgY29kZSBcInR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbFwiIGFsbG93cyBBcnJheSBvYmplY3RzXHJcbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gb2JqID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=