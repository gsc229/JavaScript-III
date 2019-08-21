// to understand 'this' you need to look at an invokation of the function. 'this' defaults to the window object. if using strict mode it will come up as undefined.
// strict mode:
// "use strict"; // says don't break the mode of the context you are in. //prevents window binding from breaking our oced but will return undefined.

// function ghosts() {
//   console.log(this.boo);
// }
// ghosts();
// const boo = "boo!";

// console.log();

// IMPLICIT BINDING
// -most common
// when a function is invoked look to the left of the dot, that is what the this keyword refers to.
// implicit binding = automatic
// only applies to objects with methods

// let myGhost = {
//   name: "Casper",
//   boo: "booooo!",
//   ghost: function() {
//     console.log(this.boo);
//   }
// };

// myGhost.ghost();

// const petOne = {
//   name: `Ada`,
//   species: "dog",
//   pronoun: "she",
//   favFood: "Salmon",
//   eat: function() {
//     return `${this.name} is a ${this.species} and ${
//       this.pronoun
//     } likes to eat ${this.favFood}`;
//   }
// };

// const petTwo = {
//   name: `Frank`,
//   species: "turtle",
//   pronoun: "he",
//   favFood: "Lettuce",
//   eat: function() {
//     return `${this.name} is a ${this.species} and ${
//       this.pronoun
//     } likes to eat ${this.favFood}`;
//   }
// };

// const petThree = {
//   name: `Batman`,
//   species: "dog",
//   pronoun: "he",
//   favFood: "Chicken",
//   eat: function() {
//     return `${this.name} is a ${this.species} and ${
//       this.pronoun
//     } likes to eat ${this.favFood}`;
//   }
// };

// const petFour = {
//   name: `Ernie`,
//   species: "cat",
//   pronoun: "he",
//   favFood: "Chicken",
//   eat: function() {
//     return `${this.name} is a ${this.species} and ${
//       this.pronoun
//     } likes to eat ${this.favFood}`;
//   }
// };

// const petFive = {
//   name: `Jojo`,
//   species: "bird",
//   pronoun: "he",
//   favFood: "Humans",
//   eat: function() {
//     return `${this.name} is a ${this.species} and ${
//       this.pronoun
//     } likes to eat ${this.favFood}`;
//   }
// };

const person = {
  name: "Steve",
  age: 32,
  location: "New York",
  greet: function() {
    return `“hi, I am ${this.name}, I’m from ${this.location} and I am ${
      this.age
    } years old”`;
  }
};
// console.log(petOne.eat());
// console.log(petTwo.eat());
// console.log(petThree.eat());
// console.log(petFour.eat());
// console.log(petFive.eat());
// console.log(person.greet());

// EXPLICIT BINDING .call() .bind()--> rturns a new function .apply(arr)
// we can explicitly tell the javascript engine to point to a certain value useing call, apply, and bind.
// call apply and bind can be used to invoke a function with a specific value for 'this'.

function ghost() {
  console.log(this.boo);
}

let myGhost = {
  name: "Casper",
  boo: "boooo!"
};

//ghost.call(myGhost); // 'this' is myGhost
// call and apply accomplish the same task and the first argument is what 'this' refers to
// call pass in arguments one by one
// apply pass in arguments as array

//BIND is used to create a new function that is permanently bound to a 'this' value. .bind() is not invoked immediately.

// friendlyGhost = ghost.bind(myGhost);
// friendlyGhost();

// function catCall() {
//   console.log(`Meow`);
// }

// catCall.call(petFour);
// console.log(petFour);

// NEW BINDING
// when invoked as a constucotr funciton using the 'this' keyword. Using the 'new' keyword constructs a new object, and this points to it.
/*
function GhostTwo(saying) {
  this.thing = saying;
}

let myGhost2 = new GhostTwo(`Casper the friendly ghost`);

console.log(myGhost.thing);

// Instructions:
// Create a function of called food and pass in a parameter of favourite set this food to your parameter
// Create a new function using the new keyword called myFavouriteFood and pass in the parameter of your favourite cuisine
// Console log my favourite food is: and the result

function Food(fav) {
  this.favFood = fav;
}

let myFavouriteFood = new Food("hot dogs");

console.log(myFavouriteFood.favFood);
*/

// PROTOTYPES
// A Constructor function constructs other objects - that's it's whole purpose

function Pet(attributes) {
  (this.newName = attributes.name),
    (this.newSpecies = attributes.species),
    (this.newPronoun = attributes.pronoun),
    (this.newFavFood = attributes.favFood),
    (this.newSound = attributes.sound);
}

// prototype
Pet.prototype.eat = function() {
  return `${this.newName} is a ${this.newSpecies} and ${
    this.newPronoun
  } likes to eat ${this.newFavFood}`;
};

// put the new Pet const in front of each.
const petOne = new Pet({
  name: `Ada`,
  species: "dog",
  pronoun: "she",
  favFood: "Salmon"
});

const petTwo = new Pet({
  name: `Frank`,
  species: "turtle",
  pronoun: "he",
  favFood: "Lettuce"
});

const petThree = new Pet({
  name: `Batman`,
  species: "dog",
  pronoun: "he",
  favFood: "Chicken"
});

const petFour = new Pet({
  name: `Ernie`,
  species: "cat",
  pronoun: "he",
  favFood: "Chicken"
});

const petFive = new Pet({
  name: `Jojo`,
  species: "bird",
  pronoun: "he",
  favFood: "Humans"
});

petOne.sound = "ruff";

// console.log(petTwo.eat());
// console.log(petThree.eat());
// console.log(petFour.eat());
// console.log(petFive.eat());
// console.log(person.greet());
// Instructions:
// Add a new attribute of sound to these objects
// Create a new method called speak
// Make the pet say it’s sound
//   (you are doing this using.prototype)

Pet.prototype.speak = function() {
  console.log(`${this.newName} says: ${this.sound}`);
};

console.log(petOne.speak());
