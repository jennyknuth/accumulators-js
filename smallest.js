//write a function that returns the smallest
//value in an array

var testArray = [20, 19, 40];

var smallest = function(arr) {
  var num = arr[0];
  for (i = 0; i < arr.length; i++){
    if (num > arr[i]){
      num = arr[i];
    }
    else {
      num = num;
    }
  }
  return num;
};

console.log(smallest(testArray));
