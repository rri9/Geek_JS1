const films = [
    { name: "Титаник", money: 1e5 },
    { name: "Смешарики", money: 2e5 + 3e4 },
    { name: "Рапунцель", money: 2e4 + 3e3 },
    { name: "Один дома", money: 4e5 + 9e4 }
];

const origins = {
    "Титаник": "Российская Федерация",
    "Смешарики": "США",
    "Рапунцель": "",
    "Один дома": ""
};

for (let n in origins) {
    console.log(n + " " + origin.n);
}

// for (let film of films) {
//     film.country = origins[film].name;
// }