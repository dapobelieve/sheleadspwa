<template>
  <div v-if="activeCourse.title" class="d-flex flex-column enrolled">
    <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
      <span @click="goBack" class="truncate text-bold font-poppings mt-12 mb-12" style="font-size:18px">
        <icon size="lg" name="left" />
        {{ activeCourse.title }}
      </span>
    </bar>
    <div>
      <div class="image position-absolute" style="width: 100%">
        <img class="width-100 object-cover" :src="activeCourse.image" alt="" />
      </div>
    </div>
    <div class="lessoncards d-flex overflow-x-auto mx-12">
      <lesson-card class="mr-32" v-for="(x, index) in activeCourse.lessons" @click="getLesson(x._id)" :active="index + 1 == lesson.lesson_number" :lesson="index + 1" :key="x._id" />
    </div>
    <div class="d-flex flex-column mt-56 ml-24">
      <span>Lesson {{ lesson.lesson_number }} of {{ activeCourse.lessons.length }} </span>
      <span style="font-size: 10px; font-weight: bold" class="mt-4">OVERALL PROGRESS</span>
      <div style="border-radius: 5px;" class="bg-grey-100 mt-12 mr-48">
        <div class="bg-grey-500" style="border-radius: 5px; height: 5px;" :style="{ width: activeCourse.progress + '%' }"></div>
      </div>
    </div>
    <div v-if="loading" class="d-flex justify-content-center mt-56">
      <loader />
    </div>
    <div v-else>
      <div class="p-12">
        <card class="card" border :title="lesson.title">
          {{ lesson.details }}
        </card>
      </div>
      <div class="mb-24 mx-24">
        <card-block v-if="lesson._id" active :resource="lesson.lesson_type" :title="lesson.title" />
      </div>
    </div>
    <sla-button class="mx-48" @click="goToLesson" type="outline" text="Start Lesson" />
  </div>
  <div v-else class="d-flex align-items-center justify-content-center" style="margin-top: 100%">
    <loader />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      lesson: {},
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      activeCourse: "getActiveCourse"
    }),
    lessons() {
      return this.activeCourse.lessons.sort((a, b) => {
        return a.lesson_number > b.lesson_number ? 1 : -1;
      });
    },
    lessonType() {
      switch (this.lesson.lesson_type) {
        case "video":
          return "play";
          break;
        case "audio":
          return "play";
          break;
        case "article":
          return "file";
          break;
      }
      return this.lesson.lesson_type;
    }
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
          courseId: this.$route.params.courseId,
          lessonId: this.lesson._id
        }
      });
    },
    async getLesson(lessonId) {
      this.loading = !this.loading;
      this.lesson = await this.getLessonDetails({ id: lessonId });
      this.loading = !this.loading;
    }
  },
  async mounted() {
    await this.enrolledCourseDetails({
      id: this.$route.params.courseId
    });

    let dat = this.activeCourse.lessons.sort((a, b) => {
      return a.lesson_number > b.lesson_number ? 1 : -1;
    });

    await this.getLesson(this.activeCourse.lessons[0]._id);
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
    margin-top: 232px !important;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
