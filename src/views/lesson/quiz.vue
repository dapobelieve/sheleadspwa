<template>
  <div class="messages d-flex flex-column">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="text-bolder text-align-center width-100 mb-24">
        <span style="font-size: 19px">Quiz</span>
      </div>

      <div class="d-flex width-100 align-items-center flex-column justify-content-between" style="height: calc(100vh - 160px)">
        <div class="dquiz width-100 mb-24">
          <div v-if="quiz && Object.entries(quiz).length > 0" style="border: 1px solid #E7E6E6; border-radius: 10px" class="mx-24 p-12">
            <div class="question text-bolder mb-24">
              {{ quiz.question_text }}
            </div>
            <div class="d-flex flex-column">
              <span v-for="o in quiz.options" style="font-size: 16px">
                <input @change="mark($event)" type="radio" :id="o.value" :value="o.value" name="quiz-options" class="mt-12 flex-inline align-items-baseline" />
                <label class="ml-8" :for="o.value">{{ o.value }}</label>
              </span>
            </div>
          </div>
        </div>
        <div class="mb-24">
          <div class="d-flex">
            <div v-if="answer.show" class="d-flex flex-column p-12 align-items-center justify-content-center report">
              <h6 :class="answer.isCorrect ? 'text-success' : 'text-danger'">{{ answer.text }}</h6>
              <p v-if="answer.isCorrect">{{ answer.reward }}xp earned</p>
              <p v-else class="text-bolder mt-12">"{{ answer.correction }}"</p>
              <small v-if="!answer.isCorrect">is the correct answer</small>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center align-self-end width-100">
          <sla-button class="width-100 mx-48" disable type="outline" @click="updateQuiz(quiz)" text="next" />
        </div>
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
      answer: {
        isCorrect: false,
        text: "Wrong Answer",
        reward: 0,
        correction: "",
        show: false
      },
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
    mark(e) {
      if (e.target.value === this.quiz.answer) {
        this.answer.isCorrect = true;
        this.answer.text = "You're a Genius";
        this.answer.reward = parseInt(this.quiz.reward);
      } else {
        this.answer.isCorrect = false;
        this.answer.text = "Wrong Answer";
        this.answer.reward = 0;
        this.answer.correction = this.quiz.answer;
      }

      this.answer.show = true;

      this.questions.filter(item => {
        if (item._id == this.quiz._id) {
          item["answered"] = true;
        }
      });
    },
    updateQuiz(quiz) {
      console.log(quiz);
    }
  },
  mounted() {
    const questions = [...this.$store.state.user.activeCourse.quiz];
    // this.
  },
  beforeRouteEnter(to, from, next) {
    next();
  }
};
</script>
<style lang="scss" scoped>
.report {
  height: 275px;
  width: 275px;
  background-color: #e8e3e345;
  border-radius: 50%;
}
a {
  color: none;
}
</style>
