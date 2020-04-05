<template>
    <div class="pass d-flex flex-column justify-content-between mx-24">
        <bar class="position-sticky top-0 bottom-0 z-index-1 text-align-center bg-white mt-12 mb-40 ">
            <span @click="goBack" style="position: relative; left: -120px">
          <icon size="lg" name="left" />
        </span>
            <span class="mr-32" style="font-size: 18px">Profile</span>
        </bar>

        <profile-card :fullname="'Ayotomide Aina'"/>

        <div class="d-flex align-items-center justify-content-between mt-48">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Courses in Progress
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
                    v-for="x in 12"
                    title="A Step By Step Guide To Starting Your Business"
                    hasProgress
                    :percentage="30"
                    image="https://res.cloudinary.com/rohing/image/upload/q_53/v1585572462/you-x-ventures-Oalh2MojUuk-unsplash_n2ar6n.jpg"
            />
        </div>

        <div class="d-flex align-items-center justify-content-between mt-24">
      <span style="font-size: 20px" class="flex-inline font-poppins text-bold ">
        Completed Courses
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
                    completed
                    v-for="x in 12"
                    title="A Step By Step Guide To Starting Your Business"
                    image="https://res.cloudinary.com/rohing/image/upload/q_53/v1585572462/you-x-ventures-Oalh2MojUuk-unsplash_n2ar6n.jpg"
            />
        </div>
    </div>
</template>
<script>
  import { mapMutations, mapActions } from "vuex";
  import Avatar from "../../components/SlaAvatar";
  export default {
    data() {
      return {
        btn: {
          text: "continue",
          loading: false
        },
      };
    },
    components: {
      Avatar,
      SlaInput: () => import("@/components/SlaInput"),
      SlaButton: () => import("@/components/SlaButton"),
      Icon: ()=> import("@/components/SlaIcon"),
      Bar: () => import("@/components/SlaBar"),
      profileCard: () => import("@/components/cards/profileCard"),
      Course: () => import("@/components/cards/CourseDetailsCard"),

    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    }
  };
</script>
<style lang="scss" scoped>
    textarea {
        background: #FFFFFF;
        border: 1px solid #E7E6E6;
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
    }
</style>
