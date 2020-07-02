<template>
  <div>
    <!-- <nav-bar></nav-bar> -->
    <div>
      <router-view />
    </div>
    <!-- <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr> -->

    <apple-add-to-home-screen-modal v-if="showAddToHomeScreenModalForApple" class="apple-add-to-home-screen-modal" @close="closeAddToHomeScreenModalForApple(false)"> </apple-add-to-home-screen-modal>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import NewContentAvailableToastr from "@/components/NewContentAvailableToastr";
import AppleAddToHomeScreenModal from "@/components/AppleAddToHomeScreenModal";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: { NavBar, NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters("app", ["newContentAvailable"]),
    ...mapState("app", ["showAddToHomeScreenModalForApple", "refreshingApp"])
  },
  methods: {
    // ...mapActions("app", ["closeAddToHomeScreenModalForApple", "serviceWorkerSkipWaiting"]),
    preventZoom(e) {
      e.preventDefault();
      document.body.style.zoom = 1.0;
    }
  },
  created() {
    document.addEventListener("gesturestart", function(e) {
      this.preventZoom(e);
    });

    // document.addEventListener("gesturechange", function(e) {
    //   this.bodyZoom(e);
    // });

    // document.addEventListener("gestureend", function(e) {
    //   this.bodyZoom(e);
    // });
  }
};
</script>

<style lang="scss">
@import "scss/main";
html,
body {
  margin: 0;
  height: 100%;
}

.font__14 {
  font-size: 14px !important;
}

.font__12 {
  font-size: 12px !important;
}
</style>
