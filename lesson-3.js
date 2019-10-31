//Вторую цифру проверял у самого числа, а не у суммы трех предыдущих
const start = 10000;
const end = 150000;

let count = 0; //Количество чисел, удовлетворяющих условиям
for (let i = start; i <= end; i++) {
    let sum = i - 1 + (i - 2) + (i - 3); //сумма трех предыдущих чисел
    let str = i.toString(); //Преобразуем в строку для
    if (sum % 100 === 52 && str[1] == 2) {
        console.log(i);
        count++;
    }
}
console.log("Всего чисел: " + count);
