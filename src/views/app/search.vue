<template>
  <sla-input  v-model="search" type="text">
  </sla-input>
</template>
<script>
  export default {
    data(){
      return {
        search: null,
      }
    },
    components:{
      SlaInput: ()=> import("@/components/SlaInput")
    }
  }
</script>