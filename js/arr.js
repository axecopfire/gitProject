"use strict"

var arr = ["a", "b", "c"];
var tempArr = [];

for(var i = arr.length - 1; i >= 0; i --) {
    var tempString = arr[i] + i;
    
    tempArr.push(tempString);
}

var tempArrLength = tempArr.length;

for(var j = 0; j < tempArrLength; j ++) {
    arr.push(tempArr.pop());
}

console.log(tempArr, arr);