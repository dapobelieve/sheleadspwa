<template>
    <div :class="[classes ? 'border' : ''  ]">
        <icon size="xs"  v-if="active" name="eclipse-active"/>
        <icon size="xs" v-else  name="eclipse"/>

           <icon size="xs" v-if="bookmark"  class="bookmark float-right" name="bookmark-filled"/>

        <div class="title font-poppins ml-56  " style="margin-top: -10px">{{title}}</div>
        <div class="px-24 message">
            <icon size="xs" class="float-right"  :name="attribute"/>
            <slot/>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title:{
                type: String
            },
            attribute:{
                type: String
            },
            active:{
                type:Boolean,
                default:false
            },
            bookmark:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            classes(){
                let classes = ''
                classes += 'card d-flex flex-column px-8 py-8';
                classes.trim();
            }
        },
        components:{
            Icon : ()=> import('@/components/SlaIcon.vue')
        }
    }
</script>
<style lang="scss" scoped>
    .card{
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 5px;
        margin: 20px auto;
        padding: 20px;
        width: 353px;
        height: 89px;
        .title {
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.15px;
        }
        p {
            line-height: 24px
        }
        .bookmark{
            background: color(bv-white);
            border-radius: 50%;
        }

    }
    .border{
        border: 1px solid #E9E9E9;
    }
    .message{
        font-size: 14px;
        line-height: 32px;
        /* or 229% */

        letter-spacing: 0.15px;
    }
</style>