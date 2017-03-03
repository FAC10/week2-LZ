
// GLOBAL VARIABLES

var increment = 1000; //this is the increment between the "seconds hand" ticking (so to speak) in milliseconds
var clearSecondsAt = 60; //this is the amount of times the secondsTimer should increment before clearing and converting to minutes
var timeCounter = 1; //The time displayed increases by the value of timeCounter after the increment has passed
var isClicked = false; // This ensures that the start button does not trigger its function multiple times if clicked repeatedly
var interval; // We declare interval as a valueless var here so that multiple functions can access it
var time = timeAtStart(); //This is the global variable that we mutate for seconds
var minutes = 0; // "" for minutes instead of secs

// RESET BUTTON

function reset() {
  clearInterval(interval);
  time = 0;
  document.getElementById("seconds").innerHTML = '00';
  minutes = 0;
  document.getElementById("minutes").innerHTML = '00';

  isClicked = false;
}

// SET START TIME

function timeAtStart(startTime) {
    if (startTime) {
        return startTime;
    } else {
        return 0;
    }
}

// COUNT SECONDS

function secondsCounter() {

    time += timeCounter;

    var htmlSeconds = document.getElementById("seconds");
    //var htmlMinutes = document.getElementById("minutes");

    if (time % clearSecondsAt === 0) {
      //  clearInterval(interval);
      time = 0;
      minutesCounter();
    }

    //this if statement is here so our tests run properly. since the "seconds" element won't exist in the qunit html it throws an error without this if statement
    if(htmlSeconds){

      if (time<10){
        htmlSeconds.innerHTML = '0' + time;
      }
      else {
        htmlSeconds.innerHTML = time;
      }
    }
}

// COUNT MINUTES

function minutesCounter() {
  var htmlMinutes = document.getElementById("minutes");
  minutes++;
  if (minutes < 10){
    htmlMinutes.innerHTML = "0" + minutes;
  }

  else {htmlMinutes.innerHTML = minutes;}

  if (minutes === 20){
    reset();
  }
}

//START BUTTON
//Invokes secondsCounter to repeat after every increment (i.e. second) until the interval is cleared (after 60 secs)

function startButton() {
    if(!isClicked){
      interval = setInterval(secondsCounter, increment);
    }
    isClicked = true;
};

// STOP BUTTON

function stopButton(){
  clearInterval(interval);
  isClicked = false;
}

// Create a function which returns what number of seconds we are on

function tellTime(){
  return time;
}

//Event Listeners for click to trigger functions

var startMe = document.getElementById("timebox__start");
  startMe.addEventListener("click", startButton);

var stopMe = document.getElementById("timebox__stop");
  stopMe.addEventListener("click", stopButton);

var resetMe = document.getElementById("timebox__reset");
  resetMe.addEventListener("click", reset);
