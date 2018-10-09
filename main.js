/*1.Write the function printInt(n) taking one parameter n and
 print all natural numbers from 1 to n in console.*/
function printInt(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
/*2.Write the function printIntRev(n) taking one parameter n and 
 print all natural numbers in reverse in console (from n to 1)*/
function printIntRev(n) {
  for (var i = n; i > 0; i--) {
    console.log(i);
  }
}

/*3.Write the function checkInput(x) taking one parameter x 
and return the string ‘number’ if x is a number;
 return the string ‘string’ if x is a string; and return boolean if x is a boolean.
  Otherwise returns -1.
*/
function checkInput(x) {
  if (typeof x === "number") {
    return x + " is a number";
  } else if (typeof x === "string") {
    return x + " is a string";
  } else if (typeof x === "boolean") {
    return x + " is a boolean";
  } else return -1;
}
/*4.
Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num.
*/
function simpleEvenAdding(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
}
/*5.Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. 
The given words will be separated by only one space.*/
function letterCapitalize(str) {
  var arrayWords = str.split(" ");
  var capitalWord = "";
  for (let word of arrayWords) {
    capitalWord = capitalWord + " " + word[0].toUpperCase() + word.slice(1);
  }
  return capitalWord;
}
/*6.Write the function simpleReverse(str) taking a string and return the string in reversed order.*/
function simpleReverse(str) {
  /*var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        console.log(i);
        newString += str[i];
    }
    return newString;*/
  var newString = str
    .split("")
    .reverse()
    .join("");
  return newString;
}
/*7.Write the function findDiff(arr) taking an array of numbers as parameter and
 return the difference between the maximum number and the minimum number (max - min).*/
function findDiff(arr) {
  /*
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        else if (arr[i] > max) {
            max = arr[i];
        }
    }*/
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  //console.log(min + "////" + max);
  return max - min;
}
/*8.Write the function timeConvert(num) taking a number as parameter and return the number of hours and
 minutes the parameter converts to. Separate the number of hours and minutes with a colon.*/
function timeConvert(num) {
  var hours = parseInt(num / 60);
  var minutes = num % 60;

  /* for (var i = 0; i <= num; i++) {
    if (num >= 60) {
      //for every 60 add 1 hour
      hours += 1;
      num -= 60; //makes sure that the loop goes every 60
    } else if (num < 60) {
      minutes = num;
    }
  }*/
  return hours + ":" + minutes;
}
/*9.Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string*/
function findStr(str, long) {
  var strPos = long.indexOf(str);
  var count = 0;
  // console.log(strPos);
  while (strPos != -1) {
    count++;
    strPos = long.indexOf(str, strPos + 1);
  }
  return count;
}
/*The function check if a number is self dividing number  */
function checkDividingNumbers(num) {
  /*var num = start;
  var sd = true;

  while (num > 0) {
    var last = num % 10;
    if (start % last != 0) {
      sd = false;
      break;
    }
    num = Math.floor(num / 10);
  }
  if (sd) {
    return true;
  } else {
    return false;
  }*/
  var numArray = num.toString().split("");
  for (var i = 0; i < numArray.length; i++) {
    if (num % parseInt(numArray[i]) !== 0) {
      return false;
    }
  }
  return true;
}

/*10. the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between
    them, including the bounds*/
function selfDividingNumbers(left, right) {
  var selfDividingArray = [];
  for (var n = left; n <= right; n++) {
    var isDividing = checkDividingNumbers(n);
    if (isDividing == true) selfDividingArray.push(n);
  }
  return selfDividingArray;
}
/*11.Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements*/
function moveZeros(nums) {
  var array_zero = [];
  var array_non_zero = [];
  for (var num of nums) {
    if (num === 0) {
      array_zero.push(num);
    } else {
      array_non_zero.push(num);
    }
  }
  return array_non_zero.concat(array_zero);
}
/*12.Create an average() function that calculates the average of an array of numbers*/
function average(nums) {
  var sum = 0;
  var avr = 0;
  for (var num of nums) {
    sum += num;
  }
  avr = sum / nums.length;
  return avr;
}
