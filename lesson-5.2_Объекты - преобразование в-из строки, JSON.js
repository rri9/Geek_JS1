//JSON - JavaScript Object Notation

const s = '{"a":1, "b":2, "c": ["asdasd", 987]}'; //Строка
const ob = JSON.parse(s); //Конвертируем строку в объект

console.log(typeof ob); //Проверяем - получился объект
console.log(ob.a);
console.log(ob.c[1]);

//Меняем объект
ob.b = 30;
//Конвертируем объект в строку:
const s2 = JSON.stringify(ob);

console.log(s2);
console.log(typeof s2);
