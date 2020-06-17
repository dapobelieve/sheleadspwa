<template>
  <span :class="`icon icon-${size}`" :id="name" v-on="$listeners">
    <video-icon v-if="name === 'video'"></video-icon>
    <bookmark v-else-if="name === 'bookmark'"></bookmark>
    <bookmark-filled v-else-if="name === 'bookmark-filled'"></bookmark-filled>
    <like v-else-if="name === 'like'" />
    <love-filled v-else-if="name === 'like-filled'" />
    <home v-else-if="name === 'home'" />
    <search v-else-if="name === 'search'" />
    <notification v-else-if="name === 'notification'" />
    <leader v-else-if="name === 'leader'" />
    <course v-else-if="name === 'course'" />
    <comment v-else-if="name === 'comment'" />
    <share v-else-if="name === 'share'" />
    <up v-else-if="name === 'up'" />
    <down v-else-if="name === 'down'" />
    <cancel v-else-if="name === 'cancel'" />
    <add v-else-if="name === 'add'" />
    <message v-else-if="name === 'message'" />
    <padlock v-else-if="name === 'padlock'" />
    <reply v-else-if="name === 'reply'" />
    <quiz v-else-if="name === 'quiz'" />
    <group v-else-if="name === 'group'" />
    <file v-else-if="name === 'file'" />
    <play v-else-if="name === 'play'" />
    <z-menu v-else-if="name === 'zmenu'" />
    <eclipse v-else-if="name === 'eclipse'" />
    <eclipse-active v-else-if="name === 'eclipse-active'" />
    <left v-else-if="name === 'left'" />
    <sla-email v-else-if="name === 'sla-email'" />
    <t-ick v-else-if="name === 't-ick'" />
    <eye-slash v-else-if="name === 'eye-slash'" />
    <plus v-else-if="name === 'plus'" />
    <complete v-else-if="name === 'complete'" />
    <crown v-else-if="name === 'crown'" />
    <right v-else-if="name === 'right'" />
    <recent v-else-if="name === 'recent'" />
    <emoji v-else-if="name === 'emoji'" />
    <info v-else-if="name === 'info'" />
    <send v-else-if="name === 'send'" />
    <report v-else-if="name === 'report'" />
    <thumb-up v-else-if="name === 'thumb-up'" />
    <thumb-filled v-else-if="name === 'thumb-filled'" />
    <survey v-else-if="name === 'survey'" />
    <poll v-else-if="name === 'poll'" />
    <smile v-else-if="name === 'smile'" />
    <faz v-else-if="name === 'leader-menu'" />
    <event v-else-if="name === 'event'" />
    <announce v-else-if="name === 'announce'" />
    <resource v-else-if="name === 'resource'" />
    <setting v-else-if="name === 'settings'" />
    <help v-else-if="name === 'help'" />
    <logout v-else-if="name === 'logout'" />
    <cdown v-else-if="name === 'cdown'" />
    <cup v-else-if="name === 'cup'" />
    <survey-white v-else-if="name === 'survey_white'" />
    <poll-white v-else-if="name === 'poll_white'" />
    <course-white v-else-if="name === 'course_white'" />
    <quiz-white v-else-if="name === 'quiz_white'" />
    <file-white v-else-if="name === 'file_white'" />
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
    SurveyWhite: () => import("@/components/__private__/media/survey_white.vue"),
    PollWhite: () => import("@/components/__private__/media/poll_white.vue"),
    CourseWhite: () => import("@/components/__private__/media/course_white.vue"),
    QuizWhite: () => import("@/components/__private__/media/quiz_white.vue"),
    FileWhite: () => import("@/components/__private__/media/file_white.vue"),
    Bookmark: () => import("@/components/__private__/media/bookmark.vue"),
    survey: () => import("@/components/__private__/media/survey.vue"),
    resource: () => import("@/components/__private__/media/resource.vue"),
    setting: () => import("@/components/__private__/media/setting.vue"),
    help: () => import("@/components/__private__/media/help.vue"),
    smile: () => import("@/components/__private__/media/smile.vue"),
    logout: () => import("@/components/__private__/media/logout.vue"),
    faz: () => import("@/components/__private__/media/leadermenu.vue"),
    event: () => import("@/components/__private__/media/event.vue"),
    announce: () => import("@/components/__private__/media/announce.vue"),
    poll: () => import("@/components/__private__/media/poll.vue"),
    BookmarkFilled: () => import("@/components/__private__/media/bookmark-filled.vue"),
    Like: () => import("@/components/__private__/media/like.vue"),
    ThumbUp: () => import("@/components/__private__/media/thumbsup.vue"),
    ThumbFilled: () => import("@/components/__private__/media/thumbfilled.vue"),
    Home: () => import("@/components/__private__/media/home.vue"),
    message: () => import("@/components/__private__/media/message.vue"),
    Search: () => import("@/components/__private__/media/search.vue"),
    Leader: () => import("@/components/__private__/media/podium.vue"),
    Left: () => import("@/components/__private__/media/left.vue"),
    Right: () => import("@/components/__private__/media/right.vue"),
    Course: () => import("@/components/__private__/media/course.vue"),
    Share: () => import("@/components/__private__/media/share.vue"),
    Up: () => import("@/components/__private__/media/top.vue"),
    Down: () => import("@/components/__private__/media/down.vue"),
    Group: () => import("@/components/__private__/media/group.vue"),
    Plus: () => import("@/components/__private__/media/plus.vue"),
    ZMenu: () => import("@/components/__private__/media/more.vue"),
    Comment: () => import("@/components/__private__/media/comment.vue"),
    Notification: () => import("@/components/__private__/media/notification.vue"),
    Padlock: () => import("@/components/__private__/media/padlock.vue"),
    Reply: () => import("@/components/__private__/media/reply.vue"),
    play: () => import("@/components/__private__/media/play.vue"),
    file: () => import("@/components/__private__/media/file.vue"),
    quiz: () => import("@/components/__private__/media/quiz.vue"),
    eclipse: () => import("@/components/__private__/media/eclipse.vue"),
    cancel: () => import("@/components/__private__/media/cancel.vue"),
    add: () => import("@/components/__private__/media/add.vue"),
    eclipseActive: () => import("@/components/__private__/media/eclipse-active.vue"),
    slaEmail: () => import("@/components/__private__/media/slaEmail.vue"),
    TIck: () => import("@/components/__private__/media/tick.vue"),
    eyeSlash: () => import("@/components/__private__/media/eyeSlash.vue"),
    complete: () => import("@/components/__private__/media/complete.vue"),
    crown: () => import("@/components/__private__/media/crown.vue"),
    recent: () => import("@/components/__private__/media/recent.vue"),
    emoji: () => import("@/components/__private__/media/emoji.vue"),
    info: () => import("@/components/__private__/media/info.vue"),
    send: () => import("@/components/__private__/media/send.vue"),
    Report: () => import("@/components/__private__/media/warning.vue"),
    Cdown: () => import("@/components/__private__/media/chev-down.vue"),
    Cup: () => import("@/components/__private__/media/chev-up.vue"),
    loveFilled: () => import("@/components/__private__/media/love2.vue")
  }
};
</script>
<style lang="scss">
.icon {
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  vertical-align: middle;
  font-size: calc(100% + 2px);
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1;
  * {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
  &-lg {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
  }
  &-md {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
  &-sm {
    width: 1.5rem;
    height: 1.5rem;
  }
  &-xs {
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
