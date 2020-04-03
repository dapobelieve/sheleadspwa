<template>
  <div class="stats d-flex justify-content-start">
    <small>
      <icon size="xs" name="comment" />
      <p>290</p>
    </small>
    <small>
      <icon size="xs" name="up" />
      <p>290</p>
    </small>
    <small>
      <icon size="xs" name="down" />
      <p>290</p>
    </small>
    <small>
      <icon size="xs" name="share" />
      <p>290</p>
    </small>
  </div>
</template>
<script>
export default {
  components: {
    Icon: () => import("@/components/SlaIcon.vue")
  }
};
</script>
<style lang="scss" scoped>
.stats {
  small {
    z-index: 0;
    display: inline-flex;
    align-items: center;
    margin-right: 8px;

    p {
      margin-left: 5px;
      line-height: 9px;
    }
  }
}
</style>
