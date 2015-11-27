/* eslint no-extend-native: 0 */
// "use strict";

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

var range = function(start, end) {
  if (start === end) {
    return [end];
  } else if (end < start) {
    return [];
  }
  return [start].concat(range(start + 1, end));
};

var count1 = 0;

var recExponent = function(base, power) {
  if (power === 0) {
    return 1;
  }
  count1 ++;
  return base * recExponent(base, power - 1);
};

var count = 0;

var recExponent2 = function(base, power) {
  if (power === 0) {
    return 1;
  } else if (power === 1) {
    return base;
  }

  if (power % 2 === 0) {
    var result = recExponent2(base, power/2);
    count++;
    return result*result;
  } else {
    count++;
    var otherResult = recExponent2(base,(power-1)/2);
    return base * otherResult * otherResult;
  }
};

var recFibonacci = function(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1,1];
  }

  var arrayLength = recFibonacci(n - 1).length;
  var lastElement = recFibonacci(n - 1)[arrayLength - 1];
  var secondToLastElement = recFibonacci(n - 1)[arrayLength - 2];
  return recFibonacci(n - 1).concat(lastElement + secondToLastElement);
};

var binarySearch = function(sortedArray, target) {
  var median = Math.floor(sortedArray.length / 2);

  if (target === sortedArray[median]) {
    return median;
  }

  if (target > sortedArray[median]) { // searching right side
    var right = sortedArray.slice(median + 1, sortedArray.length);
    return median + 1 + binarySearch(right, target);
  } else if (target < sortedArray[median]) {
    var left = sortedArray.slice(0, median);
    return binarySearch(left, target);
  }
};

var makeChange = function(amount, coinValues) {
  if (coinValues.length === 0) {
    return [];
  }
  if (amount < coinValues[coinValues.length - 1]) {
    return [];
  }

  var coins = Math.floor(amount / coinValues[0]);
  console.log(coins);
  var leftoverChange = amount % coinValues[0];
  var coinArray = [];

  for (var i = 0; i < coins; i++) {
    coinArray.push(coinValues[0]);
  }
  console.log(coinArray);
  return (coinArray).concat(
    makeChange(leftoverChange, coinValues.slice(1, coinValues.length))
  );
}

var makeChange2 = function(amount, coinValues) {
  if (coinValues.length === 0) {
    return [];
  }
  if (amount < coinValues[coinValues.length - 1]) {
    return [];
  }

  if (Math.floor(amount / coinValues[0]) === 0) {
    return makeChange(amount, coinValues.slice(1, coinValues.length));
  } else {
    var leftoverChange = amount - coinValues[0];
    return [coinValues[0]].concat(makeChange(leftoverChange, coinValues));
  }
}

var makeChangeFinal = function(amount, coinValues) {
  var bestChange = null;

  console.log(coinValues);
  if (coinValues.length === 0) {
    return [];
  }
  if (amount < coinValues[coinValues.length - 1]) {
    return [];
  }

  for (var i = 0; i < coinValues.length - 1; i++) {
    if (Math.floor(amount / coinValues[i]) > 0) {
      var currentChange = [coinValues[i]].concat(makeChangeFinal(amount - coinValues[i]),coinValues.slice(1, coinValues.length));
      return currentChange;
    } else {
      var currentChange = makeChange(amount, coinValues.slice(1, coinValues.length));
      return currentChange;
    }

    if (currentChange.length < bestChange || bestChange === null) {
      bestChange = currentChange;
    }
  }

  return bestChange;
}
