<template>
  <div>
    <div class="announce col-6 d-flex flex-column">
      <div class="image mt-8">
        <img class="object-cover" :src="annoucement.cover_image" alt="" />
      </div>
      <div class="post truncate font-weight-bolder truncate-2 px-12">
        {{ annoucement.title }}
      </div>
      <div class="stats d-flex justify-content-between mt-12 px-8">
        <span>{{ annoucement.likes }} Likes</span>
        <span>{{ annoucement.likes }} Comments</span>
      </div>
      <div class="line-thin mt-12 mx-8"></div>
      <div class="stats d-flex justify-content-between mt-12 px-8">
        <span class="d-flex align-items-center">
          <span @click="handleLike"><like /> </span>
          <span class="my-2">Like</span>
        </span>
        <span class="d-flex align-items-center">
          <span><Comment /> </span>
          <span class="my-2">Comment</span>
        </span>
        <span class="d-flex align-items-center">
          <span><Share /> </span>
          <span class="my-2">Share</span>
        </span>
        <span class="d-flex align-items-center">
          <span><Notification /> </span>
          <span class="my-2">Report</span>
        </span>
      </div>

      <!-- <div>
        <stats class="text-grey-500" />
      </div> -->
      <div class="line-thin mt-12"></div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["annoucement"],
  components: {
    Stats: () => import("@/components/actions"),
    Like: () => import("@/components/__private__/media/like.vue"),
    Comment: () => import("@/components/__private__/media/comment.vue"),
    Share: () => import("@/components/__private__/media/share.vue"),
    Notification: () => import("@/components/__private__/media/notification.vue")
  },
  methods: {
    ...mapActions(["likeAnnoucement"]),
    async handleLike() {
      let res = await this.likeAnnoucement({ _id: this.annoucement._id });

      if (res.status == 200) {
        this.$toasted.success("Annoucement Like Successfully").goAway(2500);
      } else {
        this.$toasted.error("An error occured").goAway(2500);
      }
    }
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
