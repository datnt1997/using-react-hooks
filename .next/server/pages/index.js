"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\ReactJS\\using-react-hooks\\pages\\index.js";



const InputElement = () => {
  const {
    0: inputText,
    1: setInputText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: historyList,
    1: setHistoryList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      onChange: e => {
        setInputText(e.target.value);
        setHistoryList([...historyList, e.target.value]);
      },
      placeholder: "Enter Some Text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), inputText, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      children: historyList.map(rec => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: rec
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 34
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputElement);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxNQUFNRSxZQUFZLEdBQUcsTUFBTTtBQUV6QixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJILCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDSSxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0wsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLGNBQVEsRUFBR00sQ0FBRCxJQUFPO0FBQ2ZILFFBQUFBLFlBQVksQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUNBSCxRQUFBQSxjQUFjLENBQUMsQ0FBQyxHQUFHRCxXQUFKLEVBQWlCRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBMUIsQ0FBRCxDQUFkO0FBQ0QsT0FKSDtBQUtFLGlCQUFXLEVBQUM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBUUdOLFNBUkgsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBU1E7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUUixlQVVFO0FBQUEsZ0JBQ0dFLFdBQVcsQ0FBQ0ssR0FBWixDQUFnQkMsR0FBRyxpQkFBSztBQUFBLGtCQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQXJCRDs7QUF1QkEsaUVBQWVULFlBQWY7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5wdXRFbGVtZW50ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtoaXN0b3J5TGlzdCwgc2V0SGlzdG9yeUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgc2V0SGlzdG9yeUxpc3QoWy4uLmhpc3RvcnlMaXN0LCBlLnRhcmdldC52YWx1ZV0pO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBTb21lIFRleHRcIlxyXG4gICAgICAvPlxyXG4gICAgICB7aW5wdXRUZXh0fVxyXG4gICAgICA8aHIgLz48YnIgLz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtoaXN0b3J5TGlzdC5tYXAocmVjID0+ICg8ZGl2PntyZWN9PC9kaXY+KSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIklucHV0RWxlbWVudCIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsImhpc3RvcnlMaXN0Iiwic2V0SGlzdG9yeUxpc3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJyZWMiXSwic291cmNlUm9vdCI6IiJ9