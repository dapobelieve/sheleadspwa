<template>
  <div class="int py-12 px-8 mx-12 mb-24">
    <div class="mr-56">{{ name }}</div>
    <icon name="cancel" size="lg" class="text-grey-500" />
  </div>
</template>
<script>
export default {
  props: ["name"],
  components: {
    Icon: () => import("@/components/SlaIcon")
  }
};
</script>
<style lang="scss" scoped>
.int {
  display: flex;
  min-width: 304px;
  border: 1px solid #e7e6e6;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
}
</style>
