//With an array [1,2,3,4,5]. Write a while loop that adds 2 to odd numbers and squares even numbers.

var testArray = [1, 2, 3, 4, 5];

var oddEvenSequence = function(arr){
  for (i = 0; i < arr.length; i++){
    var result = 0;
    if (arr[i] % 2 === 0){
      console.log(arr[i] * arr[i]);
    }
    else {
      console.log(arr[i] + 2);
    }
  }
};

oddEvenSequence(testArray);
