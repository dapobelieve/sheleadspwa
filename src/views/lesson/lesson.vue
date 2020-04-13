<template>
  <div class="d-flex flex-column">
    <bar
      style="height: 40px"
      class="shadow-3 position-sticky top-0 flex-inline align-items-center bottom-0 z-index-1 bg-white"
    >
      <div @click="goBack" class="truncate text-bold font-poppings mt-12 mb-12">
        <icon size="lg" name="left" />
      </div>
      <div class="d-flex width-100 flex-row justify-content-between">
        <lesson-icons v-for="x in 12" :active="x == 4" :number="x" />
      </div>
    </bar>
    <div>
      <div class="image">
        <img class="width-100 object-cover" :src="image" alt="" />
      </div>
      <div class="title font-poppins text-bold text-white px-12">
        A Step By Step Guide To Starting Your Business
      </div>
    </div>
    <div style="margin-top: 35px" class="mx-16">
      <span class="text-bold">Transcript</span>
      <br />
      <span style="letter-spacing: 0.15px; line-height: 16px">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        molestias eos obcaecati at harum unde libero, iusto quia ratione quaerat
        doloribus optio, incidunt ea sapiente totam earum natus qui saepe ex
        quam quod aperiam! Dolorum voluptatibus, molestias cupiditate est
        asperiores quaerat cum dolores facere nihil velit quo quas, odio, amet
        laboriosam harum quasi animi neque natus? Blanditiis accusantium, ipsum.
        Eius, nesciunt dolor ducimus sequi, recusandae maiores ipsa
        reprehenderit libero porro laborum aut repellendus nam natus culpa a
        aspernatur minus ad, odit molestias. Nesciunt velit autem deleniti
        provident mollitia. Voluptas quam, quia hic reiciendis! Quia est saepe
        quos porro ab magnam laboriosam animi totam architecto. Recusandae
        distinctio sint dolore id, ipsum reprehenderit, ea voluptatem officia
        quidem veritatis rem laborum repellendus delectus ad est autem voluptas
        dolorem veniam praesentium inventore? Veritatis sapiente nisi, impedit
        animi cumque ut vitae, adipisci neque placeat odio consectetur! Modi
        odio, sequi, reiciendis doloremque qui, quo doloribus omnis nam maiores
        nostrum culpa corporis quaerat sunt ab a vero provident obcaecati
        voluptatum, sint? Perferendis repellat maxime consequatur obcaecati,
        numquam repudiandae commodi voluptatum cupiditate. Necessitatibus esse
        facere saepe quibusdam ab. Aliquam repudiandae dolorem, maxime atque
        natus, autem, recusandae illum, molestiae impedit reprehenderit
        voluptate ut voluptatum laborum alias hic tempora non.
      </span>
    </div>
    <router-link to="/">
      <card-block
        class="mb-56 mt-48 mx-24"
        name="eclipse"
        active
        resource="quiz"
        title="Assesment"
      />
    </router-link>
    <sla-button class="mx-56 " type="outline" text="Next" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      course: {
        title: "A Step By Step Guide To Starting Your Business"
      },
      image:
        "https://res.cloudinary.com/rohing/image/upload/q_53/v1585572462/you-x-ventures-Oalh2MojUuk-unsplash_n2ar6n.jpg"
    };
  },
  components: {
    Icon: () => import("@/components/SlaIcon"),
    Bar: () => import("@/components/SlaBar"),
    Card: () => import("@/components/cards/slaCard"),
    CardBlock: () => import("@/components/cards/cardBlock"),
    SlaButton: () => import("@/components/SlaButton"),
    LessonIcons: () => import("@/components/lessonIcons.vue")
  },
  mounted() {
    // window.scrollTo(0, 4)
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
a {
  color: black;
  text-decoration: none;
}
.enrolled {
  .image {
    z-index: -1;
    img {
      height: 200px;
    }
  }

  .title {
    max-width: 192px;
    margin-top: 4rem;
    font-size: 18px;
  }

  .lessoncards {
    margin-top: 80px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
