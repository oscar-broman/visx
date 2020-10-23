webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/sandboxes/visx-tooltip/Example.tsx":
/*!************************************************!*\
  !*** ./src/sandboxes/visx-tooltip/Example.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Example; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _visx_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @visx/tooltip */ \"../visx-tooltip/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/harry/dev/visx/packages/visx-demo/src/sandboxes/visx-tooltip/Example.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar positionIndicatorSize = 8;\n\nvar tooltipStyles = _objectSpread(_objectSpread({}, _visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"defaultStyles\"]), {}, {\n  backgroundColor: 'rgba(53,71,125,0.8)',\n  color: 'white',\n  width: 152,\n  height: 72,\n  padding: 12\n});\n\nfunction Example(_ref) {\n  _s();\n\n  var width = _ref.width,\n      height = _ref.height,\n      _ref$showControls = _ref.showControls,\n      showControls = _ref$showControls === void 0 ? true : _ref$showControls;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      tooltipShouldDetectBounds = _useState[0],\n      setTooltipShouldDetectBounds = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      renderTooltipInPortal = _useState2[0],\n      setRenderTooltipInPortal = _useState2[1];\n\n  var _useTooltipInPortal = Object(_visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"useTooltipInPortal\"])({\n    scroll: true,\n    detectBounds: tooltipShouldDetectBounds\n  }),\n      containerRef = _useTooltipInPortal.containerRef,\n      containerBounds = _useTooltipInPortal.containerBounds,\n      TooltipInPortal = _useTooltipInPortal.TooltipInPortal;\n\n  var _useTooltip = Object(_visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"useTooltip\"])({\n    // initial tooltip state\n    tooltipOpen: true,\n    tooltipLeft: width / 3,\n    tooltipTop: height / 3,\n    tooltipData: 'Move me with your mouse or finger'\n  }),\n      showTooltip = _useTooltip.showTooltip,\n      hideTooltip = _useTooltip.hideTooltip,\n      tooltipOpen = _useTooltip.tooltipOpen,\n      tooltipData = _useTooltip.tooltipData,\n      _useTooltip$tooltipLe = _useTooltip.tooltipLeft,\n      tooltipLeft = _useTooltip$tooltipLe === void 0 ? 0 : _useTooltip$tooltipLe,\n      _useTooltip$tooltipTo = _useTooltip.tooltipTop,\n      tooltipTop = _useTooltip$tooltipTo === void 0 ? 0 : _useTooltip$tooltipTo; // event handlers\n\n\n  var handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (event) {\n    // coordinates should be relative to the container in which Tooltip is rendered\n    var containerX = ('clientX' in event ? event.clientX : 0) - containerBounds.left;\n    var containerY = ('clientY' in event ? event.clientY : 0) - containerBounds.top;\n    showTooltip({\n      tooltipLeft: containerX,\n      tooltipTop: containerY,\n      tooltipData: tooltipShouldDetectBounds ? 'I detect my container boundary' : 'I will get clipped by my container'\n    });\n  }, [showTooltip, tooltipShouldDetectBounds, containerBounds]);\n  var TooltipComponent = renderTooltipInPortal ? TooltipInPortal : tooltipShouldDetectBounds ? _visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"TooltipWithBounds\"] : _visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    ref: containerRef,\n    className: \"tooltip-example\",\n    style: {\n      width: width,\n      height: height\n    },\n    onMouseMove: handleMouseMove,\n    onTouchMove: handleMouseMove,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, tooltipOpen ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"position-indicator\",\n    style: {\n      transform: \"translate(\".concat(tooltipLeft - positionIndicatorSize / 2, \"px, \").concat(tooltipTop - positionIndicatorSize / 2, \"px)\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"crosshair horizontal\",\n    style: {\n      transform: \"translateY(\".concat(tooltipTop, \"px)\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"crosshair vertical\",\n    style: {\n      transform: \"translateX(\".concat(tooltipLeft, \"px)\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }), __jsx(TooltipComponent, {\n    key: Math.random() // needed for bounds to update correctly\n    ,\n    left: tooltipLeft,\n    top: tooltipTop,\n    style: tooltipStyles,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, tooltipData, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }), __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 15\n    }\n  }, \"left\"), \" \", tooltipLeft === null || tooltipLeft === void 0 ? void 0 : tooltipLeft.toFixed(0), \"px\\xA0\\xA0\", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  }, \"top\"), \" \", tooltipTop === null || tooltipTop === void 0 ? void 0 : tooltipTop.toFixed(0), \"px\")) : __jsx(\"div\", {\n    className: \"no-tooltip\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }, \"Move or touch the canvas to see the tooltip\"), __jsx(\"div\", {\n    className: \"z-index-bummer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, \"I have an annoying z-index. Try\\xA0\", __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    defaultChecked: renderTooltipInPortal,\n    onClick: function onClick(e) {\n      // if rendered in clickable container, don't trigger that event\n      e.stopPropagation();\n      setRenderTooltipInPortal(!renderTooltipInPortal);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }), \"\\xA0rendering in Portal\"), \"\\xA0\", __jsx(\"span\", {\n    role: \"img\",\n    \"aria-label\": \"yay\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  }, \"\\uD83E\\uDD73\"))), showControls && __jsx(\"div\", {\n    className: \"tooltip-controls\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    checked: tooltipShouldDetectBounds,\n    onChange: function onChange() {\n      return setTooltipShouldDetectBounds(!tooltipShouldDetectBounds);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }), \"\\xA0Tooltip with boundary detection\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return hideTooltip();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 11\n    }\n  }, \"Hide tooltip\")), __jsx(\"style\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 7\n    }\n  }, \"\\n        :global(.visx-tooltip) {\\n          z-index: 9;\\n        }\\n        .tooltip-example {\\n          z-index: 0;\\n          position: relative;\\n          overflow: hidden;\\n          border-radius: 16px;\\n          background: linear-gradient(45deg, #6c5b7b, #c06c84, #f67280);\\n          font-size: 14px;\\n          color: white;\\n          width: 100%;\\n          height: 100%;\\n        }\\n        .tooltip-controls label {\\n          font-size: 14px;\\n          margin-right: 8px;\\n        }\\n        .position-indicator {\\n          width: \".concat(positionIndicatorSize, \"px;\\n          height: \").concat(positionIndicatorSize, \"px;\\n          border-radius: 50%;\\n          background: #35477d;\\n          position: absolute;\\n        }\\n        .crosshair {\\n          position: absolute;\\n          top: 0;\\n          left: 0;\\n        }\\n        .crosshair.horizontal {\\n          width: 100%;\\n          height: 1px;\\n          border-top: 1px dashed #35477d;\\n        }\\n        .crosshair.vertical {\\n          height: 100%;\\n          width: 1px;\\n          border-left: 1px dashed #35477d;\\n        }\\n        .no-tooltip {\\n          position: absolute;\\n          left: 50%;\\n          top: 50%;\\n          transform: translate(-50%, -50%);\\n        }\\n        .z-index-bummer {\\n          position: absolute;\\n          right: 12%;\\n          bottom: 20%;\\n          max-width: 190px;\\n          z-index: 2000;\\n          background: rgba(255, 255, 255, 0.8);\\n          color: #35477d;\\n          border-radius: 8px;\\n          padding: 16px;\\n          line-height: 1.2em;\\n        }\\n      \")));\n}\n\n_s(Example, \"Rm9v8hG6+D6VtDorZPPWOeFYU+E=\", false, function () {\n  return [_visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"useTooltipInPortal\"], _visx_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"useTooltip\"]];\n});\n\n_c = Example;\n\ntry {\n  // @ts-ignore\n  Example.displayName = \"Example\"; // @ts-ignore\n\n  Example.__docgenInfo = {\n    \"description\": \"\",\n    \"displayName\": \"Example\",\n    \"props\": {\n      \"width\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"width\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"number\"\n        }\n      },\n      \"height\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"height\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"number\"\n        }\n      },\n      \"showControls\": {\n        \"defaultValue\": {\n          value: true\n        },\n        \"description\": \"\",\n        \"name\": \"showControls\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"boolean | undefined\"\n        }\n      }\n    }\n  }; // @ts-ignore\n\n  if (typeof STORYBOOK_REACT_CLASSES !== \"undefined\") // @ts-ignore\n    STORYBOOK_REACT_CLASSES[\"src/sandboxes/visx-tooltip/Example.tsx#Example\"] = {\n      docgenInfo: Example.__docgenInfo,\n      name: \"Example\",\n      path: \"src/sandboxes/visx-tooltip/Example.tsx#Example\"\n    };\n} catch (__react_docgen_typescript_loader_error) {}\n\nvar _c;\n\n$RefreshReg$(_c, \"Example\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhbmRib3hlcy92aXN4LXRvb2x0aXAvRXhhbXBsZS50c3g/OWYyOCJdLCJuYW1lcyI6WyJwb3NpdGlvbkluZGljYXRvclNpemUiLCJ0b29sdGlwU3R5bGVzIiwiZGVmYXVsdFN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiRXhhbXBsZSIsInNob3dDb250cm9scyIsInVzZVN0YXRlIiwidG9vbHRpcFNob3VsZERldGVjdEJvdW5kcyIsInNldFRvb2x0aXBTaG91bGREZXRlY3RCb3VuZHMiLCJyZW5kZXJUb29sdGlwSW5Qb3J0YWwiLCJzZXRSZW5kZXJUb29sdGlwSW5Qb3J0YWwiLCJ1c2VUb29sdGlwSW5Qb3J0YWwiLCJzY3JvbGwiLCJkZXRlY3RCb3VuZHMiLCJjb250YWluZXJSZWYiLCJjb250YWluZXJCb3VuZHMiLCJUb29sdGlwSW5Qb3J0YWwiLCJ1c2VUb29sdGlwIiwidG9vbHRpcE9wZW4iLCJ0b29sdGlwTGVmdCIsInRvb2x0aXBUb3AiLCJ0b29sdGlwRGF0YSIsInNob3dUb29sdGlwIiwiaGlkZVRvb2x0aXAiLCJoYW5kbGVNb3VzZU1vdmUiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiY29udGFpbmVyWCIsImNsaWVudFgiLCJsZWZ0IiwiY29udGFpbmVyWSIsImNsaWVudFkiLCJ0b3AiLCJUb29sdGlwQ29tcG9uZW50IiwiVG9vbHRpcFdpdGhCb3VuZHMiLCJUb29sdGlwIiwidHJhbnNmb3JtIiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGlzcGxheU5hbWUiLCJfX2RvY2dlbkluZm8iLCJ2YWx1ZSIsIlNUT1JZQk9PS19SRUFDVF9DTEFTU0VTIiwiZG9jZ2VuSW5mbyIsIm5hbWUiLCJwYXRoIiwiX19yZWFjdF9kb2NnZW5fdHlwZXNjcmlwdF9sb2FkZXJfZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7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dGlwL0V4YW1wbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFRvb2x0aXAsXG4gIFRvb2x0aXBXaXRoQm91bmRzLFxuICB1c2VUb29sdGlwLFxuICB1c2VUb29sdGlwSW5Qb3J0YWwsXG4gIGRlZmF1bHRTdHlsZXMsXG59IGZyb20gJ0B2aXN4L3Rvb2x0aXAnO1xuXG5leHBvcnQgdHlwZSBUb29sdGlwUHJvcHMgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBzaG93Q29udHJvbHM/OiBib29sZWFuO1xufTtcblxudHlwZSBUb29sdGlwRGF0YSA9IHN0cmluZztcblxuY29uc3QgcG9zaXRpb25JbmRpY2F0b3JTaXplID0gODtcblxuY29uc3QgdG9vbHRpcFN0eWxlcyA9IHtcbiAgLi4uZGVmYXVsdFN0eWxlcyxcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg1Myw3MSwxMjUsMC44KScsXG4gIGNvbG9yOiAnd2hpdGUnLFxuICB3aWR0aDogMTUyLFxuICBoZWlnaHQ6IDcyLFxuICBwYWRkaW5nOiAxMixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4YW1wbGUoeyB3aWR0aCwgaGVpZ2h0LCBzaG93Q29udHJvbHMgPSB0cnVlIH06IFRvb2x0aXBQcm9wcykge1xuICBjb25zdCBbdG9vbHRpcFNob3VsZERldGVjdEJvdW5kcywgc2V0VG9vbHRpcFNob3VsZERldGVjdEJvdW5kc10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3JlbmRlclRvb2x0aXBJblBvcnRhbCwgc2V0UmVuZGVyVG9vbHRpcEluUG9ydGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IGNvbnRhaW5lclJlZiwgY29udGFpbmVyQm91bmRzLCBUb29sdGlwSW5Qb3J0YWwgfSA9IHVzZVRvb2x0aXBJblBvcnRhbCh7XG4gICAgc2Nyb2xsOiB0cnVlLFxuICAgIGRldGVjdEJvdW5kczogdG9vbHRpcFNob3VsZERldGVjdEJvdW5kcyxcbiAgfSk7XG5cbiAgY29uc3Qge1xuICAgIHNob3dUb29sdGlwLFxuICAgIGhpZGVUb29sdGlwLFxuICAgIHRvb2x0aXBPcGVuLFxuICAgIHRvb2x0aXBEYXRhLFxuICAgIHRvb2x0aXBMZWZ0ID0gMCxcbiAgICB0b29sdGlwVG9wID0gMCxcbiAgfSA9IHVzZVRvb2x0aXA8VG9vbHRpcERhdGE+KHtcbiAgICAvLyBpbml0aWFsIHRvb2x0aXAgc3RhdGVcbiAgICB0b29sdGlwT3BlbjogdHJ1ZSxcbiAgICB0b29sdGlwTGVmdDogd2lkdGggLyAzLFxuICAgIHRvb2x0aXBUb3A6IGhlaWdodCAvIDMsXG4gICAgdG9vbHRpcERhdGE6ICdNb3ZlIG1lIHdpdGggeW91ciBtb3VzZSBvciBmaW5nZXInLFxuICB9KTtcblxuICAvLyBldmVudCBoYW5kbGVyc1xuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5Ub3VjaEV2ZW50KSA9PiB7XG4gICAgICAvLyBjb29yZGluYXRlcyBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5lciBpbiB3aGljaCBUb29sdGlwIGlzIHJlbmRlcmVkXG4gICAgICBjb25zdCBjb250YWluZXJYID0gKCdjbGllbnRYJyBpbiBldmVudCA/IGV2ZW50LmNsaWVudFggOiAwKSAtIGNvbnRhaW5lckJvdW5kcy5sZWZ0O1xuICAgICAgY29uc3QgY29udGFpbmVyWSA9ICgnY2xpZW50WScgaW4gZXZlbnQgPyBldmVudC5jbGllbnRZIDogMCkgLSBjb250YWluZXJCb3VuZHMudG9wO1xuXG4gICAgICBzaG93VG9vbHRpcCh7XG4gICAgICAgIHRvb2x0aXBMZWZ0OiBjb250YWluZXJYLFxuICAgICAgICB0b29sdGlwVG9wOiBjb250YWluZXJZLFxuICAgICAgICB0b29sdGlwRGF0YTogdG9vbHRpcFNob3VsZERldGVjdEJvdW5kc1xuICAgICAgICAgID8gJ0kgZGV0ZWN0IG15IGNvbnRhaW5lciBib3VuZGFyeSdcbiAgICAgICAgICA6ICdJIHdpbGwgZ2V0IGNsaXBwZWQgYnkgbXkgY29udGFpbmVyJyxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW3Nob3dUb29sdGlwLCB0b29sdGlwU2hvdWxkRGV0ZWN0Qm91bmRzLCBjb250YWluZXJCb3VuZHNdLFxuICApO1xuXG4gIGNvbnN0IFRvb2x0aXBDb21wb25lbnQgPSByZW5kZXJUb29sdGlwSW5Qb3J0YWxcbiAgICA/IFRvb2x0aXBJblBvcnRhbFxuICAgIDogdG9vbHRpcFNob3VsZERldGVjdEJvdW5kc1xuICAgID8gVG9vbHRpcFdpdGhCb3VuZHNcbiAgICA6IFRvb2x0aXA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwidG9vbHRpcC1leGFtcGxlXCJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fVxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuICAgICAgICBvblRvdWNoTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuICAgICAgPlxuICAgICAgICB7dG9vbHRpcE9wZW4gPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24taW5kaWNhdG9yXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0b29sdGlwTGVmdCAtIHBvc2l0aW9uSW5kaWNhdG9yU2l6ZSAvIDJ9cHgsICR7dG9vbHRpcFRvcCAtXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbkluZGljYXRvclNpemUgLyAyfXB4KWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcm9zc2hhaXIgaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHt0b29sdGlwVG9wfXB4KWAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNyb3NzaGFpciB2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0b29sdGlwTGVmdH1weClgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRvb2x0aXBDb21wb25lbnRcbiAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfSAvLyBuZWVkZWQgZm9yIGJvdW5kcyB0byB1cGRhdGUgY29ycmVjdGx5XG4gICAgICAgICAgICAgIGxlZnQ9e3Rvb2x0aXBMZWZ0fVxuICAgICAgICAgICAgICB0b3A9e3Rvb2x0aXBUb3B9XG4gICAgICAgICAgICAgIHN0eWxlPXt0b29sdGlwU3R5bGVzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dG9vbHRpcERhdGF9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHN0cm9uZz5sZWZ0PC9zdHJvbmc+IHt0b29sdGlwTGVmdD8udG9GaXhlZCgwKX1weCZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICA8c3Ryb25nPnRvcDwvc3Ryb25nPiB7dG9vbHRpcFRvcD8udG9GaXhlZCgwKX1weFxuICAgICAgICAgICAgPC9Ub29sdGlwQ29tcG9uZW50PlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tdG9vbHRpcFwiPk1vdmUgb3IgdG91Y2ggdGhlIGNhbnZhcyB0byBzZWUgdGhlIHRvb2x0aXA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LWluZGV4LWJ1bW1lclwiPlxuICAgICAgICAgIEkgaGF2ZSBhbiBhbm5veWluZyB6LWluZGV4LiBUcnkmbmJzcDtcbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3JlbmRlclRvb2x0aXBJblBvcnRhbH1cbiAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaWYgcmVuZGVyZWQgaW4gY2xpY2thYmxlIGNvbnRhaW5lciwgZG9uJ3QgdHJpZ2dlciB0aGF0IGV2ZW50XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBzZXRSZW5kZXJUb29sdGlwSW5Qb3J0YWwoIXJlbmRlclRvb2x0aXBJblBvcnRhbCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgJm5ic3A7cmVuZGVyaW5nIGluIFBvcnRhbFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJ5YXlcIj5cbiAgICAgICAgICAgIPCfpbNcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd0NvbnRyb2xzICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3Rvb2x0aXBTaG91bGREZXRlY3RCb3VuZHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRUb29sdGlwU2hvdWxkRGV0ZWN0Qm91bmRzKCF0b29sdGlwU2hvdWxkRGV0ZWN0Qm91bmRzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAmbmJzcDtUb29sdGlwIHdpdGggYm91bmRhcnkgZGV0ZWN0aW9uXG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGlkZVRvb2x0aXAoKX0+SGlkZSB0b29sdGlwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxzdHlsZT57YFxuICAgICAgICA6Z2xvYmFsKC52aXN4LXRvb2x0aXApIHtcbiAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICB9XG4gICAgICAgIC50b29sdGlwLWV4YW1wbGUge1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2YzViN2IsICNjMDZjODQsICNmNjcyODApO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50b29sdGlwLWNvbnRyb2xzIGxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBvc2l0aW9uLWluZGljYXRvciB7XG4gICAgICAgICAgd2lkdGg6ICR7cG9zaXRpb25JbmRpY2F0b3JTaXplfXB4O1xuICAgICAgICAgIGhlaWdodDogJHtwb3NpdGlvbkluZGljYXRvclNpemV9cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzNTQ3N2Q7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIC5jcm9zc2hhaXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY3Jvc3NoYWlyLmhvcml6b250YWwge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzM1NDc3ZDtcbiAgICAgICAgfVxuICAgICAgICAuY3Jvc3NoYWlyLnZlcnRpY2FsIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjMzU0NzdkO1xuICAgICAgICB9XG4gICAgICAgIC5uby10b29sdGlwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC56LWluZGV4LWJ1bW1lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAxMiU7XG4gICAgICAgICAgYm90dG9tOiAyMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxOTBweDtcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICBjb2xvcjogIzM1NDc3ZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbnRyeSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEV4YW1wbGUuZGlzcGxheU5hbWUgPSBcIkV4YW1wbGVcIjtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgRXhhbXBsZS5fX2RvY2dlbkluZm8gPSB7IFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJkaXNwbGF5TmFtZVwiOiBcIkV4YW1wbGVcIiwgXCJwcm9wc1wiOiB7IFwid2lkdGhcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcIndpZHRoXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwibnVtYmVyXCIgfSB9LCBcImhlaWdodFwiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiaGVpZ2h0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwibnVtYmVyXCIgfSB9LCBcInNob3dDb250cm9sc1wiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IHsgdmFsdWU6IHRydWUgfSwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJzaG93Q29udHJvbHNcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwiYm9vbGVhbiB8IHVuZGVmaW5lZFwiIH0gfSB9IH07XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0eXBlb2YgU1RPUllCT09LX1JFQUNUX0NMQVNTRVMgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgU1RPUllCT09LX1JFQUNUX0NMQVNTRVNbXCJzcmMvc2FuZGJveGVzL3Zpc3gtdG9vbHRpcC9FeGFtcGxlLnRzeCNFeGFtcGxlXCJdID0geyBkb2NnZW5JbmZvOiBFeGFtcGxlLl9fZG9jZ2VuSW5mbywgbmFtZTogXCJFeGFtcGxlXCIsIHBhdGg6IFwic3JjL3NhbmRib3hlcy92aXN4LXRvb2x0aXAvRXhhbXBsZS50c3gjRXhhbXBsZVwiIH07XG59XG5jYXRjaCAoX19yZWFjdF9kb2NnZW5fdHlwZXNjcmlwdF9sb2FkZXJfZXJyb3IpIHsgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sandboxes/visx-tooltip/Example.tsx\n");

/***/ })

})