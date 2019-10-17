class Vehicles {
	name: string;
	model: string;
	constructionYear: number;
	fuelType: string;
	numberSeats: number;
	kilometers: number;
constructor(name, model, constructionYear, fuelType, numberSeats,kilometers){
	this.name = name;
	this.model = model;
	this.constructionYear = constructionYear;
	this.fuelType = fuelType;
	this.numberSeats = numberSeats;
	this.kilometers = kilometers;
}
price() {
	let price = Math.round((this.constructionYear - 2000) * this.numberSeats / this.kilometers * 30000);
	return price;
}
writeThis() {
	let writeThis =  `
<div class = "flex"><p class = "card-text">Name:</p><p class = "ts">` + this.name + `</p></div>
		  <div class = "flex"><p class = "card-text">Model:</p><p class = "ts">` + this.model + `</p></div>
		  <div class = "flex"><p class = "card-text">Construction Year:</p><p class = "ts">` + this.constructionYear + `</p></div>
		  <div class = "flex"><p class = "card-text">Fuel Type:</p><p class = "ts">` + this.fuelType + `</p></div>
		  <div class = "flex"><p class = "card-text">Number of Seats:</p><p class = "ts">` + this.numberSeats + `</p></div>
		  <div class = "flex"><p class = "card-text">Kilometers:</p><p class = "ts">` + this.kilometers + `</p></div>`
	return writeThis; 
};
}
class Motor extends Vehicles {
	hp: number;
constructor(name, model, constructionYear, fuelType, numberSeats,kilometers, hp) {
	super(name, model, constructionYear, fuelType, numberSeats,kilometers);
	this.hp = hp
}
 priceMotor() {
 	let priceMotor = Math.round(super.price() * (this.hp/ 20));
 	return priceMotor;
 }
}
class Truck extends Vehicles {
	loadArea: number;
	constructor(name, model, constructionYear, fuelType, numberSeats,kilometers, loadArea) {
	super(name, model, constructionYear, fuelType, numberSeats,kilometers);
	this.loadArea = loadArea
}
priceTruck() {
	let priceTruck = Math.round(super.price() * this.loadArea );
	return priceTruck
}
}
let opel = new Vehicles("Opel", "Vectra", 2016, "Diesel", 5, 30576;
console.log(opel.writeThis());
document.getElementById("opel").innerHTML = opel.writeThis();
let mercedes = new Vehicles("Mercedes", "S6", 2019, "Super", 6, 33987);
console.log(mercedes.price());
document.getElementById("mercedes").innerHTML = mercedes.writeThis();
let suzuki = new Motor("Suzuki", "kw10h90", 2019, "Super", 2, 52890, 90);
console.log(suzuki.priceMotor());
document.getElementById("suzuki").innerHTML = mercedes.writeThis();
let terrano = new Truck("terrano", "TH13", 2019, "Diesel", 4, 20789, 12);
console.log(terrano.priceTruck());
document.getElementById("terrano").innerHTML = mercedes.writeThis();
var array = [opel,mercedes,terrano,suzuki];
function showPrice(i,obj) {
  document.getElementsByClassName("Preis")[i].innerHTML = obj.price() + " EUR";
}
var btns = document.getElementsByClassName("btn");
for( let i in btns){
	btns[i].addEventListener("click",()=>{showPrice(i,array[i])});
}