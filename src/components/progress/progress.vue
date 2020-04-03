<template>
  <div class="d-flex justify-content-between align-items-center">
    <small class="mr-8 text-primary text-bold">Progress</small>
    <div
      style="height: 4px;width: 90%; border-radius: 20px"
      class=" bg-grey-200"
    >
      <div
        style="height: 4px; border-radius: 20px"
        :style="{ width: perce }"
        class="bg-primary"
      ></div>
    </div>
    <small class="ml-8">{{ percentage }}%</small>
  </div>
</template>
<script>
export default {
  props: ["percentage"],
  computed: {
    perce() {
      return `${this.percentage}%`;
    }
  }
};
</script>
