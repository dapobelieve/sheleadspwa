<template>
	<bar class="">
    <div style="height: 57px;" class="d-flex align-items-center justify-content-between mx-8">
      <home class="text-grey"></home>
      <notification></notification>
      <search></search>
      <home></home>
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
    Home: () => import("@/assets/icons/home.vue"),
    Notification: () => import("@/assets/icons/notification.vue")
	}
}
</script>
<style lang="scss" scoped>
svg {
	fill: red !important;
	path {
		// fill: red;

	}
	&:hover {
		cursor: pointer;
	}
}
</style>