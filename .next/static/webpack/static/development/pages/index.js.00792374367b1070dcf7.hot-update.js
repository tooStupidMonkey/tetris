webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/var/www/project1/tetris/tetris/pages/index.js";



var _fieldWidth = 11;
var _fieldHeight = 21;
var _incatives = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 210, 310, 410, 510, 610, 710, 810, 910, 110, 200];
var _bottomInactive = [201, 202, 203, 204, 205, 206, 207, 208, 209, 2010];

var Block = function Block(_ref) {
  var index = _ref.index,
      active = _ref.active,
      number = _ref.number,
      figure = _ref.figure,
      incative = _ref.incative;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "block \n            block-".concat(index, " \n            ").concat(active ? 'filled' : '', "\n            ").concat(incative ? 'inactive' : '', "\n        "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, number);
};

var Line = function Line(_ref2) {
  var index = _ref2.index,
      line = _ref2.line;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "line line-".concat(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, line);
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      activeFigureIndex: 0,
      bottomStructure: [],
      active: [4, 5, 6],
      currentFigure: 0,
      allowedFigures: [[[4, 5, 6], [5, 15, 25]], [[14, 15, 16, 25], [5, 14, 15, 16], [5, 25, 15, 16], [5, 15, 25, 14]], [[4, 5, 6, 14, 16, 25, 24, 26, 15]]]
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_moveLeft", function () {
      var _this$state = _this.state,
          allowedFigures = _this$state.allowedFigures,
          activeFigureIndex = _this$state.activeFigureIndex,
          currentFigure = _this$state.currentFigure;
      var newAllowedFigures = allowedFigures;
      allowedFigures[currentFigure][activeFigureIndex] = allowedFigures[currentFigure][activeFigureIndex].map(function (item) {
        return item - 1;
      });
      console.log(newAllowedFigures);

      if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.intersection(newAllowedFigures[currentFigure][activeFigureIndex], _incatives).length > 0) {
        return false;
      }

      _this.setState({
        allowedFigures: newAllowedFigures
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_moveDown", function () {
      var active = _this.state.active;
      var newActive = active.map(function (item) {
        return item + 10;
      });

      if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.intersection(newActive, _bottomInactive).length > 0) {
        bottomStructure.push(active);
        return false;
      }

      _this.setState({
        active: newActive
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_moveRight", function () {
      var active = _this.state.active;
      var newActive = active.map(function (item) {
        return item + 1;
      });

      if (lodash__WEBPACK_IMPORTED_MODULE_8___default.a.intersection(newActive, _incatives).length > 0) {
        return false;
      }

      _this.setState({
        active: newActive
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_rotateFigure", function () {
      var _this$state2 = _this.state,
          currentFigure = _this$state2.currentFigure,
          activeFigureIndex = _this$state2.activeFigureIndex,
          allowedFigures = _this$state2.allowedFigures;
      var maxIndex = allowedFigures[currentFigure].length - 1;
      var newIndex = activeFigureIndex + 1 <= maxIndex ? activeFigureIndex + 1 : 0;

      _this.setState({
        activeFigureIndex: newIndex,
        active: allowedFigures[currentFigure][newIndex]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_changeFigure", function () {
      var allowedFigures = _this.state.allowedFigures;

      _this.setState({
        currentFigure: Math.floor(Math.random() * allowedFigures.length),
        activeFigureIndex: 0
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          bottomStructure = _this$state3.bottomStructure,
          allowedFigures = _this$state3.allowedFigures,
          activeFigureIndex = _this$state3.activeFigureIndex,
          currentFigure = _this$state3.currentFigure;
      var field = [];

      for (var i = 0; i < _fieldHeight; i++) {
        var line = [];

        for (var j = 0; j < _fieldWidth; j++) {
          var number = Number(String(i) + j);

          var incative = _incatives.includes(number);

          line.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Block, {
            key: j,
            incative: incative,
            index: j,
            active: allowedFigures[currentFigure][activeFigureIndex].includes(number) || lodash__WEBPACK_IMPORTED_MODULE_8___default.a.flatten(bottomStructure).includes(number),
            number: number,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          }));
        }

        field.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Line, {
          key: i,
          line: line,
          index: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._moveDown();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Down"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._moveLeft();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Left"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._moveRight();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Right"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._rotateFigure();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Rotate"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._changeFigure();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Change")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_9___default.a.field,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, field));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.00792374367b1070dcf7.hot-update.js.map