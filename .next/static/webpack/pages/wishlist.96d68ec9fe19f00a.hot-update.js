"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/wishlist",{

/***/ "./pages/wishlist/index.js":
/*!*********************************!*\
  !*** ./pages/wishlist/index.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var _components_BookList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BookList */ \"./components/BookList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Wishlist(param) {\n    let { books, booksData, handleToggleBookmark } = param;\n    _s();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"wishlist-books\");\n    function handleFilter(newFilter) {\n        setFilter(newFilter);\n    }\n    const filteredBooks = books.filter((book)=>{\n        if (filter === \"wishlist-books\") {\n            return booksData.find((booksData)=>booksData.id === book.id && booksData.isBookmarked);\n        }\n    // else if (filter === \"already-read-books\") {\n    //   return booksInfo.find(\n    //     (booksData) => booksData.id === book.id && booksData.isAlreadyRead\n    //   );\n    // } else if (filter === \"currently-reading-books\") {\n    //   return booksInfo.find(\n    //     (booksData) => booksData.id === book.id && booksData.isCurrentlyReading\n    //   );\n    // }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Wishlist\"\n                }, void 0, false, {\n                    fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        \"aria-label\": \"shows list of books on your wishlist\",\n                        onClick: ()=>{\n                            handleFilter(\"wishlist-books\");\n                        },\n                        $isActive: filter === \"wishlist-books\" ? true : false,\n                        children: \"My wishlist\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    (filteredBooks === null || filteredBooks === void 0 ? void 0 : filteredBooks.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        books: filteredBooks,\n                        booksInfo: booksInfo,\n                        handleToggleBookmark: handleToggleBookmark,\n                        handleToggleAlreadyRead: handleToggleAlreadyRead,\n                        handleToggleCurrentlyReading: handleToggleCurrentlyReading,\n                        setAnimationActiveBookmark: setAnimationActiveBookmark,\n                        setAnimationActiveAlreadyRead: setAnimationActiveAlreadyRead\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"You have not added any books yet.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Wishlist, \"pYL2qDI4sMxQALUmxTalzoe9BTo=\");\n_c = Wishlist;\nvar _c;\n$RefreshReg$(_c, \"Wishlist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93aXNobGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSjtBQUNaO0FBRWxCLFNBQVNHLFNBQVMsS0FJaEM7UUFKZ0MsRUFDN0JDLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxvQkFBb0IsRUFDdkIsR0FKZ0M7O0lBSzdCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNyQyxTQUFTTyxhQUFhQyxTQUFTO1FBQzdCRixVQUFVRTtJQUNaO0lBRUEsTUFBTUMsZ0JBQWdCUCxNQUFNRyxNQUFNLENBQUMsQ0FBQ0s7UUFDaEMsSUFBSUwsV0FBVyxrQkFBa0I7WUFDL0IsT0FBT0YsVUFBVVEsSUFBSSxDQUNuQixDQUFDUixZQUFjQSxVQUFVUyxFQUFFLEtBQUtGLEtBQUtFLEVBQUUsSUFBSVQsVUFBVVUsWUFBWTtRQUVyRTtJQUNBLDhDQUE4QztJQUM5QywyQkFBMkI7SUFDM0IseUVBQXlFO0lBQ3pFLE9BQU87SUFDUCxxREFBcUQ7SUFDckQsMkJBQTJCO0lBQzNCLDhFQUE4RTtJQUM5RSxPQUFPO0lBQ1AsSUFBSTtJQUNOO0lBRUYscUJBQ0k7OzBCQUNBLDhEQUFDQzswQkFDRCw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUNHQyxNQUFLO3dCQUNMQyxjQUFXO3dCQUNYQyxTQUFTOzRCQUNQYixhQUFhO3dCQUNmO3dCQUNBYyxXQUFXaEIsV0FBVyxtQkFBbUIsT0FBTztrQ0FDakQ7Ozs7OztvQkFHRkksQ0FBQUEsMEJBQUFBLG9DQUFBQSxjQUFlYSxNQUFNLElBQUcsa0JBQ3ZCLDhEQUFDdkIsNERBQVFBO3dCQUNQRyxPQUFPTzt3QkFDUGMsV0FBV0E7d0JBQ1huQixzQkFBc0JBO3dCQUN0Qm9CLHlCQUF5QkE7d0JBQ3pCQyw4QkFBOEJBO3dCQUM5QkMsNEJBQTRCQTt3QkFDNUJDLCtCQUErQkE7Ozs7OzZDQUdqQyw4REFBQ0M7a0NBQUU7Ozs7Ozs7Ozs7OzswQkFHUCw4REFBQzlCLDhEQUFVQTs7Ozs7OztBQUdqQjtHQTVEd0JHO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvbmluYXdlYmVyL1Byb2pla3RlL2Jvb2stYXBwL3BhZ2VzL3dpc2hsaXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IEJvb2tMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvQm9va0xpc3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpc2hsaXN0KHtcbiAgICBib29rcyxcbiAgICBib29rc0RhdGEsXG4gICAgaGFuZGxlVG9nZ2xlQm9va21hcmtcbn0pIHtcbiAgICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoXCJ3aXNobGlzdC1ib29rc1wiKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVGaWx0ZXIobmV3RmlsdGVyKSB7XG4gICAgICBzZXRGaWx0ZXIobmV3RmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZEJvb2tzID0gYm9va3MuZmlsdGVyKChib29rKSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXIgPT09IFwid2lzaGxpc3QtYm9va3NcIikge1xuICAgICAgICAgIHJldHVybiBib29rc0RhdGEuZmluZChcbiAgICAgICAgICAgIChib29rc0RhdGEpID0+IGJvb2tzRGF0YS5pZCA9PT0gYm9vay5pZCAmJiBib29rc0RhdGEuaXNCb29rbWFya2VkXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gZWxzZSBpZiAoZmlsdGVyID09PSBcImFscmVhZHktcmVhZC1ib29rc1wiKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGJvb2tzSW5mby5maW5kKFxuICAgICAgICAvLyAgICAgKGJvb2tzRGF0YSkgPT4gYm9va3NEYXRhLmlkID09PSBib29rLmlkICYmIGJvb2tzRGF0YS5pc0FscmVhZHlSZWFkXG4gICAgICAgIC8vICAgKTtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChmaWx0ZXIgPT09IFwiY3VycmVudGx5LXJlYWRpbmctYm9va3NcIikge1xuICAgICAgICAvLyAgIHJldHVybiBib29rc0luZm8uZmluZChcbiAgICAgICAgLy8gICAgIChib29rc0RhdGEpID0+IGJvb2tzRGF0YS5pZCA9PT0gYm9vay5pZCAmJiBib29rc0RhdGEuaXNDdXJyZW50bHlSZWFkaW5nXG4gICAgICAgIC8vICAgKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxoMT5XaXNobGlzdDwvaDE+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93cyBsaXN0IG9mIGJvb2tzIG9uIHlvdXIgd2lzaGxpc3RcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXIoXCJ3aXNobGlzdC1ib29rc1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICAkaXNBY3RpdmU9e2ZpbHRlciA9PT0gXCJ3aXNobGlzdC1ib29rc1wiID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE15IHdpc2hsaXN0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7ZmlsdGVyZWRCb29rcz8ubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8Qm9va0xpc3RcbiAgICAgICAgICAgIGJvb2tzPXtmaWx0ZXJlZEJvb2tzfVxuICAgICAgICAgICAgYm9va3NJbmZvPXtib29rc0luZm99XG4gICAgICAgICAgICBoYW5kbGVUb2dnbGVCb29rbWFyaz17aGFuZGxlVG9nZ2xlQm9va21hcmt9XG4gICAgICAgICAgICBoYW5kbGVUb2dnbGVBbHJlYWR5UmVhZD17aGFuZGxlVG9nZ2xlQWxyZWFkeVJlYWR9XG4gICAgICAgICAgICBoYW5kbGVUb2dnbGVDdXJyZW50bHlSZWFkaW5nPXtoYW5kbGVUb2dnbGVDdXJyZW50bHlSZWFkaW5nfVxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uQWN0aXZlQm9va21hcms9e3NldEFuaW1hdGlvbkFjdGl2ZUJvb2ttYXJrfVxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uQWN0aXZlQWxyZWFkeVJlYWQ9e3NldEFuaW1hdGlvbkFjdGl2ZUFscmVhZHlSZWFkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+WW91IGhhdmUgbm90IGFkZGVkIGFueSBib29rcyB5ZXQuPC9wPlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgICAgPE5hdmlnYXRpb24+PC9OYXZpZ2F0aW9uPlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJCb29rTGlzdCIsInVzZVN0YXRlIiwiV2lzaGxpc3QiLCJib29rcyIsImJvb2tzRGF0YSIsImhhbmRsZVRvZ2dsZUJvb2ttYXJrIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiaGFuZGxlRmlsdGVyIiwibmV3RmlsdGVyIiwiZmlsdGVyZWRCb29rcyIsImJvb2siLCJmaW5kIiwiaWQiLCJpc0Jvb2ttYXJrZWQiLCJoZWFkZXIiLCJoMSIsIm1haW4iLCJidXR0b24iLCJ0eXBlIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siLCIkaXNBY3RpdmUiLCJsZW5ndGgiLCJib29rc0luZm8iLCJoYW5kbGVUb2dnbGVBbHJlYWR5UmVhZCIsImhhbmRsZVRvZ2dsZUN1cnJlbnRseVJlYWRpbmciLCJzZXRBbmltYXRpb25BY3RpdmVCb29rbWFyayIsInNldEFuaW1hdGlvbkFjdGl2ZUFscmVhZHlSZWFkIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/wishlist/index.js\n"));

/***/ })

});