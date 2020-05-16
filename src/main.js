import Vue from "vue";

import App from "./App.vue";
import router from "./router/router.js";
import store from "./store";
Vue.use(require("vue-moment"));
import io from "socket.io-client";

// import "@/misc/register-service-worker";
// import "@/misc/handle-network-status";
// import "@/misc/handle-apple-install-prompt";
// import "pwacompat";

// const Socket2 = io("http://sla-be.herokuapp.com:80/sla-group-coronavirus");

// Socket2.on("connect", () => {
//   console.log("CONNECTED TO ADMIN");
// });

Vue.config.productionTip = false;
Vue.prototype.$Bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
