import Api from "@/utils/Api";

export default {
  state: {
    auth: {
      token: null
    },
    data: {},
    allCourses: []
  },
  actions: {
    async login({ commit }, payload) {
      let res = await Api.post("/user/login", payload);
      if (res.status === 200) {
        commit("setToken", res.data.token);
        commit("setUserData", res.data.user);
        return true;
      } else {
        return res;
      }
    },
    async updateProfile({ commit }, payload) {
      let res = await Api.post("/user/profile/update", payload, true);

      if (res.status === 200) {
        commit("setUserData", res.data.user);
        return true;
      } else {
        return res;
      }
    },
    async reset({ commit }, payload) {
      let res = await Api.post("/user/password/reset", payload, true);

      if (res.status === 200) {
        return true;
      } else {
        return res;
      }
    },
    async getCourse({}, payload) {
      let { id } = payload;
      let res = await Api.get(`/user/course/details/${id}`, true);
      return res;
    },
    async getAllCourses({ commit }) {
      let res = await Api.get("/user/courses/all", true);
      if (res.status === 200) {
        commit("setCourses", res.data.data.courses);
      }
    },
  },
  mutations: {
    setUserData(state, data) {
      state.data = data;
    },
    setCourses(state, data) {
      state.allCourses = data;
    },
    setToken(state, data) {
      state.auth.token = data;
    }
  },
  getters: {
    getCourses(state) {
      return state.allCourses;
    },
    getFirstname(state) {
      return state.data.first_name;
    }
  }
};
