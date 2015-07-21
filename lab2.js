'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob() {
  this.ratePerHour = 1;
}

var blob = new Blob();
var peopleConsumed = 0;
var hoursInTown = 0;

console.log(blob.ratePerHour);//test

while (peopleConsumed <= 1000) {
  peopleConsumed = peopleConsumed + blob.ratePerHour;
  blob.ratePerHour++;
  hoursInTown++;
}

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)
hoursSpentInDowington = hoursInTown;

console.log(hoursSpentInDowington);//test

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var peopleConsumed = 0;
  var hoursSpentInTown = 0;
  while (peopleConsumed < population) {
    peopleConsumed += peoplePerHour;
    peoplePerHour++;
    hoursSpentInTown++;
  }
  return hoursSpentInTown;
  //console.log(hoursSpentInTown);
};

console.log(blob.hoursToOoze(1000, 1));//test

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(1, 1) === 1, 'one person means one hour');
assert(blob.hoursToOoze(3, 1) === 2, 'three people means two hours');
assert(blob.hoursToOoze(7, 3) === 2, 'it should take 2 hours');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(homePlanet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {//sb is just a placeholder for the second object
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
  console.log(hello[this.language]);
  return hello[sb.language];
    //TODO: put this on the SentientBeing prototype
};
// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
Klingon.prototype = new SentientBeing();
function Klingon() {
  this.homePlanet = "Qo'nos";
  this.language = 'klingon';
}

Human.prototype = new SentientBeing();
function Human() {
  this.homePlanet = 'Earth';
  this.language = 'federation standard';
}

Romulan.prototype = new SentientBeing();
function Romulan() {
  this.homePlanet = 'Romulus';
  this.language = 'romulan';
}

console.log(new Klingon().sayHello(new Human()));//this is a test

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru', 'the roluman should hear jolan tru');
assert((new Klingon()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru', 'the Roluman should hear Jolan tru');
assert((new Romulan()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH', 'the Klingon should hear nuqneH');
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    var aLetterArray = a.split('');
    //console.log(aLetterArray);//test
    var bLetterArray = b.split('');
    //console.log(bLetterArray);//testlog
    var aLastLetter = aLetterArray.pop();
    //console.log(aLastLetter);//testlog
    var bLastLetter = bLetterArray.pop();
    //console.log(bLastLetter);//testlog
    //console.log(aLastLetter.localeCompare(bLastLetter));
    return aLastLetter.localeCompare(bLastLetter);
  }
  return stringArray.sort(byLastLetter);
}

//var array1 = ['af','ab','ad','ac','aa'];
//console.log(lastLetterSort(array1));//this is a test

var testArray1 = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Foxtrot'];
var testArray2 = ['ac', 'ad', 'ab', 'be'];
//console.log(lastLetterSort(testArray1));
//console.log(lastLetterSort(testArray2));
//console.log(lastLetterSort(['aa','ab']));

assert((lastLetterSort(testArray1)).toString() === 'Alpha,Delta,Charlie,Bravo,Foxtrot', 
  'the order should be Alpha, Delta, Charlie, Bravo, then Foxtrot');
assert((lastLetterSort(testArray2)).toString() === 'ab,ac,ad,be', 
  'the order should be ab, ac, ad, be');

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  function addToSum(number) {
    sum += number;
  }
  numberArray.forEach(addToSum);
  return sum;
}
//console.log(sumArray([1,2,3,4])); //test

assert(sumArray([1, 2, 3, 4]) === 10, 'the sum of 1,2,3, and 4 should be 10');
assert(sumArray([20, 20, 20, 20, 21]) === 101, 'the sum should be 101');

function sumSort(arrayOfArrays) {
  return arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    return sumArray(a) - sumArray(b);
  });

}

//I learned that this is not the right way to flatten an array op array
//console.log((([1,2],[3,2],[2,2]).join()).toString());

var testArrayofArray = [[1, 2], [3, 2], [2, 2]];
console.log(sumSort(testArrayofArray));

//one way to merge arrays of arrays - also called flatten
var merged = [];
merged = merged.concat.apply(merged, testArrayofArray);
console.log(merged);

//another way to flatten arrays
var merged2 = testArrayofArray.reduce(function(a, b) {
  return a.concat(b);
});
console.log(merged2);

//Tried using the two previous ways in the assert but it wouldn't work so I created a function to flatten arrays of arrays instead
function flatten(array) {
  var merged = array.reduce(function(a, b) {
    return a.concat(b);
  });
  return merged;
}

console.log(flatten(testArrayofArray));//test
console.log(sumSort([ [1, 2 ], [3, 2], [2, 2]]));//test
console.log(flatten(sumSort([ [1, 2], [3, 2], [2, 2] ])));//test

assert(flatten(sumSort([ [1, 2], [3, 2], [2, 2]])).toString() === '1,2,2,2,3,2', 'the output should be 1,2,3,2,2,2');
assert(flatten(sumSort([ [1, 1], [4, 4], [3, 3], [2, 2], [1, 1, 1]])).toString() === '1,1,1,1,1,2,2,3,3,4,4', 
  'the output should be 1,1,1,1,1,2,2,3,3,4,4');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************

