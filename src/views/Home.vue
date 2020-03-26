<template>
  <div class="page-wrapper">
    <sla-button class="text-primary" type="outline" block text="Believe"></sla-button>
    <sla-input @keyup="doer" v-model="email" type="text"></sla-input>    
    <sla-interest name="money">
      <template #caption>
        Growing my money
      </template>
    </sla-interest>
    <div>
      <sla-interest name="pro">
      <template #caption>
        Climbing the professional ladder
      </template>
    </sla-interest>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <sla-top-bar>
      <div style="height: 57px;" class="d-flex align-items-center justify-content-between mx-8">
        <sla-avatar size="md" :user="{name: 'Dapo'}"></sla-avatar>
        <sla-logo></sla-logo>
        <sla-avatar size="md" :user="{name: 'Dapo'}"></sla-avatar>
      </div>
    </sla-top-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      email: null
    }
  },
  methods: {
    doer() {
      console.log("Doer")
    }
  },
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle']),
  components: {
    SlaButton: () => import("@/components/SlaButton.vue"),
    SlaInput: () => import("@/components/SlaInput.vue"),
    SlaInterest: () => import("@/components/SlaInterest.vue"),
    SlaTopBar: () => import("@/components/SlaTopBar.vue"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    SlaLogo: () => import("@/components/logo/sla")
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

// .page-wrapper {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .home-page-title {
//     text-align: center;
//   }
// }
</style>
