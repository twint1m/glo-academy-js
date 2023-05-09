// const screensArray = screens.toLowerCase().split(" ");
// const screenPrice = 200;
// const rollback = 24;
// const fullPrice = 30000;
// const adaptive = true;
// console.log(typeof(fullPrice));
// console.log(typeof(adaptive));
// console.log(screens.length);
// console.log("Стоимость верстки экранов"+ " " + screenPrice + " " + "долларов");
// console.log("Стоимость разработки сайта"+ " " + fullPrice + " " + "долларов");
// console.log(screensArray);
// console.log(fullPrice * (rollback/100));
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let adaptive = confirm('Нужен ли адаптив на сайте?');
// дополнительные услуги
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');    
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

// расчет отката посреднику 
let servicePercentPrice = Math.ceil(fullPrice - 5000);
console.log(servicePercentPrice);



// расчет скидки
if (fullPrice >= 30000){
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice >= 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
}
