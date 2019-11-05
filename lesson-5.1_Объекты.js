let li = new Object();
li = [{ a: 4, b: 5 }, { a: 1, b: 2, c: 3 }];

// Проверка наличия у объекта свойства object.hasOwnProperty()
for (let ob of li) {
    if (ob.hasOwnProperty("c")) {
        console.log(ob["c"]);
    } else console.log("no such property");
}

// Создание объекта, другой способ (как экземпляр глобальноо класса)
const ob = new Object;
ob.a = 1;
ob.r = 11;

let keys = Object.keys(ob);
console.log(keys);
 
let values = Object.values(ob);
console.log(values);

