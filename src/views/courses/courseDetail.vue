<template>
  <section class="d-flex flex-column justify-content-between">
    <div class="pass d-flex flex-column justify-content-between ">
      <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
        <span
          @click="goBack"
          class="truncate text-bold font-poppings mt-12 mb-12"
          style="font-size:18px"
        >
          <icon size="lg" name="left" />
          {{ course.title }}
        </span>
      </bar>
      <img width="100%" height="250px" src="@/assets/img/course.png" alt="" />
      <p
        class="heading text-bold font-poppings ml-56 "
        style="position:absolute; top:100px;left:0; font-weight: 600;font-size: 18px; line-height: 37px;letter-spacing: 0.008em; width:200px"
      >
        {{ course.title }}
      </p>
      <div class="p-12">
        <card class="card bg-grey-100" border title="Course Stats ">
          <div class="d-flex flex-column flex-grow-1">
            <div class="d-flex flex-row">
              <span style="font-size: 40px" class="text-primary ">50% </span>
              <span style="line-height: 120%" class=" ml-32">
                started a new business after completing these courses
              </span>
            </div>
            <div class="d-flex flex-row">
              <span style="font-size: 40px" class="text-primary ">79% </span>
              <span style="line-height: 120% " class="mt-12 ml-32">
                average business growth from past participants
              </span>
            </div>
            <div class="d-flex flex-row">
              <span style="font-size: 40px" class="text-primary  ">500% </span>
              <span style="line-height: 120% " class="mt-12 ml-32">
                participants have completed this course
              </span>
            </div>
          </div>
        </card>
      </div>
      <div class="p-12">
        <card class="card bg-grey-100" border title="Course Stats ">
          <div class="d-flex flex-column flex-grow-1">
            <div class="d-flex flex-column flex-grow-1">
              <div class="d-flex flex-row">
                <span><div class="dot bg-primary"></div></span>
                <span style="line-height: 120%" class=" ml-32 mt-12"
                  >Courses run for 6 months
                </span>
              </div>
              <div class="d-flex flex-row">
                <span><div class="dot bg-primary"></div></span>
                <span style="line-height: 120%" class=" ml-32 mt-12"
                  >Participants are paired with top mentors in business and
                  finance
                </span>
              </div>
              <div class="d-flex flex-row">
                <span><div class="dot bg-primary"></div></span>
                <span style="line-height: 120%" class=" ml-32 mt-12">
                  Courses are in 6 different African langauges
                </span>
              </div>
              <div class="d-flex flex-row">
                <span><div class="dot bg-primary"></div></span>
                <span style="line-height: 120%" class=" ml-32 mt-12"
                  >100% online
                </span>
              </div>
            </div>
          </div>
        </card>
      </div>

      <card class="card" title="About this course">
        <p>
          In this lesson we’ll look at how to plan and conduct primary market
          research and how to analyse the results. We’ll then step through how
          to craft a meaningful problem definition statement.
        </p>
      </card>
      <sla-button
        class="mt-56 m-56 btn"
        :disable="btn.loading"
        :text="btn.text"
      ></sla-button>
      <br />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      course: {
        title: "A Step By Step Guide To Starting Your Business "
      },
      btn: {
        text: "Start Lesson",
        loading: false
      }
    };
  },
  components: {
    TopBar: () => import("@/components/TopBar"),
    SlaMenu: () => import("@/components/SlaMenu"),
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    Card: () => import("@/components/cards/slaCard"),
    SlaButton: () => import("@/components/SlaButton")
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>
<style scoped>
.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
