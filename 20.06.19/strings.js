// let myStr = "Hello";
// let myStr = "Hello";
// // let newStr = "What's up";
// // let newStr = "What's up";

// const someExpression = "Class";

// let num1 = 5;
// let num2 = 10;

// First Method
// let combinedStr = myStr + " " + someExpression;

// let tempLitrals = `Hello ${num1 * num2}`;

// console.log("First --", combinedStr);
// console.log("Last --", tempLitrals);

// let newString = "Hello world!";
// let extraString = "hi";
// console.log(newString.length);
// console.log(newString.indexOf("e"));
// console.log(newString.charAt(2));
// console.log(newString.concat(extraString));

// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.includes("fox"));
// console.log(sentence.includes("hello"));
// console.log(sentence.lastIndexOf("brown"));
// console.log(sentence.indexOf("brown") + 5);
// console.log(sentence.slice(0, 15));

// const testStr = 'hello.world.gth'
// const newStr = "         hello world           ";

// console.log(sentence.split(""));
// console.log(newStr);
// console.log(newStr.trim());

// console.log(newStr.indexOf("abcd"));

// let sentence = "The.quick.brown.fox.jumps.over.the.lazy.dog.";
// let sentence = "The quick brown fox jumps over the lazy dog.";

// let sentence = "The.quick.brown.fox.jumps.over.the.lazy.dog.";
// let splittedStr = sentence.split(".");
// // console.log(splittedStr.length);
// let tempString = "";
// for (let i = 0; i < splittedStr.length - 1; i++) {
//   //   tempString += splittedStr[i];
//   tempString += ` ${splittedStr[i]}`;
// }

// console.log(`${tempString.trim()}.`);

// let tempstr = "";
// for (let i = 0; i < 5; i++) {
//   tempstr += "*";
//   console.log(tempstr);
// }
let str = "*";
for (let i = 5; i > 0; i--) {
  console.log(str.repeat(i));
}
