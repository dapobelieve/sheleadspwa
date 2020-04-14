import Api from "@/utils/Api";

export default {
  state: {
    auth: {
      token: null
    },
    data: {},
    allCourses: [],
    enrolled: [], //all users enrolled courses
    activeCourse: {}
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

    async enrollToCourse({ commit }, payload) {
      let res = await Api.post(`/user/course/enroll`, payload, true);

      let { course, progress, taken, createdAt } = res.data.user_course;
      console.log(res.status);
      if (res.status === 201) {
        commit("setEnrolled", { course, progress, taken, createdAt });
        return true;
      } else {
        return res;
      }
    },

    async enrolledCourseDetails({ commit }, payload) {
      let res = await Api.get(
        `/user/course/enrolled/details/${payload.id}`,
        true
      );
      if (res.status === 200) {
        let { course } = res.data.data;

        commit("setActiveCourse", {
          id: course._id,
          taken: course.taken,
          progress: course.progress,
          lessons: res.data.data.count,
          image: course.course.cover_image,
          title: course.course.title
        });
        return true;
      } else {
        return res;
      }
    }
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
    },
    setActiveCourse(state, data) {
      state.activeCourse = data;
    },
    setEnrolled(state, data) {
      if (!state.enrolled.some(course => course.course === data.course)) {
        state.enrolled.push(data);
      }
    }
  },
  getters: {
    getActiveCourse(state) {
      return state.activeCourse;
    },
    getCourses(state) {
      return state.allCourses;
    },
    getFirstname(state) {
      return state.data.first_name;
    }
  }
};
