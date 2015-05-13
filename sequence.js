//build a function that takes an arbitrary sequence and tries to find the next number in the sequence

//some ideas (will try on this on May 10)

//either decide they are sorted or determine if numbers are in order or not
//decide they are sorted
//find the factors of the biggest number (absolute value)
//compare to factors of the other numbers
//compare to index number/length to see how fast it is growing/declining
//each step is equivalent in some way…
//some pattern with index and factors…

//a and b make c, (a)b and c make d, ((a)b)c) and d make e, etc.
//

var linearArray = [0, 3, 6, 9];
var multArray = [1, 3, 9, 27];
var squArray = [1, 3, 9, 81];

//check first to see if it is linear

var nextInSequence = function(arr){
  var nextNumber = 0;
  if (arr[1] - arr[0] === arr[2] - arr[1]){
    nextNumber = arr[arr.length-1] + (arr[2] - arr[1]);
    console.log("next number in sequence is " + nextNumber);
  }
  else if (arr[3] % arr[1] === 0 && arr[3]/arr[1] === arr[2]){
    //if second number in array is a factor of last number and increasing by that factor,
    //then multiply last number by that factor
    nextNumber = (arr[arr.length-1] * arr[1]);
    console.log("next number in sequence is " + nextNumber);
  }
  else if (arr[3] % arr[1] === 0 && arr[3]/arr[1] === arr[1]*arr[2]) {
    nextNumber = (arr[arr.length-1]*arr[arr.length-1]);
    console.log("next number in sequence is " + nextNumber);
  }
};

nextInSequence(linearArray);
nextInSequence(multArray);
nextInSequence(squArray);
