<template>
  <div>
    <div class="mini-card">
      <div>
        <img
          :style="{ width: `${cardwidth}px` }"
          class="image object-cover"
          :src="image"
          alt=""
        />
      </div>
      <div class="title text-grey-900 mt-4" style="font-size: 14px">
        {{ title }}
      </div>
      <small v-if="hasMembers">{{ number }} Members</small>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/rohing/image/upload/v1588039587/photo-1558113118-e42e558b352a_qq2ae2.jpg"
    },
    title: {
      type: String,
      default: "Accounting Geniuses"
    },
    cardwidth: {
      type: Number,
      default: 202
    },
    hasMembers: {
      type: Boolean,
      default: true
    },
    number: {
      type: Number,
      default: 34
    }
  }
};
</script>
<style lang="scss" scoped>
.mini-card {
  position: relative;

  .image {
    border-radius: 5px;
    height: 117px;
  }
}
</style>
