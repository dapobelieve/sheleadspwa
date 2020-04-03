<template>
	<span :class="`icon icon-${size}`">
		<video-icon v-if="name === 'video'"></video-icon>
		<bookmark v-else-if="name === 'bookmark'"></bookmark>
		<like v-else-if="name === 'like'"/>
    <home v-else-if="name === 'home'"/>
    <search v-else-if="name === 'search'"/>
    <notification v-else-if="name === 'notification'"/>
    <leader v-else-if="name === 'leader'"/>
    <course v-else-if="name === 'course'"/>
    <comment v-else-if="name === 'comment'"/>
    <share v-else-if="name === 'share'"/>
    <up v-else-if="name === 'up'"/>
    <down v-else-if="name === 'down'"/>
    <message v-else-if="name === 'message'"/>
    <left v-else-if="name === 'left'"/>
    <plus v-else-if="name === 'plus'"/>
	</span>
</template>
<script>
export default {
	props: {
		name: {
			type: String
		},
    size: {
      type: String
    }
	},
	components: {
		VideoIcon: () => import("@/components/__private__/media/video.vue"),
		Bookmark: () => import("@/components/__private__/media/bookmark.vue"),
		Like: () => import("@/components/__private__/media/like.vue"),
    Home: () => import("@/components/__private__/media/home.vue"),
    message: () => import("@/components/__private__/media/message.vue"),
    Search: () => import("@/components/__private__/media/search.vue"),
    Leader: () => import("@/components/__private__/media/podium.vue"),
    Left: () => import("@/components/__private__/media/left.vue"),
    Course: () => import("@/components/__private__/media/course.vue"),
    Share: () => import("@/components/__private__/media/share.vue"),
    Up: () => import("@/components/__private__/media/top.vue"),
    Down: () => import("@/components/__private__/media/down.vue"),
    Plus: () => import("@/components/__private__/media/plus.vue"),
    Comment: () => import("@/components/__private__/media/comment.vue"),
    Notification: () => import("@/components/__private__/media/notification.vue"),
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
  &:hover{
    cursor: pointer
  }
}
</style>