// functions
//Q1 what is function declaration
function hello(num) {
  return num * num;
}
//Q2 what is function expression
// anonoymus function
const square = function (num) {
  return num * num;
};
console.log(square(5));

//Q3 -first class functions?
function square(num) {
  return num * num;
}
function displaySquare(fn) {
  console.log("square is" + fn(5));
}
displaySquare(square);

//Q4 what is IIFE?
//immediately invoke function expression
(function square(num) {
  console.log(num * num);
})(5);

//Q5 - IIFE - o/p Based Question?
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
// o/p - 1
