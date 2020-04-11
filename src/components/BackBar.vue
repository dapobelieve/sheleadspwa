<template>
  <div :class="Sticky" class=" bg-white">
    <span @click="goBack">
      <icon size="lg" name="left" />
    </span>
  </div>
</template>
<script>
export default {
  props: {
    stick: {
      type: Boolean
      // default: false
    }
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue")
  },
  computed: {
    Sticky() {
      return this.stick == true
        ? `position-sticky top-0 bottom-0 z-index-1`
        : "";
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
