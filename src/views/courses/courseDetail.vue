<template>
  <section class="d-flex flex-column">
    <div v-if="course.title" class="pass d-flex flex-column justify-content-between ">
      <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
        <span @click="goBack" class="truncate text-bold font-poppings mt-12 mb-12" style="font-size:18px">
          <icon size="lg" name="left" />
          {{ course.title }}
        </span>
      </bar>
      <div>
        <img width="100%" height="250px" :src="course.cover_image" alt="" />
      </div>
      <div class="course-info d-flex flex-column mx-16">
        <span class="about text-bold font-poppins mt-8">About this Course</span>
        <span v-html="course.details" style="line-height: 24px; letter-spacing: 0.15px" class="mt-12 mb-24"> </span>
        <!-- <div class="stats bg-grey-100 py-32 px-8">
          <small class="text-bold mt-16 ml-12 ">COURSE STATS</small>
          <div class="flex-inline align-items-center ml-12 mt-24">
            <h1 class="font-poppins text-primary">59%</h1>
            <span class="ml-24"
              >started a new business after completing these courses</span
            >
          </div>
          <div class="flex-inline align-items-center ml-12">
            <h1 class="font-poppins text-primary">72%</h1>
            <span class="ml-24"
              >started a new business after completing these courses</span
            >
          </div>
          <div class="flex-inline align-items-center ml-12">
            <h1 class="font-poppins text-primary mr-12">100</h1>
            <span class="ml-24">participants have completed this course</span>
          </div>
        </div> -->
        <div class="stats bg-grey-100 py-12 px-8 mt-12 d-flex flex-column">
          <small class="text-bold mt-16 ml-12">COURSE LESSONS: {{ lessons.length }}</small>
          <div v-for="lesson in lessons" class="flex-inline align-items-center ml-12 mt-12">
            <span style="height: 10px; width: 10px; border-radius: 50%" class=" bg-primary mr-24"> </span><span>{{ lesson.title }}</span>
          </div>
        </div>
      </div>
      <!-- <loader /> -->
      <template v-if="!hasCompleted">
        <sla-button v-if="!enrolled" class="mt-56 m-56 btn" @click="enroll" :disable="btn.loading" :text="btn.text"></sla-button>
        <sla-button v-else class="mt-56 m-56 btn" @click="goToCourse" :disable="btn.loading" text="go to course"></sla-button>
      </template>
      <template v-else>
        <sla-button class="mt-56 mx-16" disabled type="outline" text="You have completed this course" />
      </template>
      <br />
    </div>
    <div v-else class="d-flex align-items-center justify-content-center" style="margin-top: 100%">
      <loader />
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      course: {},
      enrolled: false,
      user: this.$store.state.user,
      lessons: [],
      btn: {
        text: "Enroll",
        loading: false
      }
    };
  },
  computed: {
    ...mapGetters(["getAllEnrolledCourse", ""]),
    hasCompleted() {
      return this.user.completed.map(item => item.course._id).includes(this.course._id);
    }
  },
  components: {
    SlaMenu: () => import("@/components/SlaMenu"),
    Icon: () => import("@/components/SlaIcon"),
    loader: () => import("@/components/loader"),
    Bar: () => import("@/components/SlaBar"),
    SlaButton: () => import("@/components/SlaButton")
  },
  methods: {
    ...mapActions(["getCourse", "enrollToCourse"]),
    async enroll() {
      this.btn.loading = true;
      this.btn.text = "loading...";
      let res = await this.enrollToCourse({
        course: this.course._id
      });
      this.btn = {
        text: "Enroll",
        loading: false
      };
      if (res == true) {
        this.$toasted.success("Successfully enrolled for course").goAway(2500);
        // persist this course details (id, title, image, number of lesson) to state
        this.goToCourse();
      } else {
        this.$toasted.error(res.data.message).goAway(2500);
      }
    },
    goToCourse() {
      this.$router.push({
        name: "lesson-details",
        params: {
          courseId: this.course._id
        }
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    let courseId = this.$route.params.courseId;
    if (this.getAllEnrolledCourse.some(course => course.course._id == courseId)) {
      this.enrolled = true;
    }
  },
  async created() {
    let res = await this.getCourse({
      id: this.$route.params.courseId
    });

    if (res.status == 200) {
      this.course = res.data.data.course;
      this.lessons = res.data.data.lessons;
    }
  }
};
</script>
<style lang="scss" scoped>
.course-info {
  .about {
    font-size: 16px !important;
    line-height: 24px;
    letter-spacing: 0.15px;
  }

  .stats {
    border-radius: 5px;
    font-size: 12px;
  }
}
.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
