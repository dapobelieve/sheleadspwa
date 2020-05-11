<template>
  <div class="int py-12 px-8 mx-12 mb-24">
    <div class="mr-56">{{ name }}</div>
    <span v-if="icon == 'cancel'" @click="emitInterest('remove')"
      ><icon :name="icon" size="lg" class="text-grey-500"
    /></span>
    <span v-else @click="emitInterest('add')"
      ><icon :name="icon" size="lg" class="text-grey-500"
    /></span>
  </div>
</template>
<script>
export default {
  props: ["name", "icon"],
  components: {
    Icon: () => import("@/components/SlaIcon")
  },
  methods: {
    emitInterest(action) {
      if (action == "remove") {
        this.$emit("remove", this.name);
      } else {
        this.$emit("add", this.name);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.int {
  display: flex;
  min-width: 350px;
  border: 1px solid #e7e6e6;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
}
</style>
