<template>
  <div class="messages d-flex flex-column">
    <top heading="Course Completed" />
    <div class="d-flex flex-column justify-content-center align-items-center" style="height: calc(100vh - 100px)">
      <div>
        <img src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1591870657/assets/Vector_ms3gdr.png" alt="" />
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center mt-24">
        <span class="text-bolder">Congratulations!</span>
        <span class="text-bolder">You have completed the course</span>
      </div>
      <div class="d-flex flex-column">
        <sla-button text="Go to leaderboard" class="mb-24 mt-24" />
        <sla-button type="outline" text="Please fill surveys" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      btn: {
        text: "continue",
        loading: false
      }
    };
  },
  components: {
    SlaButton: () => import("@/components/SlaButton"),
    // SlaProgress: () => import("@/components/progress/progress.vue"),
    Icon: () => import("@/components/SlaIcon"),
    top: () => import("@/components/top")
  },
  computed: {},
  methods: {
    // goChat(id) {
    //   this.$router.push({
    //     name: "chat",
    //     params: {
    //       id
    //     }
    //   });
    // }
  },
  mounted() {
    // console.log(this.$route)
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    next();
  }
};
</script>
<style lang="scss" scoped>
a {
  color: none;
}
</style>
