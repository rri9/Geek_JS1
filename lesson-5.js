/************************************************
 Найдите самый дешевый билет из Москвы в Ниццу на осень 2018.
************************************************/
function searchTicket(e) {
    //Параметры запросов к серверу
    const apiIataUrl =
        "https://www.travelpayouts.com/widgets_suggest_params?q=";
    const apiIataMethod = "GET";
    const apiPricesUrl = "http://min-prices.aviasales.ru/calendar_preload?";
    const apiPricesMethod = "GET";
    let whereToAppend = document.getElementById("container");
    let answer = document.createElement("output");
    answer.className = "answer";
    answer.id = "answer";

    //Получаем данные запроса от пользователя:
    let originCity = document.TicketSearch.originCity.value;
    let destinationCity = document.TicketSearch.destinationCity.value;
    let depart_date = document.TicketSearch.departDateByUser.value;
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
        answer.innerHTML += "Ошибка запроса: " + requestErrorIata + "<br>";
    }
    //Обработка ответа
    let originIata = responseIata["origin"]["iata"];
    originIata = originIata.toUpperCase();
    let destinationIata = responseIata["destination"]["iata"];
    destinationIata = destinationIata.toUpperCase();
    //Формирование вывода:
    let whereToAppendIataOriginCity = document.getElementById("originCity");
    let whereToAppendIataDestinationCity = document.getElementById(
        "destinationCity"
    );
    //Удаляем предыдущий iata-код
    whereToAppendIataOriginCity.innerHTML = whereToAppendIataOriginCity.innerHTML.replace(
        whereToAppendIataOriginCity.textContent,
        ""
    );
    whereToAppendIataDestinationCity.innerHTML = whereToAppendIataDestinationCity.innerHTML.replace(
        whereToAppendIataDestinationCity.textContent,
        ""
    );

    whereToAppendIataOriginCity.insertAdjacentText("beforeend", originIata);
    whereToAppendIataDestinationCity.insertAdjacentText(
        "beforeend",
        destinationIata
    );

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
        answer.innerHTML += "Ошибка запроса: " + requestErrorPrices + "<br>";
    }
    //Обработка ответа
    let prices = [];
    let variantsCount = 5;
    for (let i of responsePrices["best_prices"]) {
        let n = 0;
        if (
            i["actual"] === true &&
            i["depart_date"] === depart_date &&
            n < variantsCount
        ) {
            prices[n] = i;
            n++;
        }
    }
    /*for (let i = 0; i < variantsCount; i++) {
            if (responsePrices["best_prices"][i]["actual"] === true) {
                prices[i] = responsePrices["best_prices"][i];
            } else i--;
        }*/

    // Формирование вывода на страницу:
    if (prices[0] !== undefined) {
        answer.innerHTML += `<h3>Первые ${variantsCount} вариантов:</h3>`;

        for (let i = 0; i < variantsCount; i++) {
            answer.innerHTML += `<div class="answerItem">Дата вылета: ${
                prices[i]["depart_date"]
            }<br>
    Количество пересадок: ${prices[i]["number_of_changes"]}<br>
    Стоимость билета: ${prices[i]["value"]} руб.</div>
    `;
        }
    } else answer.innerHTML += "Нет билетов по заданным параметрам";
    prevAnswer = document.getElementById("answer");
    if (prevAnswer) prevAnswer.remove();
    whereToAppend.append(answer);
    document.getElementById("originCityInput").value = originCity;
    document.getElementById("destinationCityInput").value = destinationCity;
    return false;
}
