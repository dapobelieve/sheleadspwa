<template>
  <div class="pass d-flex flex-column justify-content-between ">
    <top heading="Settings" />
    <span class="text-bolder text-grey-500 m-24">Account</span>

    <div
      class="d-flex align-items-center justify-content-between mx-32"
      style="margin-bottom: 30px"
    >
      <span class="text-bold" style="font-size: 16px">Push Notifications</span>
      <input type="checkbox" checked="checked" />
    </div>
    <div
      class="d-flex align-items-center justify-content-between mx-32"
      style="margin-bottom: 30px"
    >
      <span class="text-bold" style="font-size: 16px">Email Notification</span>
      <input type="checkbox" />
    </div>
    <div class="d-flex align-items-center justify-content-between mx-32">
      <span class="text-bold" style="font-size: 16px">Reset Password</span>
    </div>

    <div class="line-thin mx-32 mt-32"></div>

    <span class="text-bolder text-grey-500 m-24">Connect</span>
    <div class="mx-32 mb-56" style="border: 1px solid #F4F4F4;">
      <p class="text-bold p-12 ">Share App</p>
    </div>
    <div class="mx-32" style="border: 1px solid #F4F4F4;">
      <p class="text-bold p-12 ">Leave a feedback</p>
    </div>
    <div class="line-thin mx-32 mt-32"></div>

    <span class="text-bolder text-grey-500 m-24">Others</span>

    <div class="m-24" style="border: 1px solid #F4F4F4;">
      <p class="text-bold p-12 ">Privacy Policy</p>
    </div>
    <div class="m-24" style="border: 1px solid #F4F4F4;">
      <p class="text-bold p-12 ">About This App</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    top: () => import("@/components/top")
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
input[type="checkbox"] {
  position: relative;
  width: 51px;
  height: 31px;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

  &:before {
    content: "";
    position: absolute;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    // top: 5px;
    // left: 5px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  &:checked {
    transition: 0.5s;
    background: #03a9f4;
    &:before {
      left: 30px;
    }
  }
}
</style>
