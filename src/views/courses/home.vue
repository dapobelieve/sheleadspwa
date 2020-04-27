<template>
  <div class="home d-flex flex-column ml-16 mb-24">
    <div class="d-flex align-items-center justify-content-between mt-48">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
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
      <course
        v-for="x in getAllEnrolledCourse"
        :title="x.course.title"
        hasProgress
        :id="x.course._id"
        :percentage="x.progress.toFixed(1)"
        :image="x.course.cover_image"
      />
    </div>

    <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Courses for you
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
        v-for="course in getPersonalisedCourses"
        :title="course.title"
        :image="course.cover_image"
        :id="course._id"
      />
    </div>

    <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Saved Courses
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
        v-for="x in 12"
        title="A Step By Step Guide To Starting Your Business"
        id="lkhsdu676876d"
        image="https://res.cloudinary.com/rohing/image/upload/q_47/v1585572497/harley-davidson-1HZcJjdtc9g-unsplash_vwslej.jpg"
      />
    </div>

    <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        New Courses
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
        v-for="x in 12"
        title="A Step By Step Guide To Starting Your Business"
        id="lkhsdu676876d"
        image="https://res.cloudinary.com/rohing/image/upload/v1586912154/photo-1557499305-0af888c3d8ec_v1sq2l.jpg"
      />
    </div>
    <sla-button
      type="outline"
      :disable="btn.loading"
      class="mt-56 ml-8 mr-24"
      :text="btn.text"
    ></sla-button>
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
    SlaButton: () => import("@/components/SlaButton")
  },
  computed: {
    ...mapGetters([
      "getFirstname",
      "getAllEnrolledCourse",
      "getPersonalisedCourses",
      "getNewCourse"
    ])
  },
  methods: {
    ...mapActions([
      "getAllCourses",
      "enrolledCourses",
      "personalisedCourses",
      "getNewCourses"
    ])
  },
  mounted() {
    this.enrolledCourses();
    // this.getAllCourses();
    this.personalisedCourses();
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
