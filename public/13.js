(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index_reviews.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/index_reviews.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      reviews: []
    };
  },
  methods: {
    getReviews: function getReviews() {
      var _this = this;

      axios.post('/reviews/index/').then(function (response) {
        _this.reviews = response.data.slice().reverse();
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getReviews();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index_reviews.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/index_reviews.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.more-info__first\n{\n\twidth: 45%;\n\tmargin-bottom: 20px;\n}\n.more-info__second\n{\n\twidth: 45%;\n}\n.more-info\n{\n\tpadding: 0 80px;\n\tmargin-bottom: 70px;\n}\n.more-info__flex\n{\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\tmargin-bottom: 120px;\n}\n.more-info__text--title\n{\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 40px;\n\tline-height: 50px;\n\tcolor: #000;\n\tborder-bottom:5px solid #000;\n}\n.more-info__description\n{\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 40px;\n\tline-height: 50px;\n\tcolor: #000;\n}\n.more-info__btn\n{\n\ttext-align: center;\n}\n.more-info__btn--style\n{\n\ttext-decoration: none;\n\tbackground: #fff;\n\tborder:3px solid #000;\n\tborder-radius: 15px;\n\tpadding: 12px 133px;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 40px;\n\tline-height: 50px;\n\tcolor: #000000;\n\tcursor: pointer;\n}\n.more-info__btn--style:hover\n{\n\tbackground-color:#f8f8f8;\n}\n@media (max-width: 1000px)\n{\n.more-info__text--title, .more-info__description\n\t{\n\t\tfont-size: 30px;\n}\n.more-info__first\n\t{\n\t\twidth: 100%;\n}\n.more-info__second\n\t{\n\t\twidth: 100%;\n}\n}\n@media (max-width: 752px)\n{\n.welcome--title,.info-block__text--title, .info-block__description,\t.more-info__text--title, .more-info__description\n\t{\n\t\tfont-size: 20px;\n}\n.more-info__description\n\t{\n\t\tline-height: 20px;\n}\n}\n@media (max-width: 676px)\n{\n.more-info__btn--style\n\t{\n\t\tfont-size: 20px;\n\t\tpadding: 1px 60px;\n}\n}\n@media (max-width: 547px)\n{\n.more-info\n\t{\n\t\tpadding: 0 20px;\n}\n}\n@media (max-width: 440px)\n{\n.welcome--title\n\t{\n\t\tmargin: 10px;\n}\n.info-block__img-girl\n\t{\n\t\twidth: 210px;\n}\n}\n@media (max-width: 400px)\n{\n.more-info__flex\n\t{\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tmargin-bottom: 30px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index_reviews.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/index_reviews.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index_reviews.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index_reviews.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index_reviews.vue?vue&type=template&id=38e72673&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/index_reviews.vue?vue&type=template&id=38e72673& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "more-info" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "more-info__flex" }, [
        _c("div", { staticClass: "more-info__first" }, [
          _c("span", { staticClass: "more-info__text--title" }, [
            _vm._v(_vm._s(_vm.reviews[0].name))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "more-info__description" }, [
            _vm._v(_vm._s(_vm.reviews[0].review))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "more-info__second" }, [
          _c("span", { staticClass: "more-info__text--title" }, [
            _vm._v(_vm._s(_vm.reviews[1].name))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "more-info__description" }, [
            _vm._v(_vm._s(_vm.reviews[1].review))
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "more-info__btn" }, [
      _c(
        "a",
        { staticClass: "more-info__btn--style", attrs: { href: "/reviews/" } },
        [_vm._v("Все отзывы!")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/index_reviews.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/index_reviews.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_reviews_vue_vue_type_template_id_38e72673___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_reviews.vue?vue&type=template&id=38e72673& */ "./resources/js/components/index_reviews.vue?vue&type=template&id=38e72673&");
/* harmony import */ var _index_reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_reviews.vue?vue&type=script&lang=js& */ "./resources/js/components/index_reviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index_reviews.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/index_reviews.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_reviews_vue_vue_type_template_id_38e72673___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_reviews_vue_vue_type_template_id_38e72673___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/index_reviews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/index_reviews.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/index_reviews.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index_reviews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index_reviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/index_reviews.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/index_reviews.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index_reviews.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index_reviews.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_reviews_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/index_reviews.vue?vue&type=template&id=38e72673&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/index_reviews.vue?vue&type=template&id=38e72673& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_reviews_vue_vue_type_template_id_38e72673___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index_reviews.vue?vue&type=template&id=38e72673& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index_reviews.vue?vue&type=template&id=38e72673&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_reviews_vue_vue_type_template_id_38e72673___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_reviews_vue_vue_type_template_id_38e72673___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);