<template>
  <div>
    <div class="announce d-flex flex-column p-2">
      <router-link :to="{ name: 'annoucement', params: { id: annoucement._id } }" class="image mt-8">
        <img class="object-cover" :src="annoucement.cover_image" alt="" />
      </router-link>
      <router-link :to="{ name: 'annoucement', params: { id: annoucement._id } }" class="post truncate font-weight-bolder truncate-2 px-12">
        {{ annoucement.title }}
      </router-link>
      <div class="stats d-flex justify-content-between mt-12 px-8">
        <span>{{ annoucement.likes }} Likes</span>
        <span>{{ annoucement.comments }} Comments</span>
      </div>
      <div class="line-thin mt-12 mx-8"></div>
      <div class="stats d-flex justify-content-between mt-12 px-8">
        <span class="d-flex align-items-center">
          <span v-if="!hasLiked" @click="handleLike"> <like /> </span>
          <i v-else class="fas fa-heart"></i>
          <span class="my-2 mx-1">{{ !annoucement.liked ? "Like" : "Liked" }}</span>
        </span>
        <span class="d-flex align-items-center">
          <span><Comment /> </span>
          <span class="my-2">Comment</span>
        </span>
        <!-- <span class="d-flex align-items-center">
          <span><Share /> </span>
          <span class="my-2">Share</span>
        </span>
        <span class="d-flex align-items-center">
          <span><Notification /> </span>
          <span class="my-2">Report</span>
        </span> -->
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
  computed: {
    hasLiked() {
      return this.$store.state.user.annoucements.some(item => {
        return item._id == this.annoucement._id;
      });
    }
  },
  methods: {
    ...mapActions(["likeAnnoucement"]),
    async handleLike() {
      let res = await this.likeAnnoucement({ _id: this.annoucement._id });

      if (res.status == 200) {
        // this.$toasted.success("Annoucement Like Successfully").goAway(2500);
      } else {
        this.$toasted.error("An error occured").goAway(2500);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
}
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
