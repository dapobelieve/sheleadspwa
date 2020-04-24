<template>
  <div class="poll d-flex flex-column">
    <div class="image px-8">
      <img class="object-cover" :src="image" alt="" />
    </div>
    <span class="text-align-center mt-12 text-grey">
      Expires in (2) hours
    </span>
    <div class="question d-flex flex-column mt-16 mx-8 px-12 ">
      <slot name="poll-content"></slot>
    </div>
    <sla-button class="mx-56 mt-32" :text="text" />
  </div>
</template>
<script>
export default {
  props: ["image", "text"],
  components: {
    SlaButton: () => import("@/components/SlaButton")
  }
};
</script>
<style lang="scss" scoped>
.poll {
  .image {
    img {
      height: 227px;
      width: 100%;
      border-radius: 10px;
    }
  }

  .question {
    border: 1px solid #e7e6e6;
    border-radius: 5px;

    .input {
      font-size: 14px;
      width: 100%;
      border-top: none;
      border-left: none;
      border-right: none;
      border-width: 1px;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
