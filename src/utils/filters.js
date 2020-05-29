import Vue from "vue";
import format from "date-fns/format";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import parseISO from "date-fns/parseISO";

Vue.filter("chatTime", value => {
  return format(new Date(value), "h:m aaaa");
});

Vue.filter("fromNow", value => {
  return formatDistanceToNowStrict(new Date(parseISO(value)), { addSuffix: true, unit: "hour" });
});

Vue.filter("ordinalSuffix", i => {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
});
