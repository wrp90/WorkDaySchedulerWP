// Work Day Scheduler

// Global Variables
var textArea9am = $("textarea9am").val();
var hour = $(".hour").text();

// Date
var date = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(date);


$(document).ready(function () {
    $("#saveBtn9am").on("click", function () {
        var textArea9am = $("#textarea9am").val();
        var hour9 = $("#hour9").text();
        localStorage.setItem(hour9, textArea9am);
    });
    $("#textarea9am").val(localStorage.getItem("09:00 AM"));

});





