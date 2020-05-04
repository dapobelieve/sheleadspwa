<template>
  <div class="messages d-flex flex-column mb-24">
    <top heading="Polls" />
    <div class="search d-flex align-items-center position-relative mt-32 px-32">
      <input
        class="px-8"
        placeholder="Search for tags or titles..."
        type="text"
      />
      <span class="bg-white text-grey-500 ml-12 position-absolute"
        ><icon class="text-align-right" name="search"
      /></span>
    </div>
    <div class="mt-12 mx-12">
      <div class="d-flex justify-content-around flex-wrap mt-8">
        <mini-card
          @click="
            $router.push({
              name: 'single',
              params: {
                item: poll
              }
            })
          "
          class="mb-24"
          :image="poll.cover_image"
          :cardwidth="160"
          v-for="poll in polls"
          :title="poll.question"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      polls: []
    };
  },

  computed: {
    ...mapGetters(["getPolls"])
  },
  components: {
    top: () => import("@/components/top"),
    Icon: () => import("@/components/SlaIcon"),
    MiniCard: () => import("@/components/cards/minicard"),
    MicroCard: () => import("@/components/cards/smallcard")
  },
  methods: {
    ...mapActions(["getAllPolls"]),
    getExpiryTime(someDate) {
      let expiration = this.$moment(someDate);
      let current_date = this.$moment();
      let days = expiration.diff(current_date, "hours");
      return days;
    }
  },
  mounted() {
    this.polls = this.getPolls.filter(
      res => res.answered === false && this.getExpiryTime(res.expiry) > 0
    );
  }
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
