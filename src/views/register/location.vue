<template>
	<div class="pass d-flex flex-column justify-content-between mx-24">
		<span class="heading text-align-center font-poppins">
			We’d like to send you relevant stuff. Tell us your industry and location!		</span>
		<sla-select class="input1" placeholder="Business Name" type="text"/>
		<sla-select class="input1" placeholder="Business Name" type="text"/>

		<sla-button @click="goFront" class="mt-56 mb-56" text="continue"></sla-button>

	</div>
</template>
<script>
export default {
	components: {
		SlaInput: () => import("@/components/SlaInput"),
		SlaSelect: () => import("@/components/SlaSelect")
	},
	methods: {
		goFront() {
			this.$router.push({
				name: "interests"
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.pass {
	margin-top: 70px;
	
	.heading {
		font-weight: normal;
		font-size: 18px !important;

		&-2 {
			font-size: 16px;
		}
	}

	.input1 {
		margin-top: 40px
	}

	a {
		text-decoration: none;
		color: color(bv-primary);
	}

}
</style>
