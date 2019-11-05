/************************************************
 Найдите самый дешевый билет из Москвы в Ниццу на осень 2018.
************************************************/
    //Параметры запросов к серверу
    const apiIataUrl =
        "https://www.travelpayouts.com/widgets_suggest_params?q=";
    const apiIataMethod = "GET";
    const apiPricesUrl = "http://min-prices.aviasales.ru/calendar_preload?";
    const apiPricesMethod = "GET";

    //Данные запроса от пользователя:
    let originCity = "Москва";
    let destinationCity = "Ницца";
    let depart_date = "2019-31-12";
    let one_way = true;

    /*********Определяем коды аэропортов:***********/
    //Создание запроса:
    let requestBodyIata = "Из%20" + originCity + "%20в%20" + destinationCity; //Текст запроса
    let requestIata = new XMLHttpRequest(); //Создаем экземпляр объект для запроса
    requestIata.open(apiIataMethod, apiIataUrl + requestBodyIata, false); //Формируем запрос
    requestIata.send();
    //Получение ответа:
    let responseIata; //Ответ сервера
    if (requestIata.status === 200) {
        //Запрос прошел успешно
        responseIata = requestIata.responseText; //Получаем строку ответа
        responseIata = JSON.parse(responseIata); //Преобразуем в объект
    } else {
        let requestErrorIata = requestIata.status + requestIata.statusText; //Вывод ошибки запроса
        console.log("Ошибка запроса: " + requestErrorIata);
    }
    //Обработка ответа
    let originIata = responseIata["origin"]["iata"];
    originIata = originIata.toUpperCase();
    let destinationIata = responseIata["destination"]["iata"];
    destinationIata = destinationIata.toUpperCase();

    /*********Находим цены:***********/
    //Создание запроса:
    let requestBodyPrices =
        `origin=${originIata}&destination=${destinationIata}` +
        `&depart_date=${depart_date}&one_way=${one_way}`;
    let requestPrices = new XMLHttpRequest(); //Создаем экземпляр объект для запроса
    requestPrices.open(
        apiPricesMethod,
        apiPricesUrl + requestBodyPrices,
        false
    );
    requestPrices.send();
    //Получение ответа:
    let responsePrices; //Ответ сервера
    if (requestPrices.status === 200) {
        //Запрос прошел успешно
        responsePrices = requestPrices.responseText; //Получаем строку ответа
        responsePrices = JSON.parse(responsePrices); //Преобразуем в объект
    } else {
        let requestErrorPrices =
            requestPrices.status + requestPrices.statusText; //Вывод ошибки запроса
        console.log("Ошибка запроса: " + requestErrorPrices);
    }
    //Обработка ответа
    let prices = [];
    let variantsCount = 5;
    for (let i = 0; i < variantsCount; i++) {
        if (responsePrices["best_prices"][i]["actual"] === true) {
            prices[i] = responsePrices["best_prices"][i];
        } else i--;
    }
// Формирование вывода на страницу:
    console.log(`<h3>Первые ${variantsCount} вариантов:</h3>`);
    
    for (let i = 0; i < variantsCount; i++) {
        console.log(`Дата вылета: ${prices[i]["depart_date"]}\n
    Количество пересадок: ${prices[i]["number_of_changes"]}\n
    Стоимость билета: ${prices[i]["value"]} руб.\n
    `);
    }