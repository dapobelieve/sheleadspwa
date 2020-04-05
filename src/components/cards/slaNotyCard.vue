<template>
  <component :is="tag" v-bind="$attrs" v-on="$listeners" :class="[classes]">
    <div class="notifications__item">
      <div class="notifications__item__avatar" v-if="ImageCount !== 'multiple'">
        <img :src="avatar" />
      </div>
      <div class="container-multiple" v-else>
        <div class=" notifications__item__avatar__multiple">
          <div class="notifications__item__avatar__multiple">
            <img :src="Images[0]" />
            <div class="notifications__item__avatar__multiple">
              <img :src="Images[1]" />
            </div>
          </div>
        </div>
      </div>

      <div class="notifications__item__content">
        <span class="notifications__item__title font-poppins">
           <slot />
        </span>
        <span class="notifications__item__message">
         <icon size="xs" :name="icon"/>
          <span class="ml-16  notifications__item__message__icon_text">{{
            actions
          }}</span>
          <span class="float-right notifications__item__message__icon_text">{{
            time
          }}</span>
        </span>
      </div>

      <div></div>
    </div>
  </component>
</template>

<script>
export default {
  name: "slaNotyCard",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    avatar: {
      type: String,
      default: require("@/assets/img/notification.png")
    },
    ImageCount: {
      type: String,
      default: "single",
      required: false
    },
    Images: {
      type: Array
    },
    text: {
      type: String,
      default: "Notification Text"
    },

    actions: {
      type: String,
      default: ""
    },
    icon: {
      type:String,
    },
    time: {
      type: String,
      default: "2d" // this will require moment js tho
    }
  },
  computed: {
    /**
     * @return {string}
     */
    classes() {
      let classes = "";
      classes += "notifications";
      return classes.trim();
    }
  },
  components:{
    Icon: ()=> import("@/components/SlaIcon")
  }
};
</script>

<style scoped>

  .notifications__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 105px;
    margin-bottom: 20px;
    padding: 0 10px 0 10px;
    background-color: white;
    border-radius: 5px;
  //box-shadow: 0 3px 12px -3px $bv-shadow !important;
    transition: all 0.3s ease-in;
    cursor: pointer;
  }

  .notifications__item__avatar {
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin-right:0;
    margin-top: -50px;
  }

  .notifications__item__avatar img {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
  }

  .container-multiple {
    position: relative;
    height: 64px;
    width: 60px;
  }

  .notifications__item__avatar__multiple {
    position: absolute;
    top: 20px;
    left: 5px;
    width: 64px;
    height: 64px;
    z-index: 100;
    > .notifications__item__avatar__multiple {
      z-index: -1;
      transform: scale(0.85) translate(-30%, -85%);
    }
    img {
      border-radius: 50%;
      object-fit: cover;
      width: 100%;
      box-shadow: 5px 0 5px 1px rgba(0, 0, 0, 0.3);
    }
  }

  .notifications__item__content {
    width: calc(100% - 105px);
  }

  .notifications__item__title,
  .notifications__item__message {
    display: block;
    margin: 20px auto;
  }

  .notifications__item__title {
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.002em;
    color: #333333;
  }

  .notifications__item__message {
    font-size: 14px;
    color: #929292;
  }

  .notifications__item__message__icon_text {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.002em;
    color: #999999;
  }

  .notifications__item__option {
    width: 20px;
    height: 20px;
    margin: 8px 0;
    border-radius: 50%;
    color: white;
    opacity: 0;
    font-size: 10px;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    transition: all 0.2s;
  }


</style>
