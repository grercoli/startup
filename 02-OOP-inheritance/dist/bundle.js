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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/actor.js":
/*!*************************!*\
  !*** ./src/js/actor.js ***!
  \*************************/
/*! exports provided: Actor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Actor\", function() { return Actor; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* jshint esversion: 6 */\nvar Actor = function Actor(name, age) {\n  _classCallCheck(this, Actor);\n\n  this.name = name;\n  this.age = age;\n};\n\n//# sourceURL=webpack:///./src/js/actor.js?");

/***/ }),

/***/ "./src/js/eventemitter.js":
/*!********************************!*\
  !*** ./src/js/eventemitter.js ***!
  \********************************/
/*! exports provided: EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return EventEmitter; });\n/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ \"./src/js/logger.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* jshint esversion: 6 */\n\nvar EventEmitter =\n/*#__PURE__*/\nfunction (_Logger) {\n  _inherits(EventEmitter, _Logger);\n\n  function EventEmitter() {\n    _classCallCheck(this, EventEmitter);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(EventEmitter).call(this));\n  }\n\n  _createClass(EventEmitter, [{\n    key: \"on\",\n    value: function on(video, eventName, callback) {\n      video.addEventListener(eventName, callback);\n    }\n  }, {\n    key: \"emit\",\n    value: function emit(eventName, video) {\n      var _this = this;\n\n      switch (eventName) {\n        case 'play':\n          this.on(video, 'play', function () {\n            _this.log('The play event has been emitted');\n\n            console.log('Playing movie');\n          });\n          break;\n\n        case 'pause':\n          this.on(video, 'pause', function () {\n            return console.log('Movie has been paused');\n          });\n          break;\n\n        case 'resume':\n          this.on(video, 'resume', function () {\n            return console.log('Movie has been resumed');\n          });\n          break;\n\n        default:\n          console.log('No event has been emitted');\n      }\n    }\n  }, {\n    key: \"off\",\n    value: function off(video, eventName, callback) {\n      video.removeEventListener(eventName, callback);\n    }\n  }]);\n\n  return EventEmitter;\n}(_logger_js__WEBPACK_IMPORTED_MODULE_0__[\"Logger\"]);\n\n//# sourceURL=webpack:///./src/js/eventemitter.js?");

/***/ }),

/***/ "./src/js/logger.js":
/*!**************************!*\
  !*** ./src/js/logger.js ***!
  \**************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logger\", function() { return Logger; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* jshint esversion: 6 */\nvar Logger =\n/*#__PURE__*/\nfunction () {\n  function Logger() {\n    _classCallCheck(this, Logger);\n  }\n\n  _createClass(Logger, [{\n    key: \"log\",\n    value: function log(info) {\n      console.log(info);\n    }\n  }]);\n\n  return Logger;\n}();\n\n//# sourceURL=webpack:///./src/js/logger.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie.js */ \"./src/js/movie.js\");\n/* harmony import */ var _actor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actor.js */ \"./src/js/actor.js\");\n/* jshint esversion: 6 */\n\n\nvar social = {\n  share: function share(friendName) {\n    console.log(\"\".concat(friendName, \" shares \").concat(this.title));\n  },\n  like: function like(friendName) {\n    console.log(\"\".concat(friendName, \" likes \").concat(this.title));\n  }\n}; //\"Movie\" class now have \"social\" object methods\n\nObject.assign(_movie_js__WEBPACK_IMPORTED_MODULE_0__[\"Movie\"].prototype, social); //Get video from DOM\n\nvar exampleVid = document.getElementById('dub-video'); //Make an instance of Movie and play with console and methods\n\nvar movie1 = new _movie_js__WEBPACK_IMPORTED_MODULE_0__[\"Movie\"]('The Maze Runner', 2014, 113, exampleVid);\nconsole.log(movie1.title);\nmovie1.play();\nmovie1.pause();\nmovie1.resume(); //Add one actor to movie1\n\nvar dylan = new _actor_js__WEBPACK_IMPORTED_MODULE_1__[\"Actor\"]('Dylan O Brien', 27);\nmovie1.addCast(dylan); //Add an array of actors to movie1\n\nvar actorsArray = [new _actor_js__WEBPACK_IMPORTED_MODULE_1__[\"Actor\"]('Will Poulter', 30), new _actor_js__WEBPACK_IMPORTED_MODULE_1__[\"Actor\"]('Ki Hong Lee ', 25), new _actor_js__WEBPACK_IMPORTED_MODULE_1__[\"Actor\"]('Kaya Scodelario', 28)];\nmovie1.addCast(actorsArray);\nconsole.log(movie1.actors); //Calling \"social\" object methods\n\nmovie1.share('Gustavo');\nmovie1.like('Gustavo');\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/movie.js":
/*!*************************!*\
  !*** ./src/js/movie.js ***!
  \*************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Movie\", function() { return Movie; });\n/* harmony import */ var _eventemitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventemitter.js */ \"./src/js/eventemitter.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* jshint esversion: 6 */\n\nvar Movie =\n/*#__PURE__*/\nfunction (_EventEmitter) {\n  _inherits(Movie, _EventEmitter);\n\n  function Movie(name, year, duration, video) {\n    var _this;\n\n    _classCallCheck(this, Movie);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this));\n    _this.title = name;\n    _this.year = year;\n    _this.duration = duration;\n    _this.video = video;\n    _this.actors = [];\n    return _this;\n  }\n\n  _createClass(Movie, [{\n    key: \"play\",\n    value: function play() {\n      this.emit('play', this.video);\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.emit('pause', this.video);\n    }\n  }, {\n    key: \"resume\",\n    value: function resume() {\n      this.emit('resume', this.video);\n    }\n  }, {\n    key: \"addCast\",\n    value: function addCast(cast) {\n      var _this2 = this;\n\n      if (Array.isArray(cast)) {\n        cast.forEach(function (actor) {\n          _this2.actors.push(actor);\n        });\n      } else {\n        this.actors.push(cast);\n      }\n    }\n  }]);\n\n  return Movie;\n}(_eventemitter_js__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"]);\n\n//# sourceURL=webpack:///./src/js/movie.js?");

/***/ })

/******/ });