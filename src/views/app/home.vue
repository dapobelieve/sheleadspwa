<template>
  <div class="home d-flex flex-column mb-24">
    <p class="greet font-poppins text-bold ml-16">Welcome, {{ user.first_name }}!</p>
    <div class="alert bg-grey-100 pl-8 pr-16 ml-16 py-4 text-bolder">
      Your lessons are selected based on your preferences
    </div>
    <div class="mt-24 ml-16">
      <span class="font-poppins text-bolder" style="font-size: 16px">Leaderboard Position</span>
      <div class="user-rank d-flex mt-12">
        <div class="rank bg-primary text-white d-flex justify-content-center align-items-center text-align-center">
          {{ getLeaderboard.position | ordinalSuffix }}
        </div>
        <div class="rank flip d-flex justify-content-center align-items-center text-align-center">{{ getLeaderboard.points }}XP</div>
      </div>
    </div>

    <banner class="mt-12 mx-16 mt-24" />
    <!-- <button @click.prevent="getMessagingToken()">Notify</button> -->

    <div class="d-flex ml-12 align-items-center justify-content-between mt-48">
      <span style="font-size: 16px" class="flex-inline font-poppins text-bolder ">
        Courses in Progress
      </span>
      <more-arrow route="enrolled" />
    </div>
    <!-- Enrolled courses -->
    <div>
      <div v-if="getAllEnrolledCourse && getAllEnrolledCourse.length > 0" class="courses x-flow ml-12 mt-12 py-4 d-flex overflow-x-auto">
        <course-enrolled class="d-flex" v-for="x in getAllEnrolledCourse.slice(0, 8)" :key="x.course._id" :course="x.course" hasProgress :percentage="x.progress.toFixed(1)" />
      </div>
      <empty-state message="You have no course in progress" v-else />
    </div>

    <div class="ml-12 d-flex align-items-center justify-content-between mt-48">
      <span style="font-size: 16px;" class="flex-inline font-poppins text-bolder">
        Recommended Courses
        <img class="ml-24" height="23" width="23" src="@/assets/icons/network.png" alt="" />
      </span>
      <more-arrow route="recommended" />
    </div>

    <div class="courses x-flow mt-12 ml-12 py-2 d-flex overflow-x-auto">
      <course v-for="item in getCourses.slice(0, 8)" :course="item" :key="item._id" />
    </div>

    <div v-if="announcements && announcements.length" class="d-flex align-items-center justify-content-between mt-24 ml-12 mx-8">
      <span style="font-size: 16px" class="flex-inline font-poppins text-bolder ">
        Announcements
      </span>
      <more-arrow route="annoucements" />
    </div>
    <div v-if="announcements.length" class="announce d-flex x-flow flex-column mt-12 mb-12 py-4">
      <announce v-for="(item, index) in announcements" v-if="index < 3" :key="item._id" :annoucement="item" class="m-4 col-12" />
    </div>
    <!-- <loader v-else /> -->
    <div v-if="polls.length > 0 && !polls[0].answered">
      <div class="d-flex align-items-center justify-content-between ml-12 mt-32 mx-8">
        <span style="font-size: 16px" class="flex-inline font-poppins text-bolder ">
          Poll
        </span>
        <more-arrow route="polls-home" />
      </div>
      <div class="discuss d-flex ml-12 mt-12">
        <poll :poll="polls[0]" class="py-4 col-12"></poll>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between mt-24 mx-8">
      <span style="font-size: 18px" class="flex-inline font-poppins text-bolder ">
        Survey
      </span>
    </div>
    <div class=" d-flex justify-content-center align-items-center mt-12">
      <div v-if="survey.length > 0">
        <single-survey :id="survey[0]._id" />
      </div>
      <empty-state message="There are currently no surveys" v-else />
    </div>
    <!-- <router-link :to="{ name: 'create-topic' }">
      <div
        class="add shadow bg-white position-fixed d-flex justify-content-center align-items-center"
      >
        <icon class="text-primary" size="lg" name="plus" />
      </div>
    </router-link> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import firebase from "@/firebaseConfig.js";
const { messaging } = firebase;

export default {
  data() {
    return {
      user: this.$store.state.user.data,
      polls: [],
      selected_answer: null
    };
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue"),
    Course: () => import("@/components/cards/CourseCard"),
    CourseEnrolled: () => import("@/components/cards/CourseDetailsCard"),
    Announce: () => import("@/components/cards/Announce"),
    loader: () => import("@/components/loader"),
    banner: () => import("@/components/Banner"),
    Discussion: () => import("@/components/cards/Discussion"),
    singleSurvey: () => import("@/views/surveys/SingleSurveyComponent"),
    Poll: () => import("@/components/cards/Poll"),
    quizCard: () => import("@/components/cards/quizCard.vue"),
    SlaButton: () => import("@/components/SlaButton"),
    emptyState: () => import("@/components/emptyState"),
    moreArrow: () => import("@/components/moreArrow")
  },
  computed: {
    ...mapGetters(["getAllEnrolledCourse", "getCourses", "announcements", "getPolls", "surveys", "getLeaderboard"]),
    survey() {
      return this.surveys
        .filter(item => {
          return !this.$store.state.user.takenSurveys.includes(item._id);
        })
        .slice(0, 1);
    }
  },
  methods: {
    notificationsPermisionRequest() {
      messaging
        .requestPermission()
        .then(() => {
          this.getMessagingToken();
        })
        .catch(err => {
          console.log("Unable to get permission to notify.", err);
        });
    },
    listenTokenRefresh() {
      const currentMessageToken = window.localStorage.getItem("messagingToken");
      if (!!currentMessageToken || currentMessageToken == null) {
        messaging.onTokenRefresh(function() {
          messaging
            .getToken()
            .then(function(token) {
              this.saveToken({ token });
            })
            .catch(function(err) {
              console.log("Unable to retrieve refreshed token ", err);
            });
        });
      }
    },
    ...mapActions(["getAllCourses", "getAnnouncements", "enrolledCourses", "getAllPolls", "getSurvey", "savedCourses", "getMessagingToken", "saveToken"]),
    getSinglePoll() {
      let poll = this.getPolls.filter(res => res.answered === false && this.getExpiryTime(res.expiry) > 0);
      if (poll !== null && poll.length > 0) {
        this.polls.push(poll[0]);
      }
    },
    getExpiryTime(someDate) {
      let expiration = this.$moment(someDate);
      let current_date = this.$moment();
      let days = expiration.diff(current_date, "hours");
      return days;
    }
  },
  mounted() {
    if (Notification.permission !== "allow") {
      this.notificationsPermisionRequest();
    }
    this.listenTokenRefresh();
    this.enrolledCourses();
    this.getAllCourses();
    this.savedCourses();
    this.getAnnouncements();
    this.getAllPolls();
    this.getSinglePoll();
    this.getSurvey();
  }
};
</script>
<style lang="scss" scoped>
.home {
  .add {
    bottom: 100px;
    right: 15px;
    z-index: 100;
    border-radius: 50%;
    height: 56px;
    width: 56px;
  }

  .rank {
    height: 46px;
    width: 75px;
    border: 1px solid color(bv-primary);
    border-radius: 5px;
    font-size: 16px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .flip {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: -1px;
    border: 1px solid #e7e6e6;
  }

  .greet {
    font-size: 24px;
  }
  .alert {
    margin-right: 22px;
    border-radius: 5px;
    font-size: 12px;
  }

  .x-flow {
    &::-webkit-scrollbar {
      display: none;
    }
    & > :not(:last-child) {
      margin-right: 12px !important;
    }
    & > *:last-child {
      padding-right: 12px !important;
    }
  }
}
</style>
