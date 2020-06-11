<template>
  <div class="messages d-flex justify-content-between flex-column mb-24">
    <top :heading="getPoll.title" />
    <div class="poll d-flex flex-column">
      <div class="poll d-flex flex-column">
        <div class="image px-8">
          <img class="object-cover mx-auto" v-if="getPoll.cover_image" :src="getPoll.cover_image" alt="" />
        </div>
        <div class="stats d-flex justify-content-between mt-12 px-8">
          <span class=" text-grey">{{ getPoll.response }} Responses</span>
          <span v-if="getPoll.expiry" class=" text-grey">Expires {{ getPoll.expiry | moment("from", "now") }}</span>
        </div>
        <div class="question d-flex flex-column mt-16 ">
          <quiz-card class="card" :question="getPoll.question" style="border: none;">
            <div class="d-flex flex-column align-items-start">
              <label class="poll-container container" v-for="option in getPoll.options">
                {{ option.value }}
                <input type="radio" :value="option._id" name="radio" @change="getOption($event)" />
                <span class="checkmark"></span>
              </label>
            </div>
          </quiz-card>
        </div>
        <sla-button :disabled="isLoading" class="mx-56 mt-32" text="Submit" ref="pollSubmit" @click="handleSubmit" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      selected_answer: null,
      isLoading: false
    };
  },
  props: ["item"],

  computed: {
    ...mapGetters(["getPoll"])
  },
  components: {
    top: () => import("@/components/top"),
    Icon: () => import("@/components/SlaIcon"),
    MiniCard: () => import("@/components/cards/minicard"),
    MicroCard: () => import("@/components/cards/smallcard"),
    Poll: () => import("@/components/cards/Poll"),
    quizCard: () => import("@/components/cards/quizCard.vue"),
    SlaButton: () => import("@/components/SlaButton")
  },
  created() {
    this.fetchSinglePoll({
      id: this.$route.params.id
    });
  },
  methods: {
    ...mapActions(["fetchSinglePoll", "submitPoll", "addAnnoucementComment"]),
    getOption(event) {
      this.selected_answer = event.target.value;
    },
    getExpiryTime(someDate) {
      let expiration = this.$moment(someDate);
      let current_date = this.$moment();
      let days = expiration.diff(current_date, "hours");
      return days;
    },
    async handleSubmit() {
      this.isLoading = !this.isLoading;
      let res = await this.submitPoll({
        poll_id: this.getPoll._id,
        option_id: this.selected_answer
      });
      if (res !== true) {
        this.isLoading = false;
        this.$toasted.error(res.data ? res.data.message : "An Error Occurred").goAway(2500);
      } else {
        this.isLoading = false;
        this.$router.push({
          path: "/polls/success"
        });
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.poll-container {
  height: 10px !important;
  margin: 10px auto !important;
  width: 100% !important;
}
.messages {
  .search {
    input {
      width: 100%;
      height: 40px;
      font-size: 14px;
      color: #999999;
      letter-spacing: 0.15px;
      border-radius: 5px;
      border-width: 1px;
      border: 1px solid #e7e6e6;
      box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.06);

      &:focus {
        outline: none;
      }
    }

    span {
      right: 38px;
    }
  }

  .x-flow {
    &::-webkit-scrollbar {
      display: none;
    }
    & > :not(:last-child) {
      margin-right: 12px !important;
    }
    & > *:last-child {
      padding-right: 12px !important;
    }
    & > *:first-child {
      // margin-left: 12px;
    }
  }
}
</style>
