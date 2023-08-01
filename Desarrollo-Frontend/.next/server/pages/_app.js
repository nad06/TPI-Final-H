/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/state.js":
/*!**************************!*\
  !*** ./context/state.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppWrapper\": () => (/* binding */ AppWrapper),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AppWrapper({ children  }) {\n    //Muestra o no el popup de AgregarProductos. Por defecto es false.\n    const { 0: showAddProductos , 1: setShowAddProductos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //Muestra los detalles de productos. Por defecto es -1 y al cambiarlo se muestra el detalle del producto cuyo id se coloque\n    const { 0: showProducto , 1: setShowProducto  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const { 0: showEliminarProducto , 1: setShowEliminarProducto  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const { 0: showAddCompras , 1: setShowAddCompras  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: showCompra , 1: setShowCompra  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const { 0: showEliminarCompra , 1: setShowEliminarCompra  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const { 0: showAddVentas , 1: setShowAddVentas  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: showVenta , 1: setShowVenta  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const { 0: showEliminarVenta , 1: setShowEliminarVenta  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const { 0: showGenerarReporte , 1: setShowGenerarReporte  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: dia , 1: setDia  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const { 0: semana , 1: setSemana  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const { 0: mes , 1: setMes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const { 0: anio , 1: setAnio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context.Provider, {\n        value: {\n            showProductos: [\n                showProducto,\n                setShowProducto\n            ],\n            addProductos: [\n                showAddProductos,\n                setShowAddProductos\n            ],\n            eliminarProducto: [\n                showEliminarProducto,\n                setShowEliminarProducto\n            ],\n            showCompras: [\n                showCompra,\n                setShowCompra\n            ],\n            addCompras: [\n                showAddCompras,\n                setShowAddCompras\n            ],\n            eliminarCompra: [\n                showEliminarCompra,\n                setShowEliminarCompra\n            ],\n            showVentas: [\n                showVenta,\n                setShowVenta\n            ],\n            addVentas: [\n                showAddVentas,\n                setShowAddVentas\n            ],\n            eliminarVenta: [\n                showEliminarVenta,\n                setShowEliminarVenta\n            ],\n            showReporte: [\n                showGenerarReporte,\n                setShowGenerarReporte\n            ],\n            dias: [\n                dia,\n                setDia\n            ],\n            semanas: [\n                semana,\n                setSemana\n            ],\n            meses: [\n                mes,\n                setMes\n            ],\n            anios: [\n                anio,\n                setAnio\n            ]\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\context\\\\state.js\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, this);\n}\nfunction useAppContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEVBQUU7Z0JBQUNqQixJQUFJO2dCQUFFQyxPQUFPO2FBQUM7U0FDckI7a0JBQ0k1QixRQUFROzs7OztZQUNJLENBRXJCO0FBQ0osQ0FBQztBQUVNLFNBQVM2QyxhQUFhLEdBQUc7SUFDOUIsT0FBT2pELGlEQUFVLENBQUNFLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cGktZnJvbnRlbmQvLi9jb250ZXh0L3N0YXRlLmpzPzlmYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcFdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgLy9NdWVzdHJhIG8gbm8gZWwgcG9wdXAgZGUgQWdyZWdhclByb2R1Y3Rvcy4gUG9yIGRlZmVjdG8gZXMgZmFsc2UuXHJcbiAgY29uc3QgW3Nob3dBZGRQcm9kdWN0b3MsIHNldFNob3dBZGRQcm9kdWN0b3NdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAvL011ZXN0cmEgbG9zIGRldGFsbGVzIGRlIHByb2R1Y3Rvcy4gUG9yIGRlZmVjdG8gZXMgLTEgeSBhbCBjYW1iaWFybG8gc2UgbXVlc3RyYSBlbCBkZXRhbGxlIGRlbCBwcm9kdWN0byBjdXlvIGlkIHNlIGNvbG9xdWVcclxuICBjb25zdCBbc2hvd1Byb2R1Y3RvLCBzZXRTaG93UHJvZHVjdG9dID0gdXNlU3RhdGUoLTEpOyBcclxuICBjb25zdCBbc2hvd0VsaW1pbmFyUHJvZHVjdG8sIHNldFNob3dFbGltaW5hclByb2R1Y3RvXSA9IHVzZVN0YXRlKC0xKTtcclxuXHJcbiAgY29uc3QgW3Nob3dBZGRDb21wcmFzLCBzZXRTaG93QWRkQ29tcHJhc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDb21wcmEsIHNldFNob3dDb21wcmFdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtzaG93RWxpbWluYXJDb21wcmEsIHNldFNob3dFbGltaW5hckNvbXByYV0gPSB1c2VTdGF0ZSgtMSk7XHJcblxyXG4gIGNvbnN0IFtzaG93QWRkVmVudGFzLCBzZXRTaG93QWRkVmVudGFzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1ZlbnRhLCBzZXRTaG93VmVudGFdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtzaG93RWxpbWluYXJWZW50YSwgc2V0U2hvd0VsaW1pbmFyVmVudGFdID0gdXNlU3RhdGUoLTEpO1xyXG5cclxuICBjb25zdCBbc2hvd0dlbmVyYXJSZXBvcnRlLCBzZXRTaG93R2VuZXJhclJlcG9ydGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbZGlhLCBzZXREaWFdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3NlbWFuYSwgc2V0U2VtYW5hXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFttZXMsIHNldE1lc10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbYW5pbywgc2V0QW5pb10gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICBzaG93UHJvZHVjdG9zOltzaG93UHJvZHVjdG8sIHNldFNob3dQcm9kdWN0b10sIFxyXG4gICAgICAgIGFkZFByb2R1Y3RvczogW3Nob3dBZGRQcm9kdWN0b3MsIHNldFNob3dBZGRQcm9kdWN0b3NdLCBcclxuICAgICAgICBlbGltaW5hclByb2R1Y3RvOiBbc2hvd0VsaW1pbmFyUHJvZHVjdG8sIHNldFNob3dFbGltaW5hclByb2R1Y3RvXSxcclxuXHJcbiAgICAgICAgc2hvd0NvbXByYXM6W3Nob3dDb21wcmEsIHNldFNob3dDb21wcmFdLCBcclxuICAgICAgICBhZGRDb21wcmFzOiBbc2hvd0FkZENvbXByYXMsIHNldFNob3dBZGRDb21wcmFzXSwgXHJcbiAgICAgICAgZWxpbWluYXJDb21wcmE6IFtzaG93RWxpbWluYXJDb21wcmEsIHNldFNob3dFbGltaW5hckNvbXByYV0sXHJcblxyXG4gICAgICAgIHNob3dWZW50YXM6W3Nob3dWZW50YSwgc2V0U2hvd1ZlbnRhXSwgXHJcbiAgICAgICAgYWRkVmVudGFzOiBbc2hvd0FkZFZlbnRhcywgc2V0U2hvd0FkZFZlbnRhc10sIFxyXG4gICAgICAgIGVsaW1pbmFyVmVudGE6IFtzaG93RWxpbWluYXJWZW50YSwgc2V0U2hvd0VsaW1pbmFyVmVudGFdLFxyXG5cclxuICAgICAgICBzaG93UmVwb3J0ZTogW3Nob3dHZW5lcmFyUmVwb3J0ZSwgc2V0U2hvd0dlbmVyYXJSZXBvcnRlXSxcclxuICAgICAgICBkaWFzOiBbZGlhLCBzZXREaWFdLFxyXG4gICAgICAgIHNlbWFuYXM6IFtzZW1hbmEsIHNldFNlbWFuYV0sXHJcbiAgICAgICAgbWVzZXM6IFttZXMsIHNldE1lc10sXHJcbiAgICAgICAgYW5pb3M6IFthbmlvLCBzZXRBbmlvXVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvY29udGV4dC5Qcm92aWRlcj4gIFxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChjb250ZXh0KTtcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiY29udGV4dCIsIkFwcFdyYXBwZXIiLCJjaGlsZHJlbiIsInNob3dBZGRQcm9kdWN0b3MiLCJzZXRTaG93QWRkUHJvZHVjdG9zIiwic2hvd1Byb2R1Y3RvIiwic2V0U2hvd1Byb2R1Y3RvIiwic2hvd0VsaW1pbmFyUHJvZHVjdG8iLCJzZXRTaG93RWxpbWluYXJQcm9kdWN0byIsInNob3dBZGRDb21wcmFzIiwic2V0U2hvd0FkZENvbXByYXMiLCJzaG93Q29tcHJhIiwic2V0U2hvd0NvbXByYSIsInNob3dFbGltaW5hckNvbXByYSIsInNldFNob3dFbGltaW5hckNvbXByYSIsInNob3dBZGRWZW50YXMiLCJzZXRTaG93QWRkVmVudGFzIiwic2hvd1ZlbnRhIiwic2V0U2hvd1ZlbnRhIiwic2hvd0VsaW1pbmFyVmVudGEiLCJzZXRTaG93RWxpbWluYXJWZW50YSIsInNob3dHZW5lcmFyUmVwb3J0ZSIsInNldFNob3dHZW5lcmFyUmVwb3J0ZSIsImRpYSIsInNldERpYSIsInNlbWFuYSIsInNldFNlbWFuYSIsIm1lcyIsInNldE1lcyIsImFuaW8iLCJzZXRBbmlvIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInNob3dQcm9kdWN0b3MiLCJhZGRQcm9kdWN0b3MiLCJlbGltaW5hclByb2R1Y3RvIiwic2hvd0NvbXByYXMiLCJhZGRDb21wcmFzIiwiZWxpbWluYXJDb21wcmEiLCJzaG93VmVudGFzIiwiYWRkVmVudGFzIiwiZWxpbWluYXJWZW50YSIsInNob3dSZXBvcnRlIiwiZGlhcyIsInNlbWFuYXMiLCJtZXNlcyIsImFuaW9zIiwidXNlQXBwQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/state.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state */ \"./context/state.js\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n // import based on where you put it\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_state__WEBPACK_IMPORTED_MODULE_3__.AppWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Documentos\\\\UTN\\\\Desarrollo de Software\\\\Tpi-H\\\\Desarrollo-Frontend\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFxQjtBQUNLO0FBQ29CLENBQUMsbUNBQW1DO0FBQ2hEO0FBRW5CLFNBQVNFLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3RELHFCQUNFLDhEQUFDSCxzREFBVTtrQkFDVCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNqQixDQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RwaS1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwcFdyYXBwZXIgfSBmcm9tICcuLi9jb250ZXh0L3N0YXRlJzsgLy8gaW1wb3J0IGJhc2VkIG9uIHdoZXJlIHlvdSBwdXQgaXRcclxuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBXcmFwcGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0FwcFdyYXBwZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcFdyYXBwZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();