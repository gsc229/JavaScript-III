// constructor functions
function Animal(object) {
  this.name = object.name;
}

function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
  // this.speak = function() {
  //   console.log(`${this.name} is speaking.`);
  //   return `Hello, y name is ${this.name}`;
  // }; // *commented out for next example under Object prototypes
}

// const fred = new Person({
//   age: 32,
//   name: "Fred",
//   homeTown: "Bedrock"
// });

// fred.speak();  // *commented out for next example under Object prototypes

// Object prototype
/* 
 ^allows for inheritence.
 ^ Allows one to 'deliberately' modify an object's properties
 ^Helps to avoid memory problems
 ^Allows one to extend an object's properties to another object
 ^!caution: you can overide an entire objects methods
*/

Person.prototype.speak = function() {
  console.log(`${this.name} is speaking.`);
  return `Hello, my name is ${this.name}`;
};

const fred = new Person({
  age: 32,
  name: "Fred",
  homeTown: "Bedrock"
});

console.log(fred); // speak() is gone bc we put it on the prototype you can see it if you look under the prototype.

function Child(childAttributes) {
  Person.call(this, childAttributes); //binding this to Person
  this.isChild = childAttributes.isChild; //this will be a special attribute to Child
}

Child.prototype = Object.create(Person.prototype); // giving the Child prototype the same prototype as the Person prototype.

const pebbles = new Child({
  age: 3,
  name: "Pebbles",
  homeTown: "Bedrock"
});

console.log(pebbles); // you can see that pebbles has the Person constructor in her prototype, therefore you can use the speak
pebbles.speak();
