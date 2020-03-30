<template>
	<bar class="position-sticky bottom-0 z-index-1 bg-white shadow-3">
    <div style="height: 57px;" class="d-flex align-items-center justify-content-between mx-8">
      <home @click="$emit('home')"></home>
      <notification></notification>
      <search></search>
      <podium></podium>
      <course></course>
    </div>
  </bar>
</template>
<script>
export default {
	components: {
		Bar: () => import("@/components/SlaBar.vue"),
    Course: () => import("@/assets/icons/course.vue"),
    Search: () => import("@/assets/icons/search.vue"),
    Podium: () => import("@/assets/icons/podium.vue"),
    Home: () => import("@/assets/icons/home.vue"),
    Notification: () => import("@/assets/icons/notification.vue")
	}
}
</script>
<style lang="scss" scoped>
svg {
	fill: #999 !important;
	path {
		fill: #999;

	}
	&:hover {
		cursor: pointer;
	}
}
</style>