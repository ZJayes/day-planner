var todaysDate = document.getElementById("todaysDate")
var todaysTime = document.getElementById("todaysTime") 
var rightNow = moment().format('LL');
var theTime = moment().format('LT');

var todaysHour = theTime.split(":")[0]

var everyhour = ["9","10","11","12","1","2","3","4","5"]

todaysDate.textContent = rightNow
todaysTime.textContent = theTime

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