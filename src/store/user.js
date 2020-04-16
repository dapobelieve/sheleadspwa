import Api from "@/utils/Api";

export default {
  state: {
    auth: {
      token: null
    },
    data: {},
    allCourses: [],
    enrolled: [], //all users enrolled courses
    activeCourse: {},
    annoucements: []
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
        let { course, lessons } = res.data.data;

        commit("setActiveCourse", {
          id: course._id,
          taken: course.taken,
          progress: course.progress,
          lessons: res.data.data.count,
          image: course.course.cover_image,
          title: course.course.title,
          lessons
        });
        return true;
      } else {
        return res;
      }
    },

    async getAnnouncements({ commit }) {
      let res = await Api.get(`/annoucement/user/getAll`, true);
      commit("setAnnoucements", res.data.data.annoucements);
    },

    async getLessonDetails({ commit }, payload) {
      let res = await Api.get(`/user/course/lesson/${payload.id}`, true);

      if (res.status == 200) {
        return res.data.data.lesson;
      }
    },

    async logout({ commit }) {
      commit("setToken", "");
      commit("setUserData", {});
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
    setAnnoucements(state, data) {
      state.annoucements = data;
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
    getAllEnrolledCourse(state) {
      return state.enrolled;
    },
    getActiveCourse(state) {
      return state.activeCourse;
    },
    getCourses(state) {
      return state.allCourses;
    },
    getFirstname(state) {
      return state.data.first_name;
    },
    getFullname(state) {
      return `${state.data.first_name} ${state.data.last_name}`;
    },
    getIndustry(state) {
      return state.data.industry;
    },
    announcements(state) {
      return state.annoucements;
    }
  }
};
