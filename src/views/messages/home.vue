<template>
  <div class="messages d-flex flex-column">
    <top heading="Messages" />
    <div class="search d-flex align-items-center position-relative mt-32 px-32">
      <input
        class="px-8"
        placeholder="Search for tags or titles..."
        type="text"
      />
      <span class="bg-white text-grey-500 ml-12 position-absolute"
        ><icon class="text-align-right" name="search"
      /></span>
    </div>
    <message-card class="cursor-pointer" @click="goChat" />
    <div class="line-thin mt-12"></div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
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
    SlaInput: () => import("@/components/SlaInput"),
    SlaButton: () => import("@/components/SlaButton"),
    Icon: () => import("@/components/SlaIcon"),
    top: () => import("@/components/top"),
    MessageCard: () => import("@/components/cards/messageCard.vue")
  },
  methods: {
    goChat() {
      this.$router.push({
        name: "chat"
      });
    }
  }
}
</script>
<style lang="scss" scoped>
a {
  color: none;
}
.messages {
  .search {
    input {
      width: 100%;
      height: 40px;
      font-size: 14px;
      color: #99999999;
      letter-spacing: 0.15px;
      border-radius: 5px;
      border-width: 1px;
      border: 1px solid #e7e6e6;
      box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.06);

      &:focus {
        outline: none;
      }
    }

    span {
      right: 38px;
    }

  }
}
</style>
