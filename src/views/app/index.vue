<template>
	<section class="d-flex flex-column fill-screen">
		<top-bar/>
		<div class="flex-grow-1">
			<router-view/>
		</div>
		<sla-menu/>
	</section>
</template>
<script>
export default {
	components: {
		TopBar: () => import("@/components/TopBar"),
		SlaMenu: () => import("@/components/SlaMenu")
	}
}
</script>