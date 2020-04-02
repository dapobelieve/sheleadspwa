<template>
	<div class="d-flex flex-column justify-content-between">
		<bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
			<span @click="goBack">
				<icon size="lg" name="left"/>
			</span>
		</bar>
		<div class="heading text-align-center font-poppins mx-24">What are your most interested to learn here?
			</div>
			<span class="text-align-center mt-16">Select two or more</span>
		<div class="interests d-flex justify-content-between mt-56 flex-wrap mx-24">
			<sla-interest name="money">
				<template #caption>
					Growing my money
				</template>
			</sla-interest>
			<sla-interest name="pro">
				<template #caption>
					Climbing the professional ladder
				</template>
			</sla-interest>
			<sla-interest name="personal">
				<template #caption>
					Building my Personal Brand
				</template>
			</sla-interest>
			<sla-interest name="business">
				<template #caption>
					Growing my business
				</template>
			</sla-interest>
			<sla-interest name="life">
				<template #caption>
					Having a great life
				</template>
			</sla-interest>
			<sla-interest name="network">
				<template #caption>
					Networking with like-minds
				</template>
			</sla-interest>
		</div>
		<sla-button @click="submit" class="mt-56 mx-24" :disable="btn.loading" text="continue"/>
	</div>
</template>
<script>
import {mapActions} from "vuex"	
export default {
	data () {
		return {
			interests: [],
			btn: {
				text: "continue",
				loading: false
			}
		}
	},
	components: {
		Bar: () => import("@/components/SlaBar"),
		Icon: () => import("@/components/SlaIcon.vue"),
		SlaInterest: () => import("@/components/SlaInterest"),
		SlaButton: () => import("@/components/SlaButton")
	},
	methods: {
		...mapActions(["updateProfile"]),
		goBack () {
			this.$router.go(-1)
		},
		async submit() {
			if(this.interests.length < 2) {
				alert("Select 2 or more areas of interest")
				return
			}

			this.btn.loading = !this.btn.loading
      this.btn.text = "loading..."

			let res = await this.updateProfile({
				intrests: JSON.stringify(this.interests)
			})

			if (res) {
				this.$router.push({
					name: "location"
				})
			}else {
				this.btn.loading = !this.btn.loading
      	this.btn.text = "continue"
				alert(res.data.message)
			}
		}
	},
	mounted() {

		this.$Bus.$on('interest-selected', (data) => {
			if(!this.interests.includes(data.id))
				this.interests.push(data.id)
			else
				this.interests.splice(this.interests.indexOf(data.id), 1)
		})
	}
}
</script>
<style lang="scss" scoped>
.heading {
	margin-top: 60px;
	font-size: 18px;
}
.interests {
	
}
</style>