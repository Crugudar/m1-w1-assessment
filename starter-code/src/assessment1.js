// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
if(num%2===0){
  return true;
}else{
  return false;
}

  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a>b){return a}
  else{return b}
  //
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b ,c)
  //
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let suma= numbers.reduce(function(acc, curr){ 
    return acc+curr},0);
    return suma;
  }
  //


// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  //
  return Math.max(...numbers);
}

// Return the longest string in an array
function longestString(strings) {
  let longest=strings.sort(function(a, b){
    return (b.length - a.length)},[0]);

    return longest[0]
    //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(wordsArr.includes(word)){return true}
  else{ return false}

  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {

  let max = 0;
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  for(i=0; i<=numRows; i++){
     for(y=0; y<=numCols; y++){
       let currNum=matrix[i]
       if (currNum>accumulator){
         max=currNum
       } else{ continue};
     };
   };
   return max
  //
}
