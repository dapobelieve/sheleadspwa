<template>
  <section class="d-flex flex-column justify-content-between">
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
      <!--            <iframe width="100%" height="250" src="https://www.youtube.com/embed/bfLHTLQZ5nc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
      <img width="100%" height="250px" src="@/assets/img/course.png" alt="" />
      <p
        class="heading text-bold font-poppings ml-56 "
        style="position:absolute; top:100px;left:0; font-weight: 600;font-size: 18px; line-height: 37px;letter-spacing: 0.008em; width:200px"
      >
        {{ course.title }}
      </p>
      <div class="d-flex m-12 flex-row overflow-x-auto ">
        <lesson-card class="card " locked v-for="i in 5" :key="i" />
      </div>
      <div class="p-24">
        <div class="text-primary text-grey-500 " style="font-size: 10px">
          Lessson 2 of 8
        </div>
        <span class="text-primary text-grey-500 " style="font-size: 10px">
          PROGRESS
        </span>
        <Slaprogress
          theme="grey-500"
          height="5px"
          class="mb-4"
          :value="0"
          :max="100"
        ></Slaprogress>
      </div>

      <div class="p-12">
        <card class="card" border title="Primary market research ">
          <p>
            In this lesson we’ll look at how to plan and conduct primary market
            research and how to analyse the results. We’ll then step through how
            to craft a meaningful problem definition statement.
          </p>
        </card>
      </div>
      <card-block
        class="card bg-grey-100"
        title="10 vital steps to take in carrying out the research"
        attribute="play"
      />
      <card-block
        class="card bg-grey-100"
        title="10 vital steps to take in carrying out the research"
        attribute="file"
      />
      <card-block
        class="card bg-grey-100"
        title="10 vital steps to take in carrying out the research"
        attribute="quiz"
      />

      <sla-button
        class="mt-56 m-56  "
        type="outline"
        @click="handleInput"
        :disable="btn.loading"
        :text="btn.text"
      ></sla-button>
      <br />
    </div>
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
      <!--            <iframe width="100%" height="250" src="https://www.youtube.com/embed/bfLHTLQZ5nc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
      <img width="100%" height="250px" src="@/assets/img/course.png" alt="" />
      <p
        class="heading text-bold font-poppings ml-56 "
        style="position:absolute; top:100px;left:0; font-weight: 600;font-size: 18px; line-height: 37px;letter-spacing: 0.008em; width:200px"
      >
        {{ course.title }}
      </p>
      <div class="d-flex m-12 flex-row overflow-x-auto ">
        <lesson-card class="card " completed :message="1" />
        <lesson-card class="card " completed :message="2" />
        <lesson-card class="card " active :message="3" />
        <lesson-card class="card " locked :message="4" />
      </div>
      <div class="p-24">
        <div class="text-primary text-grey-500 " style="font-size: 10px">
          Lessson 2 of 8
        </div>
        <span class="text-primary text-grey-500 " style="font-size: 10px">
          PROGRESS
        </span>
        <Slaprogress
          theme="grey-500"
          height="5px"
          class="mb-4"
          :value="20"
          :max="100"
        ></Slaprogress>
      </div>

      <div class="p-12">
        <card class="card" border title="Primary market research ">
          <p>
            In this lesson we’ll look at how to plan and conduct primary market
            research and how to analyse the results. We’ll then step through how
            to craft a meaningful problem definition statement.
          </p>
        </card>
      </div>
      <card-block
        class="card bg-grey-100"
        active
        title="10 vital steps to take in carrying out the research"
        attribute="play"
      />
      <card-block
        class="card bg-grey-100"
        title="10 vital steps to take in carrying out the research"
        attribute="file"
      />
      <card-block
        class="card bg-grey-100"
        title="10 vital steps to take in carrying out the research"
        attribute="quiz"
      />

      <sla-button
        class="mt-56 m-56  "
        type="outline"
        @click="handleInput"
        :disable="btn.loading"
        :text="'Start Lesson '"
      ></sla-button>
      <br />
    </div>
    <div class="pass d-flex flex-column justify-content-between ">
      <div class="hr"></div>

      <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
        <div class="d-flex flex-row">
          <span
            @click="goBack"
            class="truncate text-bold font-poppings mt-12 mb-12"
            style="font-size:18px"
          >
            <icon size="lg" name="left" />
          </span>
          <lesson-icons class="bg-grey-500 mr-32 " :message="1" />
          <lesson-icons class="bg-grey-500 mr-32 " completed :message="2" />
          <lesson-icons class="bg-grey-500 mr-32 " active :message="3" />
          <lesson-icons class="bg-grey-500 mr-32 " :message="4" />
          <lesson-icons class="bg-grey-500 mr-32 " :message="5" />
        </div>
      </bar>
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/bfLHTLQZ5nc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p class="text-grey-500 m-12">Click the play button to start video</p>
      <p class="text-grey-500 m-12">
        Rotate your phone to view in full screen
      </p>
      <div class="p-12">
        <card class="card" title="Transcript">
          <p style="line-height: 42px">
            !!!! This Place May Require us to render an html page !!!!!
            <br />
            You need a plan in order to make your business idea a reality. A
            business plan is a blueprint that will guide your business from the
            start-up phase through establishment and eventually business growth,
            and it is a must-have for all new businesses. The good news is that
            there are different types of business plans for different types of
            businesses. If you intend to seek financial support from an investor
            or financial institution, a traditional business plan is a must.
            This type of business plan is generally long and thorough and has a
            common set of sections that investors and banks look for when they
            are validating your idea.
          </p>
        </card>
      </div>

      <card-block
        class="card bg-grey-100"
        active
        title="10 vital steps to take in carrying out the research"
      />
      <card-block class="card bg-grey-100" title="Assessment" />
      <card-block
        class="card bg-grey-100"
        title=" An introduction to financial literacy"
      />
      <sla-button
        class="mt-56 m-56  "
        type="outline"
        @click="handleInput"
        :disable="btn.loading"
        :text="' Next '"
      ></sla-button>
      <br />
    </div>
    <div class="pass d-flex flex-column justify-content-between ">
      <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
        <div class="d-flex flex-row">
          <span
            @click="goBack"
            class="truncate text-bold font-poppings mt-12 mb-12"
            style="font-size:18px"
          >
            <icon size="lg" name="left" />
          </span>
          <lesson-icons class="bg-grey-500 mr-32 " :message="1" />
          <lesson-icons class="bg-grey-500 mr-32 " completed :message="2" />
          <lesson-icons class="bg-grey-500 mr-32 " active :message="3" />
          <lesson-icons class="bg-grey-500 mr-32 " :message="4" />
          <lesson-icons class="bg-grey-500 mr-32 " :message="5" />
        </div>
      </bar>
      <div class="hr"></div>

      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/bfLHTLQZ5nc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p class="text-grey-500 m-12">Click the play button to start video</p>
      <p class="text-grey-500 m-12">
        Rotate your phone to view in full screen
      </p>

      <div class="p-12">
        <card class="card" title="Article">
          <p style="line-height: 42px">
            !!!! This Place May Require us to render an html page !!!!!
            <br />
            You need a plan in order to make your business idea a reality. A
            business plan is a blueprint that will guide your business from the
            start-up phase through establishment and eventually business growth,
            and it is a must-have for all new businesses. The good news is that
            there are different types of business plans for different types of
            businesses. If you intend to seek financial support from an investor
            or financial institution, a traditional business plan is a must.
            This type of business plan is generally long and thorough and has a
            common set of sections that investors and banks look for when they
            are validating your idea.
          </p>
        </card>
      </div>
      <card-block
        class="card bg-grey-100"
        active
        title="10 vital steps to take in carrying out the research"
      />
      <card-block class="card bg-grey-100" title="Assessment" />
      <card-block
        class="card bg-grey-100"
        title=" An introduction to financial literacy"
      />
      <sla-button
        class="mt-56 m-56  "
        type="outline"
        @click="handleInput"
        :disable="btn.loading"
        :text="' Next '"
      ></sla-button>
      <br />
    </div>

    <div class="pass d-flex flex-column justify-content-between ">
      <div class="hr"></div>

      <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
        <div class="d-flex flex-row">
          <span
            @click="goBack"
            class="truncate text-bold font-poppings mt-12 mb-12"
            style="font-size:18px"
          >
            <icon size="lg" name="left" />
          </span>
          <lesson-icons class="bg-grey-500 mr-32 " :message="1" />
          <lesson-icons class="bg-grey-500 mr-32 " completed :message="2" />
          <lesson-icons class="bg-grey-500 mr-32 " active :message="3" />
          <lesson-icons class="bg-grey-500 mr-32 " :message="4" />
          <lesson-icons class="bg-grey-500 mr-32 " :message="5" />
        </div>
      </bar>

        <quiz-card class="card" question="Is capital necessary to start a digital business?">
          <div class="d-flex flex-column">
            <label class="container">
              Yes
              <input type="radio"  name="radio">
              <span class="checkmark"></span>
            </label>
            <label class="container" style="margin-top: -30px">
              No
              <input type="radio" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
        </quiz-card>

      <div  >
        <p class="text-error text-align-center text-bold" style="font-size: 18px"> Wrong Answer </p>
        <p class="text-bold  text-align-center  width-auto" style="height: 54px; font-size: 20px; line-height: 27px">
          You need capital to start a digital business
        </p>
      </div>
      <sla-button
        class="mt-56 m-56  "
        type="outline"
        @click="handleInput"
        :disable="btn.loading"
        :text="' Next '"
      ></sla-button>
      <br />
    </div>
    <div class="pass d-flex flex-column justify-content-between ">
      <div class="hr"></div>

      <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
        <div class="d-flex flex-row">
          <span
            @click="goBack"
            class="truncate text-bold font-poppings mt-12 mb-12"
            style="font-size:18px"
          >
            <icon size="lg" name="left" />
          </span>
          <lesson-icons class="bg-grey-500 mr-32 " :message="1" />
          <lesson-icons class="bg-grey-500 mr-32 " completed :message="2" />
          <lesson-icons class="bg-grey-500 mr-32 " active :message="3" />
          <lesson-icons class="bg-grey-500 mr-32 " :message="4" />
          <lesson-icons class="bg-grey-500 mr-32 " :message="5" />
        </div>
      </bar>

        <quiz-card class="card" question="Is capital necessary to start a digital business?">
          <div class="d-flex flex-column">
            <label class="container">
              Yes
              <input type="radio"  name="radio">
              <span class="checkmark"></span>
            </label>
            <label class="container" style="margin-top: -30px">
              No
              <input type="radio" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
        </quiz-card>

      <div  >
        <p class="text-success text-align-center text-bold" style="font-size: 18px"> You’re a Genius! </p>
        <p class="text-bold text-align-center " style="height: 54px">
          10XP earned
        </p>
      </div>
      <sla-button
        class="mt-56 m-56  "
        type="outline"
        @click="handleInput"
        :disable="btn.loading"
        :text="' Next '"
      ></sla-button>
      <br />
    </div>

    <top-bar/>
    <div class="hr"></div>

    <icon size="lg"  class="mx-auto mt-56 pt-56 mb-48" style="width: 100px; height: 100px" name="complete"/>
    <div style="line-height: 120%;">
      <p class="text-bold text-align-center heading" style="font-size: 20px" >Congratulations!</p>
      <p class="text-bold text-align-center" style="font-size: 18px">You've completed the course</p>
    </div>
    <div class="p-24">
      <div class="text-primary text-grey-500 " style="font-size: 10px">
        + 10 XP
      </div>
      <div class="float-right " style="margin-top: -30px;">
        <icon  size="lg" name="crown"/>
      </div>
      <Slaprogress

              height="5px"
              class="mb-4"
              :max="100"
              :percentage="20"
              theme="bg-grey-500"
      ></Slaprogress>
    </div>
    <div style="line-height: 120%;">
      <p class="text-bold text-align-center heading" style="font-size: 20px" >Your'e 20 XP  Away From</p>
      <p class="text-bold text-align-center" style="font-size: 18px">Your Monthly Goal</p>
    </div>
    <div
            class="add shadow bg-white position-fixed d-flex justify-content-center align-items-center"
    >
      <icon class="text-primary" size="lg" name="right" />
    </div>
    <sla-button
            class="mt-56 ml-56 mr-56  "
            type="filled"
            @click="handleInput"
            :disable="btn.loading"
            :text="'GO TO LEADERBOARD'"
    ></sla-button>

     <sla-button
             class="mt-24  ml-56 mr-56  "
             type="outline"
             @click="handleSurvey"
             :disable="btn.loading"
             :text="'PLEASE FILL THIS SURVEY '"
     ></sla-button>
    <br/>
  </section>
</template>
<script>
import LessonCard from "../../components/cards/lessonCard";
import CardBlock from "../../components/cards/cardBlock";
import QuizCard from "../../components/cards/quizCard";
export default {
  data() {
    return {
      course: {
        title: "A Step By Step Guide To Starting Your Business ",
        type: "video"
      },
      btn: {
        text: "Next",
        loading: false
      }
    };
  },
  components: {
    QuizCard,
    CardBlock,
    LessonCard,
    TopBar: () => import("@/components/TopBar"),
    SlaMenu: () => import("@/components/SlaMenu"),
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    Card: () => import("@/components/cards/slaCard"),
    SlaButton: () => import("@/components/SlaButton"),
    Slaprogress: () => import("@/components/progress/progress.vue"),
    quizCard: () => import("@/components/cards/quizCard.vue"),
    LessonIcons: () => import("@/components/lessonIcons.vue")
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    handleInput(){

    },
    handleSurvey(){
      this.$router.push('/survey');
    }
  }
};
</script>
<style scoped>
  .add {
    bottom: 100px;
    right: 15px;
    z-index: 100;
    border-radius: 50%;
    height: 56px;
    width: 56px;
  }
</style>