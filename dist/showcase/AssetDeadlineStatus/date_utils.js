export var getStringFromDate = function getStringFromDate(deadline) {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return deadline.toLocaleDateString('en-EN', options);
};
export var getRemainingTime = function getRemainingTime(deadline) {
  var nowTimestamp = Date.parse(new Date());
  var deadlineTimestamp = Date.parse(deadline); // get total seconds between the times for further calculation

  var totalSeconds = Math.abs(deadlineTimestamp - nowTimestamp) / 1000; // get whole days and subtract from total_seconds

  var days = Math.floor(totalSeconds / 86400);
  totalSeconds -= days * 86400; // get whole hours

  var hours = Math.floor(totalSeconds / 3600) % 24;
  return "".concat(days, " days and ").concat(hours, " hours to go");
};