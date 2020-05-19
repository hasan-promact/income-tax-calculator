const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var name; var gender; var age; var income;
function init(){
	name = "";
	gender="";
	age="";
	income="";
	askName()
}
function askName(){
	rl.question('What is your name? ', (nameAns) => {	
		name = nameAns;
		askAge()
	});
}

function askAge(){
	rl.question('What is your age? ', (ageAns) => {
		age = ageAns
		askGender()
	});
}
function askGender(){
	rl.question('What is your gender? ', (genderAns) => {
		gender = genderAns;
		askIncome()
	});
}
function askIncome(){
	rl.question('How much you earn ? ', (incomeAns) => {
		income = incomeAns;
		calculateTax()
	});
}
function calculateTax(){
	var tax = 0;
	if(age > 80){
		if (income > 1000000) {
			tax = 100000 + (income - 1000000) * 0.3;
		} else if (income > 500000 && income < 1000000) {
			tax = (income - 500000) * 0.2;
		} else{
			tax = 0;
		}
	}else if(age< 80 && age > 60){
		if (income > 1000001) {
			tax = 110000 + (income - 1000000) * 0.3;
		} else if (income > 500001 && income < 1000000) {
			tax = 10000 + (income - 500000) * 0.2;
		} else if (income > 300001 && income < 500000) {
			tax = (income - 300000) * 0.05;
		} else{
			tax = 0;
		}
	}else{
		if (income < 500001) {
			tax = 0;
		} else if (income > 1500000) {
			tax = 187500 + (income - 1500000) * 0.3;
		} else if (income > 1250000) {
			tax = 125000 + (income - 1250000) * 0.25;
		} else if (income > 1000000) {
			tax = 75000 + (income - 1000000) * 0.2;
		} else if (income > 750000) {
			tax = 37500 + (income - 750000) * 0.15;
		} else if (income > 500000) {
			tax = 12500 + (income - 500000) * 0.1;
		} else if (income > 250000) {
			tax = (income - 250000) * 0.05;
		} else {
			tax = 0;
		}
	}
	var cessTax = tax + tax * 0.04;
	
	if(cessTax > 0){
		console.log("You need to pay "+cessTax+" as Tax")
	}else{
		console.log("You don't have to pay any tax")
	}
	recalculate()
	
}
function recalculate(){
	rl.question('Do you want to recalculate ? ', (ans) => {
		if(ans.toLowerCase() == "yes" || ans.toLowerCase() == "y" || ans.toLowerCase() == "ya"){
				init()
		}else{
			rl.close();
		}
	});
}
init()