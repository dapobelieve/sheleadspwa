<template>
  <div v-if="activeCourse.title" class="d-flex flex-column enrolled">
    <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
      <span
        @click="goBack"
        class="truncate text-bold font-poppings mt-12 mb-12"
        style="font-size:18px"
      >
        <icon size="lg" name="left" />
        {{ activeCourse.title }}
      </span>
    </bar>
    <div>
      <div class="image position-absolute">
        <img class="width-100 object-cover" :src="activeCourse.image" alt="" />
      </div>
      <div
        class="title position-absolute font-poppins text-bold text-white truncate truncate-2 px-12"
      >
        {{ activeCourse.title }}
      </div>
    </div>
    <div class="lessoncards d-flex overflow-x-auto mx-12">
      <lesson-card
        class="mr-32"
        @click="getLesson(x._id)"
        :active="x == $route.params.lessonId"
        v-for="(x, index) in activeCourse.lessons"
        :lesson="index + 1"
      />
    </div>

    <div class="d-flex flex-column progress mt-56 ml-24">
      <span
        >Lesson {{ lesson.lesson_number }} of {{ activeCourse.lessons.length }}
      </span>
      <span style="font-size: 10px; font-weight: bold" class="mt-4"
        >OVERALL PROGRESS</span
      >
      <div style="border-radius: 5px;" class="bg-grey-100 mt-12 mr-48">
        <div
          class="bg-grey-500"
          style="border-radius: 5px; height: 5px;"
          :style="{ width: activeCourse.progress + '%' }"
        ></div>
      </div>
    </div>
    <div v-if="lesson.title">
      <div class="p-12">
        <card class="card" border :title="lesson.title">
          <h1>No lesson details</h1>
        </card>
      </div>
      <div class="mb-24 mx-24">
        <card-block
          name="eclipse"
          active
          resource="play"
          title="10 vital steps to take in carrying out the research"
        />
        <card-block
          name="eclipse"
          active
          resource="article"
          title="Assesment"
        />
      </div>
      <sla-button
        @click="goToLesson"
        class="mx-32"
        type="outline"
        text="Start Lesson"
      />
    </div>
    <!-- <div class="d-flex justify-content-center mt-56">
      <loader />
    </div> -->
  </div>
  <div
    v-else
    class="d-flex align-items-center justify-content-center"
    style="margin-top: 100%"
  >
    <loader />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      course: {},
      lesson: {}
    };
  },
  computed: {
    ...mapGetters({
      activeCourse: "getActiveCourse"
    })
  },
  components: {
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    loader: () => import("@/components/loader"),
    Card: () => import("@/components/cards/slaCard"),
    CardBlock: () => import("@/components/cards/cardBlock"),
    LessonCard: () => import("@/components/cards/lessonCard"),
    SlaButton: () => import("@/components/SlaButton")
  },
  methods: {
    ...mapActions(["enrolledCourseDetails", "getLessonDetails"]),
    goBack() {
      this.$router.go(-1);
    },
    goToLesson() {
      this.$router.push({
        name: "lesson",
        params: {
          courseId: "lkafaf",
          lessonId: "3"
        }
      });
    },
    async getLesson(lessonId) {
      this.lesson = await this.getLessonDetails({ id: lessonId });
    }
  },
  mounted() {
    // console.log(this.$)
    this.enrolledCourseDetails({
      id: this.$route.params.courseId
    });

    this.getLesson();
  }
};
</script>
<style lang="scss">
.enrolled {
  .image {
    z-index: -1;
    img {
      height: 200px;
    }
  }

  .title {
    max-width: 252px;
    margin-top: 4rem;
    font-size: 18px;
  }

  .lessoncards {
    margin-top: 232px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>