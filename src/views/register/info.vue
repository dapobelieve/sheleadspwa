<template>
	<div class="pass d-flex flex-column justify-content-between mx-24">
		<span class="heading text-align-center font-poppins">Kindly provide the following details. It will help us serve you better</span>
		<span class="heading-2 text-align-center font-poppins mt-32">Personal Info</span>
		<sla-input class="input1" placeholder="Full Name" type="text"/>
		<sla-input class="mt-40" placeholder="Phone Number" type="text"/>
		<sla-input class="mt-40" placeholder="Location" type="text"/>

		<span class="heading-2 text-align-center font-poppins mt-32">Business Info</span>
		<sla-input class="input1" placeholder="Business Name" type="text"/>
		<sla-input class="mt-40" placeholder="Phone Number" type="text"/>
		<sla-input class="mt-40" placeholder="Location" type="text"/>
		<sla-input class="mt-40" placeholder="Website" type="text"/>

		<sla-button @click="goFront" class="mt-56 mb-56" text="continue"></sla-button>

	</div>
</template>
<script>
export default {
	data () {
		return {
			form: {
				first_name: null,
				last_name: null,
				phone_number: null,
				location: null,
				business_name: null,
				business_number: null,
			}
		}
	},
	components: {
		SlaInput: () => import("@/components/SlaInput"),
		SlaButton: () => import("@/components/SlaButton")
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
