const bird = { "flies": true };

class Eagle extends bird {
  constructor(name) {
    this.name = name;
    this.speed = 100;
  }
}

// function Eagle(name) {
//   this.name = name;
//   this.speed = 100;
// }

Eagle.prototype = bird;

eagle1 = new Eagle("Alexander");
console.log(eagle1);
console.log(eagle1.flies);
