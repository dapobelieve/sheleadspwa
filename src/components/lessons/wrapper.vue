<template>
  <div>
    <sla-article v-if="lesson.lesson_type == 'article'" :article="lesson.content" />
    <sla-audio v-if="lesson.lesson_type == 'audio'" :lesson="lesson" />
    <sla-video v-else-if="lesson.lesson_type == 'video'" :lesson="lesson" />
  </div>
</template>
<script>
export default {
  props: {
    lesson: {
      type: Object,
      required: true
    }
  },
  components: {
    SlaArticle: () => import("@/components/lessons/article"),
    SlaVideo: () => import("@/components/lessons/video"),
    SlaAudio: () => import("@/components/lessons/audio")
  }
};
</script>
