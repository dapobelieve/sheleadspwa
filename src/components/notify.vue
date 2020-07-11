<template>
  <div class="d-flex justify-content-start align-items-center px-4 py-8">
    <sla-avatar size="lg" :user="{ image: data.image }" />
    <div class="ml-12 flex flex-column justify-content-between flex-inline mr-4">
      <div class="truncate truncate-2">{{ data.message }}</div>
      <small class="text-right" style="color: #999999; font-size: 8px">{{ data.createdAt | chatTime }}</small>
    </div>
    <div class="left-image">
      <!-- <img class="object-cover" :src="data.image" alt="" /> -->
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
