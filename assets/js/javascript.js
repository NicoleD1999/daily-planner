//grab current date and display on page
$("#currentDay").text(moment().format('dddd, MMMM Do'))
//grab current hour to be able to compare past present and future
var currentTime = moment().hours();
//grab input from text area and store in local storage setItem once save button is clicked
$(".saveBtn").on("click", function(){
var textValue = $(this).siblings(".textarea").val()
var timeKey = $(this).parent().attr("id")
localStorage.setItem(timeKey, textValue)
})
//getItem from local storage
$("#9 .textarea").val(localStorage.getItem("9"))
$("#10 .textarea").val(localStorage.getItem("10"))
$("#11 .textarea").val(localStorage.getItem("11"))
$("#12 .textarea").val(localStorage.getItem("12"))
$("#13 .textarea").val(localStorage.getItem("13"))
$("#14 .textarea").val(localStorage.getItem("14"))
$("#15 .textarea").val(localStorage.getItem("15"))
$("#16 .textarea").val(localStorage.getItem("16"))
$("#17 .textarea").val(localStorage.getItem("17"))
//set textArea's to match time displayed to the left
$(".color-block").each(function(){
    var divHour = $(this).parent().attr("id")
    if (divHour < currentTime){
        $(this).removeClass("present")
        $(this).removeClass("future")
        $(this).addClass("past")
    }
})
//if textarea is is past actual time set class to .past
$(".color-block").each(function(){
    var divHour = $(this).parent().attr("id")
    if (divHour > currentTime){
        $(this).removeClass("present")
        $(this).removeClass("past")
        $(this).addClass("future")
    }
})
//if text area is before actual time set class to .future
//if text area is within the same hour as actual time set class to .present
$(".color-block").each(function(){
    var divHour = $(this).parent().attr("id")
    if (divHour == currentTime){
        $(this).removeClass("future")
        $(this).removeClass("past")
        $(this).addClass("present")
    }
})