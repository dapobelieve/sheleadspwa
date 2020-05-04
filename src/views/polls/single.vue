<template>
  <div class="messages d-flex flex-column mb-24">
    <top heading="Week 0 Poll" />
    <div class="discuss d-flex mt-12">
      <poll
        text="submit Poll"
        :image="item.cover_image"
        class="py-4"
        :poll_id="item._id"
        :option_id="selected_answer"
        :expiry="getExpiryTime(item.expiry)"
        style="min-width: 100%!important;"
      >
        <template #poll-content>
          <quiz-card
            class="card"
            :question="item.question"
            style="border: none;"
          >
            <div class="d-flex flex-column">
              <label class="container mr-56" v-for="option in item.options">
                {{ option.value }}
                <input
                  type="radio"
                  :value="option._id"
                  name="radio"
                  @change="getOption($event)"
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </quiz-card>
        </template>
      </poll>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      selected_answer: null
    };
  },
  props: ["item"],

  computed: {
    ...mapGetters(["getPolls"])
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
  methods: {
    getOption(event) {
      this.selected_answer = event.target.value;
    },
    getExpiryTime(someDate) {
      let expiration = this.$moment(someDate);
      let current_date = this.$moment();
      let days = expiration.diff(current_date, "hours");
      return days;
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
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
