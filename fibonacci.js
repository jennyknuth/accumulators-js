//Build a function that takes in a number and then lists the
//Fibonacci numbers up
//to that number.


var fibonacci = function(num){
  var fib = 1;
  var prevfib=0;
  var temp = 0;
  while (fib < num) {
    temp = fib;
    fib= fib + prevfib;
    prevfib = temp;
    if (fib < num) console.log(fib);
  }
};

//var number = parseInt(prompt("Choose a positive number", "0"));
//for some reason, prompt is not working in node, so I have
//hardcoded the number. This code works in Snippets.
fibonacci(888);
