<template>
  <div class="home d-flex flex-column mb-24">
    <p class="greet font-poppins text-bold ml-16">Welcome {{ getFirstname }}!</p>
    <div class="alert bg-grey-100 pl-8 pr-16 ml-16 py-4 text-bolder">
      Your lessons are selected based on your preferences
    </div>
    <div class="mt-24 ml-16">
      <span class="font-poppins text-bold" style="font-size: 16px">Leaderboard Position</span>
      <div class="user-rank d-flex mt-12">
        <div class="rank bg-primary text-white d-flex justify-content-center align-items-center text-align-center">7th</div>
        <div class="rank flip d-flex justify-content-center align-items-center text-align-center">400XP</div>
      </div>
    </div>

    <banner class="mt-12 mx-16 mt-24" />

    <div class="d-flex align-items-center justify-content-between mt-48">
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
    <div class="courses x-flow mt-12 py-2 d-flex overflow-x-auto">
      <course-enrolled
        v-for="x in getAllEnrolledCourse"
        :title="x.course.title"
        hasProgress
        :id="x.course._id"
        :percentage="x.progress.toFixed(1)"
        :image="x.course.cover_image"
      />
    </div>

    <div class="d-flex align-items-center justify-content-between mt-48">
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

    <div class="courses x-flow mt-12 py-2 d-flex overflow-x-auto">
      <course
        v-for="item in getCourses"
        :key="item._id"
        :title="item.title"
        :image="item.cover_image"
        :id="item._id"
      />
    </div>

    <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Announcements
      </span>
      <img
        class="mr-24"
        height="19"
        width="19"
        src="@/assets/icons/arrow-right.png"
        alt=""
      />
    </div>
    <div
      v-if="announcements.length > 0"
      class="announce x-flow d-flex mt-12 mb-12 py-4 overflow-x-auto"
    >
      <announce
        :title="item.title"
        :message="item.details"
        class=" py-4"
        v-for="item in announcements"
      />
    </div>
    <loader v-else />
    <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Discussion Topics
      </span>
      <img
        class="mr-24"
        height="19"
        width="19"
        src="@/assets/icons/arrow-right.png"
        alt=""
      />
    </div>
    <div class="discuss x-flow d-flex mt-12 overflow-x-auto">
      <discussion class="py-4" v-for="a in 20" />
    </div>
    <router-link :to="{ name: 'create-topic' }">
      <div
        class="add shadow bg-white position-fixed d-flex justify-content-center align-items-center"
      >
        <icon class="text-primary" size="lg" name="plus" />
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue"),
    Course: () => import("@/components/cards/CourseCard"),
    CourseEnrolled: () => import("@/components/cards/CourseDetailsCard"),
    Announce: () => import("@/components/cards/Announce"),
    loader: () => import("@/components/loader"),
    banner: () => import("@/components/Banner"),
    Discussion: () => import("@/components/cards/Discussion")
  },
  computed: {
    ...mapGetters([
      "getFirstname",
      "getAllEnrolledCourse",
      "getCourses", 
      "announcements"
    ])
  },
  methods: {
    ...mapActions([
      "getAllCourses", 
      "getAnnouncements",
      "enrolledCourses"
    ])
  },
  mounted() {
    this.enrolledCourses();
    this.getAllCourses();
    this.getAnnouncements();
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
    width: 75px ;
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
