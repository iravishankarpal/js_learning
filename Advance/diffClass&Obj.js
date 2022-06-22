var name = "sam";
var last = "jack";
const object1 = {
  name: "John",
  age: 30,
  last: "Doe",
  city: "New York",
  fName: function () {
    // return `${this.name} ${this.last} is ${this} object`;
    return this;
  },
  fullName() {
    return `${this.name} ${this.last}`;
  },
  get fullNameAgain() {
    return `${this.name} ${this.last}`;
  },
  ArroyFnName: () => {
    return `${this.name} ${this.last} is ${this} object`;
    // return this;
  },
};
console.log(
  "-----------------------------------------------------------------------------------------------object-----------------------------------------------------------------------------------------------------"
);
console.log(" object1 name : ", object1.name, " object1 last : ", object1.last);
console.log("🚀  fNmae", object1.fName()); //jon doe

console.log("🚀  full name", object1.fullName()); //jon doe
console.log("🚀  fullName Again", object1.fullNameAgain); //jon doe

console.log("🚀  ArroyFnName", object1.ArroyFnName()); //sam jack
var testobj = object1.ArroyFnName();
console.log(testobj); //sam jack

class PersonClass {
  constructor(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  static fullname_Static() {
    return "I am static function ";
  }
  fName = function () {
    // return `${this.firstName} ${this.last} is ${this} object`;
    return this;
  };
  fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  fullNameAgain() {
    return `${this.firstName} ${this.lastName}`;
  }
  ArroyFnName = () => {
    return `${this.firstName} ${this.firstName} is ${this} object`;
    // console.log(' :', );
    // return this;
  };
}

console.log(
  "-------------------------------------------------------------------------------------------------class-----------------------------------------------------------------------------------------------------------"
);

const FatherC = new PersonClass("class", "Doeclass", 50, "blueclass");
const MotherC = new PersonClass("Sallyclass", "Rallyclass", 48, "greenclass");
const sonC = new PersonClass("raviclass", "kumarclass", 20, "blackclass");
console.log(
  "🚀 sonC object of class :",
  sonC.fName(),
  "\n",
  sonC.fullName(),
  "\n",
  "arrow function :",
  sonC.ArroyFnName(),
  "\n"
); //ravi kumar
console.log("🚀 myMother fullname", MotherC.fullName());

console.log(PersonClass.fullname_Static());
