<template>
  <div class="d-flex flex-column enrolled">
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
      <div class="image position-absolute">
        <img class="width-100 object-cover" :src="image" alt="" />
      </div>
      <div class="title font-poppins text-bold text-white px-12">
        A Step By Step Guide To Starting Your Business
      </div>
    </div>
    <div class="lessoncards d-flex overflow-x-auto mx-12">
      <lesson-card class="mr-32" complete v-for="x in 3" :lesson="x" />
    </div>

    <div class="d-flex flex-column progress mt-56 ml-24">
      <span>Lesson 2 of 8</span>
      <span style="font-size: 10px; font-weight: bold" class="mt-4"
        >OVERALL PROGRESS</span
      >
      <div style="border-radius: 5px;" class="bg-grey-100 mt-12 mr-48">
        <div
          class="bg-grey-500"
          style="border-radius: 5px; height: 5px;"
          :style="{ width: '20%' }"
        ></div>
      </div>
    </div>
    <div>
      <div class="p-12">
        <card class="card" border title="Primary market research ">
          <p>
            In this lesson we’ll look at how to plan and conduct primary market
            research and how to analyse the results. We’ll then step through how
            to craft a meaningful problem definition statement.
          </p>
        </card>
      </div>
    </div>
    <div class="mb-24 mx-24">
      <card-block
        name="eclipse"
        active
        resource="play"
        title="10 vital steps to take in carrying out the research"
      />
      <card-block name="eclipse" active resource="quiz" title="Assesment" />
      <card-block active resource="file" title="How to get rich" />
    </div>
    <sla-button
      @click="goToLesson"
      class="mx-32"
      type="outline"
      text="Start Lesson"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      course: {
        title: "A Step By Step Guide To Starting Your Business"
      },
      image:
        "https://res.cloudinary.com/rohing/image/upload/q_53/v1585572462/you-x-ventures-Oalh2MojUuk-unsplash_n2ar6n.jpg"
    };
  },
  components: {
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    Card: () => import("@/components/cards/slaCard"),
    CardBlock: () => import("@/components/cards/cardBlock"),
    LessonCard: () => import("@/components/cards/lessonCard"),
    SlaButton: () => import("@/components/SlaButton")
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goToLesson() {
      this.$router.push({
        name: "lesson",
        params: {
          courseId: "lkafaf",
          lessonId: "3"
        }
      });
    }
  }
};
</script>
<style lang="scss">
.enrolled {
  .image {
    z-index: -1;
    img {
      height: 200px;
    }
  }

  .title {
    max-width: 192px;
    margin-top: 4rem;
    font-size: 18px;
  }

  .lessoncards {
    margin-top: 80px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
