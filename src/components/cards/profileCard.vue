<template>
    <component :is="tag" v-bind="$attrs" v-on="$listeners" :class="[classes]">
        <p class="text-bold p-12">PROFILE DETAILS</p>
        <div class="user">
            <div class="user__avatar" >
                <img :src="avatar" />
            </div>
            <div class="user__content">
                <span class="user__title ">
                    <p class="text-bold">{{fullname}}</p>
                </span>
                <span class="user__message ">
                    <p class="text-align-left truncate truncate-2">
                        Design lover and a tech enthusiast
                    </p>
                     <p>
                       Lagos, Nigeria
                    </p>
                    <p>
                        <router-link to="/profile/edit" class="text-primary float-right" style="text-decoration: none">Edit Profile</router-link>
                    </p>
                </span>
            </div>
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
        default: require("@/assets/img/0.png")
      },
      fullname:{
        type: String,
        default: 'Bridget Johnson'
      },
      text: {
        type: String,
        default: " Text"
      },

    },
    computed: {
      /**
       * @return {string}
       */
      classes() {
        let classes = "";
        classes += "card shadow shadow-2";
        return classes.trim();
      }
    },
    components:{
      Icon: ()=> import("@/components/SlaIcon")
    }
  };
</script>

<style lang="scss" scoped>
    .user {
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

        .user__avatar {
            width: 80px;
            height: 80px;
            overflow: hidden;
            margin-right:0;
            margin-top: -50px;
        }

        .user__avatar img {
            border-radius: 50%;
            object-fit: cover;
            width: 100%;
        }

        .user__content {
            width: calc(100% - 105px);
            margin-top: 30px ;
            line-height: 15px;

        }

        .user,
        .user__message {
            display: block;
            margin: 2px auto;
        }

        .user__title p {
            font-size: 14px;
            line-height: 15px;
            letter-spacing: 0.002em;
            color: #333333;
            margin-top: -50px;
        }
    }


</style>
