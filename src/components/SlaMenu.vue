<template>
  <div
    style="height: 56px;"
    class="d-flex align-items-baseline justify-content-around position-sticky bottom-0 z-index-1 bg-white shadow-3 px-4"
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
      to="/search"
      :class="{ active: activePath == '/search' }"
      class="flex-inline cursor-pointer text-grey flex-column align-items-center"
    >
      <icon size="lg" name="search" />
      <small class="text-align-center">Search</small>
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
      to="/leader"
      :class="{ active: activePath == '/leader' }"
      class="flex-inline cursor-pointer text-grey flex-column align-items-center"
    >
      <icon size="lg" name="leader" />
      <small class="text-align-center">Leaderboard</small>
      <div class="indicator"></div>
    </router-link>
    <router-link
      to="/courses"
      :class="{ active: activePath == '/courses' }"
      class="flex-inline cursor-pointer text-grey flex-column align-items-center"
    >
      <icon size="lg" name="course" />
      <small class="text-align-center">Course</small>
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
// .router-link {
//   .indicator {
//     display: none;
//   }
// }

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
// svg {
// 	fill: #999 !important;
// 	path {
// 		fill: #999;

// 	}
// 	&:hover {
// 		cursor: pointer;
// 	}
// }
</style>
