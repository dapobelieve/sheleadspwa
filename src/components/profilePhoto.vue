<template>
  <component :is="tag" v-bind="$attrs" v-on="$listeners" :class="[classes]">
    <img :src="image" alt="User Avatar" />
    <label class="edit-user-details__avatar__change">
      <img class="icon-image" src="@/assets/icons/camera.png" />
      <slot />
    </label>
  </component>
</template>

<script>
export default {
  name: "profilePhoto",

  props: {
    tag: {
      type: String,
      default: "div"
    },
    image: {
      type: String,
      default: require("../assets/img/0.png")
    }
  },
  computed: {
    classes() {
      let classes = "";
      classes += "edit-user-details__avatar m-auto";
      return classes.trim();
    }
  }
};
</script>

<style lang="scss" scoped>
  .edit-user-details {
    .card-header {
      overflow: hidden;
    }
    .card-body {
      z-index: 1;
    }
    &__avatar {
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      max-width: $eu-avatar-max-width;
      img {
        width: 100%;
      }
      &__change {
        margin: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        position: absolute;
        text-align: center;
        border-radius: 50%;
        font-size: $eu-avatar-change-font-size;
        background: $eu-avatar-change-background;
      //transition: $eu-avatar-change-transition;
        .icon-image {
        //height: 50px;
          width: 50px;
          position: center;
          margin-top: 35%;
        }
      }
      &:hover {
        .edit-user-details__avatar__change {
          opacity: 1;
          cursor: pointer;
        }
      }
    }

  }
</style>
