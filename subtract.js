//write a function that subtracts a list of numbers

var testArray = [10, 10, 10];

var subtract = function(arr){
  var total = 0;
  for (i = 0; i < arr.length; i++){
    total = total - arr[i];
  }
  return total;
};

console.log(subtract(testArray));
