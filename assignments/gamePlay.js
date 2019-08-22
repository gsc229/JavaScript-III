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

// introduce the players
const introducePlayers = function(hero, villain) {
  console.log(
    `Our hero, ${hero.name}, ${hero.sonOrDau} of ${hero.father} and ${
      hero.mother
    }, and ${hero.title} of ${hero.home}. `
  );

  setTimeout(function() {
    console.log(
      `Our villain, ${villain.name}, ${villain.sonOrDau} of ${
        villain.father
      } and ${villain.mother}, and ${villain.title} of ${villain.home}. `
    );
  }, 8000);

  setTimeout(function() {
    console.log(
      `Coin toss: if heads, ${hero.name} will go first, tails, ${villain.name}`
    );
  }, 13000);

  setTimeout(function() {
    setFirstPlayer(hero, villain);
  }, 18000);
};

const setFirstPlayer = function(hero, villain) {
  if (Math.ceil(Math.random() * 1) === 1) {
    console.log(`Heads, ${hero.name} goes first!`);
    setTimeout(function() {
      heroMove(hero, villain);
    }, 5000);
  } else {
    console.log(`Tails, ${villain.name} goes first!`);
    setTimeout(function() {
      villainMove(hero, villain);
    }, 5000);
  }
};

const heroMove = function(hero, villain) {
  console.log(`Hero Move: ${hero.name} takes out his ${hero.weapons}`);
  setTimeout(function() {
    heroAction(hero, villain);
  }, 8000);
};

const villainMove = function(hero, villain) {
  console.log(`Villain Move: ${villain.name} takes out his ${villain.weapons}`);
  setTimeout(function() {
    villainAction(hero, villain);
  }, 5000);
};

const heroAction = function(hero, villain) {
  switch (Math.floor(Math.random() * villain.bodyParts.length)) {
    case 0:
      villain.healthPoints = 0;
      console.log(
        `${hero.name} nails ${villain.name} in the ${
          villain.bodyParts[0]
        } with his ${hero.weapons}. ${villain.name}'s health goes down to ${
          villain.healthPoints
        }. ${hero.name} wins!`
      );
      break;

    case 1:
      villain.healthPoints -= 1;
      let rightArmIndex = villain.bodyParts.indexOf("right arm");

      if (rightArmIndex === -1) {
        console.log(villain.miss);
      } else {
        console.log(
          `${hero.name} takes ${villain.name}'s ${
            villain.bodyParts[rightArmIndex]
          }`
        );

        villain.bodyParts.splice(rightArmIndex, 1);

        console.log(
          `${villain.name} remaining body parts: ${villain.bodyParts}`
        );
        console.log(
          `${villain.name} loses 1 health point: ${villain.healthPoints}`
        );

        setTimeout(function() {
          villainAction(hero, villain);
        }, 8000);
      }
      // code block
      break;

    case 2:
      villain.healthPoints -= 1;

      let leftLegIndex = villain.bodyParts.indexOf("left leg");
      if (leftLegIndex === -1) {
        console.log(villain.miss);
      } else {
        console.log(
          `${hero.name} takes ${villain.name}'s ${
            villain.bodyParts[leftLegIndex]
          }`
        );

        villain.bodyParts.splice(leftLegIndex, 1);

        console.log(
          `${villain.name} remaining body parts: ${villain.bodyParts}`
        );
        console.log(
          `${villain.name} loses 1 health point: ${villain.healthPoints}`
        );

        setTimeout(function() {
          villainAction(hero, villain);
        }, 8000);
      }
      // code block
      break;

    case 3:
      villain.healthPoints -= 1;
      let leftArmIndex = villain.bodyParts.indexOf("left arm");
      if (leftArmIndex === -1) {
        console.log(villain.miss);
      }
      console.log(
        `${hero.name} takes ${villain.name}'s ${
          villain.bodyParts[leftArmIndex]
        }`
      );

      villain.bodyParts.splice(leftArmIndex, 1);

      console.log(`${villain.name} remaining body parts: ${villain.bodyParts}`);
      console.log(
        `${villain.name} loses 1 health point: ${villain.healthPoints}`
      );

      setTimeout(function() {
        villainAction(hero, villain);
      }, 8000);
      // code block
      break;
    // code block

    case 4:
      villain.healthPoints -= 1;
      let rightLegIndex = villain.bodyParts.indexOf("right leg");
      if (rightLegIndex === -1) {
        console.log(villain.miss);
      } else {
        console.log(
          `${hero.name} takes ${villain.name}'s ${
            villain.bodyParts[rightLegIndex]
          }`
        );

        villain.bodyParts.splice(rightLegIndex, 1);

        console.log(
          `${villain.name} remaining body parts: ${villain.bodyParts}`
        );
        console.log(
          `${villain.name} loses 1 health point: ${villain.healthPoints}`
        );

        setTimeout(function() {
          villainAction(hero, villain);
        }, 8000);
      }
      // code block
      break;
    // code block
  }
};

const villainAction = function(hero, villain) {
  switch (Math.floor(Math.random() * hero.bodyParts.length)) {
    case 0:
      hero.healthPoints = 0;
      console.log(
        `${villain.name} nails ${hero.name} in the ${
          hero.bodyParts[0]
        } with his ${hero.weapons}. ${hero.name}'s health goes down to ${
          hero.healthPoints
        }. ${villain.name} wins!`
      );
      break;

    case 1:
      hero.healthPoints -= 1;
      let rightArmIndex = hero.bodyParts.indexOf("right arm");

      if (rightArmIndex === -1) {
        console.log(hero.miss);
      } else {
        console.log(
          `${villain.name} takes ${hero.name}'s ${
            hero.bodyParts[rightArmIndex]
          }`
        );

        hero.bodyParts.splice(rightArmIndex, 1);

        console.log(`${hero.name} remaining body parts: ${hero.bodyParts}`);
        console.log(`${hero.name} loses 1 health point: ${hero.healthPoints}`);

        setTimeout(function() {
          heroAction(hero, villain);
        }, 8000);
      }
      // code block
      break;

    case 2:
      hero.healthPoints -= 1;

      let leftLegIndex = hero.bodyParts.indexOf("left leg");
      if (leftLegIndex === -1) {
        console.log(hero.miss);
      } else {
        console.log(
          `${villain.name} takes ${hero.name}'s ${hero.bodyParts[leftLegIndex]}`
        );

        hero.bodyParts.splice(leftLegIndex, 1);

        console.log(`${hero.name} remaining body parts: ${hero.bodyParts}`);
        console.log(`${hero.name} loses 1 health point: ${hero.healthPoints}`);

        setTimeout(function() {
          heroAction(hero, villain);
        }, 8000);
      }
      // code block
      break;

    case 3:
      hero.healthPoints -= 1;
      let leftArmIndex = hero.bodyParts.indexOf("left arm");
      if (leftArmIndex === -1) {
        console.log(hero.miss);
      }
      console.log(
        `${villain.name} takes ${hero.name}'s ${hero.bodyParts[leftArmIndex]}`
      );

      hero.bodyParts.splice(leftArmIndex, 1);

      console.log(`${hero.name} remaining body parts: ${hero.bodyParts}`);
      console.log(`${hero.name} loses 1 health point: ${hero.healthPoints}`);

      setTimeout(function() {
        heroAction(hero, villain);
      }, 8000);
      // code block
      break;
    // code block

    case 4:
      hero.healthPoints -= 1;
      let rightLegIndex = hero.bodyParts.indexOf("right leg");
      if (rightLegIndex === -1) {
        console.log(hero.miss);
      } else {
        console.log(
          `${villain.name} takes ${hero.name}'s ${
            hero.bodyParts[rightLegIndex]
          }`
        );

        hero.bodyParts.splice(rightLegIndex, 1);

        console.log(`${hero.name} remaining body parts: ${hero.bodyParts}`);
        console.log(`${hero.name} loses 1 health point: ${hero.healthPoints}`);

        setTimeout(function() {
          heroAction(hero, villain);
        }, 8000);
      }
      // code block
      break;
    // code block
  }
};

introducePlayers(jonSnow, kingJoffrey);

// for (let i = 0; i < jonSnow.healthPoints + 1; i++) {
//   console.log(`${jonSnow.name} health points: ${jonSnow.healthPoints}`);
// }
