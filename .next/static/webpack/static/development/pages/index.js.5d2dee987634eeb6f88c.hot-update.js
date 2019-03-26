webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "/var/www/project1/tetris/tetris/pages/index.js";



var _fieldWidth = 11;
var _fieldHeight = 21;
var _incatives = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 310, 410, 510, 610, 710, 810, 910, 110, 200, 1010, 1110, 1210, 1310, 1410, 1510, 1610, 1710, 1810, 1910, 2010];
var _incativeBottom = [200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 2010];
var _allowedFigures = [[[4, 5, 6], [5, 15, 25]], [[14, 15, 16, 25], [5, 14, 15, 16], [5, 25, 15, 16], [5, 15, 25, 14]], [[4, 5, 6, 14, 16, 25, 24, 26, 15]]];

var Block = function Block(_ref) {
  var index = _ref.index,
      active = _ref.active,
      incative = _ref.incative,
      number = _ref.number;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "block \n            block-".concat(index, " \n            ").concat(active ? 'filled' : '', "\n            ").concat(incative ? 'inactive' : '', "\n        "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, number);
};

var Line = function Line(_ref2) {
  var index = _ref2.index,
      line = _ref2.line;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "line line-".concat(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, line);
};

var _removeFirstAndlastElement = function _removeFirstAndlastElement(array) {
  array.shift();
  array.pop();
  return array;
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      activeFigureIndex: 0,
      canPlay: true,
      score: 0,
      bottomStructure: [],
      active: [4, 5, 6],
      autoMove: null,
      currentFigure: 0,
      filledLineMarker: [],
      allowedFigures: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_initGame", function () {
      _this._changeFigure();

      _this.setState({
        autoMove: setInterval(function () {
          return _this._moveDown();
        }, 1000)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_destractGame", function () {
      var autoMove = _this.state.autoMove;
      clearInterval(autoMove);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_moveLeft", function () {
      var _this$state = _this.state,
          allowedFigures = _this$state.allowedFigures,
          activeFigureIndex = _this$state.activeFigureIndex;

      var newAllowedFigures = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allowedFigures);

      newAllowedFigures = newAllowedFigures.map(function (item) {
        return item.map(function (figure) {
          return figure - 1;
        });
      });

      if (lodash__WEBPACK_IMPORTED_MODULE_9___default.a.intersection(newAllowedFigures[activeFigureIndex], _incatives).length > 0) {
        return false;
      }

      _this.setState({
        allowedFigures: newAllowedFigures,
        active: newAllowedFigures[activeFigureIndex]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_moveRight", function () {
      var _this$state2 = _this.state,
          activeFigureIndex = _this$state2.activeFigureIndex,
          allowedFigures = _this$state2.allowedFigures;
      var newAllowedFigures = allowedFigures;
      newAllowedFigures = newAllowedFigures.map(function (item) {
        return item.map(function (figure) {
          return figure + 1;
        });
      });

      if (lodash__WEBPACK_IMPORTED_MODULE_9___default.a.intersection(newAllowedFigures[activeFigureIndex], _incatives).length > 0) {
        return false;
      }

      _this.setState({
        allowedFigures: newAllowedFigures,
        active: newAllowedFigures[activeFigureIndex]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_moveDown", function () {
      var _this$state3 = _this.state,
          activeFigureIndex = _this$state3.activeFigureIndex,
          allowedFigures = _this$state3.allowedFigures,
          bottomStructure = _this$state3.bottomStructure;

      var newAllowedFigures = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allowedFigures);

      newAllowedFigures = newAllowedFigures.map(function (item) {
        return item.map(function (figure) {
          return figure + 10;
        });
      });

      if (lodash__WEBPACK_IMPORTED_MODULE_9___default.a.intersection(newAllowedFigures[activeFigureIndex], _incativeBottom).length > 0 || lodash__WEBPACK_IMPORTED_MODULE_9___default.a.intersection(newAllowedFigures[activeFigureIndex], bottomStructure).length > 0) {
        var newBottomStructure = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bottomStructure);

        newBottomStructure.push(newAllowedFigures[activeFigureIndex].map(function (figure) {
          return figure - 10;
        }));

        _this.setState({
          bottomStructure: lodash__WEBPACK_IMPORTED_MODULE_9___default.a.uniq(newBottomStructure.flat())
        });

        _this._checkLine();

        _this._changeFigure();

        _this._checkProgress();

        return false;
      }

      _this.setState({
        allowedFigures: newAllowedFigures,
        active: newAllowedFigures[activeFigureIndex]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_rotateFigure", function () {
      var _this$state4 = _this.state,
          activeFigureIndex = _this$state4.activeFigureIndex,
          allowedFigures = _this$state4.allowedFigures;
      var maxIndex = allowedFigures.length - 1;
      var newIndex = activeFigureIndex + 1 <= maxIndex ? activeFigureIndex + 1 : 0;

      _this.setState({
        activeFigureIndex: newIndex,
        active: allowedFigures[newIndex]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_changeFigure", function () {
      var currentFigure = Math.floor(Math.random() * _allowedFigures.length);
      var newAllowedFigures = _allowedFigures[currentFigure];

      _this.setState({
        activeFigureIndex: 0,
        allowedFigures: newAllowedFigures,
        active: newAllowedFigures[0]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_checkLine", function () {
      var _this$state5 = _this.state,
          filledLineMarker = _this$state5.filledLineMarker,
          bottomStructure = _this$state5.bottomStructure,
          score = _this$state5.score;
      if (!bottomStructure.length) return false;

      var newBottomStructure = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bottomStructure);

      var lineCounter = 0;
      var lineForMoveDown = [];
      filledLineMarker.map(function (item) {
        if (item.every(function (elem) {
          return newBottomStructure.includes(elem);
        })) {
          ++lineCounter;
          lineForMoveDown.push(Math.min.apply(null, item));

          var newBottomStructureFiltered = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newBottomStructure.filter(function (el) {
            return !item.includes(el);
          }));

          _this.setState({
            bottomStructure: newBottomStructureFiltered
          });
        }
      });

      if (lineCounter) {
        var lineForCheck = 0;
        var startForDown = Math.min.apply(null, lineForMoveDown);
        filledLineMarker.map(function (item, k) {
          if (item.includes(startForDown)) {
            lineForCheck = k;
          }
        });

        var moveLinesDown = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bottomStructure);

        var markerLine = filledLineMarker[lineForCheck];
        moveLinesDown = moveLinesDown.map(function (block) {
          console.log(Math.min.apply(null, markerLine), block);

          if (block < Math.min.apply(null, markerLine)) {
            block + lineCounter * 10;
          }
        });

        _this.setState({
          bottomStructure: moveLinesDown
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_checkProgress", function () {
      var _this$state6 = _this.state,
          filledLineMarker = _this$state6.filledLineMarker,
          bottomStructure = _this$state6.bottomStructure;
      var firstLine = filledLineMarker[0];

      if (lodash__WEBPACK_IMPORTED_MODULE_9___default.a.intersection(bottomStructure, firstLine).length) {
        _this.setState({
          canPlay: false
        });

        _this._destractGame();

        alert('GAME over bro');
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var filledLineMarker = [];

      for (var i = 0; i < _fieldHeight; i++) {
        var line = new Array();

        for (var j = 0; j < _fieldWidth; j++) {
          line.push(Number(String(i) + j));
        }

        filledLineMarker.push(_removeFirstAndlastElement(line));
      }

      this.setState({
        filledLineMarker: filledLineMarker
      }); //this._initGame()
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(props, state) {//this._checkLine()
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state7 = this.state,
          bottomStructure = _this$state7.bottomStructure,
          active = _this$state7.active,
          canPlay = _this$state7.canPlay,
          score = _this$state7.score;
      var field = [];

      for (var i = 0; i < _fieldHeight; i++) {
        var line = [];

        for (var j = 0; j < _fieldWidth; j++) {
          var number = Number(String(i) + j);

          var incative = _incatives.includes(number) || _incativeBottom.includes(number);

          line.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Block, {
            key: j,
            incative: incative,
            index: j,
            active: active.includes(number) || bottomStructure.includes(number),
            number: number,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          }));
        }

        field.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Line, {
          key: i,
          line: line,
          index: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._moveDown();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Down"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._moveLeft();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "Left"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._moveRight();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "Right"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._rotateFigure();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Rotate"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._changeFigure();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Change"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._checkLine();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Check"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2._checkProgress();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Check progress")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Score: ", score), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_10___default.a.field,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, field));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5d2dee987634eeb6f88c.hot-update.js.map