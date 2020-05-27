<template>
  <div class="messages d-flex flex-column">
    <top heading="Resources" />
    <div class="search d-flex align-items-center position-relative mt-32 px-32">
      <input
        class="px-8"
        placeholder="Search for tags or titles..."
        type="text"
      />
      <span class="bg-white text-grey-500 ml-12 position-absolute"
        ><icon class="text-align-right" name="search"
      /></span>
    </div>
    <span class="text-bolder text-grey-900 mt-24 ml-24 ">Program</span>
    <div class="mt-24">
      <rcard
        :resource="resource"
        :key="resource"
        v-for="resource in 6"
        class="mx-24 mb-24"
      />
    </div>
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
    rcard: () => import("@/components/cards/resource")
  },
  methods: {
    ...mapActions(["getResources"])
  },
  mounted() {
    this.getResources();
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
