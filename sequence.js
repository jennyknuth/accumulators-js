//build a function that takes an arbitrary sequence and tries to find the next number in the sequence

//either decide they are sorted or determine if numbers are in order or not
//decide they are sorted
//
//find the factors of the biggest number (absolute value)
//decided this would take a very long nested loop, must be a better way
//
//compare to factors of the other numbers
//
//each step is equivalent in some way…
//some pattern with index and factors…

//a and b make c, (a)b and c make d, ((a)b)c) and d make e, etc.
//
//hmmm, didn't end up using any loops or arr[i]…

var linearArray = [0, 3, 6, 9];
var multArray = [1, 3, 9, 27];
var squArray = [1, 3, 9, 81];


var nextInSequence = function(arr){
  var nextNumber = 0;
  if (arr[1] - arr[0] === arr[2] - arr[1]){
    //check first to see if it is linear
    nextNumber = arr[arr.length-1] + (arr[2] - arr[1]);
    console.log("next number in sequence is " + nextNumber);
  }
  else if (arr[3]/arr[2] === arr[2]/arr[1]){
    //if increasing by a factor
    //then multiply last number by that factor
    nextNumber = (arr[arr.length-1] * (arr[3]/arr[2]));
    console.log("next number in sequence is " + nextNumber);
  }
  else if (arr[3] === arr[2] * arr[2]) {
    //if increasing exponentially
    nextNumber = (arr[arr.length-1]*arr[arr.length-1]);
    console.log("next number in sequence is " + nextNumber);
  }
};

nextInSequence(linearArray);
nextInSequence(multArray);
nextInSequence(squArray);

nextInSequence([3, 6, 9]);
nextInSequence([1, 2, 4, 8, 16, 32]);
nextInSequence([5, 25, 625, 390625]);
nextInSequence([3, 12, 48, 192]);
nextInSequence([6, 36, 216, 1296]);
