webpackJsonp([0],{

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1006);


/***/ }),

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_drawer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_es_style__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_es_menu_style__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_antd_es_select_style__ = __webpack_require__(1007);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_drawer_assets_index_less__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rc_drawer_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rc_drawer_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_index_less__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__assets_index_less__);




/* eslint-disable no-console,react/no-multi-comp */












var SubMenu = __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].SubMenu;
var MenuItemGroup = __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].ItemGroup;
var Option = __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Select */].Option;

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      placement: 'right',
      childShow: true,
      width: '20vw',
      height: null
    }, _this.onChange = function (value) {
      _this.setState({
        placement: value,
        width: value === 'right' || value === 'left' ? '20vw' : null,
        height: value === 'right' || value === 'left' ? null : '20vh',
        childShow: false // 删除子级，删除切换时的过渡动画。。。
      }, function () {
        _this.setState({
          childShow: true
        });
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        this.state.childShow && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_rc_drawer__["a" /* default */],
          { placement: this.state.placement, width: this.state.width, hieght: this.state.height },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */],
            {
              defaultSelectedKeys: ['1'],
              defaultOpenKeys: ['sub1'],
              mode: 'inline'
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub1',
                title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd__["b" /* Icon */], { type: 'mail' }),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'span',
                    null,
                    'Navigation One'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                MenuItemGroup,
                { key: 'g1', title: 'Item 1' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                  { key: '1' },
                  'Option 1'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                  { key: '2' },
                  'Option 2'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                MenuItemGroup,
                { key: 'g2', title: 'Item 2' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                  { key: '3' },
                  'Option 3'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                  { key: '4' },
                  'Option 4'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub2',
                title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd__["b" /* Icon */], { type: 'appstore' }),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'span',
                    null,
                    'Navigation Two'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                { key: '5' },
                'Option 5'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                { key: '6' },
                'Option 6'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                SubMenu,
                { key: 'sub3', title: 'Submenu' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                  { key: '7' },
                  'Option 7'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                  { key: '8' },
                  'Option 8'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub4',
                title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd__["b" /* Icon */], { type: 'setting' }),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'span',
                    null,
                    'Navigation Three'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                { key: '9' },
                'Option 9'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                { key: '10' },
                'Option 10'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                { key: '11' },
                'Option 11'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_antd__["c" /* Menu */].Item,
                { key: '12' },
                'Option 12'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          {
            style: {
              width: '100%', height: 667, background: '#fff000',
              color: '#fff', textAlign: 'center', lineHeight: '667px'
            }
          },
          '\u9009\u62E9\u4F4D\u7F6E\uFF1A',
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_antd__["d" /* Select */],
            {
              style: { width: 120, marginLeft: 20 },
              defaultValue: this.state.placement,
              onChange: this.onChange
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              Option,
              { value: 'left' },
              '\u5DE6\u8FB9 left'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              Option,
              { value: 'top' },
              '\u4E0A\u9762 top'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              Option,
              { value: 'right' },
              '\u53F3\u8FB9 right'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              Option,
              { value: 'bottom' },
              '\u4E0B\u9762 bottom'
            )
          )
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(1008);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_style__ = __webpack_require__(1009);


// style dependencies


/***/ }),

/***/ 1008:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);



/***/ }),

/***/ 1010:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_style__ = __webpack_require__(38);


// style dependencies


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_less__);



/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[1005]);
//# sourceMappingURL=placement.js.map