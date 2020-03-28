<template>
  <component
          :is="tag"
          v-bind="$attrs"
          v-on="$listeners"
          :class="[classes]">
          <div class="notifications__item">
                <div class="notifications__item__avatar" v-if="ImageCount !== 'multiple'" >
                    <img :src="avatar" />
                </div>
              <div class="container-multiple" v-else>
                  <div class=" notifications__item__avatar__multiple" >
                      <div class="notifications__item__avatar__multiple">
                          <img :src="Images[0]"/>
                          <div class="notifications__item__avatar__multiple">
                              <img :src="Images[1]"/>
                          </div>
                      </div>

                  </div>
              </div>

              <div class="notifications__item__content">
                  <span class="notifications__item__title">
                      {{text}}
                  </span>
                  <span class="notifications__item__message">
                            <img :src="icons.image" v-if="icons.image"/>
                            <i :class="icons.icon" v-else></i>
                      <span class="ml-16  notifications__item__message__icon_text">{{actions}}</span>
                      <span class="float-right notifications__item__message__icon_text">{{time}}</span>
                      <slot/>
                  </span>
              </div>

              <div>

              </div>
          </div>
  </component>
</template>

<script>
    export default {
        name: "slaNotyCard",
        props:{
            tag: {
                type: String,
                default: 'div'
            },
            avatar: {
                type: String,
                default:require('@/assets/img/notification.png')
            },
            ImageCount:{
              type:String,
              default:'single',
              required: true,

            },
            Images:{
                type: Array,
                required:true,
            },
            text:{
                type: String,
                default:'Notification Text'
            },
            icons:{
                type: Object,
                required: true,
                validator: (value) => !!value.image || !!value.icon
            },
            actions:{
                type:String,
                default:'Reply'
            },
            time:{
                type:String,
                default:'2d' // this will require moment js tho
            },

        },
        computed:{
            /**
             * @return {string}
             */
            classes(){
                let classes = '';
                classes+= 'notifications';
                return classes.trim();
            }
        },

    }
</script>

<style scoped>

</style>