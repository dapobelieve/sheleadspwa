<template>
	<div class="pass d-flex flex-column justify-content-between mx-24">
		<span class="heading text-align-center font-poppins">Create New Password</span>
		<sla-input class="input1" placeholder="Password" type="password"/>
		<sla-input class="mt-40" placeholder="Confirm Password" type="password"/>
		<sla-button class="mt-56" text="continue"></sla-button>
		<span class="text-align-center mt-32">Forgot your password? <a href="#">Click here</a></span>
	</div>
</template>
<script>
export default {
	components: {
		SlaInput: () => import("@/components/SlaInput"),
		SlaButton: () => import("@/components/SlaButton")
	}
}
</script>
<style lang="scss" scoped>
.pass {
	margin-top: 120px;
	
	.heading {
		font-weight: normal;
		font-size: 18px !important;
	}

	.input1 {
		margin-top: 80px
	}

	a {
		text-decoration: none;
		color: color(bv-primary);
	}

}
</style>
