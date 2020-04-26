<template>
  <div class="d-flex flex-column">
    <small style="font-weight: bold" class="mr-8 text-primary">PROGRESS</small>
    <div class="d-flex align-items-center">
      <div
      style="height: 4px;width: 90%; border-radius: 20px"
      class=" bg-grey-200"
      >
        <div
          style="height: 4px; border-radius: 20px"
          :style="{ width: perce }"
          :class="themeBg"
        ></div>
      </div>
      <small style="font-weight: bold" class="ml-8 text-primary">{{ percentage }}%</small>
    </div>
    
  </div>
</template>
<script>
export default {
  props: {
    percentage: {
      type: String
    },
    theme: {
      type: String,
      default: "bg-primary"
    }
  },
  computed: {
    perce() {
      return `${this.percentage}%`;
    },
    themeBg() {
      return `${this.theme}`;
    }
  }
};
</script>
<style scoped>
.progress {
  height: 0.625rem;
  font-size: 0.625rem;
  line-height: 0.625rem;
  background-color: #f5f5f6;
  margin-top: 6px;
  border-radius: 1.25rem;
  -webkit-box-shadow: inset 0 0.1rem 0.1rem rgba(90, 97, 105, 0.15);
  box-shadow: inset 0 0.1rem 0.1rem rgba(90, 97, 105, 0.15);
}
</style>
