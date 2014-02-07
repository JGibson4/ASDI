
var favCar = {
	make: "Chevy",
	model: "Trailblazer SS",
	currentYear: 2014,
	year: 2006,
	age: function() {
		return favCar.currentYear - favCar.year;
	},
	info: function() {
		return "My current vehicle is a " + this.year +" " + this.make +" " +this.model + " it is about " + this.age() + " years old";
	}
	
};

var favCar1 = {
	make: "Audi",
	model: "A7",
	currentYear:2014,
	year: 2014,
	age: function() {
		return favCar.currentYear - favCar.year;
	},
	info: function() {
		return "My dream car is a " + this.year +" " + this.make + " " + this.model;
	}
	
};

var favCar2 = {
	make: "BMW",
	model: "745 LI",
	currentYear:2014,
	year: 2014,
	age: function() {
		return favCar.currentYear - favCar.year;
	},
	info: function() {
		return "I used to have a thing for the " + this.year + " " + this.make + " " +this.model;
	}
	
};

var favCar3 = {
	make: "Lexus",
	model: "GS 300",
	currentYear: 2014,
	year: 1993,
	age: function() {
		return favCar.currentYear - favCar.year;
	},
	info: function() {
		return "My first car crush was the " + this.year + " " + this.make + " " + this.model;
	}
	
};

var favCar4 = {
	make: "Voltswagon",
	model: "Passat TDI SE",
	currentYear: 2014,
	year: 2014,
	age: function() {
		return favCar.currentYear - favCar.year;
	},
	info: function() {
		return "I've just recently started to like the " + this.year + " " + this.make + " " + this.model;
	}
	
};

var favCar5 = new Object();
	favCar5.make = "Chevy";
	favCar5.model = "Chevelle SS 396";
	favCar5.currentYear = 2014;
	favCar5.year = 1968;
	favCar5.age = function() {
		return favCar5.currentYear - favCar5.year;
	};
	favCar5.info = function() {
		return "My favorite old school muscle car is the " + favCar5.year + " " + favCar5.make + " " +favCar5.model;
	};
	
	var favCar6 = new Object();
	favCar6.make = "Mustang";
	favCar6.model = "Shelby GT 500";
	favCar6.currentYear = 2014;
	favCar6.year = 1968;
	favCar6.age = function() {
		return favCar6.currentYear - favCar6.year;
	};
	favCar6.info = function() {
		return "The close second is the " + favCar6.year + " " + favCar6.make + " " +favCar6.model + " it is about " + favCar6.age() + " years old";
	};
	
	var favCar7 = new Object();
	favCar7.make = "Lamborghini";
	favCar7.model = "Countach";
	favCar7.currentYear = 2014;
	favCar7.year = 1974;
	favCar7.age = function() {
		return favCar7.currentYear - favCar7.year;
	};
	favCar7.info= function() {
		return "When I was younger my uncle had a picture of the " + favCar7.year + " " + favCar7.make + " " +favCar7.model + " it's about " + favCar7.age() + " years old";
	
};

var favCar8 = new Object();
	favCar8.make = "Lamborghini";
	favCar8.model = "LP 570-4 Superleggera Edizione Tecnica";
	favCar8.currentYear = 2014;
	favCar8.year = 2013;
	favCar8.age = function() {
		return favCar8.currentYear - favCar8.year;
	};
	favCar8.info = function() {
		return "If I hit the lottery I would get a " + favCar8.year + " "+ favCar8.make + " "+favCar8.model;
	
};

var favCar9 = new Object();
	favCar9.make = "Porsche";
	favCar9.model = "Panamera Turbo S Executive";
	favCar9.year = 2014;
	favCar9.age = function() {
		return favCar9.currentYear - favCar9.year;
	};
	favCar9.info = function() {
		return "Or Maybe the " + favCar9.year + " " + favCar9.make + " " +favCar9.model;
	};
	




var myArray = [favCar, favCar1, favCar2, favCar3, favCar4, favCar5, favCar5, favCar6, favCar7, favCar8, favCar9];

exports.data = myArray;