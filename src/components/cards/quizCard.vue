<template>
  <div :class="[classes]">
    <div class="title font-poppins   ">{{ question }}</div>
    <div class=" message">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    question: {
      type: String
    }
  },
  computed: {
    classes() {
      let classes = "";
      classes += "card d-flex flex-column px-12 py-12";
      classes.trim();
    }
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue")
  }
};
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  // margin: 20px auto;
  padding: 10px;
  /*width: 362px;*/
  .title {
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.15px;
  }
  p {
    line-height: 24px;
  }
  .bookmark {
    background: color(bv-white);
    border-radius: 50%;
  }
}
.border {
  border: 1px solid #e9e9e9;
}
.container {
  position: relative;
  top: 10px;
  padding-left: 35px;
  /*margin-bottom: 12px;*/
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: color(bv-white);
  border: 2px solid color(bv-black);
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: color(bv-primary);
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  border: 2px solid color(bv-primary);
  background-color: color(bv-white);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 1px;
  left: 1px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: color(bv-primary);
}
</style>
