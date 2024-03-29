<template>
  <div class="d-flex flex-column">
    <bar style="height: 40px" class="shadow-3 position-sticky top-0 flex-inline align-items-center bottom-0 z-index-1 bg-white">
      <div @click="goBack" class="truncate text-bold font-poppings mt-12 mb-12">
        <icon size="lg" name="left" />
      </div>
      <div class="d-flex width-100 flex-row justify-content-between">
        <lesson-icons @click="getLesson(x._id)" v-for="(x, index) in user.activeCourse.lessons" :key="x._id" :active="index + 1 == lesson.lesson_number" :number="index + 1" />
      </div>
    </bar>
    <section class="d-flex flex-column ">
      <div class="mx-16 mt-48 d-flex flex-column flex-column justify-content-between">
        <h3 class="font-poppins text-bold mb-24">{{ lesson.title }}</h3>
        <lesson-wrapper :lesson="lesson" />
        <div class="align-self-center mt-56">
          <sla-button @click="completeLesson" type="outline" text="Next" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      userData: this.$store.state.user
    };
  },
  components: {
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    LessonWrapper: () => import("@/components/lessons/wrapper"),
    Card: () => import("@/components/cards/slaCard"),
    CardBlock: () => import("@/components/cards/cardBlock"),
    loader: () => import("@/components/loader"),
    SlaButton: () => import("@/components/SlaButton"),
    LessonIcons: () => import("@/components/lessonIcons.vue")
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters({
      lesson: "getActiveLesson",
      activeCourse: "getActiveCourse"
    }),
    hasCompleted() {
      return this.userData.completed.map(item => item.course._id).includes(this.activeCourse.id);
    }
  },
  methods: {
    ...mapActions(["lessonComplete", "getLessonDetails"]),
    goBack() {
      this.$router.go(-1);
    },
    async completeLesson() {
      if (!this.hasCompleted) {
        let res = await this.lessonComplete({
          course_id: this.$route.params.courseId,
          lesson_number: this.lesson.lesson_number
        });
        this.$toasted.success("Lesson Completed").goAway(2500);
      }

      if ((typeof res != "undefined" && res.status == 200) || this.hasCompleted == true) {
        let nextLesson = this.activeCourse.lessons.find(item => {
          return item.lesson_number == parseInt(this.lesson.lesson_number) + 1;
        });

        if (nextLesson && Object.entries(nextLesson).length > 0) {
          await this.getLesson(nextLesson._id);
        } else {
          if (this.activeCourse.quiz.length > 0 && this.activeCourse.quiz[0].options.length > 0) {
            if (!this.hasCompleted) {
              this.$router.replace({
                name: "course-quiz"
              });
            }
          } else {
            this.$router.replace({
              name: "course-completed"
            });
          }
        }
      } else {
        this.$toasted.error("An error occured").goAway(2500);
      }
    },
    async getLesson(lessonId) {
      await this.getLessonDetails({ id: lessonId });
    }
  }
};
</script>
<style lang="scss">
a {
  color: black;
  text-decoration: none;
}
.enrolled {
  .media {
    height: 200px;
  }

  .title {
    max-width: 192px;
    margin-top: 4rem;
    font-size: 18px;
  }

  .lessoncards {
    margin-top: 80px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
