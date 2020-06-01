<template>
  <img class="mr-24" :height="size" :width="size" src="@/assets/icons/arrow-right.png" alt="" />
</template>
<script>
export default {
  props: {
    route: {
      type: String
    },
    size: {
      type: Number,
      default: 15
    }
  }
};
</script>
