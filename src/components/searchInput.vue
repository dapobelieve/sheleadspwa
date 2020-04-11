<template>
  <div>
    <input
      :class="['width-100 text-bold', isInvalid ? 'is-invalid' : '']"
      @keyup="keyup($event)"
      :value="value"
      :placeholder="placeholder"
      :disabled="disable"
      @input="trigger($event)"
      @focus="focus"
      :type="type"
    />
    <p class="font-poppins text-bold text-error ml-12" v-if="isInvalid">
      {{ errorMessage }}
    </p>
    <p
      class="text-bold  text-grey-500 float-right p-12"
      style="position:absolute;right: 0; top: 1px"
      v-if="clear"
      @click="clearInput"
    >
      cancel
    </p>
  </div>
</template>
<script>
export default {
  props: {
    value: {},
    disable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    type: {
      type: String,
      default: "text"
    },
    isInvalid: {
      type: Boolean
    },
    errorMessage: {
      type: String
    },
    clear: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    keyup(e) {
      this.$emit("keyup");
    },
    trigger(e) {
      this.$emit("input", e.target.value);
    },
    focus() {},
    clearInput() {
      this.value = "";
    }
  }
};
</script>
<style scoped lang="scss">
input {
  height: 75px;
  // background-color: color(bv-grey-100);
  font-size: 14px;
  color: #999999;
  font-family: fonts(bv-open-sans);
  line-height: 1.3;
  padding: 1rem;
  border: 1px solid color(bv-grey-200);
}

input::placeholder {
  position: relative;
  top: 0px;
  left: 50px;
  color: color(bv-grey-300);
}

input:focus {
  // outline: 1px color(bv-primary) solid;
  outline: none;
}
</style>
