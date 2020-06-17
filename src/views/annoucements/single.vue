<template>
  <div>
    <div class="pass d-flex  flex-column justify-content-between ">
      <top heading="Hello world" />
    </div>
    <div class="announce  d-flex flex-column">
      <div class="image mt-8">
        <img class="object-cover" :src="getSingleAnnouncement.annoucement.cover_image" alt="" />
      </div>
      <div class="post truncate font-weight-bolder truncate-2 px-12">
        {{ getSingleAnnouncement.annoucement.title }}
      </div>
      <div class="stats d-flex justify-content-between mt-12 px-8">
        <span>{{ getSingleAnnouncement.annoucement.likes }} Likes</span>
        <span>{{ getSingleAnnouncement.annoucement.comments }} Comments</span>
      </div>
      <div class="line-thin mt-12 mx-8"></div>
      <div class="stats d-flex justify-content-between mt-12 px-8">
        <span class="d-flex align-items-center">
          <span v-if="!getSingleAnnouncement.annoucement.liked" @click="handleLike"><like /> </span>
          <i v-else class="fas fa-heart"></i>
          <span class="my-2 mx-1">{{ !getSingleAnnouncement.annoucement.liked ? "Like" : "Liked" }}</span>
        </span>
        <span class="d-flex align-items-center">
          <span><Comment /> </span>
          <span class="my-2">Comment</span>
        </span>
      </div>

      <div class="d-flex flex-column" v-for="(comment, i) in getSingleAnnouncement.comments" :key="i">
        <!-- <span v-if="comment.user !== null" class="ml-2 d-flex m-2 flex-row">
          <sla-avatar class="avatar m-1 " v-if="comment.user.image === null" size="md" :user="{ name: comment.first_name }" />
          <sla-avatar class="avatar m-1" v-else size="md" :user="{ image: comment.user.image }" />
          <span class="m-2 mb-4">{{ comment.user.first_name }}</span>
          <span class="ml-5 mt-n4 mb-3">
            {{ comment.content }}
          </span>
          <div class="d-flex flex-row">
            <small class="text-grey-500 mt-n2">{{ comment.createdAt | moment("from", "now", true) }}</small>
          </div>
        </span> -->
        <span v-if="comment.user !== null" class="ml-2 d-flex m-2 flex-row">
          <sla-avatar class="avatar m-1" size="md" v-if="comment.user.image === null" :user="{ name: comment.user.first_name }" />
          <sla-avatar class="avatar m-1" v-else size="md" :user="{ image: comment.user.image }" />
          <p class="  m-2 d-flex flex-column ">
            <span class="mt-2 mb-2">
              {{ comment.user.first_name }}
            </span>
            <span class=" mb-3">
              {{ comment.content }}
            </span>
            <small class="text-grey-500 mt-n2">{{ comment.createdAt | moment("from", "now") }}</small>
          </p>
        </span>
        <span v-else class="ml-2 d-flex m-2 flex-row">
          <sla-avatar class="avatar m-1" size="md" v-if="comment.admin.image === null" :user="{ name: comment.admin.first_name }" />
          <sla-avatar class="avatar m-1" v-else size="md" :user="{ image: comment.admin.image }" />
          <p class="  m-2 d-flex flex-column ">
            <span class="mt-2 mb-2">
              {{ comment.admin.first_name }}
            </span>
            <span class=" mb-3">
              {{ comment.content }}
            </span>
            <small class="text-grey-500 mt-n2">{{ comment.createdAt | moment("from", "now") }}</small>
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
      chat: ""
    };
  },
  computed: {
    ...mapGetters(["getSingleAnnouncement"])
  },
  created() {
    this.fetchAnnouncement({
      id: this.$route.params.id
    });
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
