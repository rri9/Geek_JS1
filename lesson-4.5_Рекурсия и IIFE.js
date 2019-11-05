//Нахождение факториала без рекурсии:
function factorial(start) {
    let value = 1;
    while (start != 1) {
        value *= start;
        start--;
    }
    return value;
}
console.log(factorial(5));

//Нахождение факториала С рекурсией:
function factorialRecursion(number) {
    if (number === 1 || number === 0) return 1;
    else {
        return number * factorialRecursion(number - 1);
    }
}
console.log(factorialRecursion(5));
//console.log(factorialRecursion(-3));  
    //ошибка - нужна проверка на отрицательные числа, или
    // if (number <= 1) return 1; //но математически это неверно!

/*IIFE (Immediately Invoked Function Expression)
  выполняется сразу же после того, как она была определена.
  или Self-Executing Anonymous Function   */
    //Варианты создания IIFE
(function() {
    console.log("Скобки вокруг функции");
})();

(function () {
    console.log("Скобки вокруг всего");
}());

!function () {
    console.log("Выражение начинается с побитового оператора NOT");
}();

+function () {
    console.log("Выражение начинается с анарного плюса");
}();

