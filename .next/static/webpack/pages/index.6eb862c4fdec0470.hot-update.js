"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BookList.js":
/*!********************************!*\
  !*** ./components/BookList.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst StyledList = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul.withConfig({\n    displayName: \"BookList__StyledList\",\n    componentId: \"sc-344b5d98-0\"\n})([\n    \"padding-inline-start:0;list-style:none;display:flex;justify-content:center;flex-wrap:wrap;gap:10px;\"\n]);\n_c = StyledList;\nfunction BookList(param) {\n    let { books } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledList, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n            href: \"/book-details/\".concat(id),\n            children: books === null || books === void 0 ? void 0 : books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        alt: book.title,\n                        height: 100,\n                        width: 70,\n                        src: book.cover,\n                        id: book.id,\n                        onClick: ()=>{\n                            router.push(\"/details/OL19096402W\");\n                        // router.push(`/details/${id}`);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/components/BookList.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, book.id, false, {\n                    fileName: \"/Users/ninaweber/Projekte/book-app/components/BookList.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/ninaweber/Projekte/book-app/components/BookList.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ninaweber/Projekte/book-app/components/BookList.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(BookList, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c1 = BookList;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledList\");\n$RefreshReg$(_c1, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUjtBQUNTO0FBRXhDLE1BQU1HLGFBQWFILDREQUFTOzs7Ozs7S0FBdEJHO0FBU1MsU0FBU0UsU0FBUyxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7O0lBQy9CLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVNLEVBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTNCLHFCQUNFLDhEQUFDTjtrQkFDQyw0RUFBQ087WUFBS0MsTUFBTSxpQkFBb0IsT0FBSEg7c0JBQzVCRixrQkFBQUEsNEJBQUFBLE1BQU9NLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWCw4REFBQ0M7OEJBQ0MsNEVBQUNiLG1EQUFLQTt3QkFDSmMsS0FBS0YsS0FBS0csS0FBSzt3QkFDZkMsUUFBUTt3QkFDUkMsT0FBTzt3QkFDUEMsS0FBS04sS0FBS08sS0FBSzt3QkFDZlosSUFBSUssS0FBS0wsRUFBRTt3QkFDWGEsU0FBUzs0QkFDUGQsT0FBT2UsSUFBSSxDQUFFO3dCQUNiLGlDQUFpQzt3QkFDbkM7Ozs7OzttQkFWS1QsS0FBS0wsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4QjtHQXpCd0JIOztRQUNQSCxrREFBU0E7OztNQURGRyIsInNvdXJjZXMiOlsiL1VzZXJzL25pbmF3ZWJlci9Qcm9qZWt0ZS9ib29rLWFwcC9jb21wb25lbnRzL0Jvb2tMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBTdHlsZWRMaXN0ID0gc3R5bGVkLnVsYFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va0xpc3QoeyBib29rcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkTGlzdD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvYm9vay1kZXRhaWxzLyR7aWR9YH0+XG4gICAgICB7Ym9va3M/Lm1hcCgoYm9vaykgPT4gKFxuICAgICAgICA8bGkga2V5PXtib29rLmlkfT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGFsdD17Ym9vay50aXRsZX1cbiAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgd2lkdGg9ezcwfVxuICAgICAgICAgICAgc3JjPXtib29rLmNvdmVyfVxuICAgICAgICAgICAgaWQ9e2Jvb2suaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvZGV0YWlscy9PTDE5MDk2NDAyV2ApO1xuICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaChgL2RldGFpbHMvJHtpZH1gKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgICAgPC9MaW5rPlxuICAgIDwvU3R5bGVkTGlzdD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJJbWFnZSIsInVzZVJvdXRlciIsIlN0eWxlZExpc3QiLCJ1bCIsIkJvb2tMaXN0IiwiYm9va3MiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiTGluayIsImhyZWYiLCJtYXAiLCJib29rIiwibGkiLCJhbHQiLCJ0aXRsZSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiY292ZXIiLCJvbkNsaWNrIiwicHVzaCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BookList.js\n"));

/***/ })

});