// let obj = {
//   key: "value"
// };

// obj.newKey = "New Value";
// // delete obj.newKey;

// obj["My New Key"] = "New Value";

// console.log(obj["My New Key"]);

// let obj1 = {
//   obj1key: "obj1value"
// };

// let obj2 = {
//   obj2key: "obj2value"
// };

// let newObj = {
//   ...obj1,
//   ...obj2
// };

// console.log(newObj);

// let randomObj = {
//   userId: 1,
//   id: 2,
//   title: "qui est esse",
//   body:
//     "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
// };

// // let objBody = randomObj.body;

// let { body: objBody } = randomObj;

// console.log(objBody);

// let car = {
//   make: "Honda",
//   YOM: 2018,
//   color: "red"
// };

function Car(make, YOM, color) {
  this.make = make;
  this.YOM = YOM;
  this.color = color;
}

let myCar = new Car("Honda", 2018, "Blue");

console.log(myCar);
