<template>
  <div>
    <div class="small position-relative">
      <div class="overlay"></div>
      <div>
        <img class="image object-cover" :src="category.image" alt="" />
      </div>
      <div class="content d-flex align-items-center justify-content-center height-100">
        <small class="text-grey-100">{{ category.name }}</small>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: {}
  }
};
</script>
<style lang="scss" scoped>
.small {
  width: 128px;
  height: 79px;
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    border-radius: 5px;
    z-index: -1;
    background: rgba(0, 0, 0, 0.6);
  }

  .image {
    position: absolute;
    height: 79px;
    border-radius: 5px;
    width: 128px;
    z-index: -2;
  }
}
</style>
