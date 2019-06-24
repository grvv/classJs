// const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// function callBackFn(...myParams){
//     console.log(myParams)
// }

// arr.forEach( callBackFn )

// arr.forEach((element, index) => console.log(element, index));

// arr.push(6);
// console.log(arr);

// arr.pop();
// console.log(arr);

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(1));
// console.log(animals);

// console.log(animals.splice(2, 0, 'Goat'));
// console.log(animals);

const arr = [1, 2, 3, 4, 5];

// const result = arr.map(value => value * 2);
// const result = arr.filter(value => value > 2);
// const result = arr.reduce((accValue, currValue, index, array) => {
//     return accValue + currValue
// }, 0);
const result = arr.reduce((accValue, currValue) => accValue + currValue);

console.log(result);
