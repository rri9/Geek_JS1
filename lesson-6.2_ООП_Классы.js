class Bird {
  fly() {
    this.distance += 100;
  }
}

const eagle = new Bird();
eagle.distance = 0;
eagle.fly();

const owl = new Bird();
owl.distance = 0;
owl.fly();
owl.fly();

console.log(eagle.distance);
console.log(owl.distance);

