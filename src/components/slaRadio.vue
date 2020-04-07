<template>
     <div style="display: flex">
     <input class="width-100 text-bold"  @click="trigger($event)"  :type=type><label>Yes</label>
     </div>
</template>
<script>
    export default {
        props: {
            value: {},
            disable: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'radio'
            }
        },
        methods: {
            trigger(e) {
                console.log(e.target.value)
                this.$emit('input', e.target.value)
            },
            focus() {

            }
        }
    }
</script>
<style scoped lang="scss">
    input{

        background: #FFFFFF;
        border: 2px solid #333333;
        box-sizing: border-box;
    }


    input:focus {
        // outline: 1px color(bv-primary) solid;
        /*background: #0087DB;*/
    }
</style>