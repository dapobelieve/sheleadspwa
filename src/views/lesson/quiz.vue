<template>
  <div class="messages d-flex flex-column">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="text-bolder text-align-center width-100 mb-24">
        <span style="font-size: 19px">Quiz</span>
      </div>
      <div style="height: calc(100vh - 150px)" class="dquiz width-100">
        <div style="border: 1px solid #E7E6E6; border-radius: 10px" class="mx-24 p-12">
          <div class="question text-bolder mb-24">
            {{ quiz.question_text }}
          </div>
          <div class="d-flex flex-column">
            <span v-for="o in quiz.options" style="font-size: 16px"><input type="radio" name="quiz-options" class="mt-12 flex-inline align-items-baseline" /> {{ o.value }}</span>
          </div>
        </div>
      </div>
      <div class="">
        <sla-button type="outline" @click="updateQuiz(quiz)" text="next" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      questions: [],
      btn: {
        text: "continue",
        loading: false
      }
    };
  },
  components: {
    SlaButton: () => import("@/components/SlaButton"),
    Icon: () => import("@/components/SlaIcon"),
    top: () => import("@/components/top")
  },
  computed: {
    quiz() {
      return this.questions
        .filter(item => {
          return !("answered" in item);
        })
        .slice(0, 1)[0];
    }
  },
  methods: {
    updateQuiz(quiz) {
      console.log(quiz);
    }
  },
  mounted() {
    this.questions = [...this.$store.state.user.activeCourse.quiz];
  },
  beforeRouteEnter(to, from, next) {
    next();
  }
};
</script>
<style lang="scss" scoped>
a {
  color: none;
}
</style>
