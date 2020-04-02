<template>
	<div class="pass d-flex flex-column justify-content-between mx-24">
		<span class="heading text-align-center font-poppins">Kindly provide the following details. It will help us serve you better</span>
		<span class="heading-2 text-align-center font-poppins mt-32">Personal Info</span>
		<sla-input v-model="form.first_name" class="input1" placeholder="Full Name" type="text"/>
		<sla-input v-model="form.phone_number" class="mt-40" placeholder="Phone Number" type="text"/>
		<sla-input v-model="form.location" class="mt-40" placeholder="Location" type="text"/>

		<span class="heading-2 text-align-center font-poppins mt-32">Business Info</span>
		<sla-input v-model="form.business_name" class="input1" placeholder="Business Name" type="text"/>
		<sla-input v-model="form.business_number" class="mt-40" placeholder="Phone Number" type="text"/>
		<sla-input v-model="form.business_location" class="mt-40" placeholder="Location" type="text"/>
		<sla-input v-model="form.business_website" class="mt-40" placeholder="Website" type="text"/>

		<sla-button @click="handleForm" class="mt-56 mb-56" :disable="btn.loading" text="continue"></sla-button>

	</div>
</template>
<script>
import { mapMutations, mapActions } from "vuex"
export default {
	data () {
		return {
			btn: {
				text: "continue",
				loading: false
			},
			form: {
				first_name: "",
				// last_name: "",
				phone_number: "",
				location: "",
				business_name: "",
				business_number: "",
				business_location: "",
				business_website: ""
			}
		}
	},
	components: {
		SlaInput: () => import("@/components/SlaInput"),
		SlaButton: () => import("@/components/SlaButton")
	},
	methods: {
		...mapActions(["updateProfile"]),
		...mapMutations(["setUserData"]),
		async handleForm() {
			if(!Object.values(this.form).every(item =>  item != "")) {
				alert("All fields required")
				console.log(this.form)
				return
			}

			this.btn.loading = !this.btn.loading
      this.btn.text = "loading..."

			let res = await this.updateProfile(this.form)

			if (res) {
				this.$router.push({
					name: "interests"
				})
			}else {
				this.btn.loading = !this.btn.loading
      	this.btn.text = "continue"
				alert(res.data.message)
			}
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
