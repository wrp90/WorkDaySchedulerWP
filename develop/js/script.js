// Work Day Scheduler

// Global Variables
var textArea9am = $("textarea9am").val();
var hourNow = moment().hour('H');
var hour = $(".hour").text();

// Date
var date = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(date);

// function on page load that saves each slot's text to local storage,
// then is displayed by the line after
$(document).ready(function () {
    $("#saveBtn9am").on("click", function () {
        var textArea9am = $("#textarea9am").val();
        var hour9 = $("#hour9").text();
        localStorage.setItem(hour9, textArea9am);
    });
    $("#textarea9am").val(localStorage.getItem("09:00 AM"));

    $("#saveBtn10am").on("click", function () {
        var textArea10am = $("#textarea10am").val();
        var hour10 = $("#hour10").text();
        localStorage.setItem(hour10, textArea10am);
    });
    $("#textarea10am").val(localStorage.getItem("10:00 AM"));

    $("#saveBtn11am").on("click", function () {
        var textArea11am = $("#textarea11am").val();
        var hour11 = $("#hour11").text();
        localStorage.setItem(hour11, textArea11am);
    });
    $("#textarea11am").val(localStorage.getItem("11:00 AM"));

    $("#saveBtn12pm").on("click", function () {
        var textArea12pm = $("#textarea12pm").val();
        var hour12 = $("#hour12").text();
        localStorage.setItem(hour12, textArea12pm);
    });
    $("#textarea12pm").val(localStorage.getItem("12:00 PM"));
    
    $("#saveBtn1pm").on("click", function () {
        var textArea1pm = $("#textarea1pm").val();
        var hour1 = $("#hour1").text();
        localStorage.setItem(hour1, textArea1pm);
    });
    $("#textarea1pm").val(localStorage.getItem("01:00 PM"));

    $("#saveBtn2pm").on("click", function () {
        var textArea2pm = $("#textarea2pm").val();
        var hour2 = $("#hour2").text();
        localStorage.setItem(hour2, textArea2pm);
    });
    $("#textarea2pm").val(localStorage.getItem("02:00 PM"));

    $("#saveBtn3pm").on("click", function () {
        var textArea3pm = $("#textarea3pm").val();
        var hour3 = $("#hour3").text();
        localStorage.setItem(hour3, textArea3pm);
    });
    $("#textarea3pm").val(localStorage.getItem("03:00 PM"));

    $("#saveBtn4pm").on("click", function () {
        var textArea4pm = $("#textarea4pm").val();
        var hour4 = $("#hour4").text();
        localStorage.setItem(hour4, textArea4pm);
    });
    $("#textarea4pm").val(localStorage.getItem("04:00 PM"));

    $("#saveBtn5pm").on("click", function () {
        var textArea5pm = $("#textarea5pm").val();
        var hour5 = $("#hour5").text();
        localStorage.setItem(hour5, textArea5pm);
    });
    $("#textarea5pm").val(localStorage.getItem("05:00 PM"));

    function colorCode() {
        // console.log('go')
        debugger;
        // get current hour of day
        var currentHour = moment().hour();
        var amOrpm;
        // for each of the slots
        for (var slotHour = 9; slotHour < 18; slotHour++ ) {
            // convert 24hr time to 12hr time
            var standardHour;
            if (slotHour === 12) {
                standardHour = slotHour;
                amOrpm = 'pm'
            } else if (slotHour > 12)  {
                standardHour = slotHour - 12;
                amOrpm = 'pm'
            } else if (slotHour < 12)  {
                standardHour = slotHour;
                amOrpm = 'am'
            }
            // create a selector to use that matches the html id
            var htmlElementId = '#textarea' +  standardHour + amOrpm; 

            // change color
            if (slotHour < currentHour) {
                // reach into the html and grab the slot that matches slot hour
                // give it a class of gray
                $(htmlElementId).addClass('past')
            } else if (slotHour > currentHour) {
                // reach into the html and grab the slot that matches slot hour
                // give it a class of green
                $(htmlElementId).addClass('future')
            } else if (slotHour === currentHour) {
                // reach into the html and grab the slot that matches slot hour
                // give it a class of red
                $(htmlElementId).addClass('present')
            }
        }
    }

    colorCode();
});





