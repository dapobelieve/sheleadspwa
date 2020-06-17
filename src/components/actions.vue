<template>
  <div>
    <div class="stats d-flex align-items-center justify-content-around" style="color #333333">
      <small @click.prevent="$emit('like-action', $event)" class="p-8">
        <icon size="xs" :name="liked ? 'thumb-filled' : 'thumb-up'" />
        <span>Like</span>
      </small>
      <small @click.prevent="$emit('comment-action', $event)" class="p-8">
        <icon size="xs" name="comment" />
        <span>Comment</span>
      </small>
      <small @click.prevent="$emit('share-action', $event)" class="p-8">
        <icon size="xs" name="share" />
        <span>Share</span>
      </small>
      <small @click.prevent="$emit('report-action', $event)" class="p-8">
        <icon size="xs" name="report" />
        <span>Report</span>
      </small>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    liked: {
      type: Boolean,
      default: false
    }
  },
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
    span {
      margin-left: 4px;
    }
  }
}
</style>
