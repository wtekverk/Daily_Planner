//Makes html fully load before JS starts 
$(document).ready(function () {

    // todays date information      month day year
    var todaysDate = moment().format('MMM, Do YYYY');
    $("#currentDay").html(todaysDate);


    //EVENT LISTENER 
    $(".saveBtn").on("click", function () {

        //
        var time = $(this).attr("id").split("-")[0]
console.log(this)
        var userInfo = $("#" + time + "-text").val()

        console.log(time, userInfo)

        localStorage.setItem(time, userInfo)
    })


    // connecting moment.js with this variable
    var hour = moment().hour()

// i represents the hours between 7am and 
    for (var i = 7; i <= 20; i++) {

        //retrieves stored items from each time
        $("#" + i + "-text").val(localStorage.getItem(i))

        //this sets the classes by time which determine the color of the text field 
        if (i < hour) {
            $("#" + i + "-text").addClass("past")
        } else if (i === hour) {
            $("#" + i + "-text").addClass("present")
        } else {
            $("#" + i + "-text").addClass("future")
        }


    }


})