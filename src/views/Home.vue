<template>
  <div class="m-8">
    <top-bar></top-bar>
    <p>
      lorem2000
    </p>
    <sla-button class="text-primary" type="outline" block text="Believe"></sla-button>
    <br>
    <br>
    <br>
    <br>
    <sla-input @keyup="doer" v-model="email" type="text"></sla-input>    
    <div  class="d-flex justify-content-between overflow-x-auto">
      <interest name="money">
        <template #caption>
          Growing my money
        </template>
      </interest>
    </div>    
    <sla-select v-model="select" :items="items"></sla-select>
    <sla-menu></sla-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      items: [
        {
          text: "Summer",
          value: "summer"
        },
        {
          text: "Winter",
          value: "winter"
        },
        {
          text: "Autum",
          value: "autum"
        },
        {
          text: "Spring",
          value: "spring"
        }
      ],
      select: "",
      email: null
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
    TopBar: () => import("@/components/TopBar"),
    Menu: () => import("@/components/SlaMenu"),
    SlaButton: () => import("@/components/SlaButton"),
    SlaSelect: () => import("@/components/SlaSelect"),
    SlaInput: () => import("@/components/SlaInput"),
    interest: () => import("@/components/SlaInterest"),
    SlaTopBar: () => import("@/components/TopBar"),
    SlaMenu: () => import("@/components/SlaMenu")
  }
}
</script>
