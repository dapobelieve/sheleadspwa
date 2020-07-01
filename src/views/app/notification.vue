<template>
  <!--  -->
  <div v-if="allNotifications && allNotifications.length > 0">
    <div v-for="data in allNotifications" class="d-flex justify-content-between align-items-center px-4 py-8">
      <sla-avatar size="lg" :user="{ image: 'https://sla-be.herokuapp.com/api/v1/files/0TXG1NJMMgtqunAq1emE.null/get' }" />
      <div class="ml-12 flex-inline mr-4">
        <span class="truncate truncate-2">{{ data.message }}</span>
        <small style="color: #999999; font-size: 10px">2 days ago</small>
      </div>
      <div class="left-image">
        <img class="object-cover" src="https://sla-be.herokuapp.com/api/v1/files/0TXG1NJMMgtqunAq1emE.null/get" alt="" />
      </div>
    </div>
  </div>
  <empty-state v-else size="big" message="No notifications yet" />
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allNotifications"])
  },
  components: {
    top: () => import("@/components/top"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    emptyState: () => import("@/components/emptyState")
  }
};
</script>

<style lang="scss" scoped>
.left-image {
  img {
    height: 48px;
    border-radius: 5px;
    width: 48px;
  }
}
</style>
