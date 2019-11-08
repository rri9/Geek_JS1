function Bird(speed) {
  this.distance = 0;
  this.speed = speed;
  this.fly = function () {
    this.distance += 100;
  }
}

const eagle = new Bird(100);
eagle.fly();

const owl = new Bird(20);
owl.fly();

console.log(eagle.distance);
console.log(Object.keys(owl));
console.log(Object.values(owl));

/*Создание класса как функции
Свойства можно создавать прямо в теле функции
Параметры для создания вписаны не в конструктор, а 
  в параметры функции

*/