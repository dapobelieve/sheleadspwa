<template>
  <div class="top d-flex justify-content-between">
    <div class="flex-inline align-items-center">
      <avatar
        size="lg"
        :user="{
          image: 'https://avatars1.githubusercontent.com/u/15062380?s=460&v=4'
        }"
      />
      <div class="flex-inline flex-column ml-12">
        <span class="text-bold user">King Believe</span>
        <small class="text-grey-500">Fashion Designer</small>
      </div>
    </div>
    <span class="time text-grey-500 ">
      Yesterday, 21:45PM
    </span>
  </div>
</template>
<script>
export default {
  components: {
    Avatar: () => import("@/components/SlaAvatar")
  }
};
</script>
<style lang="scss" scoped>
.top {
  small {
    font-size: 12px;
  }

  .user {
    line-height: 19px;
  }
  .time {
    font-size: 10px;
    margin-top: 4px;
  }
}
</style>
