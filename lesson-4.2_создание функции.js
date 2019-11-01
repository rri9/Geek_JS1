//Определение функции через выражение - Expression
const get = function () {
    console.log("Hey!");
};

//Определение функции через объявление - Declaration
function getTempPrediction(firstDay, secondDay) {
    return 0.5 * firstDay + 0.5 * secondDay;
}
// console.log(getTempPrediction(40, 20));
// console.log(getTempPrediction(30, 10));

//Работа с неизвестным кол-ком аргументов
function getTempPredictionMany(...days) {
    let sum = 0;
    let indexes=0
    // days.map(day => sum+=day);   //Препод это удалил, хотя работает!
    
    //Один аргумент:
    // days.forEach(function (item) { sum += item;}) //Полная запись
    days.forEach(item => sum += item) //Стрелочное выражение

    //Два аргумента:
    // days.forEach(function (item, i) { sum += item; indexes+=i }) //Полная запись
    // days.forEach((item, i) => { sum += item; indexes += i; }) //Стрелочное выражение
    // console.log(sum);
    // console.log(indexes);
    console.log(sum/days.length);
    
}
getTempPredictionMany(1,4,5);


//Неопределенные значения:
function foo(a, b) {
    // b ? (b = b) : (b = 5);
    if (!b) b = 5;
    console.log(b);
}
