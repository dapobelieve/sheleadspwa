<template>
  <div class="messages d-flex flex-column">
    <top heading="Messages" />
    <div class="search d-flex align-items-center position-relative mt-32 px-32">
      <input class="px-8" v-model="quickSearch" placeholder="Search for tags or titles..." type="text" />
      <span class="bg-white text-grey-500 ml-12 position-absolute"><icon class="text-align-right" name="search"/></span>
    </div>
    <div v-if="getGroups.length > 0">
      <message-card v-for="dataObj in filteredRecords" :key="dataObj._id" :dataObj="dataObj" class="cursor-pointer mt-16" @click="goChat(dataObj.group._id)" />
    </div>
    <empty-state v-else size="big" message="You've not been added to any groups yet" />
    <!-- <div class="line-thin mt-12"></div> -->
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      quickSearch: "",
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
    emptyState: () => import("@/components/emptyState"),
    MessageCard: () => import("@/components/cards/messageCard.vue")
  },
  computed: {
    ...mapGetters(["getGroups"]),
    filteredRecords() {
      let data = this.getGroups.filter(row => {
        return Object.keys(row.group).some(key => {
          return (
            String(row.group[key])
              .toLowerCase()
              .indexOf(this.quickSearch.toLowerCase()) > -1
          );
        });
      });

      return data;
    }
  },
  methods: {
    ...mapActions(["allGroups"]),
    goChat(id) {
      this.$router.push({
        name: "chat",
        params: {
          id
        }
      });
    }
  },
  mounted() {
    this.allGroups();
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
