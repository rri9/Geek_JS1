const films = [
    { name: "Титаник", money: 1e5 },
    { name: "Смешарики", money: 2e5 + 3e4 },
    { name: "Рапунцель", money: 2e4 + 3e3 },
    { name: "Один дома", money: 4e5 + 9e4 }
];

let moneyAll=0;
for (let n = 0; n < films.length; n++) {
    console.log(films[n].money);
    moneyAll += films[n].money;
}
console.log(moneyAll);

//console.log(films);
