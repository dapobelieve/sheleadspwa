<template>
  <button
    @click="$emit('click', $event)"
    :class="[classes, icon ? iconClass : '']"
    :disabled="disable"
    :style="styles"
  >
    <!-- Button Text -->
    <span v-if="text">
      {{ textProp }}
    </span>
  </button>
</template>
<script>
const sizes = ["xs", "sm", "md", "lg"];
const types = ["inverse", "filled", "outline"];

export default {
  name: "BvButton",
  data() {
    return {
      widths: {
        xs: 26,
        sm: 34,
        md: 42,
        lg: 48
      }
    };
  },
  props: {
    // The type of the button
    type: {
      // `'inverse'` / `'filled'` / `'outline'`
      type: String,
      default: types[1],
      required: false
    },
    // The size of the button
    size: {
      // `'xs'` / `'sm'` / `'md'` / `'lg'`
      type: String,
      default: sizes[2],
      required: false
    },
    // To set button to be full width
    block: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    // The disabled state of the button
    disable: {
      // `'true'` / `'false'`
      type: Boolean,
      default: false,
      required: false
    },
    text: {
      type: String,
      default: ""
    }
  },
  computed: {
    styles() {
      if (!this.text && typeof this.icon != "undefined") {
        return `width: ${
          this.widths[this.size]
        }px; border-radius: 50%; padding: 0;`;
      }
      return false;
    },
    iconClass() {
      let btnBlock = this.block == true ? "btn-block-icon" : "";
      return `${btnBlock}`;
    },
    iconMargin() {
      if (!this.text && typeof this.icon != "undefined") {
        return "mr-0";
      }
      return "mr-4";
    },
    textProp() {
      return this.text.toUpperCase();
    },
    classes() {
      let classes = "";
      classes += sizes.includes(this.size) ? `btn-${this.size} ` : "";
      classes += types.includes(this.type) ? `btn-${this.type} ` : "";
      classes += this.block ? "btn-block" : "";
      return classes.trim();
    },
    iconPosition: function() {
      return this.text != "" && this.block ? { position: "absolute" } : {};
    }
  }
};
</script>

<style scoped lang="scss">
button,
.btn {
  font-family: fonts(bv-open-sans);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid color(bv-grey-200);
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  position: relative;
  &.btn-lg {
    height: 48px;
    font-size: 1.3rem;
    padding: 0 2rem;
  }
  &.btn-md {
    height: 42px;
    padding: 0 1.5rem;
  }
  &.btn-sm {
    height: 34px;
    padding: 0 1rem;
  }
  &.btn-xs {
    height: 26px;
    padding: 0 0.75rem;
  }

  &.btn-inverse {
    color: color(bv-primary) !important;
    background-color: color(bv-white);
    &:hover {
      background-color: color(bv-grey-100);
    }
  }

  &.btn-outline {
    border: 1px solid color(bv-primary);
    background-color: color(bv-white);
    color: color(bv-primary);
    &:hover {
      background-color: lighten(color(bv-primary), 50%);
    }
  }

  &.btn-filled {
    color: color(bv-white);
    background-color: color(bv-primary);
    border: 1px solid color(bv-primary);
    &:hover {
      background-color: darken(color(bv-primary), 5%);
      border-color: darken(color(bv-primary), 5%);
    }
  }

  &:disabled {
    cursor: auto;
    opacity: 0.5 !important;
  }
}

.btn-block {
  width: 100% !important;
  &.btn-lg {
    padding: 0 0 0 calc(2rem / 2) !important;
  }
  &.btn-md {
    padding: 0 0 0 0;
  }
  &.btn-sm,
  &.btn-xs {
    padding: 0 0 0 calc(1rem / 2) !important;
  }
  &-icon {
    display: flex;
    justify-content: flex-start !important;
    border-radius: 50px !important;
    & > :last-child {
      margin: auto;
    }
  }
}
</style>
