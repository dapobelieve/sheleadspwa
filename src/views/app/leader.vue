<template>
  <div>
    <div>
      <div class="d-flex flex-row justify-content-center leader-top  mt-4">
        <span v-for="first in leaderboard.slice(0, 1)" class="d-flex flex-column align-items-center ">
          <avatar class=" " size="lg" :user="{ name: first.user.first_name, image: first.user.image }" />
          <span style="font-size: 18px" class="text-black mb-8 text-bold">{{ first.user.first_name }} {{ first.user.last_name }} <img src="@/assets/carettop.svg" alt=""/></span>
          <span class="text-black text-bold">{{ first.total }}XP</span>
        </span>
      </div>
      <img class="width-100  object-contain" src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1592925869/Vector_1_z5eegc.png" alt="" />
    </div>
    <br />
    <leader
      @leader-click="$router.push({ name: 'user-profile', params: { id: leader.user._id } })"
      v-for="(leader, x) in leaderboard.slice(1, -1)"
      :key="x"
      :leader="leader"
      :index="x + 1"
      class="mx-12 mb-4"
    />
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
  margin-top: 20px;
}
.bg-top {
  height: 100px;
}
.overlay-blue {
  position: absolute;
  // height: 18%;
  width: 100%;
  z-index: 1;
  background: linear-gradient(109.19deg, #0087db -33.88%, #1f497d 95.84%);
}
.leader-top {
  margin-top: -175px;
  // z-index: 10;
  // background: url("~@/assets/leader.png");
  // object-fit: cover;
  // background-repeat: no-repeat;
}
</style>
