/*
Write a function named `camelCase` that takes one parameter,
a string that is all lowercase and doesn't include any punctuation.
This function should take that string and convert it to camel case.

EX: camelCase("this is a string") —> "thisIsAString"
EX: camelCase("vacation rentals by owner") —>`"vacationRentalsByOwner"
EX: camelCase("supercalifragalisticexpialidocious") —> "supercalifragalisticexpialidocious"
*/

function camelCase(str) {
  var output=[]
  for (var i = 0; i < str.length; i++) {
    if(str.charAt(i)==" "){
      output.push(str.charAt(i+1).toUpperCase());
      i++;;
    }
  else {
    output.push(str.charAt(i));
    }
  };
  return output.join('')
}
