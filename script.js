


function secondsTimer(n){
  if(n){
    return n;
  }
  return 0;

}

var increment = 1000; //this is the increment between the "seconds hand" ticking (so to speak) in milliseconds

var clearSecondsAt = 60; //this is the amount of times the secondsTimer should increment before clearing and converting to minutes
