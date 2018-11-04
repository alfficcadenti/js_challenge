//Given an array of unique words, find the word that contains the greatest number of other words.
//A word must be at least two letters long.

//EX: nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) --> "grays"
var test = [ "gray", "grays", "ray", "rays", "strays" ]

let nestedWordCount = (inArray) => {
  var result = {}
  var i,j = 0
  var greatest = ''
  for (i=0; i<inArray.length ; i++)
  {
  var count = 0;
    for (j=0; j<inArray.length ; j++)
      {if (inArray[i].includes(inArray[j]))
          {count = count + 1}
        }
    result[inArray[i]] = count;
  if(i==0) {greatest = count;output = inArray[i]}
  else {if (result[inArray[i]]>greatest) {greatest = count;output = inArray[i]}}
  }
  return output
}
