<template>
  <div>
    <div class="pass d-flex  flex-column justify-content-between">
      <top :heading="annoucement.annoucement.title" />
    </div>
    <div class="announce  d-flex flex-column">
      <div class="image mt-8">
        <img class="object-cover" :src="annoucement.annoucement.cover_image" alt="" />
      </div>
      <span style="font-size: 14px" class="mx-2 mt-24">
        {{ annoucement.annoucement.normal_details }}
      </span>
      <div class="d-flex justify-content-between mx-12 mt-8">
        <small>{{ annoucement.annoucement.likes }} likes</small>
        <small>{{ annoucement.annoucement.comments }} comments</small>
      </div>
      <div class="line-thin mt-2 mx-12 mb-8"></div>
      <div>
        <stats :liked="hasLiked" @like-action="handleLike" @comment-action="$router.push({ name: 'annoucement', params: { id: annoucement.annoucement._id } })" />
      </div>
      <div class="line-thin mt-12"></div>

      <div class="d-flex flex-column" v-if="comment.user || comment.admin" v-for="(comment, i) in annoucement.comments" :key="i">
        <span v-if="comment.user !== null" class="ml-2 d-flex m-1 flex-row">
          <sla-avatar class="avatar m-1" size="md" v-if="comment.user.image === null" :user="{ name: comment.user.first_name }" />
          <sla-avatar class="avatar m-1" v-else size="md" :user="{ image: comment.user.image }" />
          <span class="  m-2 d-flex flex-column ">
            <span class="my-1 font__14 font-weight-bold text-capitalize">
              {{ comment.user.first_name }} <small class=" font__12 text-grey-500 font-weight-bold mt-n2">{{ comment.createdAt | moment(" h:mm a") }}</small>
            </span>
            <span class="font__14 mt-n1">
              {{ comment.content }}
            </span>
          </span>
        </span>
        <span v-else class="ml-2 d-flex m-1 flex-row">
          <sla-avatar class="avatar m-1" size="md" v-if="comment.admin.image === null" :user="{ name: comment.admin.first_name }" />
          <sla-avatar class="avatar m-1" v-else size="md" :user="{ image: comment.admin.image }" />
          <p class="  m-2 d-flex flex-column ">
            <span class="my-1 font__14 font-weight-bold text-capitalize">
              {{ comment.admin.first_name }} {{ comment.admin.type == "coach" ? "(Coach)" : "(Admin)" }}
              <small class="font__12 text-grey-500 font-weight-bold mt-n2">{{ comment.createdAt | moment(" h:mm a") }}</small>
            </span>
            <span class="font__14 mt-n1">
              {{ comment.content }}
            </span>
          </p>
        </span>
      </div>
      <div class="position-fixed width-100 bottom-0 z-index-1 bg-white py-12 shadow-3">
        <chat-box v-model="chat" @send="createComment" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      hasLiked: false
    };
  },
  components: {
    top: () => import("@/components/top"),
    Stats: () => import("@/components/actions"),
    Like: () => import("@/components/__private__/media/like.vue"),
    Comment: () => import("@/components/__private__/media/comment.vue"),
    Share: () => import("@/components/__private__/media/share.vue"),
    chatBox: () => import("@/components/chatBox"),
    Notification: () => import("@/components/__private__/media/notification.vue"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue")
  },
  data() {
    return {
      chat: "",
      hasLiked: false
    };
  },
  computed: {
    ...mapGetters({
      annoucement: "getSingleAnnouncement"
    })
  },
  async created() {
    await this.fetchAnnouncement({
      id: this.$route.params.id
    });
    this.hasLiked = this.annoucement.isLiked;
  },
  methods: {
    ...mapActions(["likeAnnoucement", "fetchAnnouncement", "addAnnoucementComment"]),
    async handleLike() {
      let res = await this.likeAnnoucement({ _id: this.getSingleAnnouncement._id });
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
        this.fetchAnnouncement({
          id: this.$route.params.id
        });
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
