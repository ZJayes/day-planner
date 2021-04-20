var currentDay = document.getElementById("currentDay")
var currentTime = document.getElementById("currentTime")
var theDay = moment().format('dddd');  
var rightNow = moment().format('LL');
var theTime = moment().format('LT');

var timeSplit = theTime.split(":")[0]

var everyHour = ["9","10","11","12","1","2","3","4","5"]

currentDay.textContent = rightNow
currentTime.textContent = theTime

var nine = $("#9AM")
var ten = $("#10AM")
var eleven = $("#11AM")
var twelve = $("#12PM")
var one = $("#1PM")
var two = $("#2PM")
var three = $("#3PM")
var four = $("#4PM")
var five = $("#5PM")

var scheduleSubmits = [nine, ten, eleven, twelve, one, two, three, four, five]

$(".saveBtn").on("click", function(event){
   
    event.preventDefault()
    
    for (var i = 0; i < scheduleSubmits.length; i++){
        localStorage.setItem(scheduleSubmits[i].attr("id"),scheduleSubmits[i].val())
    }
});
    for (var i = 0; i < scheduleSubmits.length; i++){
        scheduleSubmits[i].val(localStorage.getItem(scheduleSubmits[i].attr("id")))
    }
    
    function colors (){
        var currentTimeSlot = false;
        for (var i = 0; i < everyHour.length; i++){
            if (timeSplit !== everyHour[i] && currentTimeSlot === true){
                document.getElementById(everyHour[i]).firstElementChild.nextElementSibling.className += " later"
            }
            else if (timeSplit === everyHour[i]){
                currentTimeSlot = true;
                document.getElementById(everyHour[i]).firstElementChild.nextElementSibling.className += " now"
            }
            else {
                document.getElementById(everyHour[i]).firstElementChild.nextElementSibling.className += " earlier"
            }
        }
    }
    colors ()
    



