<template>
  <div class="pass d-flex flex-column justify-content-between ">
    <bar
      class="position-sticky top-0 bottom-0 z-index-1 text-align-center bg-white mt-12 mb-12 "
    >
      <span @click="goBack" style="position: absolute; left: 10px; top: -5px">
        <icon size="lg" name="left" />
      </span>
      <span class="text-align-center" style="font-size: 18px"
        >Mentorship Group</span
      >
      <span style="position: absolute; right: 10px; top: -5px">
        <icon size="lg" name="info" />
      </span>
    </bar>
    <div class="hr"></div>
    <div class="section   ">
      <chat-bubble
        sender
        :message="'Hello Bro How is it Going in the streets of lagos'"
        :time="'11:14 AM'"
      />
      <chat-bubble
        receiver
        :message="'It is going fine bro'"
        :time="'11:30 AM'"
      />
    </div>

    <div
      class="d-flex align-items-baseline bg-white position-sticky justify-content-around position-fixed width-100 bottom-0 z-index-1  p-12 "
    >
      <input placeholder="Type something..." />
      <button
        class="add shadow bg-primary m-12  d-flex justify-content-center align-items-center"
      >
        <icon size="lg" name="send" />
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
      btn: {
        text: "continue",
        loading: false
      }
    };
  },
  components: {
    ChatBubble,
    Avatar,
    SlaInput: () => import("@/components/SlaInput"),
    SlaButton: () => import("@/components/SlaButton"),
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    Input: () => import("@/components/SlaInput"),
    bubble: () => import("@/components/cards/chatBubble")
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  background: #f4f4f4;
  border-radius: 40px;
  width: 300px;
  height: 60px;
  font-size: 18px;
  border: none;
}
input::placeholder {
  padding: 20px;
}
input:focus {
  border-radius: 40px;
}
button {
  border: none;
}
.add {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
</style>
