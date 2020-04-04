export default function({ store, next, router }) {
  if (typeof store.state.user.data.business_location == 'undefined' || store.state.user.data.business_location.length == 0 ) {
    router.replace({
      name: "info"
    });
  } else if (
    typeof store.state.user.data.intrests != "string" ||
    store.state.user.data.intrests == ""
  ) {
    router.replace({
      name: "interests"
    });
  } else if (
    !store.state.user.data.industry ||
    store.state.user.data.industry == ""
  ) {
    router.replace({
      name: "industry"
    });
  }

  next();
}
