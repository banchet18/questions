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

//Q6- function scopre
var num1 = 20;
num2 = 3;
name = "roadside Coder";

function multipy() {
  return num1 * num2;
}
multipy();

function getScore() {
  var num1 = 2;
  num2 = 3;
  function add() {
    return name + "scored" + (num1 + num2);
  }
  return add();
}
getScore();

//Q7 function Scope - o/p based Question
//what will be output when we write var instead of let
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

//Q8 - function hoisting
functionName();

function functionName() {
  console.log("roadside Coder");
}

//Q9 - o/p based question tricky question
var x = 21;
var fun = function () {
  console.log(x);
  var x = 20;
};
fun(); //undefined
//note temporal dead zone

//Q10 - params vs arguments
function square(num) {
  //params
  console.log(num * num);
}
square(5); //arguments

function multiply(...nums) {
  console.log(nums[0] * nums[1]);
}
var arr = [5, 6];
multiply(...arr);

//Q11 - find output
const fn = (a, x, y, ...numbers) => {
  console.log(x, y);
};

fn(5, 6, 3, 7);
//note rest operator must be last
