<template>
  <div @click="$emit('mini-click', id)">
    <div class="mini-card" v-bind="$attrs" v-on="$listeners">
      <div>
        <img :style="{ width: `${cardwidth}px` }" class="image object-cover" :src="image" alt="" />
      </div>
      <div class="d-flex title text-grey-900 mt-4" style="font-size: 14px">
        <span :style="{ width: `${cardwidth}px` }" class=" truncate truncate-1">{{ title }}</span>
      </div>
      <small v-if="hasMembers">{{ number }} Members</small>
      <small v-if="hasResponse">{{ number }} Responses</small>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: "https://res.cloudinary.com/rohing/image/upload/v1588039587/photo-1558113118-e42e558b352a_qq2ae2.jpg"
    },
    title: {
      type: String,
      default: "Accounting Geniuses"
    },
    id: {},
    cardwidth: {
      type: Number,
      default: 202
    },
    hasMembers: {
      type: Boolean,
      default: false
    },
    hasResponse: {
      type: Boolean,
      default: false
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
