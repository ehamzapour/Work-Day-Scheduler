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

            if(timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    
})
