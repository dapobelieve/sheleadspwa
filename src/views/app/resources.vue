<template>
  <div class="messages d-flex flex-column">
    <top heading="Resources" />
    <div class="search d-flex align-items-center position-relative mt-32 px-32">
      <input class="px-8" placeholder="Search for tags or titles..." type="text" />
      <span class="bg-white text-grey-500 ml-12 position-absolute"><icon class="text-align-right" name="search"/></span>
    </div>
    <template v-if="cat.length" v-for="cat in categories">
      <span class="text-bolder text-grey-900 mt-24 ml-24 ">{{ cat }}</span>
      <div class="mt-24">
        <rcard :resource="resource" :key="resource._id" v-for="resource in resources[cat]" class="mx-24 mb-24" />
      </div>
    </template>
    <empty-state v-else size="big" message="No Resources" />
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      resources: this.$store.state.user.resources,
      btn: {
        text: "continue",
        loading: false
      }
    };
  },
  components: {
    SlaInput: () => import("@/components/SlaInput"),
    SlaButton: () => import("@/components/SlaButton"),
    Icon: () => import("@/components/SlaIcon"),
    top: () => import("@/components/top"),
    rcard: () => import("@/components/cards/resource"),
    emptyState: () => import("@/components/emptyState")
  },
  computed: {
    categories() {
      return Object.keys(this.resources);
    }
  },
  methods: {
    ...mapActions(["getAllResources"])
  },
  mounted() {
    this.getAllResources();
  }
};
</script>
<style lang="scss" scoped>
a {
  color: none;
}
.messages {
  .search {
    input {
      width: 100%;
      height: 40px;
      font-size: 14px;
      color: #99999999;
      letter-spacing: 0.15px;
      border-radius: 5px;
      border-width: 1px;
      border: 1px solid #e7e6e6;
      box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.06);

      &:focus {
        outline: none;
      }
    }

    span {
      right: 38px;
    }
  }
}
</style>
