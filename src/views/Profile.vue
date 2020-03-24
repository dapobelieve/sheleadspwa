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
		SlaInterest: () => import("@/components/SlaInterest.vue"),
	}
}
</script>