//basic object syntax
let person = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("Hello, World!");
  },
};

//syntax in es6
let person1 = {
  firstName: "John",
  lastName: "Doe",
  greet() {
    //no need of writing function keyword
    console.log("Hello, World!");
  },
};

person.greet();
person1.greet();
