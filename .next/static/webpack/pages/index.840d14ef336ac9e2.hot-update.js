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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BookList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BookList */ \"./components/BookList.js\");\n/* harmony import */ var _components_Searchbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Searchbar */ \"./components/Searchbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction HomePage(param) {\n    let { books } = param;\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(\"SEARCHTERM\", searchTerm);\n    // Filtere die Bücher basierend auf dem Suchbegriff\n    const filteredBooks = books.filter((book)=>book.author.toLowerCase().includes(searchTerm.toLowerCase()) // filtert Buch mit entsprechendem Titel\n    );\n    // function handleSearch(event) {\n    //   const { value } = event.target;\n    //   setSearchTerm(value);\n    // }\n    // const [filterModal, setFilterModal] = useState(false);\n    // function handleToggleFilterModal() {\n    //   setFilterModal(!filterModal);\n    // }\n    // function handleSearchClick() {\n    //   const searchedBooks = books.filter((book) => book.includes(searchTerm));\n    //   return searchedBooks\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Book Hunting\"\n                }, void 0, false, {\n                    fileName: \"/Users/ninaweber/Projekte/book-app/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Searching for: \",\n                            searchTerm\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Searchbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        searchTerm: searchTerm,\n                        onChange: (event)=>{\n                            console.log(\"Input value:\", event.target.value); // Überprüfe den Wert\n                            setSearchTerm(event.target.value.toLowerCase());\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        books: filteredBooks\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(HomePage, \"+YdqPTpSlp4r5CWiFEQiF/UjThM=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDWTtBQUNFO0FBRWhDLFNBQVNHLFNBQVMsS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUMvQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0NPLFFBQVFDLEdBQUcsQ0FBQyxjQUFjSDtJQUcxQixtREFBbUQ7SUFDbkQsTUFBTUksZ0JBQWdCTCxNQUFNTSxNQUFNLENBQUMsQ0FBQ0MsT0FDbENBLEtBQUtDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNULFdBQVdRLFdBQVcsSUFBSSx3Q0FBd0M7O0lBR3ZHLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLElBQUk7SUFFSix5REFBeUQ7SUFFekQsdUNBQXVDO0lBQ3ZDLGtDQUFrQztJQUNsQyxJQUFJO0lBRUosaUNBQWlDO0lBQ2pDLDZFQUE2RTtJQUM3RSx5QkFBeUI7SUFDekIsSUFBSTtJQUVKLHFCQUNFOzswQkFDRSw4REFBQ0U7MEJBQ0MsNEVBQUNDOzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ0M7O2tDQUNDLDhEQUFDQzs7NEJBQUU7NEJBQWdCYjs7Ozs7OztvQkFBZTtrQ0FDbEMsOERBQUNILDZEQUFTQTt3QkFDUkcsWUFBWUE7d0JBQ1pjLFVBQVUsQ0FBQ0M7NEJBQ1RiLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JZLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLHFCQUFxQjs0QkFDdEVoQixjQUFjYyxNQUFNQyxNQUFNLENBQUNDLEtBQUssQ0FBQ1QsV0FBVzt3QkFBRzs7Ozs7O2tDQVNuRCw4REFBQ1osNERBQVFBO3dCQUFDRyxPQUFPSzs7Ozs7Ozs7Ozs7Ozs7QUFJekI7R0FsRHdCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm9va0xpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9Cb29rTGlzdFwiO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiQC9jb21wb25lbnRzL1NlYXJjaGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IGJvb2tzIH0pIHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnNvbGUubG9nKFwiU0VBUkNIVEVSTVwiLCBzZWFyY2hUZXJtKTtcblxuXG4gIC8vIEZpbHRlcmUgZGllIELDvGNoZXIgYmFzaWVyZW5kIGF1ZiBkZW0gU3VjaGJlZ3JpZmZcbiAgY29uc3QgZmlsdGVyZWRCb29rcyA9IGJvb2tzLmZpbHRlcigoYm9vaykgPT5cbiAgICBib29rLmF1dGhvci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgLy8gZmlsdGVydCBCdWNoIG1pdCBlbnRzcHJlY2hlbmRlbSBUaXRlbFxuICApO1xuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChldmVudCkge1xuICAvLyAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgLy8gICBzZXRTZWFyY2hUZXJtKHZhbHVlKTtcbiAgLy8gfVxuXG4gIC8vIGNvbnN0IFtmaWx0ZXJNb2RhbCwgc2V0RmlsdGVyTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUZpbHRlck1vZGFsKCkge1xuICAvLyAgIHNldEZpbHRlck1vZGFsKCFmaWx0ZXJNb2RhbCk7XG4gIC8vIH1cblxuICAvLyBmdW5jdGlvbiBoYW5kbGVTZWFyY2hDbGljaygpIHtcbiAgLy8gICBjb25zdCBzZWFyY2hlZEJvb2tzID0gYm9va3MuZmlsdGVyKChib29rKSA9PiBib29rLmluY2x1ZGVzKHNlYXJjaFRlcm0pKTtcbiAgLy8gICByZXR1cm4gc2VhcmNoZWRCb29rc1xuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGgxPkJvb2sgSHVudGluZzwvaDE+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8cD5TZWFyY2hpbmcgZm9yOiB7c2VhcmNoVGVybX08L3A+IHsvKiBaZWlndCBkZW4gU3VjaHN0YXR1cyAqL31cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnB1dCB2YWx1ZTpcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTsgLy8gw5xiZXJwcsO8ZmUgZGVuIFdlcnRcbiAgICAgICAgICAgIHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpfX0gLy8gQWt0dWFsaXNpZXJlIFp1c3RhbmRcblxuICAgICAgICAgIC8vIHNldFNlYXJjaFRlcm09e3NldFNlYXJjaFRlcm19XG4gICAgICAgICAgLy8gaGFuZGxlU2VhcmNoQ2xpY2s9eygpID0+IGhhbmRsZVNlYXJjaENsaWNrKCl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZUZpbHRlck1vZGFsfT5cbiAgICAgICAgICBFbnRlclxuICAgICAgICA8L2J1dHRvbj4gKi99XG4gICAgICAgIDxCb29rTGlzdCBib29rcz17ZmlsdGVyZWRCb29rc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb29rTGlzdCIsIlNlYXJjaEJhciIsIkhvbWVQYWdlIiwiYm9va3MiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJlZEJvb2tzIiwiZmlsdGVyIiwiYm9vayIsImF1dGhvciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJoZWFkZXIiLCJoMSIsIm1haW4iLCJwIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});