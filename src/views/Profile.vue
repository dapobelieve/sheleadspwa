<template>
  <div>
    <h1>Profile Page</h1>
    <!-- <sla-interest name="pro" /> -->
    <sla-interest name="" />
    <sla-interest name="personal" />
  </div>
</template>
<script>
export default {
  components: {
    SlaInterest: () => import("@/components/SlaInterest.vue")
  }
};
</script>
<style scoped>
  // User avatar
  .edit-user-details {
    .card-header {
      overflow: hidden;
    }
    .card-body {
      z-index: 1;
    }
  // User avatar
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