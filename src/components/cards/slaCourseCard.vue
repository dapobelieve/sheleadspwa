<template>
  <component :is="tag" v-bind="$attrs" v-on="$listeners" :class="[classes]">
    <slot />
  </component>
</template>

<script>
const sizes = ["xs", "sm", "md", "lg"];

export default {
  name: "SlaCard",
  props: {
    /**
     * Element tag type.
     */
    tag: {
      type: String,
      default: "div"
    },
    /**
     * Background theme color.
     */
    bgTheme: {
      type: String,
      default: null
    },
    /**
     * Border theme color.
     */
    borderTheme: {
      type: String,
      default: null
    },
    /**
     * Text theme color.
     */
    textTheme: {
      type: String,
      default: null
    },
    /**
     * Alignment
     */
    align: {
      type: String,
      default: null
    },
    sizes: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      let classes = "";
      return classes.trim();
    }
  }
};
</script>
<style lang="scss" scoped>
.card-img-top {
  max-width: 100%;
  vertical-align: middle;
  max-height: 184px;
}
.card {
  display: flex;
}

.card-body {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
}

.card_content {
  padding: 1rem;
}

.card_title {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.002em;
}

.card_text {
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
.card_text {
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
</style>
