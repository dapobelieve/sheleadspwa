<template>
	<div class="pass d-flex flex-column justify-content-between">
		<bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
			<span @click="goBack">
				<icon size="lg" value="left"/>
			</span>
		</bar>
		<div class="text-align-center mx-24 mt-56">
			<span class="heading font-poppins">We’d like to send you relevant stuff. Tell us your industry and location!		</span>
			<sla-select v-model="industry" :items="categories" class="input1" placeholder="Industry"/>
			<sla-select v-model="location" class="input1" placeholder="Location"/>
		</div>
		<sla-button @click="submit" class="input1 mx-24" :disable="btn.loading" :text="btn.text"></sla-button>
	</div>
</template>
<script>
const categories = [
  {text: "Food", value: "Food"},
  {text: "Politics", value: "Politics"},
  {text: "Entertainment", value: "Entertainment"},
  {text: "Business", value: "Business"},
  {text: "Health", value: "Health"},
  {text: "Technology", value: "Technology"},
  {text: "Photography", value: "Photography"},
  {text: "Travel", value: "Travel"},
  {text: "Science", value: "Science"},
  {text: "Sports", value: "Sports"},
  {text: "Fashion", value: "Fashion"},
  {text: "Relationships", value: "Relationships"},
  {text: "Gaming", value: "Gaming"},
  {text: "Pet/Animals", value: "Pet/Animals"},
  {text: "Education/Career", value: "Education/Career"},
  {text: "Law", value: "Law"},
  {text: "Wildlife and Nature", value: "Wildlife and Nature"},
  {text: "Arts and Culture", value: "Arts and Culture"},
  {text: "Other", value: "Other"}
];
import { mapActions } from "vuex"
export default {
	data () {
		return {
			btn: {
				text: "done",
				loading: false
			},
			categories,
			location: "",
			industry: ""
		}
	},
	components: {
		Bar: () => import("@/components/SlaBar"),
		Icon: () => import("@/components/SlaIcon.vue"),
		SlaInput: () => import("@/components/SlaInput"),
		SlaButton: () => import("@/components/SlaButton"),
		SlaSelect: () => import("@/components/SlaSelect")
	},
	methods: {
		...mapActions(["updateProfile"]),
		goBack () {
			this.$router.go(-1)
		},
		async submit() {
			this.btn.loading = !this.btn.loading
      this.btn.text = "loading..."

			let res = await this.updateProfile({
				industry: this.industry,
				location: this.location
			})

			if (res == true) {
				this.$router.replace({
					name: "home"
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