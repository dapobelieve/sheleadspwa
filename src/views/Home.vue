<template>
  <div class="page-wrapper">
    <sla-button class="text-white" block text="Believe"></sla-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
    SlaButton: () => import("@/components/SlaButton.vue")
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
