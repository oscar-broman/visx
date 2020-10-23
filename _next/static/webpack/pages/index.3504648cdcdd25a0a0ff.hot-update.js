webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sandboxes/visx-shape-line-radial/Example.tsx":
/*!**********************************************************!*\
  !*** ./src/sandboxes/visx-shape-line-radial/Example.tsx ***!
  \**********************************************************/
/*! exports provided: blue, background, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blue\", function() { return blue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"background\", function() { return background; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _visx_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @visx/group */ \"../visx-group/esm/index.js\");\n/* harmony import */ var _visx_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @visx/shape */ \"../visx-shape/esm/index.js\");\n/* harmony import */ var _visx_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visx/scale */ \"../visx-scale/esm/index.js\");\n/* harmony import */ var _visx_curve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visx/curve */ \"../visx-curve/esm/index.js\");\n/* harmony import */ var _visx_mock_data_lib_mocks_appleStock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visx/mock-data/lib/mocks/appleStock */ \"../visx-mock-data/lib/mocks/appleStock.js\");\n/* harmony import */ var _visx_mock_data_lib_mocks_appleStock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_visx_mock_data_lib_mocks_appleStock__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _visx_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visx/gradient */ \"../visx-gradient/esm/index.js\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spring */ \"../../node_modules/react-spring/web.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/harry/dev/visx/packages/visx-demo/src/sandboxes/visx-shape-line-radial/Example.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/**\n * Animated radial line example using svg dash offset trick. See here for more\n * https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3.html\n */\n\n\n\n\n\n\n\n\nvar green = '#e5fd3d';\nvar blue = '#aeeef8';\nvar darkgreen = '#dff84d';\nvar background = '#744cca';\nvar darkbackground = '#603FA8';\nvar springConfig = {\n  tension: 20\n}; // utils\n\nfunction extent(data, value) {\n  var values = data.map(value);\n  return [Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(values)), Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(values))];\n} // accessors\n\n\nvar date = function date(d) {\n  return new Date(d.date).valueOf();\n};\n\nvar close = function close(d) {\n  return d.close;\n}; // scales\n\n\nvar xScale = Object(_visx_scale__WEBPACK_IMPORTED_MODULE_4__[\"scaleTime\"])({\n  range: [0, Math.PI * 2],\n  domain: extent(_visx_mock_data_lib_mocks_appleStock__WEBPACK_IMPORTED_MODULE_6___default.a, date)\n});\nvar yScale = Object(_visx_scale__WEBPACK_IMPORTED_MODULE_4__[\"scaleLog\"])({\n  domain: extent(_visx_mock_data_lib_mocks_appleStock__WEBPACK_IMPORTED_MODULE_6___default.a, close)\n});\n\nvar angle = function angle(d) {\n  var _xScale;\n\n  return (_xScale = xScale(date(d))) !== null && _xScale !== void 0 ? _xScale : 0;\n};\n\nvar radius = function radius(d) {\n  var _yScale;\n\n  return (_yScale = yScale(close(d))) !== null && _yScale !== void 0 ? _yScale : 0;\n};\n\nvar firstPoint = _visx_mock_data_lib_mocks_appleStock__WEBPACK_IMPORTED_MODULE_6___default.a[0];\nvar lastPoint = _visx_mock_data_lib_mocks_appleStock__WEBPACK_IMPORTED_MODULE_6___default.a[_visx_mock_data_lib_mocks_appleStock__WEBPACK_IMPORTED_MODULE_6___default.a.length - 1];\n\nvar ShapeLineRadial = function ShapeLineRadial(_ref) {\n  _s();\n\n  var width = _ref.width,\n      height = _ref.height,\n      _ref$animate = _ref.animate,\n      animate = _ref$animate === void 0 ? true : _ref$animate;\n  var lineRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      lineLength = _useState[0],\n      setLineLength = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      shouldAnimate = _useState2[0],\n      setShouldAnimate = _useState2[1];\n\n  var spring = Object(react_spring__WEBPACK_IMPORTED_MODULE_8__[\"useSpring\"])({\n    frame: shouldAnimate ? 0 : 1,\n    config: springConfig,\n    onRest: function onRest() {\n      return setShouldAnimate(false);\n    }\n  }); // set line length once it is known after initial render\n\n  var effectDependency = lineRef.current;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (lineRef.current) {\n      setLineLength(lineRef.current.getTotalLength());\n    }\n  }, [effectDependency]);\n  if (width < 10) return null; // Update scale output to match component dimensions\n\n  yScale.range([0, height / 2 - 20]);\n  var yScaleTicks = yScale.ticks();\n\n  var handlePress = function handlePress() {\n    return setShouldAnimate(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, animate && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"button\", {\n    type: \"button\",\n    onClick: handlePress,\n    onTouchStart: handlePress,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, \"Animate\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  })), __jsx(\"svg\", {\n    width: width,\n    height: height,\n    onClick: function onClick() {\n      return setShouldAnimate(!shouldAnimate);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }, __jsx(_visx_gradient__WEBPACK_IMPORTED_MODULE_7__[\"LinearGradient\"], {\n    from: green,\n    to: blue,\n    id: \"line-gradient\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }), __jsx(\"rect\", {\n    width: width,\n    height: height,\n    fill: background,\n    rx: 14,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }), __jsx(_visx_group__WEBPACK_IMPORTED_MODULE_2__[\"Group\"], {\n    top: height / 2,\n    left: width / 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, yScaleTicks.map(function (tick, i) {\n    return __jsx(\"circle\", {\n      key: \"radial-grid-\".concat(i),\n      r: yScale(tick),\n      stroke: blue,\n      strokeWidth: 1,\n      fill: blue,\n      fillOpacity: 1 / (i + 1) - 1 / i * 0.2,\n      strokeOpacity: 0.2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 13\n      }\n    });\n  }), yScaleTicks.map(function (tick, i) {\n    var _yScale2;\n\n    return __jsx(\"text\", {\n      key: \"radial-grid-\".concat(i),\n      y: -((_yScale2 = yScale(tick)) !== null && _yScale2 !== void 0 ? _yScale2 : 0),\n      dy: \"-.33em\",\n      fontSize: 8,\n      fill: blue,\n      textAnchor: \"middle\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 13\n      }\n    }, tick);\n  }), __jsx(_visx_shape__WEBPACK_IMPORTED_MODULE_3__[\"LineRadial\"], {\n    angle: angle,\n    radius: radius,\n    curve: _visx_curve__WEBPACK_IMPORTED_MODULE_5__[\"curveBasisOpen\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, function (_ref2) {\n    var path = _ref2.path;\n    var d = path(_visx_mock_data_lib_mocks_appleStock__WEBPACK_IMPORTED_MODULE_6___default.a) || '';\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__[\"animated\"].path, {\n      d: d,\n      ref: lineRef,\n      strokeWidth: 2,\n      strokeOpacity: 0.8,\n      strokeLinecap: \"round\",\n      fill: \"none\",\n      stroke: animate ? darkbackground : 'url(#line-gradient)',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 19\n      }\n    }), shouldAnimate && __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__[\"animated\"].path, {\n      d: d,\n      strokeWidth: 2,\n      strokeOpacity: 0.8,\n      strokeLinecap: \"round\",\n      fill: \"none\",\n      stroke: \"url(#line-gradient)\",\n      strokeDashoffset: spring.frame.interpolate(function (v) {\n        return v * lineLength;\n      }),\n      strokeDasharray: lineLength,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 21\n      }\n    }));\n  }), [firstPoint, lastPoint].map(function (d, i) {\n    var _xScale2, _yScale3;\n\n    var cx = ((_xScale2 = xScale(date(d))) !== null && _xScale2 !== void 0 ? _xScale2 : 0) * Math.PI / 180;\n    var cy = -((_yScale3 = yScale(close(d))) !== null && _yScale3 !== void 0 ? _yScale3 : 0);\n    return __jsx(\"circle\", {\n      key: \"line-cap-\".concat(i),\n      cx: cx,\n      cy: cy,\n      fill: darkgreen,\n      r: 3,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 20\n      }\n    });\n  }))));\n};\n\n_s(ShapeLineRadial, \"Gre8LUym1kcydmozadJ/miPAofQ=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_8__[\"useSpring\"]];\n});\n\n_c = ShapeLineRadial;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShapeLineRadial);\n\ntry {\n  // @ts-ignore\n  Example.displayName = \"Example\"; // @ts-ignore\n\n  Example.__docgenInfo = {\n    \"description\": \"\",\n    \"displayName\": \"Example\",\n    \"props\": {\n      \"width\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"width\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"number\"\n        }\n      },\n      \"height\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"height\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"number\"\n        }\n      },\n      \"animate\": {\n        \"defaultValue\": {\n          value: true\n        },\n        \"description\": \"\",\n        \"name\": \"animate\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"boolean | undefined\"\n        }\n      }\n    }\n  }; // @ts-ignore\n\n  if (typeof STORYBOOK_REACT_CLASSES !== \"undefined\") // @ts-ignore\n    STORYBOOK_REACT_CLASSES[\"src/sandboxes/visx-shape-line-radial/Example.tsx#Example\"] = {\n      docgenInfo: Example.__docgenInfo,\n      name: \"Example\",\n      path: \"src/sandboxes/visx-shape-line-radial/Example.tsx#Example\"\n    };\n} catch (__react_docgen_typescript_loader_error) {}\n\nvar _c;\n\n$RefreshReg$(_c, \"ShapeLineRadial\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhbmRib3hlcy92aXN4LXNoYXBlLWxpbmUtcmFkaWFsL0V4YW1wbGUudHN4PzI4MTEiXSwibmFtZXMiOlsiZ3JlZW4iLCJibHVlIiwiZGFya2dyZWVuIiwiYmFja2dyb3VuZCIsImRhcmtiYWNrZ3JvdW5kIiwic3ByaW5nQ29uZmlnIiwidGVuc2lvbiIsImV4dGVudCIsImRhdGEiLCJ2YWx1ZSIsInZhbHVlcyIsIm1hcCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJkYXRlIiwiZCIsIkRhdGUiLCJ2YWx1ZU9mIiwiY2xvc2UiLCJ4U2NhbGUiLCJzY2FsZVRpbWUiLCJyYW5nZSIsIlBJIiwiZG9tYWluIiwiYXBwbGVTdG9jayIsInlTY2FsZSIsInNjYWxlTG9nIiwiYW5nbGUiLCJyYWRpdXMiLCJmaXJzdFBvaW50IiwibGFzdFBvaW50IiwibGVuZ3RoIiwiU2hhcGVMaW5lUmFkaWFsIiwid2lkdGgiLCJoZWlnaHQiLCJhbmltYXRlIiwibGluZVJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwibGluZUxlbmd0aCIsInNldExpbmVMZW5ndGgiLCJzaG91bGRBbmltYXRlIiwic2V0U2hvdWxkQW5pbWF0ZSIsInNwcmluZyIsInVzZVNwcmluZyIsImZyYW1lIiwiY29uZmlnIiwib25SZXN0IiwiZWZmZWN0RGVwZW5kZW5jeSIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJnZXRUb3RhbExlbmd0aCIsInlTY2FsZVRpY2tzIiwidGlja3MiLCJoYW5kbGVQcmVzcyIsInRpY2siLCJpIiwiY3VydmVCYXNpc09wZW4iLCJwYXRoIiwiaW50ZXJwb2xhdGUiLCJ2IiwiY3giLCJjeSIsIkV4YW1wbGUiLCJkaXNwbGF5TmFtZSIsIl9fZG9jZ2VuSW5mbyIsIlNUT1JZQk9PS19SRUFDVF9DTEFTU0VTIiwiZG9jZ2VuSW5mbyIsIm5hbWUiLCJfX3JlYWN0X2RvY2dlbl90eXBlc2NyaXB0X2xvYWRlcl9lcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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QUUsa0JBQVE7QUFBVjtBQUF2RixPQUFuSTtBQUFrUCxpQkFBVztBQUFFLHdCQUFnQjtBQUFFekQsZUFBSyxFQUFFO0FBQVQsU0FBbEI7QUFBbUMsdUJBQWUsRUFBbEQ7QUFBc0QsZ0JBQVEsU0FBOUQ7QUFBeUUsb0JBQVksS0FBckY7QUFBNEYsZ0JBQVE7QUFBRSxrQkFBUTtBQUFWO0FBQXBHO0FBQTdQO0FBQXhELEdBQXZCLENBSkEsQ0FLQTs7QUFDQSxNQUFJLE9BQU8wRCx1QkFBUCxLQUFtQyxXQUF2QyxFQUNJO0FBQ0FBLDJCQUF1QixDQUFDLDBEQUFELENBQXZCLEdBQXNGO0FBQUVDLGdCQUFVLEVBQUVKLE9BQU8sQ0FBQ0UsWUFBdEI7QUFBb0NHLFVBQUksRUFBRSxTQUExQztBQUFxRFYsVUFBSSxFQUFFO0FBQTNELEtBQXRGO0FBQ1AsQ0FURCxDQVVBLE9BQU9XLHNDQUFQLEVBQStDLENBQUciLCJmaWxlIjoiLi9zcmMvc2FuZGJveGVzL3Zpc3gtc2hhcGUtbGluZS1yYWRpYWwvRXhhbXBsZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFuaW1hdGVkIHJhZGlhbCBsaW5lIGV4YW1wbGUgdXNpbmcgc3ZnIGRhc2ggb2Zmc2V0IHRyaWNrLiBTZWUgaGVyZSBmb3IgbW9yZVxuICogaHR0cHM6Ly93d3cudmlzdWFsY2lubmFtb24uY29tLzIwMTYvMDEvYW5pbWF0aW5nLWRhc2hlZC1saW5lLWQzLmh0bWxcbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnQHZpc3gvZ3JvdXAnO1xuaW1wb3J0IHsgTGluZVJhZGlhbCB9IGZyb20gJ0B2aXN4L3NoYXBlJztcbmltcG9ydCB7IHNjYWxlVGltZSwgc2NhbGVMb2cgfSBmcm9tICdAdmlzeC9zY2FsZSc7XG5pbXBvcnQgeyBjdXJ2ZUJhc2lzT3BlbiB9IGZyb20gJ0B2aXN4L2N1cnZlJztcbmltcG9ydCBhcHBsZVN0b2NrLCB7IEFwcGxlU3RvY2sgfSBmcm9tICdAdmlzeC9tb2NrLWRhdGEvbGliL21vY2tzL2FwcGxlU3RvY2snO1xuaW1wb3J0IHsgTGluZWFyR3JhZGllbnQgfSBmcm9tICdAdmlzeC9ncmFkaWVudCc7XG5pbXBvcnQgeyBhbmltYXRlZCwgdXNlU3ByaW5nIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcblxuY29uc3QgZ3JlZW4gPSAnI2U1ZmQzZCc7XG5leHBvcnQgY29uc3QgYmx1ZSA9ICcjYWVlZWY4JztcbmNvbnN0IGRhcmtncmVlbiA9ICcjZGZmODRkJztcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kID0gJyM3NDRjY2EnO1xuY29uc3QgZGFya2JhY2tncm91bmQgPSAnIzYwM0ZBOCc7XG5jb25zdCBzcHJpbmdDb25maWcgPSB7XG4gIHRlbnNpb246IDIwLFxufTtcblxuLy8gdXRpbHNcbmZ1bmN0aW9uIGV4dGVudDxEYXR1bT4oZGF0YTogRGF0dW1bXSwgdmFsdWU6IChkOiBEYXR1bSkgPT4gbnVtYmVyKSB7XG4gIGNvbnN0IHZhbHVlcyA9IGRhdGEubWFwKHZhbHVlKTtcbiAgcmV0dXJuIFtNYXRoLm1pbiguLi52YWx1ZXMpLCBNYXRoLm1heCguLi52YWx1ZXMpXTtcbn1cblxuLy8gYWNjZXNzb3JzXG5jb25zdCBkYXRlID0gKGQ6IEFwcGxlU3RvY2spID0+IG5ldyBEYXRlKGQuZGF0ZSkudmFsdWVPZigpO1xuY29uc3QgY2xvc2UgPSAoZDogQXBwbGVTdG9jaykgPT4gZC5jbG9zZTtcblxuLy8gc2NhbGVzXG5jb25zdCB4U2NhbGUgPSBzY2FsZVRpbWUoe1xuICByYW5nZTogWzAsIE1hdGguUEkgKiAyXSxcbiAgZG9tYWluOiBleHRlbnQoYXBwbGVTdG9jaywgZGF0ZSksXG59KTtcbmNvbnN0IHlTY2FsZSA9IHNjYWxlTG9nPG51bWJlcj4oe1xuICBkb21haW46IGV4dGVudChhcHBsZVN0b2NrLCBjbG9zZSksXG59KTtcblxuY29uc3QgYW5nbGUgPSAoZDogQXBwbGVTdG9jaykgPT4geFNjYWxlKGRhdGUoZCkpID8/IDA7XG5jb25zdCByYWRpdXMgPSAoZDogQXBwbGVTdG9jaykgPT4geVNjYWxlKGNsb3NlKGQpKSA/PyAwO1xuXG5jb25zdCBmaXJzdFBvaW50ID0gYXBwbGVTdG9ja1swXTtcbmNvbnN0IGxhc3RQb2ludCA9IGFwcGxlU3RvY2tbYXBwbGVTdG9jay5sZW5ndGggLSAxXTtcblxuZXhwb3J0IHR5cGUgTGluZVJhZGlhbFByb3BzID0ge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgYW5pbWF0ZT86IGJvb2xlYW47XG59O1xuXG5jb25zdCBTaGFwZUxpbmVSYWRpYWwgPSAoeyB3aWR0aCwgaGVpZ2h0LCBhbmltYXRlID0gdHJ1ZSB9OiBMaW5lUmFkaWFsUHJvcHMpID0+IHtcbiAgY29uc3QgbGluZVJlZiA9IHVzZVJlZjxTVkdQYXRoRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFtsaW5lTGVuZ3RoLCBzZXRMaW5lTGVuZ3RoXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtzaG91bGRBbmltYXRlLCBzZXRTaG91bGRBbmltYXRlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBzcHJpbmcgPSB1c2VTcHJpbmcoe1xuICAgIGZyYW1lOiBzaG91bGRBbmltYXRlID8gMCA6IDEsXG4gICAgY29uZmlnOiBzcHJpbmdDb25maWcsXG4gICAgb25SZXN0OiAoKSA9PiBzZXRTaG91bGRBbmltYXRlKGZhbHNlKSxcbiAgfSk7XG5cbiAgLy8gc2V0IGxpbmUgbGVuZ3RoIG9uY2UgaXQgaXMga25vd24gYWZ0ZXIgaW5pdGlhbCByZW5kZXJcbiAgY29uc3QgZWZmZWN0RGVwZW5kZW5jeSA9IGxpbmVSZWYuY3VycmVudDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGluZVJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRMaW5lTGVuZ3RoKGxpbmVSZWYuY3VycmVudC5nZXRUb3RhbExlbmd0aCgpKTtcbiAgICB9XG4gIH0sIFtlZmZlY3REZXBlbmRlbmN5XSk7XG5cbiAgaWYgKHdpZHRoIDwgMTApIHJldHVybiBudWxsO1xuXG4gIC8vIFVwZGF0ZSBzY2FsZSBvdXRwdXQgdG8gbWF0Y2ggY29tcG9uZW50IGRpbWVuc2lvbnNcbiAgeVNjYWxlLnJhbmdlKFswLCBoZWlnaHQgLyAyIC0gMjBdKTtcblxuICBjb25zdCB5U2NhbGVUaWNrcyA9IHlTY2FsZS50aWNrcygpO1xuICBjb25zdCBoYW5kbGVQcmVzcyA9ICgpID0+IHNldFNob3VsZEFuaW1hdGUodHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2FuaW1hdGUgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVByZXNzfSBvblRvdWNoU3RhcnQ9e2hhbmRsZVByZXNzfT5cbiAgICAgICAgICAgIEFuaW1hdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBvbkNsaWNrPXsoKSA9PiBzZXRTaG91bGRBbmltYXRlKCFzaG91bGRBbmltYXRlKX0+XG4gICAgICAgIDxMaW5lYXJHcmFkaWVudCBmcm9tPXtncmVlbn0gdG89e2JsdWV9IGlkPVwibGluZS1ncmFkaWVudFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGZpbGw9e2JhY2tncm91bmR9IHJ4PXsxNH0gLz5cbiAgICAgICAgPEdyb3VwIHRvcD17aGVpZ2h0IC8gMn0gbGVmdD17d2lkdGggLyAyfT5cbiAgICAgICAgICB7LyoqIFJhZGlhbCBjaXJjbGVzICovfVxuICAgICAgICAgIHt5U2NhbGVUaWNrcy5tYXAoKHRpY2ssIGkpID0+IChcbiAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAga2V5PXtgcmFkaWFsLWdyaWQtJHtpfWB9XG4gICAgICAgICAgICAgIHI9e3lTY2FsZSh0aWNrKX1cbiAgICAgICAgICAgICAgc3Ryb2tlPXtibHVlfVxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MX1cbiAgICAgICAgICAgICAgZmlsbD17Ymx1ZX1cbiAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9ezEgLyAoaSArIDEpIC0gKDEgLyBpKSAqIDAuMn1cbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eT17MC4yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7LyoqIExhYmVscyBvbiB0b3AgKi99XG4gICAgICAgICAge3lTY2FsZVRpY2tzLm1hcCgodGljaywgaSkgPT4gKFxuICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAga2V5PXtgcmFkaWFsLWdyaWQtJHtpfWB9XG4gICAgICAgICAgICAgIHk9ey0oeVNjYWxlKHRpY2spID8/IDApfVxuICAgICAgICAgICAgICBkeT1cIi0uMzNlbVwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPXs4fVxuICAgICAgICAgICAgICBmaWxsPXtibHVlfVxuICAgICAgICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpY2t9XG4gICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8TGluZVJhZGlhbCBhbmdsZT17YW5nbGV9IHJhZGl1cz17cmFkaXVzfSBjdXJ2ZT17Y3VydmVCYXNpc09wZW59PlxuICAgICAgICAgICAgeyh7IHBhdGggfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkID0gcGF0aChhcHBsZVN0b2NrKSB8fCAnJztcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGFuaW1hdGVkLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD17ZH1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtsaW5lUmVmfVxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eT17MC44fVxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT17YW5pbWF0ZSA/IGRhcmtiYWNrZ3JvdW5kIDogJ3VybCgjbGluZS1ncmFkaWVudCknfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtzaG91bGRBbmltYXRlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVkLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPXtkfVxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk9ezAuOH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ1cmwoI2xpbmUtZ3JhZGllbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0PXtzcHJpbmcuZnJhbWUuaW50ZXJwb2xhdGUodiA9PiB2ICogbGluZUxlbmd0aCl9XG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PXtsaW5lTGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9MaW5lUmFkaWFsPlxuXG4gICAgICAgICAge1tmaXJzdFBvaW50LCBsYXN0UG9pbnRdLm1hcCgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3ggPSAoKHhTY2FsZShkYXRlKGQpKSA/PyAwKSAqIE1hdGguUEkpIC8gMTgwO1xuICAgICAgICAgICAgY29uc3QgY3kgPSAtKHlTY2FsZShjbG9zZShkKSkgPz8gMCk7XG4gICAgICAgICAgICByZXR1cm4gPGNpcmNsZSBrZXk9e2BsaW5lLWNhcC0ke2l9YH0gY3g9e2N4fSBjeT17Y3l9IGZpbGw9e2RhcmtncmVlbn0gcj17M30gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICA8L3N2Zz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlTGluZVJhZGlhbDtcbnRyeSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEV4YW1wbGUuZGlzcGxheU5hbWUgPSBcIkV4YW1wbGVcIjtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgRXhhbXBsZS5fX2RvY2dlbkluZm8gPSB7IFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJkaXNwbGF5TmFtZVwiOiBcIkV4YW1wbGVcIiwgXCJwcm9wc1wiOiB7IFwid2lkdGhcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcIndpZHRoXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwibnVtYmVyXCIgfSB9LCBcImhlaWdodFwiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiaGVpZ2h0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwibnVtYmVyXCIgfSB9LCBcImFuaW1hdGVcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiB7IHZhbHVlOiB0cnVlIH0sIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiYW5pbWF0ZVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJib29sZWFuIHwgdW5kZWZpbmVkXCIgfSB9IH0gfTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHR5cGVvZiBTVE9SWUJPT0tfUkVBQ1RfQ0xBU1NFUyAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBTVE9SWUJPT0tfUkVBQ1RfQ0xBU1NFU1tcInNyYy9zYW5kYm94ZXMvdmlzeC1zaGFwZS1saW5lLXJhZGlhbC9FeGFtcGxlLnRzeCNFeGFtcGxlXCJdID0geyBkb2NnZW5JbmZvOiBFeGFtcGxlLl9fZG9jZ2VuSW5mbywgbmFtZTogXCJFeGFtcGxlXCIsIHBhdGg6IFwic3JjL3NhbmRib3hlcy92aXN4LXNoYXBlLWxpbmUtcmFkaWFsL0V4YW1wbGUudHN4I0V4YW1wbGVcIiB9O1xufVxuY2F0Y2ggKF9fcmVhY3RfZG9jZ2VuX3R5cGVzY3JpcHRfbG9hZGVyX2Vycm9yKSB7IH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sandboxes/visx-shape-line-radial/Example.tsx\n");

/***/ })

})