const allFunctions = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    allServicePrices: 0,
    fullPrice: 0,
    servicePecrentPrice: 0,
    service1: '',
    service2: '',
    servicePrice1: '',
    servicePrice2: '',
    servicePrice: '',


    start: {
        asking: function () {
            allFunctions.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
            allFunctions.screens = prompt('Какие типы экранов надо разработать?', "мобильный");
        
            do {
                allFunctions.screenPrice = +prompt('Сколько будет стоить данная работа?', '10000');
            } while (!allFunctions.screenPrice);
        
            allFunctions.adaptive = confirm('Нужен ли адаптив на сайте?');
        }
    },
    

    allServicePrices: function getAllServicePrices() {
        return Number(allFunctions.servicePrice1) + Number(allFunctions.servicePrice2);
    },

    fullPrice: function getFullPrice () {
        return allFunctions.screenPrice + allFunctions.allServicePrices();
    },

    numberCheck: function() {
        allFunctions.service1 = prompt('Какой дополнительный тип услуги нужен?', "отправка формы");
        // проверка на число servicePrice1
        do {
            allFunctions.servicePrice1 = prompt('Сколько это будет стоить?', "5000"); 
        } while (isNaN(allFunctions.servicePrice1) || allFunctions.servicePrice1.trim() === "" || allFunctions.servicePrice1 === null);
    
        allFunctions.service2 = prompt('Какой дополнительный тип услуги нужен?', "SEO оптимизация");  
        // проверка на число servicePrice2
        do {
            allFunctions.servicePrice2 = prompt('Сколько это будет стоить?', "5000"); 
        } while (isNaN(allFunctions.servicePrice2) || allFunctions.servicePrice2.trim() === "" || allFunctions.servicePrice2 === null);
    },

    // расчет скидки
    rollback: function getRollbackMessage() {
        console.log(allFunctions.fullPrice);
        if (allFunctions.fullPrice >= 30000){
            console.log('Даем скидку в 10%');
        } else if (allFunctions.fullPrice >= 15000) {
            console.log('Даем скидку в 5%');
        } else if (allFunctions.fullPrice >= 0) {
            console.log('Скидка не предусмотрена');
        } else {
            console.log('Что то пошло не так');
        }
    },
}

allFunctions.start.asking();
allFunctions.allServicePrices();
allFunctions.fullPrice();
allFunctions.numberCheck();
allFunctions.rollback();