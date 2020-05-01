<template>
  <div>
    <div class="announce d-flex flex-column">
      <div class="image mt-8">
        <img
          class="object-cover"
          src="https://res.cloudinary.com/rohing/image/upload/v1587700139/photo-1542393545-10f5cde2c810_zvvwje.jpg"
          alt=""
        />
      </div>
      <div class="post truncate font-weight-bolder truncate-2 px-12">
        {{ annoucement.title }}
      </div>
      <div class="stats d-flex justify-content-between mt-12 px-8">
        <span>5 Responses</span>
        <like />
      </div>
      <div class="line-thin mt-12 mx-8"></div>
      <!-- <div>
        <stats class="text-grey-500" />
      </div> -->
      <div class="line-thin mt-12"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["annoucement"],
  components: {
    Stats: () => import("@/components/actions"),
    Like: () => import("@/components/__private__/media/like.vue")
  }
};
</script>
<style lang="scss" scoped>
.announce {
  border-radius: 5px;
  text-align: justify;

  .post {
    font-weight: 550;
    color: #333;
  }

  .stats {
    & > *:last-child {
      font-size: 12px;
    }
  }

  .image {
    img {
      height: 169px;
      width: 100%;
    }
  }

  &:before {
    // content: ""
  }
}
</style>
