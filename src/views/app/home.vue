<template>
  <div class="home d-flex flex-column mb-24">
    <p class="greet font-poppins text-bold ml-16">
      Welcome {{ getFirstname }}!
    </p>
    <div class="alert bg-grey-100 pl-8 pr-16 ml-16 py-4 text-bolder">
      Your lessons are selected based on your preferences
    </div>
    <div class="mt-24 ml-16">
      <span class="font-poppins text-bold" style="font-size: 16px"
        >Leaderboard Position</span
      >
      <div class="user-rank d-flex mt-12">
        <div
          class="rank bg-primary text-white d-flex justify-content-center align-items-center text-align-center"
        >
          7th
        </div>
        <div
          class="rank flip d-flex justify-content-center align-items-center text-align-center"
        >
          400XP
        </div>
      </div>
    </div>

    <banner class="mt-12 mx-16 mt-24" />

    <div class="d-flex ml-12 align-items-center justify-content-between mt-48">
      <span style="font-size: 16px" class="flex-inline font-poppins text-bold ">
        Courses in Progress
      </span>
      <img
        class="mr-24"
        height="19"
        width="19"
        src="@/assets/icons/arrow-right.png"
        alt=""
      />
    </div>
    <!-- Enrolled courses -->
    <div class="courses x-flow ml-12 mt-12 py-4 d-flex overflow-x-auto">
      <course-enrolled
        class="d-flex"
        v-for="x in getAllEnrolledCourse"
        :key="x"
        :title="x.course.title"
        hasProgress
        :id="x.course._id"
        :percentage="x.progress.toFixed(1)"
        :image="x.course.cover_image"
      />
    </div>

    <div class="ml-12 d-flex align-items-center justify-content-between mt-48">
      <span style="font-size: 16px;" class="flex-inline font-poppins text-bold">
        Recommended Courses
        <img
          class="ml-24"
          height="23"
          width="23"
          src="@/assets/icons/network.png"
          alt=""
        />
      </span>
      <img
        class="mr-24"
        height="19"
        width="19"
        src="@/assets/icons/arrow-right.png"
        alt=""
      />
    </div>

    <div class="courses x-flow mt-12 ml-12 py-2 d-flex overflow-x-auto">
      <course
        v-for="item in getCourses"
        :key="item._id"
        :title="item.title"
        :image="item.cover_image"
        :id="item._id"
      />
    </div>

    <div
      class="d-flex align-items-center justify-content-between mt-24 ml-12 mx-8"
    >
      <span style="font-size: 16px" class="flex-inline font-poppins text-bold ">
        Announcements
      </span>
      <div class="line-thin mb-12"></div>
    </div>
    <div class="announce d-flex x-flow flex-column mt-12 mb-12 py-4">
      <announce
        v-for="(item, index) in announcements"
        v-if="index < 3"
        :key="item._id"
        :annoucement="item"
        class="m-4 col-6"
      />
    </div>
    <!-- <loader v-else /> -->
    <div
      class="d-flex align-items-center justify-content-between ml-12 mt-24 mx-8"
    >
      <span style="font-size: 16px" class="flex-inline font-poppins text-bold ">
        Poll
      </span>
    </div>
    <div class="discuss d-flex ml-12 mt-12" v-if="polls.length > 0">
      <poll
        text="submit poll"
        :image="polls[0].cover_image"
        class="py-4"
        :poll_id="polls[0]._id"
        :option_id="selected_answer"
        :expiry="getExpiryTime(polls[0].expiry)"
        style="min-width: 100%!important;"
      >
        <template #poll-content>
          <quiz-card
            class="card"
            :question="polls[0].question"
            style="border: none;"
          >
            <div class="d-flex flex-column">
              <label class="container mr-56" v-for="option in polls[0].options">
                {{ option.value }}
                <input
                  type="radio"
                  :value="option._id"
                  name="radio"
                  @change="getOption($event)"
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </quiz-card>
        </template>
      </poll>
    </div>
    <div class="d-flex align-items-center justify-content-between mt-24 mx-8">
      <span style="font-size: 16px" class="flex-inline font-poppins text-bold ">
        Survey
      </span>
    </div>
    <div class="discuss d-flex mt-12">
      <poll
        text="submit survey"
        image="https://res.cloudinary.com/rohing/image/upload/v1587631259/photo-1435773658541-98cedf12d3cd_wmtlbz.jpg"
        class="py-4"
      >
        <template #poll-content>
          <span class="text-bolder mt-16 mb-24"
            >What can you say about your instructor?</span
          >
          <span class="content mb-24">
            <input
              class="input px-4 py-4 text-grey"
              type="text"
              placeholder="Type something..."
            />
          </span>
        </template>
      </poll>
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
export default {
  data() {
    return {
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
    Poll: () => import("@/components/cards/Poll"),
    quizCard: () => import("@/components/cards/quizCard.vue"),
    SlaButton: () => import("@/components/SlaButton")
  },
  computed: {
    ...mapGetters([
      "getFirstname",
      "getAllEnrolledCourse",
      "getCourses",
      "announcements",
      "getPolls"
    ])
  },
  methods: {
    ...mapActions([
      "getAllCourses",
      "getAnnouncements",
      "enrolledCourses",
      "getAllPolls"
    ]),
    getSinglePoll() {
      let poll = this.getPolls.filter(
        res => res.answered === false && this.getExpiryTime(res.expiry) > 0
      );
      if (poll !== null && poll.length > 0) {
        this.polls.push(poll[0]);
      }
    },
    getExpiryTime(someDate) {
      let expiration = this.$moment(someDate);
      let current_date = this.$moment();
      let days = expiration.diff(current_date, "hours");
      return days;
    },
    getOption(event) {
      this.selected_answer = event.target.value;
    }
  },
  mounted() {
    this.enrolledCourses();
    this.getAllCourses();
    this.getAllPolls();
    this.getSinglePoll();

    // this.getAnnouncements();
    // console.log(this.$route);
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
