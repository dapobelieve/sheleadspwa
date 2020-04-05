<template>
    <div class="pass d-flex flex-column justify-content-between mx-24">
        <bar class="position-sticky top-0 bottom-0 z-index-1 text-align-center bg-white mt-12 mb-40 ">
            <span @click="goBack" style="position: relative; left: -120px">
          <icon size="lg" name="left" />
        </span>
            <span class="mr-32" style="font-size: 18px">Profile Details</span>
        </bar>

        <profile></profile>
        <div class="text-align-center">
            <p class="text-bold " style="font-size: 18px">Bridget Thompson</p>
            <p > Design lover and a tech enthusiast </p>
            <p > Lagos Nigeria</p>
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
                    class="shadow-3 p-24 mb-32"
                    v-for="x in 12"
                    title="A Step By Step Guide To Starting Your Business"
                    image="https://res.cloudinary.com/rohing/image/upload/q_53/v1585572462/you-x-ventures-Oalh2MojUuk-unsplash_n2ar6n.jpg"
            />
        </div>

        <p class="text-bold p-24"> Activity</p>
        <p><span class="text-bold">Bridget Thompson</span> Completed a course <span class="float-right text-grey-500">2d</span></p>
        <p><span class="text-bold">Bridget Thompson</span> Completed a course <span class="float-right text-grey-500">2d</span></p>
        <p><span class="text-bold">Bridget Thompson</span> Completed a course <span class="float-right text-grey-500">2d</span></p>
        <p><span class="text-bold">Bridget Thompson</span> Completed a course <span class="float-right text-grey-500">2d</span></p>
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
      Profile: () => import("@/components/profilePhoto"),
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
            padding-right: 20px !important;
        }
    }
</style>
