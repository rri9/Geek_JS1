//Тема урока - ветвления, функции еще не проходили, потому
//реализовал все просто и без излишеств
let fedorPoints = 0;
let petrPoints = 0;

//Выбор карт из колоды
//Получаем случайное число от (16-0.5) до (25+0.5) - чтобы вероятность
// выпадения чисел была равная (это связано с округлением)
//Считаем, что Федор ходит первым:
fedorPoints = Math.round(16 - 0.5 + Math.random() * (25 - 16 + 1));
petrPoints = Math.round(16 - 0.5 + Math.random() * (25 - 16 + 1));
fedorWinMessage = "Федор победил!";
petrWinMessage = "Петр победил!";

//Выбираем победителя:
fedorDiff = 21 - fedorPoints;
petrDiff = 21 - petrPoints;

if (fedorDiff < 0) {
    console.log(petrWinMessage); //перебор у первого игрока
} else if (petrDiff < 0) {
    console.log(fedorWinMessage); //перебор у второго игрока
} else if (fedorDiff < petrDiff) {
    console.log(fedorWinMessage);
} else if (fedorDiff > petrDiff) {
    console.log(petrWinMessage);
} else {
    console.log("Ничья!");
}
//Вывод результатов игры:
console.log(
    "Федор набрал " +
        fedorPoints +
        " очков(а), Петр набрал " +
        petrPoints +
        " очков(а)."
);
