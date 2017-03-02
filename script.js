
var increment = 1000; //this is the increment between the "seconds hand" ticking (so to speak) in milliseconds
var clearSecondsAt = 60; //this is the amount of times the secondsTimer should increment before clearing and converting to minutes
var timeCounter = 1; //The time displayed increases by the value of timeCounter after the increment has passed
var isClicked = false;


function reset() {
  clearInterval(interval);
  time = 00;
  document.getElementById("seconds").innerHTML = '00';
  isClicked = false;
}



//sets start time for seconds
function timeAtStart(startTime) {
    if (startTime) {
        return startTime;
    } else {
        return 0;
    }
}

var time = timeAtStart();


//counts seconds beginning at startTime

function secondsCounter() {

    time += timeCounter;

    if (time<10){
      document.getElementById("seconds").innerHTML = '0' + time;
    }
    else {
      document.getElementById("seconds").innerHTML = time;
    }

    console.log(time);
    if (time === clearSecondsAt) {
        clearInterval(interval);
    }
}

var interval;

//Invokes secondsCounter to repeat after every increment (i.e. second) until the interval is cleared (after 60 secs)

function secondsCounterRepeat() {
    if(!isClicked){
      interval = setInterval(secondsCounter, increment);
    }
    isClicked = true;
};

function stopButton(){
  clearInterval(interval);
  isClicked = false;
}


//secondsCounterRepeat();
