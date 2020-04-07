<template>
  <div>
    <div class="overlay-blue"></div>
    <div class="leader-top py-24 mb-8">
      <span class="d-flex flex-column align-items-center ">
        <avatar class="z-index-1 mb-8" size="xl" :user="{ name: 'Believe' }" />
        <span style="font-size: 18px" class="text-white mb-8 text-bold"
          >Kofo Damilola <img src="@/assets/carettop.svg" alt=""
        /></span>
        <span class="text-white text-bold">2831XP</span>
      </span>
    </div>
    <leader v-for="x in 9" class="mx-12 mb-16" />
  </div>
</template>
<script>
export default {
  components: {
    leader: () => import("@/components/leaderCard"),
    Avatar: () => import("@/components/SlaAvatar")
  }
};
</script>
<style lang="scss" scoped>
.overlay-blue {
  position: absolute;
  // height: 18%;
  width: 100%;
  z-index: 1;
  background: linear-gradient(109.19deg, #0087db -33.88%, #1f497d 95.84%);
}
.leader-top {
  z-index: 10;
  background: url("~@/assets/leader.png");
  background-repeat: no-repeat;
}
</style>
