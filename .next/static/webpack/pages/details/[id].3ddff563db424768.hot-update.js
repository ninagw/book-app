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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookDetailsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst StyledBookmarkButton = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n    displayName: \"[id]__StyledBookmarkButton\",\n    componentId: \"sc-ac2cac24-0\"\n})([\n    \"background-color:\",\n    \";border-radius:var(--border-radius);border:none;padding:0.4rem;\"\n], (param)=>{\n    let { $isBookmarked } = param;\n    return $isBookmarked ? \"var(--pink-color)\" : \"var(--lightgrey-color)\";\n});\n_c = StyledBookmarkButton;\nfunction BookDetailsPage(param) {\n    let { books, booksData, handleToggleBookmark } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id } = router.query;\n    const pathName = router.pathname;\n    const currentBook = books.find((book)=>book.id === id);\n    const currentBookData = booksData === null || booksData === void 0 ? void 0 : booksData.find((bookData)=>bookData.id === id);\n    if (!router.isReady) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n            lineNumber: 22,\n            columnNumber: 10\n        }, this);\n    }\n    if (!id) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(\"BOOKS: \", books);\n    console.log(\"ROUTER QUERY ID: \", id); // ERROR: only first book id\n    if (!currentBook) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No books found.\"\n        }, void 0, false, {\n            fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Book details\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        alt: currentBook.title,\n                        height: 100,\n                        width: 70,\n                        src: currentBook.cover,\n                        id: currentBook.id\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBookmarkButton, {\n                        type: \"button\",\n                        onClick: ()=>handleToggleBookmark(id),\n                        $isBookmarked: currentBookData === null || currentBookData === void 0 ? void 0 : currentBookData.isBookmarked,\n                        booksData: booksData,\n                        children: \"Set book on wishlist\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: currentBook.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: currentBook.author\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: currentBook.publishYear\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: currentBook.pages\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: currentBook.genre\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: currentBook.description\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ninaweber/Projekte/book-app/pages/details/[id].js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(BookDetailsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c1 = BookDetailsPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledBookmarkButton\");\n$RefreshReg$(_c1, \"BookDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWxzL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1g7QUFDRTtBQUNRO0FBRXZDLE1BQU1JLHVCQUF1QkQsZ0VBQWE7Ozs7OztHQUNwQjtRQUFDLEVBQUVHLGFBQWEsRUFBRTtXQUNwQ0EsZ0JBQWdCLHNCQUFzQjs7S0FGcENGO0FBUVMsU0FBU0csZ0JBQWdCLEtBQXdDO1FBQXhDLEVBQUNDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxvQkFBb0IsRUFBQyxHQUF4Qzs7SUFDeEMsTUFBTUMsU0FBU1gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVksRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsTUFBTUMsV0FBV0gsT0FBT0ksUUFBUTtJQUNoQyxNQUFNQyxjQUFjUixNQUFNUyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS04sRUFBRSxLQUFLQTtJQUNyRCxNQUFNTyxrQkFBa0JWLHNCQUFBQSxnQ0FBQUEsVUFBV1EsSUFBSSxDQUFDLENBQUNHLFdBQWFBLFNBQVNSLEVBQUUsS0FBS0E7SUFFdEUsSUFBSSxDQUFDRCxPQUFPVSxPQUFPLEVBQUU7UUFDbkIscUJBQU8sOERBQUNDO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLElBQUksQ0FBQ1YsSUFBSTtRQUNMLHFCQUFPLDhEQUFDVTtzQkFBRTs7Ozs7O0lBQ1o7SUFFRkMsUUFBUUMsR0FBRyxDQUFDLFdBQVdoQjtJQUN2QmUsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQlosS0FBSyw0QkFBNEI7SUFFaEUsSUFBSSxDQUFDSSxhQUFhO1FBQ2hCLHFCQUFPLDhEQUFDTTtzQkFBRTs7Ozs7O0lBQ1o7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNHOztrQ0FDQyw4REFBQ3hCLGtEQUFJQTt3QkFBQ3lCLE1BQU87a0NBQUk7Ozs7OztrQ0FDakIsOERBQUNDO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNDOztrQ0FDQyw4REFBQzFCLG1EQUFLQTt3QkFDRjJCLEtBQUtiLFlBQVljLEtBQUs7d0JBQ3RCQyxRQUFRO3dCQUNSQyxPQUFPO3dCQUNQQyxLQUFLakIsWUFBWWtCLEtBQUs7d0JBQ3RCdEIsSUFBSUksWUFBWUosRUFBRTs7Ozs7O2tDQUN0Qiw4REFBQ1I7d0JBQ0crQixNQUFLO3dCQUNMQyxTQUFTLElBQU0xQixxQkFBcUJFO3dCQUNwQ04sYUFBYSxFQUFFYSw0QkFBQUEsc0NBQUFBLGdCQUFpQmtCLFlBQVk7d0JBQzVDNUIsV0FBV0E7a0NBRVY7Ozs7OztrQ0FHTCw4REFBQzZCO2tDQUFJdEIsWUFBWWMsS0FBSzs7Ozs7O2tDQUN0Qiw4REFBQ1I7a0NBQUdOLFlBQVl1QixNQUFNOzs7Ozs7a0NBQ3RCLDhEQUFDakI7a0NBQUdOLFlBQVl3QixXQUFXOzs7Ozs7a0NBQzNCLDhEQUFDbEI7a0NBQUdOLFlBQVl5QixLQUFLOzs7Ozs7a0NBQ3JCLDhEQUFDbkI7a0NBQUdOLFlBQVkwQixLQUFLOzs7Ozs7a0NBQ3JCLDhEQUFDcEI7a0NBQUdOLFlBQVkyQixXQUFXOzs7Ozs7Ozs7Ozs7OztBQUluQztHQXJEd0JwQzs7UUFDVFAsa0RBQVNBOzs7TUFEQU8iLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaW5hd2ViZXIvUHJvamVrdGUvYm9vay1hcHAvcGFnZXMvZGV0YWlscy9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBTdHlsZWRCb29rbWFya0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgJGlzQm9va21hcmtlZCB9KSA9PlxuICAgICRpc0Jvb2ttYXJrZWQgPyBcInZhcigtLXBpbmstY29sb3IpXCIgOiBcInZhcigtLWxpZ2h0Z3JleS1jb2xvcilcIn07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tEZXRhaWxzUGFnZSh7Ym9va3MsIGJvb2tzRGF0YSwgaGFuZGxlVG9nZ2xlQm9va21hcmt9KSB7XG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbmNvbnN0IHBhdGhOYW1lID0gcm91dGVyLnBhdGhuYW1lO1xuY29uc3QgY3VycmVudEJvb2sgPSBib29rcy5maW5kKChib29rKSA9PiBib29rLmlkID09PSBpZCk7XG5jb25zdCBjdXJyZW50Qm9va0RhdGEgPSBib29rc0RhdGE/LmZpbmQoKGJvb2tEYXRhKSA9PiBib29rRGF0YS5pZCA9PT0gaWQpO1xuXG5pZiAoIXJvdXRlci5pc1JlYWR5KSB7XG4gIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbn1cblxuaWYgKCFpZCkge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuIFxuY29uc29sZS5sb2coXCJCT09LUzogXCIsIGJvb2tzKTtcbmNvbnNvbGUubG9nKFwiUk9VVEVSIFFVRVJZIElEOiBcIiwgaWQpOyAvLyBFUlJPUjogb25seSBmaXJzdCBib29rIGlkXG5cbiAgaWYgKCFjdXJyZW50Qm9vaykge1xuICAgIHJldHVybiA8cD5ObyBib29rcyBmb3VuZC48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPExpbmsgaHJlZj17YC9gfT5CYWNrPC9MaW5rPlxuICAgICAgICA8aDE+Qm9vayBkZXRhaWxzPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgYWx0PXtjdXJyZW50Qm9vay50aXRsZX1cbiAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgd2lkdGg9ezcwfVxuICAgICAgICAgICAgc3JjPXtjdXJyZW50Qm9vay5jb3Zlcn1cbiAgICAgICAgICAgIGlkPXtjdXJyZW50Qm9vay5pZH0vPlxuICAgICAgICA8U3R5bGVkQm9va21hcmtCdXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZ2dsZUJvb2ttYXJrKGlkKX1cbiAgICAgICAgICAgICRpc0Jvb2ttYXJrZWQ9e2N1cnJlbnRCb29rRGF0YT8uaXNCb29rbWFya2VkfVxuICAgICAgICAgICAgYm9va3NEYXRhPXtib29rc0RhdGF9XG4gICAgICAgICAgICAvLyBhcmlhLWxhYmVsPXtpc0Jvb2ttYXJrZWQgPyBcInJlbW92ZSBmcm9tIG15LXdpc2hsaXN0XCIgOiBcImFkZCB0byBteS13aXNobGlzdFwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZXQgYm9vayBvbiB3aXNobGlzdFxuICAgICAgICAgICAgPC9TdHlsZWRCb29rbWFya0J1dHRvbj5cbiAgICAgICAgPGgzPntjdXJyZW50Qm9vay50aXRsZX08L2gzPlxuICAgICAgICA8cD57Y3VycmVudEJvb2suYXV0aG9yfTwvcD5cbiAgICAgICAgPHA+e2N1cnJlbnRCb29rLnB1Ymxpc2hZZWFyfTwvcD5cbiAgICAgICAgPHA+e2N1cnJlbnRCb29rLnBhZ2VzfTwvcD5cbiAgICAgICAgPHA+e2N1cnJlbnRCb29rLmdlbnJlfTwvcD5cbiAgICAgICAgPHA+e2N1cnJlbnRCb29rLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJMaW5rIiwiSW1hZ2UiLCJzdHlsZWQiLCJTdHlsZWRCb29rbWFya0J1dHRvbiIsImJ1dHRvbiIsIiRpc0Jvb2ttYXJrZWQiLCJCb29rRGV0YWlsc1BhZ2UiLCJib29rcyIsImJvb2tzRGF0YSIsImhhbmRsZVRvZ2dsZUJvb2ttYXJrIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInBhdGhOYW1lIiwicGF0aG5hbWUiLCJjdXJyZW50Qm9vayIsImZpbmQiLCJib29rIiwiY3VycmVudEJvb2tEYXRhIiwiYm9va0RhdGEiLCJpc1JlYWR5IiwicCIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXIiLCJocmVmIiwiaDEiLCJtYWluIiwiYWx0IiwidGl0bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImNvdmVyIiwidHlwZSIsIm9uQ2xpY2siLCJpc0Jvb2ttYXJrZWQiLCJoMyIsImF1dGhvciIsInB1Ymxpc2hZZWFyIiwicGFnZXMiLCJnZW5yZSIsImRlc2NyaXB0aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/details/[id].js\n"));

/***/ })

});