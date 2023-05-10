class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getIdentity(nameOfSchool: string): string {
        return `${this.name} is study ${nameOfSchool}`;
    }

}

class Student extends Person {

    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }

}

const student = new Student("Neasher", 23, "Pabna");
console.log(student.getIdentity("Pabna Engineering College"));

class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    takeClass(numOfClass: number): string {
        return `${this.name} will take ${numOfClass} today`;
    }
}


const teacher = new Teacher("Neasher", 23, "Pabna", "BSC");
console.log(teacher.takeClass(12));
console.log(teacher.getIdentity("Pabna Engineering College"));