const kingJoffrey = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "King Joffrey",
  team: "Lanister",
  weapons: ["Cheeky Crossbow"],
  language: "Common Tongue",
  bodyParts: [
    "head",
    "left arm",
    "right arm",
    "left leg",
    "right leg",
    "miss!"
  ],
  mother: "Cersi Lannister",
  father: "Robert Baratheon*",
  sonOrDau: "son",
  title: "King",
  home: "Seven Kingdoms"
});

const jonSnow = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "John Snow",
  team: "Targaryen",
  weapons: ["Valyrian Steel Sword"],
  language: "Common Tongue",
  bodyParts: ["head", "left arm", "right arm", "left leg", "right leg", "miss"],
  mother: "Catelyn Stark",
  father: "Eddard Stark*",
  sonOrDau: "son",
  title: "Prince",
  home: "The North"
});

/* // CODE TOOL CHEST:

//timeout:

setTimeout(function () { alert("Hello"); }, 3000); 


// switch satement: 

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}


*/
console.log(Math.ceil(Math.random() * 1));

// introduce the players
const introducePlayers = function(hero, villain) {
  console.log(
    `Our hero, ${hero.name}, ${hero.sonOrDau} of ${hero.father} and ${
      hero.mother
    }, ${hero.title} of ${hero.home}. `
  );

  setTimeout(function() {
    console.log(
      `Our villain, ${villain.name}, ${villain.sonOrDau} of ${
        villain.father
      } and ${villain.mother}, ${villain.title} of ${villain.home}. `
    );
  }, 1000);

  setTimeout(function() {
    console.log(
      `Coin toss, heads ${hero.name} will go first, tails, ${villain.name}`
    );
  }, 2000);

  setTimeout(function() {
    setFirstPlayer(hero, villain);
  }, 2000);
};

const setFirstPlayer = function(hero, villain) {
  if (Math.ceil(Math.random() * 1) === 1) {
    console.log(`Heads, ${hero.name} goes first!`);
    setTimeout(function() {
      heroMove(hero, villain);
    }, 2000);
  } else {
    console.log(`Tails, ${villain.name} goes first!`);
    setTimeout(function() {
      villainMove(hero, villain);
    }, 2000);
  }
};

const heroMove = function(hero, villain) {
  console.log(`${hero.name} takes out his ${hero.weapons}`);
  setTimeout(function() {
    heroAction(hero, villain);
  }, 2000);
};

const villainMove = function(hero, villain) {
  console.log(`${villain.name} takes out his ${villain.weapons}`);
  setTimeout(function() {
    villainAction(hero, villain);
  }, 2000);
};

const heroAction = function(hero, villain) {
  switch (Math.floor(Math.random()) * 0) {
    case 0:
      console.log(
        `${hero.name} nails ${villain.name} in the ${
          villain.bodyParts[0]
        } with his ${hero.weapons}. ${
          villain.name
        }'s health goes down to zero. ${hero.name} wins!`
      );
      break;
    case 1:
      console.log(
        `${hero.name} strikes ${villain.name} in the ${villain.bodyParts[0]}`
      );
      break;
    case 2:
      // code block
      break;

    case 3:
      // code block
      break;
    case 4:
      // code block
      break;

    case 5:
      // code block
      break;
    case 6:
      // code block
      break;
  }
};

introducePlayers(jonSnow, kingJoffrey);

// for (let i = 0; i < jonSnow.healthPoints + 1; i++) {
//   console.log(`${jonSnow.name} health points: ${jonSnow.healthPoints}`);
// }
