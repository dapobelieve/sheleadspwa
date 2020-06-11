<template>
  <div class="pass d-flex  flex-column justify-content-between ">
    <div class="hr"></div>
    <sla-input class="mt-24 mx-24" placeholder="Search for tags or titles" type="text" v-model="search" />

    <div v-if="searchAnnoucements.length > 0" class=" row">
      <announce v-for="item in searchAnnoucements" :key="item._id" :annoucement="item" class=" col-6" />
    </div>
    <empty-state message="No annoucement matches your search parameters" v-else />
    <!-- <empty-state message="No annoucement created" v-if="!announcements" /> -->

    <br />
  </div>
</template>

<script>
import Announce from "../../components/cards/Announce";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "survey",
  data() {
    return {
      search: ""
    };
  },
  components: {
    Announce,
    SlaInput: () => import("@/components/SlaInput"),
    emptyState: () => import("@/components/emptyState")
    // Announce: () => import("@/components/cards/Announce"),
  },
  computed: {
    ...mapGetters(["announcements"]),
    searchAnnoucements() {
      return this.announcements.filter(announcement => {
        return announcement.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },
  async mounted() {
    await this.getAnnouncements();
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
