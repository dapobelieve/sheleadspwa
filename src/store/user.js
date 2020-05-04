import Api from "@/utils/Api";

export default {
  state: {
    auth: {
      token: null
    },
    data: {},
    allCourses: [],
    enrolled: [], //all users enrolled courses
    personal: [], //all users personal courses
    activeCourse: {},
    activeLesson: {},
    annoucements: [],
    newCourses: [],
    polls: [],
    groups: []
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
    async getNewCourses({ commit }) {
      let res = Api.get(`/user/courses/new`, true);

      if (res.status === 200) {
        commit("setNewCourses", res.data.data.courses);
      }
    },
    // after enrolling to a course, dispatch action to refetch enrolled courses
    async enrollToCourse({ commit, dispatch }, payload) {
      let res = await Api.post(`/user/course/enroll`, payload, true);

      // let { course, progress, taken, createdAt } = res.data.user_course;
      if (res.status === 201) {
        dispatch("enrolledCourses");

        return true;
      } else {
        return res;
      }
    },

    async enrolledCourses({ commit }) {
      let res = await Api.get(`/user/courses`, true);
      if (res.status === 200) {
        commit("setEnrolledCourses", res.data.data.courses);
      }
    },

    async personalisedCourses({ commit }) {
      let res = await Api.get(`/user/courses/personal`, true);

      if (res.status === 200) {
        commit("setPersonalCourses", res.data.data.courses);
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
          title: course.course.title
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
        commit("setActiveLesson", res.data.data.lesson);
        return res.data.data.lesson;
      }
    },
    async getAllPolls({ commit }) {
      let res = await Api.get("/poll/user/list", true);
      if (res.status === 200) {
        commit("setPolls", res.data.data.polls);
      }
    },

    async submitPoll({ commit }, payload) {
      let res = await Api.post(`/poll/user/take`, payload, true);
      if (res.status === 201) {
        return true;
      } else {
        return res;
      }
    },

    async lessonComplete({ commit }, payload) {
      let res = await Api.post(`user/course/lesson/complete`, payload, true);
      return res;
    },

    async allGroups({ commit }) {
      let res = await Api.get(`group/fetch-all-groups`, true);

      commit("setAllGroups", res.data.data.groups);
    },

    async logout({ commit }) {
      commit("setToken", "");
      commit("setUserData", {});
    }
  },
  mutations: {
    setAllGroups(state, groups) {
      state.groups = groups;
    },

    setActiveLesson(state, lesson) {
      state.activeLesson = lesson;
    },
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
    setEnrolledCourses(state, data) {
      state.enrolled = data;
    },
    setPersonalCourses(state, data) {
      state.personal = data;
    },
    setNewCourses(state, data) {
      state.newCourses = data;
    },
    setPolls(state, data) {
      state.polls = data;
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
    getPersonalisedCourses(state) {
      return state.personal;
    },
    getNewCourse(state) {
      return state.newCourses;
    },
    getActiveLesson(state) {
      return state.activeLesson;
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
    },
    getPolls(state) {
      return state.polls;
    }
  }
};
