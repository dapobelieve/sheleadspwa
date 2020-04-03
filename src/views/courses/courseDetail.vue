<template>
	<section class="d-flex flex-column justify-content-between">
		    <div class="pass d-flex flex-column justify-content-between "  >
   				 <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
			<span @click="goBack" class="truncate text-bold font-poppings mt-12 mb-12" style="font-size:18px">
				<icon size="lg" name="left"/>
				{{ course.title }}
			</span>
		</bar>
          <img  width="100%"  height="250px" src="@/assets/img/course.png" alt="">
			<p class="heading text-bold font-poppings ml-56 "
			   style="position:absolute; top:100px;left:0; font-weight: 600;font-size: 18px; line-height: 37px;letter-spacing: 0.008em; width:200px">
				{{ course.title }}
		</p>

				<card class="card"  title="About this course" >
					<p>
						In this lesson we’ll look at how to plan and conduct primary market research and how
						to analyse the results. We’ll then step through how to craft a meaningful problem definition statement.
					</p>
				</card>
					<sla-button class="mt-56 m-56 btn" @click="handleInput" :disable="btn.loading" :text="btn.text"></sla-button>
				<br/>

			</div>
		<sla-menu/>
	</section>
</template>
<script>
export default {
	  data () {
            return {
				course:{
					title:"A Step By Step Guide To Starting Your Business "
				},
				btn: {
					text: "Start Lesson",
					loading: false
				},
            }
        },
	components: {
		TopBar: () => import("@/components/TopBar"),
		SlaMenu: () => import("@/components/SlaMenu"),
		 Icon: () => import("@/components/SlaIcon"),
		Bar: () => import("@/components/SlaBar"),
		Card: () => import("@/components/cards/slaCard"),
		SlaButton: () => import("@/components/SlaButton")

	},
	methods: {
		   goBack () {
			this.$router.go(-1)
		},
	},
}
</script>