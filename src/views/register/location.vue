<template>
	<div class="pass d-flex flex-column justify-content-between">
		<bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
			<span @click="goBack">
				<icon size="lg" name="left"/>
			</span>
		</bar>
		<div class="text-align-center mx-24 mt-56">
			<span class="heading font-poppins">We’d like to send you relevant stuff. Tell us your industry and location!		</span>
			<sla-select class="input1" placeholder="Industry"/>
			<sla-select class="input1" placeholder="Location"/>
		</div>
		<sla-button @click="goFront" class="input1 mx-24" text="done"></sla-button>
	</div>
</template>
<script>
export default {
	components: {
		Bar: () => import("@/components/SlaBar"),
		Icon: () => import("@/components/SlaIcon.vue"),
		SlaInput: () => import("@/components/SlaInput"),
		SlaButton: () => import("@/components/SlaButton"),
		SlaSelect: () => import("@/components/SlaSelect")
	},
	methods: {
		goFront() {
			this.$router.push({
				name: "interests"
			})
		},
		goBack () {
			this.$router.go(-1)
		}
	}
}
</script>
<style lang="scss" scoped>
.pass {
	
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