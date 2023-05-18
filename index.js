const allFunctions = {
	title: '',
	screens: '',
	screenPrice: 0,
	adaptive: true,
	servicePecrentPrice: 0,
	service1: '',
	service2: '',
	servicePrice1: '',
	servicePrice2: '',
	servicePrice: '',
    fullPrice: 0,
    allServicePrices: 0,
    number: '',
    sale: 0,


	start: function () {
		allFunctions.asking();
		allFunctions.numberCheck();
		allFunctions.logger();
		allFunctions.getAllServicePrices();
		allFunctions.getFullPrice();
		allFunctions.rollback();
	},

	asking: function() {
		// do {
		// 	allFunctions.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
		// } while (allFunctions.title === null || allFunctions.title.trim() === "" || allFunctions.title.startsWith('1') || allFunctions.title.startsWith('2') || allFunctions.title.startsWith('3') || allFunctions.title.startsWith('4') || allFunctions.title.startsWith('5') || allFunctions.title.startsWith('6') || allFunctions.title.startsWith('7') || allFunctions.title.startsWith('8') || allFunctions.title.startsWith('9') || allFunctions.title.startsWith('0'))
		do {
			allFunctions.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
		} while (allFunctions.title === null || allFunctions.title.trim() === "" || /^[^0-9].*/.test(allFunctions.title) === false);
		
		do {
			allFunctions.screens = prompt('Какие типы экранов надо разработать?', "мобильный");
		} while (allFunctions.screens === null || allFunctions.screens.trim() === "")

		do {
			allFunctions.screenPrice = +prompt('Сколько будет стоить данная работа?', '10000');
		} while (!Number(allFunctions.screenPrice));

		allFunctions.adaptive = confirm('Нужен ли адаптив на сайте?');
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

	logger: function() {
		// for (let key in allFunctions) {
		// 	console.log(key + ': ' + allFunctions[key]);
		// }
		console.log(allFunctions.title);
		console.log(allFunctions.screens);
		console.log(allFunctions.adaptive);
		console.log('Дополнительная услуга 1: ' + allFunctions.service1 + ' по цене ' + allFunctions.servicePrice1 + ' рублей');
		console.log('Дополнительная услуга 2: ' + allFunctions.service2 + ' по цене ' + allFunctions.servicePrice2 + ' рублей');	  
	},


	getAllServicePrices: function () {
		return Number(allFunctions.servicePrice1) + Number(allFunctions.servicePrice2);
	},

	getFullPrice: function () {
		return allFunctions.screenPrice + allFunctions.getAllServicePrices();
	},

	// расчет скидки
	rollback: function () {
		allFunctions.fullPrice = Number(allFunctions.getFullPrice()); // добавляем строку с присвоением значения fullPrice
		console.log(allFunctions.getFullPrice());
		if (allFunctions.fullPrice >= 30000) {
			console.log('Даем скидку в 10%');
		} else if (allFunctions.fullPrice >= 15000) {
			console.log('Даем скидку в 5%');
		} else if (allFunctions.fullPrice >= 0) {
			console.log('Скидка не предусмотрена');
		} else {
			console.log('Что то пошло не так');
		}
	}
};

allFunctions.start();