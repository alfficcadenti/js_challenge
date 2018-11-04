//Given a string, remove any characters that are not unique from the string.
/*
EX: onlyUnique("abccdefe") --> "abdf"
EX: onlyUnique("hello there") --> "o tr"
EX: onlyUnique("xyz") --> "xyz"
EX: onlyUnique("iiii") --> ""
*/

let onlyUnique = (input) => {
  var result = []
  var i,j = 0
  for (i=0; i<input.length ; i++)
  {
  var count = 0;
    for (j=0; j<input.length ; j++)
      {if (input[i] == input[j])
          {count = count + 1}
        }
  if (count == 1) {result.push(input[i])};
  };
return result.join("");
}
