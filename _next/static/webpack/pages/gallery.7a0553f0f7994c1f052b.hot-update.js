webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/sandboxes/visx-tooltip/Example.tsx":
/*!************************************************!*\
  !*** ./src/sandboxes/visx-tooltip/Example.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Example; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _visx_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @visx/tooltip */ \"../visx-tooltip/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/harry/dev/visx/packages/visx-demo/src/sandboxes/visx-tooltip/Example.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar positionIndicatorSize = 8;\n\nvar tooltipStyles = _objectSpread(_objectSpread({}, _visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"defaultStyles\"]), {}, {\n  backgroundColor: 'rgba(53,71,125,0.8)',\n  color: 'white',\n  width: 152,\n  height: 72,\n  padding: 12\n});\n\nfunction Example(_ref) {\n  _s();\n\n  var width = _ref.width,\n      height = _ref.height,\n      _ref$showControls = _ref.showControls,\n      showControls = _ref$showControls === void 0 ? true : _ref$showControls;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      tooltipShouldDetectBounds = _useState[0],\n      setTooltipShouldDetectBounds = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      renderTooltipInPortal = _useState2[0],\n      setRenderTooltipInPortal = _useState2[1];\n\n  var _useTooltipInPortal = Object(_visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"useTooltipInPortal\"])({\n    scroll: true,\n    detectBounds: tooltipShouldDetectBounds\n  }),\n      containerRef = _useTooltipInPortal.containerRef,\n      containerBounds = _useTooltipInPortal.containerBounds,\n      TooltipInPortal = _useTooltipInPortal.TooltipInPortal;\n\n  var _useTooltip = Object(_visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"useTooltip\"])({\n    // initial tooltip state\n    tooltipOpen: true,\n    tooltipLeft: width / 3,\n    tooltipTop: height / 3,\n    tooltipData: 'Move me with your mouse or finger'\n  }),\n      showTooltip = _useTooltip.showTooltip,\n      hideTooltip = _useTooltip.hideTooltip,\n      tooltipOpen = _useTooltip.tooltipOpen,\n      tooltipData = _useTooltip.tooltipData,\n      _useTooltip$tooltipLe = _useTooltip.tooltipLeft,\n      tooltipLeft = _useTooltip$tooltipLe === void 0 ? 0 : _useTooltip$tooltipLe,\n      _useTooltip$tooltipTo = _useTooltip.tooltipTop,\n      tooltipTop = _useTooltip$tooltipTo === void 0 ? 0 : _useTooltip$tooltipTo; // event handlers\n\n\n  var handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (event) {\n    // coordinates should be relative to the container in which Tooltip is rendered\n    var containerX = ('clientX' in event ? event.clientX : 0) - containerBounds.left;\n    var containerY = ('clientY' in event ? event.clientY : 0) - containerBounds.top;\n    showTooltip({\n      tooltipLeft: containerX,\n      tooltipTop: containerY,\n      tooltipData: tooltipShouldDetectBounds ? 'I detect my container boundary' : 'I will get clipped by my container'\n    });\n  }, [showTooltip, tooltipShouldDetectBounds, containerBounds]);\n  var TooltipComponent = renderTooltipInPortal ? TooltipInPortal : tooltipShouldDetectBounds ? _visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"TooltipWithBounds\"] : _visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    ref: containerRef,\n    className: \"tooltip-example\",\n    style: {\n      width: width,\n      height: height\n    },\n    onMouseMove: handleMouseMove,\n    onTouchMove: handleMouseMove,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, tooltipOpen ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"position-indicator\",\n    style: {\n      transform: \"translate(\".concat(tooltipLeft - positionIndicatorSize / 2, \"px, \").concat(tooltipTop - positionIndicatorSize / 2, \"px)\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"crosshair horizontal\",\n    style: {\n      transform: \"translateY(\".concat(tooltipTop, \"px)\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"crosshair vertical\",\n    style: {\n      transform: \"translateX(\".concat(tooltipLeft, \"px)\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }), __jsx(TooltipComponent, {\n    key: Math.random() // needed for bounds to update correctly\n    ,\n    left: tooltipLeft,\n    top: tooltipTop,\n    style: renderTooltipInPortal ? tooltipStyles : _objectSpread(_objectSpread({}, tooltipStyles), {}, {\n      zIndex: 9\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, tooltipData, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }), __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 15\n    }\n  }, \"left\"), \" \", tooltipLeft === null || tooltipLeft === void 0 ? void 0 : tooltipLeft.toFixed(0), \"px\\xA0\\xA0\", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  }, \"top\"), \" \", tooltipTop === null || tooltipTop === void 0 ? void 0 : tooltipTop.toFixed(0), \"px\")) : __jsx(\"div\", {\n    className: \"no-tooltip\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }, \"Move or touch the canvas to see the tooltip\"), __jsx(\"div\", {\n    className: \"z-index-bummer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, \"I have an annoying z-index. Try\\xA0\", __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    defaultChecked: renderTooltipInPortal,\n    onClick: function onClick(e) {\n      // if rendered in clickable container, don't trigger that event\n      e.stopPropagation();\n      setRenderTooltipInPortal(!renderTooltipInPortal);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }), \"\\xA0rendering in Portal\"), \"\\xA0\", __jsx(\"span\", {\n    role: \"img\",\n    \"aria-label\": \"yay\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  }, \"\\uD83E\\uDD73\"))), showControls && __jsx(\"div\", {\n    className: \"tooltip-controls\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    checked: tooltipShouldDetectBounds,\n    onChange: function onChange() {\n      return setTooltipShouldDetectBounds(!tooltipShouldDetectBounds);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }), \"\\xA0Tooltip with boundary detection\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return hideTooltip();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 11\n    }\n  }, \"Hide tooltip\")), __jsx(\"style\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 7\n    }\n  }, \"\\n        .tooltip-example {\\n          z-index: 0;\\n          position: relative;\\n          overflow: hidden;\\n          border-radius: 16px;\\n          background: linear-gradient(45deg, #6c5b7b, #c06c84, #f67280);\\n          font-size: 14px;\\n          color: white;\\n          width: 100%;\\n          height: 100%;\\n        }\\n        .tooltip-controls label {\\n          font-size: 14px;\\n          margin-right: 8px;\\n        }\\n        .position-indicator {\\n          width: \".concat(positionIndicatorSize, \"px;\\n          height: \").concat(positionIndicatorSize, \"px;\\n          border-radius: 50%;\\n          background: #35477d;\\n          position: absolute;\\n        }\\n        .crosshair {\\n          position: absolute;\\n          top: 0;\\n          left: 0;\\n        }\\n        .crosshair.horizontal {\\n          width: 100%;\\n          height: 1px;\\n          border-top: 1px dashed #35477d;\\n        }\\n        .crosshair.vertical {\\n          height: 100%;\\n          width: 1px;\\n          border-left: 1px dashed #35477d;\\n        }\\n        .no-tooltip {\\n          position: absolute;\\n          left: 50%;\\n          top: 50%;\\n          transform: translate(-50%, -50%);\\n        }\\n        .z-index-bummer {\\n          position: absolute;\\n          right: 12%;\\n          bottom: 20%;\\n          max-width: 190px;\\n          z-index: 2000;\\n          background: rgba(255, 255, 255, 0.8);\\n          color: #35477d;\\n          border-radius: 8px;\\n          padding: 16px;\\n          line-height: 1.2em;\\n        }\\n      \")));\n}\n\n_s(Example, \"Rm9v8hG6+D6VtDorZPPWOeFYU+E=\", false, function () {\n  return [_visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"useTooltipInPortal\"], _visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"useTooltip\"]];\n});\n\n_c = Example;\n\ntry {\n  // @ts-ignore\n  Example.displayName = \"Example\"; // @ts-ignore\n\n  Example.__docgenInfo = {\n    \"description\": \"\",\n    \"displayName\": \"Example\",\n    \"props\": {\n      \"width\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"width\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"number\"\n        }\n      },\n      \"height\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"height\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"number\"\n        }\n      },\n      \"showControls\": {\n        \"defaultValue\": {\n          value: true\n        },\n        \"description\": \"\",\n        \"name\": \"showControls\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"boolean | undefined\"\n        }\n      }\n    }\n  }; // @ts-ignore\n\n  if (typeof STORYBOOK_REACT_CLASSES !== \"undefined\") // @ts-ignore\n    STORYBOOK_REACT_CLASSES[\"src/sandboxes/visx-tooltip/Example.tsx#Example\"] = {\n      docgenInfo: Example.__docgenInfo,\n      name: \"Example\",\n      path: \"src/sandboxes/visx-tooltip/Example.tsx#Example\"\n    };\n} catch (__react_docgen_typescript_loader_error) {}\n\nvar _c;\n\n$RefreshReg$(_c, \"Example\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhbmRib3hlcy92aXN4LXRvb2x0aXAvRXhhbXBsZS50c3g/OWYyOCJdLCJuYW1lcyI6WyJwb3NpdGlvbkluZGljYXRvclNpemUiLCJ0b29sdGlwU3R5bGVzIiwiZGVmYXVsdFN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiRXhhbXBsZSIsInNob3dDb250cm9scyIsInVzZVN0YXRlIiwidG9vbHRpcFNob3VsZERldGVjdEJvdW5kcyIsInNldFRvb2x0aXBTaG91bGREZXRlY3RCb3VuZHMiLCJyZW5kZXJUb29sdGlwSW5Qb3J0YWwiLCJzZXRSZW5kZXJUb29sdGlwSW5Qb3J0YWwiLCJ1c2VUb29sdGlwSW5Qb3J0YWwiLCJzY3JvbGwiLCJkZXRlY3RCb3VuZHMiLCJjb250YWluZXJSZWYiLCJjb250YWluZXJCb3VuZHMiLCJUb29sdGlwSW5Qb3J0YWwiLCJ1c2VUb29sdGlwIiwidG9vbHRpcE9wZW4iLCJ0b29sdGlwTGVmdCIsInRvb2x0aXBUb3AiLCJ0b29sdGlwRGF0YSIsInNob3dUb29sdGlwIiwiaGlkZVRvb2x0aXAiLCJoYW5kbGVNb3VzZU1vdmUiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiY29udGFpbmVyWCIsImNsaWVudFgiLCJsZWZ0IiwiY29udGFpbmVyWSIsImNsaWVudFkiLCJ0b3AiLCJUb29sdGlwQ29tcG9uZW50IiwiVG9vbHRpcFdpdGhCb3VuZHMiLCJUb29sdGlwIiwidHJhbnNmb3JtIiwiTWF0aCIsInJhbmRvbSIsInpJbmRleCIsInRvRml4ZWQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGlzcGxheU5hbWUiLCJfX2RvY2dlbkluZm8iLCJ2YWx1ZSIsIlNUT1JZQk9PS19SRUFDVF9DTEFTU0VTIiwiZG9jZ2VuSW5mbyIsIm5hbWUiLCJwYXRoIiwiX19yZWFjdF9kb2NnZW5fdHlwZXNjcmlwdF9sb2FkZXJfZXJyb3IiXSwibWFwcGlu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RCxDQVVBLE9BQU9DLHNDQUFQLEVBQStDLENBQUciLCJmaWxlIjoiLi9zcmMvc2FuZGJveGVzL3Zpc3gtdG9vbHRpcC9FeGFtcGxlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBUb29sdGlwLFxuICBUb29sdGlwV2l0aEJvdW5kcyxcbiAgdXNlVG9vbHRpcCxcbiAgdXNlVG9vbHRpcEluUG9ydGFsLFxuICBkZWZhdWx0U3R5bGVzLFxufSBmcm9tICdAdmlzeC90b29sdGlwJztcblxuZXhwb3J0IHR5cGUgVG9vbHRpcFByb3BzID0ge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgc2hvd0NvbnRyb2xzPzogYm9vbGVhbjtcbn07XG5cbnR5cGUgVG9vbHRpcERhdGEgPSBzdHJpbmc7XG5cbmNvbnN0IHBvc2l0aW9uSW5kaWNhdG9yU2l6ZSA9IDg7XG5cbmNvbnN0IHRvb2x0aXBTdHlsZXMgPSB7XG4gIC4uLmRlZmF1bHRTdHlsZXMsXG4gIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTMsNzEsMTI1LDAuOCknLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgd2lkdGg6IDE1MixcbiAgaGVpZ2h0OiA3MixcbiAgcGFkZGluZzogMTIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlKHsgd2lkdGgsIGhlaWdodCwgc2hvd0NvbnRyb2xzID0gdHJ1ZSB9OiBUb29sdGlwUHJvcHMpIHtcbiAgY29uc3QgW3Rvb2x0aXBTaG91bGREZXRlY3RCb3VuZHMsIHNldFRvb2x0aXBTaG91bGREZXRlY3RCb3VuZHNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtyZW5kZXJUb29sdGlwSW5Qb3J0YWwsIHNldFJlbmRlclRvb2x0aXBJblBvcnRhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBjb250YWluZXJSZWYsIGNvbnRhaW5lckJvdW5kcywgVG9vbHRpcEluUG9ydGFsIH0gPSB1c2VUb29sdGlwSW5Qb3J0YWwoe1xuICAgIHNjcm9sbDogdHJ1ZSxcbiAgICBkZXRlY3RCb3VuZHM6IHRvb2x0aXBTaG91bGREZXRlY3RCb3VuZHMsXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBzaG93VG9vbHRpcCxcbiAgICBoaWRlVG9vbHRpcCxcbiAgICB0b29sdGlwT3BlbixcbiAgICB0b29sdGlwRGF0YSxcbiAgICB0b29sdGlwTGVmdCA9IDAsXG4gICAgdG9vbHRpcFRvcCA9IDAsXG4gIH0gPSB1c2VUb29sdGlwPFRvb2x0aXBEYXRhPih7XG4gICAgLy8gaW5pdGlhbCB0b29sdGlwIHN0YXRlXG4gICAgdG9vbHRpcE9wZW46IHRydWUsXG4gICAgdG9vbHRpcExlZnQ6IHdpZHRoIC8gMyxcbiAgICB0b29sdGlwVG9wOiBoZWlnaHQgLyAzLFxuICAgIHRvb2x0aXBEYXRhOiAnTW92ZSBtZSB3aXRoIHlvdXIgbW91c2Ugb3IgZmluZ2VyJyxcbiAgfSk7XG5cbiAgLy8gZXZlbnQgaGFuZGxlcnNcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuVG91Y2hFdmVudCkgPT4ge1xuICAgICAgLy8gY29vcmRpbmF0ZXMgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBjb250YWluZXIgaW4gd2hpY2ggVG9vbHRpcCBpcyByZW5kZXJlZFxuICAgICAgY29uc3QgY29udGFpbmVyWCA9ICgnY2xpZW50WCcgaW4gZXZlbnQgPyBldmVudC5jbGllbnRYIDogMCkgLSBjb250YWluZXJCb3VuZHMubGVmdDtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclkgPSAoJ2NsaWVudFknIGluIGV2ZW50ID8gZXZlbnQuY2xpZW50WSA6IDApIC0gY29udGFpbmVyQm91bmRzLnRvcDtcblxuICAgICAgc2hvd1Rvb2x0aXAoe1xuICAgICAgICB0b29sdGlwTGVmdDogY29udGFpbmVyWCxcbiAgICAgICAgdG9vbHRpcFRvcDogY29udGFpbmVyWSxcbiAgICAgICAgdG9vbHRpcERhdGE6IHRvb2x0aXBTaG91bGREZXRlY3RCb3VuZHNcbiAgICAgICAgICA/ICdJIGRldGVjdCBteSBjb250YWluZXIgYm91bmRhcnknXG4gICAgICAgICAgOiAnSSB3aWxsIGdldCBjbGlwcGVkIGJ5IG15IGNvbnRhaW5lcicsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtzaG93VG9vbHRpcCwgdG9vbHRpcFNob3VsZERldGVjdEJvdW5kcywgY29udGFpbmVyQm91bmRzXSxcbiAgKTtcblxuICBjb25zdCBUb29sdGlwQ29tcG9uZW50ID0gcmVuZGVyVG9vbHRpcEluUG9ydGFsXG4gICAgPyBUb29sdGlwSW5Qb3J0YWxcbiAgICA6IHRvb2x0aXBTaG91bGREZXRlY3RCb3VuZHNcbiAgICA/IFRvb2x0aXBXaXRoQm91bmRzXG4gICAgOiBUb29sdGlwO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAtZXhhbXBsZVwiXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX1cbiAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgICAgb25Ub3VjaE1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgID5cbiAgICAgICAge3Rvb2x0aXBPcGVuID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLWluZGljYXRvclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dG9vbHRpcExlZnQgLSBwb3NpdGlvbkluZGljYXRvclNpemUgLyAyfXB4LCAke3Rvb2x0aXBUb3AgLVxuICAgICAgICAgICAgICAgICAgcG9zaXRpb25JbmRpY2F0b3JTaXplIC8gMn1weClgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Jvc3NoYWlyIGhvcml6b250YWxcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7dG9vbHRpcFRvcH1weClgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcm9zc2hhaXIgdmVydGljYWxcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dG9vbHRpcExlZnR9cHgpYCB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUb29sdGlwQ29tcG9uZW50XG4gICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX0gLy8gbmVlZGVkIGZvciBib3VuZHMgdG8gdXBkYXRlIGNvcnJlY3RseVxuICAgICAgICAgICAgICBsZWZ0PXt0b29sdGlwTGVmdH1cbiAgICAgICAgICAgICAgdG9wPXt0b29sdGlwVG9wfVxuICAgICAgICAgICAgICBzdHlsZT17cmVuZGVyVG9vbHRpcEluUG9ydGFsID8gdG9vbHRpcFN0eWxlcyA6IHsgLi4udG9vbHRpcFN0eWxlcywgekluZGV4OiA5IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0b29sdGlwRGF0YX1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8c3Ryb25nPmxlZnQ8L3N0cm9uZz4ge3Rvb2x0aXBMZWZ0Py50b0ZpeGVkKDApfXB4Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgIDxzdHJvbmc+dG9wPC9zdHJvbmc+IHt0b29sdGlwVG9wPy50b0ZpeGVkKDApfXB4XG4gICAgICAgICAgICA8L1Rvb2x0aXBDb21wb25lbnQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby10b29sdGlwXCI+TW92ZSBvciB0b3VjaCB0aGUgY2FudmFzIHRvIHNlZSB0aGUgdG9vbHRpcDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotaW5kZXgtYnVtbWVyXCI+XG4gICAgICAgICAgSSBoYXZlIGFuIGFubm95aW5nIHotaW5kZXguIFRyeSZuYnNwO1xuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17cmVuZGVyVG9vbHRpcEluUG9ydGFsfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBpZiByZW5kZXJlZCBpbiBjbGlja2FibGUgY29udGFpbmVyLCBkb24ndCB0cmlnZ2VyIHRoYXQgZXZlbnRcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHNldFJlbmRlclRvb2x0aXBJblBvcnRhbCghcmVuZGVyVG9vbHRpcEluUG9ydGFsKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAmbmJzcDtyZW5kZXJpbmcgaW4gUG9ydGFsXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cInlheVwiPlxuICAgICAgICAgICAg8J+ls1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93Q29udHJvbHMgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXAtY29udHJvbHNcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dG9vbHRpcFNob3VsZERldGVjdEJvdW5kc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFRvb2x0aXBTaG91bGREZXRlY3RCb3VuZHMoIXRvb2x0aXBTaG91bGREZXRlY3RCb3VuZHMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICZuYnNwO1Rvb2x0aXAgd2l0aCBib3VuZGFyeSBkZXRlY3Rpb25cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoaWRlVG9vbHRpcCgpfT5IaWRlIHRvb2x0aXA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlPntgXG4gICAgICAgIC50b29sdGlwLWV4YW1wbGUge1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2YzViN2IsICNjMDZjODQsICNmNjcyODApO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50b29sdGlwLWNvbnRyb2xzIGxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBvc2l0aW9uLWluZGljYXRvciB7XG4gICAgICAgICAgd2lkdGg6ICR7cG9zaXRpb25JbmRpY2F0b3JTaXplfXB4O1xuICAgICAgICAgIGhlaWdodDogJHtwb3NpdGlvbkluZGljYXRvclNpemV9cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzNTQ3N2Q7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIC5jcm9zc2hhaXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY3Jvc3NoYWlyLmhvcml6b250YWwge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzM1NDc3ZDtcbiAgICAgICAgfVxuICAgICAgICAuY3Jvc3NoYWlyLnZlcnRpY2FsIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjMzU0NzdkO1xuICAgICAgICB9XG4gICAgICAgIC5uby10b29sdGlwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC56LWluZGV4LWJ1bW1lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAxMiU7XG4gICAgICAgICAgYm90dG9tOiAyMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxOTBweDtcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICBjb2xvcjogIzM1NDc3ZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbnRyeSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEV4YW1wbGUuZGlzcGxheU5hbWUgPSBcIkV4YW1wbGVcIjtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgRXhhbXBsZS5fX2RvY2dlbkluZm8gPSB7IFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJkaXNwbGF5TmFtZVwiOiBcIkV4YW1wbGVcIiwgXCJwcm9wc1wiOiB7IFwid2lkdGhcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcIndpZHRoXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwibnVtYmVyXCIgfSB9LCBcImhlaWdodFwiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiaGVpZ2h0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwibnVtYmVyXCIgfSB9LCBcInNob3dDb250cm9sc1wiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IHsgdmFsdWU6IHRydWUgfSwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJzaG93Q29udHJvbHNcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwiYm9vbGVhbiB8IHVuZGVmaW5lZFwiIH0gfSB9IH07XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0eXBlb2YgU1RPUllCT09LX1JFQUNUX0NMQVNTRVMgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgU1RPUllCT09LX1JFQUNUX0NMQVNTRVNbXCJzcmMvc2FuZGJveGVzL3Zpc3gtdG9vbHRpcC9FeGFtcGxlLnRzeCNFeGFtcGxlXCJdID0geyBkb2NnZW5JbmZvOiBFeGFtcGxlLl9fZG9jZ2VuSW5mbywgbmFtZTogXCJFeGFtcGxlXCIsIHBhdGg6IFwic3JjL3NhbmRib3hlcy92aXN4LXRvb2x0aXAvRXhhbXBsZS50c3gjRXhhbXBsZVwiIH07XG59XG5jYXRjaCAoX19yZWFjdF9kb2NnZW5fdHlwZXNjcmlwdF9sb2FkZXJfZXJyb3IpIHsgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sandboxes/visx-tooltip/Example.tsx\n");

/***/ })

})