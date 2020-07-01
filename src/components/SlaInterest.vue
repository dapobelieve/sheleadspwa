<template>
  <div class="interest d-flex flex-column align-items-center">
    <div @click="isActive = !isActive" :class="{ active: isActive }" class="emoji flex-inline align-items-center justify-content-center">
      <img v-if="name == 'sales'" src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1590583222/Icons/Sales_Icons-06_dn08sh.png" alt="" />
      <img v-else-if="name == 'marketing'" src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1590583222/Icons/Marketing_Icons-02_uubkcn.png" alt="" />
      <img v-else-if="name == 'business'" src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1590583222/Icons/Business_Model_Icons-05_kbfyfm.png" alt="" />
      <img v-else-if="name == 'operations'" src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1590583222/Icons/Operations_Icons-01_eqzxbv.png" alt="" />
      <img v-else-if="name == 'product'" src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1590583222/Icons/Product_management_Icon_gv3tix.png" alt="" />
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
        sales: "Sales",
        marketing: "Marketing",
        business: "Business Model / Funding",
        operations: "Operations",
        product: "Product Management"
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
