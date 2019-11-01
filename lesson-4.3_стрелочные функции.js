const films = [
    { name: "Титаник", money: 1e5 },
    { name: "Смешарики", money: 2e5 + 3e4 },
    { name: "Рапунцель", money: 2e4 + 3e3 },
    { name: "Один дома", money: 4e5 + 9e4 }
];

const origins = {
    Титаник: "Российская Федерация",
    Смешарики: "США",
    Рапунцель: "Республика Беларусь",
    "Один дома": "СшА"
};

let money = 0;

//Добавляем св-во contry в films через map
films.map(film => (film["country"] = origins[film["name"]]));
//Считаем сумму полей money через forEach
films.forEach(film => (money += film["money"]));

// console.log(films);
// console.log(money);

/*------------------------------------------*/
//Создаем функию обычно:
const foo = function(x) {
    console.log(x);
};
//Стрелочная йункция (лямбда выражение):
// const foo_arrow = (x) => { console.log(x); };
const foo_arrow = x => console.log(x); //То же самое, но короче,т.к. один аргумент

// foo("Hey!");
// foo_arrow("Hello");
/*------------------------------------------*/
const li = ["qwe", "lkj", "abc"];
// li.sort(); // Сортировка по первому (и оследующим) символам
 /*li.sort(function (x, y) {
    console.log(x[1] + " <> " +y[1] + " " + (x[1] > y[1]) );
    
    return x[1] - y[1];
    }
); // Сортировка по 2му символу*/
li.sort( (x, y) => y[1]>x[1] );

console.log(li);
