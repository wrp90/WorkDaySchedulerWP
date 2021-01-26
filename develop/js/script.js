// Work Day Scheduler

// Global Variables


// Date
var date = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(date);


$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var textArea = 	$("textarea").val();
        var hour = $(".hour").text();
        console.log(hour)

        localStorage.setItem(textArea, hour);
    })
})