<template>
  <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
    <div
      class="truncate text-bold font-poppings mt-12 mb-12"
      style="font-size:18px"
    >
      <div class="d-flex align-items-center">
        <span class="position-absolute" @click="goBack"
          ><icon size="lg" name="left"
        /></span>
        <div class="text-align-center width-100">
          <span>{{ heading }}</span>
        </div>
      </div>
    </div>
    <div class="line-thin "></div>
  </bar>
</template>
<script>
export default {
  props: ["heading"],
  components: {
    bar: () => import("@/components/SlaBar.vue"),
    Icon: () => import("@/components/SlaIcon")
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
