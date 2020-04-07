<template>
  <div class=" d-flex flex-column justify-content-between ">
    <div class="hr"></div>
    <p class="heading text-bold p-24 ">New</p>
    <noty  :actions="'reply'" :icon="'like'" :time="'2d'">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
      </p>
    </noty>
    <noty :avatar="require('@/assets/img/medal.png')"   :time="'2d'">
      <p>
       <b> Congratulations</b> you just got into the top 3.
      </p>
    </noty>
    <noty :avatar="require('@/assets/img/new_course.png')"   :time="'2d'">
      <b>A new course</b> has been launched.
    </noty>
    <noty :avatar="require('@/assets/img/friend.png')"   :time="'2d'">
      <b>Taiwo Jane</b> just reacted to your message.
    </noty>
    <div class="hr"></div>

    <p class="heading text-bold p-24 ">This Week </p>
<!--    <noty ImageCount="multiple" :Images="[require('@/assets/img/0.png'), require('@/assets/img/0.jpg')]" :time="'3d'">-->
<!--      Jane and 2 others just completed a course-->
<!--    </noty>-->
    <noty :avatar="require('@/assets/img/dangote.png')"  :icon="'reply'" :action="'reply'" :time="'3d'">
      Grow your Audience -<b> A course by Dangote</b>
    </noty>
    <div class="hr"></div>

    <p class="heading text-bold p-24 ">This Month </p>
    <noty :avatar="require('@/assets/img/survey.png')"   :time="'4W'">
      Hello, there is a survey for you to fill out. <a>Click here to begin</a>
    </noty>
    <div class="hr"></div>

    <p class="heading text-bold p-24 "> Earlier </p>

    <noty :avatar="require('@/assets/img/evergreen.png')"   :time="'5W'">
      <b>Evagreen22</b> just liked a course
    </noty>
    <noty :avatar="require('@/assets/img/bolanle.png')" :time="'6W'">
      <b>Bolanle</b> just completed a survey
    </noty>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    components:{
      TopBar: () => import("@/components/TopBar"),
      Noty: () => import("@/components/cards/slaNotyCard"),
      Icon: ()=> import("@/components/SlaIcon")
    }
  }
</script>

<style>

</style>