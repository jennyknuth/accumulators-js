//write a function that takes a number
//and determines if that number is prime
//

var number = 3797;

var isPrime = function(num){
  var prime = true;
  for (i = 2; i < num ; i++){
    if (num % i === 0){
      //console.log(i);
      return number + " is not a prime number. It is divisible by " + i + ".";
    }
  }
  return number + " is a prime number!";
};

console.log(isPrime(number));
