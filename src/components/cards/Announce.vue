<template>
  <div>
    <div class="announce d-flex flex-column">
      <div class="post truncate truncate-2 px-12">
        How do social media, texting, cell phones, and the Internet make the
        world bigger? Smaller?
      </div>
      <div class="image mt-8">
        <img
          class="object-cover"
          src="https://res.cloudinary.com/rohing/image/upload/v1587700139/photo-1542393545-10f5cde2c810_zvvwje.jpg"
          alt=""
        />
      </div>
      <div class="stats d-flex justify-content-between mt-12 px-8">
        <span>✌️😁🤪</span>
        <span>5 Comments</span>
      </div>
      <div class="line-thin mt-12 mx-8"></div>
      <div>
        <stats class="text-grey-500" />
      </div>
      <div class="line-thin mt-12"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    message: {
      type: String
    }
  },
  components: {
    Stats: () => import("@/components/actions")
  }
};
</script>
<style lang="scss" scoped>
.announce {
  border-radius: 5px;
  text-align: justify;

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
