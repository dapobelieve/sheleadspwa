<template>
  <div class="d-flex flex-column">
    <bar
      style="height: 40px"
      class="shadow-3 position-sticky top-0 flex-inline align-items-center bottom-0 z-index-1 bg-white"
    >
      <div @click="goBack" class="truncate text-bold font-poppings mt-12 mb-12">
        <icon size="lg" name="left" />
      </div>
      <div class="d-flex width-100 flex-row justify-content-between">
        <lesson-icons
          @click="getLesson(x._id)"
          v-for="(x, index) in user.activeCourse.lessons"
          :active="index + 1 == lesson.lesson_number"
          :number="index + 1"
        />
      </div>
    </bar>
    <section
      v-if="lesson.lesson_type == 'video' || lesson.lesson_type == 'audio'"
      class="d-flex flex-column "
    >
      <div>
        <div class="media object-cover">
          <!-- <iframe
            class="width-100"
            height="315"
            :src="lesson.content"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> -->

          <p v-html="lesson.content"></p>
        </div>
      </div>
      <div
        class="mx-16 mt-48 d-flex flex-column flex-column justify-content-between"
      >
        <div class="text-bold mb-24">Transcript</div>
        <div
          class="align-self-stretch"
          style="letter-spacing: 0.15px !important; line-height: 32px"
        >
          {{ lesson.details }}
        </div>
        <div class="align-self-center mt-56">
          <sla-button @click="completeLesson" type="outline" text="Next" />
        </div>
      </div>
    </section>
    <section v-if="lesson.lesson_type == 'article'" class="d-flex flex-column ">
      <div
        class="mx-16 mt-48 d-flex flex-column flex-column justify-content-between"
      >
        <div class="text-bold mb-24">{{ lesson.title }}</div>
        <div
          class="align-self-stretch"
          style="letter-spacing: 0.15px !important; line-height: 32px"
        >
          {{ lesson.content }}
        </div>
        <p>{{ lesson.lesson_type }}</p>
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
      lesson: this.$store.user.active
    };
  },
  components: {
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    Card: () => import("@/components/cards/slaCard"),
    CardBlock: () => import("@/components/cards/cardBlock"),
    loader: () => import("@/components/loader"),
    SlaButton: () => import("@/components/SlaButton"),
    LessonIcons: () => import("@/components/lessonIcons.vue")
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters({
      lesson: "getActiveLesson"
    })
  },
  methods: {
    ...mapActions(["lessonComplete", "getLessonDetails"]),
    goBack() {
      this.$router.go(-1);
    },
    async completeLesson() {
      let res = await this.lessonComplete({
        course_id: this.$route.params.courseId,
        lesson_number: this.lesson.lesson_number
      });

      if (res.status == 200) {
        alert("Lesson Completed");
      } else {
        alert("Internal Server Error");
      }
    },
    async getLesson(lessonId) {
      // this.loading = !this.loading;
      await this.getLessonDetails({ id: lessonId });
      // this.loading = !this.loading;
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
