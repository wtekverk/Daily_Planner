
//EVENT LISTENER 

$(".saveBtn").on("click", function() {


    var time = $(this).attr("id").split("-")[0]

    var userInfo = $("#" + time + "-text").val()

    console.log(time,userInfo)
    
    localStorage.setItem(time, userInfo)
})