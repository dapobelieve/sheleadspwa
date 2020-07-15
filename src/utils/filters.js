import Vue from "vue";
import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
import parseISO from "date-fns/parseISO";
import isSameDay from "date-fns/isSameDay";

Vue.filter("chatTime", value => {
  // return value
  if (isSameDay(parseISO(value), Date.now())) {
    return `${formatDistance(new Date(value), Date.now(), { includeSeconds: true })} ago`;
  } else {
    return format(new Date(value), "MMM do, uuuu, h:m a");
  }
});

Vue.filter("notifyTime", value => {
  // return value
  if (isSameDay(parseISO(value), Date.now())) {
    return `${formatDistance(new Date(value), Date.now(), { includeSeconds: true })} ago`;
  } else {
    return format(new Date(value), "MMM do, uuuu, h:m a");
  }
});

Vue.filter("fromNow", value => {
  return formatDistance(new Date(value), Date.now(), { includeSeconds: true });
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
