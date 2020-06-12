<template>
  <div class="messages d-flex flex-column mb-24">
    <top heading="Surveys" />
    <div class="search d-flex align-items-center position-relative mt-32 px-32">
      <input v-model="quickSearch" class="px-8" placeholder="Search for tags or titles..." type="text" />
      <span class="bg-white text-grey-500 ml-12 position-absolute"><icon class="text-align-right" name="search"/></span>
    </div>
    <div v-if="surveys.length > 0" class="mt-12 mx-12">
      <div class="d-flex justify-content-around flex-wrap mt-8">
        <mini-card
          @mini-click="$router.push({ name: 'survey-details', params: { id: $event } })"
          class="mb-24"
          :key="item._id"
          :id="item._id"
          :image="item.survey_image"
          :title="item.title"
          :cardwidth="160"
          v-for="item in filteredRecords"
        />
        <!-- " -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      quickSearch: ""
    };
  },
  components: {
    top: () => import("@/components/top"),
    Icon: () => import("@/components/SlaIcon"),
    MiniCard: () => import("@/components/cards/minicard"),
    MicroCard: () => import("@/components/cards/smallcard")
  },
  computed: {
    ...mapGetters(["surveys"]),
    hasTaken() {
      return this.$store.state.user.takenSurveys.includes(this.$route.params.id);
    },
    filteredRecords() {
      let notTaken = this.surveys.filter(item => {
        return !this.$store.state.user.takenSurveys.includes(item._id);
      });

      let data = notTaken.filter(row => {
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
  methods: {
    ...mapActions(["getSurvey"])
  },
  mounted() {
    this.getSurvey();
    let res = this.surveys.filter(item => {
      return this.$store.state.user.takenSurveys.includes(item._id);
    });

    console.log(res);
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
