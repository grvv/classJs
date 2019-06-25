const myprop = "Something";
const propName = "just like this";

let myObj = {
  name: "Name",
  firstName: "Hello",
  lastName: "World",
  myProp1: "MyValue1",
  [myprop + propName]: "myDynamic prop's value",

  get fullName() {
    return this.firstName + this.lastName;
  },

  // set updateName(newName) {
  //   this.name = newName;
  // }

  set updateNames(value) {
    fNameLname = value.split(" ");

    this.firstName = fNameLname[0];
    this.lastName = fNameLname[1];
  }
};

const myStr = "John Doe";
myObj.updateNames = "John Doe";


myObj.firstName = myStr.split(' ')[0]
myObj.lastName = myStr.split(' ')[1]

// console.log(myObj);
// console.log(myObj.fullName);
// console.log(myObj.updateName);

const { name, ...newObj } = myObj;

console.log(name, newObj);
