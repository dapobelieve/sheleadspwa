<template>
  <div
    class="align-self-stretch"
    style="letter-spacing: 0.15px !important; line-height: 32px"
  >
    <div class="article" v-html="article"></div>
  </div>
</template>
<script>
export default {
  props: {
    article: String
  }
};
</script>
<style lang="scss" scoped>
.attachment {
  // display: none !important;
}
</style>
