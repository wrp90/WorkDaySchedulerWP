// Work Day Scheduler

// Global Variables


$(document).ready(function() {
    var date = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(date);
    console.log(date)
})