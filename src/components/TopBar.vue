<template>
  <div
    style="height: 48px;"
    class="d-flex align-items-center position-sticky top-0 z-index-1 bg-white justify-content-between px-4 mt-8 mb-8 py-8"
  >
    <span class="cursor-pointer" @click="showSideNav">
      <sla-avatar size="md" :user="{ name: 'Dapo' }"></sla-avatar>
    </span>
    <router-link to="/">
      <img src="@/assets/logo.png" alt="" />
    </router-link>
    <router-link to="/messages">
      <icon size="lg" name="message" />

    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      display: true
    };
  },
  components: {
    Bar: () => import("@/components/SlaBar.vue"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    Icon: () => import("@/components/SlaIcon.vue")
  },
  methods: {
    showSideNav() {
      this.$Bus.$emit("side-nav", true);
    }
  }
};
</script>
