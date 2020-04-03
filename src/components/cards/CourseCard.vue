<template>
  <div>
    <div class="sla-course-card">
      <div class="overlay"></div>
      <div class="image">
        <img class="object-cover" :src="image" alt="" />
      </div>
      <div
        class="content d-flex flex-column justify-content-between px-12 py-12"
      >
        <div class="text-align-left text-white">
          <icon name="bookmark" />
        </div>
        <div class="title" style="width: 167px">
          <span class="font-poppins text-white">
            {{ title }}
          </span>
        </div>
        <div class="text-align-right text-white">
          <icon name="video" />
        </div>
      </div>
    </div>
    <div class="mt-8">
      <p class="text-bold truncate truncate-2">{{ title }}</p>
      <span class="mt-4">
        <icon name="like" /> <span class="ml-12">2000</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue")
  }
};
</script>
<style lang="scss">
.sla-course-card {
  height: 190px;
  width: 326px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;

  .content {
    height: 100%;
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.85) 100%
    );
  }
  .image {
    position: absolute;
    z-index: -2;
    width: 100%;

    img {
      height: 190px !important;
      width: 100%;
    }
  }
}
</style>
