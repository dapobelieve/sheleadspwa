<template>
    <div class="pass d-flex  flex-column justify-content-between ">
        <div class="hr"></div>

        <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
        <span
                @click="goBack"
                class="truncate text-bold font-poppings mt-12 mb-12"
                style="font-size:18px"
        >
          <icon size="lg" name="left" />
            Kindly fill out this survey
        </span>
        </bar>

        <div class="p-24">

            <quiz-card class="card" question="Was this course helpful ?">
                <div class="d-flex flex-column">
                    <label class="container">
                        Yes
                        <input type="radio" checked="checked"  name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container" style="margin-top: -30px">
                        No
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container" style="margin-top: -30px">
                        I don't know
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </quiz-card>
            <quiz-card class="card " question=" If yes, how was it helpful ?">
            <textarea class="p-12 mt-12 " placeholder="Your answer" cols="50" rows="5">
            </textarea>
            </quiz-card>

            <quiz-card class="card " question=" How do you think the course can be improved ?">
            <textarea class="p-12 mt-12 " placeholder="Your answer" cols="50" rows="5">
            </textarea>
            </quiz-card>
        </div>

        <sla-button
                class="mt-56 m-56  "
                type="filled"
                @click="handleInput"
                :disable="btn.loading"
                :text="' Submit Feedback '"
        ></sla-button>
        <br />

        <img class="p-48" src="@/assets/img/minions.png">
        <div style="line-height: 120%;">
            <p class="text-bold text-align-center " style="font-size: 18px" > You’ve earned a point for filling the survey!!</p>
        </div>
        <sla-button
                class="mt-56 ml-56 mr-56  "
                type="filled"
                @click="handleInput"
                :disable="btn.loading"
                :text="'CHECK LEADERBOARD'"
        ></sla-button>

        <sla-button
                class="mt-24  ml-56 mr-56  "
                type="outline"
                @click="handleInput"
                :disable="btn.loading"
                :text="'GO TO HOME PAGE'"
        ></sla-button>

        <br/>
    </div>


</template>

<script>
  import QuizCard from "../../components/cards/quizCard";
  import CardBlock from "../../components/cards/cardBlock";
  import LessonCard from "../../components/cards/lessonCard";
  import SlaInput from "../../components/SlaInput";

  export default {
    name: "survey",
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
      SlaInput,
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

      }
    }
  };
</script>

<style scoped>
    textarea {
        border: none;
        background: #F4F4F4;
        border-radius: 5px;
    }
</style>