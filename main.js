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
