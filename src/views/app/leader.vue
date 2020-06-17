<template>
  <div>
    <div>
      <div class="image">
        <img class="width-100 object-cover" src="~@/assets/leader.png" alt="" />
      </div>
      <div class="position-absolute d-flex flex-row leader-top py-24 mb-8">
        <span v-for="first in leaderboard.slice(0, 1)" class="d-flex flex-column align-items-center ">
          <avatar class=" mb-8" size="xl" :user="{ name: first.user.first_name, image: first.user.image }" />
          <span style="font-size: 18px" class="text-black mb-8 text-bold">{{ first.user.first_name }} {{ first.user.last_name }} <img src="@/assets/carettop.svg" alt=""/></span>
          <span class="text-black text-bold">{{ first.total }}XP</span>
        </span>
      </div>
    </div>
    <br />
    <leader v-for="(leader, x) in leaderboard.slice(1, -1)" :key="x" :leader="leader" :index="x + 1" class="mx-12 mb-4" />
  </div>
</template>
<script>
import axios from "axios";
import store from "@/store";
export default {
  data() {
    return {
      leaderboard: []
    };
  },
  mounted() {
    this.getLeaderboard();
  },
  methods: {
    getLeaderboard() {
      axios
        .get(`https://sla-be.herokuapp.com/api/v1/user/leaderboard/getAll`, {
          headers: {
            Authorization: `Bearer ${store.state.user.auth.token}`
          }
        })
        .then(res => {
          this.leaderboard = res.data.data.leaderboard;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
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
