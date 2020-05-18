<template>
  <div class="send d-flex justify-content-between align-items-center px-8">
    <div class="d-flex align-items-center chatbox mr-12 position-relative">
      <span
        @click.exact="pickEmoji($event)"
        ref="emojiPicker"
        class="position-fixed text-grey-500 smile"
      >
        <icon class="" size="lg" name="smile" />
      </span>
      <textarea
        :value="value"
        ref="chatArea"
        @change="emitValue($event)"
        @input="
          emitValue($event);
          resize();
        "
        @keydown.enter.exact="emitEnter"
        placeholder="Type your comment"
        class="text-bolder text-grey-500 width-100 px-12"
        type="text"
      ></textarea>
    </div>
    <div>
      <button
        @click="$emit('send', $event)"
        class="d-flex justify-content-center send position-sticky"
      >
        <icon size="sm" name="send" />
      </button>
    </div>
  </div>
</template>
<script>
import EmojiButton from "@joeattardi/emoji-button";
export default {
  props: {
    value: {
      required: false
    }
  },
  data() {
    return {
      picker: ""
    };
  },
  watch: {
    value: function(newVal, oldVal) {
      if (newVal == "") {
        this.$refs.chatArea.style.height = `55px`;
      }
    }
  },
  components: {
    Icon: () => import("@/components/SlaIcon")
  },
  methods: {
    emitEnter(e) {
      e.preventDefault();
      this.$emit("keyup");
    },
    pickEmoji(e) {
      this.picker.togglePicker(this.$refs.emojiPicker);
    },
    emitValue(e) {
      this.$emit("input", e.target.value);
    },
    resize() {
      if (this.$refs.chatArea.value == "") {
        this.$refs.chatArea.style.height = `55px`;
      }
      let h = parseInt(this.$refs.chatArea.scrollHeight, 10);
      if (h < 150) {
        this.$refs.chatArea.style.height = `auto`;
        this.$refs.chatArea.style.height = `${this.$refs.chatArea.scrollHeight}px`;
        return;
      } else if (h > 150) {
        this.$refs.chatArea.style.height = `150px`;
      }
    }
  },
  mounted() {
    this.picker.on("emoji", emoji => {
      let chatArea = this.$refs.chatArea;
      let cursorPosition = chatArea.selectionEnd;
      let currentChat = chatArea.value;
      let start = currentChat.substring(0, chatArea.selectionStart);
      let end = currentChat.substring(chatArea.selectionStart);
      chatArea.value = `${start}${emoji}${end}`;
      chatArea.focus();
      this.$nextTick(() => {
        chatArea.selectionEnd = cursorPosition + emoji.length;
      });
      this.$emit("input", chatArea.value);
    });
  },
  created() {
    this.picker = new EmojiButton({
      autoHide: false,
      position: "top-start",
      showVariants: false,
      rootElement: this.$refs.emojiPicker
    });
  }
};
</script>
<style lang="scss" scoped>
.send {
  .chatbox {
    width: 100%;
    border-radius: 30px;
    background-color: #f4f4f4;

    .smile {
      bottom: 21px;
    }

    textarea {
      min-height: 48px;
      border-radius: 30px;
      resize: none;
      font-size: 14px;
      background-color: #f4f4f4;
      border: none;
      padding-top: 1rem;
      font-family: "Open sans";
      margin-left: 1.8rem;

      &:focus {
        outline: none;
      }
    }
  }
  button {
    background-color: color(bv-primary);
    border-radius: 50%;
    height: 48px;
    width: 48px;
    &:focus {
      outline: none;
    }
  }
}
</style>
