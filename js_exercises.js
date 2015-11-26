/* eslint no-extend-native: 0 */
"use strict";

Array.prototype.myUniq = function() {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    var unique = true;
    for (var j = 0; j < result.length; j++) {
      if (result[j] === this[i]) {
        unique = false;
        break;
      }
    }

    if (unique === true) {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.myTwoSum = function() {
  var result = [];

  var i = 0;
  while (i < this.length - 1) {
    var j = i + 1;
    while (j < this.length) {
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
      j++;
    }
    i++;
  }

  return result;
};

Array.prototype.myTranspose = function() {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    var innerArr = [];
    for (var j = 0; j < this[i].length ; j++) {
      innerArr.push(this[j][i]);
    }
    result.push(innerArr);
  }
  return result;
};

Array.prototype.myEach = function(fun) {
   for (var i = 0; i < this.length; i++) {
      fun(this[i]);
   }
};

Array.prototype.myMap = function(fun) {
  var result = [];
  this.myEach(function(ele) {
    result.push(fun(ele));
  });

  return result;
};

Array.prototype.myInject = function(initialValue, fun) {
  var sum = initialValue;
  this.myEach(function(ele) {
    sum = fun(sum, ele);
  });

  return sum;
};

var bubbleSort = function(array) {
  do {
    var sorted = true;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i + 1] < array[i]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
  } while (sorted === false);
  return array;
};

var subString = function(string) {
  var results = [];

  var i = 0
  while (i < string.length) {
    var j = i + 1;
    while (j <= string.length) {
        results.push(string.substring(i,j));
        j++;
      }
    i++;
  }
  return results.myUniq();
};
