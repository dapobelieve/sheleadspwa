<template>
  <div
    class="d-flex mb-12"
    :class="position == 'right' ? 'justify-content-end mb-24 mt-24' : ''"
  >
    <div
      class="chat"
      :class="position == 'right' ? 'right' : ''"
      :style="{ float: `${position}` }"
    >
      <span class="flex-inline flex-column message  p-8">
        <span v-if="position !== 'right'" class="name text-bolder ">{{
          chat.username
        }}</span>
        <div style="display: inline;">
          <span style="word-break: break-all;">{{ chat.message }}</span>
        </div>
      </span>
      <div class="text-grey-500 text-align-right">
        <small style="font-size: 9px">{{ chat.createdAt | chatTime }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "chatBubble",
  props: {
    chat: {
      type: Object,
      required: true
    },
    message: {
      type: String
    }
  },
  computed: {
    ...mapState(["user"]),
    position() {
      return this.chat.id == this.user.data._id ? "right" : "left";
    }
  }
};
</script>

<style lang="scss" scoped>
.chat {
  max-width: 75vw;
  .message {
    background-color: #ecf0f3;
    border-radius: 5px;
  }

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    display: block;
    border-left: 5px solid transparent;
    border-right: 5px solid #ecf0f3;
    border-top: 5px solid #ecf0f3;
    border-bottom: 5px solid transparent;
    position: absolute;
    top: 0px;
    left: -3px;
  }
}

.right {
  .message {
    background-color: #0087db;
    color: #ffffff;
  }
}
</style>
