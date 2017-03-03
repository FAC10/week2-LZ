
//BASIC TESTS BELOW TO GET US STARTED

QUnit.test('timeAtStart should return 0 by default', function(assert){
  assert.equal(timeAtStart(), 0);
});

QUnit.test("timeAtStart(startTime) should return startTime", function(assert){
  assert.equal(timeAtStart(1337), 1337);
})

QUnit.test('increment should be set to 1 second', function(assert){
  assert.equal(increment, 1000);
})

QUnit.test("timeCounter should increase by 1 each time the function is run", function(assert){
  assert.equal(timeCounter, 1);
})

QUnit.test('clearSecondsAt count at 60 seconds', function(assert){
  assert.equal(clearSecondsAt, 60);
})

//Integration-ish tests

QUnit.test("tests that when 3 seconds has passed our clock registers 3 seconds", function( assert ) {
  var done = assert.async();
  reset(); //we put reset at the start of all tests as we mutate a global variable in our timer function so want to make sure that it is set back to 0 every time we test.
  startButton(); //here we start running the stopwatch
  setTimeout(function() { //here we use setTimeout so the asset.strictEqual only fires once 3 seconds have passed
    assert.strictEqual(tellTime(), 3, "Passed!");
    done();
  }, 3010); //we have used 3010 for our test as setting exactly 3000 milliseconds caused problems due to slight differences in time, our timer is still accurate to 1/100 of a second
});

QUnit.test("when timer is reset after 3 seconds, then started again for another 3 seconds tellTime should return 3", function( assert ) {
  var done = assert.async();
  // in this test we use nested setTimeouts to simulate a reset after a certain amount of time
  reset();
  startButton();
  setTimeout(function(){ //in this setTimeout we make it so that lines 43, 45, and 47 to 50 are only run after 3 seconds. This allows us to simulate starting the clock, waiting, resetting the clock, and starting it again.

    reset();

    startButton();

    setTimeout(function() { //here we use a nested setTimeout so that after we have waited 3 seconds, reset and started again we wait another 3 seconds before qunit fires its assert.strictEqual
      assert.strictEqual(tellTime(), 3, "Passed!");
      done();
    }, 3010);

  }, 3010)
});

//The test below does not work in the intended way, meant to start timer for 3 seconds, pause for one second, run for 3 seconds and then return the current time

QUnit.test("when timer is run for 3 seconds, paused for 1 second and started again for 3 seconds tellTime should return 6", function( assert ) {
  var done = assert.async();

  reset();

  startButton(); // here we start the timer

  setTimeout(function(){ // this setTimeout waits 3 seconds before firing its contents

    stopButton(); //so after 3 seconds we stop the timer

    setTimeout(function(){ // this setTimeout waits 1 second (whilst the timer is paused) before firing its contents

      startButton(); // so after 1 second we restart the timer

      setTimeout(function() { //  this setTimeout waits another 3 seconds before firing its contents

        assert.strictEqual(tellTime(), 6, "Passed!"); // so after another 3 seconds (a total of 7 seconds from when the time was first started on like 62, and a totla of 6 seconds of the timer actuall running) we fire our assert.strictEqual to check what the current timer is at. 
        done();

      }, 3010);

    }, 1010)

  }, 3010)

});
