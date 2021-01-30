//EVENT LISTENER 
$(document).ready(function () {


    $(".saveBtn").on("click", function () {


        var time = $(this).attr("id").split("-")[0]

        var userInfo = $("#" + time + "-text").val()

        console.log(time, userInfo)

        localStorage.setItem(time, userInfo)



    })


    function hourCheck() {

        var hour = moment().hour(); // Number


        $("textarea").each(function () {

            
            var time = parseInt($(this).attr("id").split("-")[0])
            var text = "#" + time + "-text";
            

            if (hour > time) {
                $(text).attr("class", "past")
            } else if (hour == time) {
                $(text).attr("class", "present")
            } else {
                $(text).attr("class", "future")
            }

            console.log(text)

        })


    }


hourCheck()



})