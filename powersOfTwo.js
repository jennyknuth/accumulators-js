//Build a function that takes the following number
//sequence (1, 2, 4, 8, 16, 32) and computes the next number in
//the sequence.

var array = [1, 2, 4, 8, 16, 32];

console.log("for the array: " + array);

var powersOfTwo = function(arr){
  var num = array[0];
  for (i = 0; i < arr.length; i++){
  num = num + Math.pow(2, i);
  }

  console.log("The next number in the sequence is " + num);
};

powersOfTwo(array);
