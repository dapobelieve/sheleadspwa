import Vue from "vue";

import App from "./App.vue";
import router from "./router/router.js";
import store from "./store";
import "@/misc/register-service-worker";
import "@/misc/handle-network-status";
import "@/misc/handle-apple-install-prompt";
import "pwacompat";

Vue.config.productionTip = false;

Vue.prototype.$Bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
