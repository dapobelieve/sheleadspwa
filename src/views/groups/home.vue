<template>
  <div class="messages d-flex flex-column mb-24">
    <top heading="Groups" />
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
    <div class="ml-12 mt-32">
      <div class="d-flex align-items-center justify-content-between mb-24">
        <span
          style="font-size: 16px"
          class="flex-inline font-poppins text-bold "
        >
          My Groups
        </span>
        <img
          class="mr-24"
          height="16"
          width="16"
          src="@/assets/icons/arrow-right.png"
          alt=""
        />
      </div>
      <div class="d-flex mt-8 x-flow overflow-x-auto">
        <mini-card
          class="cursor-pointer"
          :title="g.title"
          :image="g.cover_image"
          v-for="g in groups"
          :key="g._id"
        />
      </div>
    </div>
    <div class="mt-12 ml-12">
      <div class="d-flex align-items-center justify-content-between mt-48">
        <span
          style="font-size: 16px"
          class="flex-inline font-poppins text-bold "
        >
          Categories
        </span>
        <img
          class="mr-24"
          height="16"
          width="16"
          src="@/assets/icons/arrow-right.png"
          alt=""
        />
      </div>
      <div class="d-flex mt-8 x-flow overflow-x-auto">
        <micro-card class="cursor-pointer" v-for="item in 10" />
      </div>
    </div>
    <div class="mt-12 ml-12">
      <div class="d-flex align-items-center justify-content-between mt-48">
        <span
          style="font-size: 16px"
          class="flex-inline font-poppins text-bold "
        >
          Suggested Groups
        </span>
        <img
          class="mr-24"
          height="16"
          width="16"
          src="@/assets/icons/arrow-right.png"
          alt=""
        />
      </div>
      <div class="d-flex mt-8 x-flow overflow-x-auto">
        <mini-card v-for="item in 6" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      groups: this.$store.state.user.groups
    };
  },
  computed: {
    ...mapState(["user"])
  },
  components: {
    top: () => import("@/components/top"),
    Icon: () => import("@/components/SlaIcon"),
    MiniCard: () => import("@/components/cards/minicard"),
    MicroCard: () => import("@/components/cards/smallcard")
  },
  methods: {
    ...mapActions(["allGroups"])
  },
  mounted() {
    this.allGroups();
  }
};
</script>
<style lang="scss" scoped>
.messages {
  .search {
    input {
      width: 100%;
      height: 40px;
      font-size: 14px;
      color: #999999;
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

  .x-flow {
    &::-webkit-scrollbar {
      display: none;
    }
    & > :not(:last-child) {
      margin-right: 12px !important;
    }
    & > *:last-child {
      padding-right: 12px !important;
    }
    & > *:first-child {
      // margin-left: 12px;
    }
  }
}
</style>
