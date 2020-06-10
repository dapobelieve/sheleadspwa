import Vue from "vue";

import App from "./App.vue";
import router from "./router/router.js";
import store from "./store";
import "@/utils/filters";
Vue.use(require("vue-moment"));
import Toasted from "vue-toasted";

Vue.use(Toasted);
import "@/misc/register-service-worker";
import "@/misc/handle-network-status";
import "@/misc/handle-apple-install-prompt";
import "pwacompat";

Vue.config.productionTip = false;
Vue.prototype.$Bus = new Vue();

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
