
//Using the helper functions below, write a function called numberToEnglish that
//takes a number as a parameter and returns the number
//as a string using English words.

//EX: numberToEnglish(7) --> "seven"
//EX: numberToEnglish(575) --> "five hundred seventy-five"
//EX: numberToEnglish(78193512) --> ""seventy-eight million one hundred ninety-three thousand five hundred twelve"

let numbersToWords = {
  //0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

let numbersToPlace = {
  //10: 'ten',
  //100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

// convert a number into "chunks" of 0-999
function chunk(number) {
  var chunks = [];
  while(number > 0) {
    chunks.push(number % 1000);
    number = Math.floor(number / 1000);
  }
  return chunks;
}

// transform each chunk in words
function toWords(number) {
  var hundreds, tens, ones, words = [];

  function convert(x) {
    if (x <= 20)
      {return (numbersToWords[x]);}
      else
      {xt = x / 10 | 0;
      unit = x % 10;
      var string=[];
      string.push(numbersToWords[xt*10]);
      string.push(numbersToWords[unit]);
      return string.join(" ");
     };
  };

  hundreds = number / 100 | 0;
  if (number >= 100) {
    words.push(numbersToWords[hundreds]);
    words.push("hundred");
    tens = number % 100;
    words.push(convert(tens));
    }
  else {
    words.push(convert(number));
  }
  return words.join(" ");
}

function numberToEnglish(number) {

  var output = [];
  //if above 999 perform chunk
  if (number >=1000) {
    var chunks = chunk(number);
    var i = chunks.length;
    while (i > 0){
      if (chunks[i-1]!=0)
        {
          if (i==1){
            {output.push(toWords(chunks[0]))};
          }
          else {
            output.push(toWords(chunks[i-1]));
            output.push(numbersToPlace[Math.pow(1000,i-1)]);
          };
        }
      i = i-1;
    };
    return output.join(" ");
    }

  //number below 100 call directly toWords
  else {return output = toWords(number);}
}
