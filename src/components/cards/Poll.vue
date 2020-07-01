<template>
  <div class="poll d-flex flex-column">
    <div class="image px-8">
      <img class="object-cover" v-if="poll.cover_image" :src="poll.cover_image" alt="" />
    </div>
    <div class="stats d-flex justify-content-between mt-12 px-8">
      <span class=" text-grey">{{ poll.response }} Responses</span>
      <span v-if="poll.expiry" class=" text-grey">Expires {{ poll.expiry | moment("from", "now") }}</span>
    </div>
    <div class="question d-flex flex-column mt-16 ">
      <quiz-card class="card" :question="poll.question || poll.question_text" style="border: none;">
        <div class="d-flex flex-column align-items-start">
          <div v-if="!poll.answered">
            <label class="poll-container container" :key="option._id" v-for="option in poll.options">
              {{ option.value }}
              <input type="radio" :value="option._id" name="radio" @change="getOption($event)" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div v-else class="w-100">
            <label class="poll-container container w-100 d-flex justify-content-between" v-for="option in poll.options" :key="option._id">
              {{ option.value }}
              <section>
                <input :disabled="poll.answered" v-model="selected_answer" type="radio" :value="option._id" name="radio" />
                <span :disabled="poll.answered" class="checkmark"></span>
              </section>
              <p>{{ (option.count / poll.response) * 100 }}%</p>
            </label>
          </div>
        </div>
      </quiz-card>
    </div>
    <sla-button :disabled="isLoading" class="mx-56 mt-32" text="Submit" ref="pollSubmit" @click="handleSubmit" />
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: ["poll"],
  data() {
    return {
      isLoading: false,
      selected_answer: null
    };
  },
  components: {
    SlaButton: () => import("@/components/SlaButton"),
    quizCard: () => import("@/components/cards/quizCard.vue")
  },
  methods: {
    goTo() {
      this.$router.push({
        name: this.route
      });
    },
    getOption(event) {
      this.selected_answer = event.target.value;
    },
    ...mapActions(["submitPoll", "getAllPolls"]),
    async handleSubmit() {
      this.isLoading = !this.isLoading;
      let res = await this.submitPoll({
        poll_id: this.poll._id,
        option_id: this.selected_answer
      });
      if (res !== true) {
        this.isLoading = false;
        this.$toasted.error(res.data ? res.data.message : "An Error Occurred").goAway(2500);
      } else {
        this.isLoading = false;
        this.getAllPolls();
        this.$router.push({
          path: "/poll/success"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.poll-container {
  height: 10px !important;
  margin: 10px auto !important;
  width: 100% !important;
}
.poll {
  .image {
    img {
      height: 227px;
      width: 100%;
      border-radius: 10px;
    }
  }

  .question {
    border: 1px solid #e7e6e6;
    border-radius: 5px;

    .input {
      font-size: 14px;
      width: 100%;
      border-top: none;
      border-left: none;
      border-right: none;
      border-width: 1px;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
