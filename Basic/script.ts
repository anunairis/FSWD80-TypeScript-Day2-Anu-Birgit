
// Create a class constructor named Person that should hold information about name, age,  
// jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”

class Person { 
   firstName = ""; 
   lastName = "";  
   age: number;
   jobTitle= "";

constructor(firstName, lastName, age, jobTitle) { 
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.jobTitle = jobTitle;
   }
   name() { 
       return `Hello there, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
   }
  
};

let thomas = new Person("Thomas", "Taylor", 32, "Web Developer");

document.write(thomas.name() + "<br><hr>");


class Employee extends Person {

	jobLocation;
	salary;

	constructor(firstName, lastName, age, jobTitle, jobLocation, salary) {
		super(firstName, lastName, age, jobTitle);
		this.jobLocation = jobLocation;
		this.salary = salary;
	}

	basic2() { 
       return `${super.name()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
}
}

let franz = new Employee("Franz", "Mayer", 44, "Sales Representant", "Vienna", 2500);

document.write(franz.basic2());


// Create a class based on the Person class and add some other properties like salary, 
// jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”'




