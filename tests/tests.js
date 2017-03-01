
QUnit.test('secondsTimer should return 0 by default', function(assert){
  assert.equal(secondsTimer(), 0);
});

QUnit.test('increment should be set to 1 second', function(assert){
  assert.equal(increment, 1000);
})

QUnit.test('clearSecondsAt count at 60 seconds', function(assert){
  assert.equal(clearSecondsAt, 60);
})

QUnit.test("secondsTimer(n) should return n", function(assert){
  assert.equal(secondsTimer(1337), 1337);
})
