<template>
  <!--  -->
  <div v-if="allNotifications && allNotifications.length > 0">
    <notify v-for="data in allNotifications" :data="data" />
  </div>
  <empty-state v-else size="big" message="No notifications yet" />
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allNotifications"])
  },
  methods: {
    ...mapActions(["getNotifications"])
  },
  components: {
    top: () => import("@/components/top"),
    notify: () => import("@/components/notify"),
    emptyState: () => import("@/components/emptyState")
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getNotifications();
    });
  }
};
</script>
