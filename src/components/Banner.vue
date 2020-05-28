<template>
  <div>
    <div class="banner position-relative">
      <div class="overlay"></div>
      <div>
        <img class="image object-cover" src="https://res.cloudinary.com/sla-sheleadsafrica/image/upload/v1590619500/photo-1493655430214-3dd7718460bb_niutsn.jpg" alt="" />
      </div>
      <div class="content d-flex flex-column justify-content-between height-100 text-align-center">
        <div class="font-poppins text-align-left text-grey-100 ml-4 mt-4">Upcoming Events</div>
        <a class="white-btn text-white mb-24 py-8" target="_blank" href="https://sheleadsafrica.org/the-millionaire-housewifes-rules-for-every-side-hustler/">VIEW ALL EVENTS</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    SlaButton: () => import("@/components/SlaButton")
  }
};
</script>

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

  .white-btn {
    text-decoration: none;
    font-weight: 600;
    border: 1px solid white;
    margin: 0 89px 0 89px;
    border-radius: 5px;
  }
}
</style>
