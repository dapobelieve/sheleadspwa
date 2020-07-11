<template>
  <div>
    <div :class="`avatar avatar-${size}`" @click="$emit('click', $event)" :style="{ background: avatarBackground }">
      <img v-if="user.image" :src="user.image" alt="avatar" />
      <span v-else>{{ user.name | userLetter }}</span>
    </div>
  </div>
</template>

<script>
// The `BvAvatar` component is used to display user profile pictures.
// This component allows the user to dynamically size it, add responsive images and a username as fallback for when no image is provided.
// A tile variation is available for displaying an avatar without an image provided using the username.
export default {
  name: "avatar",
  props: {
    // user name or image
    user: {
      type: Object,
      required: true,
      validator: value => !!value.image || !!value.name
    },
    // the size of the avatar
    size: {
      // `'xs'` / `'sm'` / `'md'` / `'lg'` / `'xl'`
      type: String,
      default: "sm",
      validator: value => {
        return ["xs", "sm", "md", "lg", "xl"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    avatarBackground: () => {
      const backgroundColors = ["#F27979", "#79DBF2", "#F2A879", "#F279DB", "#79B5F2"];
      const num = Math.floor(Math.random() * backgroundColors.length);
      return backgroundColors[num];
    }
  },
  filters: {
    userLetter(value) {
      if (!value) return "";
      return value[0];
    }
  }
};
</script>
