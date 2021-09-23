(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {},
      email: '',
      password: '',
      name: ''
    };
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      fetch('/auth/checkUser', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "_token": document.querySelector('meta[name=csrf-token]').content
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.user = data;
      })["catch"](function (e) {
        alert('Зарегистрируйтесь');
        console.log(e);
      });
    },
    logaut: function logaut() {
      var _this2 = this;

      fetch('/auth/logout', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "_token": document.querySelector('meta[name=csrf-token]').content
        })
      }).then(function (response) {
        _this2.user = {};
      })["catch"](function (e) {
        alert('Возникла ошибка');
        console.log(e);
      });
    },
    login: function login() {
      var _this3 = this;

      e.preventDefault();

      if (!this.email || !this.password) {
        alert('Есть пустые поля');
        return;
      }

      var patt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!patt.test(this.email)) {
        alert('не корректный email');
        return;
      }

      fetch('/auth/authenticate', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "_token": document.querySelector('meta[name=csrf-token]').content,
          'email': this.email,
          'password': this.password
        })
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this3.name = '';
        _this3.email = '';
        _this3.password = '';
      })["catch"](function (e) {
        alert('Возникла ошибка при авторизации');
        console.log(e);
      });
    },
    createUser: function createUser(e) {
      var _this4 = this;

      e.preventDefault();

      if (!this.name || !this.email || !this.password) {
        alert('Есть пустые поля');
        return;
      }

      var patt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!patt.test(this.email)) {
        alert('не корректный email');
        return;
      }

      fetch('/auth/createUser', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          '_token': document.querySelector('meta[name=csrf-token]').content,
          'name': this.name,
          'email': this.date,
          'password': this.password
        })
      }).then(function (response) {
        _this4.name = '';
        _this4.email = '';
        _this4.password = '';
        alert('Вы зарегистрировались');
      })["catch"](function (e) {
        alert('Возникла ошибка');
        console.log(e);
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getUser();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/header.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/header.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*\t\n{\n\tfont-family: 'Monaco';\n\tmargin: 0;\n\tpadding: 0;\n}\na:hover\n{\n\tcolor: pink!importent;\n}\ninput:focus\n{\n\toutline:none;\n\tborder: 3px solid pink;\n}\nbutton\n{\n\toutline:none;\n}\n.container\n{\n\twidth: 100%;\n}\n/*header*/\n.menu\n{\n\tbackground: #333333;\n\tpadding: 0 80px;\n\tmargin-bottom: 80px;\n}\n.menu--flex\n{\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n.menu__logo\n{\n\tdisplay: flex;\n\talign-items: center;\n}\n.logo__img{margin-right: 20px;}\n.menu__logo--title\n{\n\tcolor: #fff;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 25px;\n\tline-height: 50px;\n}\n.menu__list\n{\n\tlist-style-type: none;\n\tdisplay: flex;\n}\n.menu__list--title\n{\n\tpadding-top: 10px;\n\tcolor: #fff;\n\tmargin-right: 25px;\n}\n.menu__list--title--link\n{\n\tcolor:#fff;\n\ttext-decoration: none;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 25px;\n\tline-height: 50px;\n}\n.menu__list--title--link:hover\n{\n\tcolor:pink;\n}\n@media (max-width: 686px)\n{\n.menu__logo--title\n\t{\n\t\tdisplay: none;\n}\n}\n@media (max-width: 489px)\n{\n.menu\n\t{\n\t\tmargin-bottom: 40px;\n}\n.menu,.under-menu \n\t{\n\t\tpadding: 0 20px;\n}\n}\n@media (max-width: 409px)\n{\n.menu__list--title--link\n\t{\n\t\tfont-size: 18px;\n}\n}\n@media (max-width: 361px)\n{\n.menu__logo \n\t{\n\t\twidth: 40px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/header.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/header.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/header.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/header.vue?vue&type=template&id=798ca618&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/header.vue?vue&type=template&id=798ca618& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "menu" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "menu--flex" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("ul", { staticClass: "menu__list" }, [
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm.user
            ? _c(
                "li",
                { staticClass: "menu__list--title", on: { click: _vm.logaut } },
                [_vm._v(_vm._s(_vm.user.name))]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "menu__list--title", on: { click: _vm.login } },
            [_vm._v("login")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "menu__logo", attrs: { href: "/" } }, [
      _c("div", { attrs: { href: "/" } }, [
        _c("img", {
          staticClass: "logo__img",
          attrs: { src: "/img/logo.svg", alt: "" }
        })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "menu__logo--title" }, [_vm._v("Чистый дом")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "menu__list--title" }, [
      _c(
        "a",
        {
          staticClass: "menu__list--title--link",
          attrs: { href: "/reviews/" }
        },
        [_vm._v("Отзывы")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "menu__list--title" }, [
      _c(
        "a",
        { staticClass: "menu__list--title--link", attrs: { href: "/orders/" } },
        [_vm._v("Заказать")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/header.vue":
/*!********************************************!*\
  !*** ./resources/js/components/header.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=798ca618& */ "./resources/js/components/header.vue?vue&type=template&id=798ca618&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/components/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/header.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/header.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/header.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/header.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/header.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/header.vue?vue&type=template&id=798ca618&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/header.vue?vue&type=template&id=798ca618& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=798ca618& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/header.vue?vue&type=template&id=798ca618&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);