
// GLOBAL VARIABLES

var increment = 1000; //this is the increment between the "seconds hand" ticking (so to speak) in milliseconds
var clearSecondsAt = 60; //this is the amount of times the secondsTimer should increment before clearing and converting to minutes
var timeCounter = 1; //The time displayed increases by the value of timeCounter after the increment has passed
var isClicked = false; // This ensures that the start button does not trigger its function multiple times if clicked repeatedly


// RESET BUTTON

function reset() {
  clearInterval(interval);
  time = 00;
  document.getElementById("seconds").innerHTML = '00';
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

var time = timeAtStart();


// COUNT SECONDS

function secondsCounter() {

    time += timeCounter;

    var htmlSeconds = document.getElementById("seconds");

    //this if statement is here so our tests run properly. since the "seconds" element won't exist in the qunit html it throws an error without this if statement
    if(htmlSeconds){
      if (time<10){
        htmlSeconds.innerHTML = '0' + time;
      }
      else {
        htmlSeconds.innerHTML = time;
      }
    }
    console.log(time);
    if (time === clearSecondsAt) {
        clearInterval(interval);
    }
}

var interval;


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
