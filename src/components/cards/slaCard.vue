<template>
  <div :class="[classes, border ? 'border' : '']">
    <h6 class="font-poppins px-24 ">
      {{ title }}
    </h6>
    <div class="message px-24 font-poppins text-justify">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      let classes = "";
      classes += "card d-flex flex-column px-8 py-8";
      classes.trim();
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 0 0 0px;
  margin: 20px auto;

  h6 {
    font-size: 18px !important;
  }
  p {
    line-height: 18px;
  }
}
.border {
  border: 1px solid #e9e9e9;
}
.message {
  line-height: 30px;
  font-size: 14px;
  /* or 229% */

  letter-spacing: 0.15px;
}
</style>
