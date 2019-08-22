// king joffrey
const kingJoffrey = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  gamePhotos: ["https://giphy.com/embed/10bv4HhibS9nZC"],
  healthPoints: 5,
  name: "King Joffrey",
  team: "Lanister",
  weapons: ["Cheeky Crossbow"],
  language: "Common Tongue",
  bodyParts: [" head", " left arm", " right arm", " left leg", " right leg"],
  miss: "You missed me! Save yourself some trouble and kneel before your king.",
  mother: "Cersi Lannister",
  father: "Robert Baratheon*",
  sonOrDau: "son",
  title: "King",
  home: "The Seven Kingdoms",
  photos: [
    "https://giphy.com/embed/jrbMBDlG7C44U",
    "https://giphy.com/embed/emIV62Dw9MHHq"
  ]
});

// jon snow
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
  bodyParts: [" head", " left arm", " right arm", " left leg", " right leg"],
  miss: "Missed me. You'll have to do better than that.",
  mother: "Catelyn Stark",
  father: "Eddard Stark*",
  sonOrDau: "son",
  title: "Prince",
  home: "The North",
  photos: [
    "https://giphy.com/embed/3ohze3CTOzcathfKMM",
    "https://giphy.com/embed/3og0IHyZMxZNkNOWT6",
    "https://giphy.com/embed/gz160Me5941nq"
  ]
});
