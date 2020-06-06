<template>
  <div class="messages d-flex flex-column">
    <top heading="Help" />
    <div class=" position-relative">
      <div ref="header" class="d-flex mt-32 mb-24">
        <div ref="tab-new" class="text-align-center d-flex flex-grow-1 justify-content-center" @click="setActiveTab('new')">New Ticket</div>
        <div ref="tab-my" class="text-align-center d-flex flex-grow-1 justify-content-center" @click="setActiveTab('my')">My Tickets</div>
      </div>
      <span ref="active-bar" class="active-tab position-absolute"></span>
      <div class="line-thin"></div>
    </div>
    <div class="mx-12 mt-12">
      <div v-if="activeTab === 'new'" class="d-flex flex-column justify-content-around">
        <div class="text-grey mb-24">Feedback or Complaint</div>
        <textarea v-model="feedback" class="mb-24 feedback"></textarea>
        <sla-button @click="feedbackForm" text="submit ticket" />
      </div>
      <div v-else>
        <div v-if="tickets.length > 0">
          <div class="ticket">
            <h6>#23456</h6>
            <div class="question mt-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et commodi neque iusto, veritatis facilis, beatae aperiam facere quas culpa. Provident ab, totam! Enim illum, modi quas
              animi!uod vero, illo voluptatum a, natus maiores, nostrum ipsum repellat. Nulla sed, ex distinctio atque neque laborum?
            </div>
          </div>
        </div>
        <empty-state v-else size="big" message="You have no ticket yet" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      tickets: [],
      feedback: "",
      tabBarPosition: {},
      activeTab: "my",
      btn: {
        text: "continue",
        loading: false
      }
    };
  },
  watch: {
    activeTab: function() {
      this.resetTabBar();
    }
  },
  components: {
    SlaInput: () => import("@/components/SlaInput"),
    SlaButton: () => import("@/components/SlaButton"),
    Icon: () => import("@/components/SlaIcon"),
    top: () => import("@/components/top"),
    emptyState: () => import("@/components/emptyState"),
    MessageCard: () => import("@/components/cards/messageCard.vue")
  },
  computed: {
    ...mapGetters(["getGroups"])
  },
  methods: {
    ...mapActions(["sendFeedback"]),
    async feedbackForm() {
      if (this.feedback == "") {
        alert("Cannot send empty ticket");
        return;
      }

      await this.sendFeedback({
        feedback: this.feedback
      });

      alert("Help ticket sent");
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    ...mapActions(["allGroups"]),
    resetTabBar() {
      this.$refs["active-bar"].style.left = this.tabBarPosition[`tab-${this.activeTab}`].left + "px";
      this.$refs["active-bar"].style.width = this.tabBarPosition[`tab-${this.activeTab}`].width + "px";
    },
    goChat(id) {
      this.$router.push({
        name: "chat",
        params: {
          id
        }
      });
    }
  },
  mounted() {
    let widthSum = 0;
    for (let ref in this.$refs) {
      if (ref.indexOf("tab") > -1) {
        widthSum += this.$refs[ref].offsetWidth;
      }
    }

    let spaceFromLeft = this.$refs["header"].offsetWidth - widthSum;

    widthSum = 0;

    for (let ref in this.$refs) {
      if (ref.indexOf("tab") > -1) {
        let width = this.$refs[ref].offsetWidth;
        widthSum += width;
        this.tabBarPosition[ref] = {
          width: width,
          left: widthSum - width
        };
      }
    }
    this.resetTabBar();
    this.allGroups();
  }
};
</script>
<style lang="scss" scoped>
.ticket {
  h6 {
    font-size: 9px !important;
  }
  .question {
    border: 1px solid #f4f4f4;
    padding: 2px 4px 2px 9px;
    text-justify: inter-word;
  }
}
textarea {
  border-radius: 5px;
  resize: none;
  padding: 10px;
  height: 220px;
  border: 1px solid #f4f4f4;
  font-family: "Open sans";
  &:focus {
    outline: none;
  }
}
.active-tab {
  width: 12px;
  transition: all 0.3s ease-in-out;
  height: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  bottom: 0;
  background-color: color(bv-primary);
}
a {
  color: none;
}
</style>
