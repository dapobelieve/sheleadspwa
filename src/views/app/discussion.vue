<template>
    <div class="pass d-flex flex-column justify-content-between ">
        <bar class="position-sticky top-0 bottom-0 z-index-1 text-align-center bg-white mt-12 mb-12 p-12 ">
            <span @click="goBack" style="position: absolute; left: 0px; top: 5px">
          <icon size="lg" name="left" />
        </span>
            <span class="text-align-center " style="font-size: 18px">Discussion Topics</span>
        </bar>

        <div class="discuss y- d-flex flex-column mt-12 p-24">
            <discussion class="py-4" v-for="a in 20" />
        </div>

        <div class="d-flex align-items-baseline bg-white position-sticky justify-content-around position-fixed width-100 bottom-0 z-index-1  p-12 ">
            <input placeholder="Type your comment...">
            </input>
            <button
                    class="add shadow bg-primary m-12  d-flex justify-content-center align-items-center"
            >
                <icon  size="lg" name="send" />
            </button>
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
      Discussion: () => import("@/components/cards/Discussion")


    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    }
  };
</script>
<style lang="scss" scoped>
    input{
        background: #F4F4F4;
        border-radius: 40px;
        width: 300px;
        height: 60px;
        font-size: 18px;
        border: none;
    }
    input::placeholder{
        padding: 20px;
    }
    input:focus{
        border-radius: 40px;

    }
    button{
        border: none;
    }
    .add {
        border-radius: 50%;
        height: 50px;
        width: 50px;

    }



</style>
