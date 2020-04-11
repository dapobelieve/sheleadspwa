<template>
  <div class="message-card">
    <div class="avatar">
      <img :src="avatar" />
    </div>
    <div class="content">
      <div class="title ">
        <p>
          <b>{{ sender }}</b>
          <span class=" float-right   d-flex ">
            <small class="mx-auto text- " style="font-size: 10px">{{
              time
            }}</small>
          </span>
        </p>
      </div>
      <div class="message  ">
        <p>
          <span class="truncate truncate-1 ">{{ message }}</span>
          <span
            class="count float-right   d-flex  align-items-center"
            v-if="count_message > 0 || count_message === null"
          >
            <small class="mx-auto text-white">{{ count_message }}</small>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slaNotyCard",
  props: {
    avatar: {
      type: String
    },
    sender: {
      type: String
    },
    message: {
      type: String
    },
    time: {
      type: String
    },
    count_message: {
      type: Number
    }
  },
  computed: {
    /**
     * @return {string}
     */
  },
  components: {
    Icon: () => import("@/components/SlaIcon"),
    Avatar: () => import("@/components/profilePhoto"),
    card: () => import("@/components/cards/slaCard")
  }
};
</script>

<style lang="scss" scoped>
.message-card {
  border-bottom: 1px solid #f0f1f5;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  /*padding: 0 10px 0 10px;*/
  background-color: white;
  border-radius: 5px;
  //box-shadow: 0 3px 12px -3px $bv-shadow !important;
  transition: all 0.3s ease-in;
  cursor: pointer;

  .avatar {
    width: 60px;
    height: 60px;
    overflow: hidden;
  }

  .avatar img {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
  }
  .content {
    width: calc(100% - 75px);
    line-height: 80%;
  }
  .title {
    font-size: 16px;
  }
  .message {
    display: block;
    margin: 20px auto;
  }
  .count {
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background: #fe4437;
  }
}
</style>
