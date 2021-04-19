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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Nvb2tpZUNvbnNlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9MZWdhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvbGVnYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/M2Q0MiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsic3RhdHVzZXMiLCJzdGF0dXNEZW55Iiwic3RhdHVzQWxsb3ciLCJzdGF0dXNEaXNtaXNzIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJleHBsYWluVGV4dCIsImV4cG9ydHMiLCJtb2R1bGUiLCJDb29raWVDb25zZW50Iiwid2luZG93IiwiZW1pdHRlciIsIkV2ZW50RW1pdHRlciIsIkJhc2UiLCJkZWZhdWx0T3B0aW9ucyIsIm9wdGlvbnMiLCJtZXJnZU9wdGlvbnMiLCJvbiIsImJpbmQiLCJlbWl0IiwiYW5zd2VycyIsIm1hcCIsImNhdGVnb3J5IiwiY29va2llTmFtZSIsImNvb2tpZSIsImFuc3dlciIsImdldENvb2tpZSIsImlzVmFsaWRTdGF0dXMiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaW5pdGlhbGl6YXRpb25Db21wbGV0ZSIsImxlZ2FsIiwiY291bnRyeUNvZGUiLCJjb2RlIiwibG9jYXRpb24iLCJMb2NhdGlvbiIsImxvY2F0ZSIsImluaXRpYWxpemF0aW9uRXJyb3IiLCJyZXN1bHQiLCJMZWdhbCIsImFwcGx5TGF3IiwiaW5pdGlhbERhdGEiLCJyZWR1Y2UiLCJ2YWwiLCJwb3B1cCIsIlBvcHVwIiwic2V0VGltZW91dCIsImVycm9yIiwiZ2V0IiwiaXNPcGVuIiwiY2xvc2UiLCJyZXZva2VDaG9pY2UiLCJvcGVuIiwiYm9vbCIsInRvZ2dsZVJldm9rZUJ1dHRvbiIsInN0YXR1cyIsInNldFN0YXR1c2VzIiwiY2xlYXJTdGF0dXNlcyIsImRlc3Ryb3kiLCJkZWZpbmVQcm9wZXJ0eSIsInNldCIsImVudW1lcmFibGUiLCJ3cml0ZWFibGUiLCJjb25maWd1cmFibGUiLCJoYXNMYXciLCJpbmRleE9mIiwicmV2b2thYmxlIiwiZXhwbGljaXRBY3Rpb24iLCJjb3VudHJ5IiwiZW5hYmxlZCIsInJlZ2lvbmFsTGF3IiwiZGlzbWlzc09uU2Nyb2xsIiwiZGlzbWlzc09uVGltZW91dCIsImN1cnJlbnRTZXJ2aWNlSW5kZXgiLCJzZXJ2aWNlIiwiZ2V0U2VydmljZUJ5SWR4Iiwic2VydmljZXMiLCJpZHgiLCJzZXJ2aWNlT3B0aW9uIiwiZHluYW1pY09wdHMiLCJhc3NpZ24iLCJzZXJ2aWNlRGVmaW5pdGlvbnMiLCJpc1BsYWluT2JqZWN0IiwiY29tcGxldGUiLCJnZXROZXh0U2VydmljZSIsIkVycm9yIiwiY2FsbGJhY2tDb21wbGV0ZSIsImNhbGxiYWNrRXJyb3IiLCJydW5TZXJ2aWNlIiwicnVuTmV4dFNlcnZpY2VPbkVycm9yIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJ1cmwiLCJyZXBsYWNlIiwiXyIsInBhcmFtIiwidGVtcE5hbWUiLCJEYXRlIiwibm93IiwicmVzIiwiX19KU09OUF9EQVRBIiwiSlNPTiIsInN0cmluZ2lmeSIsImludGVycG9sYXRlVXJsIiwiY2FsbGJhY2siLCJyZXF1ZXN0RnVuY3Rpb24iLCJpc1NjcmlwdCIsImdldFNjcmlwdCIsIm1ha2VBc3luY1JlcXVlc3QiLCJzZXR1cFVybCIsInhociIsInJlc3BvbnNlVGV4dCIsInJ1blNlcnZpY2VDYWxsYmFjayIsImNhbGwiLCJ0aW1lb3V0IiwiZGF0YSIsImhlYWRlcnMiLCJzZXJ2aWNlUmVzdWx0SGFuZGxlciIsImFzeW5jUmVzdWx0Iiwib25TZXJ2aWNlUmVzdWx0IiwiZXJyIiwibG9nRXJyb3IiLCJuZXh0U2VydmljZSIsImNvbXBsZXRlU2VydmljZSIsImZuIiwiY29uc29sZSIsIndhcm4iLCJpbml0aWFsVmFsdWVzIiwidXNlckNhdGVnb3JpZXMiLCJFU1NFTlRJRUwiLCJTVEFUSVNUSVFVRVMiLCJjdXN0b21TdHlsZXMiLCJ0cmFuc2l0aW9uRW5kIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFucyIsInQiLCJPVCIsIm1zVCIsIk1velQiLCJXZWJraXRUIiwicHJlZml4IiwiaGFzT3duUHJvcGVydHkiLCJzdHlsZSIsImhhc1RyYW5zaXRpb24iLCJjYW5Vc2VDb29raWVzIiwiYmxhY2tsaXN0UGFnZSIsImluY2x1ZGVzIiwicGF0aG5hbWUiLCJ3aGl0ZWxpc3RQYWdlIiwiY29va2llUG9wdXAiLCJnZXRQb3B1cENsYXNzZXMiLCJqb2luIiwiZ2V0UG9wdXBJbm5lck1hcmt1cCIsImN1c3RvbUhUTUwiLCJvdmVycmlkZUhUTUwiLCJzdGF0aWMiLCJ3cmFwcGVyIiwiYXBwZW5kTWFya3VwIiwiZGlzcGxheSIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwbHlBdXRvRGlzbWlzcyIsImFwcGx5UmV2b2tlQnV0dG9uIiwiYXV0b09wZW4iLCJmYWRlSW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNoZWNrYm94IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Iiwic2hvd1Jldm9rZSIsImZhZGVPdXQiLCJhZnRlclRyYW5zaXRpb24iLCJhZnRlckZhZGVPdXQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJtYXhIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJmYWRlSW5UaW1lb3V0Iiwib3BlbmluZ1RpbWVvdXQiLCJhZnRlckZhZGVJbiIsInJlbW92ZSIsImNsZWFyVGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvdyIsInJldm9rZUJ0biIsInByZXZlbnRPcGVuIiwiZ2V0U3RhdHVzZXMiLCJzb21lIiwiaGFzQW5zd2VyZWQiLCJleHBpcnlEYXlzIiwiZG9tYWluIiwicGF0aCIsInNlY3VyZSIsInVwZGF0ZUNhdGVnb3J5U3RhdHVzIiwiY2F0ZWdvcnlOYW1lIiwicHJldmlvdXNTdGF0dXMiLCJzZXRDb29raWUiLCJhcmd1bWVudHMiLCJjYXRlZ29yeVN0YXR1cyIsImluZGV4IiwibmF2aWdhdG9yIiwiY29va2llRW5hYmxlZCIsIkNvb2tpZXNPSyIsInN0YXR1c2VzVmFsdWVzIiwibWF0Y2hlcyIsImhhc01hdGNoZXMiLCJtYXRjaCIsInBvc2l0aW9uIiwic3BsaXQiLCJwb3MiLCJvcHRzIiwicG9zaXRpb25TdHlsZSIsImlzTW9iaWxlIiwibW9iaWxlRm9yY2VGbG9hdCIsImNsYXNzZXMiLCJ0eXBlIiwidGhlbWUiLCJwdXNoIiwiYXBwbHkiLCJnZXRQb3NpdGlvbkNsYXNzZXMiLCJhdHRhY2hDdXN0b21QYWxldHRlIiwicGFsZXR0ZSIsImN1c3RvbVN0eWxlU2VsZWN0b3IiLCJpbnRlcnBvbGF0ZWQiLCJzaG93TGluayIsImVsZW1lbnRzIiwibGluayIsIm1lc3NhZ2VsaW5rIiwibWVzc2FnZSIsInByb3AiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNvbnRlbnQiLCJjb21wbGlhbmNlVHlwZSIsImNvbXBsaWFuY2UiLCJpbmZvIiwibGF5b3V0IiwibGF5b3V0cyIsImJhc2ljIiwibWFya3VwIiwiZGl2IiwiY29udCIsImNvbnRhaW5lciIsIm5vZGVUeXBlIiwiYm9keSIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiZXZlbnQiLCJoYW5kbGVCdXR0b25DbGljayIsImNoZWNrZWQiLCJkaXNhYmxlZCIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dJbmZvIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImF1dG9BdHRhY2giLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImJ0biIsInRyYXZlcnNlRE9NUGF0aCIsInRhcmdldCIsImNsYXNzTmFtZSIsIlJlZ0V4cCIsImhhc2hTdHIiLCJoYXNoIiwic2VsZWN0b3IiLCJpc1ZhbGlkIiwiYWRkQ3VzdG9tU3R5bGVzaGVldCIsImNvbXBvc2VkUGF0aCIsImFyciIsImRlbGF5Iiwic2Nyb2xsUmFuZ2UiLCJkaXNtaXNzT25MaW5rQ2xpY2siLCJkaXNtaXNzT25XaW5kb3dDbGljayIsImRpc21pc3NPbktleVByZXNzIiwiZGlzbWlzc1RpbWVvdXQiLCJNYXRoIiwiZmxvb3IiLCJvbldpbmRvd1Njcm9sbCIsInBhZ2VZT2Zmc2V0IiwicGFzc2l2ZSIsIm9uV2luZG93Q2xpY2siLCJldnQiLCJnZXRFdmVudFBhdGgiLCJpZ25vcmVDbGlja3NGcm9tIiwiaWdub3JlZENsaWNrIiwib25MaW5rQ2xpY2siLCJlbGVtIiwidGFnTmFtZSIsIm9uS2V5UHJlc3MiLCJrZXlDb2RlIiwiYW5pbWF0ZVJldm9rYWJsZSIsImxvZyIsInBvbGljeSIsIm9uTW91c2VNb3ZlIiwidGhyb3R0bGUiLCJhY3RpdmUiLCJtaW5ZIiwibWF4WSIsImlubmVySGVpZ2h0IiwiY2xpZW50WSIsInRvRXJyb3IiLCJpcGluZm8iLCJkb25lIiwicmVzcG9uc2UiLCJqc29uIiwicGFyc2UiLCJpcGluZm9kYiIsInN0YXR1c0NvZGUiLCJzdGF0dXNNZXNzYWdlIiwibWF4bWluZCIsImdlb2lwMiIsImlzb19jb2RlIiwicHJvdG9jb2wiLCJoZWFkZXIiLCJkaXNtaXNzIiwiYWxsb3ciLCJkZW55IiwiaHJlZiIsInNhdmUiLCJtb2RhbCIsInRpbWVvdXRJZHgiLCJzY3JpcHRUYWciLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInMiLCJvbmxvYWQiLCJzdGF0ZSIsInJlYWR5U3RhdGUiLCJ0ZXN0Iiwib25Db21wbGV0ZSIsInBvc3REYXRhIiwicmVxdWVzdEhlYWRlcnMiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImwiLCJzZW5kIiwidmFsdWUiLCJwYXJ0cyIsInBvcCIsInNoaWZ0IiwiZXhkYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwiaWQiLCJjb2xvclN0eWxlcyIsImJ1dHRvbiIsImhpZ2hsaWdodCIsInNhdmVCdXR0b24iLCJ0ZXh0IiwiZ2V0Q29udHJhc3QiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwicGFkZGluZyIsImhvdmVyIiwiZ2V0SG92ZXJDb2xvciIsImhlYWQiLCJlbnRyaWVzIiwic2hlZXQiLCJpbnNlcnRSdWxlIiwicmVwbGFjZWQiLCJsaW1pdCIsIndhaXQiLCJoYXNoTnVtIiwiY2hyIiwibGVuIiwiY2hhckNvZGVBdCIsIm5vcm1hbGl6ZUhleCIsImdldEx1bWluYW5jZSIsImRvbSIsInZhbGlkYXRpb24iLCJhc3luY0ZucyIsImxvb3BQcm9wZXJ0aWVzIiwib3ZlcndyaXRlcyIsImtleSIsImRlZmF1bHRzIiwiaGV4Iiwic3Vic3RyIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJ5aXEiLCJudW0iLCJhbXQiLCJSIiwiQiIsIkciLCJ0b1N0cmluZyIsInNsaWNlIiwidXNlckFnZW50IiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztR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QSxRQUFXO0FBQUEsU0FDdEIsaUVBQWlFdUgsSUFBakUsQ0FBdUVuSSxTQUFTLENBQUNxTSxTQUFqRixDQURzQjtBQUFBLENBQWpCLEMsQ0FHUDs7QUFDTyxJQUFNalUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBeEQsR0FBRztBQUFBLFNBQUkscUVBQU9BLEdBQVAsTUFBZSxRQUFmLElBQTJCQSxHQUFHLEtBQUssSUFBbkMsSUFBMkNBLEdBQUcsQ0FBQzBYLFdBQUosSUFBbUJ6WCxNQUFsRTtBQUFBLENBQXpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2Mtd2luZG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTsgfVxcblxcbi5jYy13aW5kb3cuY2MtaW52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4vKiBvbmx5IGFuaW1hdGUgaWZoYXMgY2xhc3MgJ2NjLWFuaW1hdGUnICovXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWdyb3dlciB7XFxuICAvKiBJbml0aWFsbHkgd2UgZG9uJ3Qgd2FudCBhbnkgaGVpZ2h0LCBhbmQgd2Ugd2FudCB0aGUgY29udGVudHMgdG8gYmUgaGlkZGVuICovXFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIFNldCBvdXIgdHJhbnNpdGlvbnMgdXAuICovXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbXMtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzOyB9XFxuXFxuLyogdGhlIHBvcHVwIHdpbmRvdyAqL1xcbi5jYy13aW5kb3csXFxuLmNjLXJldm9rZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGV4Y2x1ZGUgcGFkZGluZyB3aGVuIGRlYWxpbmcgd2l0aCB3aWR0aCAqL1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQ2FsaWJyaSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAvKiBieSBzZXR0aW5nIHRoZSBiYXNlIGZvbnQgaGVyZSwgd2UgY2FuIHNpemUgdGhlIHJlc3Qgb2YgdGhlIHBvcHVwIHVzaW5nIENTUyBgZW1gICovXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvKiB0aGUgZm9sbG93aW5nIGFyZSByYW5kb20gdW5qdXN0aWZpZWQgc3R5bGVzIC0ganVzdCBiZWNhdXNlIC0gc2hvdWxkIHByb2JhYmx5IGJlIHJlbW92ZWQgKi9cXG4gIHotaW5kZXg6IDk5OTg7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHotaW5kZXg6IDk5OTk7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljOyB9XFxuXFxuLyogMiBiYXNpYyB0eXBlcyBvZiB3aW5kb3cgLSBmbG9hdGluZyAvIGJhbm5lciAqL1xcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWF4LXdpZHRoOiAyNGVtO1xcbiAgLyogMWVtID09IDE2cHggdGhlcmVmb3JlIDI0ZW0gPT0gMzg0cHggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4vKiBjbGlja2FibGUgdGhpbmdzICovXFxuLmNjLWJ0bixcXG4uY2MtbGluayxcXG4uY2MtY2xvc2UsXFxuLmNjLXJldm9rZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2MtbGluayB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWxpbms6aG92ZXIge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jYy1saW5rOmFjdGl2ZSxcXG4uY2MtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbml0aWFsOyB9XFxuXFxuLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpob3ZlcixcXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1jbG9zZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41ZW07XFxuICByaWdodDogMC41ZW07XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgLyogc2VlaW5nIGFzIHRoaXMgY29udGFpbnMgdGV4dCBhbmQgbm90IGFuIGltYWdlLCB0aGUgZWxlbWVudCB0YWxsZXIgdGhhbiBpdCBpcyB3aWRlIChiZWNhdXNlIGl0IGlzIHRleHQpICovXFxuICAvKiAgLSB3ZSB3YW50IGl0IHRvIGJlIGEgc3F1YXJlLCBiZWNhdXNlIGl0J3MgYWN0aW5nIGFzIGFuIGljb24gKi9cXG4gIC8qICAtIHNldHRpbmcgdGhlIGxpbmUgaGVpZ2h0IG5vcm1hbGl6ZXMgdGhlIGhlaWdodCAqL1xcbiAgbGluZS1oZWlnaHQ6IDAuNzU7IH1cXG5cXG4uY2MtY2xvc2U6aG92ZXIsXFxuLmNjLWNsb3NlOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4vKiBUaGlzIGZpbGUgc2hvdWxkIGNvbnRhaW4gc3R5bGVzIHRoYXQgbW9kaWZpZXMgdGhlIHBvcHVwIGxheW91dC4gKi9cXG4vKiBCeSBsYXlvdXQsIHdlIG1lYW4gdGhlIHBoeXNpY2FsIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgcG9wdXAgd2luZG93LCBhbmQgdGhlIG1hcmdpbiAvIHBhZGRpbmcgYXJvdW5kIHRob3NlIGVsZW1lbnRzLiAqL1xcbi5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWxlZnQge1xcbiAgbGVmdDogM2VtO1xcbiAgcmlnaHQ6IHVuc2V0OyB9XFxuXFxuLmNjLXJldm9rZS5jYy1yaWdodCB7XFxuICByaWdodDogM2VtO1xcbiAgbGVmdDogdW5zZXQ7IH1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxNnB4OyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRkxPQVRJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB0aGVzZSBjbGFzc2VzIHBvc2l0aW9uIHRoZSBmbG9hdGluZyBlbGVtZW50ICovXFxuLmNjLXRvcCB7XFxuICB0b3A6IDFlbTsgfVxcblxcbi5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDFlbTsgfVxcblxcbi5jYy1yaWdodCB7XFxuICByaWdodDogMWVtOyB9XFxuXFxuLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDFlbTsgfVxcblxcbi8qIGxpbmtzIHRoYXQgYXJlIGRpcmVjdCBkZWNlbmRhbnRzIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYmxvY2sgKi9cXG4uY2MtZmxvYXRpbmcgPiAuY2MtbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlIHtcXG4gIGZsZXg6IDEgMCBhdXRvOyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQkFOTkVSICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdG9wIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5jYy1iYW5uZXIuY2MtYm90dG9tIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDsgfVxcblxcbi5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMWVtOyB9XFxuXFxuLyogQ09NUExJQU5DRSBCT1ggKi9cXG4uY2MtY29tcGxpYW5jZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSA+IC5jYy1idG4ge1xcbiAgZmxleDogMTsgfVxcblxcbi5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcblxcbi8qIENhdGVnb3JpZXMgTGF5b3V0ICovXFxuLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTBweDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmNjLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgaGVpZ2h0OiAxOHB4O1xcbiAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biBsYWJlbCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxLjBlbTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiA0cHg7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm86Zm9jdXMgKyAuY2MtdG9vbHRpcCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJvdHRvbTogNDZweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNyk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxNHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTsgfVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAuY2Mtd2luZG93LFxcbiAgLmNjLXJldm9rZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY2MtYnRuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfSB9XFxuXFxuLyogZGltZW5zaW9ucyBmb3IgJ2lQaG9uZTYgUGx1cycgYW5kIGxvd2VyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAuY2Mtd2luZG93LmNjLXRvcCB7XFxuICAgIHRvcDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1ib3R0b20ge1xcbiAgICBib3R0b206IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyLCAuY2Mtd2luZG93LmNjLWZsb2F0aW5nLCAuY2Mtd2luZG93LmNjLXJpZ2h0LCAuY2Mtd2luZG93LmNjLWxlZnQge1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLWNvbXBsaWFuY2Uge1xcbiAgICAgIGZsZXg6IDEgMSBhdXRvOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gICAgbWF4LXdpZHRoOiBub25lOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYy13aW5kb3cgLmNjLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gICAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpub3QoLmNjLWluZm8pIHtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpO1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gIC5mb3JtIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7IH0gfVxcblxcbi8qIENsYXNzaWMgKi9cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtY29tcGxpYW5jZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4OiBub25lOyB9XFxuXFxuLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogLTFweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgei1pbmRleDogMTsgfVxcbiAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgbGVmdDogNnB4O1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveDpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXDFGNUY1XFxcIjsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNjLWJ0bi1jaGVja2JveDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXFwyNzEzXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNSk7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4uY2MtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiB0aGluIHNvbGlkIGxpZ2h0Z3JleTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi8qIEVkZ2VsZXNzICovXFxuLmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXdpbmRvdyB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC44ZW0gMS44ZW07XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICBwYWRkaW5nOiAwLjRlbSA0cHg7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXR1c2VzID0gWyBcIkRFTllcIiwgXCJBTExPV1wiLCBcIkRJU01JU1NcIiBdXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNEZW55ID0gXCJERU5ZXCJcclxuZXhwb3J0IGNvbnN0IHN0YXR1c0FsbG93ID0gXCJBTExPV1wiXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNEaXNtaXNzID0gXCJESVNNSVNTXCJcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRVNTRU5USUVMXCIsXHJcbiAgICAgICAgZXhwbGFpblRleHQ6IFwiQ2VzIGNvb2tpZXMgc29udCBlc3NlbnRpZWxzIHBvdXIgbGEgbmF2aWdhdGlvbiBzdXIgTmV4dG9yaWVzLmNvbVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNUQVRJU1RJUVVFU1wiLFxyXG4gICAgICAgIGV4cGxhaW5UZXh0OiBcIkNlcyBjb29raWVzIHBlcm1ldHRlbnQgZGUgcsOpYWxpc2VyIGRlcyBzdGF0aXN0aXF1ZXMgYW5vbnltZXMgZGUgdmlzaXRlcyBldCBkJ3V0aWxpc2F0aW9uIGR1IHNpdGUgaW50ZXJuZXQuXCIsXHJcbiAgICB9ICBcclxuXVxyXG4iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCJcclxuXHJcbmltcG9ydCBDb29raWVDb25zZW50IGZyb20gXCIuL21vZGVscy9Db29raWVDb25zZW50XCJcclxuXHJcbmlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IENvb2tpZUNvbnNlbnRcclxufSBlbHNlIHtcclxuICB3aW5kb3cuQ29va2llQ29uc2VudCA9IENvb2tpZUNvbnNlbnRcclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgeyBtZXJnZU9wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbHNcIlxyXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIlxyXG5cclxuY29uc3QgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoIGRlZmF1bHRPcHRpb25zID0ge30sIG9wdGlvbnMgPSB7fSApe1xyXG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApXHJcbiAgICB0aGlzLm9uID0gZW1pdHRlci5vbi5iaW5kKCBlbWl0dGVyIClcclxuICAgIHRoaXMuZW1pdCA9IGVtaXR0ZXIuZW1pdC5iaW5kKCBlbWl0dGVyIClcclxuICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXHJcbmltcG9ydCBMZWdhbCBmcm9tIFwiLi9MZWdhbFwiXHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi9Mb2NhdGlvblwiXHJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiXHJcblxyXG5pbXBvcnQgeyBzdGF0dXNlcywgY2F0ZWdvcmllcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxyXG5pbXBvcnQgeyBnZXRDb29raWUsIGlzVmFsaWRTdGF0dXMgfSBmcm9tIFwiLi4vdXRpbHNcIlxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGUgYXBwIGJ5IGNvbWJpbmluZyB0aGUgdXNlIG9mIHRoZSBQb3B1cCwgTG9jYXRvciBhbmQgTGF3IG1vZHVsZXNcclxuLy8gWW91IGNhbiBzdHJpbmcgdG9nZXRoZXIgdGhlc2UgdGhyZWUgbW9kdWxlcyB5b3Vyc2VsZiBob3dldmVyIHlvdSB3YW50LCBieSB3cml0aW5nIGEgbmV3IGZ1bmN0aW9uLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llQ29uc2VudCBleHRlbmRzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zID0ge30gKXtcclxuICAgIHN1cGVyKCBvcHRpb25zIClcclxuXHJcbiAgICBjb25zdCBhbnN3ZXJzID0gY2F0ZWdvcmllcy5tYXAoIGNhdGVnb3J5ID0+IHtcclxuICAgICAgY29uc3QgY29va2llTmFtZSA9IHRoaXMub3B0aW9ucy5jb29raWUgJiYgdGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lID8gdGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lIDogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzXydcclxuICAgICAgY29uc3QgYW5zd2VyID0gZ2V0Q29va2llKCBjb29raWVOYW1lICsgY2F0ZWdvcnkubmFtZSApXHJcbiAgICAgIHJldHVybiBpc1ZhbGlkU3RhdHVzKGFuc3dlcikgPyB7IFtjYXRlZ29yeS5uYW1lXTogYW5zd2VyIH0gOiB1bmRlZmluZWRcclxuICAgIH0pLmZpbHRlcihvYmogPT4gb2JqID8gb2JqW09iamVjdC5rZXlzKG9iailbMF1dIDogZmFsc2UpXHJcblxyXG4gICAgLy8gaWYgdGhleSBoYXZlIGFscmVhZHkgYW5zd2VyZWRcclxuICAgIGlmIChhbnN3ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlKCB7IGFuc3dlcnMgfSk7XHJcbiAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubGVnYWwgJiYgdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlICkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUoIHsgY29kZTogdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlIH0gKVxyXG4gICAgfSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmxvY2F0aW9uICkge1xyXG4gICAgICBuZXcgTG9jYXRpb24oIHRoaXMub3B0aW9ucy5sb2NhdGlvbiApLmxvY2F0ZSggdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlLmJpbmQoIHRoaXMgKSwgdGhpcy5pbml0aWFsaXphdGlvbkVycm9yLmJpbmQoIHRoaXMgKSApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUoe30pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGluaXRpYWxpemF0aW9uQ29tcGxldGUoIHJlc3VsdCApe1xyXG4gICAgaWYgKHJlc3VsdC5jb2RlKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBMZWdhbCh0aGlzLm9wdGlvbnMubGVnYWwpLmFwcGx5TGF3KCB0aGlzLm9wdGlvbnMsIHJlc3VsdC5jb2RlIClcclxuICAgIH1cclxuICAgIGNvbnN0IGluaXRpYWxEYXRhID0gcmVzdWx0LmFuc3dlcnMgJiYgcmVzdWx0LmFuc3dlcnMucmVkdWNlKChvYmosIHZhbCkgPT4gKHsuLi5vYmosIC4uLnZhbH0pKTtcclxuICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoIHRoaXMub3B0aW9ucywgaW5pdGlhbERhdGEgKVxyXG4gICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KFwiaW5pdGlhbGl6ZWRcIiwgdGhpcy5wb3B1cCwgaW5pdGlhbERhdGEgKSwgMCApXHJcbiAgfVxyXG4gIGluaXRpYWxpemF0aW9uRXJyb3IoIGVycm9yICkge1xyXG4gICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KCBcImVycm9yXCIsIGVycm9yLCBuZXcgUG9wdXAoIHRoaXMub3B0aW9ucyApICksIDAgKVxyXG4gIH1cclxuICBnZXRDb3VudHJ5TGF3cyggY291bnRyeUNvZGUgKXtcclxuICAgIHJldHVybiBuZXcgTGVnYWwodGhpcy5vcHRpb25zLmxlZ2FsKS5nZXQoIGNvdW50cnlDb2RlIClcclxuICB9XHJcbiAgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucG9wdXAuaXNPcGVuKClcclxuICB9XHJcbiAgY2xvc2UoKXtcclxuICAgIHJldHVybiAoIHRoaXMucG9wdXAuY2xvc2UoKSwgdGhpcyApXHJcbiAgfVxyXG4gIHJldm9rZUNob2ljZSgpIHtcclxuICAgIHJldHVybiAoIHRoaXMucG9wdXAucmV2b2tlQ2hvaWNlKCksIHRoaXMgKVxyXG4gIH1cclxuICBvcGVuKCl7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLm9wZW4oKSwgdGhpcyApXHJcbiAgfVxyXG4gIHRvZ2dsZVJldm9rZUJ1dHRvbiggYm9vbCApIHtcclxuICAgIHJldHVybiAoIHRoaXMucG9wdXAudG9nZ2xlUmV2b2tlQnV0dG9uKCBib29sICksIHRoaXMgKVxyXG4gIH1cclxuICBzZXRTdGF0dXNlcyggc3RhdHVzICkge1xyXG4gICAgcmV0dXJuICh0aGlzLnBvcHVwLnNldFN0YXR1c2VzKCBzdGF0dXMgKSwgdGhpcyApXHJcbiAgfVxyXG4gIGNsZWFyU3RhdHVzZXMoKXtcclxuICAgIHJldHVybiAoIHRoaXMucG9wdXAuY2xlYXJTdGF0dXNlcygpLCB0aGlzIClcclxuICB9XHJcbiAgZGVzdHJveSgpe1xyXG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5kZXN0cm95KCksIHRoaXMgKVxyXG4gIH1cclxufVxyXG5cclxuc3RhdHVzZXMucmVkdWNlKCAoIG9iaiwgc3RhdHVzICkgPT5cclxuKCBPYmplY3QuZGVmaW5lUHJvcGVydHkoIENvb2tpZUNvbnNlbnQsIHN0YXR1cywge1xyXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdHVzIH0sXHJcbiAgc2V0OiBmdW5jdGlvbiAoKSB7fSxcclxuICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICB3cml0ZWFibGU6IGZhbHNlLFxyXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2VcclxufSksIG9iaiApLCBDb29raWVDb25zZW50ICkiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXHJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9sZWdhbFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWdhbCBleHRlbmRzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zID0ge30gKSB7XHJcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxyXG4gIH1cclxuICBnZXQoIGNvdW50cnlDb2RlICl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoYXNMYXc6IHRoaXMub3B0aW9ucy5oYXNMYXcuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcclxuICAgICAgcmV2b2thYmxlOiB0aGlzLm9wdGlvbnMucmV2b2thYmxlLmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXHJcbiAgICAgIGV4cGxpY2l0QWN0aW9uOiB0aGlzLm9wdGlvbnMuZXhwbGljaXRBY3Rpb24uaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMFxyXG4gICAgfVxyXG4gIH1cclxuICBhcHBseUxhdyggb3B0aW9ucywgY291bnRyeUNvZGUgKXtcclxuICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmdldChjb3VudHJ5Q29kZSlcclxuXHJcbiAgICBpZiAoIWNvdW50cnkuaGFzTGF3KSB7XHJcbiAgICAgIC8vIFRoZSBjb3VudHJ5IGhhcyBubyBjb29raWUgbGF3XHJcbiAgICAgIG9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgIHRoaXMuZW1pdCggXCJub0Nvb2tpZUxhd1wiLCBjb3VudHJ5Q29kZSwgY291bnRyeSApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWdpb25hbExhdykge1xyXG4gICAgICBpZiAoY291bnRyeS5yZXZva2FibGUpIHtcclxuICAgICAgICAvLyBXZSBtdXN0IHByb3ZpZGUgYW4gb3B0aW9uIHRvIHJldm9rZSBjb25zZW50IGF0IGEgbGF0ZXIgdGltZVxyXG4gICAgICAgIG9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY291bnRyeS5leHBsaWNpdEFjdGlvbikge1xyXG4gICAgICAgIC8vIFRoZSB1c2VyIG11c3QgZXhwbGljaXRseSBjbGljayB0aGUgY29uc2VudCBidXR0b25cclxuICAgICAgICBvcHRpb25zLmRpc21pc3NPblNjcm9sbCA9IGZhbHNlXHJcbiAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25UaW1lb3V0ID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbnNcclxuICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXHJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9sb2NhdGlvblwiXHJcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QsIGdldFNjcmlwdCwgbWFrZUFzeW5jUmVxdWVzdCB9IGZyb20gXCIuLi91dGlsc1wiXHJcblxyXG4vLyBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGxvY2F0aW9uIHNlcnZpY2VzIHdlIGhhdmUgYWxyZWFkeSBzZXQgdXAuXHJcbi8vIFdoZW4gdXNpbmcgYSBzZXJ2aWNlLCBpdCBjb3VsZCBlaXRoZXIgcmV0dXJuIGEgZGF0YSBzdHJ1Y3R1cmUgaW4gcGxhaW4gdGV4dCAobGlrZSBhIEpTT04gb2JqZWN0KSBvciBhbiBleGVjdXRhYmxlIHNjcmlwdFxyXG4vLyBXaGVuIHRoZSByZXNwb25zZSBuZWVkcyB0byBiZSBleGVjdXRlZCBieSB0aGUgYnJvd3NlciwgdGhlbiBgaXNTY3JpcHRgIG11c3QgYmUgc2V0IHRvIHRydWUsIG90aGVyd2lzZSBpdCB3b24ndCB3b3JrLlxyXG5cclxuLy8gV2hlbiB0aGUgc2VydmljZSB1c2VzIGEgc2NyaXB0LCB0aGUgY2hhbmNlcyBhcmUgdGhhdCB5b3UnbGwgaGF2ZSB0byB1c2UgdGhlIHNjcmlwdCB0byBtYWtlIGFkZGl0aW9uYWwgcmVxdWVzdHMuIEluIHRoZXNlXHJcbi8vIGNhc2VzLCB0aGUgc2VydmljZXMgYGNhbGxiYWNrYCBwcm9wZXJ0eSBpcyBjYWxsZWQgd2l0aCBhIGBkb25lYCBmdW5jdGlvbi4gV2hlbiBwZXJmb3JtaW5nIGFzeW5jIG9wZXJhdGlvbnMsIHRoaXMgbXVzdCBiZSBjYWxsZWRcclxuLy8gd2l0aCB0aGUgZGF0YSAob3IgRXJyb3IpLCBhbmQgYGNvb2tpZWNvbnNlbnQubG9jYXRlYCB3aWxsIHRha2UgY2FyZSBvZiB0aGUgcmVzdFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb24gZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcclxuICAgIHN1cGVyKCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApXHJcbiAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMSAvLyB0aGUgaW5kZXggKGluIG9wdGlvbnMpIG9mIHRoZSBzZXJ2aWNlIHdlJ3JlIGN1cnJlbnRseSB1c2luZ1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dFNlcnZpY2UoKSB7XHJcbiAgICBsZXQgc2VydmljZVxyXG4gICAgZG8ge1xyXG4gICAgICBzZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlQnlJZHgoKyt0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXgpXHJcbiAgICB9IHdoaWxlIChcclxuICAgICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4IDwgdGhpcy5vcHRpb25zLnNlcnZpY2VzLmxlbmd0aCAmJlxyXG4gICAgICAhc2VydmljZVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiBzZXJ2aWNlXHJcbiAgfVxyXG5cclxuICBnZXRTZXJ2aWNlQnlJZHgoaWR4KSB7XHJcbiAgICAvLyBUaGlzIGNhbiBlaXRoZXIgYmUgdGhlIG5hbWUgb2YgYSBkZWZhdWx0IGxvY2F0aW9uU2VydmljZSwgb3IgYSBmdW5jdGlvbi5cclxuICAgIGNvbnN0IHNlcnZpY2VPcHRpb24gPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbaWR4XVxyXG5cclxuICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxyXG4gICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnN0IGR5bmFtaWNPcHRzID0gc2VydmljZU9wdGlvbigpXHJcbiAgICAgIHJldHVybiBkeW5hbWljT3B0cy5uYW1lID8gXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgZHluYW1pY09wdHMsXHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zWyBkeW5hbWljT3B0cy5uYW1lIF0oIGR5bmFtaWNPcHRzIClcclxuICAgICAgICApIDogZHluYW1pY09wdHNcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cclxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbl0oKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGl0J3MgYW4gb2JqZWN0LCBhc3N1bWUge25hbWU6ICdpcGluZm8nLCAuLi5vdGhlck9wdGlvbnN9XHJcbiAgICAvLyBBbGxvd3MgdXNlciB0byBwYXNzIGluIEFQSSBrZXlzIGV0Yy5cclxuICAgIGlmIChpc1BsYWluT2JqZWN0KHNlcnZpY2VPcHRpb24pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb24ubmFtZV0oXHJcbiAgICAgICAgc2VydmljZU9wdGlvblxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIC8vIFRoaXMgcnVucyB0aGUgc2VydmljZSBsb2NhdGVkIGF0IGluZGV4IGBjdXJyZW50U2VydmljZUluZGV4YC5cclxuICAvLyBJZiB0aGUgc2VydmljZSBmYWlscywgYHJ1bk5leHRTZXJ2aWNlT25FcnJvcmAgd2lsbCBjb250aW51ZSB0cnlpbmcgZWFjaCBzZXJ2aWNlIHVudGlsIGFsbCBmYWlsLCBvciBvbmUgY29tcGxldGVzIHN1Y2Nlc3NmdWxseVxyXG4gIGxvY2F0ZShjb21wbGV0ZSwgZXJyb3IpIHtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcclxuXHJcbiAgICBpZiAoIXNlcnZpY2UpIHtcclxuICAgICAgZXJyb3IobmV3IEVycm9yKCdObyBzZXJ2aWNlcyB0byBydW4nKSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jYWxsYmFja0NvbXBsZXRlID0gY29tcGxldGVcclxuICAgIHRoaXMuY2FsbGJhY2tFcnJvciA9IGVycm9yXHJcblxyXG4gICAgdGhpcy5ydW5TZXJ2aWNlKHNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpXHJcbiAgfVxyXG5cclxuICAvLyBQb3RlbnRpYWxseSBhZGRzIGEgY2FsbGJhY2sgdG8gYSB1cmwgZm9yIGpzb25wLlxyXG4gIHNldHVwVXJsKHNlcnZpY2UpIHtcclxuICAgIGNvbnN0IHNlcnZpY2VPcHRzID0gdGhpcy5nZXRDdXJyZW50U2VydmljZU9wdHMoKVxyXG4gICAgcmV0dXJuIHNlcnZpY2UudXJsLnJlcGxhY2UoL1xceyguKj8pXFx9L2csIGZ1bmN0aW9uKF8sIHBhcmFtKSB7XHJcbiAgICAgIGlmIChwYXJhbSA9PT0gJ2NhbGxiYWNrJykge1xyXG4gICAgICAgIGNvbnN0IHRlbXBOYW1lID0gJ2NhbGxiYWNrJyArIERhdGUubm93KClcclxuICAgICAgICB3aW5kb3dbdGVtcE5hbWVdID0gZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBzZXJ2aWNlLl9fSlNPTlBfREFUQSA9IEpTT04uc3RyaW5naWZ5KHJlcylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXBOYW1lXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhcmFtIGluIHNlcnZpY2VPcHRzLmludGVycG9sYXRlVXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VPcHRzLmludGVycG9sYXRlVXJsW3BhcmFtXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gcmVxdWlyZXMgYSBgc2VydmljZWAgb2JqZWN0IHRoYXQgZGVmaW5lcyBhdCBsZWFzdCBhIGB1cmxgIGFuZCBgY2FsbGJhY2tgXHJcbiAgcnVuU2VydmljZShzZXJ2aWNlLCBjb21wbGV0ZSkge1xyXG4gICAgLy8gYmFzaWMgY2hlY2sgdG8gZW5zdXJlIGl0IHJlc2VtYmxlcyBhIGBzZXJ2aWNlYFxyXG4gICAgaWYgKCFzZXJ2aWNlIHx8ICFzZXJ2aWNlLnVybCB8fCAhc2VydmljZS5jYWxsYmFjaykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBjYWxsIGVpdGhlciBgZ2V0U2NyaXB0YCBvciBgbWFrZUFzeW5jUmVxdWVzdGAgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHJlc291cmNlXHJcbiAgICBjb25zdCByZXF1ZXN0RnVuY3Rpb24gPSBzZXJ2aWNlLmlzU2NyaXB0ID8gZ2V0U2NyaXB0IDogbWFrZUFzeW5jUmVxdWVzdFxyXG5cclxuICAgIC8vIGJvdGggZnVuY3Rpb25zIGhhdmUgc2ltaWxhciBzaWduYXR1cmVzIHNvIHdlIGNhbiBwYXNzIHRoZSBzYW1lIGFyZ3VtZW50cyB0byBib3RoXHJcbiAgICByZXF1ZXN0RnVuY3Rpb24oXHJcbiAgICAgIHRoaXMuc2V0dXBVcmwoc2VydmljZSksXHJcbiAgICAgIHhociA9PiB7XHJcbiAgICAgICAgLy8gaWYgYCF4aHJgLCB0aGVuIGBnZXRTY3JpcHRgIGZ1bmN0aW9uIHdhcyB1c2VkLCBzbyB0aGVyZSBpcyBubyByZXNwb25zZSB0ZXh0XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlVGV4dCA9IHhociA/IHhoci5yZXNwb25zZVRleHQgOiAnJ1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgcmVzb3VyY2UgaXMgYSBzY3JpcHQsIHRoZW4gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBydW4uXHJcbiAgICAgICAgLy8gaWYgdGhlIHNjcmlwdCBpcyBKU09OUCwgdGhlbiBhIHRpbWUgZGVmaW5lZCBmdW5jdGlvbiBgY2FsbGJhY2tfe0RhdGUubm93fWAgaGFzIGFscmVhZHlcclxuICAgICAgICAvLyBiZWVuIGNhbGxlZCAoYXMgdGhlIEpTT05QIGNhbGxiYWNrKS4gVGhpcyBjYWxsYmFjayBzZXRzIHRoZSBfX0pTT05QX0RBVEEgcHJvcGVydHlcclxuICAgICAgICBpZiAoc2VydmljZS5fX0pTT05QX0RBVEEpIHtcclxuICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHNlcnZpY2UuX19KU09OUF9EQVRBXHJcbiAgICAgICAgICBkZWxldGUgc2VydmljZS5fX0pTT05QX0RBVEFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIHNlcnZpY2UgY2FsbGJhY2sgd2l0aCB0aGUgcmVzcG9uc2UgdGV4dCAoc28gaXQgY2FuIHBhcnNlIHRoZSByZXNwb25zZSlcclxuICAgICAgICB0aGlzLnJ1blNlcnZpY2VDYWxsYmFjay5jYWxsKHRoaXMsIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQpXHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXMub3B0aW9ucy50aW1lb3V0LFxyXG4gICAgICBzZXJ2aWNlLmRhdGEsXHJcbiAgICAgIHNlcnZpY2UuaGVhZGVyc1xyXG4gICAgKVxyXG5cclxuICAgIC8vIGBzZXJ2aWNlLmRhdGFgIGFuZCBgc2VydmljZS5oZWFkZXJzYCBhcmUgb3B0aW9uYWwgKHRoZXkgb25seSBjb3VudCBpZiBgIXNlcnZpY2UuaXNTY3JpcHRgIGFueXdheSlcclxuICB9XHJcblxyXG4gIC8vIFRoZSBzZXJ2aWNlIHJlcXVlc3QgaGFzIHJ1biAoYW5kIHBvc3NpYmx5IGhhcyBhIGByZXNwb25zZVRleHRgKSBbbm8gYHJlc3BvbnNlVGV4dGAgaWYgYGlzU2NyaXB0YF1cclxuICAvLyBXZSBuZWVkIHRvIHJ1biBpdHMgY2FsbGJhY2sgd2hpY2ggZGV0ZXJtaW5lcyBpZiBpdHMgc3VjY2Vzc2Z1bCBvciBub3RcclxuICAvLyBgY29tcGxldGVgIGlzIGNhbGxlZCBvbiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICBydW5TZXJ2aWNlQ2FsbGJhY2soIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQgKSB7XHJcbiAgICAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBpZiB0aGUgc2VydmljZSB1c2VzIHRoZSBhc3luYyBjYWxsYmFjayBpbiBpdHMgaGFuZGxlciBtZXRob2RcclxuICAgIGNvbnN0IHNlcnZpY2VSZXN1bHRIYW5kbGVyID0gYXN5bmNSZXN1bHQgPT4ge1xyXG4gICAgICAvLyBpZiBgcmVzdWx0YCBpcyBhIHZhbGlkIHZhbHVlLCB0aGVuIHRoaXMgZnVuY3Rpb24gc2hvdWxkbid0IHJlYWxseSBydW5cclxuICAgICAgLy8gZXZlbiBpZiBpdCBpcyBjYWxsZWQgYnkgYHNlcnZpY2UuY2FsbGJhY2tgXHJcbiAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQoIGNvbXBsZXRlLCBhc3luY1Jlc3VsdClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZSBmdW5jdGlvbiBgc2VydmljZS5jYWxsYmFja2Agd2lsbCBlaXRoZXIgZXh0cmFjdCBhIGNvdW50cnkgY29kZSBmcm9tIGByZXNwb25zZVRleHRgIGFuZCByZXR1cm4gaXQgKGluIGByZXN1bHRgKVxyXG4gICAgLy8gb3IgKGlmIGl0IGhhcyB0byBtYWtlIGFkZGl0aW9uYWwgcmVxdWVzdHMpIGl0IHdpbGwgY2FsbCBhIGBkb25lYCBjYWxsYmFjayB3aXRoIHRoZSBjb3VudHJ5IGNvZGUgd2hlbiBpdCBpcyByZWFkeVxyXG4gICAgY29uc3QgcmVzdWx0ID0gc2VydmljZS5jYWxsYmFjayhzZXJ2aWNlUmVzdWx0SGFuZGxlciwgcmVzcG9uc2VUZXh0KVxyXG5cclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQoIGNvbXBsZXRlLCByZXN1bHQgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVGhpcyBpcyBjYWxsZWQgd2l0aCB0aGUgYHJlc3VsdGAgZnJvbSBgc2VydmljZS5jYWxsYmFja2AgcmVnYXJkbGVzcyBvZiBob3cgaXQgcHJvdmlkZWQgdGhhdCByZXN1bHQgKHN5bmMgb3IgYXN5bmMpLlxyXG4gIC8vIGByZXN1bHRgIHdpbGwgYmUgd2hhdGV2ZXIgaXMgcmV0dXJuZWQgZnJvbSBgc2VydmljZS5jYWxsYmFja2AuIEEgc2VydmljZSBjYWxsYmFjayBzaG91bGQgcHJvdmlkZSBhbiBvYmplY3Qgd2l0aCBkYXRhXHJcbiAgb25TZXJ2aWNlUmVzdWx0KGNvbXBsZXRlLCByZXN1bHQpIHtcclxuICAgIC8vIGNvbnZlcnQgcmVzdWx0IHRvIG5vZGVqcyBzdHlsZSBhc3luYyBjYWxsYmFja1xyXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yIHx8IChyZXN1bHQgJiYgcmVzdWx0LmVycm9yKSkge1xyXG4gICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIHJlc3VsdCwgbnVsbClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgbnVsbCwgcmVzdWx0KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaWYgYGVycmAgaXMgc2V0LCB0aGUgbmV4dCBzZXJ2aWNlIGhhbmRsZXIgaXMgY2FsbGVkXHJcbiAgLy8gaWYgYGVycmAgaXMgbnVsbCwgdGhlIGBvbkNvbXBsZXRlYCBoYW5kbGVyIGlzIGNhbGxlZCB3aXRoIGBkYXRhYFxyXG4gIHJ1bk5leHRTZXJ2aWNlT25FcnJvcihlcnIsIGRhdGEpIHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgdGhpcy5sb2dFcnJvcihlcnIpXHJcblxyXG4gICAgICBjb25zdCBuZXh0U2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKVxyXG5cclxuICAgICAgaWYgKG5leHRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlKG5leHRTZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwoXHJcbiAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgdGhpcy5jYWxsYmFja0Vycm9yLFxyXG4gICAgICAgICAgbmV3IEVycm9yKCdBbGwgc2VydmljZXMgZmFpbGVkJylcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwodGhpcywgdGhpcy5jYWxsYmFja0NvbXBsZXRlLCBkYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFNlcnZpY2VPcHRzKCkge1xyXG4gICAgY29uc3QgdmFsID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW3RoaXMuY3VycmVudFNlcnZpY2VJbmRleF1cclxuXHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4ge25hbWU6IHZhbH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiB2YWwoKVxyXG4gICAgfWVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xyXG4gICAgICByZXR1cm4gdmFsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNhbGxzIHRoZSBgb25Db21wbGV0ZWAgY2FsbGJhY2sgYWZ0ZXIgcmVzZXR0aW5nIHRoZSBgY3VycmVudFNlcnZpY2VJbmRleGBcclxuICBjb21wbGV0ZVNlcnZpY2UoZm4sIGRhdGEpIHtcclxuICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xXHJcblxyXG4gICAgZm4gJiYgZm4oZGF0YSlcclxuICB9XHJcblxyXG4gIGxvZ0Vycm9yKGVycikge1xyXG4gICAgY29uc29sZS53YXJuKFxyXG4gICAgICBgVGhlIHNlcnZpY2VbJHt0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXh9XSAoJHt0aGlzLmdldFNlcnZpY2VCeUlkeCh0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXgpLnVybH0pIHJlc3BvbmRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3JgLFxyXG4gICAgICAgZXJyXHJcbiAgICApXHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvcG9wdXBcIlxyXG5pbXBvcnQge1xyXG4gIGNhdGVnb3JpZXMsXHJcbiAgc3RhdHVzZXMsXHJcbiAgc3RhdHVzRGlzbWlzcyxcclxuICBzdGF0dXNBbGxvdyxcclxuICBzdGF0dXNEZW55LFxyXG59IGZyb20gXCIuLi9jb25zdGFudHNcIlxyXG5pbXBvcnQge1xyXG4gIGFkZEN1c3RvbVN0eWxlc2hlZXQsXHJcbiAgZ2V0Q29va2llLFxyXG4gIGhhc2gsXHJcbiAgaW50ZXJwb2xhdGVTdHJpbmcsXHJcbiAgaXNNb2JpbGUsXHJcbiAgaXNQbGFpbk9iamVjdCxcclxuICBpc1ZhbGlkU3RhdHVzLFxyXG4gIHNldENvb2tpZSxcclxuICB0aHJvdHRsZSxcclxuICB0cmF2ZXJzZURPTVBhdGgsXHJcbn0gZnJvbSBcIi4uL3V0aWxzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMsIGluaXRpYWxWYWx1ZXMgKSB7XHJcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxyXG4gICAgdGhpcy51c2VyQ2F0ZWdvcmllcyA9IGluaXRpYWxWYWx1ZXMgfHwge1xyXG4gICAgICBFU1NFTlRJRUwgICAgICA6IHN0YXR1c0FsbG93LFxyXG4gICAgICBTVEFUSVNUSVFVRVMgICA6IHN0YXR1c0Rpc21pc3MsXHJcbiAgICB9XHJcbiAgICB0aGlzLmN1c3RvbVN0eWxlcyA9IHt9XHJcbiAgICB0aGlzLnRyYW5zaXRpb25FbmQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgY29uc3QgdHJhbnMgPSB7XHJcbiAgICAgICAgdDogJ3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgIE9UOiAnb1RyYW5zaXRpb25FbmQnLFxyXG4gICAgICAgIG1zVDogJ01TVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgTW96VDogJ3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgIFdlYmtpdFQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGZvciAobGV0IHByZWZpeCBpbiB0cmFucykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRyYW5zLmhhc093blByb3BlcnR5KHByZWZpeCkgJiZcclxuICAgICAgICAgIHR5cGVvZiBlbC5zdHlsZVtwcmVmaXggKyAncmFuc2l0aW9uJ10gIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJhbnNbcHJlZml4XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJydcclxuICAgIH0pKClcclxuXHJcbiAgICAvL1RPRE8gUkVDVVBFUkVSIExBIEJPTk5FIFZBTEVVUiBkYW5zIGhhc1RyYW5zaXRpb25cclxuICAgIHRoaXMuaGFzVHJhbnNpdGlvbiA9ICEhdGhpcy50cmFuc2l0aW9uRW5kO1xyXG5cclxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBgb25Db21wbGV0ZWAgd2FzIGNhbGxlZFxyXG4gICAgaWYgKHRoaXMuY2FuVXNlQ29va2llcygpKSB7XHJcbiAgICAgIC8vIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWRcclxuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgLy8gYXBwbHkgYmxhY2tsaXN0IC8gd2hpdGVsaXN0XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmJsYWNrbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMud2hpdGVsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIGZ1bGwgbWFya3VwIGVpdGhlciBjb250YWlucyB0aGUgd3JhcHBlciBvciBpdCBkb2VzIG5vdCAoZm9yIG11bHRpcGxlIGluc3RhbmNlcylcclxuICAgIGxldCBjb29raWVQb3B1cCA9IHRoaXMub3B0aW9ucy53aW5kb3dcclxuICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgdGhpcy5nZXRQb3B1cENsYXNzZXMoKS5qb2luKCcgJykpXHJcbiAgICAgIC5yZXBsYWNlKCd7e2NoaWxkcmVufX0nLCB0aGlzLmdldFBvcHVwSW5uZXJNYXJrdXAoKSlcclxuXHJcbiAgICAvLyBpZiB1c2VyIHBhc3NlcyBodG1sLCB1c2UgaXQgaW5zdGVhZFxyXG4gICAgY29uc3QgY3VzdG9tSFRNTCA9IHRoaXMub3B0aW9ucy5vdmVycmlkZUhUTUxcclxuICAgIGlmICh0eXBlb2YgY3VzdG9tSFRNTCA9PSAnc3RyaW5nJyAmJiBjdXN0b21IVE1MLmxlbmd0aCApIHtcclxuICAgICAgY29va2llUG9wdXAgPSBjdXN0b21IVE1MXHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgc3RhdGljLCB3ZSBuZWVkIHRvIGdyb3cgdGhlIGVsZW1lbnQgZnJvbSAwIGhlaWdodCBzbyBpdCBkb2Vzbid0IGp1bXAgdGhlIHBhZ2VcclxuICAgIC8vIGNvbnRlbnQuIHdlIHdyYXAgYW4gZWxlbWVudCBhcm91bmQgaXQgd2hpY2ggd2lsbCBtYXNrIHRoZSBoaWRkZW4gY29udGVudFxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xyXG4gICAgICAvLyBgZ3Jvd2VyYCBpcyBhIHdyYXBwZXIgZGl2IHdpdGggYSBoaWRkZW4gb3ZlcmZsb3cgd2hvc2UgaGVpZ2h0IGlzIGFuaW1hdGVkXHJcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmFwcGVuZE1hcmt1cChgPGRpdiBjbGFzcz1cImNjLWdyb3dlclwiPiR7Y29va2llUG9wdXB9PC9kaXY+YClcclxuXHJcbiAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICcnIC8vIHNldCBpdCB0byB2aXNpYmxlIChiZWNhdXNlIGFwcGVuZE1hcmt1cCBoaWRlcyBpdClcclxuICAgICAgdGhpcy5lbGVtZW50ID0gd3JhcHBlci5maXJzdENoaWxkIC8vIGdldCB0aGUgYGVsZW1lbnRgIHJlZmVyZW5jZSBmcm9tIHRoZSB3cmFwcGVyXHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5hcHBlbmRNYXJrdXAoY29va2llUG9wdXApXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcHBseUF1dG9EaXNtaXNzKClcclxuICAgIHRoaXMuYXBwbHlSZXZva2VCdXR0b24oKVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b09wZW4pIHtcclxuICAgICAgdGhpcy5hdXRvT3BlbigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVyblxyXG5cclxuICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xyXG4gICAgICBpZiAodGhpcy5oYXNUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJydcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2MtYnRuIFt0eXBlPVwiY2hlY2tib3hcIl0nICkuZm9yRWFjaCggY2hlY2tib3ggPT4ge1xyXG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbigpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCBcInBvcHVwT3BlbmVkXCIgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICBjbG9zZSggc2hvd1Jldm9rZSApIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcclxuICAgICAgaWYgKHRoaXMuaGFzVHJhbnNpdGlvbikge1xyXG4gICAgICAgIHRoaXMuZmFkZU91dCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNob3dSZXZva2UgJiYgdGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCBcInBvcHVwQ2xvc2VkXCIgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICBmYWRlSW4oKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFxyXG5cclxuICAgIGlmICghdGhpcy5oYXNUcmFuc2l0aW9uIHx8ICFlbCkgcmV0dXJuXHJcblxyXG4gICAgLy8gVGhpcyBzaG91bGQgYWx3YXlzIGJlIGNhbGxlZCBBRlRFUiBmYWRlT3V0ICh3aGljaCBpcyBnb3Zlcm5lZCBieSB0aGUgJ3RyYW5zaXRpb25lbmQnIGV2ZW50KS5cclxuICAgIC8vICd0cmFuc2l0aW9uZW5kJyBpc24ndCBhbGwgdGhhdCByZWxpYWJsZSwgc28sIGlmIHdlIHRyeSBhbmQgZmFkZUluIGJlZm9yZSAndHJhbnNpdGlvbmVuZCcgaGFzXHJcbiAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcclxuICAgIGlmICh0aGlzLmFmdGVyVHJhbnNpdGlvbikge1xyXG4gICAgICB0aGlzLmFmdGVyRmFkZU91dChlbClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJydcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCArICdweCdcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwIC8vIChtcykgRE8gTk9UIE1BS0UgVEhJUyBWQUxVRSBTTUFMTEVSLiBTZWUgYmVsb3dcclxuXHJcbiAgICAgIC8vIEFsdGhvdWdoIG1vc3QgYnJvd3NlcnMgY2FuIGhhbmRsZSB2YWx1ZXMgbGVzcyB0aGFuIDIwbXMsIGl0IHNob3VsZCByZW1haW4gYWJvdmUgdGhpcyB2YWx1ZS5cclxuICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB3YWl0aW5nIGZvciBhIFwiYnJvd3NlciByZWRyYXdcIiBiZWZvcmUgd2UgcmVtb3ZlIHRoZSAnY2MtaW52aXNpYmxlJyBjbGFzcy5cclxuICAgICAgLy8gSWYgdGhlIGNsYXNzIGlzIHJlbXZvZWQgYmVmb3JlIGEgcmVkcmF3IGNvdWxkIGhhcHBlbiwgdGhlbiB0aGUgZmFkZUluIGVmZmVjdCBXSUxMIE5PVCB3b3JrLCBhbmRcclxuICAgICAgLy8gdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGZyb20gbm90aGluZy4gVGhlcmVmb3JlIHdlIE1VU1QgYWxsb3cgZW5vdWdoIHRpbWUgZm9yIHRoZSBicm93c2VyIHRvIGRvXHJcbiAgICAgIC8vIGl0cyB0aGluZy4gVGhlIGFjdHVhbGx5IGRpZmZlcmVuY2UgYmV0d2VlbiB1c2luZyAwIGFuZCAyMCBpbiBhIHNldCB0aW1lb3V0IGlzIG5lZ2xlZ2libGUgYW55d2F5XHJcbiAgICAgIHRoaXMub3BlbmluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHRoaXMuYWZ0ZXJGYWRlSW4oZWwpLFxyXG4gICAgICAgIGZhZGVJblRpbWVvdXRcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXHJcbiAgICogVGhlcmUgaXMgYSBnb29kIHJlYXNvbiB3aHkgaXQncyBjYWxsZWQgaW4gYSB0aW1lb3V0LiBSZWFkICdmYWRlSW4nXHJcbiAgICovXHJcbiAgYWZ0ZXJGYWRlSW4oIGVsZW1lbnQgKSB7XHJcbiAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gbnVsbFxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYy1pbnZpc2libGUnKVxyXG4gIH1cclxuICBcclxuICBmYWRlT3V0KCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIXRoaXMuZWxlbWVudCkgcmV0dXJuXHJcblxyXG4gICAgaWYgKHRoaXMub3BlbmluZ1RpbWVvdXQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpXHJcbiAgICAgIHRoaXMuYWZ0ZXJGYWRlSW4odGhpcy5lbGVtZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9ICgpID0+IHRoaXMuYWZ0ZXJGYWRlT3V0KHRoaXMuZWxlbWVudClcclxuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbilcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhZnRlckZhZGVPdXQoZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgLy8gYWZ0ZXIgY2xvc2UgYW5kIGJlZm9yZSBvcGVuLCB0aGUgZGlzcGxheSBzaG91bGQgYmUgbm9uZVxyXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxyXG4gICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSBudWxsXHJcbiAgfVxyXG5cclxuICBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmVsZW1lbnQgJiZcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICcnICYmXHJcbiAgICAgICh0aGlzLmhhc1RyYW5zaXRpb24gPyAhdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykgOiB0cnVlKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUmV2b2tlQnV0dG9uKHNob3cpIHtcclxuICAgIGlmICh0aGlzLnJldm9rZUJ0bikgdGhpcy5yZXZva2VCdG4uc3R5bGUuZGlzcGxheSA9IHNob3cgPyAnJyA6ICdub25lJ1xyXG4gIH1cclxuXHJcbiAgcmV2b2tlQ2hvaWNlKHByZXZlbnRPcGVuKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcclxuICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXHJcblxyXG4gICAgdGhpcy5lbWl0KCBcInJldm9rZUNob2ljZVwiIClcclxuXHJcbiAgICBpZiAoIXByZXZlbnRPcGVuKSB7XHJcbiAgICAgIHRoaXMuYXV0b09wZW4oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFzIHRoZSB1c2VyIHJlc3BvbmRlZCB0byB0aGUgYmFubmVyXHJcbiAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIHRydWUgaWYgYW55IGNvb2tpZXMgaGF2ZSBiZWVuIHNldFxyXG4gICAqL1xyXG4gIGhhc0Fuc3dlcmVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5zb21lKCBzdGF0dXMgPT4gISFzdGF0dXMgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvIGFsbCBvZiB0aGUgY2F0ZWdvcmllc1xyXG4gICAqIEByZXR1cm4geyBhcnJheTxib29sZWFuPiB9IC0gdHJ1ZSBpZiBjb25zZW50IGhhcyBiZWVuIGdpdmVuXHJcbiAgICovXHJcbiAgaGFzQ29uc2VudGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5tYXAoIHN0YXR1cyA9PiBzdGF0dXMgPT09IHN0YXR1c0FsbG93IHx8IHN0YXR1cyA9PT0gc3RhdHVzRGlzbWlzcyApXHJcbiAgfVxyXG5cclxuICAvLyBvcGVucyB0aGUgcG9wdXAgaWYgbm8gYW5zd2VyIGhhcyBiZWVuIGdpdmVuXHJcbiAgYXV0b09wZW4oKSB7XHJcbiAgICBjb25zdCBoYXNBbnN3ZXJlZCA9IHRoaXMuaGFzQW5zd2VyZWQoKVxyXG4gICAgaWYgKCFoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLm9wZW4oKVxyXG4gICAgfSBlbHNlIGlmIChoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogXHJcbiAgICogU2V0J3MgY29va2llIHN0YXR1c2VzXHJcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBhbGxPclVuZGVmICAgICAgLSBJZiB0aGlzIGlzIHRoZSBvbmx5IHBhcmFtLCBzZXQgQUxMIGlmIG5vdCwgc2V0IFVuY2F0ZWdvcml6ZWQgY29va2llcyBzdGF0dXNlcyBzZXQgdG8gdmFsdWUuXHJcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBlc3NlbnRpYWwgICAgICAgLSBFc3NlbnRpYWwgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXHJcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBwZXJzb25hbGl6YXRpb24gLSBQcmVmZXJlbmNlcyAvIEZ1bmN0aW9uYWxpdHkgc2V0IHRvIHZhbHVlXHJcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBhbmFseXRpY3MgICAgICAgLSBBbmFseXRpcyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcclxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IG1hcmtldGluZyAgICAgICAtIE1hcmtldGluZyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcclxuICAgKiBAcmV0dXJuIHsgdW5kZWZpbmVkIH1cclxuICAqL1xyXG4gIHNldFN0YXR1c2VzKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUNhdGVnb3J5U3RhdHVzID0gKCBjYXRlZ29yeU5hbWUsIHN0YXR1cyApID0+IHtcclxuICAgICAgaWYgKGlzVmFsaWRTdGF0dXMoc3RhdHVzKSkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lKydfJytjYXRlZ29yeU5hbWVcclxuICAgICAgICBjb25zdCBwcmV2aW91c1N0YXR1cyA9IGdldENvb2tpZShjb29raWVOYW1lKTtcclxuICAgICAgICBpZiAoIXByZXZpb3VzU3RhdHVzIHx8IHN0YXR1cyAhPT0gc3RhdHVzRGlzbWlzcykge1xyXG4gICAgICAgICAgc2V0Q29va2llKGNvb2tpZU5hbWUsIHN0YXR1cywgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUpXHJcbiAgICAgICAgICB0aGlzLmVtaXQoIFwic3RhdHVzQ2hhbmdlZFwiLCBjb29raWVOYW1lLCBzdGF0dXMsIHByZXZpb3VzU3RhdHVzIClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0YXR1c2VzKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAwICkge1xyXG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeS5uYW1lLCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjYXRlZ29yeS5uYW1lIF0gKSApXHJcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpe1xyXG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeS5uYW1lLCBhcmd1bWVudHNbIDAgXSApIClcclxuICAgIH0gZWxzZSBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xyXG4gICAgICBhcmd1bWVudHMuZm9yRWFjaCggKCBjYXRlZ29yeVN0YXR1cywgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIHRoaXMudXNlckNhdGVnb3JpZXNbIGluZGV4IF0sIGNhdGVnb3J5U3RhdHVzIClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xyXG4gICAqIEByZXR1cm4geyBhcnJheTxzdHJpbmc+IH0gLSBjb29raWUgY2F0ZWdvcmllcyBzdGF0dXMgaW4gb3JkZXIgb2YgY2F0ZWdvcmllc1xyXG4gICAqL1xyXG4gIGdldFN0YXR1c2VzKCkge1xyXG4gICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKCBjYXRlZ29yeSA9PiBnZXRDb29raWUodGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lKydfJytjYXRlZ29yeS5uYW1lKSApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xyXG4gICAqL1xyXG4gIGNsZWFyU3RhdHVzZXMoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxyXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBjYXRlZ29yeSA9PiB7XHJcbiAgICAgIHNldENvb2tpZShuYW1lKydfJytjYXRlZ29yeS5uYW1lLCAnJywgLTEsIGRvbWFpbiwgcGF0aClcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIGNhblVzZUNvb2tpZXMoKSB7XHJcbiAgICBpZiAoIXdpbmRvdy5uYXZpZ2F0b3IuY29va2llRW5hYmxlZCB8fCB3aW5kb3cuQ29va2llc09LIHx8IHdpbmRvdy5uYXZpZ2F0b3IuQ29va2llc09LICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXR1c2VzVmFsdWVzID0gdGhpcy5nZXRTdGF0dXNlcygpXHJcbiAgICBjb25zdCBtYXRjaGVzID0gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdLm5hbWVdOiBpc1ZhbGlkU3RhdHVzKCBzdGF0dXMgKSB9ICkgKVxyXG4gICAgY29uc3QgaGFzTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtYXRjaCA9PiBtYXRjaFtPYmplY3Qua2V5cyhtYXRjaClbMF1dICkubGVuZ3RoID4gMFxyXG4gICAgc3RhdHVzZXNWYWx1ZXMuZm9yRWFjaCggKCBzdGF0dXMsIGluZGV4ICkgPT5cclxuICAgICAgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcmllc1sgaW5kZXggXS5uYW1lIF0gPT09IHN0YXR1c1xyXG4gICAgICAgID8gc3RhdHVzIDogdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcmllc1sgaW5kZXggXS5uYW1lIF0gKVxyXG5cclxuICAgIHJldHVybiBoYXNNYXRjaGVzXHJcbiAgfVxyXG5cclxuICAvLyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRcclxuICBnZXRQb3NpdGlvbkNsYXNzZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCAnLScgKS5tYXAoIHBvcyA9PiAnY2MtJytwb3MpXHJcbiAgfVxyXG5cclxuICBnZXRQb3B1cENsYXNzZXMoKSB7XHJcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXHJcbiAgICBsZXQgcG9zaXRpb25TdHlsZSA9XHJcbiAgICAgIG9wdHMucG9zaXRpb24gPT0gJ3RvcCcgfHwgb3B0cy5wb3NpdGlvbiA9PSAnYm90dG9tJ1xyXG4gICAgICAgID8gJ2Jhbm5lcidcclxuICAgICAgICA6ICdmbG9hdGluZydcclxuXHJcbiAgICBpZiAoaXNNb2JpbGUoKSAmJiBvcHRzLm1vYmlsZUZvcmNlRmxvYXQpIHtcclxuICAgICAgcG9zaXRpb25TdHlsZSA9ICdmbG9hdGluZydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gW1xyXG4gICAgICAnY2MtJyArIHBvc2l0aW9uU3R5bGUsIC8vIGZsb2F0aW5nIG9yIGJhbm5lclxyXG4gICAgICAnY2MtdHlwZS0nICsgb3B0cy50eXBlLCAvLyBhZGQgdGhlIGNvbXBsaWFuY2UgdHlwZVxyXG4gICAgICAnY2MtdGhlbWUtJyArIG9wdHMudGhlbWUsIC8vIGFkZCB0aGUgdGhlbWVcclxuICAgIF1cclxuXHJcbiAgICBpZiAob3B0cy5zdGF0aWMpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1zdGF0aWMnKVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMucHVzaC5hcHBseShjbGFzc2VzLCB0aGlzLmdldFBvc2l0aW9uQ2xhc3NlcygpKVxyXG5cclxuICAgIC8vIHdlIG9ubHkgYWRkIGV4dHJhIHN0eWxlcyBpZiBgcGFsZXR0ZWAgaGFzIGJlZW4gc2V0IHRvIGEgdmFsaWQgdmFsdWVcclxuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUGFsZXR0ZSh0aGlzLm9wdGlvbnMucGFsZXR0ZSlcclxuXHJcbiAgICAvLyBpZiB3ZSBvdmVycmlkZSB0aGUgcGFsZXR0ZSwgYWRkIHRoZSBjbGFzcyB0aGF0IGVuYWJsZXMgdGhpc1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xyXG4gICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbGFzc2VzXHJcbiAgfVxyXG5cclxuICBnZXRQb3B1cElubmVyTWFya3VwKCkge1xyXG4gICAgY29uc3QgaW50ZXJwb2xhdGVkID0ge31cclxuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcclxuXHJcbiAgICAvLyByZW1vdmVzIGxpbmsgaWYgc2hvd0xpbmsgaXMgZmFsc2VcclxuICAgIGlmICghb3B0cy5zaG93TGluaykge1xyXG4gICAgICBvcHRzLmVsZW1lbnRzLmxpbmsgPSAnJyBcclxuICAgICAgb3B0cy5lbGVtZW50cy5tZXNzYWdlbGluayA9IG9wdHMuZWxlbWVudHMubWVzc2FnZVxyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5rZXlzKG9wdHMuZWxlbWVudHMpLmZvckVhY2goIHByb3AgPT4ge1xyXG4gICAgICBpbnRlcnBvbGF0ZWRbcHJvcF0gPSBpbnRlcnBvbGF0ZVN0cmluZyhcclxuICAgICAgICBvcHRzLmVsZW1lbnRzW3Byb3BdLFxyXG4gICAgICAgIG5hbWUgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3RyID0gb3B0cy5jb250ZW50W25hbWVdXHJcbiAgICAgICAgICByZXR1cm4gbmFtZSAmJiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggPyBzdHIgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBjaGVja3MgaWYgdGhlIHR5cGUgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGluZm8gaWYgaXQncyBub3RcclxuICAgIGxldCBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZVtvcHRzLnR5cGVdXHJcbiAgICBpZiAoIWNvbXBsaWFuY2VUeXBlKSB7XHJcbiAgICAgIGNvbXBsaWFuY2VUeXBlID0gb3B0cy5jb21wbGlhbmNlLmluZm9cclxuICAgIH1cclxuXHJcbiAgICAvLyBidWlsZCB0aGUgY29tcGxpYW5jZSB0eXBlcyBmcm9tIHRoZSBhbHJlYWR5IGludGVycG9sYXRlZCBgZWxlbWVudHNgXHJcbiAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IGludGVycG9sYXRlU3RyaW5nKCBjb21wbGlhbmNlVHlwZSwgbmFtZSA9PiBpbnRlcnBvbGF0ZWRbbmFtZV0gKVxyXG5cclxuICAgIC8vIGNoZWNrcyBpZiB0aGUgbGF5b3V0IGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBiYXNpYyBpZiBpdCdzIG5vdFxyXG4gICAgbGV0IGxheW91dCA9IG9wdHMubGF5b3V0c1tvcHRzLmxheW91dF1cclxuICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgIGxheW91dCA9IG9wdHMubGF5b3V0cy5iYXNpY1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW50ZXJwb2xhdGVTdHJpbmcobGF5b3V0LCBtYXRjaCA9PmludGVycG9sYXRlZFttYXRjaF0gKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kTWFya3VwKG1hcmt1cCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGNvbnQgPVxyXG4gICAgICBvcHRzLmNvbnRhaW5lciAmJiBvcHRzLmNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMVxyXG4gICAgICAgID8gb3B0cy5jb250YWluZXJcclxuICAgICAgICA6IGRvY3VtZW50LmJvZHlcclxuXHJcbiAgICBkaXYuaW5uZXJIVE1MID0gbWFya3VwXHJcblxyXG4gICAgY29uc3QgZWwgPSBkaXYuY2hpbGRyZW5bMF1cclxuXHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2Mtd2luZG93JykgJiYgdGhpcy5oYXNUcmFuc2l0aW9uKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrKCBldmVudCApIClcclxuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2MtYnRuIFt0eXBlPVwiY2hlY2tib3hcIl0nICkuZm9yRWFjaCggY2hlY2tib3ggPT4ge1xyXG4gICAgICAvL0luaXRpYWxpemUgdGhlIGNoZWNrZWQgdmFsdWUgb2YgY2hlY2tib3hlc1xyXG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2hlY2tib3gubmFtZSBdID09PSBzdGF0dXNBbGxvdztcclxuICAgICAgaWYgKGNoZWNrYm94Lm5hbWUgPT09ICdFU1NFTlRJRUwnKSB7XHJcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2hlY2tib3gubmFtZSBdID0gY2hlY2tib3guY2hlY2tlZCA/IHN0YXR1c0FsbG93IDogc3RhdHVzRGVueVxyXG4gICAgICB9KVxyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpIClcclxuICAgIH0pXHJcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNjLWluZm9cIikuZm9yRWFjaCggc2hvd0luZm8gPT4ge1xyXG4gICAgICBzaG93SW5mby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG4gICAgICAgIGlmICggdGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAgKSB7XHJcbiAgICAgICAgICB0aGlzLmJsdXIoKVxyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKG9wdHMuYXV0b0F0dGFjaCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICghY29udC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICBjb250LmFwcGVuZENoaWxkKGVsKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250Lmluc2VydEJlZm9yZShlbCwgY29udC5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiTm8gY29udGFpbmVyIHRvIGF0dGFjaCB0b28uIE1ha2Ugc3VyZSB0aGUgRE9NIGhhcyBsb2FkZWQuIElzIHlvdXIgc2NyaXB0IGxvYWRlZCBqdXN0IGJlZm9yZSB0aGUgYDwvYm9keT5gIHRhZz9cIiApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxcclxuICB9XHJcblxyXG4gIGhhbmRsZUJ1dHRvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAvLyByZXR1cm5zIHRoZSBwYXJlbnQgZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgY2xhc3MsIG9yIHRoZSBvcmlnaW5hbCBlbGVtZW50IC0gbnVsbCBpZiBub3QgZm91bmRcclxuICAgIGNvbnN0IGJ0biA9IHRyYXZlcnNlRE9NUGF0aChldmVudC50YXJnZXQsICdjYy1idG4nKSB8fCBldmVudC50YXJnZXRcclxuICAgIFxyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXNhdmUnICkpe1xyXG4gICAgICB0aGlzLnNldFN0YXR1c2VzKClcclxuICAgICAgdGhpcy5jbG9zZSh0cnVlKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApKSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBidG4uY2xhc3NOYW1lLm1hdGNoKFxyXG4gICAgICAgIG5ldyBSZWdFeHAoJ1xcXFxiY2MtKCcgKyBzdGF0dXNlcy5tYXAoIHN0ciA9PiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKSApLmpvaW4oJ3wnKSArICcpXFxcXGInKVxyXG4gICAgICApXHJcbiAgICAgIGNvbnN0IG1hdGNoID0gKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkgfHwgZmFsc2VcclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhtYXRjaClcclxuICAgICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWNsb3NlJyApKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcclxuICAgICAgdGhpcy5jbG9zZSh0cnVlKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtcmV2b2tlJyApKSB7XHJcbiAgICAgIHRoaXMucmV2b2tlQ2hvaWNlKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhdHRhY2hDdXN0b21QYWxldHRlKHBhbGV0dGUpIHtcclxuICAgIGNvbnN0IGhhc2hTdHIgPSBoYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKVxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnY2MtY29sb3Itb3ZlcnJpZGUtJyArIGhhc2hTdHJcclxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1BsYWluT2JqZWN0KHBhbGV0dGUpXHJcblxyXG4gICAgdGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yID0gaXNWYWxpZCA/IHNlbGVjdG9yIDogbnVsbFxyXG5cclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgIGFkZEN1c3RvbVN0eWxlc2hlZXQoaGFzaFN0ciwgcGFsZXR0ZSwgJy4nICsgc2VsZWN0b3IpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZFxyXG4gIH1cclxuXHJcblxyXG4gIGdldEV2ZW50UGF0aCggZXZlbnQgKSB7XHJcbiAgICBjb25zdCBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoID8gZXZlbnQuY29tcG9zZWRQYXRoKCkgOiAoZnVuY3Rpb24gKCBhcnIsIGVsZW1lbnQgKSB7XHJcbiAgICAgIHdoaWxlICggZWxlbWVudCApIHtcclxuICAgICAgICBhcnIucHVzaCggZWxlbWVudCApXHJcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhcnJcclxuICAgIH0pKFtdLGV2ZW50LnRhcmdldCApXHJcbiAgICBpZiAoICFwYXRoICkge1xyXG4gICAgICBjb25zb2xlLndhcm4oIFwiJy5wYXRoJyAmICcuY29tcG9zZWRQYXRoJyBmYWlsZWQgdG8gZ2VuZXJhdGUgYW4gZXZlbnQgcGF0aC5cIiApXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGhcclxuICB9XHJcblxyXG4gIGFwcGx5QXV0b0Rpc21pc3MoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGVuYWJsZWQsXHJcbiAgICAgIGRpc21pc3NPblRpbWVvdXQgIDogZGVsYXksXHJcbiAgICAgIGRpc21pc3NPblNjcm9sbCAgIDpzY3JvbGxSYW5nZSxcclxuICAgICAgZGlzbWlzc09uTGlua0NsaWNrLFxyXG4gICAgICBkaXNtaXNzT25XaW5kb3dDbGljayxcclxuICAgICAgZGlzbWlzc09uS2V5UHJlc3NcclxuICAgIH0gPSB0aGlzLm9wdGlvbnNcclxuXHJcbiAgICBpZiAoIGVuYWJsZWQgKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZGVsYXkgPT0gJ251bWJlcicgJiYgZGVsYXkgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZGlzbWlzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKT0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcclxuICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgICB9LCBNYXRoLmZsb29yKGRlbGF5KSlcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2Nyb2xsUmFuZ2UgPT0gJ251bWJlcicgJiYgc2Nyb2xsUmFuZ2UgPj0gMCkge1xyXG4gICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gTWF0aC5mbG9vcihzY3JvbGxSYW5nZSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXHJcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSlcclxuICAgICAgfSBlbHNlIGlmIChkaXNtaXNzT25XaW5kb3dDbGljaykge1xyXG4gICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IGV2dCA9PiB7XHJcbiAgICAgICAgICBpZiAoICFnZXRFdmVudFBhdGgoIGV2dCApLnNvbWUoIGVsZW1lbnQgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlnbm9yZUNsaWNrc0Zyb20uc29tZSggaWdub3JlZENsaWNrID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGlnbm9yZWRDbGljayApXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljaylcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxyXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxyXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbkxpbmtDbGljaykge1xyXG4gICAgICAgIHRoaXMub25MaW5rQ2xpY2sgPSBldnQgPT4ge1xyXG4gICAgICAgICAgaWYgKCBnZXRFdmVudFBhdGgoIGV2dCApLnNvbWUoIGVsZW0gPT4gdHlwZW9mIGVsZW0udGFnTmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbS50YWdOYW1lID09PSAnQScgKSApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzRGlzbWlzcyApXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoIHRydWUgKVxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxyXG4gICAgICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxyXG4gICAgICB9IGVsc2UgaWYgKCBkaXNtaXNzT25LZXlQcmVzcyApIHtcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcyA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudFxyXG4gICAgICAgICAgICBpZiAoIGtleUNvZGUgPT09IDEzICkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0FsbG93IClcclxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgga2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKCBzdGF0dXNEaXNtaXNzIClcclxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwbHlSZXZva2VCdXR0b24oKSB7XHJcbiAgICAvLyByZXZva2FibGUgaXMgdHJ1ZSBpZiBhZHZhbmNlZCBjb21wbGlhbmNlIGlzIHNlbGVjdGVkXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgIT0gJ2luZm8nICYmIHRoaXMub3B0aW9ucy5yZWdpb25hbExhdyA9PSB0cnVlKSB0aGlzLm9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZVxyXG4gICAgLy8gYW5pbWF0ZVJldm9rYWJsZSBmYWxzZSBmb3IgbW9iaWxlIGRldmljZXNcclxuICAgIGlmIChpc01vYmlsZSgpKSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSA9IGZhbHNlXHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcclxuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuZ2V0UG9zaXRpb25DbGFzc2VzKClcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1hbmltYXRlJylcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvcilcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy10aGVtZS0nK3RoaXMub3B0aW9ucy50aGVtZSlcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyggdGhpcy5vcHRpb25zLmNvbnRlbnQucG9saWN5IClcclxuICAgICAgY29uc3QgcmV2b2tlQnRuID0gdGhpcy5vcHRpb25zLnJldm9rZUJ0blxyXG4gICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGNsYXNzZXMuam9pbignICcpKVxyXG4gICAgICAgIC5yZXBsYWNlKCd7e3BvbGljeX19JywgdGhpcy5vcHRpb25zLmNvbnRlbnQucG9saWN5KVxyXG5cclxuICAgICAgdGhpcy5yZXZva2VCdG4gPSB0aGlzLmFwcGVuZE1hcmt1cChyZXZva2VCdG4pXHJcblxyXG4gICAgICBjb25zdCBidG4gPSB0aGlzLnJldm9rZUJ0blxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcclxuICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IHRocm90dGxlKGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgbGV0IGFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICBjb25zdCBtaW5ZID0gMjBcclxuICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMFxyXG5cclxuICAgICAgICAgIGlmICggKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtdG9wJyApICYmIGV2dC5jbGllbnRZIDwgbWluWSApIHx8XHJcbiAgICAgICAgICAgICAgICAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1ib3R0b20nICkgJiYgZXZ0LmNsaWVudFkgPiBtYXhZICkgKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoYWN0aXZlICYmICFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xyXG4gICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCAnY2MtYWN0aXZlJyApXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCAhYWN0aXZlICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XHJcbiAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoICdjYy1hY3RpdmUnIClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDApXHJcblxyXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkZXN0cm95KCl7XHJcbiAgICBjb25zb2xlLndhcm4oIFwiRGVzdHJveWluZy4uLlwiKVxyXG4gICAgaWYgKCB0aGlzLmVsZW1lbnQgKXtcclxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpXHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMucmV2b2tlQnRuICl7XHJcbiAgICAgIHRoaXMucmV2b2tlQnRuLnJlbW92ZSgpXHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMub25XaW5kb3dTY3JvbGwgKXtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwgKVxyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLm9uV2luZG93Q2xpY2sgKSB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljayApXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25XaW5kb3dDbGljaylcclxuICAgIH1cclxuICAgIGlmICggdGhpcy5vbkxpbmtDbGljayApIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcclxuICAgIH1cclxuICAgIGlmICggdGhpcy5vbktleVByZXNzICkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ29ua2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MgKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIE1ha2UgdGhpcyBmYWxzZSBpZiB5b3Ugd2FudCB0byBkaXNhYmxlIGFsbCByZWdpb25hbCBvdmVycmlkZXMgZm9yIHNldHRpbmdzLlxyXG4gIC8vIElmIHRydWUsIG9wdGlvbnMgY2FuIGRpZmZlciBieSBjb3VudHJ5LCBkZXBlbmRpbmcgb24gdGhlaXIgY29va2llIGxhdy5cclxuICAvLyBJdCBkb2VzIG5vdCBhZmZlY3QgaGlkaW5nIHRoZSBwb3B1cCBmb3IgY291bnRyaWVzIHRoYXQgZG8gbm90IGhhdmUgY29va2llIGxhdy5cclxuICByZWdpb25hbExhdzogdHJ1ZSxcclxuXHJcbiAgLy8gY291bnRyaWVzIHRoYXQgZW5mb3JjZSBzb21lIHZlcnNpb24gb2YgYSBjb29raWUgbGF3XHJcbiAgaGFzTGF3OiBbXHJcbiAgICAnQVQnLFxyXG4gICAgJ0JFJyxcclxuICAgICdCRycsXHJcbiAgICAnSFInLFxyXG4gICAgJ0NaJyxcclxuICAgICdDWScsXHJcbiAgICAnREsnLFxyXG4gICAgJ0VFJyxcclxuICAgICdGSScsXHJcbiAgICAnRlInLFxyXG4gICAgJ0RFJyxcclxuICAgICdFTCcsXHJcbiAgICAnSFUnLFxyXG4gICAgJ0lFJyxcclxuICAgICdJVCcsXHJcbiAgICAnTFYnLFxyXG4gICAgJ0xUJyxcclxuICAgICdMVScsXHJcbiAgICAnTVQnLFxyXG4gICAgJ05MJyxcclxuICAgICdOTycsXHJcbiAgICAnUEwnLFxyXG4gICAgJ1BUJyxcclxuICAgICdTSycsXHJcbiAgICAnRVMnLFxyXG4gICAgJ1NFJyxcclxuICAgICdHQicsXHJcbiAgICAnVUsnLFxyXG4gICAgJ0dSJyxcclxuICAgICdFVScsXHJcbiAgICAnUk8nXHJcbiAgXSxcclxuXHJcbiAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYWxsIGNvb2tpZSBjb25zZW50IGNob2ljZXMgbXVzdCBiZSByZXZva2FibGUgKGEgdXNlciBtdXN0IGJlIGFibGUgdG9vIGNoYW5nZSB0aGVpciBtaW5kKVxyXG4gIHJldm9rYWJsZTogW1xyXG4gICAgJ0hSJyxcclxuICAgICdDWScsXHJcbiAgICAnREsnLFxyXG4gICAgJ0VFJyxcclxuICAgICdGUicsXHJcbiAgICAnREUnLFxyXG4gICAgJ0xWJyxcclxuICAgICdMVCcsXHJcbiAgICAnTkwnLFxyXG4gICAgJ05PJyxcclxuICAgICdQVCcsXHJcbiAgICAnRVMnXHJcbiAgXSxcclxuXHJcbiAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXHJcbiAgLy8gaW4gdGhlc2UgY291bnRyaWVzLCBjb25zZW50IGNhbm5vdCBiZSBpbXBsaWVkIHZpYSBhIHRpbWVvdXQgb3IgYnkgc2Nyb2xsaW5nIGRvd24gdGhlIHBhZ2VcclxuICBleHBsaWNpdEFjdGlvbjogWydIUicsICdJVCcsICdFUycsICdOTyddXHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuY29uc3QgdG9FcnJvciA9IG9iaiA9PiBuZXcgRXJyb3IoJ0Vycm9yIFsnICsgKG9iai5jb2RlIHx8ICdVTktOT1dOJykgKyAnXTogJyArIG9iai5lcnJvcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBUaGUgZGVmYXVsdCB0aW1lb3V0IGlzIDUgc2Vjb25kcy4gVGhpcyBpcyBtYWlubHkgbmVlZGVkIHRvIGNhdGNoIEpTT05QIHJlcXVlc3RzIHRoYXQgZXJyb3IuXHJcbiAgLy8gT3RoZXJ3aXNlIHRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGNhdGNoIEpTT05QIGVycm9ycy4gVGhhdCBtZWFucyB0aGF0IGlmIGEgSlNPTlAgZmFpbHMsIHRoZVxyXG4gIC8vIGFwcCB3aWxsIHRha2UgYHRpbWVvdXRgIG1pbGxpc2Vjb25kcyB0byByZWFjdCB0byBhIEpTT05QIG5ldHdvcmsgZXJyb3IuXHJcbiAgdGltZW91dDogNTAwMCxcclxuXHJcbiAgLy8gdGhlIG9yZGVyIHRoYXQgc2VydmljZXMgd2lsbCBiZSBhdHRlbXB0ZWQgaW5cclxuICBzZXJ2aWNlczogW1xyXG4gICAgJ2lwaW5mbydcclxuXHJcbiAgICAvKlxyXG5cclxuICAgIC8vICdpcGluZm9kYicgcmVxdWlyZXMgc29tZSBvcHRpb25zLCBzbyB3ZSBkZWZpbmUgaXQgdXNpbmcgYW4gb2JqZWN0XHJcbiAgICAvLyB0aGlzIG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIHRoZSBzZXJ2aWNlXHJcblxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnaXBpbmZvZGInLFxyXG4gICAgICBpbnRlcnBvbGF0ZVVybDoge1xyXG4gICAgICAgIC8vIG9idmlvdXNseSwgdGhpcyBpcyBhIGZha2Uga2V5XHJcbiAgICAgICAgYXBpX2tleTogJ3ZPZ0kzNzQ4ZG5JeXRJcnNKY3hTN3FzRGY2a2JKa0U5bE40eUVEclhBcVhjS1VOdmpqWlBveDNla1hxbU1NbGQnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGFzIHdlbGwgYXMgZGVmaW5pbmcgYW4gb2JqZWN0LCB5b3UgY2FuIGRlZmluZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3RcclxuXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7bmFtZTogJ2lwaW5mb2RiJ31cclxuICAgIH0sXHJcblxyXG4gICAgKi9cclxuICBdLFxyXG5cclxuICBzZXJ2aWNlRGVmaW5pdGlvbnM6IHtcclxuICAgIGlwaW5mbzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXHJcbiAgICAgICAgdXJsOiAnLy9pcGluZm8uaW8nLFxyXG4gICAgICAgIGhlYWRlcnM6IFsnQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJ10sXHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JcclxuICAgICAgICAgICAgICA/IHRvRXJyb3IoanNvbilcclxuICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFRoaXMgc2VydmljZSByZXF1aXJlcyBhbiBvcHRpb24gdG8gZGVmaW5lIGBrZXlgLiBPcHRpb25zIGFyZSBwcm9pdmVkIHVzaW5nIG9iamVjdHMgb3IgZnVuY3Rpb25zXHJcbiAgICBpcGluZm9kYjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXHJcbiAgICAgICAgdXJsOlxyXG4gICAgICAgICAgJy8vYXBpLmlwaW5mb2RiLmNvbS92My9pcC1jb3VudHJ5Lz9rZXk9e2FwaV9rZXl9JmZvcm1hdD1qc29uJmNhbGxiYWNrPXtjYWxsYmFja30nLFxyXG4gICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIGlzIEpTT05QLCB0aGVyZWZvcmUgd2UgbXVzdCBzZXQgaXQgdG8gcnVuIGFzIGEgc2NyaXB0XHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIGpzb24uc3RhdHVzQ29kZSA9PSAnRVJST1InXHJcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKHtlcnJvcjoganNvbi5zdGF0dXNNZXNzYWdlfSlcclxuICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5Q29kZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtYXhtaW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSB3aGljaCBkZWZpbmVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS4gT25jZSBsb2FkZWQsIHdlIG11c3RcclxuICAgICAgICAvLyBtYWtlIGFuIGFkZGl0aW9uYWwgQUpBWCBjYWxsLiBUaGVyZWZvcmUgd2UgcHJvdmlkZSBhIGBkb25lYCBjYWxsYmFjayB0aGF0IGNhbiBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHlcclxuICAgICAgICB1cmw6ICcvL2pzLm1heG1pbmQuY29tL2pzL2FwaXMvZ2VvaXAyL3YyLjEvZ2VvaXAyLmpzJyxcclxuICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUsIHNvIGl0IG11c3QgYmUgcnVuIGFzIGEgc2NyaXB0XHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUpIHtcclxuICAgICAgICAgIC8vIGlmIGV2ZXJ5dGhpbmcgd2VudCBva2F5IHRoZW4gYGdlb2lwMmAgV0lMTCBiZSBkZWZpbmVkXHJcbiAgICAgICAgICBpZiAoIXdpbmRvdy5nZW9pcDIpIHtcclxuICAgICAgICAgICAgZG9uZShcclxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAnVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQuIFRoZSBkb3dubG9hZGVkIHNjcmlwdCBzaG91bGQgaGF2ZSBleHBvcnRlZCBgZ2VvaXAyYCB0byB0aGUgZ2xvYmFsIHNjb3BlJ1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBnZW9pcDIuY291bnRyeShcclxuICAgICAgICAgICAgZnVuY3Rpb24obG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZG9uZSh7XHJcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGxvY2F0aW9uLmNvdW50cnkuaXNvX2NvZGVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgLy8gV2UgY2FuJ3QgcmV0dXJuIGFueXRoaW5nLCBiZWNhdXNlIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIHNlY29uZCBBSkFYIGNhbGwgdG8gcmV0dXJuLlxyXG4gICAgICAgICAgLy8gVGhlbiB3ZSBjYW4gJ2NvbXBsZXRlJyB0aGUgc2VydmljZSBieSBwYXNzaW5nIGRhdGEgb3IgYW4gZXJyb3IgdG8gdGhlIGBkb25lYCBjYWxsYmFjay5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgc3RhdHVzRGVueSwgc3RhdHVzQWxsb3csIHN0YXR1c0Rpc21pc3MsIGNhdGVnb3JpZXMgfSAgZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gaWYgZmFsc2UsIHRoaXMgcHJldmVudHMgdGhlIHBvcHVwIGZyb20gc2hvd2luZyAodXNlZnVsIGZvciBnaXZpbmcgdG8gY29udHJvbCB0byBhbm90aGVyIHBpZWNlIG9mIGNvZGUpXHJcbiAgZW5hYmxlZDogdHJ1ZSxcclxuXHJcbiAgLy8gb3B0aW9uYWwgKGV4cGVjdGluZyBhIEhUTUwgZWxlbWVudCkgaWYgcGFzc2VkLCB0aGUgcG9wdXAgaXMgYXBwZW5kZWQgdG8gdGhpcyBlbGVtZW50LiBkZWZhdWx0IGlzIGBkb2N1bWVudC5ib2R5YFxyXG4gIGNvbnRhaW5lcjogbnVsbCxcclxuXHJcbiAgLy8gZGVmYXVsdHMgY29va2llIG9wdGlvbnMgLSBpdCBpcyBSRUNPTU1FTkRFRCB0byBzZXQgdGhlc2UgdmFsdWVzIHRvIGNvcnJlc3BvbmQgd2l0aCB5b3VyIHNlcnZlclxyXG4gIGNvb2tpZToge1xyXG4gICAgLy8gVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGlzIGNvb2tpZSAtIHlvdSBjYW4gaWdub3JlIHRoaXNcclxuICAgIG5hbWU6ICdjb29raWVjb25zZW50X3N0YXR1cycsXHJcbiAgICAvLyBUaGlzIGlzIHRoZSB1cmwgcGF0aCB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBhdCB0aGlzIGxvY2F0aW9uXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICAvLyBUaGlzIGlzIHRoZSBkb21haW4gdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgb24gdGhpcyBkb21haW4uXHJcbiAgICAvLyAgLSBHdWlkZSB0byBjb29raWUgZG9tYWlucyAtIGh0dHBzOi8vd3d3Lm14c2FzaGEuZXUvYmxvZy8yMDE0LzAzLzA0L2RlZmluaXRpdmUtZ3VpZGUtdG8tY29va2llLWRvbWFpbnMvXHJcbiAgICBkb21haW46IGRvY3VtZW50LmRvbWFpbixcclxuICAgIC8vIFRoZSBjb29raWVzIGV4cGlyZSBkYXRlLCBzcGVjaWZpZWQgaW4gZGF5cyAoc3BlY2lmeSAtMSBmb3Igbm8gZXhwaXJ5KVxyXG4gICAgZXhwaXJ5RGF5czogMzY1LFxyXG4gICAgLy8gSWYgdHJ1ZSB0aGUgY29va2llIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBzZWN1cmUgZmxhZy4gU2VjdXJlIGNvb2tpZXMgd2lsbCBvbmx5IGJlIHRyYW5zbWl0dGVkIHZpYSBIVFRQUy5cclxuICAgIHNlY3VyZTogZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonXHJcbiAgfSxcclxuXHJcbiAgLy8gZWFjaCBpdGVtIGRlZmluZXMgdGhlIGlubmVyIHRleHQgZm9yIHRoZSBlbGVtZW50IHRoYXQgaXQgcmVmZXJlbmNlc1xyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGhlYWRlciA6ICdDb29raWVzIHVzZWQgb24gdGhlIHdlYnNpdGUhJyxcclxuICAgIG1lc3NhZ2U6ICdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcclxuICAgIGRpc21pc3M6ICdHb3QgaXQhJyxcclxuICAgIGFsbG93ICA6ICdBbGxvdyBjb29raWVzJyxcclxuICAgIGRlbnkgICA6ICdEZWNsaW5lJyxcclxuICAgIGxpbmsgICA6ICdMZWFybiBtb3JlJyxcclxuICAgIGhyZWYgICA6ICdodHRwczovL3d3dy5jb29raWVzYW5keW91LmNvbScsXHJcbiAgICBjbG9zZSAgOiAnJiN4Mjc0YycsXHJcbiAgICB0YXJnZXQgOiAnX2JsYW5rJyxcclxuICAgIHNhdmUgICA6ICdTYXZlJyxcclxuICAgIHBvbGljeSA6ICdDb29raWUgUG9saWN5J1xyXG4gIH0sXHJcblxyXG4gIC8vIFRoaXMgaXMgdGhlIEhUTUwgZm9yIHRoZSBlbGVtZW50cyBhYm92ZS4gVGhlIHN0cmluZyB7e2hlYWRlcn19IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgZXF1aXZhbGVudCB0ZXh0IGJlbG93LlxyXG4gIC8vIFlvdSBjYW4gcmVtb3ZlIFwie3toZWFkZXJ9fVwiIGFuZCB3cml0ZSB0aGUgY29udGVudCBkaXJlY3RseSBpbnNpZGUgdGhlIEhUTUwgaWYgeW91IHdhbnQuXHJcbiAgLy9cclxuICAvLyAgLSBBUklBIHJ1bGVzIHN1Z2dlc3QgdG8gZW5zdXJlIGNvbnRyb2xzIGFyZSB0YWJiYWJsZSAoc28gdGhlIGJyb3dzZXIgY2FuIGZpbmQgdGhlIGZpcnN0IGNvbnRyb2wpLFxyXG4gIC8vICAgIGFuZCB0byBzZXQgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdCBpbnRlcmFjdGl2ZSBjb250cm9sIChodHRwczovL3czYy5naXRodWIuaW8vdXNpbmctYXJpYS8pXHJcbiAgZWxlbWVudHM6IHtcclxuICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiY2MtaGVhZGVyXCI+e3toZWFkZXJ9fTwvc3Bhbj4mbmJzcCcsXHJcbiAgICBtZXNzYWdlOlxyXG4gICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fTwvc3Bhbj4nLFxyXG4gICAgbWVzc2FnZWxpbms6XHJcbiAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPjwvc3Bhbj4nLFxyXG4gICAgZGlzbWlzczpcclxuICAgICAgYDxhIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1idG4gY2MtJHtzdGF0dXNEaXNtaXNzfVwiPnt7ZGlzbWlzc319PC9hPmAsXHJcbiAgICBhbGxvdzpcclxuICAgICAgYDxhIGFyaWEtbGFiZWw9XCJhbGxvdyBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgIGNsYXNzPVwiY2MtYnRuIGNjLSR7c3RhdHVzQWxsb3d9XCI+e3thbGxvd319PC9hPmAsXHJcbiAgICBkZW55OlxyXG4gICAgICBgPGEgYXJpYS1sYWJlbD1cImRlbnkgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLSR7c3RhdHVzRGVueX1cIj57e2Rlbnl9fTwvYT5gLFxyXG4gICAgbGluazpcclxuICAgICAgJzxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPicsXHJcbiAgICBjbG9zZTpcclxuICAgICAgJzxzcGFuIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1jbG9zZVwiPnt7Y2xvc2V9fTwvc3Bhbj4nLFxyXG4gICAgY2F0ZWdvcmllczogJzx1bCBjbGFzcz1cImNjLWNhdGVnb3JpZXNcIj4nICtcclxuICAgICAgY2F0ZWdvcmllcy5tYXAoICggY2F0ZWdvcnksIGluZGV4ICkgPT5cclxuICAgICAgICBgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjBcIj48bGFiZWwgZm9yPVwiaWRfJHtjYXRlZ29yeS5uYW1lfVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImlkXyR7Y2F0ZWdvcnkubmFtZX1cIiBuYW1lPVwiJHtjYXRlZ29yeS5uYW1lfVwiLz4ke2NhdGVnb3J5Lm5hbWV9PC9sYWJlbD48L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mbyBmYWwgZmEtaW5mby1zcXVhcmVcIiBhcmlhLWxhYmVsPVwiJHtjYXRlZ29yeS5uYW1lfSBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiJHtpbmRleCsxfVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cclxuICAgICAgICAgICAgJHtjYXRlZ29yeS5leHBsYWluVGV4dH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+YFxyXG4gICAgICApLmpvaW4oXCJcIilcclxuICAgICAgKyAnPC91bD4nLFxyXG4gICAgc2F2ZTogYDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2Mtc2F2ZVwiPnt7c2F2ZX19PC9idXR0b24+YFxyXG4gICAgLy9jb21wbGlhbmNlOiBjb21wbGlhbmNlIGlzIGFsc28gYW4gZWxlbWVudCwgYnV0IGl0IGlzIGdlbmVyYXRlZCBieSB0aGUgYXBwbGljYXRpb24sIGRlcGVuZGluZyBvbiBgdHlwZWAgYmVsb3dcclxuICB9LFxyXG5cclxuICAvLyBUaGUgcGxhY2Vob2xkZXJzIHt7Y2xhc3Nlc319IGFuZCB7e2NoaWxkcmVufX0gYm90aCBnZXQgcmVwbGFjZWQgZHVyaW5nIGluaXRpYWxpc2F0aW9uOlxyXG4gIC8vICAtIHt7Y2xhc3Nlc319IGlzIHdoZXJlIGFkZGl0aW9uYWwgY2xhc3NlcyBnZXQgYWRkZWRcclxuICAvLyAgLSB7e2NoaWxkcmVufX0gaXMgd2hlcmUgdGhlIEhUTUwgY2hpbGRyZW4gYXJlIHBsYWNlZFxyXG4gIHdpbmRvdzpcclxuICAgICc8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWxhYmVsPVwiY29va2llY29uc2VudFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLXdpbmRvdyB7e2NsYXNzZXN9fVwiPjwhLS1nb29nbGVvZmY6IGFsbC0tPnt7Y2hpbGRyZW59fTwhLS1nb29nbGVvbjogYWxsLS0+PC9kaXY+JyxcclxuICBcclxuICBtb2RhbDogJycsXHJcblxyXG4gIC8vIFRoaXMgaXMgdGhlIGh0bWwgZm9yIHRoZSByZXZva2UgYnV0dG9uLiBUaGlzIG9ubHkgc2hvd3MgdXAgYWZ0ZXIgdGhlIHVzZXIgaGFzIHNlbGVjdGVkIHRoZWlyIGxldmVsIG9mIGNvbnNlbnRcclxuICAvLyBJdCBjYW4gYmUgZW5hYmxlZCBvZiBkaXNhYmxlZCB1c2luZyB0aGUgYHJldm9rYWJsZWAgb3B0aW9uXHJcbiAgcmV2b2tlQnRuOiAnPGRpdiBjbGFzcz1cImNjLXJldm9rZSB7e2NsYXNzZXN9fVwiPnt7cG9saWN5fX08L2Rpdj4nLFxyXG5cclxuICAvLyBkZWZpbmUgdHlwZXMgb2YgJ2NvbXBsaWFuY2UnIGhlcmUuICd7e3ZhbHVlfX0nIHN0cmluZ3MgaW4gaGVyZSBhcmUgbGlua2VkIHRvIGBlbGVtZW50c2BcclxuICBjb21wbGlhbmNlOiB7XHJcbiAgICBpbmZvOiAne3ttZXNzYWdlbGlua319PGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2VcIj57e2Rpc21pc3N9fTwvZGl2PicsXHJcbiAgICAnb3B0LWluJzpcclxuICAgICAgJ3t7bWVzc2FnZWxpbmt9fTxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGVueX19e3thbGxvd319e3tjdXN0b21pemV9fTwvZGl2PicsXHJcbiAgICAnb3B0LW91dCc6XHJcbiAgICAgICd7e21lc3NhZ2VsaW5rfX08ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7ZGVueX19PC9kaXY+JyxcclxuICAgIGNhdGVnb3JpZXM6ICd7e21lc3NhZ2V9fTxkaXYgY2xhc3M9XCJmb3JtXCI+e3tjYXRlZ29yaWVzfX17e3NhdmV9fTwvZGl2PidcclxuICB9LFxyXG5cclxuICAvLyBzZWxlY3QgeW91ciB0eXBlIG9mIHBvcHVwIGhlcmVcclxuICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXHJcblxyXG4gIC8vIGRlZmluZSBsYXlvdXQgbGF5b3V0cyBoZXJlXHJcbiAgbGF5b3V0czoge1xyXG4gICAgLy8gdGhlICdibG9jaycgbGF5b3V0IHRlbmQgdG8gYmUgZm9yIHNxdWFyZSBmbG9hdGluZyBwb3B1cHNcclxuICAgIGJhc2ljICAgICAgICAgOiAne3tjb21wbGlhbmNlfX0nLFxyXG4gICAgJ2Jhc2ljLWNsb3NlJyA6ICd7e2NvbXBsaWFuY2V9fXt7Y2xvc2V9fScsXHJcbiAgICAnYmFzaWMtaGVhZGVyJzogJ3t7aGVhZGVyfX17e2NvbXBsaWFuY2V9fSdcclxuICAgIC8vIGFkZCBhIGN1c3RvbSBsYXlvdXQgaGVyZSwgdGhlbiBhZGQgc29tZSBuZXcgY3NzIHdpdGggdGhlIGNsYXNzICcuY2MtbGF5b3V0LW15LWNvb2wtbGF5b3V0J1xyXG4gICAgLy8nbXktY29vbC1sYXlvdXQnOiAnPGRpdiBjbGFzcz1cIm15LXNwZWNpYWwtbGF5b3V0XCI+e3ttZXNzYWdlfX17e2NvbXBsaWFuY2V9fTwvZGl2Pnt7Y2xvc2V9fScsXHJcbiAgfSxcclxuXHJcbiAgLy8gZGVmYXVsdCBsYXlvdXQgKHNlZSBhYm92ZSlcclxuICBsYXlvdXQ6ICdiYXNpYycsXHJcblxyXG4gIC8vIHRoaXMgcmVmZXJzIHRvIHRoZSBwb3B1cCB3aW5kb3dzIHBvc2l0aW9uLiB3ZSBjdXJyZW50bHkgc3VwcG9ydDpcclxuICAvLyAgLSBiYW5uZXIgcG9zaXRpb25zOiB0b3AsIGJvdHRvbVxyXG4gIC8vICAtIGZsb2F0aW5nIHBvc2l0aW9uczogdG9wLWxlZnQsIHRvcC1yaWdodCwgYm90dG9tLWxlZnQsIGJvdHRvbS1yaWdodFxyXG4gIC8vXHJcbiAgLy8gYWRkcyBhIGNsYXNzIGBjYy1mbG9hdGluZ2Agb3IgYGNjLWJhbm5lcmAgd2hpY2ggaGVscHMgd2hlbiBzdHlsaW5nXHJcbiAgcG9zaXRpb246ICdib3R0b20nLCAvLyBkZWZhdWx0IHBvc2l0aW9uIGlzICdib3R0b20nXHJcblxyXG4gIC8vIEF2YWlsYWJsZSBzdHlsZXNcclxuICAvLyAgICAtYmxvY2sgKGRlZmF1bHQsIG5vIGV4dHJhIGNsYXNzZXMpXHJcbiAgLy8gICAgLWVkZ2VsZXNzXHJcbiAgLy8gICAgLWNsYXNzaWNcclxuICAvLyB1c2UgeW91ciBvd24gc3R5bGUgbmFtZSBhbmQgdXNlIGAuY2MtdGhlbWUtU1RZTEVOQU1FYCBjbGFzcyBpbiBDU1MgdG8gZWRpdC5cclxuICAvLyBOb3RlOiBzdHlsZSBcIndpcmVcIiBpcyB1c2VkIGZvciB0aGUgY29uZmlndXJhdG9yLCBidXQgaGFzIG5vIENTUyBzdHlsZXMgb2YgaXRzIG93biwgb25seSBwYWxldHRlIGlzIHVzZWQuXHJcbiAgdGhlbWU6ICdibG9jaycsXHJcblxyXG4gIC8vIFRoZSBwb3B1cCBpcyBgZml4ZWRgIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3Ugd2FudCBpdCB0byBiZSBzdGF0aWMgKGlubGluZSB3aXRoIHRoZSBwYWdlIGNvbnRlbnQpLCBzZXQgdGhpcyB0byBmYWxzZVxyXG4gIC8vIE5vdGU6IGJ5IGRlZmF1bHQsIHdlIGFuaW1hdGUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgZnJvbSAwIHRvIGZ1bGwgc2l6ZVxyXG4gIHN0YXRpYzogZmFsc2UsXHJcblxyXG4gIC8vIGlmIHlvdSB3YW50IGN1c3RvbSBjb2xvdXJzLCBwYXNzIHRoZW0gaW4gaGVyZS4gdGhpcyBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB0aGlzLlxyXG4gIC8vIGlkZWFsbHksIGFueSBjdXN0b20gY29sb3Vycy90aGVtZXMgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCwgYXMgdGhpcyBpcyBtb3JlIGVmZmljaWVudC5cclxuICAvLyAgIHtcclxuICAvLyAgICAgcG9wdXA6IHtiYWNrZ3JvdW5kOiAnIzAwMDAwMCcsIHRleHQ6ICcjZmZmJywgbGluazogJyNmZmYnfSxcclxuICAvLyAgICAgYnV0dG9uOiB7YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjZjhlNzFjJ30sXHJcbiAgLy8gICAgIGhpZ2hsaWdodDoge2JhY2tncm91bmQ6ICcjZjhlNzFjJywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjMDAwMDAwJ30sXHJcbiAgLy8gICB9XHJcbiAgLy8gYGhpZ2hsaWdodGAgaXMgb3B0aW9uYWwgYW5kIGV4dGVuZHMgYGJ1dHRvbmAuIGlmIGl0IGV4aXN0cywgaXQgd2lsbCBhcHBseSB0byB0aGUgZmlyc3QgYnV0dG9uXHJcbiAgLy8gb25seSBiYWNrZ3JvdW5kIG5lZWRzIHRvIGJlIGRlZmluZWQgZm9yIGV2ZXJ5IGVsZW1lbnQuIGlmIG5vdCBzZXQsIG90aGVyIGNvbG9ycyBjYW4gYmUgY2FsY3VsYXRlZCBmcm9tIGl0XHJcbiAgcGFsZXR0ZTogbnVsbCxcclxuXHJcbiAgLy8gU29tZSBjb3VudHJpZXMgUkVRVUlSRSB0aGF0IGEgdXNlciBjYW4gY2hhbmdlIHRoZWlyIG1pbmQuIFlvdSBjYW4gY29uZmlndXJlIHRoaXMgeW91cnNlbGYuXHJcbiAgLy8gTW9zdCBvZiB0aGUgdGltZSB0aGlzIHNob3VsZCBiZSBmYWxzZSwgYnV0IHRoZSBgY29va2llY29uc2VudC5sZWdhbGAgY2FuIGNoYW5nZSB0aGlzIHRvIGB0cnVlYCBpZiBpdCBkZXRlY3RzIHRoYXQgaXQgc2hvdWxkXHJcbiAgcmV2b2thYmxlOiBmYWxzZSxcclxuXHJcbiAgLy8gaWYgdHJ1ZSwgdGhlIHJldm9rYWJsZSBidXR0b24gd2lsbCB0cmFubGF0ZSBpbiBhbmQgb3V0XHJcbiAgYW5pbWF0ZVJldm9rYWJsZTogdHJ1ZSxcclxuXHJcbiAgLy8gdXNlZCB0byBkaXNhYmxlIGxpbmsgb24gZXhpc3RpbmcgbGF5b3V0c1xyXG4gIC8vIHJlcGxhY2VzIGVsZW1lbnQgbWVzc2FnZWxpbmsgd2l0aCBtZXNzYWdlIGFuZCByZW1vdmVzIGNvbnRlbnQgb2YgbGlua1xyXG4gIHNob3dMaW5rOiB0cnVlLFxyXG5cclxuICAvLyBzZXQgdmFsdWUgYXMgc2Nyb2xsIHJhbmdlIHRvIGVuYWJsZVxyXG4gIGRpc21pc3NPblNjcm9sbDogZmFsc2UsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBhcyB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBhdXRvZGlzbWlzcyBhZnRlciBzZXQgdGltZVxyXG4gIGRpc21pc3NPblRpbWVvdXQ6IGZhbHNlLFxyXG5cclxuICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXHJcbiAgZGlzbWlzc09uV2luZG93Q2xpY2s6IGZhbHNlLFxyXG5cclxuICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXHJcbiAgZGlzbWlzc09uTGlua0NsaWNrOiBmYWxzZSxcclxuXHJcbiAgLy8gc2V0IHZhbHVlIGFzIGtleXMgYXJlIHByZXNzZWQsICggYWxsb3dLZXlDb2RlID0gMTMsIGRlbnlLZXlDb2RlID0gMjcgKVxyXG4gIGRpc21pc3NPbktleVByZXNzOiBmYWxzZSxcclxuXHJcbiAgLy8gSWYgYGRpc21pc3NPbldpbmRvd0NsaWNrYCBpcyB0cnVlLCB3ZSBjYW4gY2xpY2sgb24gJ3Jldm9rZScgYW5kIHdlJ2xsIHN0aWxsIGRpc21pc3MgdGhlIGJhbm5lciwgc28gd2UgbmVlZCBleGNlcHRpb25zLlxyXG4gIC8vIHNob3VsZCBiZSBhbiBhcnJheSBvZiBjbGFzcyBuYW1lcyAobm90IENTUyBzZWxlY3RvcnMpXHJcbiAgaWdub3JlQ2xpY2tzRnJvbTogWydjYy1yZXZva2UnLCAnY2MtYnRuJywgJ2NjLWxpbmsnXSwgLy8gYWxyZWFkeSBpbmNsdWRlcyB0aGUgcmV2b2tlIGJ1dHRvbiBhbmQgdGhlIGJhbm5lciBpdHNlbGZcclxuXHJcbiAgLy8gVGhlIGFwcGxpY2F0aW9uIGF1dG9tYXRpY2FsbHkgZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHVwIHNob3VsZCBvcGVuLlxyXG4gIC8vIFNldCB0aGlzIHRvIGZhbHNlIHRvIHByZXZlbnQgdGhpcyBmcm9tIGhhcHBlbmluZyBhbmQgdG8gYWxsb3cgeW91IHRvIGNvbnRyb2wgdGhlIGJlaGF2aW91ciB5b3Vyc2VsZlxyXG4gIGF1dG9PcGVuOiB0cnVlLFxyXG5cclxuICAvLyBCeSBkZWZhdWx0IHRoZSBjcmVhdGVkIEhUTUwgaXMgYXV0b21hdGljYWxseSBhcHBlbmRlZCB0byB0aGUgY29udGFpbmVyICh3aGljaCBkZWZhdWx0cyB0byA8Ym9keT4pLiBZb3UgY2FuIHByZXZlbnQgdGhpcyBiZWhhdmlvdXJcclxuICAvLyBieSBzZXR0aW5nIHRoaXMgdG8gZmFsc2UsIGJ1dCBpZiB5b3UgZG8sIHlvdSBtdXN0IGF0dGFjaCB0aGUgYGVsZW1lbnRgIHlvdXJzZWxmLCB3aGljaCBpcyBhIHB1YmxpYyBwcm9wZXJ0eSBvZiB0aGUgcG9wdXAgaW5zdGFuY2U6XHJcbiAgLy9cclxuICAvLyAgICAgY29uc3QgaW5zdGFuY2UgPSBjb29raWVjb25zZW50LmZhY3Rvcnkob3B0aW9ucylcclxuICAvLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnN0YW5jZS5lbGVtZW50KVxyXG4gIC8vXHJcbiAgYXV0b0F0dGFjaDogdHJ1ZSxcclxuXHJcbiAgLy8gc2V0IHZhbHVlIGlmIGZsb2F0aW5nIGxheW91dCBzaG91bGQgYmUgZm9yY2VkIGZvciBtb2JpbGUgZGV2aWNlc1xyXG4gIG1vYmlsZUZvcmNlRmxvYXQ6IGZhbHNlLFxyXG5cclxuICAvLyBzaW1wbGUgd2hpdGVsaXN0L2JsYWNrbGlzdCBmb3IgcGFnZXMuIHNwZWNpZnkgcGFnZSBieTpcclxuICAvLyAgIC0gdXNpbmcgYSBzdHJpbmcgOiAnL2luZGV4Lmh0bWwnICAgICAgICAgICAobWF0Y2hlcyAnL2luZGV4Lmh0bWwnIGV4YWN0bHkpIE9SXHJcbiAgLy8gICAtIHVzaW5nIFJlZ0V4cCAgIDogL1xcL3BhZ2VfW1xcZF0rXFwuaHRtbC8gICAgKG1hdGNoZWQgJy9wYWdlXzEuaHRtbCcgYW5kICcvcGFnZV8yLmh0bWwnIGV0YylcclxuICB3aGl0ZWxpc3RQYWdlOiBbXSxcclxuICBibGFja2xpc3RQYWdlOiBbXSxcclxuXHJcbiAgLy8gSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIGl0IGlzIHVzZWQgYXMgdGhlIGlubmVyIGh0bWwgaW5zdGVhZCBvZiBsYXlvdXQuIFRoaXMgYWxsb3dzIGZvciB1bHRpbWF0ZSBjdXN0b21pc2F0aW9uLlxyXG4gIC8vIEJlIHN1cmUgdG8gdXNlIHRoZSBjbGFzc2VzIGBjYy1idG5gIGFuZCBgY2MtQUxMT1dgLCBgY2MtREVOWWAgb3IgYGNjLURJU01JU1NgLiBUaGV5IGVuYWJsZSB0aGUgYXBwIHRvIHJlZ2lzdGVyIGNsaWNrXHJcbiAgLy8gaGFuZGxlcnMuIFlvdSBjYW4gdXNlIG90aGVyIHByZS1leGlzdGluZyBjbGFzc2VzIHRvby4gU2VlIGBzcmMvc3R5bGVzYCBmb2xkZXIuXHJcbiAgb3ZlcnJpZGVIVE1MOiBudWxsXHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNjcmlwdCA9ICggdXJsLCBjYWxsYmFjaywgdGltZW91dCApID0+IHtcclxuICBsZXQgdGltZW91dElkeFxyXG4gIGNvbnN0IHNjcmlwdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcblxyXG4gIHNjcmlwdFRhZy50eXBlID0gJ3RleHQvJyArICh1cmwudHlwZSB8fCAnamF2YXNjcmlwdCcpXHJcbiAgc2NyaXB0VGFnLnNyYyA9IHVybC5zcmMgfHwgdXJsXHJcbiAgc2NyaXB0VGFnLmFzeW5jID0gZmFsc2VcclxuXHJcbiAgc2NyaXB0VGFnLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyB0aGlzIGNvZGUgaGFuZGxlcyB0d28gc2NlbmFyaW9zLCB3aGV0aGVyIGNhbGxlZCBieSBvbmxvYWQgb3Igb25yZWFkeXN0YXRlY2hhbmdlXHJcbiAgICBjb25zdCBzdGF0ZSA9IHNjcmlwdFRhZy5yZWFkeVN0YXRlXHJcblxyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZHgpXHJcblxyXG4gICAgaWYgKCFjYWxsYmFjay5kb25lICYmICghc3RhdGUgfHwgL2xvYWRlZHxjb21wbGV0ZS8udGVzdChzdGF0ZSkpKSB7XHJcbiAgICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlXHJcbiAgICAgIGNhbGxiYWNrKClcclxuICAgICAgc2NyaXB0VGFnLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHNjcmlwdFRhZy5vbmxvYWQgPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdFRhZylcclxuXHJcbiAgLy8gWW91IGNhbid0IGNhdGNoIEpTT05QIEVycm9ycywgYmVjYXVzZSBpdCdzIGhhbmRsZWQgYnkgdGhlIHNjcmlwdCB0YWdcclxuICAvLyBvbmUgd2F5IGlzIHRvIHVzZSBhIHRpbWVvdXRcclxuICB0aW1lb3V0SWR4ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlXHJcbiAgICBjYWxsYmFjaygpXHJcbiAgICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gc2NyaXB0VGFnLm9ubG9hZCA9IG51bGxcclxuICB9LCB0aW1lb3V0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUFzeW5jUmVxdWVzdCA9ICggdXJsLCBvbkNvbXBsZXRlLCB0aW1lb3V0LCBwb3N0RGF0YSwgcmVxdWVzdEhlYWRlcnMgKSA9PiB7XHJcbiAgY29uc3QgeGhyID0gbmV3ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgd2luZG93LkFjdGl2ZVhPYmplY3QpKFxyXG4gICAgJ01TWE1MMi5YTUxIVFRQLjMuMCdcclxuICApXHJcblxyXG4gIHhoci5vcGVuKHBvc3REYXRhID8gJ1BPU1QnIDogJ0dFVCcsIHVybCwgMSlcclxuXHJcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVxdWVzdEhlYWRlcnMpKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlcXVlc3RIZWFkZXJzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICBjb25zdCBzcGxpdCA9IHJlcXVlc3RIZWFkZXJzW2ldLnNwbGl0KCc6JywgMilcclxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXHJcbiAgICAgICAgc3BsaXRbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLFxyXG4gICAgICAgIHNwbGl0WzFdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9uQ29tcGxldGUgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPiAzKSB7XHJcbiAgICAgICAgb25Db21wbGV0ZSh4aHIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHhoci5zZW5kKHBvc3REYXRhKVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBuYW1lID0+IHtcclxuICBjb25zdCB2YWx1ZSA9ICcgJyArIGRvY3VtZW50LmNvb2tpZVxyXG4gIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJyAnICsgbmFtZSArICc9JylcclxuICByZXR1cm4gcGFydHMubGVuZ3RoIDwgMlxyXG4gICAgPyB1bmRlZmluZWRcclxuICAgIDogcGFydHNcclxuICAgICAgICAucG9wKClcclxuICAgICAgICAuc3BsaXQoJzsnKVxyXG4gICAgICAgIC5zaGlmdCgpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSBmdW5jdGlvbiAoIG5hbWUsIHZhbHVlLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSApIHtcclxuICBjb25zdCBleGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgZXhkYXRlLnNldEhvdXJzKGV4ZGF0ZS5nZXRIb3VycygpICsgKCh0eXBlb2YgZXhwaXJ5RGF5cyAhPT0gXCJudW1iZXJcIiAgPyAzNjUgOiBleHBpcnlEYXlzICkgKiAyNCkpXHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICtcclxuICAgICAgICAgICAgICAgICAgICAnO2V4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpICtcclxuICAgICAgICAgICAgICAgICAgICAnO3BhdGg9JyArIChwYXRoIHx8ICcvJykgK1xyXG4gICAgICAgICAgICAgICAgICAgICggZG9tYWluID8gJztkb21haW49JyArIGRvbWFpbiA6ICcnICkgK1xyXG4gICAgICAgICAgICAgICAgICAgICggc2VjdXJlID8gJztzZWN1cmUnIDogJycgKSArXHJcbiAgICAgICAgICAgICAgICAgICAgJztTYW1lU2l0ZT1TdHJpY3QnO1xyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCB7IGdldENvbnRyYXN0LCBnZXRIb3ZlckNvbG9yIH0gZnJvbSAnLi9zdHlsZSdcclxuXHJcbmV4cG9ydCBjb25zdCB0cmF2ZXJzZURPTVBhdGggPSAoIGVsZW0sIGNsYXNzTmFtZSApID0+XHJcbiAgIWVsZW0gfHwgIWVsZW0ucGFyZW50Tm9kZVxyXG4gID8gbnVsbCA6IGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcclxuICA/IGVsZW0gOiB0cmF2ZXJzZURPTVBhdGgoZWxlbS5wYXJlbnROb2RlLCBjbGFzc05hbWUpXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tU3R5bGVzaGVldCA9IChpZCwgcGFsZXR0ZSwgcHJlZml4KSA9PiB7XHJcbiAgY29uc3QgY29sb3JTdHlsZXMgPSB7fVxyXG4gIGNvbnN0IHsgcG9wdXAsIGJ1dHRvbiwgaGlnaGxpZ2h0LCBzYXZlQnV0dG9uIH0gPSBwYWxldHRlXHJcblxyXG4gIC8vIG5lZWRzIGJhY2tncm91bmQgY29sb3VyLCB0ZXh0IGFuZCBsaW5rIHdpbGwgYmUgc2V0IHRvIGJsYWNrL3doaXRlIGlmIG5vdCBzcGVjaWZpZWRcclxuICBpZiAocG9wdXApIHtcclxuICAgICAgLy8gYXNzdW1lcyBwb3B1cC5iYWNrZ3JvdW5kIGlzIHNldFxyXG4gICAgICBwb3B1cC50ZXh0ID0gcG9wdXAudGV4dCA/IHBvcHVwLnRleHQgOiBnZXRDb250cmFzdChwb3B1cC5iYWNrZ3JvdW5kKVxyXG4gICAgICBwb3B1cC5saW5rID0gcG9wdXAubGluayA/IHBvcHVwLmxpbmsgOiBwb3B1cC50ZXh0XHJcbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLXRvb2x0aXAsICcgKyBwcmVmaXggKyAnIC5jYy10b29sdGlwOmFmdGVyJ10gPSBbXHJcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxyXG4gICAgICBdXHJcbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2Mtd2luZG93J10gPSBbXHJcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxyXG4gICAgICBdXHJcbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2MtcmV2b2tlJ10gPSBbXHJcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxyXG4gICAgICBdXHJcbiAgICAgIGNvbG9yU3R5bGVzW1xyXG4gICAgICAgICAgcHJlZml4ICsgJyAuY2MtbGluaywnICsgcHJlZml4ICsgJyAuY2MtbGluazphY3RpdmUsJyArIHByZWZpeCArICcgLmNjLWxpbms6dmlzaXRlZCdcclxuICAgICAgXSA9IFsnY29sb3I6ICcgKyBwb3B1cC5saW5rXVxyXG5cclxuICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgICAgLy8gYXNzdW1lcyBidXR0b24uYmFja2dyb3VuZCBpcyBzZXRcclxuICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uLnRleHQgPyBidXR0b24udGV4dCA6IGdldENvbnRyYXN0KGJ1dHRvbi5iYWNrZ3JvdW5kKTtcclxuICAgICAgICAgIGJ1dHRvbi5ib3JkZXIgPSBidXR0b24uYm9yZGVyID8gYnV0dG9uLmJvcmRlciA6ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXSA9IFtcclxuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBidXR0b24udGV4dCxcclxuICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgYnV0dG9uLmJvcmRlcixcclxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGJ1dHRvbi5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgXVxyXG5cclxuICAgICAgICAgIGlmIChidXR0b24ucGFkZGluZykge1xyXG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddLnB1c2goJ3BhZGRpbmc6ICcgKyBidXR0b24ucGFkZGluZyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGJ1dHRvbi5iYWNrZ3JvdW5kICE9ICd0cmFuc3BhcmVudCcpIHtcclxuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG46aG92ZXIsICcgKyBwcmVmaXggKyAnIC5jYy1idG46Zm9jdXMnXSA9IFtcclxuICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyAoYnV0dG9uLmhvdmVyIHx8IGdldEhvdmVyQ29sb3IoYnV0dG9uLmJhY2tncm91bmQpKSxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xyXG4gICAgICAgICAgICAgIC8vYXNzdW1lcyBoaWdobGlnaHQuYmFja2dyb3VuZCBpcyBzZXRcclxuICAgICAgICAgICAgICBoaWdobGlnaHQudGV4dCA9IGhpZ2hsaWdodC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgID8gaGlnaGxpZ2h0LnRleHRcclxuICAgICAgICAgICAgICAgICAgOiBnZXRDb250cmFzdChoaWdobGlnaHQuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0LmJvcmRlciA9IGhpZ2hsaWdodC5ib3JkZXIgPyBoaWdobGlnaHQuYm9yZGVyIDogJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xyXG4gICAgICAgICAgICAgICAgICAnY29sb3I6ICcgKyBoaWdobGlnaHQudGV4dCxcclxuICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGhpZ2hsaWdodC5ib3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBzZXRzIGhpZ2hsaWdodCB0ZXh0IGNvbG9yIHRvIHBvcHVwIHRleHQuIGJhY2tncm91bmQgYW5kIGJvcmRlciBhcmUgdHJhbnNwYXJlbnQgYnkgZGVmYXVsdC5cclxuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xyXG4gICAgICAgICAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNhdmVCdXR0b24pIHtcclxuICAgICAgICAgIGNvbG9yU3R5bGVzW2Ake3ByZWZpeH0gLmNjLWJ0bi5jYy1zYXZlYF0gPSBbXHJcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgc2F2ZUJ1dHRvbi50ZXh0LFxyXG4gICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBzYXZlQnV0dG9uLmJvcmRlcixcclxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHNhdmVCdXR0b24uYmFja2dyb3VuZCxcclxuICAgICAgICAgIF1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdGhpcyB3aWxsIGJlIGludGVycHJldHRlZCBhcyBDU1MuIHRoZSBrZXkgaXMgdGhlIHNlbGVjdG9yLCBhbmQgZWFjaCBhcnJheSBlbGVtZW50IGlzIGEgcnVsZVxyXG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG4gIHN0eWxlLmlkID0gaWRcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzdHlsZSApXHJcbiAgT2JqZWN0LmVudHJpZXMoIGNvbG9yU3R5bGVzICkuZm9yRWFjaCggKCBbIHByb3AsIHZhbHVlIF0sIGluZGV4ICkgPT5cclxuICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUoIGAke3Byb3B9eyR7dmFsdWUuam9pbignOycpfX1gLCBpbmRleCApXHJcbiAgKVxyXG4gIHJldHVybiBzdHlsZVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCAqIGFzIGNvb2tpZSBmcm9tIFwiLi9jb29raWVcIlxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gY29va2llLmdldENvb2tpZVxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gY29va2llLnNldENvb2tpZVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZVN0cmluZyA9ICggc3RyLCBjYWxsYmFjayApID0+XHJcbiAgc3RyLnJlcGxhY2UoIC97eyhbYS16XVthLXowLTlcXC1fXSopfX0vZ2kgLCAoIG1hdGNoZXMsIHJlcGxhY2VkICkgPT4gY2FsbGJhY2soIHJlcGxhY2VkICkgfHwgJycpXHJcblxyXG4vLyBvbmx5IHVzZWQgZm9yIHRocm90dGxpbmcgdGhlICdtb3VzZW1vdmUnIGV2ZW50ICh1c2VkIGZvciBhbmltYXRpbmcgdGhlIHJldm9rZSBidXR0b24gd2hlbiBgYW5pbWF0ZVJldm9rYWJsZWAgaXMgdHJ1ZSlcclxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGNhbGxiYWNrLCBsaW1pdCkgPT4ge1xyXG4gIGxldCB3YWl0ID0gZmFsc2VcclxuICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXdhaXQpIHtcclxuICAgICAgY2FsbGJhY2soLi4uYXJndW1lbnRzKVxyXG4gICAgICB3YWl0ID0gdHJ1ZVxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHdhaXQgPSBmYWxzZVxyXG4gICAgICB9LCBsaW1pdClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIG9ubHkgdXNlZCBmb3IgaGFzaGluZyBqc29uIG9iamVjdHMgKHVzZWQgZm9yIGhhc2ggbWFwcGluZyBwYWxldHRlIG9iamVjdHMsIHVzZWQgd2hlbiBjdXN0b20gY29sb3VycyBhcmUgcGFzc2VkIHRocm91Z2ggSmF2YVNjcmlwdClcclxuZXhwb3J0IGNvbnN0IGhhc2ggPSBzdHIgPT4ge1xyXG4gIGxldCBoYXNoTnVtID0gMCxcclxuICAgIGkgPSAwLFxyXG4gICAgY2hyLFxyXG4gICAgbGVuID0gc3RyLmxlbmd0aFxyXG4gIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaE51bVxyXG4gIGZvciAoIGk7IGkgPCBsZW47ICsraSApIHtcclxuICAgIGNociA9IHN0ci5jaGFyQ29kZUF0KCBpIClcclxuICAgIGhhc2hOdW0gPSAoIGhhc2hOdW0gPDwgNSApIC0gaGFzaE51bSArIGNoclxyXG4gICAgaGFzaE51bSB8PSAwXHJcbiAgfVxyXG4gIHJldHVybiBoYXNoTnVtXHJcbn1cclxuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSBcIi4vc3R5bGVcIlxyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGV4ID0gc3R5bGUubm9ybWFsaXplSGV4XHJcbmV4cG9ydCBjb25zdCBnZXRDb250cmFzdCA9IHN0eWxlLmdldENvbnRyYXN0XHJcbmV4cG9ydCBjb25zdCBnZXRMdW1pbmFuY2UgPSBzdHlsZS5nZXRMdW1pbmFuY2VcclxuZXhwb3J0IGNvbnN0IGdldEhvdmVyQ29sb3IgPXN0eWxlLmdldEhvdmVyQ29sb3JcclxuXHJcbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9kb21cIlxyXG5leHBvcnQgY29uc3QgdHJhdmVyc2VET01QYXRoID0gZG9tLnRyYXZlcnNlRE9NUGF0aFxyXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tU3R5bGVzaGVldCA9IGRvbS5hZGRDdXN0b21TdHlsZXNoZWV0XHJcblxyXG5pbXBvcnQgKiBhcyB2YWxpZGF0aW9uIGZyb20gXCIuL3ZhbGlkYXRpb25cIlxyXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0YXR1cyA9IHZhbGlkYXRpb24uaXNWYWxpZFN0YXR1c1xyXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9IHZhbGlkYXRpb24uaXNQbGFpbk9iamVjdFxyXG5leHBvcnQgY29uc3QgaXNNb2JpbGUgPSB2YWxpZGF0aW9uLmlzTW9iaWxlXHJcblxyXG5pbXBvcnQgKiBhcyBhc3luY0ZucyBmcm9tIFwiLi9hc3luY1wiXHJcbmV4cG9ydCBjb25zdCBnZXRTY3JpcHQgPSBhc3luY0Zucy5nZXRTY3JpcHRcclxuZXhwb3J0IGNvbnN0IG1ha2VBc3luY1JlcXVlc3QgPSBhc3luY0Zucy5tYWtlQXN5bmNSZXF1ZXN0XHJcblxyXG5jb25zdCBsb29wUHJvcGVydGllcyA9IG92ZXJ3cml0ZXMgPT4gKG9iaiwgW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgaWYgKCB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpICkge1xyXG4gICAgaWYgKCBvdmVyd3JpdGVzWyBrZXkgXSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKG92ZXJ3cml0ZXNbIGtleSBdIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgIG9ialsga2V5IF0gPSBPYmplY3QuZW50cmllcyh2YWx1ZSkucmVkdWNlKGxvb3BQcm9wZXJ0aWVzKG92ZXJ3cml0ZXNba2V5XSksIHt9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqWyBrZXkgXSA9IHZhbHVlXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICggb3ZlcndyaXRlcy5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgKSB7XHJcbiAgICAgIG9ialsga2V5IF0gPSBvdmVyd3JpdGVzWyBrZXkgXVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICBvYmpbIGtleSBdID0gdmFsdWUgXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlT3B0aW9ucyA9ICggZGVmYXVsdHMsIG92ZXJ3cml0ZXMgKSA9PlxyXG4gIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5yZWR1Y2UobG9vcFByb3BlcnRpZXMob3ZlcndyaXRlcyksIHt9KVxyXG4iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhleCA9IGhleCA9PlxyXG4gIGhleFswXSA9PSAnIydcclxuICAgID8gaGV4LnN1YnN0cigxKSA6IGhleC5sZW5ndGggPT0gM1xyXG4gICAgPyBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl0gOiBoZXhcclxuXHJcbi8vIHVzZWQgdG8gZ2V0IHRleHQgY29sb3JzIGlmIG5vdCBzZXRcclxuZXhwb3J0IGNvbnN0IGdldENvbnRyYXN0ID0gaGV4ID0+IHtcclxuICBoZXggPSBub3JtYWxpemVIZXgoaGV4KVxyXG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNilcclxuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpXHJcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHIoNCwgMiksIDE2KVxyXG4gIGNvbnN0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMFxyXG4gIHJldHVybiB5aXEgPj0gMTI4ID8gJyMwMDAnIDogJyNmZmYnXHJcbn1cclxuXHJcbi8vIHVzZWQgdG8gY2hhbmdlIGNvbG9yIG9uIGhpZ2hsaWdodFxyXG5leHBvcnQgY29uc3QgZ2V0THVtaW5hbmNlID0gaGV4ID0+IHtcclxuICBjb25zdCBudW0gPSBwYXJzZUludChub3JtYWxpemVIZXgoaGV4KSwgMTYpLFxyXG4gICAgYW10ID0gMzgsXHJcbiAgICBSID0gKG51bSA+PiAxNikgKyBhbXQsXHJcbiAgICBCID0gKChudW0gPj4gOCkgJiAweDAwZmYpICsgYW10LFxyXG4gICAgRyA9IChudW0gJiAweDAwMDBmZikgKyBhbXRcclxuICAgIHJldHVybiAnIycgKyAoXHJcbiAgICAweDEwMDAwMDAgK1xyXG4gICAgKFIgPCAyNTUgPyAoUiA8IDEgPyAwIDogUikgOiAyNTUpICogMHgxMDAwMCArXHJcbiAgICAoQiA8IDI1NSA/IChCIDwgMSA/IDAgOiBCKSA6IDI1NSkgKiAweDEwMCArXHJcbiAgICAoRyA8IDI1NSA/IChHIDwgMSA/IDAgOiBHKSA6IDI1NSlcclxuICApXHJcbiAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAuc2xpY2UoMSlcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0SG92ZXJDb2xvciA9IGhleCA9PiB7XHJcbiAgaGV4ID0gbm9ybWFsaXplSGV4KCBoZXggKVxyXG4gIC8vIGZvciBibGFjayBidXR0b25zXHJcbiAgcmV0dXJuIGhleCA9PT0gJzAwMDAwMCcgPyAnIzIyMicgOiBnZXRMdW1pbmFuY2UoIGhleCApXHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgc3RhdHVzZXMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBzdGF0dXMgaXMgaW4gdGhlIGNvbnN0YW50cyBsaXN0XHJcbiAqIEBwYXJhbSB7IHN0cmluZyB9IHN0YXR1cyAtIFN0YXR1cyBTdHJpbmcgdG9cclxuICogQHJldHVybiB7IGJvb2xlYW4gfSAtIGlmIHN0YXR1cyBpcyB2YWxpZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRTdGF0dXMgPSBzdGF0dXMgPT4gc3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID49IDBcclxuXHJcbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9ICgpID0+XHJcbiAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50IClcclxuXHJcbi8vIFRoZSBjb2RlIFwidHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsXCIgYWxsb3dzIEFycmF5IG9iamVjdHNcclxuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSBvYmogPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==