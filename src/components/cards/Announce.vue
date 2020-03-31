<template>
	<div class="announce d-flex flex-column px-8 py-8 shadow">
		<h6 class="font-poppins">Get More Points</h6>
		<p class="text-align-left flex-grow-1">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda totam illo, placeat eos deserunt ad magnam molestias. Est doloremque perspiciatis tempora eaque modi 
		</p>
	</div>
</template>
<script>
export default {
	props: {
		title:{
			type: String
		},
		message: {
			type: String
		}
	}
}
</script>
<style lang="scss" scoped>
.announce{
	height: 150px;
	width: 329px;
	border-radius: 5px;
	text-align: justify;
	h6 {
		font-size: 18px !important;
	}
	p {
		line-height: 24px
	}
}
</style>