<template>
  <div v-html="lesson.content">
    {{ lesson.content }}
  </div>
</template>
<script>
export default {
  props: ["lesson"]
};
</script>
