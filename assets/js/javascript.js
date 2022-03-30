//grab current date and display on page
$("#currentDay").text(moment().format('dddd, MMMM Do'))
//grab current hour to be able to compare past present and future
//(hours are set to variables and range from 0 to 23 to be able to distinguish between AM & PM)
var currentTime = moment().hours();
//Add event listener to save button
$(".saveBtn").on("click", function(){
//grab input from <textarea> and set as the value in local storage
var textValue = $(this).siblings(".color-block").val()
//grab input from <id>, set as key  in local storage to be called on later to get item from local storage
var timeKey = $(this).parent().attr("id")
//store in local storage
localStorage.setItem(timeKey, textValue)
})
//getItem from local storage and display within text area
$("#9 .color-block").val(localStorage.getItem("9"))
$("#10 .color-block").val(localStorage.getItem("10"))
$("#11 .color-block").val(localStorage.getItem("11"))
$("#12 .color-block").val(localStorage.getItem("12"))
$("#13 .color-block").val(localStorage.getItem("13"))
$("#14 .color-block").val(localStorage.getItem("14"))
$("#15 .color-block").val(localStorage.getItem("15"))
$("#16 .color-block").val(localStorage.getItem("16"))
$("#17 .color-block").val(localStorage.getItem("17"))
//call <textarea>
$(".color-block").each(function(){
    //create variable for if statement to match number in id
    var divHour = $(this).parent().attr("id")
    //if variable is past actual time set class to .past
    if (divHour < currentTime){
        //remove other classes from <textarea>
        $(this).removeClass("present")
        $(this).removeClass("future")
        // add class past to <textarea>
        $(this).addClass("past")
    }
})
//call <textarea>
$(".color-block").each(function(){
    //create variable for if statement to match number in id
    var divHour = $(this).parent().attr("id")
    //if text area is within the same hour as actual time set class to .present
    if (divHour == currentTime){
        //remove other classes from <textarea>
        $(this).removeClass("future")
        $(this).removeClass("past")
        // add class present to <textarea>
        $(this).addClass("present")
    }
})

//call <textarea>
$(".color-block").each(function(){
    //create variable for if statement to match number in id
    var divHour = $(this).parent().attr("id")
    //if text area is before actual time set class to .future
    if (divHour > currentTime){
        //remove other classes from <textarea>
        $(this).removeClass("present")
        $(this).removeClass("past")
        // add class future to <textarea>
        $(this).addClass("future")
    }
})
