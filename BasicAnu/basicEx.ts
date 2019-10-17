// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
class Person { 
   firstName = ""; 
   age:number;
   jobTitle = ""   
constructor(firstName, age, jobTitle) { 
       this.firstName = firstName;
       this.age = age;
       this.jobTitle = jobTitle;
   }
name() {
       document.getElementById("result").innerHTML = `My name is ${this.firstName} and I am ${this.age} year old and I am a ${this.jobTitle}.`;
       return `My name is ${this.firstName} and I am ${this.age} year old and I am a ${this.jobTitle}`;
       // MUST BE RETURNED SO THAT YOY CN USE IT IN ANOTHER FUNCTION 
}
}
var anu = new Person("Anu", 29, "developer");
anu.name();

// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”

class MoreInfo extends Person {
   salary;
   location;
   constructor(firstName, age, jobTitle, salary, location) {
       super(firstName, age, jobTitle); 
       this.salary = salary;
       this.location = location;
}
   name2() { 
       document.getElementById("result2").innerHTML = `${super.name()} and I get ${this.salary} every month, and I work in ${this.location}.`;
   }
}
let more = new MoreInfo("Anu", 29, "developer", 2000, "Vienna");
more.name2();























