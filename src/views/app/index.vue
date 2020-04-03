<template>
  <section class="d-flex flex-column justify-content-between">
    <top-bar />
    <div class="flex-grow-1 mb-56">
      <router-view />
    </div>
    <sla-menu />
  </section>
</template>
<script>
export default {
  components: {
    TopBar: () => import("@/components/TopBar"),
    SlaMenu: () => import("@/components/SlaMenu")
  }
};
</script>
