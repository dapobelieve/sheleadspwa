<template>
	<bar class="position-sticky bottom-0 z-index-1 bg-white shadow-3 mt-12">
    <div style="height: 57px;" class="d-flex align-items-center justify-content-between mx-8">
      <icon class="flex-grow-1 text-primary" size="lg" name="home"/>
      <icon class="flex-grow-1 text-primary" size="lg" name="search"/>
      <icon class="flex-grow-1 text-primary" size="lg" name="notification"/>
      <icon class="flex-grow-1 text-primary" size="lg" name="leader"/>
      <icon class="flex-grow-1 text-primary" size="lg" name="course"/>
    </div>
  </bar>
</template>
<script>
export default {
	components: {
		Bar: () => import("@/components/SlaBar.vue"),
    Icon: () => import("@/components/SlaIcon.vue"),
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