<template>
  <div class="survey">
    <top heading="Feedback Survey" />
    <div class="d-flex flex-column mt-12 px-8 ">
      <div class="px-32">
        <img class="image" :src="survey.survey_image" alt="" />
      </div>
      <div class="text-align-center">Expires {{ survey.expiry | fromNow }}</div>
      <div class="line-thin mt-24"></div>
      <div v-for="question in survey.questions">
        <quiz-card v-if="question.has_options" class="card" :question="question.question_text" style="border: none;">
          <div class="d-flex flex-column">
            <label class="container mr-56" v-for="option in question.possible_options">
              {{ option }}
              <input type="radio" :value="option._id" name="radio" />
              <span class="checkmark"></span>
            </label>
            <sla-button :disabled="isLoading" class="mx-56 mt-32" :text="text" ref="pollSubmit" @click="goTo()" />
          </div>
        </quiz-card>
        <poll text="submit survey" class="py-4">
          <template #poll-content>
            <span class="text-bolder mt-16 mb-24">{{ question.question_text }}</span>
            <span class="content mb-24">
              <input class="input px-4 py-4 text-grey" type="text" placeholder="Type something..." />
            </span>
          </template>
        </poll>
        <div class="line-thin mt-8"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      text: "Submit Survey",
      isLoading: false,
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
    ...mapActions(["getSurveyDetails"]),
    goTo() {
      this.$router.push({
        name: "survey-complete"
      });
    }
  },
  async created() {
    let res = await this.getSurveyDetails({
      id: this.$route.params.id
    });

    this.survey = res.data.data.survey;
    this.survey.questions = res.data.data.questions;
  }
};
</script>
<style lang="scss" scoped>
.image {
  width: 100%;
  border-radius: 5px;
}
</style>
