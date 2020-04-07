<template>
  <div class=" d-flex flex-column justify-content-between ">
    <search-input
      placeholder="Search for courses and events "
      :clear="cancel"
      v-model="search"
      type="text"
      @keyup="handleInput"
    >
    </search-input>
    <div class="p-24" v-if="recent">
      <p class="text-bold  text-grey-500 ">RECENT SEARCHES</p>
      <p>
        <icon size="lg" name="recent" />
        <span class="text-grey-500">how to grow your audience</span>
      </p>
      <p>
        <icon size="lg" name="recent" />
        <span class="text-grey-500">Becoming Your Own Boss</span>
      </p>
    </div>

    <div v-if="!recent">
      <div class="d-flex flex-column">
        <div class="d-flex flex-row flex-grow-1 p-12">
          <img class="search-image" src="@/assets/img/course.png" />
          <span class="ml-24 text-bold">
            A Step By Step Guide To Starting Your Business
          </span>
        </div>
        <div class="hr m-24"></div>
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex flex-row flex-grow-1 p-12">
          <img class="search-image" src="@/assets/img/course.png" />
          <span class="ml-24 text-bold">
            A Step By Step Guide To Starting Your Business
          </span>
        </div>
        <div class="hr m-24"></div>
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex flex-row flex-grow-1 p-12">
          <img class="search-image" src="@/assets/img/course.png" />
          <span class="ml-24 text-bold">
            A Step By Step Guide To Starting Your Business
          </span>
        </div>
        <div class="hr m-24"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      cancel: false,
      recent: true
    };
  },
  components: {
    searchInput: () => import("@/components/searchInput"),
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar")
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    handleInput() {
      // this.cancel = true;
      this.search === "" ? (this.cancel = false) : (this.cancel = true);
      this.search === "" ? (this.recent = true) : (this.recent = false);
    }
  }
};
</script>

<style scoped>
.pass {
  margin-top: 40px;
}
.search-image {
  width: 67px;
  height: 67px;
  background: #c4c4c4;
  border-radius: 10px;
}
</style>
