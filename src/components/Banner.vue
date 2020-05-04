<template>
  <div>
    <div class="banner position-relative">
      <div class="overlay"></div>
      <div>
        <img
          class="image object-cover"
          src="https://res.cloudinary.com/rohing/image/upload/v1587631021/photo-1551969685-4f8718d0726c_okcqeq.jpg"
          alt=""
        />
      </div>
      <div class="content text-align-center">
        <span class="font-poppins text-bolder text-grey-100">Business</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  // width: 342px;
  height: 254px;
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.4);
  }
  .image {
    position: absolute;
    height: 254px;
    width: 100%;
    z-index: -2;
  }
}
</style>
