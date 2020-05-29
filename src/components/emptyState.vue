<template>
  <div class="d-flex align-items-center flex-column">
    <div class="mt-32">
      <img class="empty" src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1590626162/assets/empty-removebg-preview_wklcho.png" alt="" />
    </div>
    <div style="color: #929191b5" class="mt-24 text-align-center">{{ message }}</div>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.empty {
  height: 50px;
  width: 50px;
}
</style>
