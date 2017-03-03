# week2-LZ
Stopwatch project for week 2.

## Initial plan
* Did 30 min technical spike to research how to actually make a timer in javascript
  * found the `setInterval()` method which we will use as the basis for a timer
* Discussed concept of timer, decided to aim toward a 20/20/20 timer
  * functionality would be a timer with three sections, each set at 0 to start with that display minutes and seconds, with a start and a stop button. The start button will start one of the timers, when that timer reaches 20 minutes it stops, gives an audio notification and starts the next timer, the same happens when the next timer reaches 20 minutes and so on.
  * stretch goals:
    * add changing colours to timers to as they go from unset-running-finished
    * add responsiveness
    * add pulsing animation to timer at each minute interval

## Goals
* Day one
  * Have one functioning clock in JS (with a good suite of tests from TDD :wink:) showing milliseconds, seconds and minutes
    * this was semi-succesful. We had seconds timer but got stuck on the tests needed
* Day two
  * Get the full 20/20/20 timer working
    * This was ambitious, on day 2, rather that focus on functionality we focused on creating meaningful tests to cover our code. So the full 20/20/20 timer did not come to fruition.

## User stories


## Progress
* Day one
  * Took us 1 hour to decide on and write first tests
  * after 4 hours of work and little progress due to difficulties with the functions being testable we wrote a basic seconds timer
  * we then tried to reverse engineer tests for the function, which did not work as our functions fundamentally did not return anything
  * after doing 20/20/20 we asked Peter and Emily to look at our function, they advised that our function does too much, and we need to refactor them such that each function does the bare minimum and returns a value.

* Day two
  * focused on refactoring the function, we have split it into 3 functions, one of them is very testable, the other two are more difficult to test (partly due to our use of global variables and qunit not resetting the global state each time it tests a function)
  * 15 minute technical spike to see if we can find other assert methods in qunit which make our tests easier.
  * investigated assert.async() from qunit but didn't fully understand til Peter posted an example in gitter.
  * we then added some elements to our html and modified the javascript so that it actually effected the DOM (where there would be DOM manipulation there were instead console.log statements.)
  * made html buttons and made functions for them to trigger: Start, stop, reset.
  * ran into a bug with start where you could run the "start" function lots of times, and they ran at the same time which massively sped up the timer.
    * debugged code and fixed this.
  * Used Peter's example of an async test to write some more integration-y tests for our stopwatch.
  * worked on getting the minutes to increment along with the seconds.
