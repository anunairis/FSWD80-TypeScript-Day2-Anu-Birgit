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
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
var Person = /** @class */ (function () {
    function Person(firstName, age, jobTitle) {
        this.firstName = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.name = function () {
        document.getElementById("result").innerHTML = "My name is " + this.firstName + " and I am " + this.age + " year old and I am a " + this.jobTitle + ".";
        return "My name is " + this.firstName + " and I am " + this.age + " year old and I am a " + this.jobTitle;
        // MUST BE RETURNED SO THAT YOY CN USE IT IN ANOTHER FUNCTION 
    };
    return Person;
}());
var anu = new Person("Anu", 29, "developer");
anu.name();
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var MoreInfo = /** @class */ (function (_super) {
    __extends(MoreInfo, _super);
    function MoreInfo(firstName, age, jobTitle, salary, location) {
        var _this = _super.call(this, firstName, age, jobTitle) || this;
        _this.salary = salary;
        _this.location = location;
        return _this;
    }
    MoreInfo.prototype.name2 = function () {
        document.getElementById("result2").innerHTML = _super.prototype.name.call(this) + " and I get " + this.salary + " every month, and I work in " + this.location + ".";
    };
    return MoreInfo;
}(Person));
var more = new MoreInfo("Anu", 29, "developer", 2000, "Vienna");
more.name2();
