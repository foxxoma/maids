(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reviews_slider.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
      name: '',
      reviewForm: '',
      info: '',
      reviews: []
    };
  },
  methods: {
    getReviews: function getReviews() {
      var _this = this;

      axios.post('/reviews/index/').then(function (response) {
        _this.reviews = response.data;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    formPost: function formPost(e) {
      var _this2 = this;

      e.preventDefault();

      if (!this.name || !this.reviewForm) {
        alert('есть пустые поля');
        return;
      }

      axios.post('/reviews/form/', {
        name: this.name,
        review: this.reviewForm
      }).then(function (response) {
        _this2.reviews.push({
          'name': _this2.name,
          'review': _this2.reviewForm
        });

        _this2.reviewForm = '';
        _this2.name = '';
        alert('отзыв оставлен');
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reviews_slider.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.overflow--review-slider_item\n{\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tmargin-bottom: 20px;\n\t-webkit-box-shadow: 0px 0px 15px -4px pink; \n\tbox-shadow: 0px 0px 15px -4px pink;\n}\n.overflow--review-slider_item_text\n{\n\tcolor: #333;\n}\n.overflow--review-slider_item_title\n{\n\tfont-size: 25px;\n}\n.overflow--review-slider_item_description\n{\n\tfont-size: 20px;\n}\n.review-slider__flex\n{\n\tdisplay: flex;\n\tjustify-content: space-around;\n}\n.review-slider__slider\n{\n\tpadding-top: 70px;\n\toverflow: hidden;\n}\n.overflow--review-slider\n{\n\toverflow: auto;\n\tbox-sizing: border-box;\n\twidth: 542px;\n\theight: 300px;\n\tborder-top:5px solid #333;\n\tpadding: 10px;\n\toverflow-x: hidden;\n}\n@media (max-width: 1000px)\n{\n.overflow--review-slider\n\t{\n\t\twidth: 330px;\n}\n}\n@media (max-width: 772px)\n{\n.review-slider__girls--img\n\t{\n\t\twidth: 300px;\n}\n.review-slider__slider\n\t{\n\t\tpadding-top: 30px;\n}\n.overflow--review-slider_item_title\n\t{\n\t\tfont-size: 20px;\n}\n.overflow--review-slider_item_description\n\t{\n\t\tfont-size: 15px;\n}\n}\n@media (max-width: 633px)\n{\n.overflow--review-slider\n\t{\n\t\twidth: 247px;\n}\n.review-slider__slider\n\t{\n\t\tpadding-top: 10px; \n\t\theight: 250px;\n}\n}\n@media (max-width: 597px)\n{\n.review-slider__girls--img\n\t{\n\t\twidth: 250px;\n}\n}\n@media (max-width:520px)\n{\n.overflow--review-slider\n\t{\n\t\twidth: 200px;\n}\n.review-slider__girls--img\n\t{\n\t\twidth: 212px;\n}\n}\n@media (max-width: 414px)\n{\n.review-slider__girls--img\n\t{\n\t\twidth: 163px;\n}\n.review-slider__slider\n\t{\n\t\tpadding-top: 0px; \n\t\theight: 200px;\n}\n}\n@media (max-width: 362px)\n{\n.review-slider__girls--img\n\t{\n\t\tdisplay: none;\n}\n.review-slider__flex\n\t{\n\t\tpadding-bottom: 20px;\n}\n.review-slider__slider\n\t{\n\t\tpadding-top: 0;\n}\n.overflow--review-slider\n\t{\n\t\twidth: 80%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=style&index=1&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reviews_slider.vue?vue&type=style&index=1&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.review-form\n{\n\tbackground:#333;\n}\n.review-form__girls--img\n{\n\tmargin-bottom: -5px;\n}\n.review-form__input\n{\n\twidth: 452px;\n\theight: 51px;\n\tborder:3px solid #fff;\n\tbackground-color: #333;\n\tcolor:#fff;\n\tfont-size: 24px;\n\tpadding: 0px 10px;\n\tmargin-bottom: 35px;\n}\n.review-form__flex\n{\n\tdisplay: flex;\n\tjustify-content: space-around;\n}\n.review-form__form--flex\n{\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 118px;\n}\n.review-form__input-rew\n{\n\twidth: 452px;\n\theight: 80px;\n\tborder:3px solid #fff;\n\tbackground-color: #333;\n\tcolor:#fff;\n\tfont-size: 24px;\n\tmargin-bottom: 30px;\n\tpadding: 0px 10px;\n}\n.review-form__btn\n{\n\ttext-align: end;\n}\n.review-form__btn--style\n{\n\tborder:3px solid #fff;\n\tborder-radius: 15px;\n\tbackground:#333;\n\tcolor:#fff;\n\tfont-size: 24px;\n\tpadding: 10px 80px;\n\tcursor: pointer;\n}\n.review-form__btn--style:hover\n{\n\tbackground-color: pink;\n}\n@media (max-width: 1000px)\n{\n.review-form__input, .review-form__input-rew\n\t{\n\t\twidth: 370px;\n}\n.review-form__girls--img\n\t{\n\t\twidth: 330px;\n}\n}\n@media (max-width: 772px)\n{\n.review-form__input, .review-form__input-rew \n\t{\n\t\twidth: 270px;\n}\n}\n@media (max-width: 633px)\n{\n.review-form__girls--img\n\t{\n\t\twidth: 284px;\n}\n.review-form__form--flex\n\t{\n\t\tpadding-top: 40px;\n}\n}\n@media (max-width: 597px)\n{\n.review-form__input, .review-form__input-rew\n\t{\n\t\twidth: 240px;\n}\n.review-form__girls--img\n\t{\n\t\twidth: 225px;\n}\n}\n@media (max-width:520px)\n{\n.review-form__girls--img\n\t{\n\t\tdisplay: none;\n}\n.review-form__flex\n\t{\n\t\tjustify-content: center;\n\t\tpadding-bottom: 20px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reviews_slider.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./reviews_slider.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reviews_slider.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./reviews_slider.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=template&id=47d3bbe0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reviews_slider.vue?vue&type=template&id=47d3bbe0& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "review-slider" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "review-slider__flex" }, [
        _c("div", { staticClass: "review-slider__slider" }, [
          _c(
            "div",
            { staticClass: "overflow--review-slider" },
            _vm._l(_vm.reviews.slice().reverse(), function(review) {
              return _c(
                "div",
                { staticClass: "overflow--review-slider_item" },
                [
                  _c(
                    "h3",
                    {
                      staticClass:
                        "overflow--review-slider_item_text overflow--review-slider_item_title"
                    },
                    [_vm._v(_vm._s(review.name))]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "overflow--review-slider_item_text overflow--review-slider_item_description"
                    },
                    [_vm._v(_vm._s(review.review))]
                  )
                ]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _vm._m(0)
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "review-form" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "review-form__flex" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "review-form__form" }, [
            _c(
              "form",
              { staticClass: "review-form__form--flex", attrs: { action: "" } },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  staticClass: "review-form__input",
                  attrs: { type: "text", placeholder: "Ваше имя" },
                  domProps: { value: _vm.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.name = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.reviewForm,
                      expression: "reviewForm"
                    }
                  ],
                  staticClass: "review-form__input-rew",
                  attrs: { type: "text", placeholder: "Ваш отзыв" },
                  domProps: { value: _vm.reviewForm },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.reviewForm = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "review-form__btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "review-form__btn--style",
                      on: { click: _vm.formPost }
                    },
                    [_vm._v("Пуш!")]
                  )
                ])
              ]
            )
          ])
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
    return _c("div", { staticClass: "review-slider__girls" }, [
      _c("img", {
        staticClass: "review-slider__girls--img",
        attrs: { src: "/img/girls.png", alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "review-form__girls" }, [
      _c("img", {
        staticClass: "review-form__girls--img",
        attrs: { src: "/img/neko.png", alt: "" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reviews_slider.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/reviews_slider.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reviews_slider_vue_vue_type_template_id_47d3bbe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews_slider.vue?vue&type=template&id=47d3bbe0& */ "./resources/js/components/reviews_slider.vue?vue&type=template&id=47d3bbe0&");
/* harmony import */ var _reviews_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews_slider.vue?vue&type=script&lang=js& */ "./resources/js/components/reviews_slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _reviews_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews_slider.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/reviews_slider.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _reviews_slider_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews_slider.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/reviews_slider.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _reviews_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reviews_slider_vue_vue_type_template_id_47d3bbe0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reviews_slider_vue_vue_type_template_id_47d3bbe0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reviews_slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reviews_slider.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/reviews_slider.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./reviews_slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reviews_slider.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/reviews_slider.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./reviews_slider.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/reviews_slider.vue?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/reviews_slider.vue?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./reviews_slider.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/reviews_slider.vue?vue&type=template&id=47d3bbe0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/reviews_slider.vue?vue&type=template&id=47d3bbe0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_template_id_47d3bbe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./reviews_slider.vue?vue&type=template&id=47d3bbe0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reviews_slider.vue?vue&type=template&id=47d3bbe0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_template_id_47d3bbe0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reviews_slider_vue_vue_type_template_id_47d3bbe0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);