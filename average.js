//write a function that returns the average
//of the numbers in an array

var testArray = [10, 20, 30];

var average = function(arr){
  var sum = 0;
  for (i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum/arr.length;
};

console.log(average(testArray));
