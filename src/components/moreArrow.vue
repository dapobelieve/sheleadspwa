<template>
  <span @click="$router.push({ name: route })" class="mr-24">
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
    </svg>
  </span>
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
