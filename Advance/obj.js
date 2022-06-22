const nai = {
  name: "John",
  age: 30,
  last: "Doe",
  city: "New York",
  fName: function () {
    return `${this.name} ${this.last}`;
  },
  fullName() {
    return `${this.name} ${this.last}`;
  },
  get fullNameAgain() {
    return `${this.name} ${this.last}`;
  },
  ArroyFnName: () => {
    // return `${this.name} ${this.last} is ${this} object`;
    return this;
  },
};
console.log("fname", nai.fName()); //jon doe
console.log("fullName", nai.fullName()); //jon doe
console.log("fullnamge agin", nai.fullNameAgain); //jon doe
console.log("ArroyFnName", nai.ArroyFnName()); //jon doe
