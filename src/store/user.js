import Api from "@/utils/Api";
export default {
  state: {
    socketToken: null,
    auth: {
      token: null
    },
    data: {},
    allCourses: [],
    enrolled: [], //all users enrolled courses
    personal: [], //all users personal courses
    activeCourse: {},
    activeLesson: {},
    savedCourses: [],
    annoucements: [],
    completed: [],
    newCourses: [],
    polls: [],
    groups: [],
    surveys: [],
    resources: [],
    messages: []
  },
  actions: {
    async uploadProfileImage({ commit }, payload) {
      let res = await Api.post(`/user/profile/image`, payload, true);
      commit("setProfileImage", res.data.user.image);
    },

    async getAppCategories({ commit }) {
      let res = await Api.get("/category/user/list", true);
      commit("setCategories", res.data.data.categories);
    },

    async getMessageToken({ commit }) {
      let res = await Api.get("/user/messaging-token", true);
      commit("setSocketToken", res.data.token);
    },

    async saveCourse({ commit }, payload) {
      let res = await Api.post(`/user/course/save`, payload, true);
      if (res.status == 201) {
        alert("Course Saved");
      }
    },

    async savedCourses({ commit }) {
      let res = await Api.get(`/user/courses/save`, true);
      commit("setSavedCourses", res.data.data.courses);
    },

    async login({ commit }, payload) {
      let res = await Api.post("/user/login", payload);
      if (res.status === 200) {
        commit("setToken", res.data.token);
        commit("setUserData", { ...res.data.user, ...res.data.leaderboard });
        return true;
      } else {
        return res;
      }
    },

    async getGroupMessages({ commit }, payload) {
      let res = await Api.get(`/group/${payload.groupId}/fetch-messages`, true);
      let msg = res.data.data.group_messages.map(x => x.message);
      return msg;
      // commit("populateMessage", {messages: res.data.data.group_messages, groupId: payload.groupId})
    },

    async updateProfile({ commit }, payload) {
      let newpayload = { ...payload };
      console.log(payload);
      newpayload.intrests = JSON.stringify(newpayload.intrests);
      console.log(newpayload.intrests);

      let res = await Api.post("/user/profile/update", newpayload, true);

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
      let res = await Api.get(`/user/courses/new`, true);

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
      let res = await Api.get(`/user/courses/enrolled`, true);
      if (res.status === 200) {
        commit("setEnrolledCourses", res.data.data.course);
      }
    },

    async personalisedCourses({ commit }) {
      let res = await Api.get(`/user/courses/personal`, true);

      if (res.status === 200) {
        commit("setPersonalCourses", res.data.data.courses);
      }
    },

    async enrolledCourseDetails({ commit }, payload) {
      let res = await Api.get(`/user/course/enrolled/details/${payload.id}`, true);
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
      let res = await Api.get(`/annoucement/user/list`, true);
      commit("setAnnoucements", res.data.data.annoucements);
    },

    async likeAnnoucement({ commit }, payload) {
      let res = await Api.post("/annoucement/like", payload, true);
      commit("setAnnoucements", res.data.data.annoucements);
      return res;
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

    async getSurvey({ commit }) {
      let res = await Api.get(`/survey/user/list`, true);
      commit("setSurvey", res.data.data);
    },

    async lessonComplete({ commit }, payload) {
      let res = await Api.post(`user/course/lesson/complete`, payload, true);
      return res;
    },

    async getResources({ commit }, payload) {
      let res = await Api.get(`resource/user/list`, true);

      commit("setResources", res.data.data.resources);
    },

    async allGroups({ commit }) {
      let res = await Api.get(`group/fetch-user-groups`, true);
      commit("setAllGroups", res.data.data);
    },

    async sendChat({ commit }, payload) {
      let obj = {
        message: payload
      };

      let res = await Api.post(`/group/send-message`, obj, true);

      console.log(res.status);
    },

    async getSurveyDetails({}, payload) {
      let res = await Api.get(`/survey/user/${payload.id}/questions/list`, true);
      return res;
    },

    async getCompleted({ commit }, payload) {
      let res = await Api.get(`user/courses/completed`, true);
      let courses = res.data.data.courses;

      commit("setCompleted", courses);
    },

    async logout({ commit }) {
      commit("setToken", "");
      commit("setUserData", {});
    }
  },
  mutations: {
    setProfileImage(state, data) {
      state.data.image = data;
    },
    setCategories(state, data) {
      state.categories = data;
    },

    setSavedCourses(state, data) {
      state.savedCourses = data;
    },
    setSurvey(state, data) {
      state.surveys = data;
    },

    setResources(state, data) {
      state.resources = data;
    },

    setCompleted(state, data) {
      state.completed = data;
    },

    setSocketToken(state, data) {
      state.socketToken = data;
    },

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
    populateMessage(state, data, groupId) {
      if (
        !state.messages.some(arr => {
          return arr.key == data.groupId;
        })
      ) {
        let obj = new Object();
        obj["key"] = data.groupId;
        obj["message"] = data.messages;
        state.messages.push(obj);
      } else {
        state.messages[data.groupId] = data.messages;
      }
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
    getCategories(state) {
      return state.categories;
    },
    getSavedCourses(state) {
      let res = state.savedCourses.map(x => {
        return x.course;
      });

      return res;
    },
    surveys(state) {
      let res = [];
      state.surveys.map(x => {
        if (!x.hasOwnProperty("taken")) {
          res.push(x);
        }
      });

      return res;
    },
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
    getGroups(state) {
      return state.groups;
    },
    getPolls(state) {
      return state.polls;
    },
    getResources(state) {}
  }
};
