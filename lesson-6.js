class Bird {
  constructor(name) {
    this.name = name;
    this.points = 0;
    this.wasEaten = false;
  }
  eat(name) {
    this.points++;
    name.wasEaten = true;
  }
}

// const bird1 = new Bird("bird1");
// const bird2 = new Bird("bird2");
// const bird3 = new Bird("bird3");
// const bird4 = new Bird("bird4");
// const bird5 = new Bird("bird5");
// const bird6 = new Bird("bird6");
// const bird7 = new Bird("bird7");
// const bird8 = new Bird("bird8");
// const bird9 = new Bird("bird9");
// const bird10 = new Bird("bird10");
const birdsAmount = 10;
const birds = [];

console.log("There can be only one...!");
console.log("");
console.log("Creating birds...");

for (let i = 0; i < birdsAmount; i++) {
  birds[i] = new Bird(`bird${i}`);
}
console.log(`Now there are ${birds.length} birds!`);
console.log("");

console.log("Fight!");
while (getAliveBirdsAmount() > 1) {
  let dominantBirdIndex = getRandomAliveBirdIndex();
  let weakBirdIndex = getRandomAliveBirdIndex();
  while (weakBirdIndex === dominantBirdIndex) {
    weakBirdIndex = getRandomAliveBirdIndex();
  }
  birds[dominantBirdIndex].eat(birds[weakBirdIndex]);
  console.log(`bird${dominantBirdIndex} eating bird${weakBirdIndex}`);
}
console.log("");

console.log(`Now there are ${getAliveBirdsAmount()} alive bird!`);

function getAliveBirdsAmount() {
  let aliveBirdsAmount = 0;
  for (let n of birds) {
    if (n.wasEaten === false) aliveBirdsAmount++;
  }
  return aliveBirdsAmount;
}

function getRandomAliveBirdIndex() {
  let rand;
  do {
    rand = Math.random() * birdsAmount;
    rand = Math.floor(rand);
  } while (birds[rand].wasEaten !== false);
  return rand;
}
