"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var _lib_books_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/books.json */ \"./lib/books.json\");\n\n\n\n// import useLocalStorageState from \"use-local-storage-state\";\n// import { useState } from \"react\";\nconst initialBooksData = _lib_books_json__WEBPACK_IMPORTED_MODULE_2__.map((book)=>{\n    return {\n        id: book.id\n    };\n// return { id: book.id, isBookmarked: false, isAlreadyRead: false };\n});\nconsole.log(initialBooksData); // gibt book ids aus, funktioniert!\nfunction App(param) {\n    let { Component, pageProps } = param;\n    // const [booksData, setBooksData] = useLocalStorageState(\"books-data\", {\n    //   defaultValue: initialBooksData,\n    // });\n    // const [animationActiveBookmark, setAnimationActiveBookmark] = useState(false);\n    // const [animationActiveAlreadyRead, setAnimationActiveAlreadyRead] =\n    //   useState(false);\n    // function handleToggleBookmark(id) {\n    //   const currentBook = booksInfo.find((book) => book.id === id);\n    //   if (currentBook) {\n    //     setBooksInfo(\n    //       booksInfo.map((bookInfo) =>\n    //         bookInfo.id === id\n    //           ? { ...bookInfo, isBookmarked: !bookInfo.isBookmarked }\n    //           : bookInfo\n    //       )\n    //     );\n    //   } else {\n    //     setBooksInfo([...booksInfo, { id, isBookmarked: true }]);\n    //   }\n    // }\n    // function handleToggleAlreadyRead(id) {\n    //   const currentBook = booksInfo.find((book) => book.id === id);\n    //   if (currentBook) {\n    //     setBooksInfo(\n    //       booksInfo.map((bookInfo) =>\n    //         bookInfo.id === id\n    //           ? { ...bookInfo, isAlreadyRead: !bookInfo.isAlreadyRead }\n    //           : bookInfo\n    //       )\n    //     );\n    //   } else {\n    //     setBooksInfo([...booksInfo, { id, isAlreadyRead: true }]);\n    //   }\n    // }\n    // function handleToggleCurrentlyReading(id) {\n    //   const currentBook = booksInfo.find((book) => book.id === id);\n    //   if (currentBook) {\n    //     setBooksInfo(\n    //       booksInfo.map((bookInfo) =>\n    //         bookInfo.id === id\n    //           ? { ...bookInfo, isCurrentlyReading: !bookInfo.isCurrentlyReading }\n    //           : bookInfo\n    //       )\n    //     );\n    //   } else {\n    //     setBooksInfo([...booksInfo, { id, isCurrentlyReading: true }]);\n    //   }\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/_app.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                books: _lib_books_json__WEBPACK_IMPORTED_MODULE_2__\n            }, void 0, false, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/_app.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvQztBQUNFO0FBQ3RDLDhEQUE4RDtBQUM5RCxvQ0FBb0M7QUFFcEMsTUFBTUUsbUJBQW1CRCxnREFBUyxDQUFDLENBQUNHO0lBQ2xDLE9BQU87UUFBRUMsSUFBSUQsS0FBS0MsRUFBRTtJQUFDO0FBQ3JCLHFFQUFxRTtBQUN2RTtBQUVBQyxRQUFRQyxHQUFHLENBQUNMLG1CQUFtQixtQ0FBbUM7QUFFbkQsU0FBU00sSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4QjtJQUMxQix5RUFBeUU7SUFDekUsb0NBQW9DO0lBQ3BDLE1BQU07SUFFTixpRkFBaUY7SUFDakYsc0VBQXNFO0lBQ3RFLHFCQUFxQjtJQUVyQixzQ0FBc0M7SUFDdEMsa0VBQWtFO0lBQ2xFLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixvRUFBb0U7SUFDcEUsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdFQUFnRTtJQUNoRSxNQUFNO0lBQ04sSUFBSTtJQUVKLHlDQUF5QztJQUN6QyxrRUFBa0U7SUFDbEUsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLHNFQUFzRTtJQUN0RSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUVBQWlFO0lBQ2pFLE1BQU07SUFDTixJQUFJO0lBRUosOENBQThDO0lBQzlDLGtFQUFrRTtJQUNsRSx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsZ0ZBQWdGO0lBQ2hGLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixzRUFBc0U7SUFDdEUsTUFBTTtJQUNOLElBQUk7SUFFSixxQkFDRTs7MEJBQ0UsOERBQUNWLCtDQUFXQTs7Ozs7MEJBQ1osOERBQUNTO2dCQUFXLEdBQUdDLFNBQVM7Z0JBQUVULE9BQU9BLDRDQUFLQTs7Ozs7Ozs7QUFZNUM7S0FyRXdCTyIsInNvdXJjZXMiOlsiL1VzZXJzL25pbmF3ZWJlci9Qcm9qZWt0ZS9ib29rLWFwcC9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgYm9va3MgZnJvbSBcIi4uL2xpYi9ib29rcy5qc29uXCI7XG4vLyBpbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSBcInVzZS1sb2NhbC1zdG9yYWdlLXN0YXRlXCI7XG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBpbml0aWFsQm9va3NEYXRhID0gYm9va3MubWFwKChib29rKSA9PiB7XG4gIHJldHVybiB7IGlkOiBib29rLmlkIH07XG4gIC8vIHJldHVybiB7IGlkOiBib29rLmlkLCBpc0Jvb2ttYXJrZWQ6IGZhbHNlLCBpc0FscmVhZHlSZWFkOiBmYWxzZSB9O1xufSk7XG5cbmNvbnNvbGUubG9nKGluaXRpYWxCb29rc0RhdGEpOyAvLyBnaWJ0IGJvb2sgaWRzIGF1cywgZnVua3Rpb25pZXJ0IVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIC8vIGNvbnN0IFtib29rc0RhdGEsIHNldEJvb2tzRGF0YV0gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZShcImJvb2tzLWRhdGFcIiwge1xuICAvLyAgIGRlZmF1bHRWYWx1ZTogaW5pdGlhbEJvb2tzRGF0YSxcbiAgLy8gfSk7XG5cbiAgLy8gY29uc3QgW2FuaW1hdGlvbkFjdGl2ZUJvb2ttYXJrLCBzZXRBbmltYXRpb25BY3RpdmVCb29rbWFya10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFthbmltYXRpb25BY3RpdmVBbHJlYWR5UmVhZCwgc2V0QW5pbWF0aW9uQWN0aXZlQWxyZWFkeVJlYWRdID1cbiAgLy8gICB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQm9va21hcmsoaWQpIHtcbiAgLy8gICBjb25zdCBjdXJyZW50Qm9vayA9IGJvb2tzSW5mby5maW5kKChib29rKSA9PiBib29rLmlkID09PSBpZCk7XG4gIC8vICAgaWYgKGN1cnJlbnRCb29rKSB7XG4gIC8vICAgICBzZXRCb29rc0luZm8oXG4gIC8vICAgICAgIGJvb2tzSW5mby5tYXAoKGJvb2tJbmZvKSA9PlxuICAvLyAgICAgICAgIGJvb2tJbmZvLmlkID09PSBpZFxuICAvLyAgICAgICAgICAgPyB7IC4uLmJvb2tJbmZvLCBpc0Jvb2ttYXJrZWQ6ICFib29rSW5mby5pc0Jvb2ttYXJrZWQgfVxuICAvLyAgICAgICAgICAgOiBib29rSW5mb1xuICAvLyAgICAgICApXG4gIC8vICAgICApO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzZXRCb29rc0luZm8oWy4uLmJvb2tzSW5mbywgeyBpZCwgaXNCb29rbWFya2VkOiB0cnVlIH1dKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyBmdW5jdGlvbiBoYW5kbGVUb2dnbGVBbHJlYWR5UmVhZChpZCkge1xuICAvLyAgIGNvbnN0IGN1cnJlbnRCb29rID0gYm9va3NJbmZvLmZpbmQoKGJvb2spID0+IGJvb2suaWQgPT09IGlkKTtcbiAgLy8gICBpZiAoY3VycmVudEJvb2spIHtcbiAgLy8gICAgIHNldEJvb2tzSW5mbyhcbiAgLy8gICAgICAgYm9va3NJbmZvLm1hcCgoYm9va0luZm8pID0+XG4gIC8vICAgICAgICAgYm9va0luZm8uaWQgPT09IGlkXG4gIC8vICAgICAgICAgICA/IHsgLi4uYm9va0luZm8sIGlzQWxyZWFkeVJlYWQ6ICFib29rSW5mby5pc0FscmVhZHlSZWFkIH1cbiAgLy8gICAgICAgICAgIDogYm9va0luZm9cbiAgLy8gICAgICAgKVxuICAvLyAgICAgKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgc2V0Qm9va3NJbmZvKFsuLi5ib29rc0luZm8sIHsgaWQsIGlzQWxyZWFkeVJlYWQ6IHRydWUgfV0pO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUN1cnJlbnRseVJlYWRpbmcoaWQpIHtcbiAgLy8gICBjb25zdCBjdXJyZW50Qm9vayA9IGJvb2tzSW5mby5maW5kKChib29rKSA9PiBib29rLmlkID09PSBpZCk7XG4gIC8vICAgaWYgKGN1cnJlbnRCb29rKSB7XG4gIC8vICAgICBzZXRCb29rc0luZm8oXG4gIC8vICAgICAgIGJvb2tzSW5mby5tYXAoKGJvb2tJbmZvKSA9PlxuICAvLyAgICAgICAgIGJvb2tJbmZvLmlkID09PSBpZFxuICAvLyAgICAgICAgICAgPyB7IC4uLmJvb2tJbmZvLCBpc0N1cnJlbnRseVJlYWRpbmc6ICFib29rSW5mby5pc0N1cnJlbnRseVJlYWRpbmcgfVxuICAvLyAgICAgICAgICAgOiBib29rSW5mb1xuICAvLyAgICAgICApXG4gIC8vICAgICApO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzZXRCb29rc0luZm8oWy4uLmJvb2tzSW5mbywgeyBpZCwgaXNDdXJyZW50bHlSZWFkaW5nOiB0cnVlIH1dKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gYm9va3M9e2Jvb2tzfSBcbiAgICAgICAgLy8gYm9va3NEYXRhPXtib29rc0RhdGF9XG4gICAgICAgIC8vIGhhbmRsZVRvZ2dsZUJvb2ttYXJrPXtoYW5kbGVUb2dnbGVCb29rbWFya31cbiAgICAgICAgLy8gaGFuZGxlVG9nZ2xlQWxyZWFkeVJlYWQ9e2hhbmRsZVRvZ2dsZUFscmVhZHlSZWFkfVxuICAgICAgICAvLyBoYW5kbGVUb2dnbGVDdXJyZW50bHlSZWFkaW5nPXtoYW5kbGVUb2dnbGVDdXJyZW50bHlSZWFkaW5nfVxuICAgICAgICAvLyBhbmltYXRpb25BY3RpdmVBbHJlYWR5UmVhZD17YW5pbWF0aW9uQWN0aXZlQWxyZWFkeVJlYWR9XG4gICAgICAgIC8vIGFuaW1hdGlvbkFjdGl2ZUJvb2ttYXJrPXthbmltYXRpb25BY3RpdmVCb29rbWFya31cbiAgICAgICAgLy8gc2V0QW5pbWF0aW9uQWN0aXZlQWxyZWFkeVJlYWQ9e3NldEFuaW1hdGlvbkFjdGl2ZUFscmVhZHlSZWFkfVxuICAgICAgICAvLyBzZXRBbmltYXRpb25BY3RpdmVCb29rbWFyaz17c2V0QW5pbWF0aW9uQWN0aXZlQm9va21hcmt9XG4gICAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJib29rcyIsImluaXRpYWxCb29rc0RhdGEiLCJtYXAiLCJib29rIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});