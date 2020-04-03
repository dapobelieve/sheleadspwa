<template>
  <div class="interest d-flex flex-column align-items-center">
    <div
      @click="isActive = !isActive"
      :class="{ active: isActive }"
      class="emoji flex-inline align-items-center justify-content-center"
    >
      <img v-if="name == 'money'" src="@/assets/icons/money.png" alt="" />
      <img v-else-if="name == 'pro'" src="@/assets/icons/pro.png" alt="" />
      <img
        v-else-if="name == 'network'"
        src="@/assets/icons/network.png"
        alt=""
      />
      <img
        v-else-if="name == 'business'"
        src="@/assets/icons/business.png"
        alt=""
      />
      <img v-else-if="name == 'life'" src="@/assets/icons/life.png" alt="" />
      <img
        v-else-if="name == 'personal'"
        src="@/assets/icons/personal.png"
        alt=""
      />
    </div>
    <div>
      <p class="desc">
        <slot name="caption"></slot>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "sla-interest",
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      id: this.name,
      map: {
        money: "Growing my money",
        pro: "Climbing the professional ladder",
        personal: "Building my Personal Brand",
        business: "Growing my business",
        life: "Having a great life",
        network: "Networking with like-minds"
      },
      isActive: false
    };
  },
  watch: {
    isActive: function(oldVal, newVal) {
      this.$Bus.$emit("interest-selected", {
        id: this.map[this.id]
      });
    }
  }
};
</script>
<style scoped lang="scss">
.interest {
  width: 100px;

  .emoji {
    height: 84px;
    width: 84px;
    border: 2px solid color(bv-grey-200);
    background-color: color(bv-grey-100);
    border-radius: 50%;
    &.active {
      border: 2px solid color(bv-primary);
    }
    &:hover {
      cursor: pointer;
    }
  }

  p {
    text-align: center;
    font-size: 10px;
    font-weight: 600;
  }
}
</style>
