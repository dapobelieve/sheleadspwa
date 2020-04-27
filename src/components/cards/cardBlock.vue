<template>
  <div>
    <div class="cursor-pointer resource-card px-8 py-2">
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-between mt-8">
          <div
            class="smallc flex-inline align-items-center justify-content-center"
          >
            <div v-if="active" class="smallerc bg-primary"></div>
          </div>
          <icon size="lg" name="bookmark" />
        </div>
        <div class="resource-title ml-32">
          <span class="text-bold">{{ title }}</span>
        </div>
        <div class="resource-type text-align-right">
          <icon size="lg" :name="resourceIcon" />
          <span
            style="margin-left: -6px; font-size: 10px"
            class="text-bold text-grey"
            >{{ resource.toUpperCase() }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    resource: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    },
    bookmark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      resources: {
        video: "play",
        quiz: "quiz",
        article: "file",
        audio: "play"
      }
    };
  },
  computed: {
    resourceIcon() {
      return this.resources[this.resource];
    }
  },
  components: {
    Icon: () => import("@/components/SlaIcon.vue")
  }
};
</script>
<style lang="scss" scoped>
.resource-card {
  background-color: #f9f9f9;
  border-radius: 5px;
  border: 1px solid #e9e9e9;
}
.smallc {
  width: 15px;
  height: 15px;
  border: 1px solid color(sla-grey);
  border-radius: 50%;
}

.smallerc {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
</style>
