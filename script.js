
var increment = 1000; //this is the increment between the "seconds hand" ticking (so to speak) in milliseconds
var clearSecondsAt = 60; //this is the amount of times the secondsTimer should increment before clearing and converting to minutes
var timeCounter = 1;//The time displayed increases by the value of timeCounter after the increment has passed


//sets start time for seconds
function timeAtStart(startTime){
  if (startTime){
    return startTime;
  }
  else {
    return 0;
  }
}

var time = timeAtStart();

function secondsCounter(){
  time += timeCounter;
  console.log(time);
  if (time === clearSecondsAt) {
    clearInterval(interval);
  }
}

var interval;

function secondsCounterRepeat(){
  interval = setInterval(secondsCounter, increment);
};

// function testSecondsCounterRepeat(){
//   console.log(time);
//   return time;
// }

secondsCounterRepeat();
// secondsCounter();
