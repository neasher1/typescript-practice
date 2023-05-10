//key of guards
type AlPhanumeric = string | number;
function add(param1: AlPhanumeric, param2: AlPhanumeric): AlPhanumeric {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}

add('1', '2');
add(1, 2);

//in guard

type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: 'admin';
}

function getUser(user: NormalUserType | AdminUserType) {
    if ('role' in user) {
        return `My role is ${user.role}`;
    }
    else {
        return `I am simple user`;
    }
}

const normalUser: NormalUserType = { name: "Mr. X" };
const adminuser: AdminUserType = { name: "Mr. Y", role: "admin" };

console.log(getUser(normalUser));
console.log(getUser(adminuser));


//instance of guards

class Animal1 {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log("I am making sound");
    }
}

class Dog1 extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark() {
        console.log("I am barking");
    }
}


class Cat1 extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeCat() {
        console.log("Meaow Meoaw");
    }
}

function getAnimal(animal: Animal1) {
    if (animal instanceof Dog1) {
        animal.makeBark();
    }
    else if (animal instanceof Cat1) {
        animal.makeCat();
    }
    else {
        animal.makeSound();
    }
}

const animal2 = new Dog1("Jerman Bhai", "Dog");
getAnimal(animal2);
const animal3 = new Cat1("BD Biral", "Cat");
getAnimal(animal3);