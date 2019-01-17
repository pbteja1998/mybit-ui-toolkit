import dayjs from 'dayjs';

var getTimeAgo = function getTimeAgo(time) {
  var creationTime = dayjs(time);
  var now = dayjs(new Date().getTime());
  var miliseconds = now.diff(creationTime);
  var hours = miliseconds / 3600000;
  var toReturn = '';

  if (hours < 0.5) {
    toReturn = 'past 30 minutes';
  } else if (hours < 1) {
    toReturn = 'past hour';
  } else if (hours < 24) {
    var hoursAux = hours.toFixed(0);
    var hoursText = hoursAux === 1 ? 'hour' : 'hours';
    toReturn = "".concat(hoursAux, " ").concat(hoursText, " ago");
  } else if (hours < 24 * 31) {
    var days = hours / 24;
    var daysAux = days.toFixed(0);
    var daysText = daysAux === 1 ? 'day' : 'days';
    toReturn = "".concat(daysAux, " ").concat(daysText, " ago");
  } else if (hours < 24 * 31 * 5) {
    var months = hours / (24 * 31);
    var monthsAux = months.toFixed(0);
    var monthsText = monthsAux === 1 ? 'month' : 'months';
    toReturn = "".concat(monthsAux, " ").concat(monthsText, " ago");
  } else if (hours < 24 * 31 * 12) {
    toReturn = 'Over 6 months ago';
  } else {
    toReturn = dayjs(time).format('YYYY-MM-DD');
  }

  return toReturn;
};

export default getTimeAgo;