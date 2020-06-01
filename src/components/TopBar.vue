<template>
  <div style="height: 48px;" class="d-flex align-items-center position-sticky top-0 z-index-1 bg-white justify-content-between px-4 mt-8 mb-8 py-8">
    <router-link :to="{ name: 'profile' }" class="cursor-pointer">
      <sla-avatar size="md" :user="{ name, image }"></sla-avatar>
    </router-link>
    <span style="font-size: 18px; line-height: 25px; color: #333333">
      {{ pageName }}
    </span>
    <router-link :to="{ name: 'messages' }">
      <icon size="lg" name="message" />
    </router-link>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    pageName: String
  },
  data() {
    return {
      name: this.$store.state.user.data.first_name,
      image: this.$store.state.user.data.image,
      display: true
    };
  },
  components: {
    Bar: () => import("@/components/SlaBar.vue"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    Icon: () => import("@/components/SlaIcon.vue")
  },
  mounted() {
    // showSideNav() {
    // this.$Bus.$emit("side-nav", true);
    // }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
