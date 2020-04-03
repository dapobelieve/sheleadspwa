<template>
	<div>
		<div class="discuss shadow">
		<discuss-top/>
		<div class="discussion mt-24 truncate truncate-3 text-justify">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint iusto mollitia. Temporibus reiciendis quidem molestiae veniam recusandae repellat, officiis deleniti sint excepturi, totam fugit est facilis quisquam sapiente ducimus iste optio. Quaerat voluptates, nisi tempore officiis nemo excepturi eum, vitae aspernatur optio a rerum. Quaerat tenetur ab harum odit?
		</div>
		<stats class="text-align-left text-grey-500 mt-8"/>
	</div>
	</div>
</template>
<script>
export default {
	props: ["title", "discussioin", "image", "user", "profession"],
	components: {
		DiscussTop: () => import("@/components/cards/DiscussionTop"),
		Stats: () => import("@/components/Stats")
	}
}
</script>

<style lang="scss" scoped>
.discuss {
	height: 200px;
	width: 330px;
	padding: 1rem;
	border-radius: 5px;

	.discussion {
		line-height: 24px;
	}
}
</style>