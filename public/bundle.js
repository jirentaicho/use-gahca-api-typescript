/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DataGet.ts":
/*!************************!*\
  !*** ./src/DataGet.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass DataGet {\r\n    static get() {\r\n        return fetch('http://localhost:8080/api/get', {\r\n            method: 'POST',\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify({\r\n                \"user_id\": 1,\r\n                \"type\": \"プレミアムガチャ\",\r\n            })\r\n        });\r\n    }\r\n    static add() {\r\n        return fetch('http://localhost:8080/api/addStone', {\r\n            method: 'POST',\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify({\r\n                \"user_id\": 1,\r\n                \"amt\": 3000,\r\n            })\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = DataGet;\r\n\n\n//# sourceURL=webpack://gyaralli/./src/DataGet.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst DataGet_1 = __importDefault(__webpack_require__(/*! ./DataGet */ \"./src/DataGet.ts\"));\r\nclass Main {\r\n    constructor() {\r\n        const start = this.makeDom('button');\r\n        start.textContent = \"ガチャを引く\";\r\n        //start.addEventListener('click',this.load);\r\n        start.onclick = () => {\r\n            this.load();\r\n        };\r\n        document.body.appendChild(start);\r\n        const add = this.makeDom('button');\r\n        add.textContent = \"石を3000獲得する\";\r\n        //start.addEventListener('click',this.load);\r\n        add.onclick = () => {\r\n            this.addStone();\r\n        };\r\n        document.body.appendChild(add);\r\n        this.outer = this.makeDom('div');\r\n        this.outer.setAttribute('id', 'outer');\r\n        document.body.appendChild(this.outer);\r\n    }\r\n    load() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            this.outer.innerHTML = \"\";\r\n            const response = yield DataGet_1.default.get();\r\n            const resJson = yield response.json();\r\n            // こんな感じ\r\n            // [{\"lank\":3,\"name\":\"白井黒子（おてんばメイド）\",\"url\":\"https://image.boom-app.wiki/wiki/5d15db1…/chara/l/117.jpg?w=600\"},]\r\n            // 不自然だがこのやり方がいい　この場合のitemは0,1,2\r\n            for (const item in resJson) {\r\n                if (resJson[item] == \"ガチャ石が足りません。\") {\r\n                    const parrent = this.makeDom('div');\r\n                    parrent.textContent = resJson[item];\r\n                    this.outer.appendChild(parrent);\r\n                    return;\r\n                }\r\n                this.setUpDom(resJson[item]);\r\n            }\r\n        });\r\n    }\r\n    addStone() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            yield DataGet_1.default.add();\r\n        });\r\n    }\r\n    /**\r\n     *\r\n     * Domを作成します\r\n     *\r\n     * @param tagName\r\n     * @returns\r\n     */\r\n    makeDom(tagName) {\r\n        return document.createElement(tagName);\r\n    }\r\n    setImageSrc(srcName, image) {\r\n        if (image instanceof HTMLImageElement) {\r\n            image.src = srcName;\r\n        }\r\n    }\r\n    // anyで受取る・・・\r\n    setUpDom(j) {\r\n        const parrent = this.makeDom('div');\r\n        const characterLank = this.makeDom('div');\r\n        const characterName = this.makeDom('div');\r\n        const characterImage = this.makeDom('img');\r\n        characterLank.textContent = \"ランク : \" + j.lank;\r\n        characterName.textContent = j.name;\r\n        this.setImageSrc(j.url, characterImage);\r\n        parrent.appendChild(characterLank);\r\n        parrent.appendChild(characterName);\r\n        parrent.appendChild(characterImage);\r\n        this.outer.appendChild(parrent);\r\n    }\r\n}\r\nwindow.onload = () => {\r\n    const main = new Main();\r\n};\r\n\n\n//# sourceURL=webpack://gyaralli/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;