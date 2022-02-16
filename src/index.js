var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => {
  return x * 2;
});
console.log(newNumbers);

// use forEach
const newNums = [];
numbers.forEach((x) => {
  newNums.push(x * 2);
});
console.log(newNums);

//Filter - Create a new array by keeping the items that return true.
const filteredNums = numbers.filter((x) => {
  return x > 10;
});
console.log(filteredNums);

// use forEach
const filteredNums2 = [];
numbers.filter((x) => {
  if (x < 10) {
    filteredNums2.push(x);
  }
});
console.log(filteredNums2);

//Reduce - Accumulate a value by doing something to each item in an array.

// can't compile
// const num = 0;
// num = numbers.forEach((x) => {
//   return (num += x);
// });
// console.log(num);

const num2 = numbers.reduce((accumNum, x) => {
  console.log("accumNum = " + accumNum);
  console.log("x = " + x);
  return (accumNum += x);
});
console.log(num2);

//Find - find the first item that matches from an array.

const num3 = numbers.find((x) => {
  return x > 10;
});
console.log(num3);

//FindIndex - find the index of the first item that matches.
const index = numbers.findIndex((x) => {
  return x > 10;
});
console.log(index);
