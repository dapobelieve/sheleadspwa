import Api from "@/utils/Api";
// for general assets and actions that dont need the user to be signed in

export default {
  state: {
    interests: ["Sales", "Marketing", "Operations", "Business Model / Funding", "Product Management"]
  },
  actions: {
    showPushNotification() {
      if (Notification.permission != "granted") {
        Notification.requestPermission().then(result => {
          if (result === "denied") {
            console.log("denied");
            return;
          }

          if (result === "granted") {
          }
        });
      }
    }
  },
  mutations: {},
  getters: {}
};
