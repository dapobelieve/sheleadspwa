<template>
  <div>
    <sla-button class="text-primary" type="outline" block text="Believe"></sla-button>
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
            <span class="float-right"> <img src="@/assets/icons/video-icon.png"></span>
            <br/>
            <span  class="text-primary" > PROGRESS  <div class="float-right text-primary">50%</div> </span>
              <Slaprogress theme="primary"  height="5px" class="mb-4" :value="70" :max="100"></Slaprogress>

          </div>
        </div>
      </course-card>

    <!-- <card class="card ">
      <div class="card-body bg-grey-200 ">
       <div class="card_content">
         <div class="card_title ">Course Stats </div>
         <div class="card_text">
           In this lesson we’ll look at how to plan and conduct primary market research and how to analyse the results. We’ll then step through how to craft a meaningful problem definition statement.
         </div>
       </div>
      </div>
    </card>

    <profile >
      <sla-input type="file"  class="d-none" ></sla-input>
    </profile>
    <br/>
    <sla-noty text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit" :icons="{image: require('@/assets/icons/like.png')}">
    </sla-noty>
    <sla-noty text="Jane and 2 others just completed a course " ImageCount="multiple" :Images="[require('@/assets/img/0.png'),require('@/assets/img/0.jpg')]" :icons="{image: require('@/assets/icons/reply.png')}">
    </sla-noty> -->
  
    <course
     title="A Step By Step Guide To Starting Your Business"
     image="https://res.cloudinary.com/rohing/image/upload/q_53/v1585572462/you-x-ventures-Oalh2MojUuk-unsplash_n2ar6n.jpg"></course>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
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
    SlaButton: () => import("@/components/SlaButton.vue"),
    SlaInput: () => import("@/components/SlaInput.vue"),
    interest: () => import("@/components/SlaInterest.vue"),
    SlaTopBar: () => import("@/components/SlaTopBar.vue"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    Course: () => import("@/components/cards/CourseCard"),
    courseCard: () => import("@/components/cards/slaCourseCard.vue"),
    card: () => import("@/components/cards/slaCard.vue"),
    Slaprogress: () => import("@/components/progress/progress.vue"),
    profile: () => import("@/components/profilePhoto.vue"),
    SlaNoty: () => import("@/components/cards/slaNotyCard.vue"),
  }
}
</script>
