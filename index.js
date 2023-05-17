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


	start:  {
		asking: function() {
			allFunctions.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
			allFunctions.screens = prompt('Какие типы экранов надо разработать?', "мобильный");

			do {
				allFunctions.screenPrice = +prompt('Сколько будет стоить данная работа?', '10000');
			} while (!allFunctions.screenPrice);

			allFunctions.adaptive = confirm('Нужен ли адаптив на сайте?');
		}
	},

	logger: function() {
		for (let key in allFunctions) {
			console.log(key + ': ' + allFunctions[key]);
		}
		console.log(allFunctions.title);
		console.log(allFunctions.screens);
		console.log(allFunctions.screenPrice);
		console.log(allFunctions.adaptive);		  
	},


	getAllServicePrices: function () {
		return Number(allFunctions.servicePrice1) + Number(allFunctions.servicePrice2);
	},

	getFullPrice: function () {
		return allFunctions.screenPrice + allFunctions.getAllServicePrices();
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
	rollback: function () {
		allFunctions.fullPrice = Number(allFunctions.getFullPrice()); // добавляем строку с присвоением значения fullPrice
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

allFunctions.start.asking();
allFunctions.logger();
allFunctions.getAllServicePrices();
allFunctions.getFullPrice();
allFunctions.rollback();
allFunctions.numberCheck();
