<template>
  <div class="d-flex flex-column mt-12 px-8 ">
    <div class="px-32">
      <img class="image" :src="survey.survey_image" alt="" />
    </div>
    <div class="text-align-center mt-12">Expires {{ survey.expiry | fromNow }}</div>
    <div class="line-thin mt-24"></div>
    <div v-for="(question, index) in survey.questions">
      <quiz-card v-if="question.has_options" class="card" :question="question.question_text" style="border: none;">
        <div :id="question._id" :ref="`survey_quiz_answer-${question._id}`" class="d-flex flex-column">
          <label class="container" v-for="option in question.possible_options">
            {{ option }}
            <input type="radio" :value="option" :name="`quiz-group-${index}`" />
            <span class="checkmark"></span>
          </label>
        </div>
      </quiz-card>
      <div v-else class="mt-32">
        <div class="d-flex flex-column px-8" style="border: 1px solid #E7E6E6; border-radius: 5px">
          <div class="my-24 text-bolder">{{ question.question_text }}</div>
          <textarea :id="question._id" :ref="`survey_text_answer-${question._id}`" class="width-100 textarea px-8 py-4 mb-24" placeholder="Type your response here"></textarea>
        </div>
      </div>
      <div v-if="index + 1 != survey.questions.length" class="line-thin mt-24"></div>
    </div>
    <sla-button :disabled="isLoading" class="mx-56 mt-32" :text="text" @click="submitSurvey" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      isLoading: false,
      text: "Submit Survey",
      survey: {}
    };
  },
  components: {
    top: () => import("@/components/top"),
    quizCard: () => import("@/components/cards/quizCard.vue"),
    SlaButton: () => import("@/components/SlaButton"),
    Poll: () => import("@/components/cards/Poll")
  },
  methods: {
    ...mapActions(["getSurveyDetails", "submitSurveyApi"]),
    async submitSurvey() {
      let answers = [];
      for (let ref in this.$refs) {
        if (ref.indexOf("answer") > -1) {
          if (ref.indexOf("quiz") > -1) {
            let eles = this.$refs[ref][0];
            let option = eles.querySelectorAll("input[type=radio]:checked")[0];
            if (typeof option === "undefined") {
              //not selected an option
            } else {
              answers.push({
                question_id: eles.id,
                answer: option.value
              });
            }
          } else if (ref.indexOf("text") > -1) {
            answers.push({
              question_id: this.$refs[ref][0].id,
              answer: this.$refs[ref][0].value
            });
          }
        }
      }

      let res = await this.submitSurveyApi({
        id: this.id,
        answers
      });

      if (res && res.status == 200) {
        this.$toasted.show("Thanks for completing the survey", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 5000
        });

        this.$router.replace({
          name: "survey-complete"
        });
      } else {
        this.$toasted.show("You have already taken this survey", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 5000
        });
      }
    }
  },
  async mounted() {
    let res = await this.getSurveyDetails({
      id: this.id
    });

    this.survey = { ...res.data.data.survey, questions: res.data.data.questions };
    // this.survey.questions =
  }
};
</script>
<style lang="scss" scoped>
.image {
  width: 100%;
  border-radius: 5px;
}

.textarea {
  height: 45px;
  // width: 100%;
  border-radius: 5px;
  resize: none;
  font-size: 12px;
  // background-color: #f4f4f4;
  border: 1px solid #e7e6e6;
  border-top: none;
  border-left: none;
  border-right: none;
  // font-family: "Open sans";
  // margin-left: 1.8rem;

  &:focus {
    outline: none;
  }
}
</style>
