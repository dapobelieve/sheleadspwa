<template>
  <div>
    <div class="pass d-flex flex-column justify-content-between ">
      <div class="hr"></div>

      <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
        <span @click="goBack" class="truncate text-bold font-poppings mt-12 mb-12" style="font-size:18px">
          <icon size="lg" name="left" />
        </span>
      </bar>
      <img width="100%" height="250px" src="@/assets/img/success-poll.png" alt="" />
    </div>
    <p class="mx-auto success-poll ">You’ve earned <span class="text-primary"> 5points</span> for participating in the survey!</p>
    <div class="d-flex flex-column">
      <sla-button @click="$router.push({ path: '/leaderboard' })" style="min-width: 70%!important;" class=" m-12  mx-auto" type="filled" :text="'CHECK LEADERBOARD'"></sla-button>

      <sla-button @click="$router.push('/')" style="min-width: 70%!important;" class=" m-12  mx-auto" type="outline" :text="'Go TO HOMEPAGE'"></sla-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "success",
  components: {
    TopBar: () => import("@/components/TopBar"),
    SlaMenu: () => import("@/components/SlaMenu"),
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    SlaButton: () => import("@/components/SlaButton")
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.success-poll {
  font-size: 16px;
  max-width: 50% !important;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.15px;

  color: #333333;
}
</style>
