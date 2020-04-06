<template>
  <div class="z-index-inf position-relative">
    <div
      v-if="show"
      @click="close"
      class="sidenav overlay overlay-65 position-fixed width-100 height-100"
    >
      <transition name="modal">
        <span>
          <div class="overlay-blue"></div>
          <div class="nav d-flex flex-column height-100">
            <div class="content">
              <div class="user d-flex align-items-center ml-12">
                <sla-avatar size="lg" :user="{ name: 'Dapo' }" />
                <div class="flex-inline flex-column name-info ml-12">
                  <span class="text-bold text-white font-16"
                    >Dapo Michaels</span
                  >
                  <small style="color: #B3E2FF"
                    >Software Solutions Architect</small
                  >
                </div>
              </div>
              <div class="nav-divider width-100 mt-32 ml-2"></div>
              <div class="d-flex flex-column mt-32 ml-12">
                <router-link
                  to="/leader"
                  class="nav-item flex-inline mb-32 align-items-center"
                >
                  <img src="@/assets/leaderboard.svg" alt="" />
                  <span class="font-16 ml-12 text-white mt-8">FAQs</span>
                </router-link>
                <router-link
                  to="/"
                  class="nav-item flex-inline mb-32 align-items-center"
                >
                  <img src="@/assets/lock.svg" alt="" />
                  <span class="font-16 ml-24 text-white mt-8">Resources</span>
                </router-link>
                <router-link
                  to="/"
                  class="nav-item flex-inline logout align-items-center"
                >
                  <img src="@/assets/gear.svg" alt="" />
                  <span class="font-16 ml-24 text-white mt-8">Settings</span>
                </router-link>
                <router-link
                  to="/"
                  class="nav-item flex-inline align-items-center"
                >
                  <img src="@/assets/logout.svg" alt="" />
                  <span class="font-16 ml-24 text-white ">Logout</span>
                </router-link>
              </div>
            </div>
          </div>
        </span>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: "show",
    event: "dismiss"
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  components: {
    SlaAvatar: () => import("@/components/SlaAvatar.vue")
  },
  methods: {
    close() {
      this.$emit("dismiss", !this.show);
    }
  },
  watch: {
    show(newVal) {
      let body = document.body;
      if (newVal == true) {
        body.classList.add("sla-modal-open");
      } else {
        body.classList.remove("sla-modal-open");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.sidenav {
  .nav {
    width: 70%;
    height: 100%;
    background: url("~@/assets/sidebg.png");
    background-repeat: repeat;
    background-color: rgba(31, 73, 125, 0.95);

    .content {
      z-index: 1;
      .user {
        margin-top: 90px;
      }
      .nav-divider {
        height: 1px;
        background-color: #9cfdff;
      }

      a {
        text-decoration: none;
      }

      .logout {
        margin-bottom: 200px;
      }
    }
  }

  .overlay-blue {
    position: absolute;
    height: 100%;
    width: 70%;
    top: 0;
    z-index: 1;
    background: linear-gradient(
      180deg,
      rgba(31, 73, 125, 0.75) 10%,
      rgba(31, 73, 125, 0.75) 10%
    );
  }
}

.modal-leave-to {
  opacity: 1;
  transform: translateX(100%);
}

.modal-enter {
  opacity: 0;
  transform: translateX(100%);
}

.modal-enter-to,
.modal-leave {
  opacity: 1;
  transform: translateX(0);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity, transform 200ms ease-out;
}
</style>
