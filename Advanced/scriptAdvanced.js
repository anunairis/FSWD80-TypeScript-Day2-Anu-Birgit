var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(name, model, constructionYear, fuelType, numberSeats, kilometers) {
        this.name = name;
        this.model = model;
        this.constructionYear = constructionYear;
        this.fuelType = fuelType;
        this.numberSeats = numberSeats;
        this.kilometers = kilometers;
    }
    Vehicles.prototype.price = function () {
        var price = Math.round((this.constructionYear - 2000) * this.numberSeats / this.kilometers * 30000);
        return price;
    };
    Vehicles.prototype.writeThis = function () {
        //for( let i of Vehicles){
        //console.log(i.name + i.price);
        var writeThis = "\n<div class = \"flex\"><p class = \"card-text\">Name:</p><p class = \"ts\">" + this.name + "</p></div>\n\t\t  <div class = \"flex\"><p class = \"card-text\">Model:</p><p class = \"ts\">" + this.model + "</p></div>\n\t\t  <div class = \"flex\"><p class = \"card-text\">Construction Year:</p><p class = \"ts\">" + this.constructionYear + "</p></div>\n\t\t  <div class = \"flex\"><p class = \"card-text\">Fuel Type:</p><p class = \"ts\">" + this.fuelType + "</p></div>\n\t\t  <div class = \"flex\"><p class = \"card-text\">Number of Seats:</p><p class = \"ts\">" + this.numberSeats + "</p></div>\n\t\t  <div class = \"flex\"><p class = \"card-text\">Kilometers:</p><p class = \"ts\">" + this.kilometers + "</p></div>";
        return writeThis;
    };
    ;
    return Vehicles;
}());
// Consider the inheritance concept
// Define 2 other Child classes and name them Motor and Truck
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(name, model, constructionYear, fuelType, numberSeats, kilometers, hp) {
        var _this = _super.call(this, name, model, constructionYear, fuelType, numberSeats, kilometers) || this;
        _this.hp = hp;
        return _this;
    }
    Motor.prototype.priceMotor = function () {
        var priceMotor = Math.round(_super.prototype.price.call(this) * (this.hp / 20));
        return priceMotor;
    };
    return Motor;
}(Vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name, model, constructionYear, fuelType, numberSeats, kilometers, loadArea) {
        var _this = _super.call(this, name, model, constructionYear, fuelType, numberSeats, kilometers) || this;
        _this.loadArea = loadArea;
        return _this;
    }
    Truck.prototype.priceTruck = function () {
        var priceTruck = Math.round(_super.prototype.price.call(this) * this.loadArea);
        return priceTruck;
    };
    return Truck;
}(Vehicles));
var opel = new Vehicles("Opel", "Vectra", 2016, "Diesel", 5, 30576);
console.log(opel.writeThis());
document.getElementById("opel").innerHTML = opel.writeThis();
var mercedes = new Vehicles("Mercedes", "S6", 2019, "Super", 6, 33987);
console.log(mercedes.price());
document.getElementById("mercedes").innerHTML = mercedes.writeThis();
var suzuki = new Motor("Suzuki", "kw10h90", 2019, "Super", 2, 52890, 90);
console.log(suzuki.priceMotor());
document.getElementById("suzuki").innerHTML = mercedes.writeThis();
var terrano = new Truck("terrano", "TH13", 2019, "Diesel", 4, 20789, 12);
console.log(terrano.priceTruck());
document.getElementById("terrano").innerHTML = mercedes.writeThis();
var array = [opel, mercedes, terrano, suzuki];
function showPrice(i, obj) {
    document.getElementsByClassName("Preis")[i].innerHTML = obj.price() + " EUR";
}
var btns = document.getElementsByClassName("btn");
var _loop_1 = function (i) {
    btns[i].addEventListener("click", function () { showPrice(i, array[i]); });
};
for (var i in btns) {
    _loop_1(i);
}
// Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production
// calculate the price once the user clicks on the button "show price" *use your dummy custom formula)
