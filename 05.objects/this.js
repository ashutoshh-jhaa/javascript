// 'this' in objects refers to the current object instance
const peoples = {
  firstName: "ashutosh",
  lastName: "jha",

  // method to log the full name using 'this' to access properties
  fullName() {
    console.log(`${this.firstName} ${this.lastName}`); // Outputs: "ashutosh jha"
  },
};

// invoke the fullName method
peoples.fullName(); // Calls the method to print the full name
