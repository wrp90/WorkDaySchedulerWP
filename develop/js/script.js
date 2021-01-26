// Work Day Scheduler

// Global Variables
var textArea = $("textarea").val();
var hour = $(".hour").text();


// Date
var date = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(date);


$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var textArea = 	$("textarea").val();
        var hour = $(".hour").text();
        localStorage.setItem(textArea, hour);
    })
    
    $("#textarea9am").val(localStorage.getItem($("textarea").val(), hour));
})




// function showStorage() {
//     $("textarea").append(localStorage.getItem(textArea, hour))
// }
