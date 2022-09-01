//Today's date
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

$(document).ready(function(){
    //save button click listener
    $(".saveBtn").on("click", function() {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        // save text in local storage
        localStorage.setItem(time,text);
    })

    function timeTracker() {
        var currentTime = moment().hour();

        // loop over time blocks
        $(".time-block").each(function() { 
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            //add the classes for background indicators
            if(timeBlock < currentTime) {
                $(this).addClass("future");
            }
            else if (timeBlock === currentTime) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("past");
            }
        })
    }

    // local storage
    $("#hour9.description").val(localStorage.getItem("hour9"));
    $("#hour10.description").val(localStorage.getItem("hour10"));
    $("#hour11.description").val(localStorage.getItem("hour11"));
    $("#hour12.description").val(localStorage.getItem("hour12"));
    $("#hour1.description").val(localStorage.getItem("hour1"));
    $("#hour2.description").val(localStorage.getItem("hour2"));
    $("#hour3.description").val(localStorage.getItem("hour3"));
    $("#hour4.description").val(localStorage.getItem("hour4"));
    $("#hour5.description").val(localStorage.getItem("hour5"));

    timeTracker();
})
