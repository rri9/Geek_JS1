const rabbit = {
  "color": "red",
  "speed": 10,
  "name": "Вася",
  "getDistance": function (interval) {
    return interval * this.speed;
  }
};

console.log(rabbit.getDistance(2));
