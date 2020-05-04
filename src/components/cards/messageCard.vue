<template>
  <div @click="$emit('click', $event)">
    <div
      class="d-flex align-items-center justify-content-around chat mt-12 mx-12"
    >
      <div>
        <avatar
          size="xl"
          :user="{
            image:
              'https://res.cloudinary.com/rohing/image/upload/v1587700139/photo-1542393545-10f5cde2c810_zvvwje.jpg'
          }"
        />
      </div>
      <div class="ml-8">
        <div class="d-flex align-items-center justify-content-between mb-8">
          <div class="text-bolder">Business Group</div>
          <small>6:34 PM</small>
        </div>
        <div class="d-flex">
          <div class="width-100 truncate truncate-1">
            Lorem ipsum dolor sit amet, conse ctetur adipisicing elit. Vel.
          </div>
          <div
            class="counter p-12 text-white d-flex align-items-center justify-content-center"
          >
            <small>30</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Avatar: () => import("@/components/SlaAvatar")
  }
};
</script>
<style>
.counter {
  background-color: red;
  border-radius: 50%;
  height: 18px;
  width: 18px;
}
</style>
