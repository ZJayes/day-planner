var todaysDate = document.getElementById("todaysDate")
var todaysTime = document.getElementById("todaysTime") 
var rightNow = moment().format('LL');
var theTime = moment().format('LT');

var todaysHour = theTime.split(":")[0]

var everyhour = ["9","10","11","12","1","2","3","4","5"]

todaysDate.textContent = rightNow
todaysTime.textContent = theTime