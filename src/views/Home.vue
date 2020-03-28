<template>
  <div>
    <sla-button class="text-primary" type="outline" block text="Believe"></sla-button>
    <sla-input @keyup="doer" v-model="email" type="text"></sla-input>    
    <div  class="d-flex justify-content-between overflow-x-auto">
      <interest>
        <template>
          <img src="@/assets/icons/money.png" alt="">
        </template>
        <template #caption>
          Growing my money
        </template>
      </interest>
      <interest>
        <template>
          <img src="@/assets/icons/pro.png" alt="">
        </template>
        <template #caption>
          Growing my professional career
        </template>
      </interest>
      <interest>
        <template>
          <img src="@/assets/icons/life.png" alt="">
        </template>
        <template #caption>
          Growing my money
        </template>
      </interest>
      <interest>
        <template>
          <img src="@/assets/icons/network.png" alt="">
        </template>
        <template #caption>
          Growing my money
        </template>
      </interest>
      <interest>
        <template>
          <img src="@/assets/logo.png" alt="">
        </template>
        <template #caption>
          Climbing the  ladder
        </template>
      </interest>
    </div>
    <sla-top-bar>
      <div style="height: 57px;" class="d-flex align-items-center justify-content-between mx-8">
        <sla-avatar size="md" :user="{name: 'Dapo'}"></sla-avatar>
        <img src="@/assets/logo.png" alt="">
        <sla-avatar size="md" :user="{name: 'Dapo'}"></sla-avatar>
      </div>
    </sla-top-bar>
      <course-card class="card  ">
        <div class="card-body bg-white ">
          <img height="184px" src="@/assets/img/course.png" alt="">
          <div class="card_content">
            <div class="card_title">A Step By Step Guide To Starting Your Business </div>
            <span class="float-right"> <img src="@/assets/icons/video-icon.png"></span>
            <br/>
<!--            <span  class="text-primary" > PROGRESS  <div class="float-right text-primary">50%</div> </span>-->
              <Slaprogress theme="primary"  height="5px" class="mb-4" :value="70" :max="100"></Slaprogress>

          </div>
        </div>
      </course-card>

    <card class="card ">
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
    <sla-noty text="Jane and 2 others just completed a course " :icons="{image: require('@/assets/icons/reply.png')}">
    </sla-noty>
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
  methods: {
    doer() {
      console.log("Doer")
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
    courseCard: () => import("@/components/cards/slaCourseCard.vue"),
    card: () => import("@/components/cards/slaCard.vue"),
    Slaprogress: () => import("@/components/progress/progress.vue"),
    profile: () => import("@/components/profilePhoto.vue"),
    SlaNoty: () => import("@/components/cards/slaNotyCard.vue"),
  }
}
</script>

<style lang="scss">
// @import '@/theme/variables.scss';

// .page-wrapper {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .home-page-title {
//     text-align: center;
//   }
// }
</style>
