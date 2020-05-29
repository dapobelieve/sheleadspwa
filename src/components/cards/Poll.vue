<template>
  <div class="poll d-flex flex-column">
    <div class="image px-8">
      <img class="object-cover" :src="image" alt="" />
    </div>
    <span class="text-align-center mt-12 text-grey"> Expires {{ expiry | fromNow }} </span>
    <div class="question d-flex flex-column mt-16 mx-8 px-12 ">
      <slot name="poll-content"></slot>
    </div>
    <sla-button :disabled="isLoading" class="mx-56 mt-32" :text="text" ref="pollSubmit" @click="goTo()" />
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: ["image", "text", "expiry", "poll_id", "route"],
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    SlaButton: () => import("@/components/SlaButton")
  },
  methods: {
    goTo() {
      this.$router.push({
        name: this.route
      });
    },
    ...mapActions(["submitPoll"])
    // async handleSubmit() {
    //   this.isLoading = !this.isLoading;
    //   let res = await this.submitPoll({
    //     poll_id: this.poll_id,
    //     option_id: this.option_id
    //   });
    //   if (res !== true) {
    //     this.isLoading = false;
    //     alert(res.data ? res.data.message : "An Error Occurred");
    //   } else {
    //     this.isLoading = false;
    //     this.$router.push({
    //       path: "/polls/success"
    //     });
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
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
