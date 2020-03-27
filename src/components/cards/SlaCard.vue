<template>
    <component :is="tag"
               v-bind="$attrs"
               v-on="$listeners"
               :class="[classes]">
        <slot />
    </component>
</template>

<script>
    const sizes = ['xs', 'sm', 'md', 'lg'];

    export default {
        name: 'SlaCard',
        props: {
            /**
             * Element tag type.
             */
            tag: {
                type: String,
                default: 'div'
            },
            /**
             * Background theme color.
             */
            bgTheme: {
                type: String,
                default: null
            },
            /**
             * Border theme color.
             */
            borderTheme: {
                type: String,
                default: null
            },
            /**
             * Text theme color.
             */
            textTheme: {
                type: String,
                default: null
            },
            /**
             * Alignment
             */
            align: {
                type: String,
                default: null
            },
            sizes: {
                type: String,
                default:null
            }
        },
        computed:{
            classes () {
                let classes = '';
                classes +=  `bg-${this.bgTheme} `;
                classes += sizes.includes(this.size) ? `btn-${this.size} ` : '';
                return classes.trim();
            },
        }
    }
</script>
<style lang="scss" scoped>

    .card {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        max-width: 100%;
        margin: 20px;
        overflow: hidden;
        width: 700px;
    }
    .card-img-top {
        height: 150px
    }
</style>