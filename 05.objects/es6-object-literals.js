// Naming the same properties using concise syntax
// Before: Properties need to be explicitly named with the variable name
function createMachine(name, status) {
  return {
    name: name,
    status: status,
  };
}

// After: Properties can be defined with concise syntax
function createMachine1(name, status) {
  return {
    name, // Assigns name to the property 'name'
    status, // Assigns status to the property 'status'
  };
}

// Constructing an object literal from local variables
let name1 = "ashutosh";
let person1 = {
  name1, // Assigns 'ashutosh' to name1 inside the object
};

// Computed property names
// Before: Using variable names to dynamically create property names
let mName = "rog strix";
let machine = {
  [mName]: "server", // The value of mName becomes the property key
  "machine hours": 1000,
};
console.log(machine[mName]); // Outputs: 'server'
console.log(machine["machine hours"]); // Outputs: 1000

// After: Creating dynamic property names with a prefix
let prefix = "machine";
let machine1 = {
  [prefix + " name"]: "server", // Dynamically creates property key 'machine name'
  [prefix + " hours"]: 100, // Dynamically creates property key 'machine hours'
};

// Concise method syntax
// Before: Method definitions require a function keyword
let server = {
  name: "server",
  restart: function () {
    return true;
  },
};

// After: Methods can be defined more concisely
let server1 = {
  name: "anyname",
  restart() {
    return true; // Concise method definition without 'function' keyword
  },
  "name with white space"() {
    return false; // Method name with spaces defined concisely
  },
};
