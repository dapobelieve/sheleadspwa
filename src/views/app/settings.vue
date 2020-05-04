<template>
    <div class="pass d-flex flex-column justify-content-between ">
        <bar class="position-sticky top-0 bottom-0 z-index-1 text-align-center bg-white mt-12 mb-12  p-12">
            <span @click="goBack" style="position: absolute; left: 0px; top: 5px">
          <icon size="lg" name="left" />
        </span>
            <span class="text-align-center" style="font-size: 18px"> Settings </span>
        </bar>
        <p class="text-grey-500 m-24">Account</p>
        <p class="text-bold m-24" style="font-size: 16px">Push Notifications
            <span class="float-right"> <input type="checkbox" checked="checked"/></span>
        </p>
        <p class="text-bold m-24" style="font-size: 16px">Email Notifications
            <span class="float-right"> <input type="checkbox"/></span>
        </p>
        <div class="ht"></div>
        <p class="text-grey-500 m-24">Connect</p>
        <div class="m-24" style="border: 1px solid #F4F4F4;">
            <p class="text-bold p-12 "> Share App</p>
        </div>
        <div class="m-24" style="border: 1px solid #F4F4F4;">
            <p class="text-bold p-12 "> Leave a feedback</p>
        </div>

        <p class="text-grey-500 m-24">Other</p>
        <div class="m-24" style="border: 1px solid #F4F4F4;">
            <p class="text-bold p-12 "> Privacy Policy</p>
        </div>
        <div class="m-24" style="border: 1px solid #F4F4F4;">
            <p class="text-bold p-12 "> About This App</p>
        </div>

    </div>
</template>
<script>
  import { mapMutations, mapActions } from "vuex";
  import Avatar from "../../components/SlaAvatar";
  import ChatBubble from "../../components/cards/chatBubble";
  export default {
    data() {
      return {

      };
    },
    components: {
      ChatBubble,
      Avatar,
      SlaInput: () => import("@/components/SlaInput"),
      SlaButton: () => import("@/components/SlaButton"),
      Icon: ()=> import("@/components/SlaIcon"),
      Bar: () => import("@/components/SlaBar"),
      Input: () => import("@/components/SlaInput"),
      bubble: ()=> import("@/components/cards/chatBubble"),
      Discussion: () => import("@/components/cards/Discussion"),
      card: () => import("@/components/cards/slaCard")


    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    }
  };
</script>
<style lang="scss" scoped>
    input[type="checkbox"]{
        position: relative;
        width: 51px;
        height: 31px;
        -webkit-appearance: none;
        background: #c6c6c6;
        outline: none;
        border-radius: 100px;
        box-shadow: inset 0 0 5px rgba(0,0,0,.2);
        transition: .5s;
        top: -5px;
    }

    input:checked[type="checkbox"]{
        background: #03a9f4;
    }

    input[type="checkbox"]:before{
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 100px;
        top: 5px;
        left: 5px;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,.2);
        transition: .5s;
    }

    input:checked[type="checkbox"]:before{
        left: 30px;
    }
</style>
