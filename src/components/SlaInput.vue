<template>
 <div>
   <input
           :class="['width-100 text-bold',isInvalid ? 'is-invalid' : '']"
           @keyup="keyup($event)"
           :value="value"
           :placeholder="placeholder"
           :disabled="disable"
           @input="trigger($event)"
           @focus="focus"
           :type="type"
   />
     <p class="font-poppins text-bold text-error ml-12" v-if="isInvalid">{{errorMessage}}</p>

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
    isInvalid:{
      type: Boolean,
    },
    errorMessage:{
      type:String,
    }
  },
  methods: {
    keyup(e) {
      this.$emit("keyup");
    },
    trigger(e) {
      this.$emit("input", e.target.value);
    },
    focus() {}
  }
};
</script>
<style scoped lang="scss">
input {
  height: 52px;
  border-radius: 5px;
  border-width: 1px;
  // background-color: color(bv-grey-100);
  font-size: 14px;
  border: 1px solid #e7e6e6;
  color: #999999;
  font-family: fonts(bv-open-sans);
  line-height: 1.3;
  padding: 1rem;


}
.is-invalid{
  border: 1px solid color(bv-error);

}


input:focus {
  // outline: 1px color(bv-primary) solid;
  outline: none;
}
</style>
