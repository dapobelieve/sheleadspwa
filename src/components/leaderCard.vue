<template>
  <div>
    <div class="d-flex leader align-items-center justify-content-between">
      <span class="d-flex align-items-center px-12">
        <span class="text-grey" style="font-weight: bolder">1.</span>
        <avatar class="ml-12" size="lg" :user="{ name: 'Believe' }" />
        <span class="ml-12 mr-8" style="font-weight: bolder"
          >Jane Ogunsola</span
        >
        <img src="@/assets/carettop.svg" alt="" />
      </span>
      <span class="text-align-right text-bold text-grey px-12">10000xp</span>
    </div>
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
.leader {
  height: 71px;
  border: 0.1rem solid #e5e5e5;
  border-radius: 10px;
}
</style>
