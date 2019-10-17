class Vehicle {
    constructor(name, model, kilometer, seats, fuel, prodYear) {
        this.name = "";
        this.model = "";
        this.fuel = "";
        this.name = name;
        this.model = model;
        this.kilometer = kilometer;
        this.seats = seats;
        this.fuel = fuel;
        this.prodYear = prodYear;
    }
    price() {
        let price = Math.round((this.prodYear * 2) * this.seats / this.kilometer * 400);
        return price;
    }
    car() {
        let writeToRow = `
  <div class="d-flex wrap-nowrap justify-content-between"><p class="card-text">Name:</p><p> ${this.name}</p></div>
  <div class="d-flex wrap-nowrap justify-content-between"><p class="card-text">Model:</p><p class = "ts"> ${this.model} </p></div>
  <div class="d-flex wrap-nowrap justify-content-between"><p class="card-text">Kilometers:</p><p class = "ts"> ${this.kilometer} </p></div>
  <div class="d-flex wrap-nowrap justify-content-between"><p class="card-text">Number of Seats:</p><p class = "ts"> ${this.seats} </p></div>
  <div class="d-flex wrap-nowrap justify-content-between"><p class="card-text">Fuel Type:</p><p class = "ts"> ${this.fuel} </p></div>
  <div class="d-flex wrap-nowrap justify-content-between"><p class="card-text">Construction Year:</p><p class = "ts"> ${this.prodYear}</p></div>
`;
        console.log(writeToRow);
        return writeToRow;
    }
}
class Motor extends Vehicle {
    constructor(name, model, kilometer, seats, fuel, prodYear, hp) {
        super(name, model, kilometer, seats, fuel, prodYear);
        this.hp = hp;
    }
    priceMotor() {
        let priceMotor = Math.round(super.price() * (this.hp / 30));
        return priceMotor;
    }
}
let x1 = new Vehicle("Audi", "A4", 100000, 5, "Petrol", 2016);
document.getElementById("audi").innerHTML = x1.car();
let x2 = new Vehicle("Opel", "Astra", 229999, 5, "Petrol", 2018);
document.getElementById("opel").innerHTML = x2.car();
let x3 = new Vehicle("Volkswagen", "Passat", 55000, 5, "Petrol", 2019);
document.getElementById("volks").innerHTML = x3.car();
let x4 = new Motor("Vronn", "Vivaro", 88888, 1, "Petrol", 2012, 80);
document.getElementById("suzuki").innerHTML = x4.car();
x1.car();
x2.car();
x3.car();
x4.car();
var array = [x1, x2, x3, x4];
function showPrice(i, obj) {
    document.getElementsByClassName("Preis")[i].innerHTML = obj.price() + " EUR";
}
var btns = document.getElementsByClassName("btn");
for (let i in btns) {
    btns[i].addEventListener("click", () => { showPrice(i, array[i]); });
}
