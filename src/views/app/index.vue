<template>
  <section class="d-flex flex-column justify-content-between">
    <top-bar v-if="showNav" />
    <div class="flex-grow-1 mb-56">
      <router-view />
    </div>
    <sla-menu v-if="showMenu" />
  </section>
</template>
<script>
export default {
  components: {
    TopBar: () => import("@/components/TopBar"),
    SlaMenu: () => import("@/components/SlaMenu")
  },
  computed: {
    showNav() {
      return typeof this.$route.meta.showNav != "undefined" ? false : true;
    },
    showMenu(){
      return typeof this.$route.meta.showMenu != "undefined" ? false : true;

    }
  }
};
</script>
<style lang="scss">
.noDisplay {
  display: none !important;
}
</style>
