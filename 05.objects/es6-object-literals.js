//naming same properties
//before
function createMachine(name, status) {
  return {
    name: name,
    status: status,
  };
}
//after
function createMachine1(name, status) {
  return {
    name,
    status,
  };
}

//construct an object literal from local variables
let name1='ashutosh'
let person1={
  name1;//assigns 'ashutosh' to name1 inside of object
}

//computed property name
//before
/* let mName='rog strix'
let machine={
  [name]:'server',
  'machine hours':1000,
}
console.log(machine[name])//rog strix
console.log(machine['machine hours'])//1000 */

//after
let prefix='machine'
let machine1={
  [prefix+' name']:'server',
  [prefix+' hours']:100
}
//consice method syntax 
//before
let server={
  name:'server',
  restart:function(){
    return true
  }
}
//after
let server1={
  name:'anyname',
  restart(){
    return true
  },
  'name with white space'(){
    return false
  }
}
