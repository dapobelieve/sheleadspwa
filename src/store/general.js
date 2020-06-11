import Api from "@/utils/Api";
import firebase from "@/firebaseConfig.js";
const { messaging } = firebase;
// for general assets and actions that dont need the user to be signed in

export default {
  state: {
    interests: ["Sales", "Marketing", "Operations", "Business Model / Funding", "Product Management"]
  },
  actions: {
    async saveToken({}, payload) {
      try {
        let res = await Api.post(`/notification/deviceRegisteration`, { registerationToken: payload.token }, true);
        window.localStorage.setItem("messagingToken", payload.token);
      } catch (err) {
        console.log(err);
      }
    },
    getMessagingToken({ commit, dispatch }) {
      messaging
        .getToken()
        .then(token => {
          if (token) {
            const currentMessageToken = window.localStorage.getItem("messagingToken");
            if (currentMessageToken != token) {
              dispatch("saveToken", { token });
            }
          } else {
            console.log("No InstanceId token available. Request Permission to generate one");
            this.notificatioPermissionRequest();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {},
  getters: {}
};
