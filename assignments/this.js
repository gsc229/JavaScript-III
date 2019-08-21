/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding: global contexts (binding, scope) - this is the window or console object
 * 2. Implicit binding: implicit binding 'this' points to the object context. Whenever a function is called by a preceding dot, the object left of the dot gets 'this'
 * 3. New binding: whenever a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function. use the 'New' keyword
 * 4. Explicit binding: overides what the 'this' keyword points to. you can give it another object. you can use .call .bind .apply
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: "Hello",
  speak: function() {
    console.log(`implicit this: === |`, this);
    return `${this.greeting}, world`;
  }
};

myObj.speak();
// Principle 3
// code example for New Binding
//this is a constuctor:
function Person(obj) {
  this.name = obj.name;
  this.age = obj.age;
  this.speak = function() {
    return `Hello, my name is ${this.name}, and I am ${this.age} years old!`;
  };
}

const greg = new Person({ name: "Greg", age: 35 });
const mark = new Person({ name: "Mark", age: 34 });
// console.log(greg.speak());
// console.log(mark.speak());

// Principle 4

// code example for Explicit Binding
console.log(greg.speak.call(mark));
//apply is the same as call, but takes an array of arguments
console.log(greg.speak.apply(mark));
