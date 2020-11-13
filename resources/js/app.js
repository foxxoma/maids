require('./bootstrap');

window.Vue = require('vue');

Vue.component("header-component", () => import("./components/header.vue"));
Vue.component("footer-component", () => import("./components/footer.vue"));
Vue.component("order-component", () => import("./components/order.vue"));
Vue.component("reviews_slider-component", () => import("./components/reviews_slider.vue"));	
Vue.component("index_content-component", () => import("./components/index_content.vue"));
Vue.component("index_reviews-component", () => import("./components/index_reviews.vue"));


const app = new Vue({
	el: '#app'
})
