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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Wishlist() {\n    _s();\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"wishlist-books\");\n    function handleFilter(newFilter) {\n        setFilter(newFilter);\n    }\n    const filteredBooks = books.filter((book)=>{\n        if (filter === \"wishlist-books\") {\n            return booksInfo.find((bookInfo)=>bookInfo.id === book.id && bookInfo.isBookmarked);\n        }\n    // else if (filter === \"already-read-books\") {\n    //   return booksInfo.find(\n    //     (bookInfo) => bookInfo.id === book.id && bookInfo.isAlreadyRead\n    //   );\n    // } else if (filter === \"currently-reading-books\") {\n    //   return booksInfo.find(\n    //     (bookInfo) => bookInfo.id === book.id && bookInfo.isCurrentlyReading\n    //   );\n    // }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Wishlist\"\n                }, void 0, false, {\n                    fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledFilterButton, {\n                    type: \"button\",\n                    \"aria-label\": \"shows list of saved books\",\n                    onClick: ()=>{\n                        handleFilter(\"saved-books\");\n                    },\n                    $isActive: filter === \"saved-books\" ? true : false,\n                    children: \"Want to read\"\n                }, void 0, false, {\n                    fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/wishlist/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Wishlist, \"pYL2qDI4sMxQALUmxTalzoe9BTo=\");\n_c = Wishlist;\nvar _c;\n$RefreshReg$(_c, \"Wishlist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93aXNobGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpRDtBQUNoQjtBQUVsQixTQUFTRTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLFNBQVNJLGFBQWFDLFNBQVM7UUFDN0JGLFVBQVVFO0lBQ1o7SUFFQSxNQUFNQyxnQkFBZ0JDLE1BQU1MLE1BQU0sQ0FBQyxDQUFDTTtRQUNoQyxJQUFJTixXQUFXLGtCQUFrQjtZQUMvQixPQUFPTyxVQUFVQyxJQUFJLENBQ25CLENBQUNDLFdBQWFBLFNBQVNDLEVBQUUsS0FBS0osS0FBS0ksRUFBRSxJQUFJRCxTQUFTRSxZQUFZO1FBRWxFO0lBQ0EsOENBQThDO0lBQzlDLDJCQUEyQjtJQUMzQixzRUFBc0U7SUFDdEUsT0FBTztJQUNQLHFEQUFxRDtJQUNyRCwyQkFBMkI7SUFDM0IsMkVBQTJFO0lBQzNFLE9BQU87SUFDUCxJQUFJO0lBQ047SUFFRixxQkFDSTs7MEJBQ0EsOERBQUNDOzBCQUNELDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNDOzBCQUNDLDRFQUFDQztvQkFDR0MsTUFBSztvQkFDTEMsY0FBVztvQkFDWEMsU0FBUzt3QkFDUGhCLGFBQWE7b0JBQ2Y7b0JBQ0FpQixXQUFXbkIsV0FBVyxnQkFBZ0IsT0FBTzs4QkFDOUM7Ozs7Ozs7Ozs7OzBCQUlMLDhEQUFDSCw4REFBVUE7Ozs7Ozs7QUFHakI7R0EzQ3dCRTtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL25pbmF3ZWJlci9Qcm9qZWt0ZS9ib29rLWFwcC9wYWdlcy93aXNobGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpc2hsaXN0KCkge1xuICAgIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShcIndpc2hsaXN0LWJvb2tzXCIpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZUZpbHRlcihuZXdGaWx0ZXIpIHtcbiAgICAgIHNldEZpbHRlcihuZXdGaWx0ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkQm9va3MgPSBib29rcy5maWx0ZXIoKGJvb2spID0+IHtcbiAgICAgICAgaWYgKGZpbHRlciA9PT0gXCJ3aXNobGlzdC1ib29rc1wiKSB7XG4gICAgICAgICAgcmV0dXJuIGJvb2tzSW5mby5maW5kKFxuICAgICAgICAgICAgKGJvb2tJbmZvKSA9PiBib29rSW5mby5pZCA9PT0gYm9vay5pZCAmJiBib29rSW5mby5pc0Jvb2ttYXJrZWRcbiAgICAgICAgICApO1xuICAgICAgICB9IFxuICAgICAgICAvLyBlbHNlIGlmIChmaWx0ZXIgPT09IFwiYWxyZWFkeS1yZWFkLWJvb2tzXCIpIHtcbiAgICAgICAgLy8gICByZXR1cm4gYm9va3NJbmZvLmZpbmQoXG4gICAgICAgIC8vICAgICAoYm9va0luZm8pID0+IGJvb2tJbmZvLmlkID09PSBib29rLmlkICYmIGJvb2tJbmZvLmlzQWxyZWFkeVJlYWRcbiAgICAgICAgLy8gICApO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGZpbHRlciA9PT0gXCJjdXJyZW50bHktcmVhZGluZy1ib29rc1wiKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIGJvb2tzSW5mby5maW5kKFxuICAgICAgICAvLyAgICAgKGJvb2tJbmZvKSA9PiBib29rSW5mby5pZCA9PT0gYm9vay5pZCAmJiBib29rSW5mby5pc0N1cnJlbnRseVJlYWRpbmdcbiAgICAgICAgLy8gICApO1xuICAgICAgICAvLyB9XG4gICAgICB9KTtcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGgxPldpc2hsaXN0PC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxTdHlsZWRGaWx0ZXJCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3dzIGxpc3Qgb2Ygc2F2ZWQgYm9va3NcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXIoXCJzYXZlZC1ib29rc1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICAkaXNBY3RpdmU9e2ZpbHRlciA9PT0gXCJzYXZlZC1ib29rc1wiID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFdhbnQgdG8gcmVhZFxuICAgICAgICA8L1N0eWxlZEZpbHRlckJ1dHRvbj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxOYXZpZ2F0aW9uPjwvTmF2aWdhdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwidXNlU3RhdGUiLCJXaXNobGlzdCIsImZpbHRlciIsInNldEZpbHRlciIsImhhbmRsZUZpbHRlciIsIm5ld0ZpbHRlciIsImZpbHRlcmVkQm9va3MiLCJib29rcyIsImJvb2siLCJib29rc0luZm8iLCJmaW5kIiwiYm9va0luZm8iLCJpZCIsImlzQm9va21hcmtlZCIsImhlYWRlciIsImgxIiwibWFpbiIsIlN0eWxlZEZpbHRlckJ1dHRvbiIsInR5cGUiLCJhcmlhLWxhYmVsIiwib25DbGljayIsIiRpc0FjdGl2ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/wishlist/index.js\n"));

/***/ })

});