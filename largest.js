//write a function that returns the largest number in
//an array

var testArray = [1, 9, 7];

var largest = function(arr){
  var num = arr[0];
  for (i = 0; i < arr.length; i++){
    if (num < arr[i]){
      num = arr[i];
    }
    else {
      num = num;
    }
  }
  return num;
};

console.log(largest(testArray));
