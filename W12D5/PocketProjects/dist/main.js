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

/***/ "../../../../../../../../../../home/carlos/.nvm/versions/node/v10.13.0/lib/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\r\n\r\nclass Clock {\r\n    constructor() {\r\n        // 1. Create a Date object.\r\n        const currentTime = new Date();\r\n\r\n        // 2. Store the hour, minute, and second.\r\n        this.hours = currentTime.getHours();\r\n        this.minutes = currentTime.getMinutes();\r\n        this.seconds = currentTime.getSeconds();\r\n\r\n        // 3. Call printTime.\r\n        this.printTime();\r\n\r\n        // 4. Schedule the tick at 1 second intervals.\r\n        setInterval(this._tick.bind(this), 1000);\r\n    }\r\n\r\n    printTime() {\r\n        // Format the time in HH:MM:SS\r\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\r\n\r\n        // Use console.log to print it.\r\n        // console.log(timeString);\r\n        return timeString;\r\n    }\r\n\r\n    _tick() {\r\n        // 1. Increment the time by one second.\r\n        this._incrementSeconds();\r\n\r\n        // 2. Call printTime.\r\n        this.printTime();\r\n    }\r\n\r\n    _incrementSeconds() {\r\n        // 1. Increment the time by one second.\r\n        this.seconds += 1;\r\n        if (this.seconds === 60) {\r\n            this.seconds = 0;\r\n            this._incrementMinutes();\r\n        }\r\n    }\r\n\r\n    _incrementMinutes() {\r\n        this.minutes += 1;\r\n        if (this.minutes === 60) {\r\n            this.minutes = 0;\r\n            this._incrementHours();\r\n        }\r\n    }\r\n\r\n    _incrementHours() {\r\n        this.hours = (this.hours + 1) % 24;\r\n    }\r\n}\r\n\r\nconst clock = new Clock();\r\nconst clockElement = document.getElementById(\"clock\");\r\nsetInterval(() => {\r\n\r\n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(clock.printTime(),clockElement);\r\n}\r\n    ,1000);\r\n    \r\nmodule.export = Clock;\r\n//module.exports = DOMNodeCollection;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../home/carlos/.nvm/versions/node/v10.13.0/lib/node_modules/webpack/buildin/harmony-module.js */ \"../../../../../../../../../../home/carlos/.nvm/versions/node/v10.13.0/lib/node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\"\n};\n\nclass Dropdown {\n  constructor(){\n  }\n\n  dogLinkCreator () {\n    const arr = [];\n    for(let dog in dogs){\n      let a = document.createElement(\"a\")\n      a.innerHTML = dog\n      a.setAttribute(\"href\", dogs[dog]);\n      let ele = document.createElement(\"li\")\n      ele.classList.add (\"dog-link\");\n      ele.appendChild(a)\n      arr.push(ele)\n    }\n    return arr;\n  }\n  \n  attachDogLinks () {\n    let dogLinks = this.dogLinkCreator();\n    let dropDown = document.getElementsByClassName(\"drop-down-dog-list\")[0];\n    // debugger\n    dogLinks.forEach(e => {\n      dropDown.append(e);\n    })\n  }\n}\n\n\n\nconst dropDown = document.getElementsByClassName(\"drop-down-dog-nav\")[0];\nconst droppedDown = document.getElementsByClassName(\"drop-down-dog-nav\")[0];\nconst handleenter = function(e){\n  // debugger\n  const links = Array.from(document.getElementsByClassName(\"dog-link\"));\n  // for(let i=0; i < links.length; i++){\n  for(let i in links){\n    links[i].classList.add(\"open\");\n  }\n  if (e.target && e.target.nodeName == \"li\") {\n    console.log(e.target.id + \" in\");\n  }\n};\n\nconst handleleave = function (e) {\n  // debugger\n  // if (e.target === document.getElementsByClassName(\"drop-down-dog-list\")[0]) {\n    const links = Array.from(document.getElementsByClassName(\"dog-link\"));\n    // for(let i=0; i < links.length; i++){\n    for (let i in links) {\n      links[i].classList.remove(\"open\");\n    } \n  // } \n\n};\n\ndropDown.addEventListener(\"mouseover\", handleenter);\ndroppedDown.addEventListener(\"mouseout\", handleleave)\n// debugger\n\nmodule.exports = Dropdown;\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n_drop_down__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.attachDogLinks();\n\n_todo_list__WEBPACK_IMPORTED_MODULE_3___default.a.refresh();\n_todo_list__WEBPACK_IMPORTED_MODULE_3___default.a.addTodo();\n_todo_list__WEBPACK_IMPORTED_MODULE_3___default.a.checkToDo();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\n\nconst sliderImages = document.querySelectorAll('.slide');\n\nfunction checkSlide(e) {\n  // loop over our images and see when we want each image to show\n  sliderImages.forEach(sliderImage => {\n    // half way through the image\n    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;\n    // bottom of the image\n    const imageBottom = sliderImage.offsetTop + sliderImage.height;\n    const isHalfShown = slideInAt > sliderImage.offsetTop;\n    // see if we have scrolled past yet\n    const isNotScrolledPast = window.scrollY < imageBottom;\n    if (isHalfShown && isNotScrolledPast) {\n      sliderImage.classList.add('active');\n    } else {\n      sliderImage.classList.remove('active');\n    }\n  });\n}\n\n// Use debounce to delay your scroll function and improve efficiency!\nwindow.addEventListener('scroll', debounce(checkSlide));\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Todo = {\n    checkToDo(){\n        const checkBoxes = Array.from(document.getElementsByClassName(\"checkbox\"));\n        const checkbox = document.getElementsByClassName(\"todos\")[0];\n        checkbox.addEventListener(\"change\", e => {\n            let todosArr = JSON.parse(window.localStorage.getItem(\"arr\"));\n            let el = {\n                name: e.target.parentNode.innerText,\n                done: true\n            }\n            for (let i = 0; i < todosArr.length; i++) {\n                if (todosArr[i].name === el.name) {\n                    todosArr[i].done = true;\n                    break;\n                }\n            }\n            window.localStorage.setItem(\"arr\", JSON.stringify(todosArr));\n        });\n    },\n    addTodo(){\n        const button = document.getElementsByClassName(\"add-todo-form\")[0];\n        button.addEventListener(\"submit\", e => {\n            e.preventDefault();\n            todosArr = this.ensureTodosArr();\n            myStorage = window.localStorage;\n            const nameInputEl = document.getElementById(\"add-todo-input\");\n            const name = nameInputEl.value;\n            const todos = document.getElementsByClassName(\"todos\")[0]\n            let todoData = {\n                name: name,\n                done: false\n            }\n            todosArr.push(todoData);\n            myStorage.setItem(\"arr\", JSON.stringify(todosArr));\n            todo = this.createListItem(name, false)\n            todos.appendChild(todo);\n        });\n    },\n    createListItem(name, done){\n        const todo = document.createElement(\"li\");\n        const input = document.createElement(\"input\");\n        input.classList.add = (\"checkbox\")\n        const label = document.createElement(\"label\");\n        label.innerHTML = name;\n        input.setAttribute(\"type\", \"checkbox\");\n        if(done)\n            input.setAttribute(\"checked\", \"true\");\n        todo.appendChild(input);\n        todo.appendChild(label);\n        return todo;\n    },\n    ensureTodosArr(){\n        let todosArr = JSON.parse(window.localStorage.getItem(\"arr\"));\n        if (todosArr === null) {\n            window.localStorage.setItem(\"arr\", JSON.stringify([]));\n            todosArr = [];\n        }\n        return todosArr;\n    },\n    refresh(){\n        todosArr = this.ensureTodosArr();\n        const todos = document.getElementsByClassName(\"todos\")[0]\n        todosArr.forEach(el => {\n            todo = this.createListItem(el.name, el.done);\n            todos.appendChild(todo);\n        });\n        \n    }\n}\n\n\n\n\n\nmodule.exports = Todo;\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    const ele = document.createElement(\"p\");\n    ele.innerHTML = string;\n    if (htmlElement.children.length === 0) {\n        htmlElement.appendChild(ele);\n    } else {\n        const new_ele = document.createElement(\"p\");\n        new_ele.innerHTML = string;\n        htmlElement.replaceChild(new_ele, htmlElement.children[0]);\n    }\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });