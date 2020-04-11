<template>
  <div class="discuss" style="min-height: 100vh">
    <back />
    <div class="d-flex mx-12 p-8 align-items-center">
      <avatar class="mr-8" size="lg" :user="{ name: 'Dapo' }" />
      <input
        ref="topic"
        class="width-100"
        type="text"
        placeholder="Share something with us"
      />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Back: () => import("@/components/BackBar"),
    Avatar: () => import("@/components/SlaAvatar")
  },
  methods: {
    focusInput() {
      this.$refs.topic.focus();
    }
  },
  mounted() {
    this.focusInput();
  }
};
</script>
<style lang="scss" scoped>
input {
  border: none;
  font-family: fonts(bv-open-sans);
  line-height: 1.3;
  padding: 1rem;
  font-size: 14px;

  &:focus {
    outline: none;
  }
}
</style>
