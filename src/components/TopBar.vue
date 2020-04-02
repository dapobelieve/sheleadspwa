<template>
  <div style="height: 57px;" class="d-flex align-items-center position-sticky top-0 z-index-1 bg-white justify-content-between px-4 mt-8 mb-8 py-8">
    <sla-avatar size="md" :user="{name: 'Dapo'}"></sla-avatar>
    <img src="@/assets/logo.png" alt="">
    <icon name="message"/>
  </div>
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