// Defining an object 'user' with basic properties
const user = {
  name: "Ashutosh",
  email: "ash@gmail.com",
};

// Creating 'teacher' with specific properties
const teacher = {
  makeVideos: true,
};

// Creating 'teachingSupport' to represent support-related properties
const teachingSupport = {
  isAvailable: false,
};

// Creating 'taSupport' and setting its prototype to 'teachingSupport'
// using an older approach (__proto__)
const taSupport = {
  makeAssignment: "Assignment name",
  fullTime: false,
  __proto__: teachingSupport, // 'taSupport' inherits properties from 'teachingSupport'
};

// Older approach to setting prototypes directly via '__proto__'
teacher.__proto__ = user; // 'teacher' inherits properties from 'user'

// Recommended approach for setting prototypes in modern JavaScript:
Object.setPrototypeOf(teachingSupport, teacher); // 'teachingSupport' inherits from 'teacher'

/*
 * Key Concepts:
 * - Prototype Inheritance: Allows objects to share properties or behaviors with other objects.
 * - __proto__: Outdated syntax for setting prototypes; avoid using it in modern code.
 * - Object.setPrototypeOf: Preferred method for defining inheritance in modern JavaScript.
 * - Inheritance is useful when multiple objects need shared properties or behaviors.
 */
