//JSON - JavaScript Object Notation
//API - application programming interface

/* Пример: fixer.io/documentation */

const response = {
    success: true,
    timestamp: 1519296206,
    base: "EUR",
    date: "2019-11-03",
    rates: {
        AUD: 1.566015,
        CAD: 1.560132,
        CHF: 1.154727,
        CNY: 7.827874,
        GBP: 0.882047,
        JPY: 132.360679,
        USD: 1.23396
    }
};

const money = 1000; //Имеем валюты
const currency = "USD"; //Валюта
const euro = money / response["rates"][currency]; //В евро

console.log(`За ${money} ${currency} получим ${euro.toFixed(2)} EUR`);
