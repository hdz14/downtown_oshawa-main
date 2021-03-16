import "foundation-sites/dist/css/foundation.min.css";
import "foundation-sites/dist/js/foundation.min.js";
import "foundation-sites/dist/js/plugins/foundation.core.js";
import "foundation-sites/dist/js/plugins/foundation.offcanvas.js";
import "foundation-sites/dist/js/plugins/foundation.util.keyboard.js";
import "foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js";
import "foundation-sites/dist/js/plugins/foundation.util.triggers.js";
import "jquery";
import "tailwindcss/dist/tailwind.css";
// import 'svg-pan-zoom/dist/svg-pan-zoom.js';

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import svgPanZoom from "svg-pan-zoom/dist/svg-pan-zoom.js";
import VueSplide from "@splidejs/vue-splide";




Vue.config.productionTip = false;

Vue.use(svgPanZoom, VueSplide);
// Vue.use( VueSplide );

Vue.config.productionTip = false;


new Vue({
    router,
    render: (h) => h(App),
    data: { activetab: 1 },
    // components: { App },
    // template: '<App/>'
}).$mount("#app");
