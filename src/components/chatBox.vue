<template>
  <div class="xend d-flex justify-content-between align-items-center px-8">
    <div class="d-flex align-items-center chatbox mr-12 position-relative">
      <span @click.exact="pickEmoji($event)" style="bottom: 4px; left: 5px" ref="emojiPicker" class="position-absolute text-grey-500 smile">
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
      <button @click="$emit('send', $event)" class="d-flex justify-content-center align-items-center position-sticky bottom-0">
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
      this.$emit("enter-pressed");
    },
    pickEmoji(e) {
      this.picker.togglePicker(this.$refs.emojiPicker);
    },
    emitValue(e) {
      this.$emit("input", e.target.value);
    },
    resize() {
      if (this.$refs.chatArea.value == "") {
        this.$refs.chatArea.style.height = `46px`;
      }
      let h = parseInt(this.$refs.chatArea.scrollHeight, 10);
      if (h < 150) {
        if (h > 46) {
          this.$refs.chatArea.style.maxHeight = `none`;
        }
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
button {
  background-color: color(bv-primary);
  border-radius: 50%;
  padding: 0px;
  height: 48px !important;
  width: 48px !important;
  border: none;
  &:focus {
    outline: none;
  }
}
.xend {
  .chatbox {
    width: 100%;
    border-radius: 30px;
    background-color: #f4f4f4;

    .smile {
      bottom: 21px;
    }

    textarea {
      max-height: 46px;
      border-radius: 30px;
      resize: none;
      font-size: 14px;
      background-color: #f4f4f4;
      border: none;
      padding-top: 0.75rem;
      font-family: "Montserrat";
      margin-left: 1.8rem;
      padding-left: 15px !important;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
