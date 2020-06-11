<template>
  <div class="messages d-flex flex-column mb-24">
    <top heading="Courses in Progress" />
    <div class="search d-flex align-items-center position-relative mt-32 px-32">
      <input class="px-8" v-model="quickSearch" placeholder="Search for titles..." type="text" />
      <span class="bg-white text-grey-500 ml-12 position-absolute"><icon class="text-align-right" name="search"/></span>
    </div>
    <div class="mt-12 mx-12">
      <div class="d-flex justify-content-around flex-wrap mt-8">
        <mini-card
          @mini-click="$router.push({ name: 'courseDetail', params: { courseId: $event } })"
          class="mb-24"
          :id="item.course._id"
          :key="item.course._id"
          :title="item.course.title"
          :cardwidth="160"
          :image="item.course.cover_image"
          v-for="item in filteredRecords"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      quickSearch: ""
    };
  },
  computed: {
    ...mapGetters(["getAllEnrolledCourse"]),
    filteredRecords() {
      let data = this.getAllEnrolledCourse.filter(row => {
        return Object.keys(row.course).some(key => {
          return (
            String(row.course[key])
              .toLowerCase()
              .indexOf(this.quickSearch.toLowerCase()) > -1
          );
        });
      });

      return data;
    }
  },
  components: {
    top: () => import("@/components/top"),
    Icon: () => import("@/components/SlaIcon"),
    MiniCard: () => import("@/components/cards/minicard"),
    MicroCard: () => import("@/components/cards/smallcard")
  },
  methods: {
    ...mapActions(["enrolledCourses"])
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
