"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/details/[id]",{

/***/ "./pages/details/[id].js":
/*!*******************************!*\
  !*** ./pages/details/[id].js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookDetailsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst StyledBookmarkButton = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n    displayName: \"[id]__StyledBookmarkButton\",\n    componentId: \"sc-aa48a1e1-0\"\n})([\n    \"background-color:\",\n    \";border-radius:var(--border-radius);border:none;padding:0.4rem;\"\n], (param)=>{\n    let { $isBookmarked } = param;\n    return $isBookmarked ? \"var(--pink-color)\" : \"var(--lightgrey-color)\";\n});\n_c = StyledBookmarkButton;\nfunction BookDetailsPage(param) {\n    let { books, booksData, handleToggleBookmark, handleToggleAlreadyRead } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id } = router.query;\n    const pathName = router.pathname;\n    const currentBook = books.find((book)=>book.id === id);\n    const currentBookData = booksData === null || booksData === void 0 ? void 0 : booksData.find((bookData)=>bookData.id === id);\n    if (!router.isReady) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n            lineNumber: 22,\n            columnNumber: 10\n        }, this);\n    }\n    if (!id) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(\"BOOKS: \", books);\n    console.log(\"ROUTER QUERY ID: \", id); // aktuell nur first book id, da hart gecoded in Booklist componente\n    if (!currentBook) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No books found.\"\n        }, void 0, false, {\n            fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Book details\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        alt: currentBook.title,\n                        height: 100,\n                        width: 70,\n                        src: currentBook.cover,\n                        id: currentBook.id\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBookmarkButton, {\n                        type: \"button\",\n                        onClick: ()=>handleToggleBookmark(id),\n                        $isBookmarked: currentBookData === null || currentBookData === void 0 ? void 0 : currentBookData.isBookmarked,\n                        booksData: booksData,\n                        \"aria-label\": (currentBookData === null || currentBookData === void 0 ? void 0 : currentBookData.isBookmarked) ? \"remove from your wishlist\" : \"add to your wishlist\",\n                        children: \"Set book on wishlist\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBookmarkButton, {\n                        type: \"button\",\n                        onClick: ()=>handleToggleAlreadyRead(id),\n                        $isBookmarked: currentBookData === null || currentBookData === void 0 ? void 0 : currentBookData.isBookmarked,\n                        booksData: booksData,\n                        \"aria-label\": (currentBookData === null || currentBookData === void 0 ? void 0 : currentBookData.isBookmarked) ? \"remove from your already read list\" : \"add to your already read list\",\n                        children: \"Book already read\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: currentBook.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: currentBook.author\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: currentBook.publishYear\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: currentBook.pages\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: currentBook.genre\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: currentBook.description\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(BookDetailsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c1 = BookDetailsPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledBookmarkButton\");\n$RefreshReg$(_c1, \"BookDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWxzL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1g7QUFDRTtBQUNRO0FBRXZDLE1BQU1JLHVCQUF1QkQsZ0VBQWE7Ozs7OztHQUNwQjtRQUFDLEVBQUVHLGFBQWEsRUFBRTtXQUNwQ0EsZ0JBQWdCLHNCQUFzQjs7S0FGcENGO0FBUVMsU0FBU0csZ0JBQWdCLEtBQWlFO1FBQWpFLEVBQUNDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxvQkFBb0IsRUFBRUMsdUJBQXVCLEVBQUMsR0FBakU7O0lBQ3hDLE1BQU1DLFNBQVNaLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVhLEVBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzNCLE1BQU1DLFdBQVdILE9BQU9JLFFBQVE7SUFDaEMsTUFBTUMsY0FBY1QsTUFBTVUsSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtOLEVBQUUsS0FBS0E7SUFDckQsTUFBTU8sa0JBQWtCWCxzQkFBQUEsZ0NBQUFBLFVBQVdTLElBQUksQ0FBQyxDQUFDRyxXQUFhQSxTQUFTUixFQUFFLEtBQUtBO0lBRXRFLElBQUksQ0FBQ0QsT0FBT1UsT0FBTyxFQUFFO1FBQ25CLHFCQUFPLDhEQUFDQztzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxJQUFJLENBQUNWLElBQUk7UUFDTCxxQkFBTyw4REFBQ1U7c0JBQUU7Ozs7OztJQUNaO0lBRUZDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXakI7SUFDdkJnQixRQUFRQyxHQUFHLENBQUMscUJBQXFCWixLQUFLLG9FQUFvRTtJQUV4RyxJQUFJLENBQUNJLGFBQWE7UUFDaEIscUJBQU8sOERBQUNNO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0c7O2tDQUNDLDhEQUFDekIsa0RBQUlBO3dCQUFDMEIsTUFBTztrQ0FBSTs7Ozs7O2tDQUNqQiw4REFBQ0M7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFFTiw4REFBQ0M7O2tDQUNDLDhEQUFDM0IsbURBQUtBO3dCQUNGNEIsS0FBS2IsWUFBWWMsS0FBSzt3QkFDdEJDLFFBQVE7d0JBQ1JDLE9BQU87d0JBQ1BDLEtBQUtqQixZQUFZa0IsS0FBSzt3QkFDdEJ0QixJQUFJSSxZQUFZSixFQUFFOzs7Ozs7a0NBQ3RCLDhEQUFDVDt3QkFDR2dDLE1BQUs7d0JBQ0xDLFNBQVMsSUFBTTNCLHFCQUFxQkc7d0JBQ3BDUCxhQUFhLEVBQUVjLDRCQUFBQSxzQ0FBQUEsZ0JBQWlCa0IsWUFBWTt3QkFDNUM3QixXQUFXQTt3QkFDWDhCLGNBQVluQixDQUFBQSw0QkFBQUEsc0NBQUFBLGdCQUFpQmtCLFlBQVksSUFBRyw4QkFBOEI7a0NBQ3pFOzs7Ozs7a0NBR0QsOERBQUNsQzt3QkFDRGdDLE1BQUs7d0JBQ0xDLFNBQVMsSUFBTTFCLHdCQUF3QkU7d0JBQ3ZDUCxhQUFhLEVBQUVjLDRCQUFBQSxzQ0FBQUEsZ0JBQWlCa0IsWUFBWTt3QkFDNUM3QixXQUFXQTt3QkFDWDhCLGNBQVluQixDQUFBQSw0QkFBQUEsc0NBQUFBLGdCQUFpQmtCLFlBQVksSUFBRyx1Q0FBdUM7a0NBQ2xGOzs7Ozs7a0NBR0wsOERBQUNFO2tDQUFJdkIsWUFBWWMsS0FBSzs7Ozs7O2tDQUN0Qiw4REFBQ1I7a0NBQUdOLFlBQVl3QixNQUFNOzs7Ozs7a0NBQ3RCLDhEQUFDbEI7a0NBQUdOLFlBQVl5QixXQUFXOzs7Ozs7a0NBQzNCLDhEQUFDbkI7a0NBQUdOLFlBQVkwQixLQUFLOzs7Ozs7a0NBQ3JCLDhEQUFDcEI7a0NBQUdOLFlBQVkyQixLQUFLOzs7Ozs7a0NBQ3JCLDhEQUFDckI7a0NBQUdOLFlBQVk0QixXQUFXOzs7Ozs7Ozs7Ozs7OztBQUluQztHQTlEd0J0Qzs7UUFDVFAsa0RBQVNBOzs7TUFEQU8iLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaW5hd2ViZXIvUHJvamVrdGUvYm9vay1hcHAvcGFnZXMvZGV0YWlscy9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBTdHlsZWRCb29rbWFya0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgJGlzQm9va21hcmtlZCB9KSA9PlxuICAgICRpc0Jvb2ttYXJrZWQgPyBcInZhcigtLXBpbmstY29sb3IpXCIgOiBcInZhcigtLWxpZ2h0Z3JleS1jb2xvcilcIn07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tEZXRhaWxzUGFnZSh7Ym9va3MsIGJvb2tzRGF0YSwgaGFuZGxlVG9nZ2xlQm9va21hcmssIGhhbmRsZVRvZ2dsZUFscmVhZHlSZWFkfSkge1xuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5jb25zdCBwYXRoTmFtZSA9IHJvdXRlci5wYXRobmFtZTtcbmNvbnN0IGN1cnJlbnRCb29rID0gYm9va3MuZmluZCgoYm9vaykgPT4gYm9vay5pZCA9PT0gaWQpO1xuY29uc3QgY3VycmVudEJvb2tEYXRhID0gYm9va3NEYXRhPy5maW5kKChib29rRGF0YSkgPT4gYm9va0RhdGEuaWQgPT09IGlkKTtcblxuaWYgKCFyb3V0ZXIuaXNSZWFkeSkge1xuICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG59XG5cbmlmICghaWQpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cbiBcbmNvbnNvbGUubG9nKFwiQk9PS1M6IFwiLCBib29rcyk7XG5jb25zb2xlLmxvZyhcIlJPVVRFUiBRVUVSWSBJRDogXCIsIGlkKTsgLy8gYWt0dWVsbCBudXIgZmlyc3QgYm9vayBpZCwgZGEgaGFydCBnZWNvZGVkIGluIEJvb2tsaXN0IGNvbXBvbmVudGVcblxuICBpZiAoIWN1cnJlbnRCb29rKSB7XG4gICAgcmV0dXJuIDxwPk5vIGJvb2tzIGZvdW5kLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8TGluayBocmVmPXtgL2B9PkJhY2s8L0xpbms+XG4gICAgICAgIDxoMT5Cb29rIGRldGFpbHM8L2gxPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBhbHQ9e2N1cnJlbnRCb29rLnRpdGxlfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICB3aWR0aD17NzB9XG4gICAgICAgICAgICBzcmM9e2N1cnJlbnRCb29rLmNvdmVyfVxuICAgICAgICAgICAgaWQ9e2N1cnJlbnRCb29rLmlkfS8+XG4gICAgICAgIDxTdHlsZWRCb29rbWFya0J1dHRvbiBcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlQm9va21hcmsoaWQpfVxuICAgICAgICAgICAgJGlzQm9va21hcmtlZD17Y3VycmVudEJvb2tEYXRhPy5pc0Jvb2ttYXJrZWR9XG4gICAgICAgICAgICBib29rc0RhdGE9e2Jvb2tzRGF0YX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2N1cnJlbnRCb29rRGF0YT8uaXNCb29rbWFya2VkID8gXCJyZW1vdmUgZnJvbSB5b3VyIHdpc2hsaXN0XCIgOiBcImFkZCB0byB5b3VyIHdpc2hsaXN0XCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNldCBib29rIG9uIHdpc2hsaXN0XG4gICAgICAgICAgICA8L1N0eWxlZEJvb2ttYXJrQnV0dG9uPlxuICAgICAgICAgICAgPFN0eWxlZEJvb2ttYXJrQnV0dG9uIFxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGVBbHJlYWR5UmVhZChpZCl9XG4gICAgICAgICAgICAkaXNCb29rbWFya2VkPXtjdXJyZW50Qm9va0RhdGE/LmlzQm9va21hcmtlZH1cbiAgICAgICAgICAgIGJvb2tzRGF0YT17Ym9va3NEYXRhfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17Y3VycmVudEJvb2tEYXRhPy5pc0Jvb2ttYXJrZWQgPyBcInJlbW92ZSBmcm9tIHlvdXIgYWxyZWFkeSByZWFkIGxpc3RcIiA6IFwiYWRkIHRvIHlvdXIgYWxyZWFkeSByZWFkIGxpc3RcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQm9vayBhbHJlYWR5IHJlYWRcbiAgICAgICAgICAgIDwvU3R5bGVkQm9va21hcmtCdXR0b24+IFxuICAgICAgICA8aDM+e2N1cnJlbnRCb29rLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwPntjdXJyZW50Qm9vay5hdXRob3J9PC9wPlxuICAgICAgICA8cD57Y3VycmVudEJvb2sucHVibGlzaFllYXJ9PC9wPlxuICAgICAgICA8cD57Y3VycmVudEJvb2sucGFnZXN9PC9wPlxuICAgICAgICA8cD57Y3VycmVudEJvb2suZ2VucmV9PC9wPlxuICAgICAgICA8cD57Y3VycmVudEJvb2suZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkxpbmsiLCJJbWFnZSIsInN0eWxlZCIsIlN0eWxlZEJvb2ttYXJrQnV0dG9uIiwiYnV0dG9uIiwiJGlzQm9va21hcmtlZCIsIkJvb2tEZXRhaWxzUGFnZSIsImJvb2tzIiwiYm9va3NEYXRhIiwiaGFuZGxlVG9nZ2xlQm9va21hcmsiLCJoYW5kbGVUb2dnbGVBbHJlYWR5UmVhZCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJwYXRoTmFtZSIsInBhdGhuYW1lIiwiY3VycmVudEJvb2siLCJmaW5kIiwiYm9vayIsImN1cnJlbnRCb29rRGF0YSIsImJvb2tEYXRhIiwiaXNSZWFkeSIsInAiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwiaHJlZiIsImgxIiwibWFpbiIsImFsdCIsInRpdGxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJjb3ZlciIsInR5cGUiLCJvbkNsaWNrIiwiaXNCb29rbWFya2VkIiwiYXJpYS1sYWJlbCIsImgzIiwiYXV0aG9yIiwicHVibGlzaFllYXIiLCJwYWdlcyIsImdlbnJlIiwiZGVzY3JpcHRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/details/[id].js\n"));

/***/ })

});