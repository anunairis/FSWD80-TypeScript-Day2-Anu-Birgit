class Vechicle { 
  name = "";
  model = ""; 
  kilometer:number;
  seats:number;
  fuel = "";
  prodYear:number;
constructor(name:string, model:string, kilometer, seats, fuel:string, prodYear) { 
  this.name = name;
  this.model = model;
  this.kilometer = kilometer;
  this.seats = seats;
  this.fuel = fuel;
  this.prodYear = prodYear;
}

car() {
  let writeToRow = `
  <div class="flex"><p class="card-text">Model:</p><p class = "ts"> ${this.model} </p></div>
  <div class="flex"><p class="card-text">Kilometers:</p><p class = "ts"> ${this.kilometer} </p></div>
  <div class="flex"><p class="card-text">Number of Seats:</p><p class = "ts"> ${this.seats} </p></div>
  <div class="flex"><p class="card-text">Fuel Type:</p><p class = "ts"> ${this.fuel} </p></div>
  <div class="flex"><p class="card-text">Construction Year:</p><p class = "ts"> ${this.prodYear}</p></div>
`
console.log(writeToRow);
return writeToRow;
}
}
var x1 = new Vechicle("Audi", "A4", 100000, 5, "Petrol", 2016); document.getElementById("audi").innerHTML = x1.car();
var x2 = new Vechicle("Opel", "Astra", 99999, 5, "Petrol", 2018); document.getElementById("opel").innerHTML = x2.car();
var x3 = new Vechicle("Volkswagen", "Passat", 55000, 5, "Petrol", 2019); document.getElementById("volks").innerHTML = x3.car();
var x4 = new Vechicle("Opel", "Vivaro", 88888, 5, "Petrol", 2012); document.getElementById("opel2").innerHTML = x4.car();

x1.car();
x2.car();
x3.car();
x4.car();