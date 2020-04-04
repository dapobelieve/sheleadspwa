<template>
  <div :class="[classes, active ? 'active-lesson' : '']">
    <div class="title font-poppins">Lesson</div>
    <p class="text-align-center mt-4 ">
      {{ message }}
    </p>
    <icon
      size="xs"
      class=" float-right  "
      style="margin-top: -30px; margin-left:50px; z-index: -1"
      name="padlock"
      v-if="locked"
    />
    <small class="text-align-center text-grey-500 " style="margin-top: -20px">
      {{ completed ? "completed" : "" }}
    </small>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    message: {
      type: Number
    },
    active: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    },
    locked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      let classes = "";
      classes += "lesson  d-flex flex-column text-grey-500 m-8";
      return classes.trim();
    }
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue")
  }
};
</script>
<style lang="scss" scoped>
.lesson {
  width: 74px;
  height: 80px;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 0 0 0px;
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.15px;

    /* identical to box height */
  }
  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */
    text-align: center;
    letter-spacing: 0.15px;
  }
  small {
    font-weight: 600;
    font-size: 8px;
    line-height: 11px;
    /* identical to box height */

    letter-spacing: 0.15px;
  }
}
.active-lesson {
  border: 1px solid #0087db;
  .title {
    /* identical to box height */
    color: color(bv-primary);
  }
  p {
    color: color(bv-primary);
  }
}
</style>
