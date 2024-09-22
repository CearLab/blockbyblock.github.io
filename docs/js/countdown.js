// Javascript
$(function () {
  var currentDate = new Date();
  var targetDate = new Date("2025/05/18 23:59:59"); // Set your target date here
  var timeDifference = targetDate - currentDate; // Calculate the time difference in milliseconds

  $('.time').countdown(timeDifference + currentDate.valueOf(), function (event) {
    $this = $(this);
    switch (event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span.' + event.type).html(event.value);
        break;
      case "finished":
        $this.fadeTo('slow', .5);
        break;
    }
  });
});
