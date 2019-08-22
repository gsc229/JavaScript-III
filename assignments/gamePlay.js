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

// change gif
  document
      .getElementById("gif")
      .setAttribute("src", "https://giphy.com/embed/10bv4HhibS9nZC");

// change text 

    document.getElementById("blurb").innerHTML = `Coin toss: if heads, ${
      hero.name
    } will go first, tails, ${villain.name}`;

*/

// introduce the players
const introducePlayers = function(hero, villain) {
  // hero intro
  setTimeout(function() {
    document.getElementById("blurb").innerHTML = `Our hero, ${hero.name}, ${
      hero.sonOrDau
    } of ${hero.father} and ${hero.mother}, and ${hero.title} of ${
      hero.home
    }. `;

    document.getElementById("gif").src = `${hero.photos[0]}`;
  }, 1000);

  console.log(
    `Our hero, ${hero.name}, ${hero.sonOrDau} of ${hero.father} and ${
      hero.mother
    }, and ${hero.title} of ${hero.home}. `
  );
  //villain intro
  setTimeout(function() {
    document.getElementById("blurb").innerHTML = `Our villain, ${
      villain.name
    }, ${villain.sonOrDau} of ${villain.father} and ${villain.mother}, and ${
      villain.title
    } of ${villain.home}. `;

    document.getElementById("gif").src = `${villain.photos[0]}`;

    console.log(
      `Our villain, ${villain.name}, ${villain.sonOrDau} of ${
        villain.father
      } and ${villain.mother}, and ${villain.title} of ${villain.home}. `
    );
  }, 8000);

  // explaining the coin toss
  setTimeout(function() {
    document.getElementById("blurb").innerHTML = `Coin toss: if heads, ${
      hero.name
    } will go first, tails, ${villain.name}`;
    console.log(
      `Coin toss: if heads, ${hero.name} will go first, tails, ${villain.name}`
    );
    // coin toss photo
    document.getElementById("gif").src = villain.gamePhotos[0];
  }, 13000);

  setTimeout(function() {
    setFirstPlayer(hero, villain);
  }, 18000);
};
// first player selction
const setFirstPlayer = function(hero, villain) {
  if (Math.ceil(Math.random() * 1) === 1) {
    document.getElementById("gif").src = `${hero.photos[0]}`;
    document.getElementById("blurb").innerHTML = `Heads, ${
      hero.name
    } goes first!`;

    console.log(`Heads, ${hero.name} goes first!`);
    setTimeout(function() {
      heroMove(hero, villain);
    }, 5000);
  } else {
    document.getElementById("gif").src = `${villain.photos[0]}`;
    document.getElementById("blurb").innerHTML = `Tails, ${
      villain.name
    } goes first!`;

    console.log(`Tails, ${villain.name} goes first!`);
    setTimeout(function() {
      villainMove(hero, villain);
    }, 5000);
  }
};
// hero initial move
const heroMove = function(hero, villain) {
  document.getElementById("gif").src = `${hero.photos[1]}`;
  document.getElementById("blurb").innerHTML = `Hero Move: ${
    hero.name
  } takes out his ${hero.weapons}`;

  console.log(`Hero Move: ${hero.name} takes out his ${hero.weapons}`);
  setTimeout(function() {
    heroAction(hero, villain);
  }, 8000);
};
// villain initial move
const villainMove = function(hero, villain) {
  document.getElementById("gif").src = `${villain.photos[0]}`;
  document.getElementById("blurb").innerHTML = `Villain Move: ${
    villain.name
  } takes out his ${villain.weapons}`;

  console.log(`Villain Move: ${villain.name} takes out his ${villain.weapons}`);
  setTimeout(function() {
    villainAction(hero, villain);
  }, 5000);
};

const heroAction = function(hero, villain) {
  // original switch: Math.floor(Math.random() * villain.bodyParts.length)
  switch (Math.floor(Math.random() * villain.bodyParts.length)) {
    case 0:
      villain.healthPoints = 0;
      document.getElementById("gif").src = `${hero.photos[0]}`;
      document.getElementById("result").innerHTML = `${hero.name} nails ${
        villain.name
      } in the ${villain.bodyParts[0]} with his ${hero.weapons}. ${
        villain.name
      }'s health goes down to ${villain.healthPoints}. ${hero.name} wins!`;

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
      let rightArmIndex = villain.bodyParts.indexOf(" right arm");

      if (rightArmIndex === -1) {
        console.log(villain.miss);
      } else {
        document.getElementById("gif").src = `${hero.photos[0]}`;
        document.getElementById("blurb").innerHTML = `${hero.name} takes ${
          villain.name
        }'s ${villain.bodyParts[rightArmIndex]}`;

        console.log(
          `${hero.name} takes ${villain.name}'s ${
            villain.bodyParts[rightArmIndex]
          }`
        );

        villain.bodyParts.splice(rightArmIndex, 1);

        document.getElementById("result").innerHTML = `${
          villain.name
        } remaining body parts: ${villain.bodyParts} <br> ${
          villain.name
        } loses 1 health point: ${villain.healthPoints}`;

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

      let leftLegIndex = villain.bodyParts.indexOf(" left leg");
      if (leftLegIndex === -1) {
        console.log(villain.miss);
      } else {
        document.getElementById("gif").src = `${hero.photos[0]}`;
        document.getElementById("blurb").innerHTML = `${hero.name} takes ${
          villain.name
        }'s ${villain.bodyParts[leftLegIndex]}`;

        console.log(
          `${hero.name} takes ${villain.name}'s ${
            villain.bodyParts[leftLegIndex]
          }`
        );

        villain.bodyParts.splice(leftLegIndex, 1);

        document.getElementById("result").innerHTML = `${
          villain.name
        } remaining body parts: ${villain.bodyParts} <br> ${
          villain.name
        } loses 1 health point: ${villain.healthPoints}`;

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
      let leftArmIndex = villain.bodyParts.indexOf(" left arm");
      if (leftArmIndex === -1) {
        console.log(villain.miss);
      } else {
        document.getElementById("gif").src = `${hero.photos[0]}`;
        document.getElementById("blurb").innerHTML = `${hero.name} takes ${
          villain.name
        }'s ${villain.bodyParts[leftArmIndex]}`;

        console.log(
          `${hero.name} takes ${villain.name}'s ${
            villain.bodyParts[leftArmIndex]
          }`
        );

        villain.bodyParts.splice(leftArmIndex, 1);

        document.getElementById("result").innerHTML = `${
          villain.name
        } remaining body parts: ${villain.bodyParts} <br> ${
          villain.name
        } loses 1 health point: ${villain.healthPoints}`;

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

    case 4:
      villain.healthPoints -= 1;
      let rightLegIndex = villain.bodyParts.indexOf(" right leg");
      if (rightLegIndex === -1) {
        console.log(villain.miss);
      } else {
        document.getElementById("gif").src = `${hero.photos[0]}`;
        document.getElementById("blurb").innerHTML = `${hero.name} takes ${
          villain.name
        }'s ${villain.bodyParts[rightLegIndex]}`;

        console.log(
          `${hero.name} takes ${villain.name}'s ${
            villain.bodyParts[rightLegIndex]
          }`
        );

        villain.bodyParts.splice(rightLegIndex, 1);

        document.getElementById("result").innerHTML = `${
          villain.name
        } remaining body parts: ${villain.bodyParts} <br> ${
          villain.name
        } loses 1 health point: ${villain.healthPoints}`;

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
  // original trigger:  Math.floor(Math.random() * hero.bodyParts.length)
  switch (Math.floor(Math.random() * hero.bodyParts.length)) {
    case 0:
      hero.healthPoints = 0;

      document.getElementById("gif").src = `${villain.photos[0]}`;
      document.getElementById("result").innerHTML = `${villain.name} nails ${
        hero.name
      } in the ${hero.bodyParts[0]} with his ${villain.weapons}. ${
        hero.name
      }'s health goes down to ${hero.healthPoints}. ${villain.name} wins!`;

      console.log(
        `${villain.name} nails ${hero.name} in the ${
          hero.bodyParts[0]
        } with his ${villain.weapons}. ${hero.name}'s health goes down to ${
          hero.healthPoints
        }. ${villain.name} wins!`
      );
      break;

    case 1:
      hero.healthPoints -= 1;
      let rightArmIndex = hero.bodyParts.indexOf(" right arm");

      if (rightArmIndex === -1) {
        console.log(hero.miss);
      } else {
        document.getElementById("gif").src = `${villain.photos[0]}`;
        document.getElementById("blurb").innerHTML = `${villain.name} takes ${
          hero.name
        }'s ${hero.bodyParts[rightArmIndex]}`;

        console.log(
          `${villain.name} takes ${hero.name}'s ${
            hero.bodyParts[rightArmIndex]
          }`
        );

        hero.bodyParts.splice(rightArmIndex, 1);

        document.getElementById("result").innerHTML = `${
          hero.name
        } remaining body parts: ${hero.bodyParts} <br> ${
          hero.name
        } loses 1 health point: ${hero.healthPoints}`;
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

      let leftLegIndex = hero.bodyParts.indexOf(" left leg");
      if (leftLegIndex === -1) {
        console.log(hero.miss);
      } else {
        document.getElementById("gif").src = `${villain.photos[0]}`;
        document.getElementById("blurb").innerHTML = `${villain.name} takes ${
          hero.name
        }'s ${hero.bodyParts[leftLegIndex]}`;

        console.log(
          `${villain.name} takes ${hero.name}'s ${hero.bodyParts[leftLegIndex]}`
        );

        hero.bodyParts.splice(leftLegIndex, 1);

        document.getElementById("result").innerHTML = `${
          hero.name
        } remaining body parts: ${hero.bodyParts} <br> ${
          hero.name
        } loses 1 health point: ${hero.healthPoints}`;

        console.log(`${hero.name} remaining body parts: ${hero.bodyParts}`);
        console.log(`${hero.name} loses 1 health point: ${hero.healthPoints}`);

        setTimeout(function() {
          heroAction(hero, villain);
        }, 8000);
      }
      // code block
      break;
    // villain case three
    case 3:
      hero.healthPoints -= 1;
      let leftArmIndex = hero.bodyParts.indexOf(" left arm");
      if (leftArmIndex === -1) {
        console.log(hero.miss);
      } else {
        document.getElementById("gif").src = `${villain.photos[0]}`;
        document.getElementById("blurb").innerHTML = `${villain.name} takes ${
          hero.name
        }'s ${hero.bodyParts[leftArmIndex]}`;

        console.log(
          `${villain.name} takes ${hero.name}'s ${hero.bodyParts[leftArmIndex]}`
        );

        hero.bodyParts.splice(leftArmIndex, 1);

        document.getElementById("result").innerHTML = `${
          hero.name
        } remaining body parts: ${hero.bodyParts} <br> ${
          hero.name
        } loses 1 health point: ${hero.healthPoints}`;

        console.log(`${hero.name} remaining body parts: ${hero.bodyParts}`);
        console.log(`${hero.name} loses 1 health point: ${hero.healthPoints}`);

        setTimeout(function() {
          heroAction(hero, villain);
        }, 8000);
      }

      // code block
      break;
    // code block
    // villian case four
    case 4:
      hero.healthPoints -= 1;
      let rightLegIndex = hero.bodyParts.indexOf(" right leg");
      if (rightLegIndex === -1) {
        console.log(hero.miss);
      } else {
        document.getElementById("gif").src = `${villain.photos[0]}`;
        document.getElementById("blurb").innerHTML = `${villain.name} takes ${
          hero.name
        }'s ${hero.bodyParts[rightLegIndex]}`;

        console.log(
          `${villain.name} takes ${hero.name}'s ${
            hero.bodyParts[rightLegIndex]
          }`
        );

        hero.bodyParts.splice(rightLegIndex, 1);

        document.getElementById("result").innerHTML = `${
          hero.name
        } remaining body parts: ${hero.bodyParts} <br> ${
          hero.name
        } loses 1 health point: ${hero.healthPoints}`;

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

// for (let i = 0; i < jonSnow.healthPoints + 1; i++) {
//   console.log(`${jonSnow.name} health points: ${jonSnow.healthPoints}`);
// }
