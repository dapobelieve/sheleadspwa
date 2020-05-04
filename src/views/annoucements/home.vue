<template>
  <div class="pass d-flex  flex-column justify-content-between ">
    <div class="hr"></div>
    <sla-input
      class="mt-24 mx-24"
      placeholder="Search for tags or titles"
      type="password"
    />

    <div class="announce d-flex flex-column mt-12 mb-12 px-8 py-4">
      <announce
        v-for="item in announcements"
        :key="item._id"
        :annoucement="item"
        class="m-4 col-6"
      />
    </div>

    <br />
  </div>
</template>

<script>
import Announce from "../../components/cards/Announce";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "survey",
  data() {
    return {};
  },
  components: {
    Announce,
    SlaInput: () => import("@/components/SlaInput")
    // Announce: () => import("@/components/cards/Announce"),
  },
  computed: {
    ...mapGetters(["announcements"])
  },
  mounted() {
    this.getAnnouncements();
  },
  methods: {
    ...mapActions(["getAnnouncements"]),
    goBack() {
      this.$router.go(-1);
    },
    handleInput() {}
  }
};
</script>

<style scoped>
textarea {
  border: none;
  background: #f4f4f4;
  border-radius: 5px;
}
</style>
