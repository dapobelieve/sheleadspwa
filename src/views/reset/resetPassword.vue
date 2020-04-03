<template>
  <div class="pass d-flex flex-column justify-content-between mx-24">
    <span class="heading text-align-center font-poppins">Set New Password</span>

    <span class=" text-align-center font-poppins mt-24">{{ email }}</span>
    <sla-input
      v-model="pass1"
      class="input1"
      placeholder="Password"
      type="password"
    />
    <sla-input
      v-model="pass2"
      class="mt-40"
      placeholder="Confirm Password"
      type="password"
    />
    <sla-button
      class="mt-56"
      @click="handleInput"
      :disable="btn.loading"
      :text="btn.text"
    ></sla-button>
    <!-- <span class="text-align-center mt-32">Forgot your password? <a href="#">Click here</a></span> -->
  </div>
</template>
<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      token: null,
      email: null,
      pass1: "",
      pass2: "",
      btn: {
        text: "Submit",
        loading: false
      }
    };
  },
  components: {
    SlaInput: () => import("@/components/SlaInput"),
    SlaButton: () => import("@/components/SlaButton")
  },
  methods: {
    ...mapMutations(["setToken", "setUserData", "getUser"]),
    handleInput() {
      if (!this.pass1 || !this.pass2) {
        alert("All fields are required");
        return;
      }

      if (!this.pass1 !== !this.pass2) {
        alert("Passwords must be the same");
        return;
      }

      this.btn.loading = !this.btn.loading;
      this.btn.text = "loading...";
      this.submit();
    },
    async submit() {
      try {
        let res = await axios.post(
          `${process.env.VUE_APP_API}/user/password/update`,
          {
            password: this.pass1
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          }
        );

        this.btn.loading = !this.btn.loading;
        this.setToken(res.data.token);
        this.setUserData(res.data.user);

        // this.error.message = "Password changed successfuly"
        // this.error.type = "success"
        // this.error.show = true
        alert(res.data.message);
        //route to home
        setTimeout(() => {
          this.$router.replace({
            name: "home"
          });
        }, 2000);
      } catch (e) {
        this.btn.loading = !this.btn.loading;
        this.btn.text = "Submit";
        alert(e.response.data.message);
      }
    }
  },
  async mounted() {
    this.token = this.$route.query.token;
    if (!this.token || typeof this.token != "string") {
      alert("Invalid Token");
    } else {
      try {
        let res = await axios.get(`${process.env.VUE_APP_API}/user/`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });
        this.email = res.data.user.email;
      } catch (e) {
        console.log(e.data);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.pass {
  margin-top: 120px;

  .heading {
    font-weight: normal;
    font-size: 18px !important;
  }

  .input1 {
    margin-top: 80px;
  }

  a {
    text-decoration: none;
    color: color(bv-primary);
  }
}
</style>
