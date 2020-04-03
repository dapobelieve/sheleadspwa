<template>
  <div>
    <top-bar></top-bar>
    <sla-input v-model="email" type="text"></sla-input>    
    <!-- <sla-top-bar>
      <div style="height: 57px;" class="d-flex align-items-center justify-content-between mx-8">
        <sla-avatar size="md" :user="{name: 'Dapo'}"></sla-avatar>
        <img src="@/assets/logo.png" alt="">
        <sla-avatar size="md" :user="{name: 'Dapo'}"></sla-avatar>
      </div>
    </sla-top-bar> -->
      <course-card class="card  ">
        <div class="card-body bg-white ">
          <img height="184px" src="@/assets/img/course.png" alt="">
          <div class="card_content">
            <div class="card_title">A Step By Step Guide To Starting Your Business </div>
            <span class="float-right"><small  class="text-grey-500">VIDEO</small><icon name="video"/></span>
            <br/>
            <span  class="text-primary" > PROGRESS  <div class="float-right text-primary">50%</div> </span>
              <Slaprogress theme="primary"  height="5px" class="mb-4" :value="70" :max="100"></Slaprogress>

          </div>
        </div>
      </course-card>
    <profile >
      <sla-input type="file"  class="d-none" ></sla-input>
    </profile>
    <br/>
    <sla-noty text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit" >
      <icon size="xs"  name="like"/>

    </sla-noty>
    <sla-noty text="Jane and 2 others just completed a course " ImageCount="multiple" :Images="[require('@/assets/img/0.png'),require('@/assets/img/0.jpg')]" >
      <icon size="xs"  name="reply"/>
    </sla-noty>
  
    <course class="mx-8"
     title="A Step By Step Guide To Starting Your Business"
     image="https://res.cloudinary.com/rohing/image/upload/q_53/v1585572462/you-x-ventures-Oalh2MojUuk-unsplash_n2ar6n.jpg" />
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
      <announce class="mx-8"/>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    <lesson-card active message="1"/>
    <br>
    <br>
    <br>
    <lesson-card  message="1" locked/>
    <br>
    <br>
    <br>
    <card class="card" title=" About this Course" >
      <p>
        In this lesson we’ll look at how to plan and conduct primary market research and how
        to analyse the results. We’ll then step through how to craft a meaningful problem definition statement.
      </p>
    </card>
    <card  title=" Course Stats" >
      <p>
      </p>
    </card>
    <lesson-icons class="bg-grey-500" message="1"/>
    <card-block class="card bg-grey-200" title="10 vital steps to take in carrying out the research" attribute="play"/>
    <card-block class="card bg-grey-200" title="Assessment" attribute="quiz"/>
    <card-block active class="card bg-grey-200" bookmark title="10 vital steps to take in carrying out the research" attribute="file"/>
    <quiz-card class="card" question="Is capital necessary to start a digital business?">


    </quiz-card>
    <br>
    <br>
    <br>
    <discussion class="mx-12"/>
      <br>
      <br>
      <br>
      <br>
     <sla-menu/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      items: [
        {
          text: "Summer",
          value: "summer"
        },
        {
          text: "Winter",
          value: "winter"
        },
        {
          text: "Autum",
          value: "autum"
        },
        {
          text: "Spring",
          value: "spring"
        }
      ],
      select: "",
      email: null
    }
  },
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle']),
  components: {
    TopBar: () => import("@/components/TopBar"),
    Menu: () => import("@/components/SlaMenu"),
    SlaButton: () => import("@/components/SlaButton"),
    SlaSelect: () => import("@/components/SlaSelect"),
    SlaInput: () => import("@/components/SlaInput"),
    interest: () => import("@/components/SlaInterest"),
    SlaTopBar: () => import("@/components/TopBar"),
    SlaMenu: () => import("@/components/SlaMenu"),
    SlaButton: () => import("@/components/SlaButton.vue"),
    SlaInput: () => import("@/components/SlaInput.vue"),
    interest: () => import("@/components/SlaInterest.vue"),
    SlaTopBar: () => import("@/components/TopBar.vue"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    Course: () => import("@/components/cards/CourseCard"),
    Announce: () => import("@/components/cards/Announce"),
    Discussion: () => import("@/components/cards/Discussion"),
    courseCard: () => import("@/components/cards/slaCourseCard.vue"),
    card: () => import("@/components/cards/slaCard.vue"),
    lessonCard: () => import("@/components/cards/lessonCard.vue"),
    quizCard: () => import("@/components/cards/quizCard.vue"),
    Slaprogress: () => import("@/components/progress/progress.vue"),
    profile: () => import("@/components/profilePhoto.vue"),
    SlaNoty: () => import("@/components/cards/slaNotyCard.vue"),
    CardBlock: () => import("@/components/cards/cardBlock.vue"),
    Icon: ()=> import('@/components/SlaIcon.vue'),
    SlaRadio: () => import("@/components/slaRadio.vue"),
    lessonIcons: ()=> import("@/components/lessonIcons")

  }
}
</script>
