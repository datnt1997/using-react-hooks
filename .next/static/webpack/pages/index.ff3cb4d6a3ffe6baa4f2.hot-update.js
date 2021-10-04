"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Projects_ReactJS_using_react_hooks_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projects\\ReactJS\\using-react-hooks\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var InputElement = function InputElement() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      inputText = _useState[0],
      setInputText = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      historyList = _useState2[0],
      setHistoryList = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      onChange: function onChange(e) {
        setInputText(e.target.value);
        setHistoryList([].concat((0,D_Projects_ReactJS_using_react_hooks_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(historyList), [e.target.value]));
      },
      placeholder: "Enter Some Text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), inputText, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
      children: historyList.map(function (rec) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 34
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_s(InputElement, "sHIO0rogrNM/flwZznaGuMDMe94=");

_c = InputElement;
/* harmony default export */ __webpack_exports__["default"] = (InputElement);

var _c;

$RefreshReg$(_c, "InputElement");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmYzY2I0ZDZhM2ZmZTZiYWE0ZjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFFekIsa0JBQWtDRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPRSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQ0gsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT0ksV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsY0FBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDZkgsUUFBQUEsWUFBWSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0FILFFBQUFBLGNBQWMsa0pBQUtELFdBQUwsSUFBa0JFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUEzQixHQUFkO0FBQ0QsT0FKSDtBQUtFLGlCQUFXLEVBQUM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFRR04sU0FSSCxlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQVNRO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUUixlQVVFO0FBQUEsZ0JBQ0dFLFdBQVcsQ0FBQ0ssR0FBWixDQUFnQixVQUFBQyxHQUFHO0FBQUEsNEJBQUs7QUFBQSxvQkFBTUM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFMO0FBQUEsT0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FyQkQ7O0dBQU1WOztLQUFBQTtBQXVCTiwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbnB1dEVsZW1lbnQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2hpc3RvcnlMaXN0LCBzZXRIaXN0b3J5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICBzZXRIaXN0b3J5TGlzdChbLi4uaGlzdG9yeUxpc3QsIGUudGFyZ2V0LnZhbHVlXSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFNvbWUgVGV4dFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtpbnB1dFRleHR9XHJcbiAgICAgIDxociAvPjxiciAvPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2hpc3RvcnlMaXN0Lm1hcChyZWMgPT4gKDxkaXY+e2l0ZW19PC9kaXY+KSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRFbGVtZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXRFbGVtZW50IiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwiaGlzdG9yeUxpc3QiLCJzZXRIaXN0b3J5TGlzdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInJlYyIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9