<template>
  <div class="more d-flex flex-column ml-8 mt-24">
    <div class="menu-item d-flex align-items-center">
      <router-link to="#">
        <icon size="lg" name="survey" />
        <span class="text-grey-900">Survey</span>
      </router-link>
    </div>
    <div class="menu-item d-flex align-items-center">
      <router-link to="#">
        <icon size="lg" name="poll" /> <span class="text-grey-900">Polls</span>
      </router-link>
    </div>
    <div class="menu-item d-flex align-items-center">
      <router-link to="#">
        <icon size="lg" name="announce" />
        <span class="text-grey-900">Announcement</span>
      </router-link>
    </div>
    <div class="menu-item d-flex align-items-center">
      <router-link to="#">
        <icon size="lg" name="event" />
        <span class="text-grey-900">Events</span>
      </router-link>
    </div>
    <div class="menu-item d-flex align-items-center">
      <router-link to="#">
        <icon size="lg" name="leader-menu" />
        <span class="text-grey-900">Leaderboard</span>
      </router-link>
    </div>
    <div class="menu-item d-flex align-items-center">
      <router-link to="#">
        <icon size="lg" name="resource" />
        <span class="text-grey-900">Resources</span>
      </router-link>
    </div>
    <div class="menu-item d-flex align-items-center">
      <router-link to="#">
        <icon size="lg" name="help" /> <span class="text-grey-900">Help</span>
      </router-link>
    </div>
    <div class="menu-item d-flex align-items-center">
      <router-link to="#">
        <icon size="lg" name="settings" />
        <span class="text-grey-900">Settings</span>
      </router-link>
    </div>
    <div class="menu-item d-flex align-items-center">
      <router-link to="#">
        <icon size="lg" name="logout" />
        <span class="text-grey-900">Logout</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Icon: () => import("@/components/SlaIcon.vue")
  }
};
</script>
<style lang="scss" scoped>
.more {
  .menu-item {
    margin-bottom: 18px;
  }
}
a {
  text-decoration: none;
}
</style>
