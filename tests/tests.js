
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

// QUnit.test("time counter should equal 1", function(assert){
//   assert.equal(secondsCounter(), 1)
// })

//At this point we would like to test that the function actually increments properly, we could not for the life of us work out how to do this in a way that did not seem really convoluted, so we moved past it and created that aspect of the function.

QUnit.test("tests that when 3 seconds has passed our clock registers 3 seconds", function( assert ) {
  var done = assert.async();
  reset(); //we put reset at the start of all tests as we mutate a global variable in our timer function so want to make sure that it is set back to 0 every time we test.
  startButton();
  setTimeout(function() {
    assert.strictEqual(tellTime(), 3, "Passed!");
    done();
  }, 3010); //we hav used 3010 for our test as setting exactly 3000 milliseconds caused problems due to slight differences in time, our timer is still accurate to 1/100 of a second
});

QUnit.test("when timer is reset after 3 seconds, then started again for another 3 seconds tellTime should return 3", function( assert ) {
  var done = assert.async();
  reset();
  startButton();
  setTimeout(function(){}, 3010)
  reset();
  startButton();
  setTimeout(function() {
    assert.strictEqual(tellTime(), 3, "Passed!");
    done();
  }, 3010);
});

//The test below does not work in the intended way, meant to start timer for 3 seconds, pause for one second, run for 3 seconds and then return the current time

QUnit.test("when timer is run for 3 seconds, paused for 1 second and started again for 3 seconds tellTime should return 6", function( assert ) {
  var done = assert.async();

  reset();

  startButton();

  setTimeout(function(){

    stopButton();

    setTimeout(function(){

      startButton();

      setTimeout(function() {

        assert.strictEqual(tellTime(), 6, "Passed!");
        done();

      }, 3010);
    }, 1010)

  }, 3010)

});
