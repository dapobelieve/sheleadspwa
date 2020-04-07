<template>
    <div :class="[classes]">


        <div class="title font-poppins   " >{{question}}</div>
        <div class=" message">
            <slot/>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            question:{
                type: String
            },

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
        width: 362px;
        height: 138px;
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