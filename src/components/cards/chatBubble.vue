<template>
  <div
    class="d-flex"
    :class="position == 'right' ? 'justify-content-end mb-24 mt-24' : ''"
  >
    <div
      class="chat"
      :class="position == 'right' ? 'right' : ''"
      :style="{ float: `${position}` }"
    >
      <span class="flex-inline flex-column message  p-8">
        <span class="name text-bolder ">Nnwakwo Kanu</span>
        <div style="display: inline;">
          <span>{{ message }} lorem1000</span>
        </div>
      </span>
      <div class="text-grey-500">
        <small>11:34PM</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatBubble",
  props: {
    position: {
      type: String,
      default: "right"
    },
    message: {
      type: String
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
