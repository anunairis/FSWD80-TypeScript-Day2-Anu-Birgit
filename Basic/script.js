// Create a class constructor named Person that should hold information about name, age,  
// jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, jobTitle) {
        this.firstName = "";
        this.lastName = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.name = function () {
        return "Hello there, my name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
;
var thomas = new Person("Thomas", "Taylor", 32, "Web Developer");
document.write(thomas.name() + "<br><hr>");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, jobTitle, jobLocation, salary) {
        var _this = _super.call(this, firstName, lastName, age, jobTitle) || this;
        _this.jobLocation = jobLocation;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.basic2 = function () {
        return _super.prototype.name.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return Employee;
}(Person));
var franz = new Employee("Franz", "Mayer", 44, "Sales Representant", "Vienna", 2500);
document.write(franz.basic2());
// Create a class based on the Person class and add some other properties like salary, 
// jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”'
