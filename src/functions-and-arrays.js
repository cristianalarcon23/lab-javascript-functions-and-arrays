// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1,num2) {
  if (num1 < num2) return num2;
  else return num1;
}

console.log(maxOfTwoNumbers(3,4))



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard'];

function findLongestWord(arr) {
  const longestWord = arr[0];
  for (let i = 0; i < arr.length; i++) 
    if (arr[i].length > longestWord.length) {
      longest = arr[i];
    }
  return longest;
    
}

console.log(findLongestWord(words));



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i];
    return sum;
}

console.log(sumNumbers(numbers));

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// Iteration #3.1 Bonus:
function sum(arr) {
  let sumNumbers = 0;
  let sumStrings = 0;
    for (let i = 0; i < arr.length; i++)
      if (typeof arr[i] === 'number'){
        sumNumbers += arr[i];}
    for (let i = 0; i < arr.length; i++)
      if (typeof arr[i] === 'string'){
        sumStrings += arr[i].length;
    }
  return sumNumbers + sumStrings;
}

//em falta com poder sumar el boolean...

console.log(sum(mixedArr));


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  return sumNumbers(arr) / arr.length;
}

console.log (averageNumbers(numbersAvg));


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) {
  let average = 0;
  for (let i = 0; i < arr.length; i++)
    average += arr[i].length;
  return average / arr.length;  
}

console.log(averageWordLength(wordsArr));

// Bonus - Iteration #4.1
function avg(arr) {
  return sum(arr) / arr.length;
}

console.log(avg(mixedArr));

//aqui tmbe faltaria sumar el boolean

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr) {
  return arr.filter((elem, index) => {
    return arr.indexOf(elem) == index;
  });
}

console.log(uniquifyArray(wordsUnique));



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];



function doesWordExist(arr) {
  const checkWord = "eating";
    if (arr.includes(checkWord)){
      return true;}
      else return false;
    }
  



console.log(doesWordExist(wordsFind));


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr) {
  let counter = 0;
  const checkWord = 'matter';
  for (let i = 0; i < arr.length; i++){
    if (checkWord === arr[i]){
      counter++; 
    }
  }
return counter;  
}

console.log(howManyTimes(wordsCount));
