<template>
  <div class="pass d-flex flex-column justify-content-between">
    <top heading="Edit Profile" class="mb-12" />
    <div class="d-flex justify-content-center text-align-center font-poppins mb-32">
      <sla-avatar @click="$refs['upload-image'].click()" size="xl" :user="{ image: user.image, name: user.first_name }"></sla-avatar>
      <input @change="uploadImage($event)" style="display: none" ref="upload-image" type="file" />
    </div>
    <div class="mx-12">
      <sla-input v-model="form.first_name" placeholder="First Name" type="text" />
      <sla-input v-model="form.last_name" class="mt-40" placeholder="Last Name" type="text" />
      <sla-input v-model="form.business_name" class="mt-40" placeholder="Business Name" type="text" />
      <sla-text-area v-model="form.business_bio" class="mt-40" placeholder="Business Description" />

      <sla-input v-model="form.industry" class="mt-40" placeholder="Industry" type="text" />

      <sla-input v-model="form.business_location" class="mt-40" placeholder="Location" type="text" />
      <sla-input v-model="form.email" class="mt-40" placeholder="Email Address" type="text" />
    </div>
    <div class="line-thin my-24 mx-12"></div>
    <div class="d-flex flex-column align-items-center">
      <span class="font-poppins mb-12">Goals/Prefrences</span>
      <interestcard @remove="removeInterest" icon="cancel" v-for="x in form.intrests" :name="x" :key="x" />

      <interestcard @add="addInterest" icon="add" v-for="x in interests" :name="x" :key="x" />
    </div>
    <sla-button @click="handleUpdate" class="mt-56 mx-56" :disable="btn.loading" text="Update profile"></sla-button>
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
        text: "Update profile",
        loading: false
      },
      form: {
        first_name: this.$store.state.user.data.first_name,
        email: this.$store.state.user.data.email,
        intrests: [],
        last_name: this.$store.state.user.data.last_name,
        phone_number: this.$store.state.user.data.phone_number,
        business_name: this.$store.state.user.data.business_name,
        business_number: this.$store.state.user.data.business_number,
        business_location: this.$store.state.user.data.business_location,
        business_bio: this.$store.state.user.data.business_bio,
        industry: this.$store.state.user.data.industry
      }
    };
  },
  components: {
    SlaInput: () => import("@/components/SlaInput"),
    SlaTextArea: () => import("@/components/SlaTextArea"),
    SlaButton: () => import("@/components/SlaButton"),
    Icon: () => import("@/components/SlaIcon"),
    top: () => import("@/components/top"),
    profile: () => import("@/components/profilePhoto"),
    interestcard: () => import("@/components/cards/interestcard"),
    SlaAvatar: () => import("@/components/SlaAvatar")
  },
  computed: {
    interests() {
      if (!this.form.intrests) return;
      return this.$store.state.general.interests.filter(x => {
        if (!this.form.intrests.includes(x)) return x;
      });
    }
  },
  methods: {
    ...mapActions(["updateProfile", "uploadProfileImage"]),
    uploadImage(e) {
      var FR = new FileReader();
      var that = this;
      FR.onloadend = function() {
        that.uploadProfileImage({
          image: FR.result
        });
      };
      FR.readAsDataURL(e.target.files[0]);

      this.user.image = URL.createObjectURL(e.target.files[0]);
    },
    async handleUpdate() {
      if (this.form.intrests.length < 1) {
        this.$toasted.error("Select at least one area of interest").goAway(2500);
        return;
      }

      this.btn.loading = true;
      let res = await this.updateProfile(this.form);
      if (res == true) {
        console.log(res);
        this.btn.loading = !this.btn.loading;
        this.$toasted.success("Profile updated Successfully").goAway(2500);
        this.$router.push({
          name: "profile"
        });
      }
    },
    removeInterest(value) {
      this.form.intrests.splice(this.form.intrests.indexOf(value), 1);
    },
    addInterest(value) {
      if (this.form.intrests.length == 2) {
        this.$toasted.error("Cannot select more than 2 interest categories").goAway(2500);
        return;
      }
      this.form.intrests.push(value);
    }
  },
  created() {
    let dd = JSON.parse(this.$store.state.user.data.intrests);
    this.form.intrests = dd;
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
