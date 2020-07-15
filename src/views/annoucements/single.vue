<template>
  <div style="min-height: 100vh; margin-bottom: -51px" class="flex flex-column" v-if="Object.entries(annoucement).length > 0">
    <div class="z-index-1 position-sticky top-0 pass d-flex flex-column justify-content-between">
      <top :heading="annoucement.annoucement.title" />
    </div>
    <div class="announce d-flex flex-column flex-grow-1">
      <div style="height: 100%">
        <div class="image mt-8">
          <img class="object-cover" :src="annoucement.annoucement.cover_image" alt="" />
        </div>
        <span style="font-size: 14px; font-weight: 400 !important;" class="mx-2 mt-24" v-html="annoucement.annoucement.rich_details"> </span>
        <div class="line-thin"></div>
        <div class="d-flex justify-content-between mx-12 mt-8">
          <small> <icon @click="handleLike" size="xs" :name="hasLiked ? 'thumb-filled' : 'thumb-up'" /> {{ annoucement.annoucement.likes }} likes</small>
          <small>{{ annoucement.annoucement.comments }} comments</small>
        </div>
        <div class="line-thin mt-2 mx-12 mb-8"></div>
        <div v-for="comment in annoucement.comments" :key="comment._id" class="mb-12">
          <comment-card :comment="comment" />
        </div>
      </div>
    </div>
    <div class="bg-white z-index-1 position-sticky bottom-0" style="padding-bottom: 8px !important; padding-top: 8px !important">
      <chat-box v-model="chat" @enter-pressed="createComment" @send="createComment" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    top: () => import("@/components/top"),
    Stats: () => import("@/components/actions"),
    Like: () => import("@/components/__private__/media/like.vue"),
    CommentCard: () => import("@/components/comment.vue"),
    Share: () => import("@/components/__private__/media/share.vue"),
    chatBox: () => import("@/components/chatBox"),
    Notification: () => import("@/components/__private__/media/notification.vue"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    Icon: () => import("@/components/SlaIcon.vue")
  },
  data() {
    return {
      chat: "",
      hasLiked: false,
      annoucement: {}
    };
  },
  methods: {
    ...mapActions(["likeAnnoucement", "fetchAnnouncement", "addAnnoucementComment"]),
    async handleLike() {
      console.log("jjjjj");
      if (this.hasLiked) return;
      let res = await this.likeAnnoucement({ _id: this.$route.params.id });
      if (res.status == 200) {
      } else {
        this.$toasted.error("An error occured").goAway(2500);
      }
    },
    async createComment() {
      let res = await this.addAnnoucementComment({
        annoucement: this.$route.params.id,
        content: this.chat
      });
      if (res.status == 201) {
        this.chat = "";
        let res = await this.fetchAnnouncement({
          id: this.$route.params.id
        });
        this.annoucement = res;

        this.hasLiked = this.annoucement.isLiked;
      } else {
        this.$toasted.error("An error occured").goAway(2500);
      }
    }
  },
  mounted() {
    // this.hasLiked = this.annoucement && this.annoucement.isLiked;
  },
  async created() {
    let res = await this.fetchAnnouncement({
      id: this.$route.params.id
    });
    this.annoucement = res;
    this.hasLiked = this.annoucement.isLiked;
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
      // height: 200px;
      width: 100%;
    }
  }
}
</style>
