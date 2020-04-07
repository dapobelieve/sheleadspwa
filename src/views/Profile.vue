<template>
  <div>
    <side-nav v-model="display" />
    <h1>Profile Page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      display: false
    };
  },
  components: {
    SideNav: () => import("@/components/SideNav.vue")
  }
};
</script>
