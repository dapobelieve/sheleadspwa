import Vue from "vue";
import { format, distanceInWordsToNow } from "date-fns";

Vue.filter("chatTime", value => {
  return format(value, "h:m aaaa");
});
