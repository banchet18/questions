// var  ,let , const

//1. What is scope
// scope is a certain region of program where a defined variable exist and can be recognized and beyond that it cannot be recognized.
// so there can be multiple types of scope
//eg global scope, block scope, functional scope

//2. this whole is global scope

//3. function(){}   ===>  //this our function scope

//4.
{
} //this is our block scope

//5.
var a = 5; //global scope we can use it anywhere
console.log(a);

//6.
{
  var a = 5;
}
console.log(a); //accesible because of var
{
  let b = 6;
}
console.log(b); //cant be accesible because of let
{
  let c = 6;
  console.log(c); // now it is accesible
}
// const is also same sa let

//7.
//variable shadowing
function test() {
  let a = "hello";

  //down a shadowing upper a
  if (true) {
    let a = "hi";
    console.log(a); // hi
  }
  console.log(a); // hello
}
test();

//8. illegal shadowing
function test() {
  var f = "hello";
  let g = "bye";

  if (true) {
    let f = "hi";
    var g = "goodbye";
    console.log(f);
    console.log(g);
  }
}
test();

//9.declaration
var a;
var a;
let b;
let b;   //error
const c;
const c;  //error


//10. declaration without initialization
var a;  //we can do
let h;  // we can do
const k;  //we can not declare without initialization


// 10 initialization
var a = 5;
a=10 //we can do that
let j = 5;
j=10;  // we can do that 
const l = 5;
l=10;  //we cannot do that

//notebook 
//11. Hoisting
// javascript engine moves your variable and function declaration to the top of your code and then  this is known as hoisting.
console.log(count); // undefined
var count = 1;

console.log(count1);
let count1 = 1 ; //error

// 12. question on hoisting
function abc(){
  console.log(a);  //undefined 

  var a =10;  
}

abc()

//13. 
function abc(){
  console.log(a,b,c);  //undefined 

 // temporal dead zone  meaning ->
 // variable are in scope but not been declared

  const c =30;  //temporal dead zone
  let b =20;    //temporal dead zone
  var a =10;  
}
abc()