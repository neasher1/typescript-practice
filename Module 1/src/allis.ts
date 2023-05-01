type CrushType = {
    name: string;
    age?: number;
    address:string;
    profession: string
}

const crush1:CrushType = {
    name:"Anika",
    age: 22,
    address: "Pabna",
    profession: "Web Dev"
}

const crush2:CrushType = {
    name:"Anushka",
    address: "Pabna",
    profession: "Web Dev"
}

type MarriedStatus = boolean;
const isMarried:MarriedStatus = true;

type CourseName = string;
const cousrName:CourseName = "Next Level Web";



type OperationType = (x:number, y:number)=>number;
const calculate = (num1:number, num2:number, operation:OperationType)=>{
    return operation(num1, num2);
} 

console.log(calculate(10,20,(x, y) => x + y));
console.log(calculate(10,20,(x, y) => x - y));