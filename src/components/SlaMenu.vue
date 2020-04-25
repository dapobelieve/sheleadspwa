<template>
  <div
    style="height: 56px;"
    class="d-flex align-items-baseline justify-content-around position-fixed width-100 bottom-0 z-index-1 bg-white shadow-3 px-4"
  >
    <router-link
      :to="{ name: 'home' }"
      class="flex-inline cursor-pointer text-grey flex-column align-items-center"
      :class="{ active: activePath == '/' }"
    >
      <icon size="lg" name="home" />
      <small class="text-align-center">Home</small>
      <div class="indicator"></div>
    </router-link>
    <router-link
      to="/courses"
      :class="{ active: activePath == '/courses' }"
      class="flex-inline cursor-pointer text-grey flex-column align-items-center"
    >
      <icon size="lg" name="course" />
      <small class="text-align-center">Courses</small>
      <div class="indicator"></div>
    </router-link>
    <router-link
      to="/notification"
      :class="{ active: activePath == '/notification' }"
      class="flex-inline cursor-pointer text-grey flex-column align-items-center"
    >
      <icon size="lg" name="notification" />
      <small class="text-align-center">Notification</small>
      <div class="indicator"></div>
    </router-link>
    <router-link
      to="/leaderboard"
      :class="{ active: activePath == '/leaderboard' }"
      class="flex-inline cursor-pointer text-grey flex-column align-items-center"
    >
      <icon size="lg" name="group" />
      <small class="text-align-center">Groups</small>
      <div class="indicator"></div>
    </router-link>
    <router-link
      to="/more"
      :class="{ active: activePath == '/more' }"
      class="flex-inline cursor-pointer text-grey flex-column align-items-center"
    >
      <icon size="lg" name="zmenu" />
      <small class="text-align-center">More</small>
      <div class="indicator"></div>
    </router-link>
  </div>
</template>
<script>
export default {
  computed: {
    activePath() {
      return this.$route.path;
    }
  },
  components: {
    Bar: () => import("@/components/SlaBar.vue"),
    Icon: () => import("@/components/SlaIcon.vue")
  }
};
</script>
<style lang="scss" scoped>
.active {
  color: color(bv-primary) !important;

  .indicator {
    border: 1px solid color(bv-primary);
    width: 100%;
    margin-top: 10px;
  }
}
a {
  text-decoration: none;
}
small {
  line-height: 0.3;
  font-size: 10px;
}
</style>
