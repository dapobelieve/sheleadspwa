<template>
  <div class="d-flex align-items-center flex-column">
    <div class="mt-32">
      <img :style="styles" class="empty" :src="lady" alt="" />
    </div>
    <div style="color: #929191b5" class="mt-24 text-align-center">{{ message }}</div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      default: "small"
    },
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      box: "",
      lady: "https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1590587435/assets/Illustration_bokcnj.png"
    };
  },
  computed: {
    styles() {
      return this.size != "big" ? `width: 100px` : `width: 100%`;
    }
  }
};
</script>
