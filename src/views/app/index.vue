<template>
  <section class="d-flex flex-column justify-content-between">
    <side-nav v-model="display" />
    <top-bar v-if="showTopBar" />
    <div class="flex-grow-1 mb-56">
      <router-view />
    </div>
    <sla-menu v-if="showMenu" />
  </section>
</template>
<script>
export default {
  data() {
    return {
      display: false
    };
  },
  components: {
    TopBar: () => import("@/components/TopBar"),
    SlaMenu: () => import("@/components/SlaMenu"),
    SideNav: () => import("@/components/SideNav.vue")
  },
  computed: {
    showTopBar() {
      return typeof this.$route.meta.showTopBar == "undefined"
        ? true
        : this.$route.meta.showTopBar;
    },
    showMenu() {
      return typeof this.$route.meta.showMenu != "undefined" ? false : true;
    }
  },
  mounted() {
    this.$Bus.$on("side-nav", data => (this.display = data));
  }
};
</script>
<style lang="scss">
.noDisplay {
  display: none !important;
}
</style>
