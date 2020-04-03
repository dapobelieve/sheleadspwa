<template>
    <div :class="[classes, active ? 'active-lesson' : '']">
        <small class="text-align-center text-grey-500 " style="margin-top: -20px" >
        </small>
        <p class="text-align-center mt-4  "style="font-size: 10px"  >
            {{message}}
        </p>
        <div class="min-lesson" >
            <icon size="lg"  style="position: absolute; top: -130%; left:-130%" :name="completed? 't-ick': '' "/>
<!--            {{completed ?  : ''}}-->
        </div>

    </div>
</template>
<script>
    export default {
        props: {
            title:{
                type: String
            },
            message: {
                type: (String || Number)
            },
            active:{
                type:Boolean,
                default: false
            },
            completed:{
                type:Boolean,
                default: false
            },
            locked:{
                type:Boolean,
                default: false
            },

        },
        computed:{

            classes(){
                let classes = '';
                classes+='lesson  d-flex flex-column text-grey-500 m-8';
                return classes.trim();
            }
        },
        components: {
            Icon: () => import("@/components/SlaIcon.vue"),
        }
    }
</script>
<style lang="scss" scoped>
    .lesson{
        width: 20px;
        height: 20px;
        border: 1px solid #E9E9E9;
        display: inline-block;
        border-radius: 50%;
        padding: 10px 0 0 0px;

        .min-lesson {
            width: 5px;
            height: 5px;
            border: 1px solid #E9E9E9;
            display: inline-block;
            border-radius: 50%;
            padding: 5px;
            position: relative;
            top: -15px;
            left: 3px;
            background: #FFFFFF;
        }

        .title {

            font-style: normal;
            font-weight: 600;
            font-size: 10px;
            line-height: 14px;
            /* identical to box height */

            text-align: center;
            letter-spacing: 0.15px;

            /* identical to box height */


        }
        p {
            font-weight: 600;
            font-size: 24px;
            line-height: 33px;
            color: color(bv-white);
            /* identical to box height */
            text-align: center;
            letter-spacing: 0.15px;

        }
        small{
            font-weight: 600;
            font-size: 8px;
            line-height: 11px;
            /* identical to box height */

            letter-spacing: 0.15px;

        }


    }
    .active-lesson{
        border: 1px solid #0087DB;
        background-color: color(bv-primary) !important;

        .min-lesson {
            width: 2px;
            height: 2px;
            background: color(bv-primary);
        }
        .title {
            /* identical to box height */
            color: color(bv-primary);

        }
        p {
            color: color(bv-white);


        }
    }
</style>