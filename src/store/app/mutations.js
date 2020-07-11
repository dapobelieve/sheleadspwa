export default {
  setNetworkOnline: (state, value) => (state.networkOnLine = value),
  setSWRegistrationForNewContent(state, value) {
    alert("setSWRegistrationForNewContent", value);
    state.SWRegistrationForNewContent = value;
  },
  setShowAddToHomeScreenModalForApple: (state, value) => (state.showAddToHomeScreenModalForApple = value),
  setRefreshingApp: (state, value) => (state.refreshingApp = value)
};
