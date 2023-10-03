/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index/index.js":
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
/***/ (() => {

eval("// Javascript for index page\n\n// ====== VARIABLES ======\n\nconst messagesEndpoint = 'http://127.0.0.1:3000/messages';\n\n// ====== MAIN ======\n\naddEventListeners();\nupdateMessages();\n\n// ====== LISTENERS ======\n\nfunction addEventListeners() {\n  addNewPostListener();\n}\nfunction addNewPostListener() {\n  const newPostBtn = document.querySelector('.addBtn');\n  newPostBtn.addEventListener('click', () => {\n    window.location.href = '/new';\n  });\n}\n\n// ====== FUNCTIONS ======\n\nasync function updateMessages() {\n  // Get messages from server\n  const response = await fetch(messagesEndpoint);\n  const messages = await response.json();\n  const postsDiv = document.querySelector('.postsDiv');\n  messages.forEach((message, index) => {\n    const newPost = document.createElement('p');\n    newPost.classList.add('post');\n    const userSpan = document.createElement('span');\n    userSpan.innerText = message.user + ':';\n    userSpan.classList.add('user');\n    newPost.appendChild(userSpan);\n    const messageSpan = document.createElement('span');\n    messageSpan.innerText = message.message;\n    messageSpan.classList.add('message');\n    newPost.appendChild(messageSpan);\n    postsDiv.appendChild(newPost);\n  });\n}\n\n//# sourceURL=webpack://message-board/./src/index/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index/index.js"]();
/******/ 	
/******/ })()
;