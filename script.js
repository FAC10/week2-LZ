
var increment = 100; //this is the increment between the "seconds hand" ticking (so to speak) in milliseconds
var clearSecondsAt = 60; //this is the amount of times the secondsTimer should increment before clearing and converting to minutes
var timeCounter = 1;//The time displayed increases by the value of timeCounter after the increment has passed


function secondsTimer(startTime){

  var time;

  if (startTime){
    time = startTime;
  }
  else {
    time = 0;
  }


  function secondsCounter(){
    time += timeCounter;
    console.log(time);
    if (time === clearSecondsAt) {
      clearInterval(interval);
    }
  }

  var interval = setInterval(secondsCounter, increment);

};

secondsTimer();
