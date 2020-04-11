<template>
  <div class="pass d-flex flex-column justify-content-between mx-24">
    <bar
      class="position-sticky top-0 bottom-0 z-index-1 text-align-center bg-white mt-12 mb-40 "
    >
      <span @click="goBack" style="position: relative; left: -80px">
        <icon size="lg" name="left" />
      </span>
      <span class="mr-32" style="font-size: 18px;">Edit Profile</span>
    </bar>
    <span class="heading text-align-center font-poppins">
      <profile class="m-40">
        <sla-input type="file" class="d-none"></sla-input>
      </profile>
    </span>
    <span class="heading-2 text-align-center font-poppins m-32"
      >Personal Info</span
    >
    <sla-input
      v-model="form.first_name"
      class="input1"
      placeholder="Full Name"
      type="text"
    />
    <sla-input
      v-model="form.phone_number"
      class="mt-40"
      placeholder="Phone Number"
      type="text"
    />
    <sla-input
      v-model="form.location"
      class="mt-40"
      placeholder="Location"
      type="text"
    />

    <textarea class="p-12 mt-40 " placeholder="About Me" cols="50" rows="5">
    </textarea>

    <span class="heading-2 text-align-center font-poppins mt-32 mb-32"
      >Business Info</span
    >
    <sla-input
      v-model="form.business_name"
      class="input1"
      placeholder="Business Name"
      type="text"
    />
    <sla-input
      v-model="form.business_number"
      class="mt-40"
      placeholder="Phone Number"
      type="text"
    />
    <sla-input
      v-model="form.business_location"
      class="mt-40"
      placeholder="Location"
      type="text"
    />
    <sla-input
      v-model="form.business_website"
      class="mt-40"
      placeholder="Website"
      type="text"
    />

    <sla-button
      class="mt-56 mb-56"
      :disable="btn.loading"
      text="continue"
    ></sla-button>
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
      form: {
        first_name: "",
        // last_name: "",
        phone_number: "",
        location: "",
        business_name: "",
        business_number: "",
        business_location: "",
        business_website: ""
      }
    };
  },
  components: {
    Avatar,
    SlaInput: () => import("@/components/SlaInput"),
    SlaButton: () => import("@/components/SlaButton"),
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    profile: () => import("@/components/profilePhoto")
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
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
</style>
