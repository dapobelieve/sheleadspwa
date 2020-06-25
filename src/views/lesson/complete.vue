<template>
  <div class="messages d-flex flex-column">
    <top heading="Course Completed" />
    <div class="d-flex flex-column justify-content-center align-items-center" style="height: calc(100vh - 100px)">
      <div>
        <img src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1593117440/assets/complete-2_tlyuwa.gif" alt="" />
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center mt-24">
        <span class="text-bolder">Congratulations!</span>
        <span class="text-bolder">You have completed the course</span>
      </div>
      <div class="d-flex flex-column">
        <sla-button @click="$router.push({ name: 'leaderboard' })" text="Go to leaderboard" class="mb-24 mt-24" />
        <sla-button @click="$router.push({ name: 'all-survey' })" type="outline" text="Please fill surveys" />
      </div>
      <div class="mt-56">
        <span @click="$router.push({ name: 'courses' })" class="text-bolder text-primary">Return to courses</span>
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
    next();
  }
};
</script>
<style lang="scss" scoped>
a {
  color: none;
}
</style>
