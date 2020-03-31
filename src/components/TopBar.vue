<template>
	<bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
    <div style="height: 57px;" class="d-flex align-items-center position-sticky top-0 z-index-1 justify-content-between mx-8">
      <sla-avatar size="md" :user="{name: 'Dapo'}"></sla-avatar>
      <img src="@/assets/logo.png" alt="">
      <icon name="message"/>
    </div>
  </bar>
</template>
<script>
export default {
	components: {
		Bar: () => import("@/components/SlaBar.vue"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    Icon: () => import("@/components/SlaIcon.vue")
	}
}
</script>