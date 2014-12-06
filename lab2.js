/*********************************************************
LAB 3: 

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
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
// PROBLEM 1: What's in a Name? 20 points.
//
// Each of the following three functions (x, y, and z) has
// an empty body. Look at the asserts for each function to
// figure out what function is supposed to do. Rename each 
// function to reflect its purpose, implement it, then add
// two more passing asserts for each one.
//*********************************************************

function x() {
  //TODO: implement this function so that all the asserts
  // for it pass.
  //TODO: rename this function to match what it does
}

// TODO: don't forget to rename the function down here, too
assert(6.28 < x(1) && x(1) < 6.2832, "x(1)");
assert(12.56 < x(2) && x(2) < 12.5664, "x(2)");
assert(18.84 < x(3) && x(3) < 18.8496, "x(3)");

function y() {
  //TODO: implement this function so that all the asserts
  // for it pass.
  //TODO: rename this function to match what it does
}

// TODO: don't forget to rename the function down here, too
assert(y(1, 2, 3) === 1, "y(1, 2, 3)"); 
assert(y(4, 5, 3) === 3, "y(4, 5, 3)");
assert(y(-5, -10, 1) === -10, "y(-5, -10, 1)"); 

function z() {
  //TODO: implement this function so that all the asserts
  // for it pass.
  //TODO: rename this function to match what it does
}

// TODO: don't forget to rename the function down here, too
assert(z(1) === 1, "z(1)");
assert(z(3) === 27, "z(3)");
assert(z(5) === 125, "z(5)");

//*********************************************************
// PROBLEM 2: May cause side effects. 20 points.
//
// Rewrite the following two functions (sameItems and
// filter) to remove all side effects.
//*********************************************************

// Take two arrays. Return true if they have all the same
// items. Ordering doesn't matter. Otherwise, return false.
function sameItems(array1, array2){
  array1.sort();
  array2.sort();
  while(array1.pop() === array2.pop()){
    if(!array1.length){
      return true;
    }
  }
  return false;
}

assert(sameItems([],[]), "sameItems([],[])");
assert(sameItems([1,2,3],[2,3,1]), "sameItems([1,2,3],[2,3,1])");
assert(!sameItems([],[1]), "sameItems([],[1])");

// Take an array of strings and a search string. Return an
// array that has only the strings from array that include
// the search string
function filter(array, searchString){
  var startLength = array.length,
    currentString;
  for(var i=0; i<startLength; i++){
    currentString = array.pop();
    if(currentString.indexOf(searchString) !== -1){
      array.unshift(currentString);
    }
  }
  return array;
}

var catWords = ["catnip", "kitty yawns", "kitten pile"];
var kittenWords = ["kitty yawns", "kitten pile"];
assert(sameItems(kittenWords, filter(catWords, "kitt")), "filter");

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
// 
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************
function lastLetterSort(stringArray){
  function byLastLetter(array){
    //TODO: implement me
    // read this: http://www.w3schools.com/jsref/jsref_sort.asp
  }
  stringArray.sort(byLastLetter);
}

function sumArray(numberArray){
  var sum = 0;
  // TODO: implement me using forEach
  return sum;
}

function sumSort(arrayOfArrays){
  arrayOfArrays.sort(function(item){
    // TODO: implement me
  });
}

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
