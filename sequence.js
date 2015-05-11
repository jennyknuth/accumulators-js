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
var multArray = [0, 3, 6, 9, 12];
var squArray = [1, 3, 9, 81];

//check first to see if it is linear

var isLinear = function(arr){
  if (arr[1] - arr[0] === arr[2] - arr[1]){
    console.log("next number in sequence is " + (arr[arr.length-1] + (arr[2] - arr[1])));
  }
  else {
    //find all the factors of the largest (last) member of array
  }
}

var findFactors = function(arr){

}

isLinear(linearArray);
