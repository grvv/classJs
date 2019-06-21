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

// function TestFn(testProp) {
//   this.testProp = testProp;
// }

// function Car(make, YOM, color, testObj) {
//   this.testObj = testObj;
//   this.make = make;
//   this.YOM = YOM;
//   this.color = color;
//   (this.printMake = function() {
//     console.log(this.make);
//   }),
//     (this.showExp = () => console.log(this.YOM + 25));
// }

// let testObj = new TestFn("Hello World");

// let myCar = new Car("Honda", 2018, "Blue", testObj);

// console.log(myCar);

// console.log();
// myCar.showExp();
// myCar.printMake();

// console.log(myCar);

// let obj = {
//   key: "Values",
//   subObj: {
//     subProp: "subProp Value"
//   },
//   myMethod: function() {
//     console.log("Hello World");
//   },
//   myArray = []
// };

// console.log(Object.keys(myCar));
// console.log(Object.values(myCar));

// let obj = {
//   myMethod() {
//     console.log("hello World!");
//   }
// };

// obj.myMethod();

let obj = {
  prop: "value",
  prop2: "value 2",
  prop3: "value 3"
};

// let obj2 = obj;
// console.log(obj == obj2);

for (const prop in obj) {
  //   if (prop == "prop2") {
  //     break;
  //   }
  if (prop == "prop2") {
    continue;
  }
  console.log(prop, obj[prop]);
}
