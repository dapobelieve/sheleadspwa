<template>
  <div>
    <div class="rcard d-flex justify-content-between py-12 px-8">
      <span class="text-grey-900">{{ resource.question }}</span>
      <span @click="show = !show"><icon :name="show ? 'cdown' : 'cup'"/></span>
    </div>
    <div
      v-if="show"
      class="response text-black px-8 py-12 mx-2"
      style="margin-top: -4px"
    >
      {{ resource.answer }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["resource"],
  data() {
    return {
      show: false
    };
  },
  components: {
    Icon: () => import("@/components/SlaIcon")
  }
};
</script>
<style lang="scss" scoped>
.rcard {
  border: 1px solid #e7e6e6;
  border-radius: 5px;
  border-left-width: 7px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-left-color: #0087db;
  color: #333333;
}

.response {
  border: 1px solid #e7e6e6;
  border-top: none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>
