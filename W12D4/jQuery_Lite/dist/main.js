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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(arrHtml){\n        this.arrHtml = arrHtml;\n        this.cb = \"something\"\n\n    };\n\n\n    html () {\n        if (arguments.length !== 0 ) {\n            debugger;\n            //Come back if there's an error later.\n            return this.arrHtml[0].innerHTML = Array.from(arguments)[0]\n        }else{\n            return this.arrHtml[0].innerHTML\n        };\n    }\n\n\n    empty () {\n        this.arrHtml.forEach(element => {\n            element.innerHTML = \"\";\n        });\n    };\n\n    append(el){\n        // const  newEl = \n        this.arrHtml.forEach(element => {\n            element.innerHTML += el\n        });\n    };\n\n    attr() {\n            if (arguments.length > 1 ) {\n                return this.arrHtml[0].setAttribute(...arguments)\n            } else {\n                return this.arrHtml[0].getAttribute(arguments[0])\n            }\n    }\n\n    addClass(arg) {\n        return this.arrHtml[0].setAttribute(\"class\", arg)\n    };\n\n    removeClass() {\n        return this.arrHtml[0].removeAttribute(\"class\")\n    };\n\n\n    children() {\n        let arr = [];\n        this.arrHtml.forEach(element => {\n           Array.from(element.childNodes).forEach(element2 => {\n               arr.push(element2);\n            });\n        });\n\n        return new DOMNodeCollection(arr)\n    }   \n\n    parent() {\n        let arr = [];\n        this.arrHtml.forEach(element => {\n            // debugger\n               arr.push(element.parentNode);\n        });\n\n        return new DOMNodeCollection(arr)\n    }    \n\n\n// function html()  {\n//     console.log(arguments)\n// };\n// a = html()\n\n    find(thing){\n        let arr = []\n        this.arrHtml.forEach(element => {\n            // debugger ;\n            let col = element.querySelectorAll(thing)\n            arr = arr.concat(Array.from(col));\n        })\n    \n        return new DOMNodeCollection(arr)\n    };\n\n\n\n        remove(){\n            this.arrHtml.forEach(element => {\n                let all = Array.from(element.childNodes)\n                all.forEach(e => {\n                    debugger;\n                    element.removeChild(e)\n                })\n            });\n        }\n\n\n\n        on(event, cb) {\n            this.arrHtml.forEach(element => {\n                element.addEventListener(event,cb); \n                // debugger\n                this.cb = cb\n            });\n        }\n\n        off(event) {\n            this.arrHtml.forEach(element => {\n                // debugger\n                element.removeEventListener(event, this.cb);\n            });\n        }\n\n\n\n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n    const $l = window.$l = function (arg) {    \n        if ( typeof arg  === \"string\" ){\n            return fetchDomNodes(arg)\n        };\n    }      \n});\n\n\nconst fetchDomNodes = (selectors) => {\n    const NodeList = document.querySelectorAll(selectors);\n    const arr = Array.from(NodeList);\n    return new DOMNodeCollection(arr);\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });