<template>
  <div>
    <div @click="cardClicked($event)" id="sla-course-card" class="sla-course-card">
      <div class="overlay"></div>
      <div class="image cursor-pointer">
        <img class="object-cover" :src="course.cover_image" alt="" />
      </div>
      <div class="content d-flex flex-column justify-content-between px-12 py-12">
        <span class="text-align-left text-white flex-inline">
          <icon id="bookmark" :name="saved ? 'bookmark-filled' : 'bookmark'" size="lg" />
        </span>
        <!-- <span class="text-align-right text-white">
          <icon name="video" size="lg" />
        </span> -->
      </div>
    </div>
    <div class="mt-8">
      <router-link :to="{ name: 'courseDetail', params: { courseId: course._id } }" class="text-bolder truncate truncate-2">{{ course.title }} </router-link>
      <span class="">{{ course.category }}</span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getSavedCourses"]),
    saved() {
      return this.course._id in this.getSavedCourses;
    }
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue")
  },
  methods: {
    ...mapActions(["saveCourse"]),
    cardClicked(e) {
      if (e.target.tagName == "SPAN" || e.target.tagName == "DIV") {
        this.$router.push({ name: "courseDetail", params: { courseId: this.course._id } });
      } else if (e.target.closest("svg")) {
        this.saveCourse({
          course: this.course._id
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: color(bv-grey-900);
}
.sla-course-card {
  height: 190px;
  width: 326px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;

  .content {
    height: 100%;
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: -1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
  }
  .image {
    position: absolute;
    z-index: -2;
    width: 100%;

    img {
      height: 190px !important;
      width: 100%;
    }
  }
}
</style>
