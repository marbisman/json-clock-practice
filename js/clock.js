
window.onload = function(){

// We'll use the object constructor to build it, Our clock should:
// -have some properties: hours, minutes, seconds, and meridian
// -have some logic to display 12 hour foemat
//  -be dynamic. We want to see the clock tick as we stare at the page!
// hh:mm:ss a/m/pm

//Hours and Minutes configuration
//12 hours clock using AM and PM meridians
//the clock should have exactly 4 2-digit sections: HH:MM:aa Am/new Promise(function(resolve, reject) {

function Clock(){
  //creat a new Date object
  var currentDate = new Date();
  // set a propety for Date.getHours()
  this.hours = currentDate.getHours();
  //set a property for Date.getMinutes()
  this.minutes = currentDate.getMinutes();
  //set a property for Date.getSeconds()
  this.seconds = currentDate.getSeconds();
  //set a property meridium with value "AM"
  this.meridium = "AM";

//If hours is great than 12
//1300 = 1pm, there hours - 12 will give us the right time
if (this.hours >= 12){
  this.hours = this.hours - 12;
  this.meridium = 'PM';
}

//if this hours is 0 then clock should display 12
if (this.hours == 0){
  this.hours = 12;
}

//if the hours digit is less than 10, add 0 (ex. 9 becomes 09)
if (this.hours < 10){
  this.hours = "0" + this.hours;
}

//format minutes and seconds the same way (ex 2 min becomes )
if (this.minutes < 10){
  this.minutes = "0" + this.minutes;
}
if (this.seconds < 10){
  this.seconds = "0" + this.seconds;
}
//get the clock div in our HTML
var div = document.getElementById ('clock');

//Then we set the text inside the clock div
//to hours, minutes, and seconds
div.innerHTML = this.hours + ":" + this.minutes + ":" + this.seconds + " " + this.meridium;
}

//Instantiate a clock
var clock = new Clock();

//This makes our clock 'tick' by repeatedly
//running the clock function every second
setInterval(Clock,1000);

};
