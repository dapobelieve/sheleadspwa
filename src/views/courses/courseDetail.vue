<template>
  <section class="d-flex flex-column">
    <div class="pass d-flex flex-column justify-content-between ">
      <div class="hr"></div>

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
      <div>
        <img width="100%" height="250px" :src="course.cover_image" alt="" />
      </div>
      <div class="course-info d-flex flex-column mx-16">
        <span class="about text-bold font-poppins">About this Course</span>
        <span
          style="line-height: 32px; letter-spacing: 0.15px"
          class="mt-12 mb-24"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          ipsam sequi nisi obcaecati, eos assumenda esse voluptate, dignissimos
          libero. Assumenda officiis, ipsam veniam suscipit sapiente placeat
          iste, voluptas quia provident qui nam fuga mollitia aspernatur
          voluptatum aut officia. Facere nihil sed distinctio, exercitationem
          quidem, rem impedit accusamus sapiente molestiae, tempore similique
          blanditiis! Dolore impedit, perspiciatis deserunt quidem numquam
          deleniti harum eum accusamus tempore saepe ipsa aliquam officiis
          officia recusandae, minima praesentium, distinctio dignissimos nobis?
          Consectetur at inventore excepturi totam expedita velit itaque
          delectus quasi, blanditiis autem aut quod enim voluptas sit eos ipsum
          soluta laboriosam veniam. Nostrum esse, saepe laudantium!
        </span>
        <div class="stats bg-grey-100 py-32 px-8">
          <small class="text-bold mt-16 ml-12 ">COURSE STATS</small>
          <div class="flex-inline align-items-center ml-12 mt-24">
            <h1 class="font-poppins text-primary">59%</h1>
            <span class="ml-24"
              >started a new business after completing these courses</span
            >
          </div>
          <div class="flex-inline align-items-center ml-12">
            <h1 class="font-poppins text-primary">72%</h1>
            <span class="ml-24"
              >started a new business after completing these courses</span
            >
          </div>
          <div class="flex-inline align-items-center ml-12">
            <h1 class="font-poppins text-primary mr-12">100</h1>
            <span class="ml-24">participants have completed this course</span>
          </div>
        </div>
        <div class="stats bg-grey-100 py-32 px-8 mt-24 d-flex flex-column">
          <small class="text-bold mt-16 ml-12">COURSE STATS</small>
          <div class="flex-inline align-items-center ml-12 mt-24">
            <span
              style="height: 10px; width: 10px; border-radius: 50%"
              class=" bg-primary mr-24"
            >
            </span
            ><span>Courses run for 6 months</span>
          </div>
          <div class="flex-inline align-items-center ml-12 mt-24">
            <span
              style="height: 10px; width: 10px; border-radius: 50%"
              class=" bg-primary mr-24"
            >
            </span>
            <div>
              Participants are paired with top mentors in business and finance
            </div>
          </div>
          <div class="flex-inline align-items-center ml-12 mt-24">
            <span
              style="height: 10px; width: 10px; border-radius: 50%"
              class=" bg-primary mr-24"
            >
            </span
            ><span>Courses are in 6 different African langauges</span>
          </div>
          <div class="flex-inline align-items-center ml-12 mt-24">
            <span
              style="height: 10px; width: 10px; border-radius: 50%"
              class=" bg-primary mr-24"
            >
            </span
            ><span>100% online</span>
          </div>
        </div>
      </div>
      <p
        class="heading text-bold font-poppings ml-56 "
        style="position:absolute; top:100px;left:0; font-weight: 600;font-size: 18px; line-height: 37px;letter-spacing: 0.008em; width:200px"
      >
        {{ course.title }}
      </p>
      <div class="p-12">
        <card class="card bg-grey-100" border title="Course Stats ">
          <div class="d-flex flex-column flex-grow-1 ">
            <div class="d-flex flex-row flex-grow-1 text-align-center">
              <span style="font-size: 40px" class="text-primary ">50% </span>
              <span style="line-height: 120%;" class="mt-12  ml-32">
                started a new business after completing these courses
              </span>
            </div>
            <div class="d-flex flex-row text-align-center">
              <span style="font-size: 40px" class="text-primary  ">79% </span>
              <span style="line-height: 120%;" class="mt-12 ml-32">
                average business growth from past participants
              </span>
            </div>
            <div class="d-flex flex-row text-align-center">
              <span style="font-size: 40px" class="text-primary  ">500% </span>
              <span style="line-height: 120%; ; " class="mt-12 ml-32">
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
        @click="goToCourse"
        :disable="btn.loading"
        :text="btn.text"
      ></sla-button>
      <br />
    </div>
  </section>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      course: {},
      btn: {
        text: "Start Lesson",
        loading: false
      }
    };
  },
  components: {
    SlaMenu: () => import("@/components/SlaMenu"),
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    SlaButton: () => import("@/components/SlaButton")
  },
  methods: {
    ...mapActions(["getCourse"]),
    goToCourse() {
      this.$router.push({
        name: "enrolledCourseDetail"
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  async created() {
    let res = await this.getCourse({
      id: this.$route.params.id
    });

    if (res.status == 200) {
      this.course = res.data.data.course;
    }
  }
};
</script>
<style lang="scss" scoped>
.course-info {
  .about {
    font-size: 16px !important;
    line-height: 24px;
    letter-spacing: 0.15px;
  }

  .stats {
    border-radius: 5px;
    font-size: 12px;
  }
}
.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
