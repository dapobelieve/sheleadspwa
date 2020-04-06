import store from "@/store";

store.commit("app/setNetworkOnline", navigator.onLine);

window.addEventListener("online", () => {
  console.log("APP_ONLINE");
  store.commit("app/setNetworkOnline", true);
});

window.addEventListener("offline", () => {
  console.log("APP_OFFLINE");
  store.commit("app/setNetworkOnline", false);
});
