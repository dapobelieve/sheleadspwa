<template>
	<span class="icon icon-lg">
		<video-icon v-if="name === 'video'"></video-icon>
		<bookmark v-else-if="name === 'bookmark'"></bookmark>
	</span>
</template>
<script>
export default {
	props: {
		name: {
			type: String
		}
	},
	components: {
		VideoIcon: () => import("@/components/__private__/media/video.vue"),
		Bookmark: () => import("@/components/__private__/media/bookmark.vue"),
	}
}
</script>
<style lang="scss">
.icon{
  display: inline-flex;
  align-items:center;
  align-content: center;
  justify-content: center;
  vertical-align: middle;
  font-size: calc(100% + 2px);
  width: 1.5rem;
  height: 1.5rem;
  z-index: 20;
  *{
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
  &-lg{
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
  }
  &-md{
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
  &-sm{
    width: 1.5rem;
    height: 1.5rem;
  }
  &-xs{
    width:1rem;
    height:1rem;
  }
}
</style>