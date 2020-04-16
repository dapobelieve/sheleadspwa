<template>
  <div>
    <div
      :class="{ activelesson: active }"
      @click="$emit('click', $event)"
      class="lesson-card d-flex flex-column align-items-center justify-content-between py-4 cursor-pointer"
    >
      <small class="lesson">Lesson</small>
      <div
        :class="[this.complete || this.locked ? '' : '-margin']"
        class="number text-grey text-bold"
      >
        {{ lesson }}
      </div>
      <div class="lock width-100">
        <span
          class="d-flex"
          :class="[
            this.complete ? 'justify-content-center' : 'justify-content-end'
          ]"
        >
          <icon v-if="locked" size="xs" name="padlock" />
          <small v-if="complete" class="complete">COMPLETED</small>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    lesson: {
      // type: String
    },
    complete: {
      type: Boolean,
      default: false
    },
    locked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: false
    };
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue")
  }
};
</script>
<style lang="scss" scoped>
.-margin {
  margin-top: -12px;
}
.lesson-card {
  width: 74px;
  height: 72px;
  background-color: color(bv-white);
  border-radius: 5px;
  border: 1px solid color(sla-grey);

  .lesson {
    font-size: 10px;
  }

  .number {
    font-size: 24px;
  }

  .lock {
    margin-top: -7px;

    .complete {
      font-size: 8px;
    }
  }
}
.activelesson {
  border: 1px solid color(bv-primary);
  .title {
    /* identical to box height */
    color: color(bv-primary);
  }
  .lesson,
  .number {
    color: color(bv-primary) !important;
  }
}
</style>
