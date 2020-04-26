<template>
  <div class="d-flex flex-column profile">
    <top heading="Profile Details" />
    <div class="bio mt-12 mx-12">
      <div class="d-flex align-items-center">
        <sla-avatar
          size="xl"
          :user="{
            image:
              'https://res.cloudinary.com/rohing/image/upload/v1587700139/photo-1542393545-10f5cde2c810_zvvwje.jpg'
          }"
        />
        <span class="d-flex flex-column ml-12 text-grey-900">
          <span class="font-poppins mb-4">Leader Position</span>
          <span>1st | 10003400xp</span>
        </span>
      </div>
      <div class="mt-8 d-flex flex-column mb-12">
        <span class="font-poppins text-bold" style="font-size: 16px"
          >Dapo Michaels</span
        >
        <span class="text-grey-900 mt-8">Google | Senior Engineer</span>
        <div class="mt-8" style="font-size: 12px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          adipisci consequuntur, veritatis corrupti molestias quod optio
          nesciunt, velit placeat fuga ea quia ad libero! Quibusdam amet,
          reprehenderit laudantium labore accusantium!
        </div>
        <span style="font-size: 12px" class="mt-8">
          Lagos, Nigeria
        </span>
      </div>
      <sla-button type="outline" text="Edit Profile" size="sm" />
    </div>
    <div class="line-thin mt-32"></div>
    <div class="enrolled">
      <div class="d-flex align-items-center justify-content-between mt-48">
        <span
          style="font-size: 16px"
          class="flex-inline font-poppins ml-12 text-bold "
        >
          Courses in Progress
        </span>
        <img
          class="mr-24"
          height="15"
          width="15"
          src="@/assets/icons/arrow-right.png"
          alt=""
        />
      </div>

      <div class="d-flex x-flow overflow-x-auto py-8">
        <course
          style="flex: 1"
          v-for="x in enrolled"
          class="mt-12 d-flex"
          :title="x.course.title"
          hasProgress
          :id="x.course._id"
          :percentage="x.progress.toFixed(1)"
          :image="x.course.cover_image"
        />
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-between mt-48">
      <span
        style="font-size: 16px"
        class="flex-inline font-poppins ml-12 text-bold "
      >
        Completed Courses
      </span>
      <img
        class="mr-24"
        height="15"
        width="15"
        src="@/assets/icons/arrow-right.png"
        alt=""
      />
    </div>
    <div class="d-flex x-flow overflow-x-auto py-8">
      <course
        v-for="x in 12"
        class="mt-12"
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque?"
        hasProgress
        completed
        id="1"
        percentage="20"
        image="https://res.cloudinary.com/rohing/image/upload/v1585572462/you-x-ventures-Oalh2MojUuk-unsplash_n2ar6n.jpg"
      />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      btn: {
        text: "continue",
        loading: false
      },
      enrolled: this.$store.state.user.enrolled
    };
  },
  components: {
    SlaInput: () => import("@/components/SlaInput"),
    SlaButton: () => import("@/components/SlaButton"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    Icon: () => import("@/components/SlaIcon"),
    top: () => import("@/components/top"),
    profileCard: () => import("@/components/cards/profileCard"),
    Course: () => import("@/components/cards/CourseDetailsCard"),
    card: () => import("@/components/cards/slaCard")
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
    margin-left: 12px;
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
