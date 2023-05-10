
//using interface to abstraction
interface IVheicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Car implements IVheicle {

    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) {

    }

    startEngine(): void {
        console.log("Starting Engine");
    }
    stopEngine(): void {
        console.log("stop engine");
    }
    move(): void {
        console.log("Move the car");
    }
    test(): void {
        console.log("Just for testing purpose");
    }
}

const car = new Car("Car", "Toyota", 2000);


//using abstract for abstraction
abstract class Car1 {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) {

    }
    abstract startEngine(): void;
    abstract stopEngine(): void;
    move(): void {
        console.log("Move the car");
    }
}

class bike extends Car1 {
    startEngine(): void {
        console.log("Starting Engine");
    }
    stopEngine(): void {
        console.log("stop engine");
    }
}

const a1 = new bike("Car", "Honda", 2000);
a1.stopEngine();