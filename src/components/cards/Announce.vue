<template>
  <div>
    <div class="announce d-flex flex-column">
      <span @click="$router.push({ name: 'annoucement', params: { id: annoucement._id } })" class="truncate truncate-2">
        {{ annoucement.title }}
      </span>

      <div class="image mt-8 mb-12">
        <img @click="$router.push({ name: 'annoucement', params: { id: annoucement._id } })" class="object-cover" :src="annoucement.cover_image" alt="" />
      </div>
      <div class="d-flex justify-content-between mx-12">
        <small>{{ annoucement.likes }} likes</small>
        <small>{{ annoucement.comments }} comments</small>
      </div>
      <div class="line-thin mt-2 mx-12 mb-8"></div>
      <div>
        <stats :liked="hasLiked" @like-action="handleLike" @comment-action="$router.push({ name: 'annoucement', params: { id: annoucement._id } })" />
      </div>
      <div class="line-thin mt-12"></div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["annoucement"],
  data() {
    return {
      hasLiked: false
    };
  },
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
        this.hasLiked = true;
      } else {
        this.$toasted.error("An error occured").goAway(2500);
      }
    }
  },
  mounted() {
    this.hasLiked = this.$store.state.user.annoucements.some(item => {
      return item._id == this.annoucement._id;
    });
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

  .image {
    img {
      height: 169px;
      width: 100%;
    }
  }
}
</style>
