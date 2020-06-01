<template>
  <div class="home d-flex flex-column ml-16 mb-24">
    <div class="d-flex align-items-center justify-content-between mt-48">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Courses in Progress
      </span>
      <more-arrow route="enrolled" v-if="getAllEnrolledCourse && getAllEnrolledCourse.length > 2" />
    </div>
    <!-- Enrolled courses -->
    <div>
      <div v-if="getAllEnrolledCourse && getAllEnrolledCourse.length > 0" class="courses x-flow mt-12 py-4 d-flex overflow-x-auto">
        <course v-for="x in getAllEnrolledCourse.slice(0, 8)" :key="x.course._id" :course="x" hasProgress :percentage="x.progress.toFixed(1)" />
      </div>
      <empty-state v-else message="You have no course in progress" />
    </div>

    <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Courses for you
      </span>
      <more-arrow route="recommended" v-if="getPersonalisedCourses.length > 2" />
    </div>
    <div>
      <div v-if="getPersonalisedCourses && getPersonalisedCourses.length > 0" class="courses x-flow mt-12 py-4 d-flex overflow-x-auto">
        <course v-for="course in getPersonalisedCourses.slice(0, 8)" :course="course" :key="course._id" />
      </div>
      <empty-state v-else message="No personalised courses for you" />
    </div>

    <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Saved Courses
      </span>
      <more-arrow route="saved-courses" v-if="getSavedCourses.length > 2" />
    </div>
    <div>
      <div v-if="getSavedCourses && getSavedCourses.length > 0" class="courses x-flow mt-12 py-4 d-flex overflow-x-auto">
        <course v-for="x in getSavedCourses.slice(0, 8)" :key="x.course" :course="x" />
      </div>
      <empty-state v-else message="No saved courses yet" />
    </div>

    <div class="mt-12">
      <div class="d-flex align-items-center justify-content-between mt-48">
        <span style="font-size: 16px" class="flex-inline font-poppins text-bold ">
          Categories
        </span>
      </div>
      <div class="d-flex mt-8 x-flow overflow-x-auto">
        <micro-card class="cursor-pointer" :key="item._id" :category="item" v-for="item in getCategories" />
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        New Courses
      </span>
      <more-arrow route="new-courses" v-if="getNewCourse.length > 2" />
    </div>
    <div>
      <div v-if="getNewCourse && getNewCourse.length > 0" class="courses x-flow mt-12 py-4 d-flex overflow-x-auto">
        <course v-for="x in getNewCourse.slice(0, 8)" :key="x._id" :course="x" />
      </div>
      <empty-state v-else message="No new courses yet" />
    </div>
    <!-- <sla-button
      type="outline"
      :disable="btn.loading"
      class="mt-56 ml-8 mr-24"
      :text="btn.text"
    ></sla-button> -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      btn: {
        text: "load more",
        loading: false
      }
    };
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue"),
    Course: () => import("@/components/cards/CourseDetailsCard"),
    Announce: () => import("@/components/cards/Announce"),
    Discussion: () => import("@/components/cards/Discussion"),
    SlaButton: () => import("@/components/SlaButton"),
    emptyState: () => import("@/components/emptyState"),
    moreArrow: () => import("@/components/moreArrow"),
    MicroCard: () => import("@/components/cards/smallcard")
  },
  computed: {
    ...mapGetters(["getFirstname", "getAllEnrolledCourse", "getPersonalisedCourses", "getNewCourse", "getCategories", "getSavedCourses"])
  },
  methods: {
    ...mapActions(["getAllCourses", "getAppCategories", "enrolledCourses", "personalisedCourses", "getNewCourses", "savedCourses"])
  },
  created() {
    this.enrolledCourses();
    this.getAllCourses();
    this.personalisedCourses();
    this.getNewCourses();
    this.getAppCategories();
    this.savedCourses();
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
