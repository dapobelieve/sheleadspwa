<template>
    <component
            :is="tag"
            v-bind="$attrs"
            v-on="$listeners"
            :class="[classes]">
            <img :src=image alt="User Avatar">
            <label class="edit-user-details__avatar__change">
                <img class="icon-image" src="@/assets/icons/camera.png"/>
                <slot/>
            </label>

    </component>
</template>

<script>
    export default {
        name: "profilePhoto",

        props:{
            tag: {
                type: String,
                default: 'div'
            },
            image:{
                type: String,
                default: require('../assets/img/0.png')
            }
        },
        computed:{
            classes(){
                let classes = '';
                classes+= 'edit-user-details__avatar m-auto';
                return classes.trim();
            }
        }
    }
</script>

<style scoped>

</style>