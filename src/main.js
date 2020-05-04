import Vue from "vue";

import App from "./App.vue";
import router from "./router/router.js";
import store from "./store";
Vue.use(require("vue-moment"));

// import "@/misc/register-service-worker";
// import "@/misc/handle-network-status";
// import "@/misc/handle-apple-install-prompt";
// import "pwacompat";
import VueSocketIO from "vue-socket.io";
import io from "socket.io-client";

const Socket = io("http://localhost:5000");

const Socket2 = io("https://sla-be.herokuapp.com/sla-group-coronavirus");

Socket.on("connect", () => {
  console.log(Socket.id);
});

Socket.on("stream", data => {
  console.log(data);
});

Vue.config.productionTip = false;
Vue.prototype.$Bus = new Vue();

let app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

export { app, Socket };
