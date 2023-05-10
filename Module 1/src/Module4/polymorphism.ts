class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return (Math.PI * this.radius * this.radius);
    }
}

class RectAngle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return (this.width * this.height);
    }
}

function getAreaOfShape(param: Shape) {
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10))
getAreaOfShape(new RectAngle(10, 12))






// class Person1 {
//     takeNap(): void {
//         console.log("I am sleeping 8 hours per day");
//     }
// }

// class Student1 extends Person1 {
//     takeNap(): void {
//         console.log("I am sleeping 7 hours per day");
//     }
// }
// class Developer extends Person1 {
//     takeNap(): void {
//         console.log("I am sleeping 5 hours per day");
//     }
// }

// function getNap(param: Person1) {
//     param.takeNap();
// }

// const p1 = new Person1();
// const p2 = new Student1();
// const p3 = new Developer();

// getNap(p1);
// getNap(p2);
// getNap(p3);