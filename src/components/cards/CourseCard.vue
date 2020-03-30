<template>
	<div class="sla-course-card mx-16">
		<div class="overlay"></div>
		<div class="image">
        <img class="object-cover" :src="image" alt="">
    </div>
    <div class="content d-flex flex-column justify-content-between px-8">
    	<div class="text-align-left text-white">
    		<icon name="bookmark"/>
    	</div>
    	<div class="title">
    		<span class="font-poppins text-white">
    			A Step By Step Guide To Starting Your Business
    		</span>
    	</div>
    	<div class="text-align-right text-white">
				<icon name="video"/>
    	</div>
    </div>
	</div>
</template>
<script>
export default {
	props: {
		image: {
			type: String,
			required: true
		}
	},
	components: {
		Icon: () => import("@/components/SlaIcon.vue"),
	}
}

</script>
<style lang="scss">
.sla-course-card {
	height: 190px;
	overflow: hidden;
	position: relative;
	border-radius: 5px;
	
	.content {
		height: 100%
	}
	.overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: -1;
    // opacity: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%);
  }
	.image {
    position: absolute;
    z-index: -2;
    width: 100%;

    img {
      height: 190px !important;
      width: 100%;
    }
  }
}
</style>