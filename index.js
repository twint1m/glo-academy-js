let screens
let screenPrice
let title = prompt('Как называется ваш проект?');
let servicePrice1
let servicePrice2
let fullPrice = screenPrice + servicePrice1 + servicePrice2;


const adaptive = true;


console.log(typeof(fullPrice));
console.log(typeof(adaptive));


  
let service1 = prompt('Какой дополнительный тип услуги нужен?');
// проверка на число servicePrice1
do {
    servicePrice1 = prompt('Сколько это будет стоить?'); 
} while (isNaN(servicePrice1) || servicePrice1.trim() === "" || servicePrice1 === null);

let service2 = prompt('Какой дополнительный тип услуги нужен?');  
// проверка на число servicePrice2
do {
    servicePrice2 = prompt('Сколько это будет стоить?'); 
} while (isNaN(servicePrice2) || servicePrice2.trim() === "" || servicePrice2 === null);


//  4 урок,задание 1, функция getAllServicePrices
const servicesPrice = function getAllServicePrices() {
    return servicePrice1 + servicePrice2;
}

const allServicePrices = servicesPrice();
console.log(allServicePrices);

// 4 урок,задание 2, функция getFullPrice
function getFullPrice () {
    return screenPrice + allServicePrices
}
const fullPrices = getFullPrice();


// 4 урок,задание 3, функция getTitle
const getTitle = function(title) {
    let trimmedTitle = title.trim();
    let slicedLetter = trimmedTitle.slice(0, 1).toUpperCase();
    let worldLeft = trimmedTitle.slice(1).toLowerCase();
    let world = slicedLetter + worldLeft;
    console.log(world);
}

getRollbackMessage();
getTitle(title);



// 5 урок, задание 1, переменная циклом do while
do {
    screens = prompt('Какие типы экранов нужно разработать?');
    screenPrice = +prompt('Сколько будет стоить данная работа?');
} while (!screenPrice);


// 5 урок, задание 2, функция getServicePercentPrices


let servicePrice

const getServicePercentPrices = function() {
    do {
      servicePrice = prompt('Сколько это будет стоить?');
    } while (isNaN(servicePrice) || servicePrice.trim() === "" || servicePrice === null);
  }; 

  

getServicePercentPrices();

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