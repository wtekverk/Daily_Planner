//Makes html fully load before JS starts 
$(document).ready(function () {

    // todays date information      month day year
    var todaysDate = moment().format('MMM, Do YYYY');
    $("#currentDay").html(todaysDate);


    //EVENT LISTENER 
    $(".saveBtn").on("click", function () {

        //
        var time = $(this).attr("id").split("-")[0]

        var userInfo = $("#" + time + "-text").val()

        console.log(time, userInfo)

        localStorage.setItem(time, userInfo)
    })

    var hour = moment().hour()

    for (var i = 7; i <= 20; i++) {


        $("#" + i + "-text").val(localStorage.getItem(i))
        if (i < hour) {
            $("#" + i + "-text").addClass("past")
        } else if (i === hour) {
            $("#" + i + "-text").addClass("present")
        } else {
            $("#" + i + "-text").addClass("future")
        }


    }


    // function hourCheck() {

    //     var hour = moment().hour(); // Number


    //     $("textarea").each(function () {


    //         var time = parseInt($(this).attr("id").split("-")[0])
    //         var text = "#" + time + "-text";

    //         if (hour > time) {
    //             $(text).attr("class", "past")
    //         } else if (hour == time) {
    //             $(text).attr("class", "present")
    //         } else {
    //             $(text).attr("class", "future")
    //         }

    //         console.log(text)

    //     })


    // }


    // hourCheck()



})