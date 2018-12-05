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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/city.js":
/*!***********************************!*\
  !*** ./src/js/components/city.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction city(data) {\r\n    if(data.cod === 404) {\r\n        // error\r\n        console.log(\"city not found\");\r\n        return;\r\n    }\r\n\r\n    let item = document.createElement(\"li\");\r\n    item.classList.add(\"item\");\r\n\r\n    let cityName = data.city.name;\r\n    let country = data.city.country;\r\n    let forecast = data.list;\r\n    let todaysForecast = forecast[0];\r\n    let todaysDate = (new Date(todaysForecast.dt * 1000)).toDateString();\r\n    let unit =  true ? \"F\" : undefined;\r\n    let todaysSummary = todaysForecast.weather[0].description;\r\n    todaysSummary = todaysSummary.charAt(0).toUpperCase() + todaysSummary.substring(1);\r\n\r\n    item.innerHTML = \r\n      \"<div class=\\\"item__container\\\">\" +\r\n        \"<div class=\\\"item__info\\\">\" +\r\n          \"<h2 class=\\\"item__location\\\">\" + cityName + \", \" + country + \"</h2>\" +\r\n          \"<h4 class=\\\"item__date\\\">\" + todaysDate + \"</h4>\" +\r\n          \"<p class=\\\"item__summary\\\">\" + todaysSummary + \"</p>\" +\r\n          \"<div class=\\\"item__temp\\\">\" +\r\n            \"<p>Avg: \" + todaysForecast.temp.day + unit + \"</p>\" +\r\n            \"<p>Low: \" + todaysForecast.temp.min + unit + \"</p>\" +\r\n            \"<p>High: \" + todaysForecast.temp.max + unit + \"</p>\" +\r\n          \"</div>\" +\r\n        \"</div>\" +\r\n        \"<div class=\\\"toggle-box\\\">\" +\r\n          \"<i class=\\\"fas fa-caret-down toggle\\\"></i>\" +\r\n        \"</div>\" +\r\n      \"</div>\" + \r\n      \"<hr>\" +\r\n      \"<div class=\\\"forecast__container\\\">\" +\r\n        \"<div class=\\\"row\\\">\" +\r\n        \"</div>\" +\r\n      \"</div>\";\r\n\r\n    // toggle button\r\n    let forecastContainer = item.querySelector(\".forecast__container\");\r\n    item.querySelector(\".toggle\").addEventListener(\"click\", function() {\r\n        forecastContainer.classList.toggle(\"forecast__show\");\r\n        this.classList.toggle(\"fa-caret-up\");\r\n    });\r\n\r\n    // populate 5 day forecast\r\n    let row = item.querySelector(\".row\");\r\n    forecast.forEach(function(thatDay) {\r\n        let day = document.createElement(\"div\");\r\n        day.className = \"col col-md-1-5\";\r\n\r\n        let forecastDate = (new Date(thatDay.dt * 1000)).toDateString();\r\n        let forecastDesc = thatDay.weather[0].description;\r\n        forecastDesc = forecastDesc.charAt(0).toUpperCase() + forecastDesc.substring(1);\r\n\r\n        let forecastAvg = thatDay.temp.day + unit;\r\n        let forecastLow = thatDay.temp.min + unit;\r\n        let forecastHigh = thatDay.temp.max + unit;\r\n\r\n        day.innerHTML = \r\n          \"<div class=\\\"forecast__info\\\">\" +\r\n            \"<h4 class=\\\"forecast__date\\\">\" + forecastDate + \"</h4>\" +\r\n            \"<p class=\\\"forecast__summary\\\">\" + forecastDesc + \"</p>\" +\r\n            \"<div class=\\\"forecast__temp\\\">\" +\r\n              \"<p>Avg: \" + forecastAvg + \"</p>\" +\r\n              \"<p>Low: \" + forecastLow + \"</p>\" +\r\n              \"<p>High: \" + forecastHigh + \"</p>\" +\r\n            \"</div>\" +\r\n          \"</div>\";\r\n        \r\n        row.appendChild(day);\r\n    });\r\n\r\n    return item;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (city);\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/components/city.js?");

/***/ }),

/***/ "./src/js/components/popup.js":
/*!************************************!*\
  !*** ./src/js/components/popup.js ***!
  \************************************/
/*! exports provided: createPopup, showPopup, hidePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPopup\", function() { return createPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showPopup\", function() { return showPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hidePopup\", function() { return hidePopup; });\nfunction showPopup(popup) {\r\n    popup.style.animation = \"300ms showPopup ease-in-out forwards\";\r\n}\r\n\r\nfunction hidePopup(popup) {\r\n    popup.style.animation = \"300ms hidePopup ease-in-out forwards\";\r\n}\r\n\r\nfunction createPopup(text) {\r\n    let popup = document.createElement(\"div\");\r\n    popup.classList.add(\"popup\");\r\n    popup.innerHTML = \r\n        \"<i class=\\\"fas fa-times popup__close\\\"></i>\" +\r\n        \"<p class=\\\"popup__message\\\">\" + text + \"</p>\";\r\n\r\n    popup.querySelector(\".popup__close\").addEventListener(\"click\", function() {\r\n        hidePopup(popup);\r\n    });\r\n\r\n    return popup;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/components/popup.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/sidebar.js */ \"./src/js/sections/sidebar.js\");\n/* harmony import */ var _sections_citylist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/citylist.js */ \"./src/js/sections/citylist.js\");\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/popup */ \"./src/js/components/popup.js\");\n\r\n\r\n\r\n\r\n(function() {\r\n\tlet app = document.querySelector(\".content\");\r\n\tlet sidebar = Object(_sections_sidebar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tlet list = Object(_sections_citylist_js__WEBPACK_IMPORTED_MODULE_1__[\"initList\"])();\r\n\tlet popup = Object(_components_popup__WEBPACK_IMPORTED_MODULE_2__[\"createPopup\"])(\"City was not found. Make sure to type in the correct city name and country initial separated by a comma. e.g. \\\"Los Angeles, US\\\"\");\r\n\r\n\tdocument.body.appendChild(popup);\r\n\tapp.appendChild(sidebar);\r\n\tapp.appendChild(list);\r\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/sections/citylist.js":
/*!*************************************!*\
  !*** ./src/js/sections/citylist.js ***!
  \*************************************/
/*! exports provided: initList, addCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initList\", function() { return initList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCity\", function() { return addCity; });\n/* harmony import */ var _components_city_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/city.js */ \"./src/js/components/city.js\");\n\r\n\r\nfunction addCity(data) {\r\n    document.querySelector(\".list\").appendChild(Object(_components_city_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data));\r\n}\r\n\r\nfunction initList() {\r\n    let list = document.createElement(\"ul\");\r\n    list.classList.add(\"list\");\r\n    return list;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/sections/citylist.js?");

/***/ }),

/***/ "./src/js/sections/sidebar.js":
/*!************************************!*\
  !*** ./src/js/sections/sidebar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _citylist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citylist.js */ \"./src/js/sections/citylist.js\");\n/* harmony import */ var _components_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/popup.js */ \"./src/js/components/popup.js\");\n\r\n\r\n\r\n\r\n\r\nasync function getWeather(url, cb) {\r\n  try {\r\n    let response = await fetch(url, {mode: 'cors'});\r\n    let result = await response.json();\r\n    \r\n    cb(result);\r\n  } catch(e) {\r\n    // display popup saying there was an error\r\n    Object(_components_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"showPopup\"])(document.querySelector(\".popup\"));\r\n  }\r\n}\r\n\r\nfunction initSidebar() {\r\n  let sidebar = document.createElement(\"div\");\r\n  sidebar.classList.add(\"sidebar\");\r\n\r\n  sidebar.innerHTML = \r\n    \"<h1 class=\\\"header\\\">Morning Sunshine</h1>\" +\r\n\t  \"<form>\" + \r\n      \"<input type=\\\"text\\\" class=\\\"search\\\" placeholder=\\\"Los Angeles, US\\\" pattern=\\\"[a-zA-Z -]+[,] {0,1}[a-zA-Z]{2}\\\">\" +\r\n      \"<input id=\\\"f\\\" type=\\\"radio\\\" class=\\\"radio\\\" name=\\\"units\\\" checked><label for=\\\"f\\\">Fahrenheit</label>\" +\r\n      \"<input id=\\\"c\\\" type=\\\"radio\\\" class=\\\"radio\\\" name=\\\"units\\\"><label for=\\\"c\\\">Celcius</label>\" +\r\n\t  \"</form>\";\r\n\r\n  let input = sidebar.querySelector(\"input\");\r\n  sidebar.querySelector(\"form\").addEventListener(\"submit\", function(e) {\r\n    e.preventDefault();\r\n    \r\n    let units = sidebar.querySelector(\"#f\").checked ? \"imperial\" : \"metric\";\r\n\r\n    let location = input.value.replace(/ /g, '%20');\r\n    let searchQuery = \"http://api.openweathermap.org/data/2.5/forecast/daily?q=\" + location + \"&units=\" + units + \"&cnt=5&APPID=f3ef326d9ead2dc969238af1a6f1d733\";\r\n\r\n  \tgetWeather(searchQuery, _citylist_js__WEBPACK_IMPORTED_MODULE_0__[\"addCity\"]);\r\n  });\r\n\r\n  return sidebar;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initSidebar);\n\n//# sourceURL=webpack:///./src/js/sections/sidebar.js?");

/***/ })

/******/ });