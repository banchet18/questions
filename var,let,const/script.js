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
