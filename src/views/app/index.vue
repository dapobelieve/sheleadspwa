<template>
  <section class="d-flex flex-column justify-content-between">
    <side-nav v-model="display" />
    <top-bar :pageName="pageName" v-if="showTopBar" />
    <div style="" class="flex-grow-1 mb-56">
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
      return typeof this.$route.meta.showTopBar == "undefined" ? true : this.$route.meta.showTopBar;
    },
    showMenu() {
      return typeof this.$route.meta.showMenu == "undefined" || this.$route.meta.showMenu == false ? false : true;
    },
    pageName() {
      let name = this.$route.name;
      return name[0].toUpperCase() + name.slice(1);
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
