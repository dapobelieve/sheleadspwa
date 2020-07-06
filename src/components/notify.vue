<template>
  <div class="d-flex justify-content-between align-items-center px-4 py-8">
    <sla-avatar size="lg" :user="{ image: 'https://sla-be.herokuapp.com/api/v1/files/0TXG1NJMMgtqunAq1emE.null/get' }" />
    <div class="ml-12 flex-inline mr-4">
      <span class="truncate truncate-2">{{ data.message }}</span>
      <small style="color: #999999; font-size: 10px">{{ data.createdAt | chatTime }}</small>
    </div>
    <div class="left-image">
      <img class="object-cover" :src="data.image" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  components: {
    SlaAvatar: () => import("@/components/SlaAvatar.vue")
  }
};
</script>

<style lang="scss" scoped>
.left-image {
  img {
    height: 48px;
    border-radius: 5px;
    width: 48px;
  }
}
</style>
