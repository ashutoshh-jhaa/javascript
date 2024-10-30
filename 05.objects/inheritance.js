const user = {
  name: "ashutosh",
  email: "ash@gmail.com",
};
const teacher = {
  makeVideos: true,
};
const teachingSupport = {
  isAvailabe: false,
};
const taSupport = {
  makeAssignment: "name of any assignment",
  fullTime: false,
  //outdated approach
  __proto__: teachingSupport, //now ta support has access to teaching support
};
//outdated approach
teacher.__proto__ = user;
//new approach
Object.setPrototypeOf(teachingSupport, teacher); //teachingSupport has now access to teacher

/*
 *if there lies a situation where we want to a single object or information
 with  other objects we use inheritance 
 basically means that it will inherit the property of another object
 */
