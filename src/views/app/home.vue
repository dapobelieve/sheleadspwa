<template>
  <div class="home d-flex flex-column ml-16 mb-24">
    <p class="greet text-bold">Welcome, {{ getFirstname }}!</p>
    <div class="alert bg-grey-200 pl-8 pr-16 py-4 text-bold">
      Your lessons are selected based on your preferences
    </div>
    <div class="d-flex align-items-center justify-content-between mt-48">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Get Started
        <img
          class="ml-24"
          height="23"
          width="23"
          src="@/assets/icons/network.png"
          alt=""
        />
      </span>
      <img
        class="mr-24"
        height="19"
        width="19"
        src="@/assets/icons/arrow-right.png"
        alt=""
      />
    </div>

    <div class="courses x-flow mt-12 py-2 d-flex overflow-x-auto">
      <course
        v-for="item in getCourses"
        :key="item._id"
        :title="item.title"
        :image="item.cover_image"
        :id="item._id"
      />
    </div>

    <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Announcements
      </span>
      <img
        class="mr-24"
        height="19"
        width="19"
        src="@/assets/icons/arrow-right.png"
        alt=""
      />
    </div>
    <div class="announce x-flow d-flex mt-12 mb-12 py-4 overflow-x-auto">
      <announce class=" py-4" v-for="zee in 6" />
    </div>
    <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Discussion Topics
      </span>
      <img
        class="mr-24"
        height="19"
        width="19"
        src="@/assets/icons/arrow-right.png"
        alt=""
      />
    </div>
    <div class="discuss x-flow d-flex mt-12 overflow-x-auto">
      <discussion class="py-4" v-for="a in 20" />
    </div>
    <div
      class="add shadow bg-white position-fixed d-flex justify-content-center align-items-center"
    >
      <icon class="text-primary" size="lg" name="plus" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue"),
    Course: () => import("@/components/cards/CourseCard"),
    Announce: () => import("@/components/cards/Announce"),
    Discussion: () => import("@/components/cards/Discussion")
  },
  computed: {
    ...mapGetters(["getFirstname", "getCourses"])
  },
  methods: {
    ...mapActions(["getAllCourses"])
  },
  mounted() {
    this.getAllCourses();
    console.log(this.$route);
  }
};
</script>
<style lang="scss" scoped>
.home {
  .add {
    bottom: 100px;
    right: 15px;
    z-index: 100;
    border-radius: 50%;
    height: 56px;
    width: 56px;
  }
  .greet {
    font-size: 24px;
  }
  .alert {
    margin-right: 22px;
    border-radius: 5px;
    font-size: 12px;
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
  }
}
</style>
