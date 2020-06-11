<template>
  <div class="align-self-stretch" style="letter-spacing: 0.15px !important; line-height: 32px">
    <div class="article" v-html="article"></div>
  </div>
</template>
<script>
export default {
  props: {
    article: String
  },
  mounted() {
    let images = document.querySelectorAll("img");
    images.forEach(ele => {
      let div = document.createElement(div);
      ele.style.height = "200px";
      ele.style.width = "100%";
      ele.style.objectFit = "cover";
    });
  }
};
</script>
<style lang="scss" scoped>
.attachment {
  // display: none !important;
}
</style>
