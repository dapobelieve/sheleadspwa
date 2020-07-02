import Vue from "vue";
import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
import parseISO from "date-fns/parseISO";
import isPast from "date-fns/isPast";
import isBefore from "date-fns/isBefore";

Vue.filter("chatTime", value => {
  // console.log(value, isPast(parseISO(value)));

  // console.log(isBefore(parseISO(value), Date.now))

  return format(new Date(value), "MMM do @ h:m aaaa");
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
