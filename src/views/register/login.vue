<template>
  <div class="pass d-flex flex-column justify-content-between mx-24">
    <span class="heading text-align-center font-poppins">Login</span>
    <sla-input v-model="form.email" class="input1" placeholder="Email Address" type="text" :isInvalid="error.status" :errorMessage="error.message" />
    <sla-input v-model="form.password" class="mt-40" placeholder="Password" type="password" />
    <sla-button @click="handleSubmit" :disable="btn.loading" class="mt-56" :text="btn.text"></sla-button>
    <span class="text-align-center mt-32">Forgot your password? <router-link to="/reset/email">Click here</router-link></span>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      btn: {
        text: "login",
        loading: false
      },
      form: {
        email: "",
        password: ""
      },
      error: {
        status: false,
        message: null
      }
    };
  },
  components: {
    SlaInput: () => import("@/components/SlaInput"),
    SlaButton: () => import("@/components/SlaButton")
  },
  methods: {
    ...mapActions(["login", "getMessageToken"]),
    async handleSubmit() {
      this.btn.loading = !this.btn.loading;
      this.btn.text = "loading...";
      let res = await this.login(this.form);
      if (res == true) {
        await this.getMessageToken();
        this.$router.push({
          name: "home"
        });
      } else {
        this.btn.loading = !this.btn.loading;
        this.btn.text = "login";
        this.error.status = true;
        this.error.message = res.data.message;
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", event => {
      if (event.keyCode === 13) {
        this.handleSubmit();
      }
    });
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
