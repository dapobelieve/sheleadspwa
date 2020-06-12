<template>
  <div class="d-flex flex-column profile">
    <top heading="Profile Details" />
    <div class="bio mt-12 mx-12">
      <div class="d-flex align-items-center">
        <sla-avatar
          size="xl"
          :user="{
            image: user.image,
            name: user.first_name
          }"
        />
        <span class="d-flex flex-column ml-12 text-grey-900">
          <span class="font-poppins text-bold" style="font-size: 16px">{{ getFullname }}</span>
          <span class="text-grey-900 mt-8">{{ user.business_name }} | {{ user.industry }}</span>
        </span>
      </div>
      <div class="mt-8 d-flex flex-column mb-12">
        <span class="font-poppins mb-4">Leaderboard Position</span>
        <span>{{ getLeaderboard.position | ordinalSuffix }} | {{ getLeaderboard.points }}XP</span>
        <div class="mt-8" style="font-size: 12px">
          Business Bio
        </div>
        <span style="font-size: 12px" class="mt-8"> {{ user.business_location }}, Nigeria </span>
      </div>
      <sla-button @click="edit" type="outline" text="Edit Profile" size="sm" />
    </div>
    <div class="line-thin mt-32"></div>
    <div class="enrolled">
      <div class="d-flex align-items-center justify-content-between mt-48">
        <span style="font-size: 16px" class="flex-inline font-poppins ml-12 text-bold ">
          Courses in Progress
        </span>
        <more-arrow v-if="getAllEnrolledCourse.length > 2" />
      </div>

      <div>
        <div v-if="getAllEnrolledCourse.length > 0" class="d-flex x-flow overflow-x-auto ml-12 py-8">
          <course style="flex: 1" v-for="x in getAllEnrolledCourse" :key="x.course._id" class="mt-12 d-flex" :course="x.course" hasProgress :percentage="x.progress.toFixed(1)" />
        </div>
        <empty-state v-else message="You have no courses in progress" />
      </div>
    </div>

    <div>
      <div class="d-flex align-items-center justify-content-between mt-48">
        <span style="font-size: 16px" class="flex-inline font-poppins ml-12 text-bold ">
          Completed Courses
        </span>
        <more-arrow v-if="completed.length > 2" />
      </div>
      <div>
        <div v-if="completed && completed.length > 0" class="d-flex x-flow overflow-x-auto py-8">
          <course v-for="x in completed" :key="x.course.id" class="mt-12 ml-12" :course="x.course" hasProgress completed :percentage="x.course.progress" />
        </div>
        <empty-state v-else message="No completed courses yet" />
      </div>
    </div>

    <div class="line-thin mt-32"></div>

    <div class="mt-12 ml-12">
      <div class="d-flex flex-column">
        <span class="font-poppins mb-24" style="font-size: 16px">Goals & Preferences</span>
        <span v-if="user.intrests.length > 0" class="mb-32" v-for="interest in userInterests">
          <span class="mt-16">{{ interest }}</span>
          <div class="line-thin mt-12 mr-12"></div>
        </span>
        <span v-else>
          No Goals selected
        </span>
      </div>
    </div>

    <div class="line-thin mt-24"></div>

    <div class="mt-12 ml-12">
      <div class="d-flex flex-column">
        <div class="font-poppins" style="font-size: 16px">Activity</div>
        <div>
          <div v-for="activity in getActivity" :key="activity._id" class="d-flex align-items-center mt-12">
            <div class="text-white bg-primary mr-12 d-flex align-items-center justify-content-center" style="height: 44px; width: 44px; border-radius: 50%">
              <icon v-if="activity.type == 'survey'" class="" name="survey_white" />
              <icon v-else-if="activity.type == 'poll'" class="" name="poll_white" />
              <icon v-else-if="activity.type == 'course'" class="" name="course_white" />
              <icon v-else-if="activity.type == 'quiz'" class="" name="quiz_white" />
              <icon v-else class="" name="file_white" />
            </div>
            <span class="ml-12">
              {{ activity.content }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 ml-12">
      <div class="d-flex flex-column">
        <div class="font-poppins" style="font-size: 16px">Points</div>
        <div>
          <div v-for="point in getPoints" :key="point._id" class="d-flex align-items-center mt-12">
            <div class="text-white bg-primary mr-12 d-flex align-items-center justify-content-center" style="height: 44px; width: 44px; border-radius: 50%">
              <icon v-if="point.type == 'survey'" class="" name="survey_white" />
              <icon v-else-if="point.type == 'poll'" class="" name="poll_white" />
              <icon v-else-if="point.type == 'course'" class="" name="course_white" />
              <icon v-else-if="point.type == 'quiz'" class="" name="quiz_white" />
              <icon v-else class="" name="file_white" />
            </div>
            <span class="ml-12 ">
              {{ point.content }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="line-thin mt-24"></div> -->

    <!-- <div class="mt-12 ml-12">
      <div class="d-flex align-items-center justify-content-between mt-48">
        <span style="font-size: 16px" class="flex-inline font-poppins text-bold ">
          My Groups
        </span>
        <img class="mr-24" height="16" width="16" src="@/assets/icons/arrow-right.png" alt="" />
      </div>
      <div class="d-flex mt-8 x-flow overflow-x-auto">
        <mini-card v-for="item in 2" :key="item" />
      </div>
    </div> -->
    <!-- <div class="line-thin mt-24"></div> -->

    <div class="d-flex mt-24 mb-24">
      <div class="text-align-center width-100 ">
        <span @click="logoutNav" class="text-primary text-bolder cursor-pointer" to="#">LOGOUT</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      user: this.$store.state.user.data,
      btn: {
        text: "continue",
        loading: false
      },
      enrolled: this.$store.state.user.enrolled
    };
  },
  computed: {
    ...mapGetters(["getFullname", "getLeaderboard", "getAllEnrolledCourse", "getPoints", "getActivity"]),
    completed() {
      return this.$store.state.user.completed;
    },
    userInterests() {
      return JSON.parse(this.user.intrests);
    }
  },
  components: {
    SlaButton: () => import("@/components/SlaButton"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    Icon: () => import("@/components/SlaIcon"),
    top: () => import("@/components/top"),
    Course: () => import("@/components/cards/CourseDetailsCard"),
    MiniCard: () => import("@/components/cards/minicard"),
    emptyState: () => import("@/components/emptyState"),
    moreArrow: () => import("@/components/moreArrow")
  },
  methods: {
    ...mapActions(["getCompleted", "logout"]),
    edit() {
      this.$router.push({
        name: "editProfile"
      });
    },
    logoutNav() {
      this.logout();
      this.$router.replace({
        name: "home"
      });
    }
  },
  mounted() {
    this.getCompleted();
  }
};
</script>
<style lang="scss" scoped>
textarea {
  background: #ffffff;
  border: 1px solid #e7e6e6;
  box-sizing: border-box;
  border-radius: 5px;
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
.add {
  border-radius: 50%;
  border: 1px solid color(bv-black);
  height: 20px;
  width: 20px;

  .remove {
    transform: rotate(-45deg);
  }
}
</style>
