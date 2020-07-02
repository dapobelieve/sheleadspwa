<template>
  <div class="comment d-flex align-items-start mx-4">
    <div>
      <avatar size="md" :user="{ name: post.author.first_name, image: post.author.image }" />
    </div>
    <div class="ml-8 area">
      <div class="author text-bolder mb-4">
        {{ post.author.first_name }} {{ post.author.last_name }} <small v-if="post.admin !== null"><strong>(admin)</strong></small>
      </div>
      <div class="body mr-4">{{ post.content }}</div>
      <small>{{ post.createdAt | chatTime }}</small>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comment: {
      type: Object
    }
  },
  components: {
    Avatar: () => import("@/components/SlaAvatar.vue")
  },
  computed: {
    post() {
      this.comment.author = this.comment.user || this.comment.admin;
      return this.comment;
    }
  }
};
</script>
<style lang="scss" scoped>
.comment {
  color: #333333;
  .area {
    small {
      // font-weight: normal;
      color: #a29c9c;
    }
    .author {
      font-size: 14px;
      line-height: 13px;
      letter-spacing: 0.15px;
      font-style: normal;
      small {
        color: #a29c9c !important;
      }
    }
    .body {
      font-size: 14px;
    }
  }
}
</style>
