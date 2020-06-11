<template>
  <div class="pass d-flex flex-column justify-content-between mx-24">
    <div class="d-flex justify-content-center">
      <img style="height: 250px" class="object-cover" src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1590587436/assets/Join_Onine_Community_Draft-01_2_1_h88ztq.png" alt="" />
    </div>
    <span class="heading text-align-center font-poppins">Kindly provide the following details. It will help us serve you better</span>
    <span class="heading-2 text-align-center font-poppins mt-32">Personal Info</span>
    <sla-input v-model="form.first_name" class="input1" placeholder="First Name" type="text" />
    <sla-input v-model="form.last_name" class="input1" placeholder="Last Name" type="text" />
    <sla-input v-model="form.phone_number" class="mt-40" placeholder="Phone Number" type="text" />
    <sla-select v-model="form.location" :items="formatCountries" class="input1" placeholder="Location" />

    <span class="heading-2 text-align-center font-poppins mt-32">Business Info</span>
    <sla-input v-model="form.business_name" class="input1" placeholder="Business Name" type="text" />
    <sla-input v-model="form.business_location" class="mt-40" placeholder="Location" type="text" />
    <sla-input v-model="form.business_website" class="mt-40" placeholder="Website" type="text" />

    <sla-button @click="handleForm" class="mt-56 mb-56" :disable="btn.loading" text="continue"></sla-button>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
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
        // business_number: "",
        business_location: "",
        business_website: ""
      }
    };
  },
  components: {
    SlaInput: () => import("@/components/SlaInput"),
    SlaButton: () => import("@/components/SlaButton"),
    SlaSelect: () => import("@/components/SlaSelect")
  },
  computed: {
    ...mapGetters(["getCountries"]),
    formatCountries() {
      let countries = [];
      this.getCountries.forEach(country => {
        let obj = {};
        obj.text = country.name;
        obj.value = country.name;
        countries.push(obj);
      });
      return countries;
    }
  },
  async mounted() {
    await this.fetchCountries();
  },
  methods: {
    ...mapActions(["updateProfile", "fetchCountries"]),
    ...mapMutations(["setUserData"]),
    async handleForm() {
      if (!Object.values(this.form).every(item => item != "")) {
        this.$toasted.error("All fields are required").goAway(2500);
        console.log(this.form);
        return;
      }

      this.btn.loading = !this.btn.loading;
      this.btn.text = "loading...";

      let res = await this.updateProfile(this.form);

      if (res == true) {
        this.$router.push({
          name: "interests"
        });
      } else {
        this.btn.loading = !this.btn.loading;
        this.btn.text = "continue";
        this.$toasted.error(res.data.message).goAway(2500);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.pass {
  margin-top: 70px;

  .heading {
    font-weight: normal;
    font-size: 18px !important;

    &-2 {
      font-size: 16px;
    }
  }

  .input1 {
    margin-top: 40px;
  }

  a {
    text-decoration: none;
    color: color(bv-primary);
  }
}
</style>
