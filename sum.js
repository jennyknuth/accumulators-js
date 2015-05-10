//write a function that sums up the
//numbers in an array
//

var testArray = [1,2,3];

var sum = function(arr){
  var total = 0;
  for (i = 0; i < arr.length; i++){
    total = total + arr[i];
  }
  return total;
};

console.log(sum(testArray));
