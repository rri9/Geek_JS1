const li = [1, 4, 5];
const ob = { a: 1, b: 4 };

for (let n in li) {
    console.log(li[n]);
}
console.log("");
for (let k in ob) {
    console.log(ob[k]);
}
console.log("");

for (let m of li) { //работает только для итерируемых объектов (массивы, строки)
    console.log(m);
}
console.log("");

//Модифицируем цикл из урока 3.1:
const films = [
    { name: "Титаник", money: 1e5 },
    { name: "Смешарики", money: 2e5 + 3e4 },
    { name: "Рапунцель", money: 2e4 + 3e3 },
    { name: "Один дома", money: 4e5 + 9e4 }
];

let moneyAll=0;
for (let film of films) {
    console.log(film.money);
    moneyAll += film.money;
}
console.log("Всего денег: "+moneyAll);