// Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//Answer:

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

//Test:

describe("Tests", () => {
  it("test", () => {
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
  });
});


// Set Alarm

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

//Answer:
function setAlarm(employed, vacation){
  return employed && !vacation;
}

//or:
function setAlarm(employed, vacation){
  return employed > vacation;
}

//Test:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Test Suite",()=>{
  it("Fixed tests",()=>{
    assert.strictEqual(setAlarm(true, true),  false,"Should be false.");
    assert.strictEqual(setAlarm(false,true),  false, "Should be false.");
    assert.strictEqual(setAlarm(true, false), true,"Should be true.");
  });
});


// Area or Perimeter

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

//Answer
const areaOrPerimeter = function(l , w) {
  return l==w ? l*w : 2*(l+w)
};

//Test
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(areaOrPerimeter(4 , 4) , 16);
Test.assertEquals(areaOrPerimeter(6 , 10) , 32);
  });
});


//If you can't sleep, just count sheep!!

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//Answer:
var countSheep = function (num){
  let murmur='';
  for (let i=1; i<=num; i++){
    murmur += `${i} sheep...`;
  }
  return murmur
}

//Test:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  });
});


// Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//Answer:
function reverseWords(str) {
  const arr = str.split(' ');
  let arrRev = [];
  for(let a of arr){
    arrRev.push((a.split('').reverse().join('')));
  }
  return(arrRev.join(' '));
}

//or:
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

//Test:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});
