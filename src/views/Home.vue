<template>
  <div>
    <sla-button class="text-primary" type="outline" block text="Believe"></sla-button>
    <sla-input @keyup="doer" v-model="email" type="text"></sla-input>    
    <div  class="d-flex justify-content-between overflow-x-auto">
      <interest>
        <template>
          <img src="@/assets/icons/money.png" alt="">
        </template>
        <template #caption>
          Growing my money
        </template>
      </interest>
      <interest>
        <template>
          <img src="@/assets/icons/pro.png" alt="">
        </template>
        <template #caption>
          Growing my professional career
        </template>
      </interest>
      <interest>
        <template>
          <img src="@/assets/icons/life.png" alt="">
        </template>
        <template #caption>
          Growing my money
        </template>
      </interest>
      <interest>
        <template>
          <img src="@/assets/icons/network.png" alt="">
        </template>
        <template #caption>
          Growing my money
        </template>
      </interest>
      <interest>
        <template>
          <img src="@/assets/logo.png" alt="">
        </template>
        <template #caption>
          Climbing the  ladder
        </template>
      </interest>
    </div>
    <sla-top-bar>
      <div style="height: 57px;" class="d-flex align-items-center justify-content-between mx-8">
        <sla-avatar size="md" :user="{name: 'Dapo'}"></sla-avatar>
        <img src="@/assets/logo.png" alt="">
        <sla-avatar size="md" :user="{name: 'Dapo'}"></sla-avatar>
      </div>
    </sla-top-bar>
    <card class="bg-success ">
      <img class="card-img-top" src="https://images.unsplash.com/photo-1445452916036-9022dfd33aa8?auto=format&fit=crop&w=1053&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D">
    </card>
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
    interest: () => import("@/components/SlaInterest.vue"),
    SlaTopBar: () => import("@/components/SlaTopBar.vue"),
    SlaAvatar: () => import("@/components/SlaAvatar.vue"),
    card: () => import("@/components/cards/SlaCard.vue"),
  }
}
</script>

<style lang="scss">
// @import '@/theme/variables.scss';

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
