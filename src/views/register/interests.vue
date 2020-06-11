<template>
  <div class="d-flex flex-column justify-content-between">
    <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
      <span @click="goBack">
        <icon size="lg" name="left" />
      </span>
    </bar>
    <div class="d-flex justify-content-center">
      <img style="height: 250px" src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1590587436/assets/SLA_Accelerator-01_1_yclzat.png" alt="" />
    </div>
    <div class="heading text-align-center font-poppins mx-24">
      What are your most interested to learn here?
    </div>
    <span class="text-align-center mt-16">Select at most two</span>
    <div class="interests mt-56 mx-24">
      <div class="d-flex justify-content-between">
        <sla-interest name="sales">
          <template #caption>
            Sales
          </template>
        </sla-interest>
        <sla-interest name="marketing">
          <template #caption>
            Marketing
          </template>
        </sla-interest>
        <sla-interest name="operations">
          <template #caption>
            Operations
          </template>
        </sla-interest>
      </div>
      <div class="d-flex justify-content-between" style="margin-right: 5rem; margin-left: 5rem">
        <sla-interest name="business">
          <template #caption>
            Business Model / Funding
          </template>
        </sla-interest>
        <sla-interest name="product">
          <template #caption>
            Product Management
          </template>
        </sla-interest>
      </div>
    </div>
    <sla-button @click="submit" class="mt-56 mx-24" :disable="btn.loading" text="continue" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      interests: [],
      btn: {
        text: "continue",
        loading: false
      }
    };
  },
  components: {
    Bar: () => import("@/components/SlaBar"),
    Icon: () => import("@/components/SlaIcon.vue"),
    SlaInterest: () => import("@/components/SlaInterest"),
    SlaButton: () => import("@/components/SlaButton")
  },
  methods: {
    ...mapActions(["updateProfile"]),
    goBack() {
      this.$router.go(-1);
    },
    async submit() {
      if (this.interests.length < 1) {
        this.$toasted.error("Please select an area of interest").goAway(2500);

        return;
      }

      if (this.interests.length > 2) {
        this.$toasted.error("Cannot select more than 2 interest categories").goAway(2500);

        return;
      }

      this.btn.loading = !this.btn.loading;
      this.btn.text = "loading...";

      let res = await this.updateProfile({
        intrests: JSON.stringify(this.interests)
      });

      if (res == true) {
        this.$router.push({
          name: "industry"
        });
      } else {
        this.btn.loading = !this.btn.loading;
        this.btn.text = "continue";
        this.$toasted.error(res.data.message).goAway(2500);
      }
    }
  },
  mounted() {
    this.$Bus.$on("interest-selected", data => {
      if (!this.interests.includes(data.id)) this.interests.push(data.id);
      else this.interests.splice(this.interests.indexOf(data.id), 1);
    });
  }
};
</script>
<style lang="scss" scoped>
.heading {
  margin-top: 60px;
  font-size: 18px;
}
.interests {
}
</style>
