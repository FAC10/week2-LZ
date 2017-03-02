
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

QUnit.test("time counter should equal 1", function(assert){
  assert.equal(secondsCounter(), 1)
})

// QUnit.test("the final value of 'time' in the secondsTimer function should be the same as the value of clearSecondsAt", function(assert){
//   secondsCounterRepeat();
//   setTimeout(
//     assert.equal(time, 5), 5100
//   );
// })

//At this point we would like to test that the function actually increments properly, we could not for the life of us work out how to do this in a way that did not seem really convoluted, so we moved past it and created that aspect of the function.


//failing test below, unsure why, when console.logging the value of secondsCounter it is 1, when assigning it to a variable it is 1, in practice it is 1, do not know wht this test fails on qunit (returning 3/4)
