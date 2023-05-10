// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log(`${this.name} says ${this.sound}`);
//     }
// }

// const dog = new Animal("German Shephard", "Dog", "Ghew Ghew");
// const cat = new Animal("BD Biral", "cat", "Meaow");

// dog.makeSound();
// cat.makeSound();

//using parameter properties

class Animal {
    // name: string;
    // species: string;
    // sound: string;

    //using parameter properties
    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("German Shephard", "Dog", "Ghew Ghew");
const cat = new Animal("BD Biral", "cat", "Meaow");

dog.makeSound();
cat.makeSound();