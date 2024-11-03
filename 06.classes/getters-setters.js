// Class definition for Person
class Person {
  constructor(name) {
    // Using setter to assign the name
    this.setName(name);
  }

  // Getter method to retrieve the name
  getName() {
    return this.name;
  }

  // Setter method to set the name with validation
  setName(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this.name = newName;
  }
}

// Creating an instance of Person
let person = new Person("ashutosh jha");
console.log(person);

// Updating the name using the setter method
person.setName("Jane Smith");
console.log(person.getName()); // Logs: "Jane Smith"

// Class definition for Person1 using getter and setter syntax
class Person1 {
  constructor(name) {
    this._name = name;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with validation
  set name(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this._name = newName;
  }
}

// Creating an instance of Person1
let person1 = new Person1("ashutosh");
console.log(person1);
console.log(person1.name); // Invoking getter, logs: "ashutosh"

// Updating the name using the setter
person1.name = "abhishek"; // Invoking setter
console.log(person1);

// Object literal with a getter for the latest attendee
let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting.`);
    this.attendees.push(attendee);
    return this;
  },
  get latest() {
    // Getter to retrieve the latest attendee
    let count = this.attendees.length;
    return count === 0 ? "no one attended" : this.attendees[count - 1];
  },
};

// Using the getter to get the latest attendee
console.log(meeting.latest); // Logs: "no one attended"

// Adding an attendee to the meeting
meeting.add("ashutosh");
console.log(meeting.latest); // Logs: 'ashutosh'
