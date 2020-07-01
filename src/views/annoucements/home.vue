<template>
  <div class="messages d-flex flex-column mb-24">
    <top heading="Announcements" />
    <div class="search d-flex align-items-center position-relative mt-32 px-32">
      <input class="px-8" v-model="quickSearch" placeholder="Search for titles..." type="text" />
      <span class="bg-white text-grey-500 ml-12 position-absolute"><icon class="text-align-right" name="search"/></span>
    </div>
    <div class="mt-12 mx-12">
      <div class="d-flex justify-content-around flex-wrap mt-8">
        <mini-card
          @mini-click="$router.push({ name: 'annoucement', params: { id: item._id } })"
          class="mb-24"
          :id="item._id"
          :key="item._id"
          :title="item.title"
          :cardwidth="160"
          :image="item.cover_image"
          v-for="item in filteredRecords"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Announce from "../../components/cards/Announce";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "announcements",
  data() {
    return {
      quickSearch: ""
    };
  },
  components: {
    Announce,
    Icon: () => import("@/components/SlaIcon"),
    emptyState: () => import("@/components/emptyState"),
    MiniCard: () => import("@/components/cards/minicard"),
    top: () => import("@/components/top")
  },
  computed: {
    ...mapGetters(["announcements"]),
    filteredRecords() {
      let data = this.announcements.filter(row => {
        return Object.keys(row).some(key => {
          return (
            String(row[key])
              .toLowerCase()
              .indexOf(this.quickSearch.toLowerCase()) > -1
          );
        });
      });

      return data;
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
