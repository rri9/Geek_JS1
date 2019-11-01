const films = [
    { name: "Титаник", money: 1e5 },
    { name: "Смешарики", money: 2e5 + 3e4 },
    { name: "Рапунцель", money: 2e4 + 3e3 },
    { name: "Один дома", money: 4e5 + 9e4 }
];

const origins = {
    "Титаник": "Российская Федерация",
    "Смешарики": "США",
    "Рапунцель": "Республика Беларусь",
    "Один дома": "СшА"
};

//Добавляем св-во contry в films через for, перебирая films
// for (let film of films) {
//     film.country = origins[film.name];
// }

//Добавляем св-во contry в films через for, перебирая origins
// for (let n in origins) {
//     for (let film of films) {
//         if (n === film.name) {
//             film.country = origins[n];
//         }
//     }
// }

let money = 0;
//Добавляем св-во contry в films через map
films.map(film => film["country"] = origins[film["name"]]);
//Считаем сумму полей money через forEach
films.forEach(film => money += film["money"]);