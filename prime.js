//A prime number is an integer greater than 1 that has no divisors other than itself and 1.
//Write a function that accepts a number and returns true if it's a prime number, false if it's not.

//EX: primeTester(2) --> true
//EX: primeTester(1) --> false
//EX: primeTester(13) --> true

let primeTester = (input) => {
  if (!Number.isInteger(input)){return "is not integer";}
  if (input == 1){return "it's not a prime number";}
  for (i = 2; i < input; i++) {
    if (input % i == 0) {return false;}
  }
return true;
};
