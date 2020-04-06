<template>
    <div class="pass d-flex flex-column justify-content-between ">
        <bar class="position-sticky top-0 bottom-0 z-index-1 text-align-center bg-white mt-12 mb-12 ">
            <span @click="goBack" style="position: absolute; left: 10px; top: -5px">
          <icon size="lg" name="left" />
        </span>
            <span class="mr-32" style="font-size: 18px"> Messages</span>
        </bar>
        <message-card
                :avatar="require('@/assets/img/0.jpg')"
                :sender="'Tomide Aina'"
                :message="'Hello There'"
                :count_message="1"
                :time="'6.30 PM'"
        />
        <message-card
                :avatar="require('@/assets/img/0.jpg')"
                :sender="'Dapo Michaels'"
                :message="'Wats Good Man'"
                :count_message="2"
                :time="'6.30 PM'"
        />

    </div>
</template>
<script>
  import { mapMutations, mapActions } from "vuex";
  import Avatar from "../../components/SlaAvatar";
  export default {
    data() {
      return {
        btn: {
          text: "continue",
          loading: false
        },
      };
    },
    components: {
      Avatar,
      SlaInput: () => import("@/components/SlaInput"),
      SlaButton: () => import("@/components/SlaButton"),
      Icon: ()=> import("@/components/SlaIcon"),
      Bar: () => import("@/components/SlaBar"),
      messageCard: ()=> import("@/components/cards/messageCard.vue")


    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    }
  };
</script>
<style lang="scss" scoped>
</style>
