<template>
  <div>
    <div>
      <div class="image">
        <img class="width-100 object-cover" src="~@/assets/leader.png" alt="" />
      </div>
      <div class="position-absolute d-flex flex-row leader-top py-24 mb-8">
        <span class="d-flex flex-column align-items-center ">
          <avatar class=" mb-8" size="xl" :user="{ name: 'Believe' }" />
          <span style="font-size: 18px" class="text-black mb-8 text-bold"
            >Kofo Damilola <img src="@/assets/carettop.svg" alt=""
          /></span>
          <span class="text-black text-bold">2831XP</span>
        </span>
      </div>
    </div>
    <br />
    <leader v-for="x in 9" class="mx-12 mb-4" />
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
.image {
  z-index: -1;

  img {
    height: 200px;
  }
}
.overlay-blue {
  position: absolute;
  // height: 18%;
  width: 100%;
  z-index: 1;
  background: linear-gradient(109.19deg, #0087db -33.88%, #1f497d 95.84%);
}
.leader-top {
  margin-top: -200px;
  margin-left: 120px;
  // z-index: 10;
  // background: url("~@/assets/leader.png");
  // object-fit: cover;
  // background-repeat: no-repeat;
}
</style>
