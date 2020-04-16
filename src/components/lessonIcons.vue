<template>
  <div>
    <div
      class="cursor-pointer d-flex flex-column align-items-center"
      :class="{ active: this.active }"
    >
      <div
        class="bigc flex-inline align-items-center justify-content-center bg-grey-500 text-white"
      >
        {{ number }}
      </div>
      <div class="smallc flex-inline align-items-center justify-content-center">
        <div v-if="active" class="smallerc bg-primary"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: "active-lesson",
    event: "showLesson"
  },
  props: {
    number: {},
    active: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue")
  }
};
</script>
<style lang="scss" scoped>
.bigc {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 9px;
  margin-bottom: 2px;
}

.smallc {
  width: 10px;
  height: 10px;
  border: 1px solid color(sla-grey);
  border-radius: 50%;
}

.smallerc {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.active {
  .bigc {
    background-color: color(bv-primary) !important;
  }

  .smallc {
    border: 1px solid color(bv-primary);
  }
}
</style>
