// const screensArray = screens.toLowerCase().split(" ");
// const screenPrice = 200;
// const rollback = 24;

// console.log(screens.length);
// console.log("Стоимость верстки экранов"+ " " + screenPrice + " " + "долларов");
// console.log("Стоимость разработки сайта"+ " " + fullPrice + " " + "долларов");
// console.log(screensArray);
// console.log(fullPrice * (rollback/100));

// // объявление переменных



// let adaptive = confirm('Нужен ли адаптив на сайте?');

// // дополнительные услуги



// // расчет отката посреднику 

// console.log(servicePercentPrice);











// getRollbackMessage()
// getTitle(title);
// getServicePercentPrices(servicePercentPrice);



let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?'); 
let service2 = prompt('Какой дополнительный тип услуги нужен?');  
let servicePrice2 = +prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - 5000);
const adaptive = true;


console.log(typeof(fullPrice));
console.log(typeof(adaptive));


// расчет скидки
function getRollbackMessage() {
    if (fullPrice >= 30000){
        console.log('Даем скидку в 10%');
    } else if (fullPrice >= 15000) {
        console.log('Даем скидку в 5%');
    } else if (fullPrice >= 0) {
        console.log('Скидка не предусмотрена');
    } else {
        console.log('Что то пошло не так');
    }
}   


//  задание 1, функция getAllServicePrices
const servicesPrice = function getAllServicePrices() {
    return servicePrice1 + servicePrice2;
}
const allServicePrices = servicesPrice();
console.log(allServicePrices);

// задание 2, функция getFullPrice
function getFullPrice () {
    return screenPrice + allServicePrices
}
const fullPrices = getFullPrice();


// задание 3, функция getTitle
const getTitle = function(title) {
    let trimmedTitle = title.trim();
    let slicedLetter = trimmedTitle.slice(0, 1).toUpperCase();
    let worldLeft = trimmedTitle.slice(1).toLowerCase();
    let world = slicedLetter + worldLeft;
    console.log(world);
}
// задание 4, функция getServicePercentPrices
const getServicePercentPrices = function() {
    return servicePercentPrice
} 
const servicePrice = getServicePercentPrices();
console.log(servicePrice);

getRollbackMessage();
getTitle(title);









