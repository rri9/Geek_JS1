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

if (getAliveBirdsAmount() === 1) {
  console.log(`There is only one alive bird left!`);
  console.log(`It is bird${getRandomAliveBirdIndex()}. Congratulations!`);
  
}
console.log("\nChecking score...");
let scoreTable = [];
for (let i = 0; i < birdsAmount; i++) {
  scoreTable[i] = { name: birds[i].name, score: birds[i].points};
}
scoreTable.sort(scoreTableCompare);

console.log("Best headhunters are:");
for (let n in scoreTable) {
  console.log(`${+n+1}. ${scoreTable[n].name} eated ${scoreTable[n].score} birds`);
}
console.log("\nParty is over! =)");

//Функции
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

//TODO Почему не работает с тернарным оператором?
function scoreTableCompare(a, b) {
  (a.score < b.score) ? 1 : -1;
  // if (a.score < b.score) {
  //   return 1;
  // } else {
  //   return -1;
  // }
};