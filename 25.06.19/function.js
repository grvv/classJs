// function myFn(){
//     // Code
// }

// // arrowFunctions
// const myFn = () => console.log('Hello');

// function returnSentense(str) {
//   return `This String is ${calculateLength(str)} char Long.`;
// }

// function calculateLength(str) {
//   return str.length;
// }

// console.log(returnSentense("Hello World!"))

// function myFn(x) {
//     // console.log('Fn Called')
//   if (x == 10) {
//     return;
//   }

//   myFn(x + 1);
// }

// myFn(1);

// function myFn(){
//     myFn();
// }

// myFn();

// function myFn() {
//     console.log(arguments)
//   console.log(Array.of(...arguments).reduce((acc, curr) => acc + curr, 0));
// }

// myFn(1, 2, 3, 4, 5, 6, 7, 8);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = arr
//   .filter(value => value > 2)
//   .map(value => value * 5)
//   .reduce((acc, curr) => acc + curr, 0);

//   console.log(result);

// function myFn(a, b = 3){
//     console.log(a + b)
// }

// myFn(1, 10)

// function addSquares(num1, num2) {
//   var abc = "hello";
//   function square(value) {
//     return value * value;
//   }

//   return square(num1) + square(num2);
// }

// console.log(abc);

// console.log(addSquares(2, 5));

// if (true) {
//   let abcd = "hello";
// }

// console.log(abcd);

function returnSum(a) {
  return function() {
    return a * a;
  };
}

console.log(returnSum(4)());
