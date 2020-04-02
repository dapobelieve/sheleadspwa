<template>
	<div class="home d-flex flex-column ml-16">
		<p class="greet text-bold">Welcome, {{getFirstname}}!</p>
		<div class="alert bg-grey-200 pl-8 pr-16 py-4 text-bold">
			Your lessons are selected based on your preferences
		</div>
		<div class="d-flex align-items-center justify-content-between mt-48">
			<span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
				Get Started <img class="ml-24" height="23" width="23" src="@/assets/icons/network.png" alt="">
			</span>
			<img class="mr-24" height="19" width="19" src="@/assets/icons/arrow-right.png" alt="">
		</div>

		<div class="courses mt-12 py-2 d-flex overflow-x-auto">
			<course v-for="x in 12" 
     title="A Step By Step Guide To Starting Your Business"
     image="https://res.cloudinary.com/rohing/image/upload/q_53/v1585572462/you-x-ventures-Oalh2MojUuk-unsplash_n2ar6n.jpg" />
		</div>
	
		<div class="d-flex align-items-center justify-content-between mt-24">
			<span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
				Announcements
			</span>
			<img class="mr-24" height="19" width="19" src="@/assets/icons/arrow-right.png" alt="">
		</div>
		<div class="announce d-flex mt-12 mb-12 overflow-x-auto">
			<announce class="mr-12 py-4" v-for="zee in 6" />
		</div>
		lorem2000
	</div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
	data () {
		return {

		}
	},
	components: {
		Icon: () => import("@/components/SlaIcon.vue"),
		Course: () => import("@/components/cards/CourseCard"),
		Announce: () => import("@/components/cards/Announce")
	},
	computed: {
		...mapGetters(["getFirstname"])
	}
}
</script>
<style lang="scss" scoped>
.home {
	.greet {
		font-size: 24px;
	}
	.alert {
		margin-right: 22px;
		border-radius: 5px;
		font-size: 12px;
	}

	.courses {
		&::-webkit-scrollbar {
		 display: none;
		}
		&>:not(:last-child) {
			margin-right: 12px !important;
		}
		&> *:last-child {
			margin-right: 12px !important;
		}
	}
	.announce {
		&::-webkit-scrollbar {
		 display: none;
		}
		&>:not(:last-child) {
			margin-right: 12px !important;
		}
		&> *:last-child {
			padding-right: 12px !important;
		}
	}
}
</style>