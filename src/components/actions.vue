<template>
  <div class="stats d-flex justify-content-around">
    <small>
      <icon size="xs" name="thumb-up" />
      <p>Like</p>
    </small>
    <small>
      <icon size="xs" name="comment" />
      <p>Comment</p>
    </small>
    <small>
      <icon size="xs" name="share" />
      <p>Share</p>
    </small>
    <small>
      <icon size="xs" name="report" />
      <p>Report</p>
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
