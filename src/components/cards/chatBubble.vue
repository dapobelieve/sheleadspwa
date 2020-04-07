<template>
    <div class="chats">
          <span  v-if="sender" class="u1 chat">
            {{message}}
        <span class="time">{{time}}</span>
        </span>

        <span v-if="receiver" class="u2 chat">
            {{message}}
                    <span class="time2">{{time}}</span>

        </span>

    </div>
</template>

<script>
  export default {
    name: "chatBubble",
    props:{
      receiver:{
        type: Boolean,
        default:false,
      },
      sender:{
        type: Boolean,
        default:false,
      },
      message:{
        type:String,
      },
      time:{
        type: String,

      }
    },
    components:{

    },
    computed:{

    }
  };
</script>

<style lang="scss" scoped>
    .chat{
        background:  #ECF0F3;
        border-radius: 20px;
        display: inline-block;
        padding: 10px;
        font-weight: lighter;
        font-size: small;
        margin: 20px;
        position: relative;
    }
    .time{
        display: block;
        font-weight: bold;
        font-size: small;
        position: relative;
        top: 30px;
        color: color(bv-grey-500);
    }
    .time2{
        display: inline-block;
        font-weight: bold;
        font-size: small;
        position: relative;
        top: 30px;
        color: color(bv-grey-500);
    }
    .chat.u1{
        float: left;
        clear: both;
        border-radius: 10px;
        background: #ECF0F3;
    }
    .chat.u1:before{
        content: "";
        width: 0px;
        height: 0px;
        display: block;
        border-left: 5px solid transparent;
        border-right: 5px solid  #ECF0F3;
        border-top: 5px solid  #ECF0F3;;
        border-bottom: 5px solid transparent;
        position: absolute;
        top: 0px;
        left: -3px;
    }
    .chat.u2{
        float: right;
        clear: both;
        border-radius: 10px;
        background: #0087DB;
        color: color(bv-white);
    }
    .chat.u2:before {
        content: "";
        width: 0px;
        height: 0px;
        display: block;
        border-left: 5px solid #0087DB;;
        border-right: 5px solid transparent;
        border-top: 5px solid #0087DB;
        border-bottom: 5px solid transparent;
        position: absolute;
        top: 0px;
        right: -3px;
    }


</style>