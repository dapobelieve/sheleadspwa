<template>
  <div class="details-card">
    <div class="sla-course-card ">
      <div class="overlay"></div>
      <div class="image">
        <img class="object-cover" :src="image" alt="" />
      </div>
    </div>
    <div class="desc dtitle px-4">
      <span class="text-bold  truncate truncate-2"
        ><router-link
          :to="{ name: 'courseDetail', params: { courseId: id } }"
          >{{ title }}</router-link
        ></span
      >
      <div class="mt-8 d-flex justify-content-between text-grey-500">
        <span v-if="completed" class="text-bold">Completed</span>
        <!-- <icon class="z-index-0" name="video" /> -->
      </div>

      <sla-progress v-if="hasProgress" :percentage="percentage" class="mt-8" />
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
}

a {
  text-decoration: none;
  color: black;

  &:hover {
    color: color(bv-primary);
  }
}

.dtitle {
  margin-top: 12px;
}
.desc {
  width: 326px;
  // border: 1px solid black;
}
.sla-course-card {
  height: 190px;
  width: 326px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;

  .content {
    height: 100%;
  }

  // .overlay {
  //   position: absolute;
  //   height: 100%;
  //   width: 100%;
  //   top: 0;
  //   z-index: -1;
  //   background: linear-gradient(
  //     180deg,
  //     rgba(0, 0, 0, 0) 0%,
  //     rgba(0, 0, 0, 0.85) 100%
  //   );
  // }
  .image {
    position: absolute;
    // z-index: -2;
    width: 100%;

    img {
      height: 190px !important;
      width: 100%;
    }
  }
}
</style>
