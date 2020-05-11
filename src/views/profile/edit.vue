<template>
  <div class="pass d-flex flex-column justify-content-between">
    <top heading="Edit Profile" class="mb-12" />
    <span class="heading text-align-center font-poppins mb-32">
      <profile class="m-40">
        <sla-input type="file" class="d-none"></sla-input>
      </profile>
    </span>
    <div class="mx-12">
      <sla-input
        v-model="form.first_name"
        placeholder="First Name"
        type="text"
      />
      <sla-input
        v-model="form.last_name"
        class="mt-40"
        placeholder="Last Name"
        type="text"
      />
      <sla-input
        v-model="form.business_name"
        class="mt-40"
        placeholder="Business Name"
        type="text"
      />

      <textarea
        class="p-12 mt-40 "
        placeholder="Businees Description"
      ></textarea>

      <sla-input
        v-model="form.industry"
        class="mt-40"
        placeholder="Industry"
        type="text"
      />

      <sla-input
        v-model="form.business_location"
        class="mt-40"
        placeholder="Location"
        type="text"
      />
      <sla-input
        v-model="form.email"
        class="mt-40"
        placeholder="Email Address"
        type="text"
      />
    </div>
    <div class="line-thin my-24 mx-12"></div>
    <div class="d-flex flex-column align-items-center">
      <span class="font-poppins mb-12">Goals/Prefrences</span>
      <interestcard
        @remove="removeInterest"
        icon="cancel"
        v-for="x in form.intrests"
        :name="x"
      />
      <interestcard
        @add="addInterest"
        icon="add"
        v-for="x in interests"
        :name="x"
      />
    </div>
    <sla-button
      @click="handleUpdate"
      class="mt-56 mx-56"
      :disable="btn.loading"
      text="Update profile"
    ></sla-button>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
import Avatar from "../../components/SlaAvatar";
export default {
  data() {
    return {
      user: this.$store.state.user.data,
      btn: {
        text: "continue",
        loading: false
      },
      form: {
        first_name: this.$store.state.user.data.first_name,
        email: this.$store.state.user.data.email,
        intrests: [],
        // last_name: "",
        phone_number: this.$store.state.user.data.phone_number,
        location: this.$store.state.user.data.location,
        business_name: this.$store.state.user.data.business_name,
        business_number: this.$store.state.user.data.business_number,
        business_location: this.$store.state.user.data.business_location,
        industry: this.$store.state.user.data.industry,
        bio: this.$store.state.user.data.about
      }
    };
  },
  components: {
    SlaInput: () => import("@/components/SlaInput"),
    SlaButton: () => import("@/components/SlaButton"),
    Icon: () => import("@/components/SlaIcon"),
    top: () => import("@/components/top"),
    profile: () => import("@/components/profilePhoto"),
    interestcard: () => import("@/components/cards/interestcard")
  },
  computed: {
    interests() {
      return this.$store.state.general.interests.filter(x => {
        if (!this.form.intrests.includes(x)) return x;
      });
    }
  },
  methods: {
    ...mapActions(["updateProfile"]),
    handleUpdate() {
      console.log(this.form);
    },
    removeInterest(value) {
      alert("Interest Removed");
      this.form.intrests.splice(this.form.intrests.indexOf(value), 1);
    },
    addInterest(value) {
      alert("Interest Added");
      this.form.intrests.push(value);
    }
  },
  created() {
    this.form.intrests = JSON.parse(this.$store.state.user.data.intrests);
  }
};
</script>
<style lang="scss" scoped>
textarea {
  background: #ffffff;
  border: 1px solid #e7e6e6;
  box-sizing: border-box;
  border-radius: 5px;
  resize: none;
  font-family: "Open sans";
  font-size: 14px;
  color: #999999;
  width: 100%;
  height: 109px;
  &:focus {
    outline: none;
  }
}
</style>
