<template>
  <section class="d-flex flex-column">
    <div class="pass d-flex flex-column justify-content-between ">
      <div class="hr"></div>

      <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
        <span
          @click="goBack"
          class="truncate text-bold font-poppings mt-12 mb-12"
          style="font-size:18px"
        >
          <icon size="lg" name="left" />
          {{ course.title }}
        </span>
      </bar>
      <div>
        <img width="100%" height="250px" :src="course.cover_image" alt="" />
      </div>
      <div class="course-info d-flex flex-column mx-16">
        <span class="about text-bold font-poppins">About this Course</span>
        <span
          style="line-height: 32px; letter-spacing: 0.15px"
          class="mt-12 mb-24"
        >
          {{ course.details }}
        </span>
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
        <div class="stats bg-grey-100 py-32 px-8 mt-24 d-flex flex-column">
          <small class="text-bold mt-16 ml-12"
            >COURSE LESSON: {{ lessons.length }}</small
          >
          <div
            v-for="lesson in lessons"
            class="flex-inline align-items-center ml-12 mt-24"
          >
            <span
              style="height: 10px; width: 10px; border-radius: 50%"
              class=" bg-primary mr-24"
            >
            </span
            ><span>{{ lesson.title }}</span>
          </div>
        </div>
      </div>
      <!-- <loader /> -->
      <p
        class="heading text-bold font-poppings ml-56 "
        style="position:absolute; top:100px;left:0; font-weight: 600;font-size: 18px; line-height: 37px;letter-spacing: 0.008em; width:200px"
      >
        {{ course.title }}
      </p>
      <sla-button
        class="mt-56 m-56 btn"
        @click="enroll"
        :disable="btn.loading"
        :text="btn.text"
      ></sla-button>
      <br />
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      course: {},
      lessons: [],
      btn: {
        text: "Enroll",
        loading: false
      }
    };
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
      let res = await this.enrollToCourse({
        course: this.course._id
      });

      if (res == true) {
        alert("Successfully enrolled for course");

        this.$router.push({
          name: "lesson-details",
          params: {
            courseId: this.course._id,
            lessonId: 1
          }
        });
      }
    },
    goBack() {
      this.$router.go(-1);
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
