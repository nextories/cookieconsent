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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/styles/main.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9998; }\n\n.cc-revoke {\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalizes the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n.form {\n  display: flex;\n  margin: 16px; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0;\n    padding: 0 10px; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      text-transform: uppercase;\n      display: inline-block; }\n\n.cc-categories {\n  display: inline-flex;\n  padding: 0;\n  margin: 0; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-right: none;\n    outline: none;\n    text-transform: capitalize; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      height: 18px;\n      width: 18px;\n      margin-bottom: 5px;\n      margin-right: 5px;\n      display: block;\n      cursor: pointer; }\n    .cc-categories .cc-btn label {\n      display: flex;\n      margin: 0;\n      align-items: center;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 10px; }\n  .cc-categories .cc-info {\n    font-size: 1.0em;\n    border-left: none;\n    border-right: 2px solid lightgrey;\n    padding: 4px; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 14px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: calc(100% - 32px);\n    max-width: 350px;\n    flex-direction: column; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


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


const statuses = ["DENY", "ALLOW", "DISMISS"];
const statusDeny = "DENY";
const statusAllow = "ALLOW";
const statusDismiss = "DISMISS";
const categories = [{
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);




const emitter = new events__WEBPACK_IMPORTED_MODULE_1___default.a();
class Base {
  constructor(defaultOptions = {}, options = {}) {
    this.options = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"])(defaultOptions, options);
    this.on = emitter.on.bind(emitter);
    this.emit = emitter.emit.bind(emitter);
  }

}

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
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _Legal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Legal */ "./src/models/Legal.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Location */ "./src/models/Location.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Popup */ "./src/models/Popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // This function initializes the app by combining the use of the Popup, Locator and Law modules
// You can string together these three modules yourself however you want, by writing a new function.

class CookieConsent extends _Base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(options = {}) {
    super(options);
    const answers = _constants__WEBPACK_IMPORTED_MODULE_5__["categories"].map(category => {
      const cookieName = this.options.cookie && this.options.cookie.name ? this.options.cookie.name : 'cookieconsent_status_';
      const answer = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getCookie"])(cookieName + category.name);
      return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isValidStatus"])(answer) ? {
        [category.name]: answer
      } : undefined;
    }).filter(obj => obj ? obj[Object.keys(obj)[0]] : false); // if they have already answered

    if (answers.length > 0) {
      this.initializationComplete({
        answers
      });
    } else if (this.options.legal && this.options.legal.countryCode) {
      this.initializationComplete({
        code: this.options.legal.countryCode
      });
    } else if (this.options.location) {
      new _Location__WEBPACK_IMPORTED_MODULE_3__["default"](this.options.location).locate(this.initializationComplete.bind(this), this.initializationError.bind(this));
    } else {
      this.initializationComplete({});
    }
  }

  initializationComplete(result) {
    if (result.code) {
      this.options = new _Legal__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.legal).applyLaw(this.options, result.code);
    }

    const initialData = result.answers && result.answers.reduce((obj, val) => _objectSpread({}, obj, {}, val));
    this.popup = new _Popup__WEBPACK_IMPORTED_MODULE_4__["default"](this.options, initialData);
    setTimeout(() => this.emit("initialized", this.popup, initialData), 0);
  }

  initializationError(error) {
    setTimeout(() => this.emit("error", error, new _Popup__WEBPACK_IMPORTED_MODULE_4__["default"](this.options)), 0);
  }

  getCountryLaws(countryCode) {
    return new _Legal__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.legal).get(countryCode);
  }

  isOpen() {
    return this.popup.isOpen();
  }

  close() {
    return this.popup.close(), this;
  }

  revokeChoice() {
    return this.popup.revokeChoice(), this;
  }

  open() {
    return this.popup.open(), this;
  }

  toggleRevokeButton(bool) {
    return this.popup.toggleRevokeButton(bool), this;
  }

  setStatuses(status) {
    return this.popup.setStatuses(status), this;
  }

  clearStatuses() {
    return this.popup.clearStatuses(), this;
  }

  destroy() {
    return this.popup.destroy(), this;
  }

}
_constants__WEBPACK_IMPORTED_MODULE_5__["statuses"].reduce((obj, status) => (Object.defineProperty(CookieConsent, status, {
  get: function () {
    return status;
  },
  set: function () {},
  enumerable: false,
  writeable: false,
  configurable: false
}), obj), CookieConsent);

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
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/legal */ "./src/options/legal.js");




class Legal extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(_options_legal__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  get(countryCode) {
    return {
      hasLaw: this.options.hasLaw.indexOf(countryCode) >= 0,
      revokable: this.options.revokable.indexOf(countryCode) >= 0,
      explicitAction: this.options.explicitAction.indexOf(countryCode) >= 0
    };
  }

  applyLaw(options, countryCode) {
    const country = this.get(countryCode);

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

}

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
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/location */ "./src/options/location.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




 // An object containing all the location services we have already set up.
// When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
// When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.
// When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
// cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
// with the data (or Error), and `cookieconsent.locate` will take care of the rest

class Location extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(_options_location__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.currentServiceIndex = -1; // the index (in options) of the service we're currently using
  }

  getNextService() {
    let service;

    do {
      service = this.getServiceByIdx(++this.currentServiceIndex);
    } while (this.currentServiceIndex < this.options.services.length && !service);

    return service;
  }

  getServiceByIdx(idx) {
    // This can either be the name of a default locationService, or a function.
    const serviceOption = this.options.services[idx]; // If it's a string, use one of the location services.

    if (typeof serviceOption === 'function') {
      const dynamicOpts = serviceOption();
      return dynamicOpts.name ? Object.assign({}, dynamicOpts, this.options.serviceDefinitions[dynamicOpts.name](dynamicOpts)) : dynamicOpts;
    } // If it's a string, use one of the location services.


    if (typeof serviceOption === 'string') {
      return this.options.serviceDefinitions[serviceOption]();
    } // If it's an object, assume {name: 'ipinfo', ...otherOptions}
    // Allows user to pass in API keys etc.


    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(serviceOption)) {
      return this.options.serviceDefinitions[serviceOption.name](serviceOption);
    }

    return null;
  } // This runs the service located at index `currentServiceIndex`.
  // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully


  locate(complete, error) {
    const service = this.getNextService();

    if (!service) {
      error(new Error('No services to run'));
      return;
    }

    this.callbackComplete = complete;
    this.callbackError = error;
    this.runService(service, this.runNextServiceOnError.bind(this));
  } // Potentially adds a callback to a url for jsonp.


  setupUrl(service) {
    const serviceOpts = this.getCurrentServiceOpts();
    return service.url.replace(/\{(.*?)\}/g, function (_, param) {
      if (param === 'callback') {
        const tempName = 'callback' + Date.now();

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


  runService(service, complete) {
    // basic check to ensure it resembles a `service`
    if (!service || !service.url || !service.callback) {
      return;
    } // we call either `getScript` or `makeAsyncRequest` depending on the type of resource


    const requestFunction = service.isScript ? _utils__WEBPACK_IMPORTED_MODULE_2__["getScript"] : _utils__WEBPACK_IMPORTED_MODULE_2__["makeAsyncRequest"]; // both functions have similar signatures so we can pass the same arguments to both

    requestFunction(this.setupUrl(service), xhr => {
      // if `!xhr`, then `getScript` function was used, so there is no response text
      let responseText = xhr ? xhr.responseText : ''; // if the resource is a script, then this function is called after the script has been run.
      // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
      // been called (as the JSONP callback). This callback sets the __JSONP_DATA property

      if (service.__JSONP_DATA) {
        responseText = service.__JSONP_DATA;
        delete service.__JSONP_DATA;
      } // call the service callback with the response text (so it can parse the response)


      this.runServiceCallback.call(this, complete, service, responseText);
    }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
  } // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
  // We need to run its callback which determines if its successful or not
  // `complete` is called on success or failure


  runServiceCallback(complete, service, responseText) {
    // this is the function that is called if the service uses the async callback in its handler method
    const serviceResultHandler = asyncResult => {
      // if `result` is a valid value, then this function shouldn't really run
      // even if it is called by `service.callback`
      if (!result) {
        this.onServiceResult(complete, asyncResult);
      }
    }; // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
    // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready


    const result = service.callback(serviceResultHandler, responseText);

    if (result) {
      this.onServiceResult(complete, result);
    }
  } // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
  // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data


  onServiceResult(complete, result) {
    // convert result to nodejs style async callback
    if (result instanceof Error || result && result.error) {
      complete.call(this, result, null);
    } else {
      complete.call(this, null, result);
    }
  } // if `err` is set, the next service handler is called
  // if `err` is null, the `onComplete` handler is called with `data`


  runNextServiceOnError(err, data) {
    if (err) {
      this.logError(err);
      const nextService = this.getNextService();

      if (nextService) {
        this.runService(nextService, this.runNextServiceOnError.bind(this));
      } else {
        this.completeService.call(this, this.callbackError, new Error('All services failed'));
      }
    } else {
      this.completeService.call(this, this.callbackComplete, data);
    }
  }

  getCurrentServiceOpts() {
    const val = this.options.services[this.currentServiceIndex];

    if (typeof val == 'string') {
      return {
        name: val
      };
    } else if (typeof val == 'function') {
      return val();
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(val)) {
      return val;
    } else {
      return {};
    }
  } // calls the `onComplete` callback after resetting the `currentServiceIndex`


  completeService(fn, data) {
    this.currentServiceIndex = -1;
    fn && fn(data);
  }

  logError(err) {
    console.warn(`The service[${this.currentServiceIndex}] (${this.getServiceByIdx(this.currentServiceIndex).url}) responded with the following error`, err);
  }

}

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
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/popup */ "./src/options/popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






class Popup extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options, initialValues) {
    super(_options_popup__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.userCategories = initialValues || {
      ESSENTIEL: _constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"],
      STATISTIQUES: _constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]
    };
    this.customStyles = {};
    this.hasTransition = !!function () {
      const el = document.createElement('div');
      const trans = {
        t: 'transitionend',
        OT: 'oTransitionEnd',
        msT: 'MSTransitionEnd',
        MozT: 'transitionend',
        WebkitT: 'webkitTransitionEnd'
      };

      for (let prefix in trans) {
        if (trans.hasOwnProperty(prefix) && typeof el.style[prefix + 'ransition'] !== 'undefined') {
          return trans[prefix];
        }
      }

      return '';
    }(); // returns true if `onComplete` was called

    if (this.canUseCookies()) {
      // user has already answered
      this.options.enabled = false;
    } // apply blacklist / whitelist


    if (this.options.blacklistPage.includes(location.pathname)) {
      this.options.enabled = false;
    }

    if (this.options.whitelistPage.includes(location.pathname)) {
      this.options.enabled = true;
    } // the full markup either contains the wrapper or it does not (for multiple instances)


    let cookiePopup = this.options.window.replace('{{classes}}', this.getPopupClasses().join(' ')).replace('{{children}}', this.getPopupInnerMarkup()); // if user passes html, use it instead

    const customHTML = this.options.overrideHTML;

    if (typeof customHTML == 'string' && customHTML.length) {
      cookiePopup = customHTML;
    } // if static, we need to grow the element from 0 height so it doesn't jump the page
    // content. we wrap an element around it which will mask the hidden content


    if (this.options.static) {
      // `grower` is a wrapper div with a hidden overflow whose height is animated
      const wrapper = this.appendMarkup(`<div class="cc-grower">${cookiePopup}</div>`);
      wrapper.style.display = ''; // set it to visible (because appendMarkup hides it)

      this.element = wrapper.firstChild; // get the `element` reference from the wrapper

      this.element.style.display = 'none';
      this.element.classList.add('cc-invisible');
    } else {
      this.element = this.appendMarkup(cookiePopup);
    }

    this.applyAutoDismiss();
    this.applyRevokeButton();

    if (this.options.autoOpen) {
      this.autoOpen();
    }
  }

  open() {
    if (!this.element) return;

    if (!this.isOpen()) {
      if (this.hasTransition) {
        this.fadeIn();
      } else {
        this.element.style.display = '';
      }

      this.element.querySelectorAll('.cc-btn [type="checkbox"]').forEach(checkbox => {
        checkbox.dispatchEvent(new Event('change'));
      });

      if (this.options.revokable) {
        this.toggleRevokeButton();
      }

      this.emit("popupOpened");
    }

    return this;
  }

  close(showRevoke) {
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

  fadeIn() {
    const el = this.element;
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

      const fadeInTimeout = 20; // (ms) DO NOT MAKE THIS VALUE SMALLER. See below
      // Although most browsers can handle values less than 20ms, it should remain above this value.
      // This is because we are waiting for a "browser redraw" before we remove the 'cc-invisible' class.
      // If the class is remvoed before a redraw could happen, then the fadeIn effect WILL NOT work, and
      // the popup will appear from nothing. Therefore we MUST allow enough time for the browser to do
      // its thing. The actually difference between using 0 and 20 in a set timeout is neglegible anyway

      this.openingTimeout = setTimeout(() => this.afterFadeIn(el), fadeInTimeout);
    }
  }
  /**
   * This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
   * There is a good reason why it's called in a timeout. Read 'fadeIn'
   */


  afterFadeIn(element) {
    this.openingTimeout = null;
    element.classList.remove('cc-invisible');
  }

  fadeOut() {
    if (!this.hasTransition || !this.element) return;

    if (this.openingTimeout) {
      clearTimeout(this.openingTimeout);
      this.afterFadeIn(this.element);
    }

    if (!this.element.classList.contains('cc-invisible')) {
      if (this.options.static) {
        this.element.parentNode.style.maxHeight = '';
      }

      this.afterTransition = () => this.afterFadeOut(this.element);

      this.element.addEventListener(this.transitionEnd, this.afterTransition);
      this.element.classList.add('cc-invisible');
    }
  }

  afterFadeOut(el) {
    el.style.display = 'none'; // after close and before open, the display should be none

    el.removeEventListener(this.transitionEnd, this.afterTransition);
    this.afterTransition = null;
  }

  isOpen() {
    return this.element && this.element.style.display === '' && (this.hasTransition ? !this.element.classList.contains('cc-invisible') : true);
  }

  toggleRevokeButton(show) {
    if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
  }

  revokeChoice(preventOpen) {
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


  hasAnswered() {
    return this.getStatuses().some(status => !!status);
  }
  /**
   * Indicates if the user has given consent to all of the categories
   * @return { array<boolean> } - true if consent has been given
   */


  hasConsented() {
    return this.getStatuses().map(status => status === _constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"] || status === _constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
  } // opens the popup if no answer has been given


  autoOpen() {
    const hasAnswered = this.hasAnswered();

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


  setStatuses() {
    const {
      name,
      expiryDays,
      domain,
      path,
      secure
    } = this.options.cookie;

    const updateCategoryStatus = (categoryName, status) => {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"])(status)) {
        const cookieName = name + '_' + categoryName;
        const previousStatus = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])(cookieName);

        if (!previousStatus || status !== _constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]) {
          Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(cookieName, status, expiryDays, domain, path, secure);
          this.emit("statusChanged", cookieName, status, previousStatus);
        }
      } else {
        this.clearStatuses();
      }
    };

    if (arguments.length === 0) {
      _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => updateCategoryStatus(category.name, this.userCategories[category.name]));
    } else if (arguments.length === 1) {
      _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => updateCategoryStatus(category.name, arguments[0]));
    } else if (arguments.length > 1) {
      arguments.forEach((categoryStatus, index) => {
        updateCategoryStatus(this.userCategories[index], categoryStatus);
      });
    }
  }
  /**
   * Get all cookie categoies statuses
   * @return { array<string> } - cookie categories status in order of categories
   */


  getStatuses() {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].map(category => Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])(this.options.cookie.name + '_' + category.name));
  }
  /**
   * Clear all cookie categoies statuses
   */


  clearStatuses() {
    const {
      name,
      domain,
      path
    } = this.options.cookie;
    _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(name + '_' + category.name, '', -1, domain, path);
    });
  }

  canUseCookies() {
    if (!window.navigator.cookieEnabled || window.CookiesOK || window.navigator.CookiesOK) {
      return true;
    }

    const statusesValues = this.getStatuses();
    const matches = statusesValues.map((status, index) => ({
      [_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index].name]: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"])(status)
    }));
    const hasMatches = matches.filter(match => match[Object.keys(match)[0]]).length > 0;
    statusesValues.forEach((status, index) => this.userCategories[_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index].name] === status ? status : this.userCategories[_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index].name]);
    return hasMatches;
  } // top, bottom, left, right


  getPositionClasses() {
    return this.options.position.split('-').map(pos => 'cc-' + pos);
  }

  getPopupClasses() {
    const opts = this.options;
    let positionStyle = opts.position == 'top' || opts.position == 'bottom' ? 'banner' : 'floating';

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMobile"])() && opts.mobileForceFloat) {
      positionStyle = 'floating';
    }

    const classes = ['cc-' + positionStyle, // floating or banner
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

  getPopupInnerMarkup() {
    const interpolated = {};
    const opts = this.options; // removes link if showLink is false

    if (!opts.showLink) {
      opts.elements.link = '';
      opts.elements.messagelink = opts.elements.message;
    }

    Object.keys(opts.elements).forEach(prop => {
      interpolated[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(opts.elements[prop], name => {
        const str = opts.content[name];
        return name && typeof str == 'string' && str.length ? str : '';
      });
    }); // checks if the type is valid and defaults to info if it's not

    let complianceType = opts.compliance[opts.type];

    if (!complianceType) {
      complianceType = opts.compliance.info;
    } // build the compliance types from the already interpolated `elements`


    interpolated.compliance = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(complianceType, name => interpolated[name]); // checks if the layout is valid and defaults to basic if it's not

    let layout = opts.layouts[opts.layout];

    if (!layout) {
      layout = opts.layouts.basic;
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(layout, match => interpolated[match]);
  }

  appendMarkup(markup) {
    const opts = this.options;
    const div = document.createElement('div');
    const cont = opts.container && opts.container.nodeType === 1 ? opts.container : document.body;
    div.innerHTML = markup;
    const el = div.children[0];
    el.style.display = 'none';

    if (el.classList.contains('cc-window') && this.hasTransition) {
      el.classList.add('cc-invisible');
    }

    el.addEventListener('click', event => this.handleButtonClick(event));
    el.querySelectorAll('.cc-btn [type="checkbox"]').forEach(checkbox => {
      //Initialize the checked value of checkboxes
      checkbox.checked = this.userCategories[checkbox.name] === _constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"];

      if (checkbox.name === 'ESSENTIEL') {
        checkbox.disabled = true;
        checkbox.checked = true;
      }

      checkbox.addEventListener('change', () => {
        this.userCategories[checkbox.name] = checkbox.checked ? _constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"] : _constants__WEBPACK_IMPORTED_MODULE_2__["statusDeny"];
      });
      checkbox.addEventListener('click', event => event.stopPropagation());
    });
    el.querySelectorAll(".cc-info").forEach(showInfo => {
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

  handleButtonClick(event) {
    // returns the parent element with the specified class, or the original element - null if not found
    const btn = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["traverseDOMPath"])(event.target, 'cc-btn') || event.target;

    if (btn.classList.contains('cc-btn') && btn.classList.contains('cc-save')) {
      this.setStatuses();
      this.close(true);
      return;
    }

    if (btn.classList.contains('cc-btn')) {
      const matches = btn.className.match(new RegExp('\\bcc-(' + _constants__WEBPACK_IMPORTED_MODULE_2__["statuses"].map(str => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')).join('|') + ')\\b'));
      const match = matches && matches[1] || false;

      if (match) {
        this.setStatuses(match);
        this.close(true);
      }

      return;
    }

    if (btn.classList.contains('cc-close')) {
      this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
      this.close(true);
      return;
    }

    if (btn.classList.contains('cc-revoke')) {
      this.revokeChoice();
      return;
    }
  }

  attachCustomPalette(palette) {
    const hashStr = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["hash"])(JSON.stringify(palette));
    const selector = 'cc-color-override-' + hashStr;
    const isValid = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(palette);
    this.customStyleSelector = isValid ? selector : null;

    if (isValid) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["addCustomStylesheet"])(hashStr, palette, '.' + selector);
    }

    return isValid;
  }

  getEventPath(event) {
    const path = event.composedPath ? event.composedPath() : function (arr, element) {
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

  applyAutoDismiss() {
    const {
      enabled,
      dismissOnTimeout: delay,
      dismissOnScroll: scrollRange,
      dismissOnLinkClick,
      dismissOnWindowClick,
      dismissOnKeyPress
    } = this.options;

    if (enabled) {
      if (typeof delay == 'number' && delay >= 0) {
        this.dismissTimeout = setTimeout(() => {
          this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
          this.close(true);
        }, Math.floor(delay));
      } else if (typeof scrollRange == 'number' && scrollRange >= 0) {
        this.onWindowScroll = () => {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            if (this.isOpen()) {
              this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
              this.close(true);
            }

            window.removeEventListener('scroll', this.onWindowScroll, {
              passive: true
            });
            this.onWindowScroll = null;
          }
        };

        window.addEventListener('scroll', this.onWindowScroll, {
          passive: true
        });
      } else if (dismissOnWindowClick) {
        this.onWindowClick = evt => {
          if (!getEventPath(evt).some(element => this.options.ignoreClicksFrom.some(ignoredClick => element.classList && element.classList.contains(ignoredClick)))) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onWindowClick);
            window.removeEventListener('touchend', this.onWindowClick);
            this.onWindowClick = null;
          }
        };

        window.addEventListener('click', this.onWindowClick);
        window.addEventListener('touchend', this.onWindowClick);
      } else if (dismissOnLinkClick) {
        this.onLinkClick = evt => {
          if (getEventPath(evt).some(elem => typeof elem.tagName !== 'undefined' && elem.tagName === 'A')) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onLinkClick);
            this.onLinkClick = null;
          }
        };

        window.addEventListener('click', this.onLinkClick);
      } else if (dismissOnKeyPress) {
        this.onKeyPress = event => {
          const {
            keyCode
          } = event;

          if (keyCode === 13) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"]);
            this.close(true);
          } else if (keyCode === 27) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
          }
        };

        window.addEventListener('onkeypress', this.onKeyPress);
      }
    }
  }

  applyRevokeButton() {
    // revokable is true if advanced compliance is selected
    if (this.options.type != 'info' && this.options.regionalLaw == true) this.options.revokable = true; // animateRevokable false for mobile devices

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMobile"])()) this.options.animateRevokable = false;

    if (this.options.revokable) {
      const classes = this.getPositionClasses();

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
      const revokeBtn = this.options.revokeBtn.replace('{{classes}}', classes.join(' ')).replace('{{policy}}', this.options.content.policy);
      this.revokeBtn = this.appendMarkup(revokeBtn);
      const btn = this.revokeBtn;

      if (this.options.animateRevokable) {
        const onMouseMove = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function (evt) {
          let active = false;
          const minY = 20;
          const maxY = window.innerHeight - 20;

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

  destroy() {
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

}

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


const toError = obj => new Error('Error [' + (obj.code || 'UNKNOWN') + ']: ' + obj.error);

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
    ipinfo: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//ipinfo.io',
        headers: ['Accept: application/json'],
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
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
    ipinfodb: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}',
        isScript: true,
        // this is JSONP, therefore we must set it to run as a script
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
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
    maxmind: function () {
      return {
        // This service responds with a JavaScript file which defines additional functionality. Once loaded, we must
        // make an additional AJAX call. Therefore we provide a `done` callback that can be called asynchronously
        url: '//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
        isScript: true,
        // this service responds with a JavaScript file, so it must be run as a script
        callback: function (done) {
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
    domain: 'localhost',
    // The cookies expire date, specified in days (specify -1 for no expiry)
    expiryDays: 365,
    // If true the cookie will be created with the secure flag. Secure cookies will only be transmitted via HTTPS.
    secure: false
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
    dismiss: `<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDismiss"]}">{{dismiss}}</a>`,
    allow: `<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusAllow"]}">{{allow}}</a>`,
    deny: `<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDeny"]}">{{deny}}</a>`,
    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',
    categories: '<ul class="cc-categories">' + _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["categories"].map((category, index) => `<li class="cc-category">
          <button class="cc-btn" tabindex="0"><label for="id_${category.name}"><input type="checkbox" id="id_${category.name}" name="${category.name}"/>${category.name}</label></button>
          <button class="cc-btn cc-info fal fa-info-square" aria-label="${category.name} Definition Button" tabindex="${index + 1}"></button>
          <div class="cc-tooltip">
            ${category.explainText}
          </div>
        </li>`).join("") + '</ul>',
    save: `<button class="cc-btn cc-save">{{save}}</button>` //compliance: compliance is also an element, but it is generated by the application, depending on `type` below

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


const getScript = (url, callback, timeout) => {
  let timeoutIdx;
  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/' + (url.type || 'javascript');
  scriptTag.src = url.src || url;
  scriptTag.async = false;

  scriptTag.onreadystatechange = s.onload = function () {
    // this code handles two scenarios, whether called by onload or onreadystatechange
    const state = scriptTag.readyState;
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
const makeAsyncRequest = (url, onComplete, timeout, postData, requestHeaders) => {
  const xhr = new (window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');
  xhr.open(postData ? 'POST' : 'GET', url, 1);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  if (Array.isArray(requestHeaders)) {
    for (let i = 0, l = requestHeaders.length; i < l; ++i) {
      const split = requestHeaders[i].split(':', 2);
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


const getCookie = name => {
  const value = ' ' + document.cookie;
  const parts = value.split(' ' + name + '=');
  return parts.length < 2 ? undefined : parts.pop().split(';').shift();
};
const setCookie = function (name, value, expiryDays, domain, path, secure) {
  const exdate = new Date();
  exdate.setHours(exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24);
  document.cookie = name + '=' + value + ';expires=' + exdate.toUTCString() + ';path=' + (path || '/') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");



const traverseDOMPath = (elem, className) => !elem || !elem.parentNode ? null : elem.classList.contains(className) ? elem : traverseDOMPath(elem.parentNode, className);
const addCustomStylesheet = (id, palette, prefix) => {
  const colorStyles = {};
  const {
    popup,
    button,
    highlight,
    saveButton
  } = palette; // needs background colour, text and link will be set to black/white if not specified

  if (popup) {
    // assumes popup.background is set
    popup.text = popup.text ? popup.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(popup.background);
    popup.link = popup.link ? popup.link : popup.text;
    colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-window'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-revoke'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = ['color: ' + popup.link];

    if (button) {
      // assumes button.background is set
      button.text = button.text ? button.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(button.background);
      button.border = button.border ? button.border : 'transparent';
      colorStyles[prefix + ' .cc-btn'] = ['color: ' + button.text, 'border-color: ' + button.border, 'background-color: ' + button.background];

      if (button.padding) {
        colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
      }

      if (button.background != 'transparent') {
        colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = ['background-color: ' + (button.hover || Object(_style__WEBPACK_IMPORTED_MODULE_0__["getHoverColor"])(button.background))];
      }

      if (highlight) {
        //assumes highlight.background is set
        highlight.text = highlight.text ? highlight.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(highlight.background);
        highlight.border = highlight.border ? highlight.border : 'transparent';
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + highlight.text, 'border-color: ' + highlight.border, 'background-color: ' + highlight.background];
      } else {
        // sets highlight text color to popup text. background and border are transparent by default.
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + popup.text];
      }
    }

    if (saveButton) {
      colorStyles[`${prefix} .cc-btn.cc-save`] = ['color: ' + saveButton.text, 'border-color: ' + saveButton.border, 'background-color: ' + saveButton.background];
    }
  } // this will be interpretted as CSS. the key is the selector, and each array element is a rule


  const style = document.createElement('style');
  style.id = id;
  document.head.appendChild(style);
  Object.entries(colorStyles).forEach(([prop, value], index) => style.sheet.insertRule(`${prop}{${value.join(';')}}`, index));
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
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ "./src/utils/cookie.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/utils/validation.js");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./async */ "./src/utils/async.js");



const getCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"];
const setCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["setCookie"];
const interpolateString = (str, callback) => str.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, (matches, replaced) => callback(replaced) || ''); // only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)

const throttle = (callback, limit) => {
  let wait = false;
  return function () {
    if (!wait) {
      callback(...arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}; // only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)

const hash = str => {
  let hashNum = 0,
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

const normalizeHex = _style__WEBPACK_IMPORTED_MODULE_1__["normalizeHex"];
const getContrast = _style__WEBPACK_IMPORTED_MODULE_1__["getContrast"];
const getLuminance = _style__WEBPACK_IMPORTED_MODULE_1__["getLuminance"];
const getHoverColor = _style__WEBPACK_IMPORTED_MODULE_1__["getHoverColor"];

const traverseDOMPath = _dom__WEBPACK_IMPORTED_MODULE_2__["traverseDOMPath"];
const addCustomStylesheet = _dom__WEBPACK_IMPORTED_MODULE_2__["addCustomStylesheet"];

const isValidStatus = _validation__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"];
const isPlainObject = _validation__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"];
const isMobile = _validation__WEBPACK_IMPORTED_MODULE_3__["isMobile"];

const getScript = _async__WEBPACK_IMPORTED_MODULE_4__["getScript"];
const makeAsyncRequest = _async__WEBPACK_IMPORTED_MODULE_4__["makeAsyncRequest"];

const loopProperties = overwrites => (obj, [key, value]) => {
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

const mergeOptions = (defaults, overwrites) => Object.entries(defaults).reduce(loopProperties(overwrites), {});

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


const normalizeHex = hex => hex[0] == '#' ? hex.substr(1) : hex.length == 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex; // used to get text colors if not set

const getContrast = hex => {
  hex = normalizeHex(hex);
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
}; // used to change color on highlight

const getLuminance = hex => {
  const num = parseInt(normalizeHex(hex), 16),
        amt = 38,
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00ff) + amt,
        G = (num & 0x0000ff) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};
const getHoverColor = hex => {
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");



/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */

const isValidStatus = status => _constants__WEBPACK_IMPORTED_MODULE_0__["statuses"].indexOf(status) >= 0;
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // The code "typeof obj === 'object' && obj !== null" allows Array objects

const isPlainObject = obj => typeof obj === 'object' && obj !== null && obj.constructor == Object;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Nvb2tpZUNvbnNlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9MZWdhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvbGVnYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/M2Q0MiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsic3RhdHVzZXMiLCJzdGF0dXNEZW55Iiwic3RhdHVzQWxsb3ciLCJzdGF0dXNEaXNtaXNzIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJleHBsYWluVGV4dCIsImV4cG9ydHMiLCJtb2R1bGUiLCJDb29raWVDb25zZW50Iiwid2luZG93IiwiZW1pdHRlciIsIkV2ZW50RW1pdHRlciIsIkJhc2UiLCJjb25zdHJ1Y3RvciIsImRlZmF1bHRPcHRpb25zIiwib3B0aW9ucyIsIm1lcmdlT3B0aW9ucyIsIm9uIiwiYmluZCIsImVtaXQiLCJhbnN3ZXJzIiwibWFwIiwiY2F0ZWdvcnkiLCJjb29raWVOYW1lIiwiY29va2llIiwiYW5zd2VyIiwiZ2V0Q29va2llIiwiaXNWYWxpZFN0YXR1cyIsInVuZGVmaW5lZCIsImZpbHRlciIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJpbml0aWFsaXphdGlvbkNvbXBsZXRlIiwibGVnYWwiLCJjb3VudHJ5Q29kZSIsImNvZGUiLCJsb2NhdGlvbiIsIkxvY2F0aW9uIiwibG9jYXRlIiwiaW5pdGlhbGl6YXRpb25FcnJvciIsInJlc3VsdCIsIkxlZ2FsIiwiYXBwbHlMYXciLCJpbml0aWFsRGF0YSIsInJlZHVjZSIsInZhbCIsInBvcHVwIiwiUG9wdXAiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJnZXRDb3VudHJ5TGF3cyIsImdldCIsImlzT3BlbiIsImNsb3NlIiwicmV2b2tlQ2hvaWNlIiwib3BlbiIsInRvZ2dsZVJldm9rZUJ1dHRvbiIsImJvb2wiLCJzZXRTdGF0dXNlcyIsInN0YXR1cyIsImNsZWFyU3RhdHVzZXMiLCJkZXN0cm95IiwiZGVmaW5lUHJvcGVydHkiLCJzZXQiLCJlbnVtZXJhYmxlIiwid3JpdGVhYmxlIiwiY29uZmlndXJhYmxlIiwiaGFzTGF3IiwiaW5kZXhPZiIsInJldm9rYWJsZSIsImV4cGxpY2l0QWN0aW9uIiwiY291bnRyeSIsImVuYWJsZWQiLCJyZWdpb25hbExhdyIsImRpc21pc3NPblNjcm9sbCIsImRpc21pc3NPblRpbWVvdXQiLCJjdXJyZW50U2VydmljZUluZGV4IiwiZ2V0TmV4dFNlcnZpY2UiLCJzZXJ2aWNlIiwiZ2V0U2VydmljZUJ5SWR4Iiwic2VydmljZXMiLCJpZHgiLCJzZXJ2aWNlT3B0aW9uIiwiZHluYW1pY09wdHMiLCJhc3NpZ24iLCJzZXJ2aWNlRGVmaW5pdGlvbnMiLCJpc1BsYWluT2JqZWN0IiwiY29tcGxldGUiLCJFcnJvciIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNldHVwVXJsIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJ1cmwiLCJyZXBsYWNlIiwiXyIsInBhcmFtIiwidGVtcE5hbWUiLCJEYXRlIiwibm93IiwicmVzIiwiX19KU09OUF9EQVRBIiwiSlNPTiIsInN0cmluZ2lmeSIsImludGVycG9sYXRlVXJsIiwiY2FsbGJhY2siLCJyZXF1ZXN0RnVuY3Rpb24iLCJpc1NjcmlwdCIsImdldFNjcmlwdCIsIm1ha2VBc3luY1JlcXVlc3QiLCJ4aHIiLCJyZXNwb25zZVRleHQiLCJydW5TZXJ2aWNlQ2FsbGJhY2siLCJjYWxsIiwidGltZW91dCIsImRhdGEiLCJoZWFkZXJzIiwic2VydmljZVJlc3VsdEhhbmRsZXIiLCJhc3luY1Jlc3VsdCIsIm9uU2VydmljZVJlc3VsdCIsImVyciIsImxvZ0Vycm9yIiwibmV4dFNlcnZpY2UiLCJjb21wbGV0ZVNlcnZpY2UiLCJmbiIsImNvbnNvbGUiLCJ3YXJuIiwiaW5pdGlhbFZhbHVlcyIsInVzZXJDYXRlZ29yaWVzIiwiRVNTRU5USUVMIiwiU1RBVElTVElRVUVTIiwiY3VzdG9tU3R5bGVzIiwiaGFzVHJhbnNpdGlvbiIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHJhbnMiLCJ0IiwiT1QiLCJtc1QiLCJNb3pUIiwiV2Via2l0VCIsInByZWZpeCIsImhhc093blByb3BlcnR5Iiwic3R5bGUiLCJjYW5Vc2VDb29raWVzIiwiYmxhY2tsaXN0UGFnZSIsImluY2x1ZGVzIiwicGF0aG5hbWUiLCJ3aGl0ZWxpc3RQYWdlIiwiY29va2llUG9wdXAiLCJnZXRQb3B1cENsYXNzZXMiLCJqb2luIiwiZ2V0UG9wdXBJbm5lck1hcmt1cCIsImN1c3RvbUhUTUwiLCJvdmVycmlkZUhUTUwiLCJzdGF0aWMiLCJ3cmFwcGVyIiwiYXBwZW5kTWFya3VwIiwiZGlzcGxheSIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwbHlBdXRvRGlzbWlzcyIsImFwcGx5UmV2b2tlQnV0dG9uIiwiYXV0b09wZW4iLCJmYWRlSW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNoZWNrYm94IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Iiwic2hvd1Jldm9rZSIsImZhZGVPdXQiLCJhZnRlclRyYW5zaXRpb24iLCJhZnRlckZhZGVPdXQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJtYXhIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJmYWRlSW5UaW1lb3V0Iiwib3BlbmluZ1RpbWVvdXQiLCJhZnRlckZhZGVJbiIsInJlbW92ZSIsImNsZWFyVGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc2l0aW9uRW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3ciLCJyZXZva2VCdG4iLCJwcmV2ZW50T3BlbiIsImhhc0Fuc3dlcmVkIiwiZ2V0U3RhdHVzZXMiLCJzb21lIiwiaGFzQ29uc2VudGVkIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJ1cGRhdGVDYXRlZ29yeVN0YXR1cyIsImNhdGVnb3J5TmFtZSIsInByZXZpb3VzU3RhdHVzIiwic2V0Q29va2llIiwiYXJndW1lbnRzIiwiY2F0ZWdvcnlTdGF0dXMiLCJpbmRleCIsIm5hdmlnYXRvciIsImNvb2tpZUVuYWJsZWQiLCJDb29raWVzT0siLCJzdGF0dXNlc1ZhbHVlcyIsIm1hdGNoZXMiLCJoYXNNYXRjaGVzIiwibWF0Y2giLCJnZXRQb3NpdGlvbkNsYXNzZXMiLCJwb3NpdGlvbiIsInNwbGl0IiwicG9zIiwib3B0cyIsInBvc2l0aW9uU3R5bGUiLCJpc01vYmlsZSIsIm1vYmlsZUZvcmNlRmxvYXQiLCJjbGFzc2VzIiwidHlwZSIsInRoZW1lIiwicHVzaCIsImFwcGx5IiwiYXR0YWNoQ3VzdG9tUGFsZXR0ZSIsInBhbGV0dGUiLCJjdXN0b21TdHlsZVNlbGVjdG9yIiwiaW50ZXJwb2xhdGVkIiwic2hvd0xpbmsiLCJlbGVtZW50cyIsImxpbmsiLCJtZXNzYWdlbGluayIsIm1lc3NhZ2UiLCJwcm9wIiwiaW50ZXJwb2xhdGVTdHJpbmciLCJzdHIiLCJjb250ZW50IiwiY29tcGxpYW5jZVR5cGUiLCJjb21wbGlhbmNlIiwiaW5mbyIsImxheW91dCIsImxheW91dHMiLCJiYXNpYyIsIm1hcmt1cCIsImRpdiIsImNvbnQiLCJjb250YWluZXIiLCJub2RlVHlwZSIsImJvZHkiLCJpbm5lckhUTUwiLCJjaGlsZHJlbiIsImV2ZW50IiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhdXRvQXR0YWNoIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJidG4iLCJ0cmF2ZXJzZURPTVBhdGgiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJSZWdFeHAiLCJoYXNoU3RyIiwiaGFzaCIsInNlbGVjdG9yIiwiaXNWYWxpZCIsImFkZEN1c3RvbVN0eWxlc2hlZXQiLCJnZXRFdmVudFBhdGgiLCJjb21wb3NlZFBhdGgiLCJhcnIiLCJkZWxheSIsInNjcm9sbFJhbmdlIiwiZGlzbWlzc09uTGlua0NsaWNrIiwiZGlzbWlzc09uV2luZG93Q2xpY2siLCJkaXNtaXNzT25LZXlQcmVzcyIsImRpc21pc3NUaW1lb3V0IiwiTWF0aCIsImZsb29yIiwib25XaW5kb3dTY3JvbGwiLCJwYWdlWU9mZnNldCIsInBhc3NpdmUiLCJvbldpbmRvd0NsaWNrIiwiZXZ0IiwiaWdub3JlQ2xpY2tzRnJvbSIsImlnbm9yZWRDbGljayIsIm9uTGlua0NsaWNrIiwiZWxlbSIsInRhZ05hbWUiLCJvbktleVByZXNzIiwia2V5Q29kZSIsImFuaW1hdGVSZXZva2FibGUiLCJsb2ciLCJwb2xpY3kiLCJvbk1vdXNlTW92ZSIsInRocm90dGxlIiwiYWN0aXZlIiwibWluWSIsIm1heFkiLCJpbm5lckhlaWdodCIsImNsaWVudFkiLCJ0b0Vycm9yIiwiaXBpbmZvIiwiZG9uZSIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlIiwiaXBpbmZvZGIiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsIm1heG1pbmQiLCJnZW9pcDIiLCJpc29fY29kZSIsImhlYWRlciIsImRpc21pc3MiLCJhbGxvdyIsImRlbnkiLCJocmVmIiwic2F2ZSIsIm1vZGFsIiwidGltZW91dElkeCIsInNjcmlwdFRhZyIsInNyYyIsImFzeW5jIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicyIsIm9ubG9hZCIsInN0YXRlIiwicmVhZHlTdGF0ZSIsInRlc3QiLCJvbkNvbXBsZXRlIiwicG9zdERhdGEiLCJyZXF1ZXN0SGVhZGVycyIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsInNldFJlcXVlc3RIZWFkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsInNlbmQiLCJ2YWx1ZSIsInBhcnRzIiwicG9wIiwic2hpZnQiLCJleGRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidG9VVENTdHJpbmciLCJpZCIsImNvbG9yU3R5bGVzIiwiYnV0dG9uIiwiaGlnaGxpZ2h0Iiwic2F2ZUJ1dHRvbiIsInRleHQiLCJnZXRDb250cmFzdCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJwYWRkaW5nIiwiaG92ZXIiLCJnZXRIb3ZlckNvbG9yIiwiaGVhZCIsImVudHJpZXMiLCJzaGVldCIsImluc2VydFJ1bGUiLCJyZXBsYWNlZCIsImxpbWl0Iiwid2FpdCIsImhhc2hOdW0iLCJjaHIiLCJsZW4iLCJjaGFyQ29kZUF0Iiwibm9ybWFsaXplSGV4IiwiZ2V0THVtaW5hbmNlIiwiZG9tIiwidmFsaWRhdGlvbiIsImFzeW5jRm5zIiwibG9vcFByb3BlcnRpZXMiLCJvdmVyd3JpdGVzIiwia2V5IiwiZGVmYXVsdHMiLCJoZXgiLCJzdWJzdHIiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsInlpcSIsIm51bSIsImFtdCIsIlIiLCJCIiwiRyIsInRvU3RyaW5nIiwic2xpY2UiLCJ1c2VyQWdlbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7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RUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN2JhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUM1UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVPLE1BQU1BLFFBQVEsR0FBRyxDQUFFLE1BQUYsRUFBVSxPQUFWLEVBQW1CLFNBQW5CLENBQWpCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLE1BQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLE9BQXBCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFNBQXRCO0FBRUEsTUFBTUMsVUFBVSxHQUFHLENBQ3RCO0FBQ0lDLE1BQUksRUFBRSxXQURWO0FBRUlDLGFBQVcsRUFBRTtBQUZqQixDQURzQixFQUt0QjtBQUNJRCxNQUFJLEVBQUUsY0FEVjtBQUVJQyxhQUFXLEVBQUU7QUFGakIsQ0FMc0IsQ0FBbkIsQzs7Ozs7Ozs7Ozs7O0FDUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUVBOztBQUVBLElBQUksT0FBT0MsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNsQ0MsUUFBTSxDQUFDRCxPQUFQLEdBQWlCRSw2REFBakI7QUFDRCxDQUZELE1BRU87QUFDTEMsUUFBTSxDQUFDRCxhQUFQLEdBQXVCQSw2REFBdkI7QUFDRCxDOzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFFQSxNQUFNRSxPQUFPLEdBQUcsSUFBSUMsNkNBQUosRUFBaEI7QUFFZSxNQUFNQyxJQUFOLENBQVc7QUFDeEJDLGFBQVcsQ0FBRUMsY0FBYyxHQUFHLEVBQW5CLEVBQXVCQyxPQUFPLEdBQUcsRUFBakMsRUFBcUM7QUFDOUMsU0FBS0EsT0FBTCxHQUFlQywyREFBWSxDQUFFRixjQUFGLEVBQWtCQyxPQUFsQixDQUEzQjtBQUNBLFNBQUtFLEVBQUwsR0FBVVAsT0FBTyxDQUFDTyxFQUFSLENBQVdDLElBQVgsQ0FBaUJSLE9BQWpCLENBQVY7QUFDQSxTQUFLUyxJQUFMLEdBQVlULE9BQU8sQ0FBQ1MsSUFBUixDQUFhRCxJQUFiLENBQW1CUixPQUFuQixDQUFaO0FBQ0Q7O0FBTHVCLEM7Ozs7Ozs7Ozs7OztBQ1AxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTtBQUNBOztBQUVlLE1BQU1GLGFBQU4sU0FBNEJJLDZDQUE1QixDQUFpQztBQUM5Q0MsYUFBVyxDQUFFRSxPQUFPLEdBQUcsRUFBWixFQUFnQjtBQUN6QixVQUFPQSxPQUFQO0FBRUEsVUFBTUssT0FBTyxHQUFHakIscURBQVUsQ0FBQ2tCLEdBQVgsQ0FBZ0JDLFFBQVEsSUFBSTtBQUMxQyxZQUFNQyxVQUFVLEdBQUcsS0FBS1IsT0FBTCxDQUFhUyxNQUFiLElBQXVCLEtBQUtULE9BQUwsQ0FBYVMsTUFBYixDQUFvQnBCLElBQTNDLEdBQWtELEtBQUtXLE9BQUwsQ0FBYVMsTUFBYixDQUFvQnBCLElBQXRFLEdBQTZFLHVCQUFoRztBQUNBLFlBQU1xQixNQUFNLEdBQUdDLHdEQUFTLENBQUVILFVBQVUsR0FBR0QsUUFBUSxDQUFDbEIsSUFBeEIsQ0FBeEI7QUFDQSxhQUFPdUIsNERBQWEsQ0FBQ0YsTUFBRCxDQUFiLEdBQXdCO0FBQUUsU0FBQ0gsUUFBUSxDQUFDbEIsSUFBVixHQUFpQnFCO0FBQW5CLE9BQXhCLEdBQXNERyxTQUE3RDtBQUNELEtBSmUsRUFJYkMsTUFKYSxDQUlOQyxHQUFHLElBQUlBLEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxNQUFNLENBQUNDLElBQVAsQ0FBWUYsR0FBWixFQUFpQixDQUFqQixDQUFELENBQU4sR0FBOEIsS0FKbEMsQ0FBaEIsQ0FIeUIsQ0FTekI7O0FBQ0EsUUFBSVYsT0FBTyxDQUFDYSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLFdBQUtDLHNCQUFMLENBQTZCO0FBQUVkO0FBQUYsT0FBN0I7QUFDRCxLQUZELE1BRU8sSUFBSyxLQUFLTCxPQUFMLENBQWFvQixLQUFiLElBQXNCLEtBQUtwQixPQUFMLENBQWFvQixLQUFiLENBQW1CQyxXQUE5QyxFQUE0RDtBQUNqRSxXQUFLRixzQkFBTCxDQUE2QjtBQUFFRyxZQUFJLEVBQUUsS0FBS3RCLE9BQUwsQ0FBYW9CLEtBQWIsQ0FBbUJDO0FBQTNCLE9BQTdCO0FBQ0QsS0FGTSxNQUVBLElBQUssS0FBS3JCLE9BQUwsQ0FBYXVCLFFBQWxCLEVBQTZCO0FBQ2xDLFVBQUlDLGlEQUFKLENBQWMsS0FBS3hCLE9BQUwsQ0FBYXVCLFFBQTNCLEVBQXNDRSxNQUF0QyxDQUE4QyxLQUFLTixzQkFBTCxDQUE0QmhCLElBQTVCLENBQWtDLElBQWxDLENBQTlDLEVBQXdGLEtBQUt1QixtQkFBTCxDQUF5QnZCLElBQXpCLENBQStCLElBQS9CLENBQXhGO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsV0FBS2dCLHNCQUFMLENBQTRCLEVBQTVCO0FBQ0Q7QUFDRjs7QUFDREEsd0JBQXNCLENBQUVRLE1BQUYsRUFBVTtBQUM5QixRQUFJQSxNQUFNLENBQUNMLElBQVgsRUFBaUI7QUFDZixXQUFLdEIsT0FBTCxHQUFlLElBQUk0Qiw4Q0FBSixDQUFVLEtBQUs1QixPQUFMLENBQWFvQixLQUF2QixFQUE4QlMsUUFBOUIsQ0FBd0MsS0FBSzdCLE9BQTdDLEVBQXNEMkIsTUFBTSxDQUFDTCxJQUE3RCxDQUFmO0FBQ0Q7O0FBQ0QsVUFBTVEsV0FBVyxHQUFHSCxNQUFNLENBQUN0QixPQUFQLElBQWtCc0IsTUFBTSxDQUFDdEIsT0FBUCxDQUFlMEIsTUFBZixDQUFzQixDQUFDaEIsR0FBRCxFQUFNaUIsR0FBTix1QkFBbUJqQixHQUFuQixNQUEyQmlCLEdBQTNCLENBQXRCLENBQXRDO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQUlDLDhDQUFKLENBQVcsS0FBS2xDLE9BQWhCLEVBQXlCOEIsV0FBekIsQ0FBYjtBQUNBSyxjQUFVLENBQUUsTUFBTSxLQUFLL0IsSUFBTCxDQUFVLGFBQVYsRUFBeUIsS0FBSzZCLEtBQTlCLEVBQXFDSCxXQUFyQyxDQUFSLEVBQTRELENBQTVELENBQVY7QUFDRDs7QUFDREoscUJBQW1CLENBQUVVLEtBQUYsRUFBVTtBQUMzQkQsY0FBVSxDQUFFLE1BQU0sS0FBSy9CLElBQUwsQ0FBVyxPQUFYLEVBQW9CZ0MsS0FBcEIsRUFBMkIsSUFBSUYsOENBQUosQ0FBVyxLQUFLbEMsT0FBaEIsQ0FBM0IsQ0FBUixFQUFnRSxDQUFoRSxDQUFWO0FBQ0Q7O0FBQ0RxQyxnQkFBYyxDQUFFaEIsV0FBRixFQUFlO0FBQzNCLFdBQU8sSUFBSU8sOENBQUosQ0FBVSxLQUFLNUIsT0FBTCxDQUFhb0IsS0FBdkIsRUFBOEJrQixHQUE5QixDQUFtQ2pCLFdBQW5DLENBQVA7QUFDRDs7QUFDRGtCLFFBQU0sR0FBRztBQUNQLFdBQU8sS0FBS04sS0FBTCxDQUFXTSxNQUFYLEVBQVA7QUFDRDs7QUFDREMsT0FBSyxHQUFFO0FBQ0wsV0FBUyxLQUFLUCxLQUFMLENBQVdPLEtBQVgsSUFBb0IsSUFBN0I7QUFDRDs7QUFDREMsY0FBWSxHQUFHO0FBQ2IsV0FBUyxLQUFLUixLQUFMLENBQVdRLFlBQVgsSUFBMkIsSUFBcEM7QUFDRDs7QUFDREMsTUFBSSxHQUFFO0FBQ0osV0FBUyxLQUFLVCxLQUFMLENBQVdTLElBQVgsSUFBbUIsSUFBNUI7QUFDRDs7QUFDREMsb0JBQWtCLENBQUVDLElBQUYsRUFBUztBQUN6QixXQUFTLEtBQUtYLEtBQUwsQ0FBV1Usa0JBQVgsQ0FBK0JDLElBQS9CLEdBQXVDLElBQWhEO0FBQ0Q7O0FBQ0RDLGFBQVcsQ0FBRUMsTUFBRixFQUFXO0FBQ3BCLFdBQVEsS0FBS2IsS0FBTCxDQUFXWSxXQUFYLENBQXdCQyxNQUF4QixHQUFrQyxJQUExQztBQUNEOztBQUNEQyxlQUFhLEdBQUU7QUFDYixXQUFTLEtBQUtkLEtBQUwsQ0FBV2MsYUFBWCxJQUE0QixJQUFyQztBQUNEOztBQUNEQyxTQUFPLEdBQUU7QUFDUCxXQUFTLEtBQUtmLEtBQUwsQ0FBV2UsT0FBWCxJQUFzQixJQUEvQjtBQUNEOztBQTFENkM7QUE2RGhEaEUsbURBQVEsQ0FBQytDLE1BQVQsQ0FBaUIsQ0FBRWhCLEdBQUYsRUFBTytCLE1BQVAsTUFDZjlCLE1BQU0sQ0FBQ2lDLGNBQVAsQ0FBdUJ4RCxhQUF2QixFQUFzQ3FELE1BQXRDLEVBQThDO0FBQzlDUixLQUFHLEVBQUUsWUFBWTtBQUFFLFdBQU9RLE1BQVA7QUFBZSxHQURZO0FBRTlDSSxLQUFHLEVBQUUsWUFBWSxDQUFFLENBRjJCO0FBRzlDQyxZQUFVLEVBQUUsS0FIa0M7QUFJOUNDLFdBQVMsRUFBRSxLQUptQztBQUs5Q0MsY0FBWSxFQUFFO0FBTGdDLENBQTlDLEdBTUV0QyxHQVBhLENBQWpCLEVBT1d0QixhQVBYLEU7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFFZSxNQUFNbUMsS0FBTixTQUFvQi9CLDZDQUFwQixDQUF5QjtBQUN0Q0MsYUFBVyxDQUFFRSxPQUFPLEdBQUcsRUFBWixFQUFpQjtBQUMxQixVQUFPRCxzREFBUCxFQUF1QkMsT0FBdkI7QUFDRDs7QUFDRHNDLEtBQUcsQ0FBRWpCLFdBQUYsRUFBZTtBQUNoQixXQUFPO0FBQ0xpQyxZQUFNLEVBQUUsS0FBS3RELE9BQUwsQ0FBYXNELE1BQWIsQ0FBb0JDLE9BQXBCLENBQTRCbEMsV0FBNUIsS0FBNEMsQ0FEL0M7QUFFTG1DLGVBQVMsRUFBRSxLQUFLeEQsT0FBTCxDQUFhd0QsU0FBYixDQUF1QkQsT0FBdkIsQ0FBK0JsQyxXQUEvQixLQUErQyxDQUZyRDtBQUdMb0Msb0JBQWMsRUFBRSxLQUFLekQsT0FBTCxDQUFheUQsY0FBYixDQUE0QkYsT0FBNUIsQ0FBb0NsQyxXQUFwQyxLQUFvRDtBQUgvRCxLQUFQO0FBS0Q7O0FBQ0RRLFVBQVEsQ0FBRTdCLE9BQUYsRUFBV3FCLFdBQVgsRUFBd0I7QUFDOUIsVUFBTXFDLE9BQU8sR0FBRyxLQUFLcEIsR0FBTCxDQUFTakIsV0FBVCxDQUFoQjs7QUFFQSxRQUFJLENBQUNxQyxPQUFPLENBQUNKLE1BQWIsRUFBcUI7QUFDbkI7QUFDQXRELGFBQU8sQ0FBQzJELE9BQVIsR0FBa0IsS0FBbEI7QUFDQSxXQUFLdkQsSUFBTCxDQUFXLGFBQVgsRUFBMEJpQixXQUExQixFQUF1Q3FDLE9BQXZDO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLMUQsT0FBTCxDQUFhNEQsV0FBakIsRUFBOEI7QUFDNUIsVUFBSUYsT0FBTyxDQUFDRixTQUFaLEVBQXVCO0FBQ3JCO0FBQ0F4RCxlQUFPLENBQUN3RCxTQUFSLEdBQW9CLElBQXBCO0FBQ0Q7O0FBRUQsVUFBSUUsT0FBTyxDQUFDRCxjQUFaLEVBQTRCO0FBQzFCO0FBQ0F6RCxlQUFPLENBQUM2RCxlQUFSLEdBQTBCLEtBQTFCO0FBQ0E3RCxlQUFPLENBQUM4RCxnQkFBUixHQUEyQixLQUEzQjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBTzlELE9BQVA7QUFDRDs7QUFqQ3FDLEM7Ozs7Ozs7Ozs7OztBQ0x4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFZSxNQUFNd0IsUUFBTixTQUF1QjNCLDZDQUF2QixDQUE0QjtBQUN6Q0MsYUFBVyxDQUFFRSxPQUFGLEVBQVk7QUFDckIsVUFBT0QseURBQVAsRUFBdUJDLE9BQXZCO0FBQ0EsU0FBSytELG1CQUFMLEdBQTJCLENBQUMsQ0FBNUIsQ0FGcUIsQ0FFUztBQUMvQjs7QUFFREMsZ0JBQWMsR0FBRztBQUNmLFFBQUlDLE9BQUo7O0FBQ0EsT0FBRztBQUNEQSxhQUFPLEdBQUcsS0FBS0MsZUFBTCxDQUFxQixFQUFFLEtBQUtILG1CQUE1QixDQUFWO0FBQ0QsS0FGRCxRQUdFLEtBQUtBLG1CQUFMLEdBQTJCLEtBQUsvRCxPQUFMLENBQWFtRSxRQUFiLENBQXNCakQsTUFBakQsSUFDQSxDQUFDK0MsT0FKSDs7QUFPQSxXQUFPQSxPQUFQO0FBQ0Q7O0FBRURDLGlCQUFlLENBQUNFLEdBQUQsRUFBTTtBQUNuQjtBQUNBLFVBQU1DLGFBQWEsR0FBRyxLQUFLckUsT0FBTCxDQUFhbUUsUUFBYixDQUFzQkMsR0FBdEIsQ0FBdEIsQ0FGbUIsQ0FJbkI7O0FBQ0EsUUFBSSxPQUFPQyxhQUFQLEtBQXlCLFVBQTdCLEVBQXlDO0FBQ3ZDLFlBQU1DLFdBQVcsR0FBR0QsYUFBYSxFQUFqQztBQUNBLGFBQU9DLFdBQVcsQ0FBQ2pGLElBQVosR0FDTDJCLE1BQU0sQ0FBQ3VELE1BQVAsQ0FDRSxFQURGLEVBRUVELFdBRkYsRUFHRSxLQUFLdEUsT0FBTCxDQUFhd0Usa0JBQWIsQ0FBaUNGLFdBQVcsQ0FBQ2pGLElBQTdDLEVBQXFEaUYsV0FBckQsQ0FIRixDQURLLEdBS0RBLFdBTE47QUFNRCxLQWJrQixDQWVuQjs7O0FBQ0EsUUFBSSxPQUFPRCxhQUFQLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ3JDLGFBQU8sS0FBS3JFLE9BQUwsQ0FBYXdFLGtCQUFiLENBQWdDSCxhQUFoQyxHQUFQO0FBQ0QsS0FsQmtCLENBb0JuQjtBQUNBOzs7QUFDQSxRQUFJSSw0REFBYSxDQUFDSixhQUFELENBQWpCLEVBQWtDO0FBQ2hDLGFBQU8sS0FBS3JFLE9BQUwsQ0FBYXdFLGtCQUFiLENBQWdDSCxhQUFhLENBQUNoRixJQUE5QyxFQUNMZ0YsYUFESyxDQUFQO0FBR0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0QsR0EvQ3dDLENBaUR6QztBQUNBOzs7QUFDQTVDLFFBQU0sQ0FBQ2lELFFBQUQsRUFBV3RDLEtBQVgsRUFBa0I7QUFDdEIsVUFBTTZCLE9BQU8sR0FBRyxLQUFLRCxjQUFMLEVBQWhCOztBQUVBLFFBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1o3QixXQUFLLENBQUMsSUFBSXVDLEtBQUosQ0FBVSxvQkFBVixDQUFELENBQUw7QUFDQTtBQUNEOztBQUVELFNBQUtDLGdCQUFMLEdBQXdCRixRQUF4QjtBQUNBLFNBQUtHLGFBQUwsR0FBcUJ6QyxLQUFyQjtBQUVBLFNBQUswQyxVQUFMLENBQWdCYixPQUFoQixFQUF5QixLQUFLYyxxQkFBTCxDQUEyQjVFLElBQTNCLENBQWdDLElBQWhDLENBQXpCO0FBQ0QsR0EvRHdDLENBaUV6Qzs7O0FBQ0E2RSxVQUFRLENBQUNmLE9BQUQsRUFBVTtBQUNoQixVQUFNZ0IsV0FBVyxHQUFHLEtBQUtDLHFCQUFMLEVBQXBCO0FBQ0EsV0FBT2pCLE9BQU8sQ0FBQ2tCLEdBQVIsQ0FBWUMsT0FBWixDQUFvQixZQUFwQixFQUFrQyxVQUFTQyxDQUFULEVBQVlDLEtBQVosRUFBbUI7QUFDMUQsVUFBSUEsS0FBSyxLQUFLLFVBQWQsRUFBMEI7QUFDeEIsY0FBTUMsUUFBUSxHQUFHLGFBQWFDLElBQUksQ0FBQ0MsR0FBTCxFQUE5Qjs7QUFDQS9GLGNBQU0sQ0FBQzZGLFFBQUQsQ0FBTixHQUFtQixVQUFTRyxHQUFULEVBQWM7QUFDL0J6QixpQkFBTyxDQUFDMEIsWUFBUixHQUF1QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVILEdBQWYsQ0FBdkI7QUFDRCxTQUZEOztBQUdBLGVBQU9ILFFBQVA7QUFDRDs7QUFDRCxVQUFJRCxLQUFLLElBQUlMLFdBQVcsQ0FBQ2EsY0FBekIsRUFBeUM7QUFDdkMsZUFBT2IsV0FBVyxDQUFDYSxjQUFaLENBQTJCUixLQUEzQixDQUFQO0FBQ0Q7QUFDRixLQVhNLENBQVA7QUFZRCxHQWhGd0MsQ0FrRnpDOzs7QUFDQVIsWUFBVSxDQUFDYixPQUFELEVBQVVTLFFBQVYsRUFBb0I7QUFDNUI7QUFDQSxRQUFJLENBQUNULE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNrQixHQUFyQixJQUE0QixDQUFDbEIsT0FBTyxDQUFDOEIsUUFBekMsRUFBbUQ7QUFDakQ7QUFDRCxLQUoyQixDQU01Qjs7O0FBQ0EsVUFBTUMsZUFBZSxHQUFHL0IsT0FBTyxDQUFDZ0MsUUFBUixHQUFtQkMsZ0RBQW5CLEdBQStCQyx1REFBdkQsQ0FQNEIsQ0FTNUI7O0FBQ0FILG1CQUFlLENBQ2IsS0FBS2hCLFFBQUwsQ0FBY2YsT0FBZCxDQURhLEVBRWJtQyxHQUFHLElBQUk7QUFDTDtBQUNBLFVBQUlDLFlBQVksR0FBR0QsR0FBRyxHQUFHQSxHQUFHLENBQUNDLFlBQVAsR0FBc0IsRUFBNUMsQ0FGSyxDQUlMO0FBQ0E7QUFDQTs7QUFDQSxVQUFJcEMsT0FBTyxDQUFDMEIsWUFBWixFQUEwQjtBQUN4QlUsb0JBQVksR0FBR3BDLE9BQU8sQ0FBQzBCLFlBQXZCO0FBQ0EsZUFBTzFCLE9BQU8sQ0FBQzBCLFlBQWY7QUFDRCxPQVZJLENBWUw7OztBQUNBLFdBQUtXLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixFQUFtQzdCLFFBQW5DLEVBQTZDVCxPQUE3QyxFQUFzRG9DLFlBQXREO0FBQ0QsS0FoQlksRUFpQmIsS0FBS3JHLE9BQUwsQ0FBYXdHLE9BakJBLEVBa0JidkMsT0FBTyxDQUFDd0MsSUFsQkssRUFtQmJ4QyxPQUFPLENBQUN5QyxPQW5CSyxDQUFmLENBVjRCLENBZ0M1QjtBQUNELEdBcEh3QyxDQXNIekM7QUFDQTtBQUNBOzs7QUFDQUosb0JBQWtCLENBQUU1QixRQUFGLEVBQVlULE9BQVosRUFBcUJvQyxZQUFyQixFQUFvQztBQUNwRDtBQUNBLFVBQU1NLG9CQUFvQixHQUFHQyxXQUFXLElBQUk7QUFDMUM7QUFDQTtBQUNBLFVBQUksQ0FBQ2pGLE1BQUwsRUFBYTtBQUNYLGFBQUtrRixlQUFMLENBQXNCbkMsUUFBdEIsRUFBZ0NrQyxXQUFoQztBQUNEO0FBQ0YsS0FORCxDQUZvRCxDQVVwRDtBQUNBOzs7QUFDQSxVQUFNakYsTUFBTSxHQUFHc0MsT0FBTyxDQUFDOEIsUUFBUixDQUFpQlksb0JBQWpCLEVBQXVDTixZQUF2QyxDQUFmOztBQUVBLFFBQUkxRSxNQUFKLEVBQVk7QUFDVixXQUFLa0YsZUFBTCxDQUFzQm5DLFFBQXRCLEVBQWdDL0MsTUFBaEM7QUFDRDtBQUNGLEdBMUl3QyxDQTRJekM7QUFDQTs7O0FBQ0FrRixpQkFBZSxDQUFDbkMsUUFBRCxFQUFXL0MsTUFBWCxFQUFtQjtBQUNoQztBQUNBLFFBQUlBLE1BQU0sWUFBWWdELEtBQWxCLElBQTRCaEQsTUFBTSxJQUFJQSxNQUFNLENBQUNTLEtBQWpELEVBQXlEO0FBQ3ZEc0MsY0FBUSxDQUFDNkIsSUFBVCxDQUFjLElBQWQsRUFBb0I1RSxNQUFwQixFQUE0QixJQUE1QjtBQUNELEtBRkQsTUFFTztBQUNMK0MsY0FBUSxDQUFDNkIsSUFBVCxDQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEI1RSxNQUExQjtBQUNEO0FBQ0YsR0FySndDLENBdUp6QztBQUNBOzs7QUFDQW9ELHVCQUFxQixDQUFDK0IsR0FBRCxFQUFNTCxJQUFOLEVBQVk7QUFDL0IsUUFBSUssR0FBSixFQUFTO0FBQ1AsV0FBS0MsUUFBTCxDQUFjRCxHQUFkO0FBRUEsWUFBTUUsV0FBVyxHQUFHLEtBQUtoRCxjQUFMLEVBQXBCOztBQUVBLFVBQUlnRCxXQUFKLEVBQWlCO0FBQ2YsYUFBS2xDLFVBQUwsQ0FBZ0JrQyxXQUFoQixFQUE2QixLQUFLakMscUJBQUwsQ0FBMkI1RSxJQUEzQixDQUFnQyxJQUFoQyxDQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUs4RyxlQUFMLENBQXFCVixJQUFyQixDQUNFLElBREYsRUFFRSxLQUFLMUIsYUFGUCxFQUdFLElBQUlGLEtBQUosQ0FBVSxxQkFBVixDQUhGO0FBS0Q7QUFDRixLQWRELE1BY087QUFDTCxXQUFLc0MsZUFBTCxDQUFxQlYsSUFBckIsQ0FBMEIsSUFBMUIsRUFBZ0MsS0FBSzNCLGdCQUFyQyxFQUF1RDZCLElBQXZEO0FBQ0Q7QUFDRjs7QUFFRHZCLHVCQUFxQixHQUFHO0FBQ3RCLFVBQU1sRCxHQUFHLEdBQUcsS0FBS2hDLE9BQUwsQ0FBYW1FLFFBQWIsQ0FBc0IsS0FBS0osbUJBQTNCLENBQVo7O0FBRUEsUUFBSSxPQUFPL0IsR0FBUCxJQUFjLFFBQWxCLEVBQTRCO0FBQzFCLGFBQU87QUFBQzNDLFlBQUksRUFBRTJDO0FBQVAsT0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJLE9BQU9BLEdBQVAsSUFBYyxVQUFsQixFQUE4QjtBQUNuQyxhQUFPQSxHQUFHLEVBQVY7QUFDRCxLQUZNLE1BRUQsSUFBSXlDLDREQUFhLENBQUN6QyxHQUFELENBQWpCLEVBQXdCO0FBQzVCLGFBQU9BLEdBQVA7QUFDRCxLQUZLLE1BRUM7QUFDTCxhQUFPLEVBQVA7QUFDRDtBQUNGLEdBekx3QyxDQTJMekM7OztBQUNBaUYsaUJBQWUsQ0FBQ0MsRUFBRCxFQUFLVCxJQUFMLEVBQVc7QUFDeEIsU0FBSzFDLG1CQUFMLEdBQTJCLENBQUMsQ0FBNUI7QUFFQW1ELE1BQUUsSUFBSUEsRUFBRSxDQUFDVCxJQUFELENBQVI7QUFDRDs7QUFFRE0sVUFBUSxDQUFDRCxHQUFELEVBQU07QUFDWkssV0FBTyxDQUFDQyxJQUFSLENBQ0csZUFBYyxLQUFLckQsbUJBQW9CLE1BQUssS0FBS0csZUFBTCxDQUFxQixLQUFLSCxtQkFBMUIsRUFBK0NvQixHQUFJLHNDQURsRyxFQUVHMkIsR0FGSDtBQUlEOztBQXZNd0MsQzs7Ozs7Ozs7Ozs7O0FDZDNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBYWUsTUFBTTVFLEtBQU4sU0FBb0JyQyw2Q0FBcEIsQ0FBeUI7QUFDdENDLGFBQVcsQ0FBRUUsT0FBRixFQUFXcUgsYUFBWCxFQUEyQjtBQUNwQyxVQUFPdEgsc0RBQVAsRUFBdUJDLE9BQXZCO0FBQ0EsU0FBS3NILGNBQUwsR0FBc0JELGFBQWEsSUFBSTtBQUNyQ0UsZUFBUyxFQUFRckksc0RBRG9CO0FBRXJDc0ksa0JBQVksRUFBS3JJLHdEQUFhQTtBQUZPLEtBQXZDO0FBSUEsU0FBS3NJLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLENBQUMsQ0FBRSxZQUFXO0FBQ2pDLFlBQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxZQUFNQyxLQUFLLEdBQUc7QUFDWkMsU0FBQyxFQUFFLGVBRFM7QUFFWkMsVUFBRSxFQUFFLGdCQUZRO0FBR1pDLFdBQUcsRUFBRSxpQkFITztBQUlaQyxZQUFJLEVBQUUsZUFKTTtBQUtaQyxlQUFPLEVBQUU7QUFMRyxPQUFkOztBQVFBLFdBQUssSUFBSUMsTUFBVCxJQUFtQk4sS0FBbkIsRUFBMEI7QUFDeEIsWUFDRUEsS0FBSyxDQUFDTyxjQUFOLENBQXFCRCxNQUFyQixLQUNBLE9BQU9ULEVBQUUsQ0FBQ1csS0FBSCxDQUFTRixNQUFNLEdBQUcsV0FBbEIsQ0FBUCxLQUEwQyxXQUY1QyxFQUdFO0FBQ0EsaUJBQU9OLEtBQUssQ0FBQ00sTUFBRCxDQUFaO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPLEVBQVA7QUFDRCxLQW5Cc0IsRUFBdkIsQ0FQb0MsQ0E0QnBDOztBQUNBLFFBQUksS0FBS0csYUFBTCxFQUFKLEVBQTBCO0FBQ3hCO0FBQ0EsV0FBS3ZJLE9BQUwsQ0FBYTJELE9BQWIsR0FBdUIsS0FBdkI7QUFDRCxLQWhDbUMsQ0FpQ3BDOzs7QUFDQSxRQUFJLEtBQUszRCxPQUFMLENBQWF3SSxhQUFiLENBQTJCQyxRQUEzQixDQUFvQ2xILFFBQVEsQ0FBQ21ILFFBQTdDLENBQUosRUFBNEQ7QUFDMUQsV0FBSzFJLE9BQUwsQ0FBYTJELE9BQWIsR0FBdUIsS0FBdkI7QUFDRDs7QUFDRCxRQUFJLEtBQUszRCxPQUFMLENBQWEySSxhQUFiLENBQTJCRixRQUEzQixDQUFvQ2xILFFBQVEsQ0FBQ21ILFFBQTdDLENBQUosRUFBNEQ7QUFDMUQsV0FBSzFJLE9BQUwsQ0FBYTJELE9BQWIsR0FBdUIsSUFBdkI7QUFDRCxLQXZDbUMsQ0F5Q3BDOzs7QUFDQSxRQUFJaUYsV0FBVyxHQUFHLEtBQUs1SSxPQUFMLENBQWFOLE1BQWIsQ0FDZjBGLE9BRGUsQ0FDUCxhQURPLEVBQ1EsS0FBS3lELGVBQUwsR0FBdUJDLElBQXZCLENBQTRCLEdBQTVCLENBRFIsRUFFZjFELE9BRmUsQ0FFUCxjQUZPLEVBRVMsS0FBSzJELG1CQUFMLEVBRlQsQ0FBbEIsQ0ExQ29DLENBOENwQzs7QUFDQSxVQUFNQyxVQUFVLEdBQUcsS0FBS2hKLE9BQUwsQ0FBYWlKLFlBQWhDOztBQUNBLFFBQUksT0FBT0QsVUFBUCxJQUFxQixRQUFyQixJQUFpQ0EsVUFBVSxDQUFDOUgsTUFBaEQsRUFBeUQ7QUFDdkQwSCxpQkFBVyxHQUFHSSxVQUFkO0FBQ0QsS0FsRG1DLENBb0RwQztBQUNBOzs7QUFFQSxRQUFJLEtBQUtoSixPQUFMLENBQWFrSixNQUFqQixFQUF5QjtBQUN2QjtBQUNBLFlBQU1DLE9BQU8sR0FBRyxLQUFLQyxZQUFMLENBQW1CLDBCQUF5QlIsV0FBWSxRQUF4RCxDQUFoQjtBQUVBTyxhQUFPLENBQUNiLEtBQVIsQ0FBY2UsT0FBZCxHQUF3QixFQUF4QixDQUp1QixDQUlJOztBQUMzQixXQUFLQyxPQUFMLEdBQWVILE9BQU8sQ0FBQ0ksVUFBdkIsQ0FMdUIsQ0FLVzs7QUFDbEMsV0FBS0QsT0FBTCxDQUFhaEIsS0FBYixDQUFtQmUsT0FBbkIsR0FBNkIsTUFBN0I7QUFDQSxXQUFLQyxPQUFMLENBQWFFLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGNBQTNCO0FBQ0QsS0FSRCxNQVFPO0FBQ0wsV0FBS0gsT0FBTCxHQUFlLEtBQUtGLFlBQUwsQ0FBa0JSLFdBQWxCLENBQWY7QUFDRDs7QUFFRCxTQUFLYyxnQkFBTDtBQUNBLFNBQUtDLGlCQUFMOztBQUVBLFFBQUksS0FBSzNKLE9BQUwsQ0FBYTRKLFFBQWpCLEVBQTJCO0FBQ3pCLFdBQUtBLFFBQUw7QUFDRDtBQUNGOztBQUVEbEgsTUFBSSxHQUFHO0FBQ0wsUUFBSSxDQUFDLEtBQUs0RyxPQUFWLEVBQW1COztBQUVuQixRQUFJLENBQUMsS0FBSy9HLE1BQUwsRUFBTCxFQUFvQjtBQUNsQixVQUFJLEtBQUttRixhQUFULEVBQXdCO0FBQ3RCLGFBQUttQyxNQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS1AsT0FBTCxDQUFhaEIsS0FBYixDQUFtQmUsT0FBbkIsR0FBNkIsRUFBN0I7QUFDRDs7QUFFRCxXQUFLQyxPQUFMLENBQWFRLGdCQUFiLENBQStCLDJCQUEvQixFQUE2REMsT0FBN0QsQ0FBc0VDLFFBQVEsSUFBSTtBQUNoRkEsZ0JBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUFJQyxLQUFKLENBQVUsUUFBVixDQUF2QjtBQUNELE9BRkQ7O0FBSUEsVUFBSSxLQUFLbEssT0FBTCxDQUFhd0QsU0FBakIsRUFBNEI7QUFDMUIsYUFBS2Isa0JBQUw7QUFDRDs7QUFDRCxXQUFLdkMsSUFBTCxDQUFXLGFBQVg7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRDs7QUFFRG9DLE9BQUssQ0FBRTJILFVBQUYsRUFBZTtBQUNsQixRQUFJLENBQUMsS0FBS2IsT0FBVixFQUFtQjs7QUFFbkIsUUFBSSxLQUFLL0csTUFBTCxFQUFKLEVBQW1CO0FBQ2pCLFVBQUksS0FBS21GLGFBQVQsRUFBd0I7QUFDdEIsYUFBSzBDLE9BQUw7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLZCxPQUFMLENBQWFoQixLQUFiLENBQW1CZSxPQUFuQixHQUE2QixNQUE3QjtBQUNEOztBQUVELFVBQUljLFVBQVUsSUFBSSxLQUFLbkssT0FBTCxDQUFhd0QsU0FBL0IsRUFBMEM7QUFDeEMsYUFBS2Isa0JBQUwsQ0FBd0IsSUFBeEI7QUFDRDs7QUFDRCxXQUFLdkMsSUFBTCxDQUFXLGFBQVg7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRDs7QUFFRHlKLFFBQU0sR0FBRztBQUNQLFVBQU1sQyxFQUFFLEdBQUcsS0FBSzJCLE9BQWhCO0FBRUEsUUFBSSxDQUFDLEtBQUs1QixhQUFOLElBQXVCLENBQUNDLEVBQTVCLEVBQWdDLE9BSHpCLENBS1A7QUFDQTtBQUNBOztBQUNBLFFBQUksS0FBSzBDLGVBQVQsRUFBMEI7QUFDeEIsV0FBS0MsWUFBTCxDQUFrQjNDLEVBQWxCO0FBQ0Q7O0FBRUQsUUFBSUEsRUFBRSxDQUFDNkIsU0FBSCxDQUFhZSxRQUFiLENBQXNCLGNBQXRCLENBQUosRUFBMkM7QUFDekM1QyxRQUFFLENBQUNXLEtBQUgsQ0FBU2UsT0FBVCxHQUFtQixFQUFuQjs7QUFFQSxVQUFJLEtBQUtySixPQUFMLENBQWFrSixNQUFqQixFQUF5QjtBQUN2QixhQUFLSSxPQUFMLENBQWFrQixVQUFiLENBQXdCbEMsS0FBeEIsQ0FBOEJtQyxTQUE5QixHQUEwQyxLQUFLbkIsT0FBTCxDQUFhb0IsWUFBYixHQUE0QixJQUF0RTtBQUNEOztBQUVELFlBQU1DLGFBQWEsR0FBRyxFQUF0QixDQVB5QyxDQU9oQjtBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFdBQUtDLGNBQUwsR0FBc0J6SSxVQUFVLENBQzlCLE1BQU0sS0FBSzBJLFdBQUwsQ0FBaUJsRCxFQUFqQixDQUR3QixFQUU5QmdELGFBRjhCLENBQWhDO0FBSUQ7QUFDRjtBQUVEOzs7Ozs7QUFJQUUsYUFBVyxDQUFFdkIsT0FBRixFQUFZO0FBQ3JCLFNBQUtzQixjQUFMLEdBQXNCLElBQXRCO0FBQ0F0QixXQUFPLENBQUNFLFNBQVIsQ0FBa0JzQixNQUFsQixDQUF5QixjQUF6QjtBQUNEOztBQUVEVixTQUFPLEdBQUc7QUFDUixRQUFJLENBQUMsS0FBSzFDLGFBQU4sSUFBdUIsQ0FBQyxLQUFLNEIsT0FBakMsRUFBMEM7O0FBRTFDLFFBQUksS0FBS3NCLGNBQVQsRUFBeUI7QUFDdkJHLGtCQUFZLENBQUMsS0FBS0gsY0FBTixDQUFaO0FBQ0EsV0FBS0MsV0FBTCxDQUFpQixLQUFLdkIsT0FBdEI7QUFDRDs7QUFFRCxRQUFJLENBQUMsS0FBS0EsT0FBTCxDQUFhRSxTQUFiLENBQXVCZSxRQUF2QixDQUFnQyxjQUFoQyxDQUFMLEVBQXNEO0FBQ3BELFVBQUksS0FBS3ZLLE9BQUwsQ0FBYWtKLE1BQWpCLEVBQXlCO0FBQ3ZCLGFBQUtJLE9BQUwsQ0FBYWtCLFVBQWIsQ0FBd0JsQyxLQUF4QixDQUE4Qm1DLFNBQTlCLEdBQTBDLEVBQTFDO0FBQ0Q7O0FBRUQsV0FBS0osZUFBTCxHQUF1QixNQUFNLEtBQUtDLFlBQUwsQ0FBa0IsS0FBS2hCLE9BQXZCLENBQTdCOztBQUNBLFdBQUtBLE9BQUwsQ0FBYTBCLGdCQUFiLENBQThCLEtBQUtDLGFBQW5DLEVBQWtELEtBQUtaLGVBQXZEO0FBRUEsV0FBS2YsT0FBTCxDQUFhRSxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixjQUEzQjtBQUNEO0FBQ0Y7O0FBRURhLGNBQVksQ0FBQzNDLEVBQUQsRUFBSztBQUNmQSxNQUFFLENBQUNXLEtBQUgsQ0FBU2UsT0FBVCxHQUFtQixNQUFuQixDQURlLENBQ1c7O0FBQzFCMUIsTUFBRSxDQUFDdUQsbUJBQUgsQ0FBdUIsS0FBS0QsYUFBNUIsRUFBMkMsS0FBS1osZUFBaEQ7QUFDQSxTQUFLQSxlQUFMLEdBQXVCLElBQXZCO0FBQ0Q7O0FBRUQ5SCxRQUFNLEdBQUc7QUFDUCxXQUNFLEtBQUsrRyxPQUFMLElBQ0EsS0FBS0EsT0FBTCxDQUFhaEIsS0FBYixDQUFtQmUsT0FBbkIsS0FBK0IsRUFEL0IsS0FFQyxLQUFLM0IsYUFBTCxHQUFxQixDQUFDLEtBQUs0QixPQUFMLENBQWFFLFNBQWIsQ0FBdUJlLFFBQXZCLENBQWdDLGNBQWhDLENBQXRCLEdBQXdFLElBRnpFLENBREY7QUFLRDs7QUFFRDVILG9CQUFrQixDQUFDd0ksSUFBRCxFQUFPO0FBQ3ZCLFFBQUksS0FBS0MsU0FBVCxFQUFvQixLQUFLQSxTQUFMLENBQWU5QyxLQUFmLENBQXFCZSxPQUFyQixHQUErQjhCLElBQUksR0FBRyxFQUFILEdBQVEsTUFBM0M7QUFDckI7O0FBRUQxSSxjQUFZLENBQUM0SSxXQUFELEVBQWM7QUFDeEIsU0FBS3JMLE9BQUwsQ0FBYTJELE9BQWIsR0FBdUIsSUFBdkI7QUFDQSxTQUFLWixhQUFMO0FBRUEsU0FBSzNDLElBQUwsQ0FBVyxjQUFYOztBQUVBLFFBQUksQ0FBQ2lMLFdBQUwsRUFBa0I7QUFDaEIsV0FBS3pCLFFBQUw7QUFDRDtBQUNGO0FBRUQ7Ozs7OztBQUlBMEIsYUFBVyxHQUFHO0FBQ1osV0FBTyxLQUFLQyxXQUFMLEdBQW1CQyxJQUFuQixDQUF5QjFJLE1BQU0sSUFBSSxDQUFDLENBQUNBLE1BQXJDLENBQVA7QUFDRDtBQUVEOzs7Ozs7QUFJQTJJLGNBQVksR0FBRztBQUNiLFdBQU8sS0FBS0YsV0FBTCxHQUFtQmpMLEdBQW5CLENBQXdCd0MsTUFBTSxJQUFJQSxNQUFNLEtBQUs1RCxzREFBWCxJQUEwQjRELE1BQU0sS0FBSzNELHdEQUF2RSxDQUFQO0FBQ0QsR0EvTnFDLENBaU90Qzs7O0FBQ0F5SyxVQUFRLEdBQUc7QUFDVCxVQUFNMEIsV0FBVyxHQUFHLEtBQUtBLFdBQUwsRUFBcEI7O0FBQ0EsUUFBSSxDQUFDQSxXQUFELElBQWdCLEtBQUt0TCxPQUFMLENBQWEyRCxPQUFqQyxFQUEwQztBQUN4QyxXQUFLakIsSUFBTDtBQUNELEtBRkQsTUFFTyxJQUFJNEksV0FBVyxJQUFJLEtBQUt0TCxPQUFMLENBQWF3RCxTQUFoQyxFQUEyQztBQUNoRCxXQUFLYixrQkFBTCxDQUF3QixJQUF4QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7Ozs7QUFTQUUsYUFBVyxHQUFHO0FBQ1osVUFBTTtBQUFFeEQsVUFBRjtBQUFRcU0sZ0JBQVI7QUFBb0JDLFlBQXBCO0FBQTRCQyxVQUE1QjtBQUFrQ0M7QUFBbEMsUUFBNkMsS0FBSzdMLE9BQUwsQ0FBYVMsTUFBaEU7O0FBRUEsVUFBTXFMLG9CQUFvQixHQUFHLENBQUVDLFlBQUYsRUFBZ0JqSixNQUFoQixLQUE0QjtBQUN2RCxVQUFJbEMsNERBQWEsQ0FBQ2tDLE1BQUQsQ0FBakIsRUFBMkI7QUFDekIsY0FBTXRDLFVBQVUsR0FBR25CLElBQUksR0FBQyxHQUFMLEdBQVMwTSxZQUE1QjtBQUNBLGNBQU1DLGNBQWMsR0FBR3JMLHdEQUFTLENBQUNILFVBQUQsQ0FBaEM7O0FBQ0EsWUFBSSxDQUFDd0wsY0FBRCxJQUFtQmxKLE1BQU0sS0FBSzNELHdEQUFsQyxFQUFpRDtBQUMvQzhNLGtFQUFTLENBQUN6TCxVQUFELEVBQWFzQyxNQUFiLEVBQXFCNEksVUFBckIsRUFBaUNDLE1BQWpDLEVBQXlDQyxJQUF6QyxFQUErQ0MsTUFBL0MsQ0FBVDtBQUNBLGVBQUt6TCxJQUFMLENBQVcsZUFBWCxFQUE0QkksVUFBNUIsRUFBd0NzQyxNQUF4QyxFQUFnRGtKLGNBQWhEO0FBQ0Q7QUFDRixPQVBELE1BT087QUFDTCxhQUFLakosYUFBTDtBQUNEO0FBQ0YsS0FYRDs7QUFZQSxRQUFLbUosU0FBUyxDQUFDaEwsTUFBVixLQUFxQixDQUExQixFQUE4QjtBQUM1QjlCLDJEQUFVLENBQUMySyxPQUFYLENBQW9CeEosUUFBUSxJQUFJdUwsb0JBQW9CLENBQUV2TCxRQUFRLENBQUNsQixJQUFYLEVBQWlCLEtBQUtpSSxjQUFMLENBQXFCL0csUUFBUSxDQUFDbEIsSUFBOUIsQ0FBakIsQ0FBcEQ7QUFDRCxLQUZELE1BRU8sSUFBSTZNLFNBQVMsQ0FBQ2hMLE1BQVYsS0FBcUIsQ0FBekIsRUFBMkI7QUFDaEM5QiwyREFBVSxDQUFDMkssT0FBWCxDQUFvQnhKLFFBQVEsSUFBSXVMLG9CQUFvQixDQUFFdkwsUUFBUSxDQUFDbEIsSUFBWCxFQUFpQjZNLFNBQVMsQ0FBRSxDQUFGLENBQTFCLENBQXBEO0FBQ0QsS0FGTSxNQUVBLElBQUtBLFNBQVMsQ0FBQ2hMLE1BQVYsR0FBbUIsQ0FBeEIsRUFBNEI7QUFDakNnTCxlQUFTLENBQUNuQyxPQUFWLENBQW1CLENBQUVvQyxjQUFGLEVBQWtCQyxLQUFsQixLQUE2QjtBQUM5Q04sNEJBQW9CLENBQUUsS0FBS3hFLGNBQUwsQ0FBcUI4RSxLQUFyQixDQUFGLEVBQWdDRCxjQUFoQyxDQUFwQjtBQUNELE9BRkQ7QUFHRDtBQUNGO0FBRUQ7Ozs7OztBQUlBWixhQUFXLEdBQUc7QUFDWixXQUFPbk0scURBQVUsQ0FBQ2tCLEdBQVgsQ0FBZ0JDLFFBQVEsSUFBSUksd0RBQVMsQ0FBQyxLQUFLWCxPQUFMLENBQWFTLE1BQWIsQ0FBb0JwQixJQUFwQixHQUF5QixHQUF6QixHQUE2QmtCLFFBQVEsQ0FBQ2xCLElBQXZDLENBQXJDLENBQVA7QUFDRDtBQUVEOzs7OztBQUdBMEQsZUFBYSxHQUFHO0FBQ2QsVUFBTTtBQUFFMUQsVUFBRjtBQUFRc00sWUFBUjtBQUFnQkM7QUFBaEIsUUFBeUIsS0FBSzVMLE9BQUwsQ0FBYVMsTUFBNUM7QUFDQXJCLHlEQUFVLENBQUMySyxPQUFYLENBQW9CeEosUUFBUSxJQUFJO0FBQzlCMEwsOERBQVMsQ0FBQzVNLElBQUksR0FBQyxHQUFMLEdBQVNrQixRQUFRLENBQUNsQixJQUFuQixFQUF5QixFQUF6QixFQUE2QixDQUFDLENBQTlCLEVBQWlDc00sTUFBakMsRUFBeUNDLElBQXpDLENBQVQ7QUFDRCxLQUZEO0FBR0Q7O0FBRURyRCxlQUFhLEdBQUc7QUFDZCxRQUFJLENBQUM3SSxNQUFNLENBQUMyTSxTQUFQLENBQWlCQyxhQUFsQixJQUFtQzVNLE1BQU0sQ0FBQzZNLFNBQTFDLElBQXVEN00sTUFBTSxDQUFDMk0sU0FBUCxDQUFpQkUsU0FBNUUsRUFBd0Y7QUFDdEYsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTUMsY0FBYyxHQUFHLEtBQUtqQixXQUFMLEVBQXZCO0FBQ0EsVUFBTWtCLE9BQU8sR0FBR0QsY0FBYyxDQUFDbE0sR0FBZixDQUFvQixDQUFFd0MsTUFBRixFQUFVc0osS0FBVixNQUF1QjtBQUFFLE9BQUNoTixxREFBVSxDQUFDZ04sS0FBRCxDQUFWLENBQWtCL00sSUFBbkIsR0FBMEJ1Qiw0REFBYSxDQUFFa0MsTUFBRjtBQUF6QyxLQUF2QixDQUFwQixDQUFoQjtBQUNBLFVBQU00SixVQUFVLEdBQUdELE9BQU8sQ0FBQzNMLE1BQVIsQ0FBZ0I2TCxLQUFLLElBQUlBLEtBQUssQ0FBQzNMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMEwsS0FBWixFQUFtQixDQUFuQixDQUFELENBQTlCLEVBQXdEekwsTUFBeEQsR0FBaUUsQ0FBcEY7QUFDQXNMLGtCQUFjLENBQUN6QyxPQUFmLENBQXdCLENBQUVqSCxNQUFGLEVBQVVzSixLQUFWLEtBQ3RCLEtBQUs5RSxjQUFMLENBQXFCbEkscURBQVUsQ0FBRWdOLEtBQUYsQ0FBVixDQUFvQi9NLElBQXpDLE1BQW9EeUQsTUFBcEQsR0FDSUEsTUFESixHQUNhLEtBQUt3RSxjQUFMLENBQXFCbEkscURBQVUsQ0FBRWdOLEtBQUYsQ0FBVixDQUFvQi9NLElBQXpDLENBRmY7QUFJQSxXQUFPcU4sVUFBUDtBQUNELEdBN1NxQyxDQStTdEM7OztBQUNBRSxvQkFBa0IsR0FBRztBQUNuQixXQUFPLEtBQUs1TSxPQUFMLENBQWE2TSxRQUFiLENBQXNCQyxLQUF0QixDQUE2QixHQUE3QixFQUFtQ3hNLEdBQW5DLENBQXdDeU0sR0FBRyxJQUFJLFFBQU1BLEdBQXJELENBQVA7QUFDRDs7QUFFRGxFLGlCQUFlLEdBQUc7QUFDaEIsVUFBTW1FLElBQUksR0FBRyxLQUFLaE4sT0FBbEI7QUFDQSxRQUFJaU4sYUFBYSxHQUNmRCxJQUFJLENBQUNILFFBQUwsSUFBaUIsS0FBakIsSUFBMEJHLElBQUksQ0FBQ0gsUUFBTCxJQUFpQixRQUEzQyxHQUNJLFFBREosR0FFSSxVQUhOOztBQUtBLFFBQUlLLHVEQUFRLE1BQU1GLElBQUksQ0FBQ0csZ0JBQXZCLEVBQXlDO0FBQ3ZDRixtQkFBYSxHQUFHLFVBQWhCO0FBQ0Q7O0FBRUQsVUFBTUcsT0FBTyxHQUFHLENBQ2QsUUFBUUgsYUFETSxFQUNTO0FBQ3ZCLGlCQUFhRCxJQUFJLENBQUNLLElBRkosRUFFVTtBQUN4QixrQkFBY0wsSUFBSSxDQUFDTSxLQUhMLENBQWhCOztBQU1BLFFBQUlOLElBQUksQ0FBQzlELE1BQVQsRUFBaUI7QUFDZmtFLGFBQU8sQ0FBQ0csSUFBUixDQUFhLFdBQWI7QUFDRDs7QUFFREgsV0FBTyxDQUFDRyxJQUFSLENBQWFDLEtBQWIsQ0FBbUJKLE9BQW5CLEVBQTRCLEtBQUtSLGtCQUFMLEVBQTVCLEVBckJnQixDQXVCaEI7O0FBQ0EsU0FBS2EsbUJBQUwsQ0FBeUIsS0FBS3pOLE9BQUwsQ0FBYTBOLE9BQXRDLEVBeEJnQixDQTBCaEI7O0FBQ0EsUUFBSSxLQUFLQyxtQkFBVCxFQUE4QjtBQUM1QlAsYUFBTyxDQUFDRyxJQUFSLENBQWEsS0FBS0ksbUJBQWxCO0FBQ0Q7O0FBRUQsV0FBT1AsT0FBUDtBQUNEOztBQUVEckUscUJBQW1CLEdBQUc7QUFDcEIsVUFBTTZFLFlBQVksR0FBRyxFQUFyQjtBQUNBLFVBQU1aLElBQUksR0FBRyxLQUFLaE4sT0FBbEIsQ0FGb0IsQ0FJcEI7O0FBQ0EsUUFBSSxDQUFDZ04sSUFBSSxDQUFDYSxRQUFWLEVBQW9CO0FBQ2xCYixVQUFJLENBQUNjLFFBQUwsQ0FBY0MsSUFBZCxHQUFxQixFQUFyQjtBQUNBZixVQUFJLENBQUNjLFFBQUwsQ0FBY0UsV0FBZCxHQUE0QmhCLElBQUksQ0FBQ2MsUUFBTCxDQUFjRyxPQUExQztBQUNEOztBQUVEak4sVUFBTSxDQUFDQyxJQUFQLENBQVkrTCxJQUFJLENBQUNjLFFBQWpCLEVBQTJCL0QsT0FBM0IsQ0FBb0NtRSxJQUFJLElBQUk7QUFDMUNOLGtCQUFZLENBQUNNLElBQUQsQ0FBWixHQUFxQkMsZ0VBQWlCLENBQ3BDbkIsSUFBSSxDQUFDYyxRQUFMLENBQWNJLElBQWQsQ0FEb0MsRUFFcEM3TyxJQUFJLElBQUk7QUFDTixjQUFNK08sR0FBRyxHQUFHcEIsSUFBSSxDQUFDcUIsT0FBTCxDQUFhaFAsSUFBYixDQUFaO0FBQ0EsZUFBT0EsSUFBSSxJQUFJLE9BQU8rTyxHQUFQLElBQWMsUUFBdEIsSUFBa0NBLEdBQUcsQ0FBQ2xOLE1BQXRDLEdBQStDa04sR0FBL0MsR0FBcUQsRUFBNUQ7QUFDRCxPQUxtQyxDQUF0QztBQU9ELEtBUkQsRUFWb0IsQ0FvQnBCOztBQUNBLFFBQUlFLGNBQWMsR0FBR3RCLElBQUksQ0FBQ3VCLFVBQUwsQ0FBZ0J2QixJQUFJLENBQUNLLElBQXJCLENBQXJCOztBQUNBLFFBQUksQ0FBQ2lCLGNBQUwsRUFBcUI7QUFDbkJBLG9CQUFjLEdBQUd0QixJQUFJLENBQUN1QixVQUFMLENBQWdCQyxJQUFqQztBQUNELEtBeEJtQixDQTBCcEI7OztBQUNBWixnQkFBWSxDQUFDVyxVQUFiLEdBQTBCSixnRUFBaUIsQ0FBRUcsY0FBRixFQUFrQmpQLElBQUksSUFBSXVPLFlBQVksQ0FBQ3ZPLElBQUQsQ0FBdEMsQ0FBM0MsQ0EzQm9CLENBNkJwQjs7QUFDQSxRQUFJb1AsTUFBTSxHQUFHekIsSUFBSSxDQUFDMEIsT0FBTCxDQUFhMUIsSUFBSSxDQUFDeUIsTUFBbEIsQ0FBYjs7QUFDQSxRQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYQSxZQUFNLEdBQUd6QixJQUFJLENBQUMwQixPQUFMLENBQWFDLEtBQXRCO0FBQ0Q7O0FBRUQsV0FBT1IsZ0VBQWlCLENBQUNNLE1BQUQsRUFBUzlCLEtBQUssSUFBR2lCLFlBQVksQ0FBQ2pCLEtBQUQsQ0FBN0IsQ0FBeEI7QUFDRDs7QUFFRHZELGNBQVksQ0FBQ3dGLE1BQUQsRUFBUztBQUNuQixVQUFNNUIsSUFBSSxHQUFHLEtBQUtoTixPQUFsQjtBQUNBLFVBQU02TyxHQUFHLEdBQUdqSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFVBQU1pSCxJQUFJLEdBQ1I5QixJQUFJLENBQUMrQixTQUFMLElBQWtCL0IsSUFBSSxDQUFDK0IsU0FBTCxDQUFlQyxRQUFmLEtBQTRCLENBQTlDLEdBQ0loQyxJQUFJLENBQUMrQixTQURULEdBRUluSCxRQUFRLENBQUNxSCxJQUhmO0FBS0FKLE9BQUcsQ0FBQ0ssU0FBSixHQUFnQk4sTUFBaEI7QUFFQSxVQUFNakgsRUFBRSxHQUFHa0gsR0FBRyxDQUFDTSxRQUFKLENBQWEsQ0FBYixDQUFYO0FBRUF4SCxNQUFFLENBQUNXLEtBQUgsQ0FBU2UsT0FBVCxHQUFtQixNQUFuQjs7QUFFQSxRQUFJMUIsRUFBRSxDQUFDNkIsU0FBSCxDQUFhZSxRQUFiLENBQXNCLFdBQXRCLEtBQXNDLEtBQUs3QyxhQUEvQyxFQUE4RDtBQUM1REMsUUFBRSxDQUFDNkIsU0FBSCxDQUFhQyxHQUFiLENBQWlCLGNBQWpCO0FBQ0Q7O0FBRUQ5QixNQUFFLENBQUNxRCxnQkFBSCxDQUFvQixPQUFwQixFQUE2Qm9FLEtBQUssSUFBSSxLQUFLQyxpQkFBTCxDQUF3QkQsS0FBeEIsQ0FBdEM7QUFDQXpILE1BQUUsQ0FBQ21DLGdCQUFILENBQXFCLDJCQUFyQixFQUFtREMsT0FBbkQsQ0FBNERDLFFBQVEsSUFBSTtBQUN0RTtBQUNBQSxjQUFRLENBQUNzRixPQUFULEdBQW1CLEtBQUtoSSxjQUFMLENBQXFCMEMsUUFBUSxDQUFDM0ssSUFBOUIsTUFBeUNILHNEQUE1RDs7QUFDQSxVQUFJOEssUUFBUSxDQUFDM0ssSUFBVCxLQUFrQixXQUF0QixFQUFtQztBQUNqQzJLLGdCQUFRLENBQUN1RixRQUFULEdBQW9CLElBQXBCO0FBQ0F2RixnQkFBUSxDQUFDc0YsT0FBVCxHQUFtQixJQUFuQjtBQUNEOztBQUNEdEYsY0FBUSxDQUFDZ0IsZ0JBQVQsQ0FBMkIsUUFBM0IsRUFBcUMsTUFBTTtBQUN6QyxhQUFLMUQsY0FBTCxDQUFxQjBDLFFBQVEsQ0FBQzNLLElBQTlCLElBQXVDMkssUUFBUSxDQUFDc0YsT0FBVCxHQUFtQnBRLHNEQUFuQixHQUFpQ0QscURBQXhFO0FBQ0QsT0FGRDtBQUdBK0ssY0FBUSxDQUFDZ0IsZ0JBQVQsQ0FBMkIsT0FBM0IsRUFBb0NvRSxLQUFLLElBQUtBLEtBQUssQ0FBQ0ksZUFBTixFQUE5QztBQUNELEtBWEQ7QUFZQTdILE1BQUUsQ0FBQ21DLGdCQUFILENBQW9CLFVBQXBCLEVBQWdDQyxPQUFoQyxDQUF5QzBGLFFBQVEsSUFBSTtBQUNuREEsY0FBUSxDQUFDekUsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBV29FLEtBQVgsRUFBbUI7QUFDeEQsWUFBSyxTQUFTeEgsUUFBUSxDQUFDOEgsYUFBdkIsRUFBd0M7QUFDdEMsZUFBS0MsSUFBTDtBQUNBUCxlQUFLLENBQUNRLGNBQU47QUFDRDtBQUNGLE9BTEQ7QUFNRCxLQVBEOztBQVNBLFFBQUk1QyxJQUFJLENBQUM2QyxVQUFULEVBQXFCO0FBQ25CLFVBQUk7QUFDRixZQUFJLENBQUNmLElBQUksQ0FBQ3ZGLFVBQVYsRUFBc0I7QUFDcEJ1RixjQUFJLENBQUNnQixXQUFMLENBQWlCbkksRUFBakI7QUFDRCxTQUZELE1BRU87QUFDTG1ILGNBQUksQ0FBQ2lCLFlBQUwsQ0FBa0JwSSxFQUFsQixFQUFzQm1ILElBQUksQ0FBQ3ZGLFVBQTNCO0FBQ0Q7QUFDRixPQU5ELENBTUUsT0FBUW5ILEtBQVIsRUFBZ0I7QUFDaEIsY0FBTSxJQUFJdUMsS0FBSixDQUFXLGdIQUFYLENBQU47QUFDRDtBQUNGOztBQUVELFdBQU9nRCxFQUFQO0FBQ0Q7O0FBRUQwSCxtQkFBaUIsQ0FBQ0QsS0FBRCxFQUFRO0FBQ3ZCO0FBQ0EsVUFBTVksR0FBRyxHQUFHQyw4REFBZSxDQUFDYixLQUFLLENBQUNjLE1BQVAsRUFBZSxRQUFmLENBQWYsSUFBMkNkLEtBQUssQ0FBQ2MsTUFBN0Q7O0FBRUEsUUFBSUYsR0FBRyxDQUFDeEcsU0FBSixDQUFjZSxRQUFkLENBQXdCLFFBQXhCLEtBQXNDeUYsR0FBRyxDQUFDeEcsU0FBSixDQUFjZSxRQUFkLENBQXdCLFNBQXhCLENBQTFDLEVBQThFO0FBQzVFLFdBQUsxSCxXQUFMO0FBQ0EsV0FBS0wsS0FBTCxDQUFXLElBQVg7QUFDQTtBQUNEOztBQUNELFFBQUl3TixHQUFHLENBQUN4RyxTQUFKLENBQWNlLFFBQWQsQ0FBd0IsUUFBeEIsQ0FBSixFQUF3QztBQUN0QyxZQUFNa0MsT0FBTyxHQUFHdUQsR0FBRyxDQUFDRyxTQUFKLENBQWN4RCxLQUFkLENBQ2QsSUFBSXlELE1BQUosQ0FBVyxZQUFZcFIsbURBQVEsQ0FBQ3NCLEdBQVQsQ0FBYzhOLEdBQUcsSUFBSUEsR0FBRyxDQUFDaEosT0FBSixDQUFZLHFDQUFaLEVBQW1ELE1BQW5ELENBQXJCLEVBQWtGMEQsSUFBbEYsQ0FBdUYsR0FBdkYsQ0FBWixHQUEwRyxNQUFySCxDQURjLENBQWhCO0FBR0EsWUFBTTZELEtBQUssR0FBSUYsT0FBTyxJQUFJQSxPQUFPLENBQUMsQ0FBRCxDQUFuQixJQUEyQixLQUF6Qzs7QUFDQSxVQUFJRSxLQUFKLEVBQVc7QUFDVCxhQUFLOUosV0FBTCxDQUFpQjhKLEtBQWpCO0FBQ0EsYUFBS25LLEtBQUwsQ0FBVyxJQUFYO0FBQ0Q7O0FBQ0Q7QUFDRDs7QUFDRCxRQUFJd04sR0FBRyxDQUFDeEcsU0FBSixDQUFjZSxRQUFkLENBQXdCLFVBQXhCLENBQUosRUFBMEM7QUFDeEMsV0FBSzFILFdBQUwsQ0FBaUIxRCx3REFBakI7QUFDQSxXQUFLcUQsS0FBTCxDQUFXLElBQVg7QUFDQTtBQUNEOztBQUNELFFBQUl3TixHQUFHLENBQUN4RyxTQUFKLENBQWNlLFFBQWQsQ0FBd0IsV0FBeEIsQ0FBSixFQUEyQztBQUN6QyxXQUFLOUgsWUFBTDtBQUNBO0FBQ0Q7QUFDRjs7QUFFRGdMLHFCQUFtQixDQUFDQyxPQUFELEVBQVU7QUFDM0IsVUFBTTJDLE9BQU8sR0FBR0MsbURBQUksQ0FBQzFLLElBQUksQ0FBQ0MsU0FBTCxDQUFlNkgsT0FBZixDQUFELENBQXBCO0FBQ0EsVUFBTTZDLFFBQVEsR0FBRyx1QkFBdUJGLE9BQXhDO0FBQ0EsVUFBTUcsT0FBTyxHQUFHL0wsNERBQWEsQ0FBQ2lKLE9BQUQsQ0FBN0I7QUFFQSxTQUFLQyxtQkFBTCxHQUEyQjZDLE9BQU8sR0FBR0QsUUFBSCxHQUFjLElBQWhEOztBQUVBLFFBQUlDLE9BQUosRUFBYTtBQUNYQyx3RUFBbUIsQ0FBQ0osT0FBRCxFQUFVM0MsT0FBVixFQUFtQixNQUFNNkMsUUFBekIsQ0FBbkI7QUFDRDs7QUFDRCxXQUFPQyxPQUFQO0FBQ0Q7O0FBR0RFLGNBQVksQ0FBRXRCLEtBQUYsRUFBVTtBQUNwQixVQUFNeEQsSUFBSSxHQUFHd0QsS0FBSyxDQUFDdUIsWUFBTixHQUFxQnZCLEtBQUssQ0FBQ3VCLFlBQU4sRUFBckIsR0FBNkMsVUFBV0MsR0FBWCxFQUFnQnRILE9BQWhCLEVBQTBCO0FBQ2xGLGFBQVFBLE9BQVIsRUFBa0I7QUFDaEJzSCxXQUFHLENBQUNyRCxJQUFKLENBQVVqRSxPQUFWO0FBQ0FBLGVBQU8sR0FBR0EsT0FBTyxDQUFDa0IsVUFBbEI7QUFDRDs7QUFDRCxhQUFPb0csR0FBUDtBQUNELEtBTndELENBTXRELEVBTnNELEVBTW5EeEIsS0FBSyxDQUFDYyxNQU42QyxDQUF6RDs7QUFPQSxRQUFLLENBQUN0RSxJQUFOLEVBQWE7QUFDWHpFLGFBQU8sQ0FBQ0MsSUFBUixDQUFjLDZEQUFkO0FBQ0E7QUFDRDs7QUFDRCxXQUFPd0UsSUFBUDtBQUNEOztBQUVEbEMsa0JBQWdCLEdBQUc7QUFDakIsVUFBTTtBQUNKL0YsYUFESTtBQUVKRyxzQkFBZ0IsRUFBSStNLEtBRmhCO0FBR0poTixxQkFBZSxFQUFJaU4sV0FIZjtBQUlKQyx3QkFKSTtBQUtKQywwQkFMSTtBQU1KQztBQU5JLFFBT0YsS0FBS2pSLE9BUFQ7O0FBU0EsUUFBSzJELE9BQUwsRUFBZTtBQUNiLFVBQUksT0FBT2tOLEtBQVAsSUFBZ0IsUUFBaEIsSUFBNEJBLEtBQUssSUFBSSxDQUF6QyxFQUE0QztBQUMxQyxhQUFLSyxjQUFMLEdBQXNCL08sVUFBVSxDQUFFLE1BQUs7QUFDckMsZUFBS1UsV0FBTCxDQUFpQjFELHdEQUFqQjtBQUNBLGVBQUtxRCxLQUFMLENBQVcsSUFBWDtBQUNELFNBSCtCLEVBRzdCMk8sSUFBSSxDQUFDQyxLQUFMLENBQVdQLEtBQVgsQ0FINkIsQ0FBaEM7QUFJRCxPQUxELE1BS08sSUFBSSxPQUFPQyxXQUFQLElBQXNCLFFBQXRCLElBQWtDQSxXQUFXLElBQUksQ0FBckQsRUFBd0Q7QUFDN0QsYUFBS08sY0FBTCxHQUFzQixNQUFNO0FBQzFCLGNBQUkzUixNQUFNLENBQUM0UixXQUFQLEdBQXFCSCxJQUFJLENBQUNDLEtBQUwsQ0FBV04sV0FBWCxDQUF6QixFQUFrRDtBQUNoRCxnQkFBSSxLQUFLdk8sTUFBTCxFQUFKLEVBQW1CO0FBQ2pCLG1CQUFLTSxXQUFMLENBQWlCMUQsd0RBQWpCO0FBQ0EsbUJBQUtxRCxLQUFMLENBQVcsSUFBWDtBQUNEOztBQUVEOUMsa0JBQU0sQ0FBQ3dMLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUttRyxjQUExQyxFQUEwRDtBQUFFRSxxQkFBTyxFQUFFO0FBQVgsYUFBMUQ7QUFDQSxpQkFBS0YsY0FBTCxHQUFzQixJQUF0QjtBQUNEO0FBQ0YsU0FWRDs7QUFXQTNSLGNBQU0sQ0FBQ3NMLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtxRyxjQUF2QyxFQUF1RDtBQUFFRSxpQkFBTyxFQUFFO0FBQVgsU0FBdkQ7QUFDRCxPQWJNLE1BYUEsSUFBSVAsb0JBQUosRUFBMEI7QUFDL0IsYUFBS1EsYUFBTCxHQUFxQkMsR0FBRyxJQUFJO0FBQzFCLGNBQUssQ0FBQ2YsWUFBWSxDQUFFZSxHQUFGLENBQVosQ0FBb0JqRyxJQUFwQixDQUEwQmxDLE9BQU8sSUFDL0IsS0FBS3RKLE9BQUwsQ0FBYTBSLGdCQUFiLENBQThCbEcsSUFBOUIsQ0FBb0NtRyxZQUFZLElBQzlDckksT0FBTyxDQUFDRSxTQUFSLElBQXFCRixPQUFPLENBQUNFLFNBQVIsQ0FBa0JlLFFBQWxCLENBQTRCb0gsWUFBNUIsQ0FEdkIsQ0FERixDQUFOLEVBS0U7QUFDQSxpQkFBSzlPLFdBQUwsQ0FBaUIxRCx3REFBakI7QUFDQSxpQkFBS3FELEtBQUwsQ0FBVyxJQUFYO0FBRUE5QyxrQkFBTSxDQUFDd0wsbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0MsS0FBS3NHLGFBQXpDO0FBQ0E5UixrQkFBTSxDQUFDd0wsbUJBQVAsQ0FBMkIsVUFBM0IsRUFBdUMsS0FBS3NHLGFBQTVDO0FBQ0EsaUJBQUtBLGFBQUwsR0FBcUIsSUFBckI7QUFDRDtBQUNGLFNBZEQ7O0FBZ0JBOVIsY0FBTSxDQUFDc0wsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBS3dHLGFBQXRDO0FBQ0E5UixjQUFNLENBQUNzTCxnQkFBUCxDQUF3QixVQUF4QixFQUFvQyxLQUFLd0csYUFBekM7QUFDRCxPQW5CTSxNQW1CQSxJQUFJVCxrQkFBSixFQUF3QjtBQUM3QixhQUFLYSxXQUFMLEdBQW1CSCxHQUFHLElBQUk7QUFDeEIsY0FBS2YsWUFBWSxDQUFFZSxHQUFGLENBQVosQ0FBb0JqRyxJQUFwQixDQUEwQnFHLElBQUksSUFBSSxPQUFPQSxJQUFJLENBQUNDLE9BQVosS0FBd0IsV0FBeEIsSUFBdUNELElBQUksQ0FBQ0MsT0FBTCxLQUFpQixHQUExRixDQUFMLEVBQXVHO0FBQ3JHLGlCQUFLalAsV0FBTCxDQUFrQjFELHdEQUFsQjtBQUNBLGlCQUFLcUQsS0FBTCxDQUFZLElBQVo7QUFDQTlDLGtCQUFNLENBQUN3TCxtQkFBUCxDQUEyQixPQUEzQixFQUFvQyxLQUFLMEcsV0FBekM7QUFDQSxpQkFBS0EsV0FBTCxHQUFtQixJQUFuQjtBQUNEO0FBQ0YsU0FQRDs7QUFRQWxTLGNBQU0sQ0FBQ3NMLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLEtBQUs0RyxXQUF0QztBQUNELE9BVk0sTUFVQSxJQUFLWCxpQkFBTCxFQUF5QjtBQUM1QixhQUFLYyxVQUFMLEdBQWtCM0MsS0FBSyxJQUFJO0FBQ3pCLGdCQUFNO0FBQUU0QztBQUFGLGNBQWM1QyxLQUFwQjs7QUFDQSxjQUFLNEMsT0FBTyxLQUFLLEVBQWpCLEVBQXNCO0FBQ3BCLGlCQUFLblAsV0FBTCxDQUFrQjNELHNEQUFsQjtBQUNBLGlCQUFLc0QsS0FBTCxDQUFZLElBQVo7QUFDRCxXQUhELE1BR08sSUFBS3dQLE9BQU8sS0FBSyxFQUFqQixFQUFxQjtBQUMxQixpQkFBS25QLFdBQUwsQ0FBa0IxRCx3REFBbEI7QUFDQSxpQkFBS3FELEtBQUwsQ0FBWSxJQUFaO0FBQ0Q7QUFDRixTQVREOztBQVVBOUMsY0FBTSxDQUFDc0wsZ0JBQVAsQ0FBeUIsWUFBekIsRUFBdUMsS0FBSytHLFVBQTVDO0FBQ0g7QUFDRjtBQUNGOztBQUVEcEksbUJBQWlCLEdBQUc7QUFDbEI7QUFDQSxRQUFJLEtBQUszSixPQUFMLENBQWFxTixJQUFiLElBQXFCLE1BQXJCLElBQStCLEtBQUtyTixPQUFMLENBQWE0RCxXQUFiLElBQTRCLElBQS9ELEVBQXFFLEtBQUs1RCxPQUFMLENBQWF3RCxTQUFiLEdBQXlCLElBQXpCLENBRm5ELENBR2xCOztBQUNBLFFBQUkwSix1REFBUSxFQUFaLEVBQWdCLEtBQUtsTixPQUFMLENBQWFpUyxnQkFBYixHQUFnQyxLQUFoQzs7QUFFaEIsUUFBSSxLQUFLalMsT0FBTCxDQUFhd0QsU0FBakIsRUFBNEI7QUFDMUIsWUFBTTRKLE9BQU8sR0FBRyxLQUFLUixrQkFBTCxFQUFoQjs7QUFDQSxVQUFJLEtBQUs1TSxPQUFMLENBQWFpUyxnQkFBakIsRUFBbUM7QUFDakM3RSxlQUFPLENBQUNHLElBQVIsQ0FBYSxZQUFiO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLSSxtQkFBVCxFQUE4QjtBQUM1QlAsZUFBTyxDQUFDRyxJQUFSLENBQWEsS0FBS0ksbUJBQWxCO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLM04sT0FBTCxDQUFhc04sS0FBakIsRUFBd0I7QUFDdEJGLGVBQU8sQ0FBQ0csSUFBUixDQUFhLGNBQVksS0FBS3ZOLE9BQUwsQ0FBYXNOLEtBQXRDO0FBQ0Q7O0FBQ0RuRyxhQUFPLENBQUMrSyxHQUFSLENBQWEsS0FBS2xTLE9BQUwsQ0FBYXFPLE9BQWIsQ0FBcUI4RCxNQUFsQztBQUNBLFlBQU0vRyxTQUFTLEdBQUcsS0FBS3BMLE9BQUwsQ0FBYW9MLFNBQWIsQ0FDZmhHLE9BRGUsQ0FDUCxhQURPLEVBQ1FnSSxPQUFPLENBQUN0RSxJQUFSLENBQWEsR0FBYixDQURSLEVBRWYxRCxPQUZlLENBRVAsWUFGTyxFQUVPLEtBQUtwRixPQUFMLENBQWFxTyxPQUFiLENBQXFCOEQsTUFGNUIsQ0FBbEI7QUFJQSxXQUFLL0csU0FBTCxHQUFpQixLQUFLaEMsWUFBTCxDQUFrQmdDLFNBQWxCLENBQWpCO0FBRUEsWUFBTTRFLEdBQUcsR0FBRyxLQUFLNUUsU0FBakI7O0FBQ0EsVUFBSSxLQUFLcEwsT0FBTCxDQUFhaVMsZ0JBQWpCLEVBQW1DO0FBQ2pDLGNBQU1HLFdBQVcsR0FBR0MsdURBQVEsQ0FBQyxVQUFTWixHQUFULEVBQWM7QUFDekMsY0FBSWEsTUFBTSxHQUFHLEtBQWI7QUFDQSxnQkFBTUMsSUFBSSxHQUFHLEVBQWI7QUFDQSxnQkFBTUMsSUFBSSxHQUFHOVMsTUFBTSxDQUFDK1MsV0FBUCxHQUFxQixFQUFsQzs7QUFFQSxjQUFPekMsR0FBRyxDQUFDeEcsU0FBSixDQUFjZSxRQUFkLENBQXdCLFFBQXhCLEtBQXNDa0gsR0FBRyxDQUFDaUIsT0FBSixHQUFjSCxJQUF0RCxJQUNHdkMsR0FBRyxDQUFDeEcsU0FBSixDQUFjZSxRQUFkLENBQXdCLFdBQXhCLEtBQXlDa0gsR0FBRyxDQUFDaUIsT0FBSixHQUFjRixJQUQvRCxFQUN3RTtBQUN0RUYsa0JBQU0sR0FBRyxJQUFUO0FBQ0Q7O0FBRUQsY0FBSUEsTUFBTSxJQUFJLENBQUN0QyxHQUFHLENBQUN4RyxTQUFKLENBQWNlLFFBQWQsQ0FBd0IsV0FBeEIsQ0FBZixFQUF1RDtBQUNuRHlGLGVBQUcsQ0FBQ3hHLFNBQUosQ0FBY0MsR0FBZCxDQUFtQixXQUFuQjtBQUNILFdBRkQsTUFFTyxJQUFLLENBQUM2SSxNQUFELElBQVd0QyxHQUFHLENBQUN4RyxTQUFKLENBQWNlLFFBQWQsQ0FBd0IsV0FBeEIsQ0FBaEIsRUFBd0Q7QUFDM0R5RixlQUFHLENBQUN4RyxTQUFKLENBQWNzQixNQUFkLENBQXNCLFdBQXRCO0FBQ0g7QUFDRixTQWYyQixFQWV6QixHQWZ5QixDQUE1QjtBQWlCQSxhQUFLc0gsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQTFTLGNBQU0sQ0FBQ3NMLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDb0gsV0FBckM7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0RwUCxTQUFPLEdBQUU7QUFDUG1FLFdBQU8sQ0FBQ0MsSUFBUixDQUFjLGVBQWQ7O0FBQ0EsUUFBSyxLQUFLa0MsT0FBVixFQUFtQjtBQUNqQixXQUFLQSxPQUFMLENBQWF3QixNQUFiO0FBQ0Q7O0FBQ0QsUUFBSyxLQUFLTSxTQUFWLEVBQXFCO0FBQ25CLFdBQUtBLFNBQUwsQ0FBZU4sTUFBZjtBQUNEOztBQUNELFFBQUssS0FBS3VHLGNBQVYsRUFBMEI7QUFDeEIzUixZQUFNLENBQUN3TCxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLbUcsY0FBMUM7QUFDRDs7QUFDRCxRQUFLLEtBQUtHLGFBQVYsRUFBMEI7QUFDeEI5UixZQUFNLENBQUN3TCxtQkFBUCxDQUEyQixPQUEzQixFQUFvQyxLQUFLc0csYUFBekM7QUFDQTlSLFlBQU0sQ0FBQ3dMLG1CQUFQLENBQTJCLFVBQTNCLEVBQXVDLEtBQUtzRyxhQUE1QztBQUNEOztBQUNELFFBQUssS0FBS0ksV0FBVixFQUF3QjtBQUN0QmxTLFlBQU0sQ0FBQ3dMLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DLEtBQUswRyxXQUF6QztBQUNEOztBQUNELFFBQUssS0FBS0csVUFBVixFQUF1QjtBQUNyQnJTLFlBQU0sQ0FBQ3NMLGdCQUFQLENBQXlCLFlBQXpCLEVBQXVDLEtBQUsrRyxVQUE1QztBQUNEO0FBQ0Y7O0FBOW5CcUMsQzs7Ozs7Ozs7Ozs7O0FDeEJ4QztBQUFBOztBQUVlO0FBQ2I7QUFDQTtBQUNBO0FBQ0FuTyxhQUFXLEVBQUUsSUFKQTtBQU1iO0FBQ0FOLFFBQU0sRUFBRSxDQUNOLElBRE0sRUFFTixJQUZNLEVBR04sSUFITSxFQUlOLElBSk0sRUFLTixJQUxNLEVBTU4sSUFOTSxFQU9OLElBUE0sRUFRTixJQVJNLEVBU04sSUFUTSxFQVVOLElBVk0sRUFXTixJQVhNLEVBWU4sSUFaTSxFQWFOLElBYk0sRUFjTixJQWRNLEVBZU4sSUFmTSxFQWdCTixJQWhCTSxFQWlCTixJQWpCTSxFQWtCTixJQWxCTSxFQW1CTixJQW5CTSxFQW9CTixJQXBCTSxFQXFCTixJQXJCTSxFQXNCTixJQXRCTSxFQXVCTixJQXZCTSxFQXdCTixJQXhCTSxFQXlCTixJQXpCTSxFQTBCTixJQTFCTSxFQTJCTixJQTNCTSxFQTRCTixJQTVCTSxFQTZCTixJQTdCTSxFQThCTixJQTlCTSxFQStCTixJQS9CTSxDQVBLO0FBeUNiO0FBQ0FFLFdBQVMsRUFBRSxDQUNULElBRFMsRUFFVCxJQUZTLEVBR1QsSUFIUyxFQUlULElBSlMsRUFLVCxJQUxTLEVBTVQsSUFOUyxFQU9ULElBUFMsRUFRVCxJQVJTLEVBU1QsSUFUUyxFQVVULElBVlMsRUFXVCxJQVhTLEVBWVQsSUFaUyxDQTFDRTtBQXlEYjtBQUNBO0FBQ0FDLGdCQUFjLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkI7QUEzREgsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBOztBQUVBLE1BQU1rUCxPQUFPLEdBQUc1UixHQUFHLElBQUksSUFBSTRELEtBQUosQ0FBVSxhQUFhNUQsR0FBRyxDQUFDTyxJQUFKLElBQVksU0FBekIsSUFBc0MsS0FBdEMsR0FBOENQLEdBQUcsQ0FBQ3FCLEtBQTVELENBQXZCOztBQUVlO0FBQ2I7QUFDQTtBQUNBO0FBQ0FvRSxTQUFPLEVBQUUsSUFKSTtBQU1iO0FBQ0FyQyxVQUFRLEVBQUUsQ0FDUjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFIUSxHQVBHO0FBZ0NiSyxvQkFBa0IsRUFBRTtBQUNsQm9PLFVBQU0sRUFBRSxZQUFXO0FBQ2pCLGFBQU87QUFDTDtBQUNBek4sV0FBRyxFQUFFLGFBRkE7QUFHTHVCLGVBQU8sRUFBRSxDQUFDLDBCQUFELENBSEo7QUFJTFgsZ0JBQVEsRUFBRSxVQUFTOE0sSUFBVCxFQUFlQyxRQUFmLEVBQXlCO0FBQ2pDLGNBQUk7QUFDRixrQkFBTUMsSUFBSSxHQUFHbk4sSUFBSSxDQUFDb04sS0FBTCxDQUFXRixRQUFYLENBQWI7QUFDQSxtQkFBT0MsSUFBSSxDQUFDM1EsS0FBTCxHQUNIdVEsT0FBTyxDQUFDSSxJQUFELENBREosR0FFSDtBQUNFelIsa0JBQUksRUFBRXlSLElBQUksQ0FBQ3JQO0FBRGIsYUFGSjtBQUtELFdBUEQsQ0FPRSxPQUFPb0QsR0FBUCxFQUFZO0FBQ1osbUJBQU82TCxPQUFPLENBQUM7QUFBQ3ZRLG1CQUFLLEVBQUUsdUJBQXVCMEUsR0FBdkIsR0FBNkI7QUFBckMsYUFBRCxDQUFkO0FBQ0Q7QUFDRjtBQWZJLE9BQVA7QUFpQkQsS0FuQmlCO0FBcUJsQjtBQUNBbU0sWUFBUSxFQUFFLFlBQVc7QUFDbkIsYUFBTztBQUNMO0FBQ0E5TixXQUFHLEVBQ0QsaUZBSEc7QUFJTGMsZ0JBQVEsRUFBRSxJQUpMO0FBSVc7QUFDaEJGLGdCQUFRLEVBQUUsVUFBUzhNLElBQVQsRUFBZUMsUUFBZixFQUF5QjtBQUNqQyxjQUFJO0FBQ0Ysa0JBQU1DLElBQUksR0FBR25OLElBQUksQ0FBQ29OLEtBQUwsQ0FBV0YsUUFBWCxDQUFiO0FBQ0EsbUJBQU9DLElBQUksQ0FBQ0csVUFBTCxJQUFtQixPQUFuQixHQUNIUCxPQUFPLENBQUM7QUFBQ3ZRLG1CQUFLLEVBQUUyUSxJQUFJLENBQUNJO0FBQWIsYUFBRCxDQURKLEdBRUg7QUFDRTdSLGtCQUFJLEVBQUV5UixJQUFJLENBQUMxUjtBQURiLGFBRko7QUFLRCxXQVBELENBT0UsT0FBT3lGLEdBQVAsRUFBWTtBQUNaLG1CQUFPNkwsT0FBTyxDQUFDO0FBQUN2USxtQkFBSyxFQUFFLHVCQUF1QjBFLEdBQXZCLEdBQTZCO0FBQXJDLGFBQUQsQ0FBZDtBQUNEO0FBQ0Y7QUFoQkksT0FBUDtBQWtCRCxLQXpDaUI7QUEyQ2xCc00sV0FBTyxFQUFFLFlBQVc7QUFDbEIsYUFBTztBQUNMO0FBQ0E7QUFDQWpPLFdBQUcsRUFBRSxnREFIQTtBQUlMYyxnQkFBUSxFQUFFLElBSkw7QUFJVztBQUNoQkYsZ0JBQVEsRUFBRSxVQUFTOE0sSUFBVCxFQUFlO0FBQ3ZCO0FBQ0EsY0FBSSxDQUFDblQsTUFBTSxDQUFDMlQsTUFBWixFQUFvQjtBQUNsQlIsZ0JBQUksQ0FDRixJQUFJbE8sS0FBSixDQUNFLHFHQURGLENBREUsQ0FBSjtBQUtBO0FBQ0Q7O0FBRUQwTyxnQkFBTSxDQUFDM1AsT0FBUCxDQUNFLFVBQVNuQyxRQUFULEVBQW1CO0FBQ2pCLGdCQUFJO0FBQ0ZzUixrQkFBSSxDQUFDO0FBQ0h2UixvQkFBSSxFQUFFQyxRQUFRLENBQUNtQyxPQUFULENBQWlCNFA7QUFEcEIsZUFBRCxDQUFKO0FBR0QsYUFKRCxDQUlFLE9BQU94TSxHQUFQLEVBQVk7QUFDWitMLGtCQUFJLENBQUNGLE9BQU8sQ0FBQzdMLEdBQUQsQ0FBUixDQUFKO0FBQ0Q7QUFDRixXQVRILEVBVUUsVUFBU0EsR0FBVCxFQUFjO0FBQ1orTCxnQkFBSSxDQUFDRixPQUFPLENBQUM3TCxHQUFELENBQVIsQ0FBSjtBQUNELFdBWkgsRUFYdUIsQ0EwQnZCO0FBQ0E7QUFDRDtBQWpDSSxPQUFQO0FBbUNEO0FBL0VpQjtBQWhDUCxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTs7QUFFQTtBQUVlO0FBQ2I7QUFDQW5ELFNBQU8sRUFBRSxJQUZJO0FBSWI7QUFDQW9MLFdBQVMsRUFBRSxJQUxFO0FBT2I7QUFDQXRPLFFBQU0sRUFBRTtBQUNOO0FBQ0FwQixRQUFJLEVBQUUsc0JBRkE7QUFHTjtBQUNBdU0sUUFBSSxFQUFFLEdBSkE7QUFLTjtBQUNBO0FBQ0FELFVBQU0sRUFBRSxXQVBGO0FBUU47QUFDQUQsY0FBVSxFQUFFLEdBVE47QUFVTjtBQUNBRyxVQUFNLEVBQUU7QUFYRixHQVJLO0FBc0JiO0FBQ0F3QyxTQUFPLEVBQUU7QUFDUGtGLFVBQU0sRUFBRyw4QkFERjtBQUVQdEYsV0FBTyxFQUFFLGlGQUZGO0FBR1B1RixXQUFPLEVBQUUsU0FIRjtBQUlQQyxTQUFLLEVBQUksZUFKRjtBQUtQQyxRQUFJLEVBQUssU0FMRjtBQU1QM0YsUUFBSSxFQUFLLFlBTkY7QUFPUDRGLFFBQUksRUFBSywrQkFQRjtBQVFQblIsU0FBSyxFQUFJLFNBUkY7QUFTUDBOLFVBQU0sRUFBRyxRQVRGO0FBVVAwRCxRQUFJLEVBQUssTUFWRjtBQVdQekIsVUFBTSxFQUFHO0FBWEYsR0F2Qkk7QUFxQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBckUsVUFBUSxFQUFFO0FBQ1J5RixVQUFNLEVBQUUsZ0RBREE7QUFFUnRGLFdBQU8sRUFDTCxxRUFITTtBQUlSRCxlQUFXLEVBQ1QsMk9BTE07QUFNUndGLFdBQU8sRUFDSixvRkFBbUZyVSxpRUFBYyxtQkFQNUY7QUFRUnNVLFNBQUssRUFDRiw0RUFBMkV2VSwrREFBWSxpQkFUbEY7QUFVUndVLFFBQUksRUFDRCwwRUFBeUV6VSw4REFBVyxnQkFYL0U7QUFZUjhPLFFBQUksRUFDRix1S0FiTTtBQWNSdkwsU0FBSyxFQUNILHNHQWZNO0FBZ0JScEQsY0FBVSxFQUFFLCtCQUNWQSw4REFBVSxDQUFDa0IsR0FBWCxDQUFnQixDQUFFQyxRQUFGLEVBQVk2TCxLQUFaLEtBQ2I7K0RBQ3NEN0wsUUFBUSxDQUFDbEIsSUFBSyxtQ0FBa0NrQixRQUFRLENBQUNsQixJQUFLLFdBQVVrQixRQUFRLENBQUNsQixJQUFLLE1BQUtrQixRQUFRLENBQUNsQixJQUFLOzBFQUM5RmtCLFFBQVEsQ0FBQ2xCLElBQUssaUNBQWdDK00sS0FBSyxHQUFDLENBQUU7O2NBRWxIN0wsUUFBUSxDQUFDakIsV0FBWTs7Y0FMN0IsRUFRRXdKLElBUkYsQ0FRTyxFQVJQLENBRFUsR0FVUixPQTFCSTtBQTJCUjhLLFFBQUksRUFBRyxrREEzQkMsQ0E0QlI7O0FBNUJRLEdBMUNHO0FBeUViO0FBQ0E7QUFDQTtBQUNBbFUsUUFBTSxFQUNKLGtNQTdFVztBQStFYm1VLE9BQUssRUFBRSxFQS9FTTtBQWlGYjtBQUNBO0FBQ0F6SSxXQUFTLEVBQUUscURBbkZFO0FBcUZiO0FBQ0FtRCxZQUFVLEVBQUU7QUFDVkMsUUFBSSxFQUFFLDZEQURJO0FBRVYsY0FDRSw2RkFIUTtBQUlWLGVBQ0Usa0ZBTFE7QUFNVnBQLGNBQVUsRUFBRTtBQU5GLEdBdEZDO0FBK0ZiO0FBQ0FpTyxNQUFJLEVBQUUsTUFoR087QUFnR0M7QUFFZDtBQUNBcUIsU0FBTyxFQUFFO0FBQ1A7QUFDQUMsU0FBSyxFQUFXLGdCQUZUO0FBR1AsbUJBQWdCLHlCQUhUO0FBSVAsb0JBQWdCLDBCQUpULENBS1A7QUFDQTs7QUFOTyxHQW5HSTtBQTRHYjtBQUNBRixRQUFNLEVBQUUsT0E3R0s7QUErR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBNUIsVUFBUSxFQUFFLFFBcEhHO0FBb0hPO0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBUyxPQUFLLEVBQUUsT0E1SE07QUE4SGI7QUFDQTtBQUNBcEUsUUFBTSxFQUFFLEtBaElLO0FBa0liO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBd0UsU0FBTyxFQUFFLElBM0lJO0FBNkliO0FBQ0E7QUFDQWxLLFdBQVMsRUFBRSxLQS9JRTtBQWlKYjtBQUNBeU8sa0JBQWdCLEVBQUUsSUFsSkw7QUFvSmI7QUFDQTtBQUNBcEUsVUFBUSxFQUFFLElBdEpHO0FBd0piO0FBQ0FoSyxpQkFBZSxFQUFFLEtBekpKO0FBMkpiO0FBQ0FDLGtCQUFnQixFQUFFLEtBNUpMO0FBOEpiO0FBQ0FrTixzQkFBb0IsRUFBRSxLQS9KVDtBQWlLYjtBQUNBRCxvQkFBa0IsRUFBRSxLQWxLUDtBQW9LYjtBQUNBRSxtQkFBaUIsRUFBRSxLQXJLTjtBQXVLYjtBQUNBO0FBQ0FTLGtCQUFnQixFQUFFLENBQUMsV0FBRCxFQUFjLFFBQWQsRUFBd0IsU0FBeEIsQ0F6S0w7QUF5S3lDO0FBRXREO0FBQ0E7QUFDQTlILFVBQVEsRUFBRSxJQTdLRztBQStLYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWlHLFlBQVUsRUFBRSxJQXJMQztBQXVMYjtBQUNBMUMsa0JBQWdCLEVBQUUsS0F4TEw7QUEwTGI7QUFDQTtBQUNBO0FBQ0F4RSxlQUFhLEVBQUUsRUE3TEY7QUE4TGJILGVBQWEsRUFBRSxFQTlMRjtBQWdNYjtBQUNBO0FBQ0E7QUFDQVMsY0FBWSxFQUFFO0FBbk1ELENBQWYsRTs7Ozs7Ozs7Ozs7QUNKQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLCtSQUFtSjs7QUFFckw7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTs7QUFFTyxNQUFNL0MsU0FBUyxHQUFHLENBQUVmLEdBQUYsRUFBT1ksUUFBUCxFQUFpQlMsT0FBakIsS0FBOEI7QUFDckQsTUFBSXNOLFVBQUo7QUFDQSxRQUFNQyxTQUFTLEdBQUduTSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbEI7QUFFQWtNLFdBQVMsQ0FBQzFHLElBQVYsR0FBaUIsV0FBV2xJLEdBQUcsQ0FBQ2tJLElBQUosSUFBWSxZQUF2QixDQUFqQjtBQUNBMEcsV0FBUyxDQUFDQyxHQUFWLEdBQWdCN08sR0FBRyxDQUFDNk8sR0FBSixJQUFXN08sR0FBM0I7QUFDQTRPLFdBQVMsQ0FBQ0UsS0FBVixHQUFrQixLQUFsQjs7QUFFQUYsV0FBUyxDQUFDRyxrQkFBVixHQUErQkMsQ0FBQyxDQUFDQyxNQUFGLEdBQVcsWUFBVztBQUNuRDtBQUNBLFVBQU1DLEtBQUssR0FBR04sU0FBUyxDQUFDTyxVQUF4QjtBQUVBdkosZ0JBQVksQ0FBQytJLFVBQUQsQ0FBWjs7QUFFQSxRQUFJLENBQUMvTixRQUFRLENBQUM4TSxJQUFWLEtBQW1CLENBQUN3QixLQUFELElBQVUsa0JBQWtCRSxJQUFsQixDQUF1QkYsS0FBdkIsQ0FBN0IsQ0FBSixFQUFpRTtBQUMvRHRPLGNBQVEsQ0FBQzhNLElBQVQsR0FBZ0IsSUFBaEI7QUFDQTlNLGNBQVE7QUFDUmdPLGVBQVMsQ0FBQ0csa0JBQVYsR0FBK0JILFNBQVMsQ0FBQ0ssTUFBVixHQUFtQixJQUFsRDtBQUNEO0FBQ0YsR0FYRDs7QUFhQXhNLFVBQVEsQ0FBQ3FILElBQVQsQ0FBY2EsV0FBZCxDQUEwQmlFLFNBQTFCLEVBckJxRCxDQXVCckQ7QUFDQTs7QUFDQUQsWUFBVSxHQUFHM1IsVUFBVSxDQUFDLFlBQVc7QUFDakM0RCxZQUFRLENBQUM4TSxJQUFULEdBQWdCLElBQWhCO0FBQ0E5TSxZQUFRO0FBQ1JnTyxhQUFTLENBQUNHLGtCQUFWLEdBQStCSCxTQUFTLENBQUNLLE1BQVYsR0FBbUIsSUFBbEQ7QUFDRCxHQUpzQixFQUlwQjVOLE9BSm9CLENBQXZCO0FBS0QsQ0E5Qk07QUFnQ0EsTUFBTUwsZ0JBQWdCLEdBQUcsQ0FBRWhCLEdBQUYsRUFBT3FQLFVBQVAsRUFBbUJoTyxPQUFuQixFQUE0QmlPLFFBQTVCLEVBQXNDQyxjQUF0QyxLQUEwRDtBQUN4RixRQUFNdE8sR0FBRyxHQUFHLEtBQUsxRyxNQUFNLENBQUNpVixjQUFQLElBQXlCalYsTUFBTSxDQUFDa1YsYUFBckMsRUFDVixvQkFEVSxDQUFaO0FBSUF4TyxLQUFHLENBQUMxRCxJQUFKLENBQVMrUixRQUFRLEdBQUcsTUFBSCxHQUFZLEtBQTdCLEVBQW9DdFAsR0FBcEMsRUFBeUMsQ0FBekM7QUFFQWlCLEtBQUcsQ0FBQ3lPLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLG1DQUFyQzs7QUFFQSxNQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsY0FBZCxDQUFKLEVBQW1DO0FBQ2pDLFNBQUssSUFBSU0sQ0FBQyxHQUFHLENBQVIsRUFBV0MsQ0FBQyxHQUFHUCxjQUFjLENBQUN4VCxNQUFuQyxFQUEyQzhULENBQUMsR0FBR0MsQ0FBL0MsRUFBa0QsRUFBRUQsQ0FBcEQsRUFBdUQ7QUFDckQsWUFBTWxJLEtBQUssR0FBRzRILGNBQWMsQ0FBQ00sQ0FBRCxDQUFkLENBQWtCbEksS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkIsQ0FBN0IsQ0FBZDtBQUNBMUcsU0FBRyxDQUFDeU8sZ0JBQUosQ0FDRS9ILEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUzFILE9BQVQsQ0FBaUIsWUFBakIsRUFBK0IsRUFBL0IsQ0FERixFQUVFMEgsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTMUgsT0FBVCxDQUFpQixZQUFqQixFQUErQixFQUEvQixDQUZGO0FBSUQ7QUFDRjs7QUFFRCxNQUFJLE9BQU9vUCxVQUFQLElBQXFCLFVBQXpCLEVBQXFDO0FBQ25DcE8sT0FBRyxDQUFDOE4sa0JBQUosR0FBeUIsWUFBVztBQUNsQyxVQUFJOU4sR0FBRyxDQUFDa08sVUFBSixHQUFpQixDQUFyQixFQUF3QjtBQUN0QkUsa0JBQVUsQ0FBQ3BPLEdBQUQsQ0FBVjtBQUNEO0FBQ0YsS0FKRDtBQUtEOztBQUVEQSxLQUFHLENBQUM4TyxJQUFKLENBQVNULFFBQVQ7QUFDRCxDQTVCTSxDOzs7Ozs7Ozs7Ozs7QUNsQ1A7QUFBQTtBQUFBO0FBQUE7O0FBRU8sTUFBTTlULFNBQVMsR0FBR3RCLElBQUksSUFBSTtBQUMvQixRQUFNOFYsS0FBSyxHQUFHLE1BQU12TixRQUFRLENBQUNuSCxNQUE3QjtBQUNBLFFBQU0yVSxLQUFLLEdBQUdELEtBQUssQ0FBQ3JJLEtBQU4sQ0FBWSxNQUFNek4sSUFBTixHQUFhLEdBQXpCLENBQWQ7QUFDQSxTQUFPK1YsS0FBSyxDQUFDbFUsTUFBTixHQUFlLENBQWYsR0FDSEwsU0FERyxHQUVIdVUsS0FBSyxDQUNGQyxHQURILEdBRUd2SSxLQUZILENBRVMsR0FGVCxFQUdHd0ksS0FISCxFQUZKO0FBTUQsQ0FUTTtBQVdBLE1BQU1ySixTQUFTLEdBQUcsVUFBVzVNLElBQVgsRUFBaUI4VixLQUFqQixFQUF3QnpKLFVBQXhCLEVBQW9DQyxNQUFwQyxFQUE0Q0MsSUFBNUMsRUFBa0RDLE1BQWxELEVBQTJEO0FBQ2xGLFFBQU0wSixNQUFNLEdBQUcsSUFBSS9QLElBQUosRUFBZjtBQUNBK1AsUUFBTSxDQUFDQyxRQUFQLENBQWdCRCxNQUFNLENBQUNFLFFBQVAsS0FBcUIsQ0FBQyxPQUFPL0osVUFBUCxLQUFzQixRQUF0QixHQUFrQyxHQUFsQyxHQUF3Q0EsVUFBekMsSUFBd0QsRUFBN0Y7QUFDQTlELFVBQVEsQ0FBQ25ILE1BQVQsR0FBa0JwQixJQUFJLEdBQUcsR0FBUCxHQUFhOFYsS0FBYixHQUNBLFdBREEsR0FDY0ksTUFBTSxDQUFDRyxXQUFQLEVBRGQsR0FFQSxRQUZBLElBRVk5SixJQUFJLElBQUksR0FGcEIsS0FHRUQsTUFBTSxHQUFHLGFBQWFBLE1BQWhCLEdBQXlCLEVBSGpDLEtBSUVFLE1BQU0sR0FBRyxTQUFILEdBQWUsRUFKdkIsQ0FBbEI7QUFLRCxDQVJNLEM7Ozs7Ozs7Ozs7OztBQ2JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFFTyxNQUFNb0UsZUFBZSxHQUFHLENBQUU0QixJQUFGLEVBQVExQixTQUFSLEtBQzdCLENBQUMwQixJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDckgsVUFBZixHQUNFLElBREYsR0FDU3FILElBQUksQ0FBQ3JJLFNBQUwsQ0FBZWUsUUFBZixDQUF3QjRGLFNBQXhCLElBQ1AwQixJQURPLEdBQ0E1QixlQUFlLENBQUM0QixJQUFJLENBQUNySCxVQUFOLEVBQWtCMkYsU0FBbEIsQ0FIbkI7QUFLQSxNQUFNTSxtQkFBbUIsR0FBRyxDQUFDa0YsRUFBRCxFQUFLakksT0FBTCxFQUFjdEYsTUFBZCxLQUF5QjtBQUMxRCxRQUFNd04sV0FBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBTTtBQUFFM1QsU0FBRjtBQUFTNFQsVUFBVDtBQUFpQkMsYUFBakI7QUFBNEJDO0FBQTVCLE1BQTJDckksT0FBakQsQ0FGMEQsQ0FJMUQ7O0FBQ0EsTUFBSXpMLEtBQUosRUFBVztBQUNQO0FBQ0FBLFNBQUssQ0FBQytULElBQU4sR0FBYS9ULEtBQUssQ0FBQytULElBQU4sR0FBYS9ULEtBQUssQ0FBQytULElBQW5CLEdBQTBCQywwREFBVyxDQUFDaFUsS0FBSyxDQUFDaVUsVUFBUCxDQUFsRDtBQUNBalUsU0FBSyxDQUFDOEwsSUFBTixHQUFhOUwsS0FBSyxDQUFDOEwsSUFBTixHQUFhOUwsS0FBSyxDQUFDOEwsSUFBbkIsR0FBMEI5TCxLQUFLLENBQUMrVCxJQUE3QztBQUNBSixlQUFXLENBQUN4TixNQUFNLEdBQUcsZ0JBQVQsR0FBNEJBLE1BQTVCLEdBQXFDLG9CQUF0QyxDQUFYLEdBQXlFLENBQ3JFLFlBQVluRyxLQUFLLENBQUMrVCxJQURtRCxFQUVyRSx1QkFBdUIvVCxLQUFLLENBQUNpVSxVQUZ3QyxDQUF6RTtBQUlBTixlQUFXLENBQUN4TixNQUFNLEdBQUcsWUFBVixDQUFYLEdBQXFDLENBQ2pDLFlBQVluRyxLQUFLLENBQUMrVCxJQURlLEVBRWpDLHVCQUF1Qi9ULEtBQUssQ0FBQ2lVLFVBRkksQ0FBckM7QUFJQU4sZUFBVyxDQUFDeE4sTUFBTSxHQUFHLFlBQVYsQ0FBWCxHQUFxQyxDQUNqQyxZQUFZbkcsS0FBSyxDQUFDK1QsSUFEZSxFQUVqQyx1QkFBdUIvVCxLQUFLLENBQUNpVSxVQUZJLENBQXJDO0FBSUFOLGVBQVcsQ0FDUHhOLE1BQU0sR0FBRyxZQUFULEdBQXdCQSxNQUF4QixHQUFpQyxtQkFBakMsR0FBdURBLE1BQXZELEdBQWdFLG1CQUR6RCxDQUFYLEdBRUksQ0FBQyxZQUFZbkcsS0FBSyxDQUFDOEwsSUFBbkIsQ0FGSjs7QUFJQSxRQUFJOEgsTUFBSixFQUFZO0FBQ1I7QUFDQUEsWUFBTSxDQUFDRyxJQUFQLEdBQWNILE1BQU0sQ0FBQ0csSUFBUCxHQUFjSCxNQUFNLENBQUNHLElBQXJCLEdBQTRCQywwREFBVyxDQUFDSixNQUFNLENBQUNLLFVBQVIsQ0FBckQ7QUFDQUwsWUFBTSxDQUFDTSxNQUFQLEdBQWdCTixNQUFNLENBQUNNLE1BQVAsR0FBZ0JOLE1BQU0sQ0FBQ00sTUFBdkIsR0FBZ0MsYUFBaEQ7QUFDQVAsaUJBQVcsQ0FBQ3hOLE1BQU0sR0FBRyxVQUFWLENBQVgsR0FBbUMsQ0FDL0IsWUFBWXlOLE1BQU0sQ0FBQ0csSUFEWSxFQUUvQixtQkFBbUJILE1BQU0sQ0FBQ00sTUFGSyxFQUcvQix1QkFBdUJOLE1BQU0sQ0FBQ0ssVUFIQyxDQUFuQzs7QUFNQSxVQUFJTCxNQUFNLENBQUNPLE9BQVgsRUFBb0I7QUFDaEJSLG1CQUFXLENBQUN4TixNQUFNLEdBQUcsVUFBVixDQUFYLENBQWlDbUYsSUFBakMsQ0FBc0MsY0FBY3NJLE1BQU0sQ0FBQ08sT0FBM0Q7QUFDSDs7QUFFRCxVQUFJUCxNQUFNLENBQUNLLFVBQVAsSUFBcUIsYUFBekIsRUFBd0M7QUFDcENOLG1CQUFXLENBQUN4TixNQUFNLEdBQUcsa0JBQVQsR0FBOEJBLE1BQTlCLEdBQXVDLGdCQUF4QyxDQUFYLEdBQXVFLENBQ25FLHdCQUF3QnlOLE1BQU0sQ0FBQ1EsS0FBUCxJQUFnQkMsNERBQWEsQ0FBQ1QsTUFBTSxDQUFDSyxVQUFSLENBQXJELENBRG1FLENBQXZFO0FBR0g7O0FBRUQsVUFBSUosU0FBSixFQUFlO0FBQ1g7QUFDQUEsaUJBQVMsQ0FBQ0UsSUFBVixHQUFpQkYsU0FBUyxDQUFDRSxJQUFWLEdBQ1hGLFNBQVMsQ0FBQ0UsSUFEQyxHQUVYQywwREFBVyxDQUFDSCxTQUFTLENBQUNJLFVBQVgsQ0FGakI7QUFHQUosaUJBQVMsQ0FBQ0ssTUFBVixHQUFtQkwsU0FBUyxDQUFDSyxNQUFWLEdBQW1CTCxTQUFTLENBQUNLLE1BQTdCLEdBQXNDLGFBQXpEO0FBQ0FQLG1CQUFXLENBQUN4TixNQUFNLEdBQUcsb0NBQVYsQ0FBWCxHQUE2RCxDQUN6RCxZQUFZME4sU0FBUyxDQUFDRSxJQURtQyxFQUV6RCxtQkFBbUJGLFNBQVMsQ0FBQ0ssTUFGNEIsRUFHekQsdUJBQXVCTCxTQUFTLENBQUNJLFVBSHdCLENBQTdEO0FBS0gsT0FYRCxNQVdPO0FBQ0g7QUFDQU4sbUJBQVcsQ0FBQ3hOLE1BQU0sR0FBRyxvQ0FBVixDQUFYLEdBQTZELENBQ3pELFlBQVluRyxLQUFLLENBQUMrVCxJQUR1QyxDQUE3RDtBQUdIO0FBQ0o7O0FBRUQsUUFBSUQsVUFBSixFQUFnQjtBQUNaSCxpQkFBVyxDQUFFLEdBQUV4TixNQUFPLGtCQUFYLENBQVgsR0FBMkMsQ0FDdkMsWUFBWTJOLFVBQVUsQ0FBQ0MsSUFEZ0IsRUFFdkMsbUJBQW1CRCxVQUFVLENBQUNJLE1BRlMsRUFHdkMsdUJBQXVCSixVQUFVLENBQUNHLFVBSEssQ0FBM0M7QUFLSDtBQUNKLEdBdkV5RCxDQXlFMUQ7OztBQUNBLFFBQU01TixLQUFLLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0FTLE9BQUssQ0FBQ3FOLEVBQU4sR0FBV0EsRUFBWDtBQUNBL04sVUFBUSxDQUFDMk8sSUFBVCxDQUFjekcsV0FBZCxDQUEyQnhILEtBQTNCO0FBQ0F0SCxRQUFNLENBQUN3VixPQUFQLENBQWdCWixXQUFoQixFQUE4QjdMLE9BQTlCLENBQXVDLENBQUUsQ0FBRW1FLElBQUYsRUFBUWlILEtBQVIsQ0FBRixFQUFtQi9JLEtBQW5CLEtBQ3JDOUQsS0FBSyxDQUFDbU8sS0FBTixDQUFZQyxVQUFaLENBQXlCLEdBQUV4SSxJQUFLLElBQUdpSCxLQUFLLENBQUNyTSxJQUFOLENBQVcsR0FBWCxDQUFnQixHQUFuRCxFQUF1RHNELEtBQXZELENBREY7QUFHQSxTQUFPOUQsS0FBUDtBQUNELENBakZNLEM7Ozs7Ozs7Ozs7OztBQ1RQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNPLE1BQU0zSCxTQUFTLEdBQUdGLGlEQUFsQjtBQUNBLE1BQU13TCxTQUFTLEdBQUd4TCxpREFBbEI7QUFHQSxNQUFNME4saUJBQWlCLEdBQUcsQ0FBRUMsR0FBRixFQUFPckksUUFBUCxLQUMvQnFJLEdBQUcsQ0FBQ2hKLE9BQUosQ0FBYSwyQkFBYixFQUEyQyxDQUFFcUgsT0FBRixFQUFXa0ssUUFBWCxLQUF5QjVRLFFBQVEsQ0FBRTRRLFFBQUYsQ0FBUixJQUF3QixFQUE1RixDQURLLEMsQ0FHUDs7QUFDTyxNQUFNdEUsUUFBUSxHQUFHLENBQUN0TSxRQUFELEVBQVc2USxLQUFYLEtBQXFCO0FBQzNDLE1BQUlDLElBQUksR0FBRyxLQUFYO0FBQ0EsU0FBTyxZQUFXO0FBQ2hCLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1Q5USxjQUFRLENBQUMsR0FBR21HLFNBQUosQ0FBUjtBQUNBMkssVUFBSSxHQUFHLElBQVA7QUFDQTFVLGdCQUFVLENBQUMsWUFBVztBQUNwQjBVLFlBQUksR0FBRyxLQUFQO0FBQ0QsT0FGUyxFQUVQRCxLQUZPLENBQVY7QUFHRDtBQUNGLEdBUkQ7QUFTRCxDQVhNLEMsQ0FhUDs7QUFDTyxNQUFNdEcsSUFBSSxHQUFHbEMsR0FBRyxJQUFJO0FBQ3pCLE1BQUkwSSxPQUFPLEdBQUcsQ0FBZDtBQUFBLE1BQ0U5QixDQUFDLEdBQUcsQ0FETjtBQUFBLE1BRUUrQixHQUZGO0FBQUEsTUFHRUMsR0FBRyxHQUFHNUksR0FBRyxDQUFDbE4sTUFIWjtBQUlBLE1BQUlrTixHQUFHLENBQUNsTixNQUFKLEtBQWUsQ0FBbkIsRUFBc0IsT0FBTzRWLE9BQVA7O0FBQ3RCLE9BQU05QixDQUFOLEVBQVNBLENBQUMsR0FBR2dDLEdBQWIsRUFBa0IsRUFBRWhDLENBQXBCLEVBQXdCO0FBQ3RCK0IsT0FBRyxHQUFHM0ksR0FBRyxDQUFDNkksVUFBSixDQUFnQmpDLENBQWhCLENBQU47QUFDQThCLFdBQU8sR0FBRyxDQUFFQSxPQUFPLElBQUksQ0FBYixJQUFtQkEsT0FBbkIsR0FBNkJDLEdBQXZDO0FBQ0FELFdBQU8sSUFBSSxDQUFYO0FBQ0Q7O0FBQ0QsU0FBT0EsT0FBUDtBQUNELENBWk07QUFhUDtBQUNPLE1BQU1JLFlBQVksR0FBRzVPLG1EQUFyQjtBQUNBLE1BQU0yTixXQUFXLEdBQUczTixrREFBcEI7QUFDQSxNQUFNNk8sWUFBWSxHQUFHN08sbURBQXJCO0FBQ0EsTUFBTWdPLGFBQWEsR0FBRWhPLG9EQUFyQjtBQUVQO0FBQ08sTUFBTTJILGVBQWUsR0FBR21ILG9EQUF4QjtBQUNBLE1BQU0zRyxtQkFBbUIsR0FBRzJHLHdEQUE1QjtBQUVQO0FBQ08sTUFBTXhXLGFBQWEsR0FBR3lXLHlEQUF0QjtBQUNBLE1BQU01UyxhQUFhLEdBQUc0Uyx5REFBdEI7QUFDQSxNQUFNbkssUUFBUSxHQUFHbUssb0RBQWpCO0FBRVA7QUFDTyxNQUFNblIsU0FBUyxHQUFHb1IsZ0RBQWxCO0FBQ0EsTUFBTW5SLGdCQUFnQixHQUFHbVIsdURBQXpCOztBQUVQLE1BQU1DLGNBQWMsR0FBR0MsVUFBVSxJQUFJLENBQUN6VyxHQUFELEVBQU0sQ0FBQzBXLEdBQUQsRUFBTXRDLEtBQU4sQ0FBTixLQUF1QjtBQUMxRCxNQUFLQSxLQUFLLFlBQVluVSxNQUFqQixJQUEyQixFQUFFbVUsS0FBSyxZQUFZTCxLQUFuQixDQUFoQyxFQUE0RDtBQUMxRCxRQUFLMEMsVUFBVSxDQUFFQyxHQUFGLENBQVYsWUFBNkJ6VyxNQUE3QixJQUF1QyxFQUFFd1csVUFBVSxDQUFFQyxHQUFGLENBQVYsWUFBNkIzQyxLQUEvQixDQUE1QyxFQUFtRjtBQUNqRi9ULFNBQUcsQ0FBRTBXLEdBQUYsQ0FBSCxHQUFhelcsTUFBTSxDQUFDd1YsT0FBUCxDQUFlckIsS0FBZixFQUFzQnBULE1BQXRCLENBQTZCd1YsY0FBYyxDQUFDQyxVQUFVLENBQUNDLEdBQUQsQ0FBWCxDQUEzQyxFQUE4RCxFQUE5RCxDQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0wxVyxTQUFHLENBQUUwVyxHQUFGLENBQUgsR0FBYXRDLEtBQWI7QUFDRDtBQUNGLEdBTkQsTUFNTztBQUNMLFFBQUtxQyxVQUFVLENBQUNuUCxjQUFYLENBQTJCb1AsR0FBM0IsQ0FBTCxFQUF3QztBQUN0QzFXLFNBQUcsQ0FBRTBXLEdBQUYsQ0FBSCxHQUFhRCxVQUFVLENBQUVDLEdBQUYsQ0FBdkI7QUFDRCxLQUZELE1BRU07QUFDSjFXLFNBQUcsQ0FBRTBXLEdBQUYsQ0FBSCxHQUFhdEMsS0FBYjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT3BVLEdBQVA7QUFDRCxDQWZEOztBQWlCTyxNQUFNZCxZQUFZLEdBQUcsQ0FBRXlYLFFBQUYsRUFBWUYsVUFBWixLQUMxQnhXLE1BQU0sQ0FBQ3dWLE9BQVAsQ0FBZWtCLFFBQWYsRUFBeUIzVixNQUF6QixDQUFnQ3dWLGNBQWMsQ0FBQ0MsVUFBRCxDQUE5QyxFQUE0RCxFQUE1RCxDQURLLEM7Ozs7Ozs7Ozs7OztBQzFFUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU8sTUFBTU4sWUFBWSxHQUFHUyxHQUFHLElBQzdCQSxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVUsR0FBVixHQUNJQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLENBREosR0FDb0JELEdBQUcsQ0FBQ3pXLE1BQUosSUFBYyxDQUFkLEdBQ2hCeVcsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTQSxHQUFHLENBQUMsQ0FBRCxDQUFaLEdBQWtCQSxHQUFHLENBQUMsQ0FBRCxDQUFyQixHQUEyQkEsR0FBRyxDQUFDLENBQUQsQ0FBOUIsR0FBb0NBLEdBQUcsQ0FBQyxDQUFELENBQXZDLEdBQTZDQSxHQUFHLENBQUMsQ0FBRCxDQURoQyxHQUNzQ0EsR0FIckQsQyxDQUtQOztBQUNPLE1BQU0xQixXQUFXLEdBQUcwQixHQUFHLElBQUk7QUFDaENBLEtBQUcsR0FBR1QsWUFBWSxDQUFDUyxHQUFELENBQWxCO0FBQ0EsUUFBTUUsQ0FBQyxHQUFHQyxRQUFRLENBQUNILEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQUQsRUFBbUIsRUFBbkIsQ0FBbEI7QUFDQSxRQUFNRyxDQUFDLEdBQUdELFFBQVEsQ0FBQ0gsR0FBRyxDQUFDQyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBRCxFQUFtQixFQUFuQixDQUFsQjtBQUNBLFFBQU1JLENBQUMsR0FBR0YsUUFBUSxDQUFDSCxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFELEVBQW1CLEVBQW5CLENBQWxCO0FBQ0EsUUFBTUssR0FBRyxHQUFHLENBQUNKLENBQUMsR0FBRyxHQUFKLEdBQVVFLENBQUMsR0FBRyxHQUFkLEdBQW9CQyxDQUFDLEdBQUcsR0FBekIsSUFBZ0MsSUFBNUM7QUFDQSxTQUFPQyxHQUFHLElBQUksR0FBUCxHQUFhLE1BQWIsR0FBc0IsTUFBN0I7QUFDRCxDQVBNLEMsQ0FTUDs7QUFDTyxNQUFNZCxZQUFZLEdBQUdRLEdBQUcsSUFBSTtBQUNqQyxRQUFNTyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ1osWUFBWSxDQUFDUyxHQUFELENBQWIsRUFBb0IsRUFBcEIsQ0FBcEI7QUFBQSxRQUNFUSxHQUFHLEdBQUcsRUFEUjtBQUFBLFFBRUVDLENBQUMsR0FBRyxDQUFDRixHQUFHLElBQUksRUFBUixJQUFjQyxHQUZwQjtBQUFBLFFBR0VFLENBQUMsR0FBRyxDQUFFSCxHQUFHLElBQUksQ0FBUixHQUFhLE1BQWQsSUFBd0JDLEdBSDlCO0FBQUEsUUFJRUcsQ0FBQyxHQUFHLENBQUNKLEdBQUcsR0FBRyxRQUFQLElBQW1CQyxHQUp6QjtBQUtFLFNBQU8sTUFBTSxDQUNiLFlBQ0EsQ0FBQ0MsQ0FBQyxHQUFHLEdBQUosR0FBV0EsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFSLEdBQVlBLENBQXZCLEdBQTRCLEdBQTdCLElBQW9DLE9BRHBDLEdBRUEsQ0FBQ0MsQ0FBQyxHQUFHLEdBQUosR0FBV0EsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFSLEdBQVlBLENBQXZCLEdBQTRCLEdBQTdCLElBQW9DLEtBRnBDLElBR0NDLENBQUMsR0FBRyxHQUFKLEdBQVdBLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBUixHQUFZQSxDQUF2QixHQUE0QixHQUg3QixDQURhLEVBTVpDLFFBTlksQ0FNSCxFQU5HLEVBT1pDLEtBUFksQ0FPTixDQVBNLENBQWI7QUFRSCxDQWRNO0FBZUEsTUFBTWxDLGFBQWEsR0FBR3FCLEdBQUcsSUFBSTtBQUNsQ0EsS0FBRyxHQUFHVCxZQUFZLENBQUVTLEdBQUYsQ0FBbEIsQ0FEa0MsQ0FFbEM7O0FBQ0EsU0FBT0EsR0FBRyxLQUFLLFFBQVIsR0FBbUIsTUFBbkIsR0FBNEJSLFlBQVksQ0FBRVEsR0FBRixDQUEvQztBQUNELENBSk0sQzs7Ozs7Ozs7Ozs7O0FDakNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUVBOzs7Ozs7QUFLTyxNQUFNL1csYUFBYSxHQUFHa0MsTUFBTSxJQUFJOUQsbURBQVEsQ0FBQ3VFLE9BQVQsQ0FBaUJULE1BQWpCLEtBQTRCLENBQTVEO0FBRUEsTUFBTW9LLFFBQVEsR0FBRyxNQUN0QixpRUFBaUVxSCxJQUFqRSxDQUF1RWxJLFNBQVMsQ0FBQ29NLFNBQWpGLENBREssQyxDQUdQOztBQUNPLE1BQU1oVSxhQUFhLEdBQUcxRCxHQUFHLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLEdBQUcsS0FBSyxJQUFuQyxJQUEyQ0EsR0FBRyxDQUFDakIsV0FBSixJQUFtQmtCLE1BQTNGLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2Mtd2luZG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTsgfVxcblxcbi5jYy13aW5kb3cuY2MtaW52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4vKiBvbmx5IGFuaW1hdGUgaWZoYXMgY2xhc3MgJ2NjLWFuaW1hdGUnICovXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWdyb3dlciB7XFxuICAvKiBJbml0aWFsbHkgd2UgZG9uJ3Qgd2FudCBhbnkgaGVpZ2h0LCBhbmQgd2Ugd2FudCB0aGUgY29udGVudHMgdG8gYmUgaGlkZGVuICovXFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIFNldCBvdXIgdHJhbnNpdGlvbnMgdXAuICovXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbXMtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzOyB9XFxuXFxuLyogdGhlIHBvcHVwIHdpbmRvdyAqL1xcbi5jYy13aW5kb3csXFxuLmNjLXJldm9rZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGV4Y2x1ZGUgcGFkZGluZyB3aGVuIGRlYWxpbmcgd2l0aCB3aWR0aCAqL1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQ2FsaWJyaSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAvKiBieSBzZXR0aW5nIHRoZSBiYXNlIGZvbnQgaGVyZSwgd2UgY2FuIHNpemUgdGhlIHJlc3Qgb2YgdGhlIHBvcHVwIHVzaW5nIENTUyBgZW1gICovXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvKiB0aGUgZm9sbG93aW5nIGFyZSByYW5kb20gdW5qdXN0aWZpZWQgc3R5bGVzIC0ganVzdCBiZWNhdXNlIC0gc2hvdWxkIHByb2JhYmx5IGJlIHJlbW92ZWQgKi9cXG4gIHotaW5kZXg6IDk5OTg7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHotaW5kZXg6IDk5OTk7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljOyB9XFxuXFxuLyogMiBiYXNpYyB0eXBlcyBvZiB3aW5kb3cgLSBmbG9hdGluZyAvIGJhbm5lciAqL1xcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWF4LXdpZHRoOiAyNGVtO1xcbiAgLyogMWVtID09IDE2cHggdGhlcmVmb3JlIDI0ZW0gPT0gMzg0cHggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4vKiBjbGlja2FibGUgdGhpbmdzICovXFxuLmNjLWJ0bixcXG4uY2MtbGluayxcXG4uY2MtY2xvc2UsXFxuLmNjLXJldm9rZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2MtbGluayB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWxpbms6aG92ZXIge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jYy1saW5rOmFjdGl2ZSxcXG4uY2MtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbml0aWFsOyB9XFxuXFxuLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6aG92ZXIsXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNWVtO1xcbiAgcmlnaHQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIC8qIHNlZWluZyBhcyB0aGlzIGNvbnRhaW5zIHRleHQgYW5kIG5vdCBhbiBpbWFnZSwgdGhlIGVsZW1lbnQgdGFsbGVyIHRoYW4gaXQgaXMgd2lkZSAoYmVjYXVzZSBpdCBpcyB0ZXh0KSAqL1xcbiAgLyogIC0gd2Ugd2FudCBpdCB0byBiZSBhIHNxdWFyZSwgYmVjYXVzZSBpdCdzIGFjdGluZyBhcyBhbiBpY29uICovXFxuICAvKiAgLSBzZXR0aW5nIHRoZSBsaW5lIGhlaWdodCBub3JtYWxpemVzIHRoZSBoZWlnaHQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAwLjc1OyB9XFxuXFxuLmNjLWNsb3NlOmhvdmVyLFxcbi5jYy1jbG9zZTpmb2N1cyB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLyogVGhpcyBmaWxlIHNob3VsZCBjb250YWluIHN0eWxlcyB0aGF0IG1vZGlmaWVzIHRoZSBwb3B1cCBsYXlvdXQuICovXFxuLyogQnkgbGF5b3V0LCB3ZSBtZWFuIHRoZSBwaHlzaWNhbCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudHMgb24gdGhlIHBvcHVwIHdpbmRvdywgYW5kIHRoZSBtYXJnaW4gLyBwYWRkaW5nIGFyb3VuZCB0aG9zZSBlbGVtZW50cy4gKi9cXG4uY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDNlbTtcXG4gIHJpZ2h0OiB1bnNldDsgfVxcblxcbi5jYy1yZXZva2UuY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDNlbTtcXG4gIGxlZnQ6IHVuc2V0OyB9XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMTZweDsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZMT0FUSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogdGhlc2UgY2xhc3NlcyBwb3NpdGlvbiB0aGUgZmxvYXRpbmcgZWxlbWVudCAqL1xcbi5jYy10b3Age1xcbiAgdG9wOiAxZW07IH1cXG5cXG4uY2MtbGVmdCB7XFxuICBsZWZ0OiAxZW07IH1cXG5cXG4uY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDFlbTsgfVxcblxcbi5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAxZW07IH1cXG5cXG4vKiBsaW5rcyB0aGF0IGFyZSBkaXJlY3QgZGVjZW5kYW50cyBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGJsb2NrICovXFxuLmNjLWZsb2F0aW5nID4gLmNjLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSB7XFxuICBmbGV4OiAxIDAgYXV0bzsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEJBTk5FUiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRvcCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG4uY2MtYmFubmVyLmNjLWJvdHRvbSB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7IH1cXG5cXG4uY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTsgfVxcblxcbi8qIENPTVBMSUFOQ0UgQk9YICovXFxuLmNjLWNvbXBsaWFuY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2UgPiAuY2MtYnRuIHtcXG4gIGZsZXg6IDE7IH1cXG5cXG4uY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07IH1cXG5cXG4vKiBDYXRlZ29yaWVzIExheW91dCAqL1xcbi5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5jYy1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIGhlaWdodDogMThweDtcXG4gICAgICB3aWR0aDogMThweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4gbGFiZWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG46bm90KC5jYy1pbmZvKTpub3QoLmNjLXNhdmUpIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxLjBlbTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogNHB4OyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvOmZvY3VzICsgLmNjLXRvb2x0aXAge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBib3R0b206IDQ2cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjcpOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTRweDtcXG4gICAgICBib3gtc2hhZG93OiAycHggMXB4IDFweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7IH1cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgLmNjLXdpbmRvdyxcXG4gIC5jYy1yZXZva2Uge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmNjLWJ0biB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH0gfVxcblxcbi8qIGRpbWVuc2lvbnMgZm9yICdpUGhvbmU2IFBsdXMnIGFuZCBsb3dlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmNjLXdpbmRvdy5jYy10b3Age1xcbiAgICB0b3A6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYm90dG9tIHtcXG4gICAgYm90dG9tOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciwgLmNjLXdpbmRvdy5jYy1mbG9hdGluZywgLmNjLXdpbmRvdy5jYy1yaWdodCwgLmNjLXdpbmRvdy5jYy1sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0OyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1jb21wbGlhbmNlIHtcXG4gICAgICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2Mtd2luZG93IC5jYy1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAgIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IC5jYy1idG46bm90KC5jYy1pbmZvKSB7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAuZm9ybSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpOyB9IH1cXG5cXG4vKiBDbGFzc2ljICovXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNvbXBsaWFuY2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxleDogbm9uZTsgfVxcblxcbi5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IC0xcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDE7IH1cXG4gICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3gge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgIGxlZnQ6IDZweDtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3g6YmVmb3JlIHtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXFwxRjVGNVxcXCI7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jYy1idG4tY2hlY2tib3g6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogLTRweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjUpOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDA7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogdGhpbiBzb2xpZCBsaWdodGdyZXk7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4vKiBFZGdlbGVzcyAqL1xcbi5jYy10aGVtZS1lZGdlbGVzcy5jYy13aW5kb3cge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW46IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuOGVtIDEuOGVtO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgcGFkZGluZzogMC40ZW0gNHB4OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNlcyA9IFsgXCJERU5ZXCIsIFwiQUxMT1dcIiwgXCJESVNNSVNTXCIgXVxyXG5leHBvcnQgY29uc3Qgc3RhdHVzRGVueSA9IFwiREVOWVwiXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNBbGxvdyA9IFwiQUxMT1dcIlxyXG5leHBvcnQgY29uc3Qgc3RhdHVzRGlzbWlzcyA9IFwiRElTTUlTU1wiXHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkVTU0VOVElFTFwiLFxyXG4gICAgICAgIGV4cGxhaW5UZXh0OiBcIkNlcyBjb29raWVzIHNvbnQgZXNzZW50aWVscyBwb3VyIGxhIG5hdmlnYXRpb24gc3VyIE5leHRvcmllcy5jb21cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTVEFUSVNUSVFVRVNcIixcclxuICAgICAgICBleHBsYWluVGV4dDogXCJDZXMgY29va2llcyBwZXJtZXR0ZW50IGRlIHLDqWFsaXNlciBkZXMgc3RhdGlzdGlxdWVzIGFub255bWVzIGRlIHZpc2l0ZXMgZXQgZCd1dGlsaXNhdGlvbiBkdSBzaXRlIGludGVybmV0LlwiLFxyXG4gICAgfSAgXHJcbl1cclxuIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXHJcblxyXG5pbXBvcnQgQ29va2llQ29uc2VudCBmcm9tIFwiLi9tb2RlbHMvQ29va2llQ29uc2VudFwiXHJcblxyXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBDb29raWVDb25zZW50XHJcbn0gZWxzZSB7XHJcbiAgd2luZG93LkNvb2tpZUNvbnNlbnQgPSBDb29raWVDb25zZW50XHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgbWVyZ2VPcHRpb25zIH0gZnJvbSBcIi4uL3V0aWxzXCJcclxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCJcclxuXHJcbmNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBkZWZhdWx0T3B0aW9ucyA9IHt9LCBvcHRpb25zID0ge30gKXtcclxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxyXG4gICAgdGhpcy5vbiA9IGVtaXR0ZXIub24uYmluZCggZW1pdHRlciApXHJcbiAgICB0aGlzLmVtaXQgPSBlbWl0dGVyLmVtaXQuYmluZCggZW1pdHRlciApXHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgTGVnYWwgZnJvbSBcIi4vTGVnYWxcIlxyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vTG9jYXRpb25cIlxyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIlxyXG5cclxuaW1wb3J0IHsgc3RhdHVzZXMsIGNhdGVnb3JpZXMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBpc1ZhbGlkU3RhdHVzIH0gZnJvbSBcIi4uL3V0aWxzXCJcclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIGFwcCBieSBjb21iaW5pbmcgdGhlIHVzZSBvZiB0aGUgUG9wdXAsIExvY2F0b3IgYW5kIExhdyBtb2R1bGVzXHJcbi8vIFlvdSBjYW4gc3RyaW5nIHRvZ2V0aGVyIHRoZXNlIHRocmVlIG1vZHVsZXMgeW91cnNlbGYgaG93ZXZlciB5b3Ugd2FudCwgYnkgd3JpdGluZyBhIG5ldyBmdW5jdGlvbi5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUNvbnNlbnQgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyA9IHt9ICl7XHJcbiAgICBzdXBlciggb3B0aW9ucyApXHJcblxyXG4gICAgY29uc3QgYW5zd2VycyA9IGNhdGVnb3JpZXMubWFwKCBjYXRlZ29yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSB0aGlzLm9wdGlvbnMuY29va2llICYmIHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA/IHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA6ICdjb29raWVjb25zZW50X3N0YXR1c18nXHJcbiAgICAgIGNvbnN0IGFuc3dlciA9IGdldENvb2tpZSggY29va2llTmFtZSArIGNhdGVnb3J5Lm5hbWUgKVxyXG4gICAgICByZXR1cm4gaXNWYWxpZFN0YXR1cyhhbnN3ZXIpID8geyBbY2F0ZWdvcnkubmFtZV06IGFuc3dlciB9IDogdW5kZWZpbmVkXHJcbiAgICB9KS5maWx0ZXIob2JqID0+IG9iaiA/IG9ialtPYmplY3Qua2V5cyhvYmopWzBdXSA6IGZhbHNlKVxyXG5cclxuICAgIC8vIGlmIHRoZXkgaGF2ZSBhbHJlYWR5IGFuc3dlcmVkXHJcbiAgICBpZiAoYW5zd2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZSggeyBhbnN3ZXJzIH0pO1xyXG4gICAgfSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmxlZ2FsICYmIHRoaXMub3B0aW9ucy5sZWdhbC5jb3VudHJ5Q29kZSApIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlKCB7IGNvZGU6IHRoaXMub3B0aW9ucy5sZWdhbC5jb3VudHJ5Q29kZSB9IClcclxuICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5sb2NhdGlvbiApIHtcclxuICAgICAgbmV3IExvY2F0aW9uKCB0aGlzLm9wdGlvbnMubG9jYXRpb24gKS5sb2NhdGUoIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZS5iaW5kKCB0aGlzICksIHRoaXMuaW5pdGlhbGl6YXRpb25FcnJvci5iaW5kKCB0aGlzICkgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlKHt9KVxyXG4gICAgfVxyXG4gIH1cclxuICBpbml0aWFsaXphdGlvbkNvbXBsZXRlKCByZXN1bHQgKXtcclxuICAgIGlmIChyZXN1bHQuY29kZSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgTGVnYWwodGhpcy5vcHRpb25zLmxlZ2FsKS5hcHBseUxhdyggdGhpcy5vcHRpb25zLCByZXN1bHQuY29kZSApXHJcbiAgICB9XHJcbiAgICBjb25zdCBpbml0aWFsRGF0YSA9IHJlc3VsdC5hbnN3ZXJzICYmIHJlc3VsdC5hbnN3ZXJzLnJlZHVjZSgob2JqLCB2YWwpID0+ICh7Li4ub2JqLCAuLi52YWx9KSk7XHJcbiAgICB0aGlzLnBvcHVwID0gbmV3IFBvcHVwKCB0aGlzLm9wdGlvbnMsIGluaXRpYWxEYXRhIClcclxuICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdChcImluaXRpYWxpemVkXCIsIHRoaXMucG9wdXAsIGluaXRpYWxEYXRhICksIDAgKVxyXG4gIH1cclxuICBpbml0aWFsaXphdGlvbkVycm9yKCBlcnJvciApIHtcclxuICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdCggXCJlcnJvclwiLCBlcnJvciwgbmV3IFBvcHVwKCB0aGlzLm9wdGlvbnMgKSApLCAwIClcclxuICB9XHJcbiAgZ2V0Q291bnRyeUxhd3MoIGNvdW50cnlDb2RlICl7XHJcbiAgICByZXR1cm4gbmV3IExlZ2FsKHRoaXMub3B0aW9ucy5sZWdhbCkuZ2V0KCBjb3VudHJ5Q29kZSApXHJcbiAgfVxyXG4gIGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnBvcHVwLmlzT3BlbigpXHJcbiAgfVxyXG4gIGNsb3NlKCl7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmNsb3NlKCksIHRoaXMgKVxyXG4gIH1cclxuICByZXZva2VDaG9pY2UoKSB7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLnJldm9rZUNob2ljZSgpLCB0aGlzIClcclxuICB9XHJcbiAgb3Blbigpe1xyXG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5vcGVuKCksIHRoaXMgKVxyXG4gIH1cclxuICB0b2dnbGVSZXZva2VCdXR0b24oIGJvb2wgKSB7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLnRvZ2dsZVJldm9rZUJ1dHRvbiggYm9vbCApLCB0aGlzIClcclxuICB9XHJcbiAgc2V0U3RhdHVzZXMoIHN0YXR1cyApIHtcclxuICAgIHJldHVybiAodGhpcy5wb3B1cC5zZXRTdGF0dXNlcyggc3RhdHVzICksIHRoaXMgKVxyXG4gIH1cclxuICBjbGVhclN0YXR1c2VzKCl7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmNsZWFyU3RhdHVzZXMoKSwgdGhpcyApXHJcbiAgfVxyXG4gIGRlc3Ryb3koKXtcclxuICAgIHJldHVybiAoIHRoaXMucG9wdXAuZGVzdHJveSgpLCB0aGlzIClcclxuICB9XHJcbn1cclxuXHJcbnN0YXR1c2VzLnJlZHVjZSggKCBvYmosIHN0YXR1cyApID0+XHJcbiggT2JqZWN0LmRlZmluZVByb3BlcnR5KCBDb29raWVDb25zZW50LCBzdGF0dXMsIHtcclxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXR1cyB9LFxyXG4gIHNldDogZnVuY3Rpb24gKCkge30sXHJcbiAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgd3JpdGVhYmxlOiBmYWxzZSxcclxuICBjb25maWd1cmFibGU6IGZhbHNlXHJcbn0pLCBvYmogKSwgQ29va2llQ29uc2VudCApIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvbGVnYWxcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnYWwgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyA9IHt9ICkge1xyXG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcclxuICB9XHJcbiAgZ2V0KCBjb3VudHJ5Q29kZSApe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGFzTGF3OiB0aGlzLm9wdGlvbnMuaGFzTGF3LmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXHJcbiAgICAgIHJldm9rYWJsZTogdGhpcy5vcHRpb25zLnJldm9rYWJsZS5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxyXG4gICAgICBleHBsaWNpdEFjdGlvbjogdGhpcy5vcHRpb25zLmV4cGxpY2l0QWN0aW9uLmluZGV4T2YoY291bnRyeUNvZGUpID49IDBcclxuICAgIH1cclxuICB9XHJcbiAgYXBwbHlMYXcoIG9wdGlvbnMsIGNvdW50cnlDb2RlICl7XHJcbiAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXQoY291bnRyeUNvZGUpXHJcblxyXG4gICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xyXG4gICAgICAvLyBUaGUgY291bnRyeSBoYXMgbm8gY29va2llIGxhd1xyXG4gICAgICBvcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICB0aGlzLmVtaXQoIFwibm9Db29raWVMYXdcIiwgY291bnRyeUNvZGUsIGNvdW50cnkgKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcpIHtcclxuICAgICAgaWYgKGNvdW50cnkucmV2b2thYmxlKSB7XHJcbiAgICAgICAgLy8gV2UgbXVzdCBwcm92aWRlIGFuIG9wdGlvbiB0byByZXZva2UgY29uc2VudCBhdCBhIGxhdGVyIHRpbWVcclxuICAgICAgICBvcHRpb25zLnJldm9rYWJsZSA9IHRydWVcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvdW50cnkuZXhwbGljaXRBY3Rpb24pIHtcclxuICAgICAgICAvLyBUaGUgdXNlciBtdXN0IGV4cGxpY2l0bHkgY2xpY2sgdGhlIGNvbnNlbnQgYnV0dG9uXHJcbiAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25TY3JvbGwgPSBmYWxzZVxyXG4gICAgICAgIG9wdGlvbnMuZGlzbWlzc09uVGltZW91dCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25zXHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvbG9jYXRpb25cIlxyXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBnZXRTY3JpcHQsIG1ha2VBc3luY1JlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbHNcIlxyXG5cclxuLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyB3ZSBoYXZlIGFscmVhZHkgc2V0IHVwLlxyXG4vLyBXaGVuIHVzaW5nIGEgc2VydmljZSwgaXQgY291bGQgZWl0aGVyIHJldHVybiBhIGRhdGEgc3RydWN0dXJlIGluIHBsYWluIHRleHQgKGxpa2UgYSBKU09OIG9iamVjdCkgb3IgYW4gZXhlY3V0YWJsZSBzY3JpcHRcclxuLy8gV2hlbiB0aGUgcmVzcG9uc2UgbmVlZHMgdG8gYmUgZXhlY3V0ZWQgYnkgdGhlIGJyb3dzZXIsIHRoZW4gYGlzU2NyaXB0YCBtdXN0IGJlIHNldCB0byB0cnVlLCBvdGhlcndpc2UgaXQgd29uJ3Qgd29yay5cclxuXHJcbi8vIFdoZW4gdGhlIHNlcnZpY2UgdXNlcyBhIHNjcmlwdCwgdGhlIGNoYW5jZXMgYXJlIHRoYXQgeW91J2xsIGhhdmUgdG8gdXNlIHRoZSBzY3JpcHQgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzLiBJbiB0aGVzZVxyXG4vLyBjYXNlcywgdGhlIHNlcnZpY2VzIGBjYWxsYmFja2AgcHJvcGVydHkgaXMgY2FsbGVkIHdpdGggYSBgZG9uZWAgZnVuY3Rpb24uIFdoZW4gcGVyZm9ybWluZyBhc3luYyBvcGVyYXRpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkXHJcbi8vIHdpdGggdGhlIGRhdGEgKG9yIEVycm9yKSwgYW5kIGBjb29raWVjb25zZW50LmxvY2F0ZWAgd2lsbCB0YWtlIGNhcmUgb2YgdGhlIHJlc3RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uIGV4dGVuZHMgQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XHJcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxyXG4gICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTEgLy8gdGhlIGluZGV4IChpbiBvcHRpb25zKSBvZiB0aGUgc2VydmljZSB3ZSdyZSBjdXJyZW50bHkgdXNpbmdcclxuICB9XHJcblxyXG4gIGdldE5leHRTZXJ2aWNlKCkge1xyXG4gICAgbGV0IHNlcnZpY2VcclxuICAgIGRvIHtcclxuICAgICAgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KCsrdGhpcy5jdXJyZW50U2VydmljZUluZGV4KVxyXG4gICAgfSB3aGlsZSAoXHJcbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA8IHRoaXMub3B0aW9ucy5zZXJ2aWNlcy5sZW5ndGggJiZcclxuICAgICAgIXNlcnZpY2VcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gc2VydmljZVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VydmljZUJ5SWR4KGlkeCkge1xyXG4gICAgLy8gVGhpcyBjYW4gZWl0aGVyIGJlIHRoZSBuYW1lIG9mIGEgZGVmYXVsdCBsb2NhdGlvblNlcnZpY2UsIG9yIGEgZnVuY3Rpb24uXHJcbiAgICBjb25zdCBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cclxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zdCBkeW5hbWljT3B0cyA9IHNlcnZpY2VPcHRpb24oKVxyXG4gICAgICByZXR1cm4gZHluYW1pY09wdHMubmFtZSA/IFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICB7fSxcclxuICAgICAgICAgIGR5bmFtaWNPcHRzLFxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1sgZHluYW1pY09wdHMubmFtZSBdKCBkeW5hbWljT3B0cyApXHJcbiAgICAgICAgKSA6IGR5bmFtaWNPcHRzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXHJcbiAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgYXNzdW1lIHtuYW1lOiAnaXBpbmZvJywgLi4ub3RoZXJPcHRpb25zfVxyXG4gICAgLy8gQWxsb3dzIHVzZXIgdG8gcGFzcyBpbiBBUEkga2V5cyBldGMuXHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChzZXJ2aWNlT3B0aW9uKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uLm5hbWVdKFxyXG4gICAgICAgIHNlcnZpY2VPcHRpb25cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIHJ1bnMgdGhlIHNlcnZpY2UgbG9jYXRlZCBhdCBpbmRleCBgY3VycmVudFNlcnZpY2VJbmRleGAuXHJcbiAgLy8gSWYgdGhlIHNlcnZpY2UgZmFpbHMsIGBydW5OZXh0U2VydmljZU9uRXJyb3JgIHdpbGwgY29udGludWUgdHJ5aW5nIGVhY2ggc2VydmljZSB1bnRpbCBhbGwgZmFpbCwgb3Igb25lIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcclxuICBsb2NhdGUoY29tcGxldGUsIGVycm9yKSB7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpXHJcblxyXG4gICAgaWYgKCFzZXJ2aWNlKSB7XHJcbiAgICAgIGVycm9yKG5ldyBFcnJvcignTm8gc2VydmljZXMgdG8gcnVuJykpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSA9IGNvbXBsZXRlXHJcbiAgICB0aGlzLmNhbGxiYWNrRXJyb3IgPSBlcnJvclxyXG5cclxuICAgIHRoaXMucnVuU2VydmljZShzZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKVxyXG4gIH1cclxuXHJcbiAgLy8gUG90ZW50aWFsbHkgYWRkcyBhIGNhbGxiYWNrIHRvIGEgdXJsIGZvciBqc29ucC5cclxuICBzZXR1cFVybChzZXJ2aWNlKSB7XHJcbiAgICBjb25zdCBzZXJ2aWNlT3B0cyA9IHRoaXMuZ2V0Q3VycmVudFNlcnZpY2VPcHRzKClcclxuICAgIHJldHVybiBzZXJ2aWNlLnVybC5yZXBsYWNlKC9cXHsoLio/KVxcfS9nLCBmdW5jdGlvbihfLCBwYXJhbSkge1xyXG4gICAgICBpZiAocGFyYW0gPT09ICdjYWxsYmFjaycpIHtcclxuICAgICAgICBjb25zdCB0ZW1wTmFtZSA9ICdjYWxsYmFjaycgKyBEYXRlLm5vdygpXHJcbiAgICAgICAgd2luZG93W3RlbXBOYW1lXSA9IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgc2VydmljZS5fX0pTT05QX0RBVEEgPSBKU09OLnN0cmluZ2lmeShyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXJhbSBpbiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybCkge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybFtwYXJhbV1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIHJlcXVpcmVzIGEgYHNlcnZpY2VgIG9iamVjdCB0aGF0IGRlZmluZXMgYXQgbGVhc3QgYSBgdXJsYCBhbmQgYGNhbGxiYWNrYFxyXG4gIHJ1blNlcnZpY2Uoc2VydmljZSwgY29tcGxldGUpIHtcclxuICAgIC8vIGJhc2ljIGNoZWNrIHRvIGVuc3VyZSBpdCByZXNlbWJsZXMgYSBgc2VydmljZWBcclxuICAgIGlmICghc2VydmljZSB8fCAhc2VydmljZS51cmwgfHwgIXNlcnZpY2UuY2FsbGJhY2spIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2UgY2FsbCBlaXRoZXIgYGdldFNjcmlwdGAgb3IgYG1ha2VBc3luY1JlcXVlc3RgIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiByZXNvdXJjZVxyXG4gICAgY29uc3QgcmVxdWVzdEZ1bmN0aW9uID0gc2VydmljZS5pc1NjcmlwdCA/IGdldFNjcmlwdCA6IG1ha2VBc3luY1JlcXVlc3RcclxuXHJcbiAgICAvLyBib3RoIGZ1bmN0aW9ucyBoYXZlIHNpbWlsYXIgc2lnbmF0dXJlcyBzbyB3ZSBjYW4gcGFzcyB0aGUgc2FtZSBhcmd1bWVudHMgdG8gYm90aFxyXG4gICAgcmVxdWVzdEZ1bmN0aW9uKFxyXG4gICAgICB0aGlzLnNldHVwVXJsKHNlcnZpY2UpLFxyXG4gICAgICB4aHIgPT4ge1xyXG4gICAgICAgIC8vIGlmIGAheGhyYCwgdGhlbiBgZ2V0U2NyaXB0YCBmdW5jdGlvbiB3YXMgdXNlZCwgc28gdGhlcmUgaXMgbm8gcmVzcG9uc2UgdGV4dFxyXG4gICAgICAgIGxldCByZXNwb25zZVRleHQgPSB4aHIgPyB4aHIucmVzcG9uc2VUZXh0IDogJydcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHJlc291cmNlIGlzIGEgc2NyaXB0LCB0aGVuIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gcnVuLlxyXG4gICAgICAgIC8vIGlmIHRoZSBzY3JpcHQgaXMgSlNPTlAsIHRoZW4gYSB0aW1lIGRlZmluZWQgZnVuY3Rpb24gYGNhbGxiYWNrX3tEYXRlLm5vd31gIGhhcyBhbHJlYWR5XHJcbiAgICAgICAgLy8gYmVlbiBjYWxsZWQgKGFzIHRoZSBKU09OUCBjYWxsYmFjaykuIFRoaXMgY2FsbGJhY2sgc2V0cyB0aGUgX19KU09OUF9EQVRBIHByb3BlcnR5XHJcbiAgICAgICAgaWYgKHNlcnZpY2UuX19KU09OUF9EQVRBKSB7XHJcbiAgICAgICAgICByZXNwb25zZVRleHQgPSBzZXJ2aWNlLl9fSlNPTlBfREFUQVxyXG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuX19KU09OUF9EQVRBXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYWxsIHRoZSBzZXJ2aWNlIGNhbGxiYWNrIHdpdGggdGhlIHJlc3BvbnNlIHRleHQgKHNvIGl0IGNhbiBwYXJzZSB0aGUgcmVzcG9uc2UpXHJcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlQ2FsbGJhY2suY2FsbCh0aGlzLCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0KVxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLm9wdGlvbnMudGltZW91dCxcclxuICAgICAgc2VydmljZS5kYXRhLFxyXG4gICAgICBzZXJ2aWNlLmhlYWRlcnNcclxuICAgIClcclxuXHJcbiAgICAvLyBgc2VydmljZS5kYXRhYCBhbmQgYHNlcnZpY2UuaGVhZGVyc2AgYXJlIG9wdGlvbmFsICh0aGV5IG9ubHkgY291bnQgaWYgYCFzZXJ2aWNlLmlzU2NyaXB0YCBhbnl3YXkpXHJcbiAgfVxyXG5cclxuICAvLyBUaGUgc2VydmljZSByZXF1ZXN0IGhhcyBydW4gKGFuZCBwb3NzaWJseSBoYXMgYSBgcmVzcG9uc2VUZXh0YCkgW25vIGByZXNwb25zZVRleHRgIGlmIGBpc1NjcmlwdGBdXHJcbiAgLy8gV2UgbmVlZCB0byBydW4gaXRzIGNhbGxiYWNrIHdoaWNoIGRldGVybWluZXMgaWYgaXRzIHN1Y2Nlc3NmdWwgb3Igbm90XHJcbiAgLy8gYGNvbXBsZXRlYCBpcyBjYWxsZWQgb24gc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgcnVuU2VydmljZUNhbGxiYWNrKCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0ICkge1xyXG4gICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHNlcnZpY2UgdXNlcyB0aGUgYXN5bmMgY2FsbGJhY2sgaW4gaXRzIGhhbmRsZXIgbWV0aG9kXHJcbiAgICBjb25zdCBzZXJ2aWNlUmVzdWx0SGFuZGxlciA9IGFzeW5jUmVzdWx0ID0+IHtcclxuICAgICAgLy8gaWYgYHJlc3VsdGAgaXMgYSB2YWxpZCB2YWx1ZSwgdGhlbiB0aGlzIGZ1bmN0aW9uIHNob3VsZG4ndCByZWFsbHkgcnVuXHJcbiAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0KCBjb21wbGV0ZSwgYXN5bmNSZXN1bHQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGUgZnVuY3Rpb24gYHNlcnZpY2UuY2FsbGJhY2tgIHdpbGwgZWl0aGVyIGV4dHJhY3QgYSBjb3VudHJ5IGNvZGUgZnJvbSBgcmVzcG9uc2VUZXh0YCBhbmQgcmV0dXJuIGl0IChpbiBgcmVzdWx0YClcclxuICAgIC8vIG9yIChpZiBpdCBoYXMgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzKSBpdCB3aWxsIGNhbGwgYSBgZG9uZWAgY2FsbGJhY2sgd2l0aCB0aGUgY291bnRyeSBjb2RlIHdoZW4gaXQgaXMgcmVhZHlcclxuICAgIGNvbnN0IHJlc3VsdCA9IHNlcnZpY2UuY2FsbGJhY2soc2VydmljZVJlc3VsdEhhbmRsZXIsIHJlc3BvbnNlVGV4dClcclxuXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0KCBjb21wbGV0ZSwgcmVzdWx0IClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFRoaXMgaXMgY2FsbGVkIHdpdGggdGhlIGByZXN1bHRgIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgIHJlZ2FyZGxlc3Mgb2YgaG93IGl0IHByb3ZpZGVkIHRoYXQgcmVzdWx0IChzeW5jIG9yIGFzeW5jKS5cclxuICAvLyBgcmVzdWx0YCB3aWxsIGJlIHdoYXRldmVyIGlzIHJldHVybmVkIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgLiBBIHNlcnZpY2UgY2FsbGJhY2sgc2hvdWxkIHByb3ZpZGUgYW4gb2JqZWN0IHdpdGggZGF0YVxyXG4gIG9uU2VydmljZVJlc3VsdChjb21wbGV0ZSwgcmVzdWx0KSB7XHJcbiAgICAvLyBjb252ZXJ0IHJlc3VsdCB0byBub2RlanMgc3R5bGUgYXN5bmMgY2FsbGJhY2tcclxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciB8fCAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikpIHtcclxuICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCByZXN1bHQsIG51bGwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIG51bGwsIHJlc3VsdClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGlmIGBlcnJgIGlzIHNldCwgdGhlIG5leHQgc2VydmljZSBoYW5kbGVyIGlzIGNhbGxlZFxyXG4gIC8vIGlmIGBlcnJgIGlzIG51bGwsIHRoZSBgb25Db21wbGV0ZWAgaGFuZGxlciBpcyBjYWxsZWQgd2l0aCBgZGF0YWBcclxuICBydW5OZXh0U2VydmljZU9uRXJyb3IoZXJyLCBkYXRhKSB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHRoaXMubG9nRXJyb3IoZXJyKVxyXG5cclxuICAgICAgY29uc3QgbmV4dFNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcclxuXHJcbiAgICAgIGlmIChuZXh0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucnVuU2VydmljZShuZXh0U2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKFxyXG4gICAgICAgICAgdGhpcyxcclxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tFcnJvcixcclxuICAgICAgICAgIG5ldyBFcnJvcignQWxsIHNlcnZpY2VzIGZhaWxlZCcpXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKHRoaXMsIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSwgZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRTZXJ2aWNlT3B0cygpIHtcclxuICAgIGNvbnN0IHZhbCA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1t0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXhdXHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIHtuYW1lOiB2YWx9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gdmFsKClcclxuICAgIH1lbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcclxuICAgICAgcmV0dXJuIHZhbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGNhbGxiYWNrIGFmdGVyIHJlc2V0dGluZyB0aGUgYGN1cnJlbnRTZXJ2aWNlSW5kZXhgXHJcbiAgY29tcGxldGVTZXJ2aWNlKGZuLCBkYXRhKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMVxyXG5cclxuICAgIGZuICYmIGZuKGRhdGEpXHJcbiAgfVxyXG5cclxuICBsb2dFcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgYFRoZSBzZXJ2aWNlWyR7dGhpcy5jdXJyZW50U2VydmljZUluZGV4fV0gKCR7dGhpcy5nZXRTZXJ2aWNlQnlJZHgodGhpcy5jdXJyZW50U2VydmljZUluZGV4KS51cmx9KSByZXNwb25kZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yYCxcclxuICAgICAgIGVyclxyXG4gICAgKVxyXG4gIH1cclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcclxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL3BvcHVwXCJcclxuaW1wb3J0IHtcclxuICBjYXRlZ29yaWVzLFxyXG4gIHN0YXR1c2VzLFxyXG4gIHN0YXR1c0Rpc21pc3MsXHJcbiAgc3RhdHVzQWxsb3csXHJcbiAgc3RhdHVzRGVueSxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHtcclxuICBhZGRDdXN0b21TdHlsZXNoZWV0LFxyXG4gIGdldENvb2tpZSxcclxuICBoYXNoLFxyXG4gIGludGVycG9sYXRlU3RyaW5nLFxyXG4gIGlzTW9iaWxlLFxyXG4gIGlzUGxhaW5PYmplY3QsXHJcbiAgaXNWYWxpZFN0YXR1cyxcclxuICBzZXRDb29raWUsXHJcbiAgdGhyb3R0bGUsXHJcbiAgdHJhdmVyc2VET01QYXRoLFxyXG59IGZyb20gXCIuLi91dGlsc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zLCBpbml0aWFsVmFsdWVzICkge1xyXG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcclxuICAgIHRoaXMudXNlckNhdGVnb3JpZXMgPSBpbml0aWFsVmFsdWVzIHx8IHtcclxuICAgICAgRVNTRU5USUVMICAgICAgOiBzdGF0dXNBbGxvdyxcclxuICAgICAgU1RBVElTVElRVUVTICAgOiBzdGF0dXNEaXNtaXNzLFxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXN0b21TdHlsZXMgPSB7fVxyXG4gICAgdGhpcy5oYXNUcmFuc2l0aW9uID0gISEoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgY29uc3QgdHJhbnMgPSB7XHJcbiAgICAgICAgdDogJ3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgIE9UOiAnb1RyYW5zaXRpb25FbmQnLFxyXG4gICAgICAgIG1zVDogJ01TVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgTW96VDogJ3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgIFdlYmtpdFQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGZvciAobGV0IHByZWZpeCBpbiB0cmFucykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRyYW5zLmhhc093blByb3BlcnR5KHByZWZpeCkgJiZcclxuICAgICAgICAgIHR5cGVvZiBlbC5zdHlsZVtwcmVmaXggKyAncmFuc2l0aW9uJ10gIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJhbnNbcHJlZml4XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJydcclxuICAgIH0pKClcclxuXHJcbiAgICAvLyByZXR1cm5zIHRydWUgaWYgYG9uQ29tcGxldGVgIHdhcyBjYWxsZWRcclxuICAgIGlmICh0aGlzLmNhblVzZUNvb2tpZXMoKSkge1xyXG4gICAgICAvLyB1c2VyIGhhcyBhbHJlYWR5IGFuc3dlcmVkXHJcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2VcclxuICAgIH1cclxuICAgIC8vIGFwcGx5IGJsYWNrbGlzdCAvIHdoaXRlbGlzdFxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5ibGFja2xpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLndoaXRlbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZSBmdWxsIG1hcmt1cCBlaXRoZXIgY29udGFpbnMgdGhlIHdyYXBwZXIgb3IgaXQgZG9lcyBub3QgKGZvciBtdWx0aXBsZSBpbnN0YW5jZXMpXHJcbiAgICBsZXQgY29va2llUG9wdXAgPSB0aGlzLm9wdGlvbnMud2luZG93XHJcbiAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIHRoaXMuZ2V0UG9wdXBDbGFzc2VzKCkuam9pbignICcpKVxyXG4gICAgICAucmVwbGFjZSgne3tjaGlsZHJlbn19JywgdGhpcy5nZXRQb3B1cElubmVyTWFya3VwKCkpXHJcblxyXG4gICAgLy8gaWYgdXNlciBwYXNzZXMgaHRtbCwgdXNlIGl0IGluc3RlYWRcclxuICAgIGNvbnN0IGN1c3RvbUhUTUwgPSB0aGlzLm9wdGlvbnMub3ZlcnJpZGVIVE1MXHJcbiAgICBpZiAodHlwZW9mIGN1c3RvbUhUTUwgPT0gJ3N0cmluZycgJiYgY3VzdG9tSFRNTC5sZW5ndGggKSB7XHJcbiAgICAgIGNvb2tpZVBvcHVwID0gY3VzdG9tSFRNTFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIHN0YXRpYywgd2UgbmVlZCB0byBncm93IHRoZSBlbGVtZW50IGZyb20gMCBoZWlnaHQgc28gaXQgZG9lc24ndCBqdW1wIHRoZSBwYWdlXHJcbiAgICAvLyBjb250ZW50LiB3ZSB3cmFwIGFuIGVsZW1lbnQgYXJvdW5kIGl0IHdoaWNoIHdpbGwgbWFzayB0aGUgaGlkZGVuIGNvbnRlbnRcclxuICAgIFxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcclxuICAgICAgLy8gYGdyb3dlcmAgaXMgYSB3cmFwcGVyIGRpdiB3aXRoIGEgaGlkZGVuIG92ZXJmbG93IHdob3NlIGhlaWdodCBpcyBhbmltYXRlZFxyXG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5hcHBlbmRNYXJrdXAoYDxkaXYgY2xhc3M9XCJjYy1ncm93ZXJcIj4ke2Nvb2tpZVBvcHVwfTwvZGl2PmApXHJcblxyXG4gICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnJyAvLyBzZXQgaXQgdG8gdmlzaWJsZSAoYmVjYXVzZSBhcHBlbmRNYXJrdXAgaGlkZXMgaXQpXHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHdyYXBwZXIuZmlyc3RDaGlsZCAvLyBnZXQgdGhlIGBlbGVtZW50YCByZWZlcmVuY2UgZnJvbSB0aGUgd3JhcHBlclxyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuYXBwZW5kTWFya3VwKGNvb2tpZVBvcHVwKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwbHlBdXRvRGlzbWlzcygpXHJcbiAgICB0aGlzLmFwcGx5UmV2b2tlQnV0dG9uKClcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuKSB7XHJcbiAgICAgIHRoaXMuYXV0b09wZW4oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcclxuICAgICAgaWYgKHRoaXMuaGFzVHJhbnNpdGlvbikge1xyXG4gICAgICAgIHRoaXMuZmFkZUluKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNjLWJ0biBbdHlwZT1cImNoZWNrYm94XCJdJyApLmZvckVhY2goIGNoZWNrYm94ID0+IHtcclxuICAgICAgICBjaGVja2JveC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24oKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCggXCJwb3B1cE9wZW5lZFwiIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoIHNob3dSZXZva2UgKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuXHJcbiAgICBcclxuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhc1RyYW5zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmZhZGVPdXQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzaG93UmV2b2tlICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW1pdCggXCJwb3B1cENsb3NlZFwiIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgZmFkZUluKCkge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRcclxuXHJcbiAgICBpZiAoIXRoaXMuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVyblxyXG5cclxuICAgIC8vIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgQUZURVIgZmFkZU91dCAod2hpY2ggaXMgZ292ZXJuZWQgYnkgdGhlICd0cmFuc2l0aW9uZW5kJyBldmVudCkuXHJcbiAgICAvLyAndHJhbnNpdGlvbmVuZCcgaXNuJ3QgYWxsIHRoYXQgcmVsaWFibGUsIHNvLCBpZiB3ZSB0cnkgYW5kIGZhZGVJbiBiZWZvcmUgJ3RyYW5zaXRpb25lbmQnIGhhc1xyXG4gICAgLy8gaGFzIGEgY2hhbmNlIHRvIHJ1biwgdGhlbiB3ZSBydW4gaXQgb3Vyc2VsdmVzXHJcbiAgICBpZiAodGhpcy5hZnRlclRyYW5zaXRpb24pIHtcclxuICAgICAgdGhpcy5hZnRlckZhZGVPdXQoZWwpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcclxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnXHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZhZGVJblRpbWVvdXQgPSAyMCAvLyAobXMpIERPIE5PVCBNQUtFIFRISVMgVkFMVUUgU01BTExFUi4gU2VlIGJlbG93XHJcblxyXG4gICAgICAvLyBBbHRob3VnaCBtb3N0IGJyb3dzZXJzIGNhbiBoYW5kbGUgdmFsdWVzIGxlc3MgdGhhbiAyMG1zLCBpdCBzaG91bGQgcmVtYWluIGFib3ZlIHRoaXMgdmFsdWUuXHJcbiAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB3ZSBhcmUgd2FpdGluZyBmb3IgYSBcImJyb3dzZXIgcmVkcmF3XCIgYmVmb3JlIHdlIHJlbW92ZSB0aGUgJ2NjLWludmlzaWJsZScgY2xhc3MuXHJcbiAgICAgIC8vIElmIHRoZSBjbGFzcyBpcyByZW12b2VkIGJlZm9yZSBhIHJlZHJhdyBjb3VsZCBoYXBwZW4sIHRoZW4gdGhlIGZhZGVJbiBlZmZlY3QgV0lMTCBOT1Qgd29yaywgYW5kXHJcbiAgICAgIC8vIHRoZSBwb3B1cCB3aWxsIGFwcGVhciBmcm9tIG5vdGhpbmcuIFRoZXJlZm9yZSB3ZSBNVVNUIGFsbG93IGVub3VnaCB0aW1lIGZvciB0aGUgYnJvd3NlciB0byBkb1xyXG4gICAgICAvLyBpdHMgdGhpbmcuIFRoZSBhY3R1YWxseSBkaWZmZXJlbmNlIGJldHdlZW4gdXNpbmcgMCBhbmQgMjAgaW4gYSBzZXQgdGltZW91dCBpcyBuZWdsZWdpYmxlIGFueXdheVxyXG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLmFmdGVyRmFkZUluKGVsKSxcclxuICAgICAgICBmYWRlSW5UaW1lb3V0XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbmVlZHMgdG8gYmUgY2FsbGVkIGFmdGVyICdmYWRlSW4nLiBUaGlzIGlzIHRoZSBjb2RlIHRoYXQgYWN0dWFsbHkgY2F1c2VzIHRoZSBmYWRlSW4gdG8gd29ya1xyXG4gICAqIFRoZXJlIGlzIGEgZ29vZCByZWFzb24gd2h5IGl0J3MgY2FsbGVkIGluIGEgdGltZW91dC4gUmVhZCAnZmFkZUluJ1xyXG4gICAqL1xyXG4gIGFmdGVyRmFkZUluKCBlbGVtZW50ICkge1xyXG4gICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IG51bGxcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2MtaW52aXNpYmxlJylcclxuICB9XHJcbiAgXHJcbiAgZmFkZU91dCgpIHtcclxuICAgIGlmICghdGhpcy5oYXNUcmFuc2l0aW9uIHx8ICF0aGlzLmVsZW1lbnQpIHJldHVyblxyXG5cclxuICAgIGlmICh0aGlzLm9wZW5pbmdUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9wZW5pbmdUaW1lb3V0KVxyXG4gICAgICB0aGlzLmFmdGVyRmFkZUluKHRoaXMuZWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gJydcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSAoKSA9PiB0aGlzLmFmdGVyRmFkZU91dCh0aGlzLmVsZW1lbnQpXHJcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pXHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYWZ0ZXJGYWRlT3V0KGVsKSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIC8vIGFmdGVyIGNsb3NlIGFuZCBiZWZvcmUgb3BlbiwgdGhlIGRpc3BsYXkgc2hvdWxkIGJlIG5vbmVcclxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbilcclxuICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5lbGVtZW50ICYmXHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnJyAmJlxyXG4gICAgICAodGhpcy5oYXNUcmFuc2l0aW9uID8gIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpIDogdHJ1ZSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIHRvZ2dsZVJldm9rZUJ1dHRvbihzaG93KSB7XHJcbiAgICBpZiAodGhpcy5yZXZva2VCdG4pIHRoaXMucmV2b2tlQnRuLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gJycgOiAnbm9uZSdcclxuICB9XHJcblxyXG4gIHJldm9rZUNob2ljZShwcmV2ZW50T3Blbikge1xyXG4gICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlXHJcbiAgICB0aGlzLmNsZWFyU3RhdHVzZXMoKVxyXG5cclxuICAgIHRoaXMuZW1pdCggXCJyZXZva2VDaG9pY2VcIiApXHJcblxyXG4gICAgaWYgKCFwcmV2ZW50T3Blbikge1xyXG4gICAgICB0aGlzLmF1dG9PcGVuKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhcyB0aGUgdXNlciByZXNwb25kZWQgdG8gdGhlIGJhbm5lclxyXG4gICAqIEByZXR1cm4geyBib29sZWFuIH0gLSB0cnVlIGlmIGFueSBjb29raWVzIGhhdmUgYmVlbiBzZXRcclxuICAgKi9cclxuICBoYXNBbnN3ZXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkuc29tZSggc3RhdHVzID0+ICEhc3RhdHVzIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0byBhbGwgb2YgdGhlIGNhdGVnb3JpZXNcclxuICAgKiBAcmV0dXJuIHsgYXJyYXk8Ym9vbGVhbj4gfSAtIHRydWUgaWYgY29uc2VudCBoYXMgYmVlbiBnaXZlblxyXG4gICAqL1xyXG4gIGhhc0NvbnNlbnRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkubWFwKCBzdGF0dXMgPT4gc3RhdHVzID09PSBzdGF0dXNBbGxvdyB8fCBzdGF0dXMgPT09IHN0YXR1c0Rpc21pc3MgKVxyXG4gIH1cclxuXHJcbiAgLy8gb3BlbnMgdGhlIHBvcHVwIGlmIG5vIGFuc3dlciBoYXMgYmVlbiBnaXZlblxyXG4gIGF1dG9PcGVuKCkge1xyXG4gICAgY29uc3QgaGFzQW5zd2VyZWQgPSB0aGlzLmhhc0Fuc3dlcmVkKClcclxuICAgIGlmICghaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5vcGVuKClcclxuICAgIH0gZWxzZSBpZiAoaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFxyXG4gICAqIFNldCdzIGNvb2tpZSBzdGF0dXNlc1xyXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gYWxsT3JVbmRlZiAgICAgIC0gSWYgdGhpcyBpcyB0aGUgb25seSBwYXJhbSwgc2V0IEFMTCBpZiBub3QsIHNldCBVbmNhdGVnb3JpemVkIGNvb2tpZXMgc3RhdHVzZXMgc2V0IHRvIHZhbHVlLlxyXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gZXNzZW50aWFsICAgICAgIC0gRXNzZW50aWFsIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxyXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gcGVyc29uYWxpemF0aW9uIC0gUHJlZmVyZW5jZXMgLyBGdW5jdGlvbmFsaXR5IHNldCB0byB2YWx1ZVxyXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gYW5hbHl0aWNzICAgICAgIC0gQW5hbHl0aXMgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXHJcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBtYXJrZXRpbmcgICAgICAgLSBNYXJrZXRpbmcgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXHJcbiAgICogQHJldHVybiB7IHVuZGVmaW5lZCB9XHJcbiAgKi9cclxuICBzZXRTdGF0dXNlcygpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUgfSA9IHRoaXMub3B0aW9ucy5jb29raWVcclxuXHJcbiAgICBjb25zdCB1cGRhdGVDYXRlZ29yeVN0YXR1cyA9ICggY2F0ZWdvcnlOYW1lLCBzdGF0dXMgKSA9PiB7XHJcbiAgICAgIGlmIChpc1ZhbGlkU3RhdHVzKHN0YXR1cykpIHtcclxuICAgICAgICBjb25zdCBjb29raWVOYW1lID0gbmFtZSsnXycrY2F0ZWdvcnlOYW1lXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdGF0dXMgPSBnZXRDb29raWUoY29va2llTmFtZSk7XHJcbiAgICAgICAgaWYgKCFwcmV2aW91c1N0YXR1cyB8fCBzdGF0dXMgIT09IHN0YXR1c0Rpc21pc3MpIHtcclxuICAgICAgICAgIHNldENvb2tpZShjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKVxyXG4gICAgICAgICAgdGhpcy5lbWl0KCBcInN0YXR1c0NoYW5nZWRcIiwgY29va2llTmFtZSwgc3RhdHVzLCBwcmV2aW91c1N0YXR1cyApXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnkubmFtZSwgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcnkubmFtZSBdICkgKVxyXG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcclxuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnkubmFtZSwgYXJndW1lbnRzWyAwIF0gKSApXHJcbiAgICB9IGVsc2UgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcclxuICAgICAgYXJndW1lbnRzLmZvckVhY2goICggY2F0ZWdvcnlTdGF0dXMsIGluZGV4ICkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcclxuICAgKiBAcmV0dXJuIHsgYXJyYXk8c3RyaW5nPiB9IC0gY29va2llIGNhdGVnb3JpZXMgc3RhdHVzIGluIG9yZGVyIG9mIGNhdGVnb3JpZXNcclxuICAgKi9cclxuICBnZXRTdGF0dXNlcygpIHtcclxuICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcCggY2F0ZWdvcnkgPT4gZ2V0Q29va2llKHRoaXMub3B0aW9ucy5jb29raWUubmFtZSsnXycrY2F0ZWdvcnkubmFtZSkgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcclxuICAgKi9cclxuICBjbGVhclN0YXR1c2VzKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBkb21haW4sIHBhdGggfSA9IHRoaXMub3B0aW9ucy5jb29raWVcclxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnkgPT4ge1xyXG4gICAgICBzZXRDb29raWUobmFtZSsnXycrY2F0ZWdvcnkubmFtZSwgJycsIC0xLCBkb21haW4sIHBhdGgpXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICBjYW5Vc2VDb29raWVzKCkge1xyXG4gICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQgfHwgd2luZG93LkNvb2tpZXNPSyB8fCB3aW5kb3cubmF2aWdhdG9yLkNvb2tpZXNPSyApIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0dXNlc1ZhbHVlcyA9IHRoaXMuZ2V0U3RhdHVzZXMoKVxyXG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XS5uYW1lXTogaXNWYWxpZFN0YXR1cyggc3RhdHVzICkgfSApIClcclxuICAgIGNvbnN0IGhhc01hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbWF0Y2ggPT4gbWF0Y2hbT2JqZWN0LmtleXMobWF0Y2gpWzBdXSApLmxlbmd0aCA+IDBcclxuICAgIHN0YXR1c2VzVmFsdWVzLmZvckVhY2goICggc3RhdHVzLCBpbmRleCApID0+XHJcbiAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3JpZXNbIGluZGV4IF0ubmFtZSBdID09PSBzdGF0dXNcclxuICAgICAgICA/IHN0YXR1cyA6IHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3JpZXNbIGluZGV4IF0ubmFtZSBdIClcclxuXHJcbiAgICByZXR1cm4gaGFzTWF0Y2hlc1xyXG4gIH1cclxuXHJcbiAgLy8gdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0XHJcbiAgZ2V0UG9zaXRpb25DbGFzc2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wb3NpdGlvbi5zcGxpdCggJy0nICkubWFwKCBwb3MgPT4gJ2NjLScrcG9zKVxyXG4gIH1cclxuXHJcbiAgZ2V0UG9wdXBDbGFzc2VzKCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xyXG4gICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxyXG4gICAgICBvcHRzLnBvc2l0aW9uID09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT0gJ2JvdHRvbSdcclxuICAgICAgICA/ICdiYW5uZXInXHJcbiAgICAgICAgOiAnZmxvYXRpbmcnXHJcblxyXG4gICAgaWYgKGlzTW9iaWxlKCkgJiYgb3B0cy5tb2JpbGVGb3JjZUZsb2F0KSB7XHJcbiAgICAgIHBvc2l0aW9uU3R5bGUgPSAnZmxvYXRpbmcnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IFtcclxuICAgICAgJ2NjLScgKyBwb3NpdGlvblN0eWxlLCAvLyBmbG9hdGluZyBvciBiYW5uZXJcclxuICAgICAgJ2NjLXR5cGUtJyArIG9wdHMudHlwZSwgLy8gYWRkIHRoZSBjb21wbGlhbmNlIHR5cGVcclxuICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXHJcbiAgICBdXHJcblxyXG4gICAgaWYgKG9wdHMuc3RhdGljKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnY2Mtc3RhdGljJylcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzLnB1c2guYXBwbHkoY2xhc3NlcywgdGhpcy5nZXRQb3NpdGlvbkNsYXNzZXMoKSlcclxuXHJcbiAgICAvLyB3ZSBvbmx5IGFkZCBleHRyYSBzdHlsZXMgaWYgYHBhbGV0dGVgIGhhcyBiZWVuIHNldCB0byBhIHZhbGlkIHZhbHVlXHJcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVBhbGV0dGUodGhpcy5vcHRpb25zLnBhbGV0dGUpXHJcblxyXG4gICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcclxuICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvcilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xhc3Nlc1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9wdXBJbm5lck1hcmt1cCgpIHtcclxuICAgIGNvbnN0IGludGVycG9sYXRlZCA9IHt9XHJcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXHJcblxyXG4gICAgLy8gcmVtb3ZlcyBsaW5rIGlmIHNob3dMaW5rIGlzIGZhbHNlXHJcbiAgICBpZiAoIW9wdHMuc2hvd0xpbmspIHtcclxuICAgICAgb3B0cy5lbGVtZW50cy5saW5rID0gJycgXHJcbiAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3Qua2V5cyhvcHRzLmVsZW1lbnRzKS5mb3JFYWNoKCBwcm9wID0+IHtcclxuICAgICAgaW50ZXJwb2xhdGVkW3Byb3BdID0gaW50ZXJwb2xhdGVTdHJpbmcoXHJcbiAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcclxuICAgICAgICBuYW1lID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN0ciA9IG9wdHMuY29udGVudFtuYW1lXVxyXG4gICAgICAgICAgcmV0dXJuIG5hbWUgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyAmJiBzdHIubGVuZ3RoID8gc3RyIDogJydcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgLy8gY2hlY2tzIGlmIHRoZSB0eXBlIGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBpbmZvIGlmIGl0J3Mgbm90XHJcbiAgICBsZXQgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2Vbb3B0cy50eXBlXVxyXG4gICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xyXG4gICAgICBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZS5pbmZvXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYnVpbGQgdGhlIGNvbXBsaWFuY2UgdHlwZXMgZnJvbSB0aGUgYWxyZWFkeSBpbnRlcnBvbGF0ZWQgYGVsZW1lbnRzYFxyXG4gICAgaW50ZXJwb2xhdGVkLmNvbXBsaWFuY2UgPSBpbnRlcnBvbGF0ZVN0cmluZyggY29tcGxpYW5jZVR5cGUsIG5hbWUgPT4gaW50ZXJwb2xhdGVkW25hbWVdIClcclxuXHJcbiAgICAvLyBjaGVja3MgaWYgdGhlIGxheW91dCBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gYmFzaWMgaWYgaXQncyBub3RcclxuICAgIGxldCBsYXlvdXQgPSBvcHRzLmxheW91dHNbb3B0cy5sYXlvdXRdXHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICBsYXlvdXQgPSBvcHRzLmxheW91dHMuYmFzaWNcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGludGVycG9sYXRlU3RyaW5nKGxheW91dCwgbWF0Y2ggPT5pbnRlcnBvbGF0ZWRbbWF0Y2hdIClcclxuICB9XHJcblxyXG4gIGFwcGVuZE1hcmt1cChtYXJrdXApIHtcclxuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjb250ID1cclxuICAgICAgb3B0cy5jb250YWluZXIgJiYgb3B0cy5jb250YWluZXIubm9kZVR5cGUgPT09IDFcclxuICAgICAgICA/IG9wdHMuY29udGFpbmVyXHJcbiAgICAgICAgOiBkb2N1bWVudC5ib2R5XHJcblxyXG4gICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cFxyXG5cclxuICAgIGNvbnN0IGVsID0gZGl2LmNoaWxkcmVuWzBdXHJcblxyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIHRoaXMuaGFzVHJhbnNpdGlvbikge1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5oYW5kbGVCdXR0b25DbGljayggZXZlbnQgKSApXHJcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNjLWJ0biBbdHlwZT1cImNoZWNrYm94XCJdJyApLmZvckVhY2goIGNoZWNrYm94ID0+IHtcclxuICAgICAgLy9Jbml0aWFsaXplIHRoZSBjaGVja2VkIHZhbHVlIG9mIGNoZWNrYm94ZXNcclxuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRoaXMudXNlckNhdGVnb3JpZXNbIGNoZWNrYm94Lm5hbWUgXSA9PT0gc3RhdHVzQWxsb3c7XHJcbiAgICAgIGlmIChjaGVja2JveC5uYW1lID09PSAnRVNTRU5USUVMJykge1xyXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNoZWNrYm94Lm5hbWUgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyBzdGF0dXNBbGxvdyA6IHN0YXR1c0RlbnlcclxuICAgICAgfSlcclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZXZlbnQgPT4gKGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKSApXHJcbiAgICB9KVxyXG4gICAgZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYy1pbmZvXCIpLmZvckVhY2goIHNob3dJbmZvID0+IHtcclxuICAgICAgc2hvd0luZm8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICBpZiAoIHRoaXMgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgICkge1xyXG4gICAgICAgICAgdGhpcy5ibHVyKClcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChvcHRzLmF1dG9BdHRhY2gpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoIWNvbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgY29udC5hcHBlbmRDaGlsZChlbClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udC5pbnNlcnRCZWZvcmUoZWwsIGNvbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIk5vIGNvbnRhaW5lciB0byBhdHRhY2ggdG9vLiBNYWtlIHN1cmUgdGhlIERPTSBoYXMgbG9hZGVkLiBJcyB5b3VyIHNjcmlwdCBsb2FkZWQganVzdCBiZWZvcmUgdGhlIGA8L2JvZHk+YCB0YWc/XCIgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsXHJcbiAgfVxyXG5cclxuICBoYW5kbGVCdXR0b25DbGljayhldmVudCkge1xyXG4gICAgLy8gcmV0dXJucyB0aGUgcGFyZW50IGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGNsYXNzLCBvciB0aGUgb3JpZ2luYWwgZWxlbWVudCAtIG51bGwgaWYgbm90IGZvdW5kXHJcbiAgICBjb25zdCBidG4gPSB0cmF2ZXJzZURPTVBhdGgoZXZlbnQudGFyZ2V0LCAnY2MtYnRuJykgfHwgZXZlbnQudGFyZ2V0XHJcbiAgICBcclxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1zYXZlJyApKXtcclxuICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXHJcbiAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSkge1xyXG4gICAgICBjb25zdCBtYXRjaGVzID0gYnRuLmNsYXNzTmFtZS5tYXRjaChcclxuICAgICAgICBuZXcgUmVnRXhwKCdcXFxcYmNjLSgnICsgc3RhdHVzZXMubWFwKCBzdHIgPT4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJykgKS5qb2luKCd8JykgKyAnKVxcXFxiJylcclxuICAgICAgKVxyXG4gICAgICBjb25zdCBtYXRjaCA9IChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHx8IGZhbHNlXHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzZXMobWF0Y2gpXHJcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1jbG9zZScgKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXHJcbiAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXJldm9rZScgKSkge1xyXG4gICAgICB0aGlzLnJldm9rZUNob2ljZSgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXR0YWNoQ3VzdG9tUGFsZXR0ZShwYWxldHRlKSB7XHJcbiAgICBjb25zdCBoYXNoU3RyID0gaGFzaChKU09OLnN0cmluZ2lmeShwYWxldHRlKSlcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gJ2NjLWNvbG9yLW92ZXJyaWRlLScgKyBoYXNoU3RyXHJcbiAgICBjb25zdCBpc1ZhbGlkID0gaXNQbGFpbk9iamVjdChwYWxldHRlKVxyXG5cclxuICAgIHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvciA9IGlzVmFsaWQgPyBzZWxlY3RvciA6IG51bGxcclxuXHJcbiAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICBhZGRDdXN0b21TdHlsZXNoZWV0KGhhc2hTdHIsIHBhbGV0dGUsICcuJyArIHNlbGVjdG9yKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVmFsaWRcclxuICB9XHJcblxyXG5cclxuICBnZXRFdmVudFBhdGgoIGV2ZW50ICkge1xyXG4gICAgY29uc3QgcGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpIDogKGZ1bmN0aW9uICggYXJyLCBlbGVtZW50ICkge1xyXG4gICAgICB3aGlsZSAoIGVsZW1lbnQgKSB7XHJcbiAgICAgICAgYXJyLnB1c2goIGVsZW1lbnQgKVxyXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyXHJcbiAgICB9KShbXSxldmVudC50YXJnZXQgKVxyXG4gICAgaWYgKCAhcGF0aCApIHtcclxuICAgICAgY29uc29sZS53YXJuKCBcIicucGF0aCcgJiAnLmNvbXBvc2VkUGF0aCcgZmFpbGVkIHRvIGdlbmVyYXRlIGFuIGV2ZW50IHBhdGguXCIgKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoXHJcbiAgfVxyXG5cclxuICBhcHBseUF1dG9EaXNtaXNzKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBlbmFibGVkLFxyXG4gICAgICBkaXNtaXNzT25UaW1lb3V0ICA6IGRlbGF5LFxyXG4gICAgICBkaXNtaXNzT25TY3JvbGwgICA6c2Nyb2xsUmFuZ2UsXHJcbiAgICAgIGRpc21pc3NPbkxpbmtDbGljayxcclxuICAgICAgZGlzbWlzc09uV2luZG93Q2xpY2ssXHJcbiAgICAgIGRpc21pc3NPbktleVByZXNzXHJcbiAgICB9ID0gdGhpcy5vcHRpb25zXHJcblxyXG4gICAgaWYgKCBlbmFibGVkICkge1xyXG4gICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcclxuICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gc2V0VGltZW91dCggKCk9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXHJcbiAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgICAgfSwgTWF0aC5mbG9vcihkZWxheSkpXHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNjcm9sbFJhbmdlID09ICdudW1iZXInICYmIHNjcm9sbFJhbmdlID49IDApIHtcclxuICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IE1hdGguZmxvb3Ioc2Nyb2xsUmFuZ2UpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxyXG4gICAgICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoZGlzbWlzc09uV2luZG93Q2xpY2spIHtcclxuICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBldnQgPT4ge1xyXG4gICAgICAgICAgaWYgKCAhZ2V0RXZlbnRQYXRoKCBldnQgKS5zb21lKCBlbGVtZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pZ25vcmVDbGlja3NGcm9tLnNvbWUoIGlnbm9yZWRDbGljayA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBpZ25vcmVkQ2xpY2sgKVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25XaW5kb3dDbGljaylcclxuICAgICAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25XaW5kb3dDbGljaylcclxuICAgICAgfSBlbHNlIGlmIChkaXNtaXNzT25MaW5rQ2xpY2spIHtcclxuICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gZXZ0ID0+IHtcclxuICAgICAgICAgIGlmICggZ2V0RXZlbnRQYXRoKCBldnQgKS5zb21lKCBlbGVtID0+IHR5cGVvZiBlbGVtLnRhZ05hbWUgIT09ICd1bmRlZmluZWQnICYmIGVsZW0udGFnTmFtZSA9PT0gJ0EnICkgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0Rpc21pc3MgKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcclxuICAgICAgICAgICAgdGhpcy5vbkxpbmtDbGljayA9IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcclxuICAgICAgfSBlbHNlIGlmICggZGlzbWlzc09uS2V5UHJlc3MgKSB7XHJcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnRcclxuICAgICAgICAgICAgaWYgKCBrZXlDb2RlID09PSAxMyApIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKCBzdGF0dXNBbGxvdyApXHJcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzRGlzbWlzcyApXHJcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnb25rZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5UmV2b2tlQnV0dG9uKCkge1xyXG4gICAgLy8gcmV2b2thYmxlIGlzIHRydWUgaWYgYWR2YW5jZWQgY29tcGxpYW5jZSBpcyBzZWxlY3RlZFxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy50eXBlICE9ICdpbmZvJyAmJiB0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcgPT0gdHJ1ZSkgdGhpcy5vcHRpb25zLnJldm9rYWJsZSA9IHRydWVcclxuICAgIC8vIGFuaW1hdGVSZXZva2FibGUgZmFsc2UgZm9yIG1vYmlsZSBkZXZpY2VzXHJcbiAgICBpZiAoaXNNb2JpbGUoKSkgdGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUgPSBmYWxzZVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XHJcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmdldFBvc2l0aW9uQ2xhc3NlcygpXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xyXG4gICAgICAgIGNsYXNzZXMucHVzaCgnY2MtYW5pbWF0ZScpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xyXG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50aGVtZSkge1xyXG4gICAgICAgIGNsYXNzZXMucHVzaCgnY2MtdGhlbWUtJyt0aGlzLm9wdGlvbnMudGhlbWUpXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSApXHJcbiAgICAgIGNvbnN0IHJldm9rZUJ0biA9IHRoaXMub3B0aW9ucy5yZXZva2VCdG5cclxuICAgICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCBjbGFzc2VzLmpvaW4oJyAnKSlcclxuICAgICAgICAucmVwbGFjZSgne3twb2xpY3l9fScsIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSlcclxuXHJcbiAgICAgIHRoaXMucmV2b2tlQnRuID0gdGhpcy5hcHBlbmRNYXJrdXAocmV2b2tlQnRuKVxyXG5cclxuICAgICAgY29uc3QgYnRuID0gdGhpcy5yZXZva2VCdG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XHJcbiAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSB0aHJvdHRsZShmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgIGxldCBhY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgY29uc3QgbWluWSA9IDIwXHJcbiAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjBcclxuXHJcbiAgICAgICAgICBpZiAoICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXRvcCcgKSAmJiBldnQuY2xpZW50WSA8IG1pblkgKSB8fFxyXG4gICAgICAgICAgICAgICAgKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYm90dG9tJyApICYmIGV2dC5jbGllbnRZID4gbWF4WSApICkge1xyXG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGFjdGl2ZSAmJiAhYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcclxuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCggJ2NjLWFjdGl2ZScgKVxyXG4gICAgICAgICAgfSBlbHNlIGlmICggIWFjdGl2ZSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xyXG4gICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCAnY2MtYWN0aXZlJyApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMjAwKVxyXG5cclxuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmVcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZGVzdHJveSgpe1xyXG4gICAgY29uc29sZS53YXJuKCBcIkRlc3Ryb3lpbmcuLi5cIilcclxuICAgIGlmICggdGhpcy5lbGVtZW50ICl7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKVxyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLnJldm9rZUJ0biApe1xyXG4gICAgICB0aGlzLnJldm9rZUJ0bi5yZW1vdmUoKVxyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLm9uV2luZG93U2Nyb2xsICl7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsIClcclxuICAgIH1cclxuICAgIGlmICggdGhpcy5vbldpbmRvd0NsaWNrICkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2sgKVxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMub25MaW5rQ2xpY2sgKSB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMub25LZXlQcmVzcyApIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBNYWtlIHRoaXMgZmFsc2UgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSBhbGwgcmVnaW9uYWwgb3ZlcnJpZGVzIGZvciBzZXR0aW5ncy5cclxuICAvLyBJZiB0cnVlLCBvcHRpb25zIGNhbiBkaWZmZXIgYnkgY291bnRyeSwgZGVwZW5kaW5nIG9uIHRoZWlyIGNvb2tpZSBsYXcuXHJcbiAgLy8gSXQgZG9lcyBub3QgYWZmZWN0IGhpZGluZyB0aGUgcG9wdXAgZm9yIGNvdW50cmllcyB0aGF0IGRvIG5vdCBoYXZlIGNvb2tpZSBsYXcuXHJcbiAgcmVnaW9uYWxMYXc6IHRydWUsXHJcblxyXG4gIC8vIGNvdW50cmllcyB0aGF0IGVuZm9yY2Ugc29tZSB2ZXJzaW9uIG9mIGEgY29va2llIGxhd1xyXG4gIGhhc0xhdzogW1xyXG4gICAgJ0FUJyxcclxuICAgICdCRScsXHJcbiAgICAnQkcnLFxyXG4gICAgJ0hSJyxcclxuICAgICdDWicsXHJcbiAgICAnQ1knLFxyXG4gICAgJ0RLJyxcclxuICAgICdFRScsXHJcbiAgICAnRkknLFxyXG4gICAgJ0ZSJyxcclxuICAgICdERScsXHJcbiAgICAnRUwnLFxyXG4gICAgJ0hVJyxcclxuICAgICdJRScsXHJcbiAgICAnSVQnLFxyXG4gICAgJ0xWJyxcclxuICAgICdMVCcsXHJcbiAgICAnTFUnLFxyXG4gICAgJ01UJyxcclxuICAgICdOTCcsXHJcbiAgICAnTk8nLFxyXG4gICAgJ1BMJyxcclxuICAgICdQVCcsXHJcbiAgICAnU0snLFxyXG4gICAgJ0VTJyxcclxuICAgICdTRScsXHJcbiAgICAnR0InLFxyXG4gICAgJ1VLJyxcclxuICAgICdHUicsXHJcbiAgICAnRVUnLFxyXG4gICAgJ1JPJ1xyXG4gIF0sXHJcblxyXG4gIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGFsbCBjb29raWUgY29uc2VudCBjaG9pY2VzIG11c3QgYmUgcmV2b2thYmxlIChhIHVzZXIgbXVzdCBiZSBhYmxlIHRvbyBjaGFuZ2UgdGhlaXIgbWluZClcclxuICByZXZva2FibGU6IFtcclxuICAgICdIUicsXHJcbiAgICAnQ1knLFxyXG4gICAgJ0RLJyxcclxuICAgICdFRScsXHJcbiAgICAnRlInLFxyXG4gICAgJ0RFJyxcclxuICAgICdMVicsXHJcbiAgICAnTFQnLFxyXG4gICAgJ05MJyxcclxuICAgICdOTycsXHJcbiAgICAnUFQnLFxyXG4gICAgJ0VTJ1xyXG4gIF0sXHJcblxyXG4gIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGEgcGVyc29uIGNhbiBvbmx5IFwiY29uc2VudFwiIGlmIHRoZSBleHBsaWNpdGx5IGNsaWNrIG9uIFwiSSBhZ3JlZVwiLlxyXG4gIC8vIGluIHRoZXNlIGNvdW50cmllcywgY29uc2VudCBjYW5ub3QgYmUgaW1wbGllZCB2aWEgYSB0aW1lb3V0IG9yIGJ5IHNjcm9sbGluZyBkb3duIHRoZSBwYWdlXHJcbiAgZXhwbGljaXRBY3Rpb246IFsnSFInLCAnSVQnLCAnRVMnLCAnTk8nXVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmNvbnN0IHRvRXJyb3IgPSBvYmogPT4gbmV3IEVycm9yKCdFcnJvciBbJyArIChvYmouY29kZSB8fCAnVU5LTk9XTicpICsgJ106ICcgKyBvYmouZXJyb3IpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gVGhlIGRlZmF1bHQgdGltZW91dCBpcyA1IHNlY29uZHMuIFRoaXMgaXMgbWFpbmx5IG5lZWRlZCB0byBjYXRjaCBKU09OUCByZXF1ZXN0cyB0aGF0IGVycm9yLlxyXG4gIC8vIE90aGVyd2lzZSB0aGVyZSBpcyBubyBlYXN5IHdheSB0byBjYXRjaCBKU09OUCBlcnJvcnMuIFRoYXQgbWVhbnMgdGhhdCBpZiBhIEpTT05QIGZhaWxzLCB0aGVcclxuICAvLyBhcHAgd2lsbCB0YWtlIGB0aW1lb3V0YCBtaWxsaXNlY29uZHMgdG8gcmVhY3QgdG8gYSBKU09OUCBuZXR3b3JrIGVycm9yLlxyXG4gIHRpbWVvdXQ6IDUwMDAsXHJcblxyXG4gIC8vIHRoZSBvcmRlciB0aGF0IHNlcnZpY2VzIHdpbGwgYmUgYXR0ZW1wdGVkIGluXHJcbiAgc2VydmljZXM6IFtcclxuICAgICdpcGluZm8nXHJcblxyXG4gICAgLypcclxuXHJcbiAgICAvLyAnaXBpbmZvZGInIHJlcXVpcmVzIHNvbWUgb3B0aW9ucywgc28gd2UgZGVmaW5lIGl0IHVzaW5nIGFuIG9iamVjdFxyXG4gICAgLy8gdGhpcyBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyB0aGUgc2VydmljZVxyXG5cclxuICAgIHtcclxuICAgICAgbmFtZTogJ2lwaW5mb2RiJyxcclxuICAgICAgaW50ZXJwb2xhdGVVcmw6IHtcclxuICAgICAgICAvLyBvYnZpb3VzbHksIHRoaXMgaXMgYSBmYWtlIGtleVxyXG4gICAgICAgIGFwaV9rZXk6ICd2T2dJMzc0OGRuSXl0SXJzSmN4Uzdxc0RmNmtiSmtFOWxONHlFRHJYQXFYY0tVTnZqalpQb3gzZWtYcW1NTWxkJ1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBhcyB3ZWxsIGFzIGRlZmluaW5nIGFuIG9iamVjdCwgeW91IGNhbiBkZWZpbmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0XHJcblxyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge25hbWU6ICdpcGluZm9kYid9XHJcbiAgICB9LFxyXG5cclxuICAgICovXHJcbiAgXSxcclxuXHJcbiAgc2VydmljZURlZmluaXRpb25zOiB7XHJcbiAgICBpcGluZm86IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxyXG4gICAgICAgIHVybDogJy8vaXBpbmZvLmlvJyxcclxuICAgICAgICBoZWFkZXJzOiBbJ0FjY2VwdDogYXBwbGljYXRpb24vanNvbiddLFxyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiBqc29uLmVycm9yXHJcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKGpzb24pXHJcbiAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBUaGlzIHNlcnZpY2UgcmVxdWlyZXMgYW4gb3B0aW9uIHRvIGRlZmluZSBga2V5YC4gT3B0aW9ucyBhcmUgcHJvaXZlZCB1c2luZyBvYmplY3RzIG9yIGZ1bmN0aW9uc1xyXG4gICAgaXBpbmZvZGI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxyXG4gICAgICAgIHVybDpcclxuICAgICAgICAgICcvL2FwaS5pcGluZm9kYi5jb20vdjMvaXAtY291bnRyeS8/a2V5PXthcGlfa2V5fSZmb3JtYXQ9anNvbiZjYWxsYmFjaz17Y2FsbGJhY2t9JyxcclxuICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBpcyBKU09OUCwgdGhlcmVmb3JlIHdlIG11c3Qgc2V0IGl0IHRvIHJ1biBhcyBhIHNjcmlwdFxyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiBqc29uLnN0YXR1c0NvZGUgPT0gJ0VSUk9SJ1xyXG4gICAgICAgICAgICAgID8gdG9FcnJvcih7ZXJyb3I6IGpzb24uc3RhdHVzTWVzc2FnZX0pXHJcbiAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeUNvZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbWF4bWluZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUgd2hpY2ggZGVmaW5lcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkuIE9uY2UgbG9hZGVkLCB3ZSBtdXN0XHJcbiAgICAgICAgLy8gbWFrZSBhbiBhZGRpdGlvbmFsIEFKQVggY2FsbC4gVGhlcmVmb3JlIHdlIHByb3ZpZGUgYSBgZG9uZWAgY2FsbGJhY2sgdGhhdCBjYW4gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgdXJsOiAnLy9qcy5tYXhtaW5kLmNvbS9qcy9hcGlzL2dlb2lwMi92Mi4xL2dlb2lwMi5qcycsXHJcbiAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlLCBzbyBpdCBtdXN0IGJlIHJ1biBhcyBhIHNjcmlwdFxyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lKSB7XHJcbiAgICAgICAgICAvLyBpZiBldmVyeXRoaW5nIHdlbnQgb2theSB0aGVuIGBnZW9pcDJgIFdJTEwgYmUgZGVmaW5lZFxyXG4gICAgICAgICAgaWYgKCF3aW5kb3cuZ2VvaXAyKSB7XHJcbiAgICAgICAgICAgIGRvbmUoXHJcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZm9ybWF0LiBUaGUgZG93bmxvYWRlZCBzY3JpcHQgc2hvdWxkIGhhdmUgZXhwb3J0ZWQgYGdlb2lwMmAgdG8gdGhlIGdsb2JhbCBzY29wZSdcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZ2VvaXAyLmNvdW50cnkoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRvbmUoe1xyXG4gICAgICAgICAgICAgICAgICBjb2RlOiBsb2NhdGlvbi5jb3VudHJ5Lmlzb19jb2RlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG5cclxuICAgICAgICAgIC8vIFdlIGNhbid0IHJldHVybiBhbnl0aGluZywgYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBzZWNvbmQgQUpBWCBjYWxsIHRvIHJldHVybi5cclxuICAgICAgICAgIC8vIFRoZW4gd2UgY2FuICdjb21wbGV0ZScgdGhlIHNlcnZpY2UgYnkgcGFzc2luZyBkYXRhIG9yIGFuIGVycm9yIHRvIHRoZSBgZG9uZWAgY2FsbGJhY2suXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCB7IHN0YXR1c0RlbnksIHN0YXR1c0FsbG93LCBzdGF0dXNEaXNtaXNzLCBjYXRlZ29yaWVzIH0gIGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIGlmIGZhbHNlLCB0aGlzIHByZXZlbnRzIHRoZSBwb3B1cCBmcm9tIHNob3dpbmcgKHVzZWZ1bCBmb3IgZ2l2aW5nIHRvIGNvbnRyb2wgdG8gYW5vdGhlciBwaWVjZSBvZiBjb2RlKVxyXG4gIGVuYWJsZWQ6IHRydWUsXHJcblxyXG4gIC8vIG9wdGlvbmFsIChleHBlY3RpbmcgYSBIVE1MIGVsZW1lbnQpIGlmIHBhc3NlZCwgdGhlIHBvcHVwIGlzIGFwcGVuZGVkIHRvIHRoaXMgZWxlbWVudC4gZGVmYXVsdCBpcyBgZG9jdW1lbnQuYm9keWBcclxuICBjb250YWluZXI6IG51bGwsXHJcblxyXG4gIC8vIGRlZmF1bHRzIGNvb2tpZSBvcHRpb25zIC0gaXQgaXMgUkVDT01NRU5ERUQgdG8gc2V0IHRoZXNlIHZhbHVlcyB0byBjb3JyZXNwb25kIHdpdGggeW91ciBzZXJ2ZXJcclxuICBjb29raWU6IHtcclxuICAgIC8vIFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhpcyBjb29raWUgLSB5b3UgY2FuIGlnbm9yZSB0aGlzXHJcbiAgICBuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxyXG4gICAgLy8gVGhpcyBpcyB0aGUgdXJsIHBhdGggdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgYXQgdGhpcyBsb2NhdGlvblxyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgLy8gVGhpcyBpcyB0aGUgZG9tYWluIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIG9uIHRoaXMgZG9tYWluLlxyXG4gICAgLy8gIC0gR3VpZGUgdG8gY29va2llIGRvbWFpbnMgLSBodHRwczovL3d3dy5teHNhc2hhLmV1L2Jsb2cvMjAxNC8wMy8wNC9kZWZpbml0aXZlLWd1aWRlLXRvLWNvb2tpZS1kb21haW5zL1xyXG4gICAgZG9tYWluOiAnbG9jYWxob3N0JyxcclxuICAgIC8vIFRoZSBjb29raWVzIGV4cGlyZSBkYXRlLCBzcGVjaWZpZWQgaW4gZGF5cyAoc3BlY2lmeSAtMSBmb3Igbm8gZXhwaXJ5KVxyXG4gICAgZXhwaXJ5RGF5czogMzY1LFxyXG4gICAgLy8gSWYgdHJ1ZSB0aGUgY29va2llIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBzZWN1cmUgZmxhZy4gU2VjdXJlIGNvb2tpZXMgd2lsbCBvbmx5IGJlIHRyYW5zbWl0dGVkIHZpYSBIVFRQUy5cclxuICAgIHNlY3VyZTogZmFsc2VcclxuICB9LFxyXG5cclxuICAvLyBlYWNoIGl0ZW0gZGVmaW5lcyB0aGUgaW5uZXIgdGV4dCBmb3IgdGhlIGVsZW1lbnQgdGhhdCBpdCByZWZlcmVuY2VzXHJcbiAgY29udGVudDoge1xyXG4gICAgaGVhZGVyIDogJ0Nvb2tpZXMgdXNlZCBvbiB0aGUgd2Vic2l0ZSEnLFxyXG4gICAgbWVzc2FnZTogJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4nLFxyXG4gICAgZGlzbWlzczogJ0dvdCBpdCEnLFxyXG4gICAgYWxsb3cgIDogJ0FsbG93IGNvb2tpZXMnLFxyXG4gICAgZGVueSAgIDogJ0RlY2xpbmUnLFxyXG4gICAgbGluayAgIDogJ0xlYXJuIG1vcmUnLFxyXG4gICAgaHJlZiAgIDogJ2h0dHBzOi8vd3d3LmNvb2tpZXNhbmR5b3UuY29tJyxcclxuICAgIGNsb3NlICA6ICcmI3gyNzRjJyxcclxuICAgIHRhcmdldCA6ICdfYmxhbmsnLFxyXG4gICAgc2F2ZSAgIDogJ1NhdmUnLFxyXG4gICAgcG9saWN5IDogJ0Nvb2tpZSBQb2xpY3knXHJcbiAgfSxcclxuXHJcbiAgLy8gVGhpcyBpcyB0aGUgSFRNTCBmb3IgdGhlIGVsZW1lbnRzIGFib3ZlLiBUaGUgc3RyaW5nIHt7aGVhZGVyfX0gd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBlcXVpdmFsZW50IHRleHQgYmVsb3cuXHJcbiAgLy8gWW91IGNhbiByZW1vdmUgXCJ7e2hlYWRlcn19XCIgYW5kIHdyaXRlIHRoZSBjb250ZW50IGRpcmVjdGx5IGluc2lkZSB0aGUgSFRNTCBpZiB5b3Ugd2FudC5cclxuICAvL1xyXG4gIC8vICAtIEFSSUEgcnVsZXMgc3VnZ2VzdCB0byBlbnN1cmUgY29udHJvbHMgYXJlIHRhYmJhYmxlIChzbyB0aGUgYnJvd3NlciBjYW4gZmluZCB0aGUgZmlyc3QgY29udHJvbCksXHJcbiAgLy8gICAgYW5kIHRvIHNldCB0aGUgZm9jdXMgdG8gdGhlIGZpcnN0IGludGVyYWN0aXZlIGNvbnRyb2wgKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby91c2luZy1hcmlhLylcclxuICBlbGVtZW50czoge1xyXG4gICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJjYy1oZWFkZXJcIj57e2hlYWRlcn19PC9zcGFuPiZuYnNwJyxcclxuICAgIG1lc3NhZ2U6XHJcbiAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19PC9zcGFuPicsXHJcbiAgICBtZXNzYWdlbGluazpcclxuICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX0gPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+PC9zcGFuPicsXHJcbiAgICBkaXNtaXNzOlxyXG4gICAgICBgPGEgYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy0ke3N0YXR1c0Rpc21pc3N9XCI+e3tkaXNtaXNzfX08L2E+YCxcclxuICAgIGFsbG93OlxyXG4gICAgICBgPGEgYXJpYS1sYWJlbD1cImFsbG93IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiAgY2xhc3M9XCJjYy1idG4gY2MtJHtzdGF0dXNBbGxvd31cIj57e2FsbG93fX08L2E+YCxcclxuICAgIGRlbnk6XHJcbiAgICAgIGA8YSBhcmlhLWxhYmVsPVwiZGVueSBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1idG4gY2MtJHtzdGF0dXNEZW55fVwiPnt7ZGVueX19PC9hPmAsXHJcbiAgICBsaW5rOlxyXG4gICAgICAnPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+JyxcclxuICAgIGNsb3NlOlxyXG4gICAgICAnPHNwYW4gYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWNsb3NlXCI+e3tjbG9zZX19PC9zcGFuPicsXHJcbiAgICBjYXRlZ29yaWVzOiAnPHVsIGNsYXNzPVwiY2MtY2F0ZWdvcmllc1wiPicgK1xyXG4gICAgICBjYXRlZ29yaWVzLm1hcCggKCBjYXRlZ29yeSwgaW5kZXggKSA9PlxyXG4gICAgICAgIGA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMFwiPjxsYWJlbCBmb3I9XCJpZF8ke2NhdGVnb3J5Lm5hbWV9XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiaWRfJHtjYXRlZ29yeS5uYW1lfVwiIG5hbWU9XCIke2NhdGVnb3J5Lm5hbWV9XCIvPiR7Y2F0ZWdvcnkubmFtZX08L2xhYmVsPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvIGZhbCBmYS1pbmZvLXNxdWFyZVwiIGFyaWEtbGFiZWw9XCIke2NhdGVnb3J5Lm5hbWV9IERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIke2luZGV4KzF9XCI+PC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICAke2NhdGVnb3J5LmV4cGxhaW5UZXh0fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5gXHJcbiAgICAgICkuam9pbihcIlwiKVxyXG4gICAgICArICc8L3VsPicsXHJcbiAgICBzYXZlOiBgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1zYXZlXCI+e3tzYXZlfX08L2J1dHRvbj5gXHJcbiAgICAvL2NvbXBsaWFuY2U6IGNvbXBsaWFuY2UgaXMgYWxzbyBhbiBlbGVtZW50LCBidXQgaXQgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiwgZGVwZW5kaW5nIG9uIGB0eXBlYCBiZWxvd1xyXG4gIH0sXHJcblxyXG4gIC8vIFRoZSBwbGFjZWhvbGRlcnMge3tjbGFzc2VzfX0gYW5kIHt7Y2hpbGRyZW59fSBib3RoIGdldCByZXBsYWNlZCBkdXJpbmcgaW5pdGlhbGlzYXRpb246XHJcbiAgLy8gIC0ge3tjbGFzc2VzfX0gaXMgd2hlcmUgYWRkaXRpb25hbCBjbGFzc2VzIGdldCBhZGRlZFxyXG4gIC8vICAtIHt7Y2hpbGRyZW59fSBpcyB3aGVyZSB0aGUgSFRNTCBjaGlsZHJlbiBhcmUgcGxhY2VkXHJcbiAgd2luZG93OlxyXG4gICAgJzxkaXYgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtbGFiZWw9XCJjb29raWVjb25zZW50XCIgYXJpYS1kZXNjcmliZWRieT1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2Mtd2luZG93IHt7Y2xhc3Nlc319XCI+PCEtLWdvb2dsZW9mZjogYWxsLS0+e3tjaGlsZHJlbn19PCEtLWdvb2dsZW9uOiBhbGwtLT48L2Rpdj4nLFxyXG4gIFxyXG4gIG1vZGFsOiAnJyxcclxuXHJcbiAgLy8gVGhpcyBpcyB0aGUgaHRtbCBmb3IgdGhlIHJldm9rZSBidXR0b24uIFRoaXMgb25seSBzaG93cyB1cCBhZnRlciB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdGhlaXIgbGV2ZWwgb2YgY29uc2VudFxyXG4gIC8vIEl0IGNhbiBiZSBlbmFibGVkIG9mIGRpc2FibGVkIHVzaW5nIHRoZSBgcmV2b2thYmxlYCBvcHRpb25cclxuICByZXZva2VCdG46ICc8ZGl2IGNsYXNzPVwiY2MtcmV2b2tlIHt7Y2xhc3Nlc319XCI+e3twb2xpY3l9fTwvZGl2PicsXHJcblxyXG4gIC8vIGRlZmluZSB0eXBlcyBvZiAnY29tcGxpYW5jZScgaGVyZS4gJ3t7dmFsdWV9fScgc3RyaW5ncyBpbiBoZXJlIGFyZSBsaW5rZWQgdG8gYGVsZW1lbnRzYFxyXG4gIGNvbXBsaWFuY2U6IHtcclxuICAgIGluZm86ICd7e21lc3NhZ2VsaW5rfX08ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZVwiPnt7ZGlzbWlzc319PC9kaXY+JyxcclxuICAgICdvcHQtaW4nOlxyXG4gICAgICAne3ttZXNzYWdlbGlua319PGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2UgY2MtaGlnaGxpZ2h0XCI+e3tkZW55fX17e2FsbG93fX17e2N1c3RvbWl6ZX19PC9kaXY+JyxcclxuICAgICdvcHQtb3V0JzpcclxuICAgICAgJ3t7bWVzc2FnZWxpbmt9fTxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3tkZW55fX08L2Rpdj4nLFxyXG4gICAgY2F0ZWdvcmllczogJ3t7bWVzc2FnZX19PGRpdiBjbGFzcz1cImZvcm1cIj57e2NhdGVnb3JpZXN9fXt7c2F2ZX19PC9kaXY+J1xyXG4gIH0sXHJcblxyXG4gIC8vIHNlbGVjdCB5b3VyIHR5cGUgb2YgcG9wdXAgaGVyZVxyXG4gIHR5cGU6ICdpbmZvJywgLy8gcmVmZXJzIHRvIGBjb21wbGlhbmNlYCAoaW4gb3RoZXIgd29yZHMsIHRoZSBidXR0b25zIHRoYXQgYXJlIGRpc3BsYXllZClcclxuXHJcbiAgLy8gZGVmaW5lIGxheW91dCBsYXlvdXRzIGhlcmVcclxuICBsYXlvdXRzOiB7XHJcbiAgICAvLyB0aGUgJ2Jsb2NrJyBsYXlvdXQgdGVuZCB0byBiZSBmb3Igc3F1YXJlIGZsb2F0aW5nIHBvcHVwc1xyXG4gICAgYmFzaWMgICAgICAgICA6ICd7e2NvbXBsaWFuY2V9fScsXHJcbiAgICAnYmFzaWMtY2xvc2UnIDogJ3t7Y29tcGxpYW5jZX19e3tjbG9zZX19JyxcclxuICAgICdiYXNpYy1oZWFkZXInOiAne3toZWFkZXJ9fXt7Y29tcGxpYW5jZX19J1xyXG4gICAgLy8gYWRkIGEgY3VzdG9tIGxheW91dCBoZXJlLCB0aGVuIGFkZCBzb21lIG5ldyBjc3Mgd2l0aCB0aGUgY2xhc3MgJy5jYy1sYXlvdXQtbXktY29vbC1sYXlvdXQnXHJcbiAgICAvLydteS1jb29sLWxheW91dCc6ICc8ZGl2IGNsYXNzPVwibXktc3BlY2lhbC1sYXlvdXRcIj57e21lc3NhZ2V9fXt7Y29tcGxpYW5jZX19PC9kaXY+e3tjbG9zZX19JyxcclxuICB9LFxyXG5cclxuICAvLyBkZWZhdWx0IGxheW91dCAoc2VlIGFib3ZlKVxyXG4gIGxheW91dDogJ2Jhc2ljJyxcclxuXHJcbiAgLy8gdGhpcyByZWZlcnMgdG8gdGhlIHBvcHVwIHdpbmRvd3MgcG9zaXRpb24uIHdlIGN1cnJlbnRseSBzdXBwb3J0OlxyXG4gIC8vICAtIGJhbm5lciBwb3NpdGlvbnM6IHRvcCwgYm90dG9tXHJcbiAgLy8gIC0gZmxvYXRpbmcgcG9zaXRpb25zOiB0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCwgYm90dG9tLXJpZ2h0XHJcbiAgLy9cclxuICAvLyBhZGRzIGEgY2xhc3MgYGNjLWZsb2F0aW5nYCBvciBgY2MtYmFubmVyYCB3aGljaCBoZWxwcyB3aGVuIHN0eWxpbmdcclxuICBwb3NpdGlvbjogJ2JvdHRvbScsIC8vIGRlZmF1bHQgcG9zaXRpb24gaXMgJ2JvdHRvbSdcclxuXHJcbiAgLy8gQXZhaWxhYmxlIHN0eWxlc1xyXG4gIC8vICAgIC1ibG9jayAoZGVmYXVsdCwgbm8gZXh0cmEgY2xhc3NlcylcclxuICAvLyAgICAtZWRnZWxlc3NcclxuICAvLyAgICAtY2xhc3NpY1xyXG4gIC8vIHVzZSB5b3VyIG93biBzdHlsZSBuYW1lIGFuZCB1c2UgYC5jYy10aGVtZS1TVFlMRU5BTUVgIGNsYXNzIGluIENTUyB0byBlZGl0LlxyXG4gIC8vIE5vdGU6IHN0eWxlIFwid2lyZVwiIGlzIHVzZWQgZm9yIHRoZSBjb25maWd1cmF0b3IsIGJ1dCBoYXMgbm8gQ1NTIHN0eWxlcyBvZiBpdHMgb3duLCBvbmx5IHBhbGV0dGUgaXMgdXNlZC5cclxuICB0aGVtZTogJ2Jsb2NrJyxcclxuXHJcbiAgLy8gVGhlIHBvcHVwIGlzIGBmaXhlZGAgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSB3YW50IGl0IHRvIGJlIHN0YXRpYyAoaW5saW5lIHdpdGggdGhlIHBhZ2UgY29udGVudCksIHNldCB0aGlzIHRvIGZhbHNlXHJcbiAgLy8gTm90ZTogYnkgZGVmYXVsdCwgd2UgYW5pbWF0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBwb3B1cCBmcm9tIDAgdG8gZnVsbCBzaXplXHJcbiAgc3RhdGljOiBmYWxzZSxcclxuXHJcbiAgLy8gaWYgeW91IHdhbnQgY3VzdG9tIGNvbG91cnMsIHBhc3MgdGhlbSBpbiBoZXJlLiB0aGlzIG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoaXMuXHJcbiAgLy8gaWRlYWxseSwgYW55IGN1c3RvbSBjb2xvdXJzL3RoZW1lcyBzaG91bGQgYmUgY3JlYXRlZCBpbiBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0LCBhcyB0aGlzIGlzIG1vcmUgZWZmaWNpZW50LlxyXG4gIC8vICAge1xyXG4gIC8vICAgICBwb3B1cDoge2JhY2tncm91bmQ6ICcjMDAwMDAwJywgdGV4dDogJyNmZmYnLCBsaW5rOiAnI2ZmZid9LFxyXG4gIC8vICAgICBidXR0b246IHtiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyNmOGU3MWMnfSxcclxuICAvLyAgICAgaGlnaGxpZ2h0OiB7YmFja2dyb3VuZDogJyNmOGU3MWMnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyMwMDAwMDAnfSxcclxuICAvLyAgIH1cclxuICAvLyBgaGlnaGxpZ2h0YCBpcyBvcHRpb25hbCBhbmQgZXh0ZW5kcyBgYnV0dG9uYC4gaWYgaXQgZXhpc3RzLCBpdCB3aWxsIGFwcGx5IHRvIHRoZSBmaXJzdCBidXR0b25cclxuICAvLyBvbmx5IGJhY2tncm91bmQgbmVlZHMgdG8gYmUgZGVmaW5lZCBmb3IgZXZlcnkgZWxlbWVudC4gaWYgbm90IHNldCwgb3RoZXIgY29sb3JzIGNhbiBiZSBjYWxjdWxhdGVkIGZyb20gaXRcclxuICBwYWxldHRlOiBudWxsLFxyXG5cclxuICAvLyBTb21lIGNvdW50cmllcyBSRVFVSVJFIHRoYXQgYSB1c2VyIGNhbiBjaGFuZ2UgdGhlaXIgbWluZC4gWW91IGNhbiBjb25maWd1cmUgdGhpcyB5b3Vyc2VsZi5cclxuICAvLyBNb3N0IG9mIHRoZSB0aW1lIHRoaXMgc2hvdWxkIGJlIGZhbHNlLCBidXQgdGhlIGBjb29raWVjb25zZW50LmxlZ2FsYCBjYW4gY2hhbmdlIHRoaXMgdG8gYHRydWVgIGlmIGl0IGRldGVjdHMgdGhhdCBpdCBzaG91bGRcclxuICByZXZva2FibGU6IGZhbHNlLFxyXG5cclxuICAvLyBpZiB0cnVlLCB0aGUgcmV2b2thYmxlIGJ1dHRvbiB3aWxsIHRyYW5sYXRlIGluIGFuZCBvdXRcclxuICBhbmltYXRlUmV2b2thYmxlOiB0cnVlLFxyXG5cclxuICAvLyB1c2VkIHRvIGRpc2FibGUgbGluayBvbiBleGlzdGluZyBsYXlvdXRzXHJcbiAgLy8gcmVwbGFjZXMgZWxlbWVudCBtZXNzYWdlbGluayB3aXRoIG1lc3NhZ2UgYW5kIHJlbW92ZXMgY29udGVudCBvZiBsaW5rXHJcbiAgc2hvd0xpbms6IHRydWUsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBhcyBzY3JvbGwgcmFuZ2UgdG8gZW5hYmxlXHJcbiAgZGlzbWlzc09uU2Nyb2xsOiBmYWxzZSxcclxuXHJcbiAgLy8gc2V0IHZhbHVlIGFzIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGF1dG9kaXNtaXNzIGFmdGVyIHNldCB0aW1lXHJcbiAgZGlzbWlzc09uVGltZW91dDogZmFsc2UsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcclxuICBkaXNtaXNzT25XaW5kb3dDbGljazogZmFsc2UsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcclxuICBkaXNtaXNzT25MaW5rQ2xpY2s6IGZhbHNlLFxyXG5cclxuICAvLyBzZXQgdmFsdWUgYXMga2V5cyBhcmUgcHJlc3NlZCwgKCBhbGxvd0tleUNvZGUgPSAxMywgZGVueUtleUNvZGUgPSAyNyApXHJcbiAgZGlzbWlzc09uS2V5UHJlc3M6IGZhbHNlLFxyXG5cclxuICAvLyBJZiBgZGlzbWlzc09uV2luZG93Q2xpY2tgIGlzIHRydWUsIHdlIGNhbiBjbGljayBvbiAncmV2b2tlJyBhbmQgd2UnbGwgc3RpbGwgZGlzbWlzcyB0aGUgYmFubmVyLCBzbyB3ZSBuZWVkIGV4Y2VwdGlvbnMuXHJcbiAgLy8gc2hvdWxkIGJlIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIChub3QgQ1NTIHNlbGVjdG9ycylcclxuICBpZ25vcmVDbGlja3NGcm9tOiBbJ2NjLXJldm9rZScsICdjYy1idG4nLCAnY2MtbGluayddLCAvLyBhbHJlYWR5IGluY2x1ZGVzIHRoZSByZXZva2UgYnV0dG9uIGFuZCB0aGUgYmFubmVyIGl0c2VsZlxyXG5cclxuICAvLyBUaGUgYXBwbGljYXRpb24gYXV0b21hdGljYWxseSBkZWNpZGUgd2hldGhlciB0aGUgcG9wdXAgc2hvdWxkIG9wZW4uXHJcbiAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgdG8gcHJldmVudCB0aGlzIGZyb20gaGFwcGVuaW5nIGFuZCB0byBhbGxvdyB5b3UgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIHlvdXJzZWxmXHJcbiAgYXV0b09wZW46IHRydWUsXHJcblxyXG4gIC8vIEJ5IGRlZmF1bHQgdGhlIGNyZWF0ZWQgSFRNTCBpcyBhdXRvbWF0aWNhbGx5IGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIgKHdoaWNoIGRlZmF1bHRzIHRvIDxib2R5PikuIFlvdSBjYW4gcHJldmVudCB0aGlzIGJlaGF2aW91clxyXG4gIC8vIGJ5IHNldHRpbmcgdGhpcyB0byBmYWxzZSwgYnV0IGlmIHlvdSBkbywgeW91IG11c3QgYXR0YWNoIHRoZSBgZWxlbWVudGAgeW91cnNlbGYsIHdoaWNoIGlzIGEgcHVibGljIHByb3BlcnR5IG9mIHRoZSBwb3B1cCBpbnN0YW5jZTpcclxuICAvL1xyXG4gIC8vICAgICBjb25zdCBpbnN0YW5jZSA9IGNvb2tpZWNvbnNlbnQuZmFjdG9yeShvcHRpb25zKVxyXG4gIC8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluc3RhbmNlLmVsZW1lbnQpXHJcbiAgLy9cclxuICBhdXRvQXR0YWNoOiB0cnVlLFxyXG5cclxuICAvLyBzZXQgdmFsdWUgaWYgZmxvYXRpbmcgbGF5b3V0IHNob3VsZCBiZSBmb3JjZWQgZm9yIG1vYmlsZSBkZXZpY2VzXHJcbiAgbW9iaWxlRm9yY2VGbG9hdDogZmFsc2UsXHJcblxyXG4gIC8vIHNpbXBsZSB3aGl0ZWxpc3QvYmxhY2tsaXN0IGZvciBwYWdlcy4gc3BlY2lmeSBwYWdlIGJ5OlxyXG4gIC8vICAgLSB1c2luZyBhIHN0cmluZyA6ICcvaW5kZXguaHRtbCcgICAgICAgICAgIChtYXRjaGVzICcvaW5kZXguaHRtbCcgZXhhY3RseSkgT1JcclxuICAvLyAgIC0gdXNpbmcgUmVnRXhwICAgOiAvXFwvcGFnZV9bXFxkXStcXC5odG1sLyAgICAobWF0Y2hlZCAnL3BhZ2VfMS5odG1sJyBhbmQgJy9wYWdlXzIuaHRtbCcgZXRjKVxyXG4gIHdoaXRlbGlzdFBhZ2U6IFtdLFxyXG4gIGJsYWNrbGlzdFBhZ2U6IFtdLFxyXG5cclxuICAvLyBJZiB0aGlzIGlzIGRlZmluZWQsIHRoZW4gaXQgaXMgdXNlZCBhcyB0aGUgaW5uZXIgaHRtbCBpbnN0ZWFkIG9mIGxheW91dC4gVGhpcyBhbGxvd3MgZm9yIHVsdGltYXRlIGN1c3RvbWlzYXRpb24uXHJcbiAgLy8gQmUgc3VyZSB0byB1c2UgdGhlIGNsYXNzZXMgYGNjLWJ0bmAgYW5kIGBjYy1BTExPV2AsIGBjYy1ERU5ZYCBvciBgY2MtRElTTUlTU2AuIFRoZXkgZW5hYmxlIHRoZSBhcHAgdG8gcmVnaXN0ZXIgY2xpY2tcclxuICAvLyBoYW5kbGVycy4gWW91IGNhbiB1c2Ugb3RoZXIgcHJlLWV4aXN0aW5nIGNsYXNzZXMgdG9vLiBTZWUgYHNyYy9zdHlsZXNgIGZvbGRlci5cclxuICBvdmVycmlkZUhUTUw6IG51bGxcclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2NyaXB0ID0gKCB1cmwsIGNhbGxiYWNrLCB0aW1lb3V0ICkgPT4ge1xyXG4gIGxldCB0aW1lb3V0SWR4XHJcbiAgY29uc3Qgc2NyaXB0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcclxuXHJcbiAgc2NyaXB0VGFnLnR5cGUgPSAndGV4dC8nICsgKHVybC50eXBlIHx8ICdqYXZhc2NyaXB0JylcclxuICBzY3JpcHRUYWcuc3JjID0gdXJsLnNyYyB8fCB1cmxcclxuICBzY3JpcHRUYWcuYXN5bmMgPSBmYWxzZVxyXG5cclxuICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIHRoaXMgY29kZSBoYW5kbGVzIHR3byBzY2VuYXJpb3MsIHdoZXRoZXIgY2FsbGVkIGJ5IG9ubG9hZCBvciBvbnJlYWR5c3RhdGVjaGFuZ2VcclxuICAgIGNvbnN0IHN0YXRlID0gc2NyaXB0VGFnLnJlYWR5U3RhdGVcclxuXHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkeClcclxuXHJcbiAgICBpZiAoIWNhbGxiYWNrLmRvbmUgJiYgKCFzdGF0ZSB8fCAvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHN0YXRlKSkpIHtcclxuICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWVcclxuICAgICAgY2FsbGJhY2soKVxyXG4gICAgICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gc2NyaXB0VGFnLm9ubG9hZCA9IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKVxyXG5cclxuICAvLyBZb3UgY2FuJ3QgY2F0Y2ggSlNPTlAgRXJyb3JzLCBiZWNhdXNlIGl0J3MgaGFuZGxlZCBieSB0aGUgc2NyaXB0IHRhZ1xyXG4gIC8vIG9uZSB3YXkgaXMgdG8gdXNlIGEgdGltZW91dFxyXG4gIHRpbWVvdXRJZHggPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgY2FsbGJhY2suZG9uZSA9IHRydWVcclxuICAgIGNhbGxiYWNrKClcclxuICAgIHNjcmlwdFRhZy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzY3JpcHRUYWcub25sb2FkID0gbnVsbFxyXG4gIH0sIHRpbWVvdXQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlQXN5bmNSZXF1ZXN0ID0gKCB1cmwsIG9uQ29tcGxldGUsIHRpbWVvdXQsIHBvc3REYXRhLCByZXF1ZXN0SGVhZGVycyApID0+IHtcclxuICBjb25zdCB4aHIgPSBuZXcgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCB3aW5kb3cuQWN0aXZlWE9iamVjdCkoXHJcbiAgICAnTVNYTUwyLlhNTEhUVFAuMy4wJ1xyXG4gIClcclxuXHJcbiAgeGhyLm9wZW4ocG9zdERhdGEgPyAnUE9TVCcgOiAnR0VUJywgdXJsLCAxKVxyXG5cclxuICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0SGVhZGVycykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcmVxdWVzdEhlYWRlcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgIGNvbnN0IHNwbGl0ID0gcmVxdWVzdEhlYWRlcnNbaV0uc3BsaXQoJzonLCAyKVxyXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcclxuICAgICAgICBzcGxpdFswXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyksXHJcbiAgICAgICAgc3BsaXRbMV0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb25Db21wbGV0ZSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA+IDMpIHtcclxuICAgICAgICBvbkNvbXBsZXRlKHhocilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgeGhyLnNlbmQocG9zdERhdGEpXHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gJyAnICsgZG9jdW1lbnQuY29va2llXHJcbiAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdCgnICcgKyBuYW1lICsgJz0nKVxyXG4gIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyXHJcbiAgICA/IHVuZGVmaW5lZFxyXG4gICAgOiBwYXJ0c1xyXG4gICAgICAgIC5wb3AoKVxyXG4gICAgICAgIC5zcGxpdCgnOycpXHJcbiAgICAgICAgLnNoaWZ0KClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IGZ1bmN0aW9uICggbmFtZSwgdmFsdWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlICkge1xyXG4gIGNvbnN0IGV4ZGF0ZSA9IG5ldyBEYXRlKClcclxuICBleGRhdGUuc2V0SG91cnMoZXhkYXRlLmdldEhvdXJzKCkgKyAoKHR5cGVvZiBleHBpcnlEYXlzICE9PSBcIm51bWJlclwiICA/IDM2NSA6IGV4cGlyeURheXMgKSAqIDI0KSlcclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICc7ZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICc7cGF0aD0nICsgKHBhdGggfHwgJy8nKSArXHJcbiAgICAgICAgICAgICAgICAgICAgKCBkb21haW4gPyAnO2RvbWFpbj0nICsgZG9tYWluIDogJycgKSArXHJcbiAgICAgICAgICAgICAgICAgICAgKCBzZWN1cmUgPyAnO3NlY3VyZScgOiAnJyApXHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgZ2V0Q29udHJhc3QsIGdldEhvdmVyQ29sb3IgfSBmcm9tICcuL3N0eWxlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYXZlcnNlRE9NUGF0aCA9ICggZWxlbSwgY2xhc3NOYW1lICkgPT5cclxuICAhZWxlbSB8fCAhZWxlbS5wYXJlbnROb2RlXHJcbiAgPyBudWxsIDogZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxyXG4gID8gZWxlbSA6IHRyYXZlcnNlRE9NUGF0aChlbGVtLnBhcmVudE5vZGUsIGNsYXNzTmFtZSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDdXN0b21TdHlsZXNoZWV0ID0gKGlkLCBwYWxldHRlLCBwcmVmaXgpID0+IHtcclxuICBjb25zdCBjb2xvclN0eWxlcyA9IHt9XHJcbiAgY29uc3QgeyBwb3B1cCwgYnV0dG9uLCBoaWdobGlnaHQsIHNhdmVCdXR0b24gfSA9IHBhbGV0dGVcclxuXHJcbiAgLy8gbmVlZHMgYmFja2dyb3VuZCBjb2xvdXIsIHRleHQgYW5kIGxpbmsgd2lsbCBiZSBzZXQgdG8gYmxhY2svd2hpdGUgaWYgbm90IHNwZWNpZmllZFxyXG4gIGlmIChwb3B1cCkge1xyXG4gICAgICAvLyBhc3N1bWVzIHBvcHVwLmJhY2tncm91bmQgaXMgc2V0XHJcbiAgICAgIHBvcHVwLnRleHQgPSBwb3B1cC50ZXh0ID8gcG9wdXAudGV4dCA6IGdldENvbnRyYXN0KHBvcHVwLmJhY2tncm91bmQpXHJcbiAgICAgIHBvcHVwLmxpbmsgPSBwb3B1cC5saW5rID8gcG9wdXAubGluayA6IHBvcHVwLnRleHRcclxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtdG9vbHRpcCwgJyArIHByZWZpeCArICcgLmNjLXRvb2x0aXA6YWZ0ZXInXSA9IFtcclxuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXHJcbiAgICAgIF1cclxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy13aW5kb3cnXSA9IFtcclxuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXHJcbiAgICAgIF1cclxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy1yZXZva2UnXSA9IFtcclxuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXHJcbiAgICAgIF1cclxuICAgICAgY29sb3JTdHlsZXNbXHJcbiAgICAgICAgICBwcmVmaXggKyAnIC5jYy1saW5rLCcgKyBwcmVmaXggKyAnIC5jYy1saW5rOmFjdGl2ZSwnICsgcHJlZml4ICsgJyAuY2MtbGluazp2aXNpdGVkJ1xyXG4gICAgICBdID0gWydjb2xvcjogJyArIHBvcHVwLmxpbmtdXHJcblxyXG4gICAgICBpZiAoYnV0dG9uKSB7XHJcbiAgICAgICAgICAvLyBhc3N1bWVzIGJ1dHRvbi5iYWNrZ3JvdW5kIGlzIHNldFxyXG4gICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b24udGV4dCA/IGJ1dHRvbi50ZXh0IDogZ2V0Q29udHJhc3QoYnV0dG9uLmJhY2tncm91bmQpO1xyXG4gICAgICAgICAgYnV0dG9uLmJvcmRlciA9IGJ1dHRvbi5ib3JkZXIgPyBidXR0b24uYm9yZGVyIDogJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddID0gW1xyXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIGJ1dHRvbi50ZXh0LFxyXG4gICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBidXR0b24uYm9yZGVyLFxyXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgYnV0dG9uLmJhY2tncm91bmQsXHJcbiAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgaWYgKGJ1dHRvbi5wYWRkaW5nKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10ucHVzaCgncGFkZGluZzogJyArIGJ1dHRvbi5wYWRkaW5nKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoYnV0dG9uLmJhY2tncm91bmQgIT0gJ3RyYW5zcGFyZW50Jykge1xyXG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0bjpob3ZlciwgJyArIHByZWZpeCArICcgLmNjLWJ0bjpmb2N1cyddID0gW1xyXG4gICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIChidXR0b24uaG92ZXIgfHwgZ2V0SG92ZXJDb2xvcihidXR0b24uYmFja2dyb3VuZCkpLFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoaGlnaGxpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgLy9hc3N1bWVzIGhpZ2hsaWdodC5iYWNrZ3JvdW5kIGlzIHNldFxyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodC50ZXh0ID0gaGlnaGxpZ2h0LnRleHRcclxuICAgICAgICAgICAgICAgICAgPyBoaWdobGlnaHQudGV4dFxyXG4gICAgICAgICAgICAgICAgICA6IGdldENvbnRyYXN0KGhpZ2hsaWdodC5iYWNrZ3JvdW5kKTtcclxuICAgICAgICAgICAgICBoaWdobGlnaHQuYm9yZGVyID0gaGlnaGxpZ2h0LmJvcmRlciA/IGhpZ2hsaWdodC5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXHJcbiAgICAgICAgICAgICAgICAgICdjb2xvcjogJyArIGhpZ2hsaWdodC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJvcmRlcixcclxuICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBoaWdobGlnaHQuYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIHNldHMgaGlnaGxpZ2h0IHRleHQgY29sb3IgdG8gcG9wdXAgdGV4dC4gYmFja2dyb3VuZCBhbmQgYm9yZGVyIGFyZSB0cmFuc3BhcmVudCBieSBkZWZhdWx0LlxyXG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXHJcbiAgICAgICAgICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2F2ZUJ1dHRvbikge1xyXG4gICAgICAgICAgY29sb3JTdHlsZXNbYCR7cHJlZml4fSAuY2MtYnRuLmNjLXNhdmVgXSA9IFtcclxuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBzYXZlQnV0dG9uLnRleHQsXHJcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIHNhdmVCdXR0b24uYm9yZGVyLFxyXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgc2F2ZUJ1dHRvbi5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0aGlzIHdpbGwgYmUgaW50ZXJwcmV0dGVkIGFzIENTUy4gdGhlIGtleSBpcyB0aGUgc2VsZWN0b3IsIGFuZCBlYWNoIGFycmF5IGVsZW1lbnQgaXMgYSBydWxlXHJcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXHJcbiAgc3R5bGUuaWQgPSBpZFxyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHN0eWxlIClcclxuICBPYmplY3QuZW50cmllcyggY29sb3JTdHlsZXMgKS5mb3JFYWNoKCAoIFsgcHJvcCwgdmFsdWUgXSwgaW5kZXggKSA9PlxyXG4gICAgc3R5bGUuc2hlZXQuaW5zZXJ0UnVsZSggYCR7cHJvcH17JHt2YWx1ZS5qb2luKCc7Jyl9fWAsIGluZGV4IClcclxuICApXHJcbiAgcmV0dXJuIHN0eWxlXHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0ICogYXMgY29va2llIGZyb20gXCIuL2Nvb2tpZVwiXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBjb29raWUuZ2V0Q29va2llXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSBjb29raWUuc2V0Q29va2llXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGludGVycG9sYXRlU3RyaW5nID0gKCBzdHIsIGNhbGxiYWNrICkgPT5cclxuICBzdHIucmVwbGFjZSggL3t7KFthLXpdW2EtejAtOVxcLV9dKil9fS9naSAsICggbWF0Y2hlcywgcmVwbGFjZWQgKSA9PiBjYWxsYmFjayggcmVwbGFjZWQgKSB8fCAnJylcclxuXHJcbi8vIG9ubHkgdXNlZCBmb3IgdGhyb3R0bGluZyB0aGUgJ21vdXNlbW92ZScgZXZlbnQgKHVzZWQgZm9yIGFuaW1hdGluZyB0aGUgcmV2b2tlIGJ1dHRvbiB3aGVuIGBhbmltYXRlUmV2b2thYmxlYCBpcyB0cnVlKVxyXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoY2FsbGJhY2ssIGxpbWl0KSA9PiB7XHJcbiAgbGV0IHdhaXQgPSBmYWxzZVxyXG4gIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghd2FpdCkge1xyXG4gICAgICBjYWxsYmFjayguLi5hcmd1bWVudHMpXHJcbiAgICAgIHdhaXQgPSB0cnVlXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2FpdCA9IGZhbHNlXHJcbiAgICAgIH0sIGxpbWl0KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gb25seSB1c2VkIGZvciBoYXNoaW5nIGpzb24gb2JqZWN0cyAodXNlZCBmb3IgaGFzaCBtYXBwaW5nIHBhbGV0dGUgb2JqZWN0cywgdXNlZCB3aGVuIGN1c3RvbSBjb2xvdXJzIGFyZSBwYXNzZWQgdGhyb3VnaCBKYXZhU2NyaXB0KVxyXG5leHBvcnQgY29uc3QgaGFzaCA9IHN0ciA9PiB7XHJcbiAgbGV0IGhhc2hOdW0gPSAwLFxyXG4gICAgaSA9IDAsXHJcbiAgICBjaHIsXHJcbiAgICBsZW4gPSBzdHIubGVuZ3RoXHJcbiAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoTnVtXHJcbiAgZm9yICggaTsgaSA8IGxlbjsgKytpICkge1xyXG4gICAgY2hyID0gc3RyLmNoYXJDb2RlQXQoIGkgKVxyXG4gICAgaGFzaE51bSA9ICggaGFzaE51bSA8PCA1ICkgLSBoYXNoTnVtICsgY2hyXHJcbiAgICBoYXNoTnVtIHw9IDBcclxuICB9XHJcbiAgcmV0dXJuIGhhc2hOdW1cclxufVxyXG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tIFwiLi9zdHlsZVwiXHJcbmV4cG9ydCBjb25zdCBub3JtYWxpemVIZXggPSBzdHlsZS5ub3JtYWxpemVIZXhcclxuZXhwb3J0IGNvbnN0IGdldENvbnRyYXN0ID0gc3R5bGUuZ2V0Q29udHJhc3RcclxuZXhwb3J0IGNvbnN0IGdldEx1bWluYW5jZSA9IHN0eWxlLmdldEx1bWluYW5jZVxyXG5leHBvcnQgY29uc3QgZ2V0SG92ZXJDb2xvciA9c3R5bGUuZ2V0SG92ZXJDb2xvclxyXG5cclxuaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbVwiXHJcbmV4cG9ydCBjb25zdCB0cmF2ZXJzZURPTVBhdGggPSBkb20udHJhdmVyc2VET01QYXRoXHJcbmV4cG9ydCBjb25zdCBhZGRDdXN0b21TdHlsZXNoZWV0ID0gZG9tLmFkZEN1c3RvbVN0eWxlc2hlZXRcclxuXHJcbmltcG9ydCAqIGFzIHZhbGlkYXRpb24gZnJvbSBcIi4vdmFsaWRhdGlvblwiXHJcbmV4cG9ydCBjb25zdCBpc1ZhbGlkU3RhdHVzID0gdmFsaWRhdGlvbi5pc1ZhbGlkU3RhdHVzXHJcbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gdmFsaWRhdGlvbi5pc1BsYWluT2JqZWN0XHJcbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9IHZhbGlkYXRpb24uaXNNb2JpbGVcclxuXHJcbmltcG9ydCAqIGFzIGFzeW5jRm5zIGZyb20gXCIuL2FzeW5jXCJcclxuZXhwb3J0IGNvbnN0IGdldFNjcmlwdCA9IGFzeW5jRm5zLmdldFNjcmlwdFxyXG5leHBvcnQgY29uc3QgbWFrZUFzeW5jUmVxdWVzdCA9IGFzeW5jRm5zLm1ha2VBc3luY1JlcXVlc3RcclxuXHJcbmNvbnN0IGxvb3BQcm9wZXJ0aWVzID0gb3ZlcndyaXRlcyA9PiAob2JqLCBba2V5LCB2YWx1ZV0pID0+IHtcclxuICBpZiAoIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkgKSB7XHJcbiAgICBpZiAoIG92ZXJ3cml0ZXNbIGtleSBdIGluc3RhbmNlb2YgT2JqZWN0ICYmICEob3ZlcndyaXRlc1sga2V5IF0gaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgb2JqWyBrZXkgXSA9IE9iamVjdC5lbnRyaWVzKHZhbHVlKS5yZWR1Y2UobG9vcFByb3BlcnRpZXMob3ZlcndyaXRlc1trZXldKSwge30pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmpbIGtleSBdID0gdmFsdWVcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCBvdmVyd3JpdGVzLmhhc093blByb3BlcnR5KCBrZXkgKSApIHtcclxuICAgICAgb2JqWyBrZXkgXSA9IG92ZXJ3cml0ZXNbIGtleSBdXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIG9ialsga2V5IF0gPSB2YWx1ZSBcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVyZ2VPcHRpb25zID0gKCBkZWZhdWx0cywgb3ZlcndyaXRlcyApID0+XHJcbiAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLnJlZHVjZShsb29wUHJvcGVydGllcyhvdmVyd3JpdGVzKSwge30pXHJcbiIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGV4ID0gaGV4ID0+XHJcbiAgaGV4WzBdID09ICcjJ1xyXG4gICAgPyBoZXguc3Vic3RyKDEpIDogaGV4Lmxlbmd0aCA9PSAzXHJcbiAgICA/IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXSA6IGhleFxyXG5cclxuLy8gdXNlZCB0byBnZXQgdGV4dCBjb2xvcnMgaWYgbm90IHNldFxyXG5leHBvcnQgY29uc3QgZ2V0Q29udHJhc3QgPSBoZXggPT4ge1xyXG4gIGhleCA9IG5vcm1hbGl6ZUhleChoZXgpXHJcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHIoMCwgMiksIDE2KVxyXG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyKDIsIDIpLCAxNilcclxuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cig0LCAyKSwgMTYpXHJcbiAgY29uc3QgeWlxID0gKHIgKiAyOTkgKyBnICogNTg3ICsgYiAqIDExNCkgLyAxMDAwXHJcbiAgcmV0dXJuIHlpcSA+PSAxMjggPyAnIzAwMCcgOiAnI2ZmZidcclxufVxyXG5cclxuLy8gdXNlZCB0byBjaGFuZ2UgY29sb3Igb24gaGlnaGxpZ2h0XHJcbmV4cG9ydCBjb25zdCBnZXRMdW1pbmFuY2UgPSBoZXggPT4ge1xyXG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KG5vcm1hbGl6ZUhleChoZXgpLCAxNiksXHJcbiAgICBhbXQgPSAzOCxcclxuICAgIFIgPSAobnVtID4+IDE2KSArIGFtdCxcclxuICAgIEIgPSAoKG51bSA+PiA4KSAmIDB4MDBmZikgKyBhbXQsXHJcbiAgICBHID0gKG51bSAmIDB4MDAwMGZmKSArIGFtdFxyXG4gICAgcmV0dXJuICcjJyArIChcclxuICAgIDB4MTAwMDAwMCArXHJcbiAgICAoUiA8IDI1NSA/IChSIDwgMSA/IDAgOiBSKSA6IDI1NSkgKiAweDEwMDAwICtcclxuICAgIChCIDwgMjU1ID8gKEIgPCAxID8gMCA6IEIpIDogMjU1KSAqIDB4MTAwICtcclxuICAgIChHIDwgMjU1ID8gKEcgPCAxID8gMCA6IEcpIDogMjU1KVxyXG4gIClcclxuICAgIC50b1N0cmluZygxNilcclxuICAgIC5zbGljZSgxKVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRIb3ZlckNvbG9yID0gaGV4ID0+IHtcclxuICBoZXggPSBub3JtYWxpemVIZXgoIGhleCApXHJcbiAgLy8gZm9yIGJsYWNrIGJ1dHRvbnNcclxuICByZXR1cm4gaGV4ID09PSAnMDAwMDAwJyA/ICcjMjIyJyA6IGdldEx1bWluYW5jZSggaGV4IClcclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgeyBzdGF0dXNlcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBhIHN0YXR1cyBpcyBpbiB0aGUgY29uc3RhbnRzIGxpc3RcclxuICogQHBhcmFtIHsgc3RyaW5nIH0gc3RhdHVzIC0gU3RhdHVzIFN0cmluZyB0b1xyXG4gKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gaWYgc3RhdHVzIGlzIHZhbGlkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0YXR1cyA9IHN0YXR1cyA9PiBzdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPj0gMFxyXG5cclxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlID0gKCkgPT5cclxuICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKVxyXG5cclxuLy8gVGhlIGNvZGUgXCJ0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGxcIiBhbGxvd3MgQXJyYXkgb2JqZWN0c1xyXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9