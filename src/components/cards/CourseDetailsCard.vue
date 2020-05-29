<template>
  <div @click="$router.push({ name: 'courseDetail', params: { courseId: id } })">
    <div class="details-card d-flex flex-column">
      <div class="image position-relative">
        <img class="object-cover" :src="image" alt="" />
      </div>
      <div class="d-flex desc dtitle px-12">
        <span class="text-bolder truncate truncate-2"
          ><router-link :to="{ name: 'courseDetail', params: { courseId: id } }">{{ title }}</router-link></span
        >
      </div>
      <div class="mt-8 px-12 d-flex justify-content-between text-grey-500" :class="[this.completed ? 'mb-12' : '']">
        <span v-if="completed" class="text-bold">Completed</span>
        <icon class="z-index-0" name="video" />
      </div>
      <sla-progress v-if="hasProgress && !completed" :percentage="percentage" class="mt-8 px-12 mb-12" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {},
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    hasProgress: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    },
    percentage: {
      type: String,
      default: "33.33"
    }
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue"),
    SlaProgress: () => import("@/components/progress/progress.vue")
  }
};
</script>
<style lang="scss">
.details-card {
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  width: 222px;
  // height: 196px;

  .image {
    img {
      height: 105px !important;
      width: 100% !important;
      border-top-left-radius: 10px !important;
      border-top-right-radius: 10px !important;
    }
  }
}

a {
  text-decoration: none;
  color: black;

  &:hover {
    color: color(bv-primary);
  }
}
</style>
