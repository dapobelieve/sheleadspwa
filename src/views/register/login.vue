<template>
	<div class="pass d-flex flex-column justify-content-between mx-24">
		<span class="heading text-align-center font-poppins">Login</span>
		<sla-input v-model="form.email" class="input1" placeholder="Email Address" type="text"/>
		<sla-input v-model="form.password" class="mt-40" placeholder="Password" type="password"/>
		<sla-button @click="handleSubmit" class="mt-56" text="login"></sla-button>
		<span class="text-align-center mt-32">Forgot your password? <a href="#">Click here</a></span>
	</div>
</template>
<script>
import { mapActions } from "vuex"
export default {
	data () {
		return {
			form: {
				email: "ayanbukolaalamu@gmail.com",
				password: "password"
			}
		}
	},
	components: {
		SlaInput: () => import("@/components/SlaInput"),
		SlaButton: () => import("@/components/SlaButton")
	},
	methods: {
		...mapActions(["login"]),
		async handleSubmit() {

			let res = await this.login(this.form)

			if(res) {
				this.$router.push({
					name: "home"
				})
			}else {
				alert(res.data.message)
			}
		}
	},
	mounted() {
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
